const template = document.createElement("template");
template.innerHTML = `
    <style>
    .contact__btn{
        background-color: transparent;
        border-color: aqua;
        border-radius: 7px;
        width: 200px;
        margin: 30px;
        height: 60px;
        border: double;
        color: aqua;
        border-width: 2px;
        outline: none;
        transition: all 1s;
        cursor: pointer;
        margin-top: 2rem;
        position: relative;
        z-index: 1;
    }

    .contact__btn a {
        position: relative;
        z-index: 2;
        color: aqua;
        text-decoration: none;
        font-size: 1.3rem;
        height: 60px;
        width: 200px;
        font-weight: 300;
        background-color: transparent;
    }
    
    .contact__btn:after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: aqua;
        transition: all 0.45s;
        border-radius: 0px;
        z-index: 1;
        clip-path: polygon(0 0, 100% 0, 55% 100%, 0 100%);
    }
    
    .contact__btn:hover {
        border-color: transparent;
    }
    
    .contact__btn:hover::after{
        width: 100%;
        border-radius: 7px;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
    
    </style>
    <button class="contact__btn">
        <a class="contact_a" href="http://127.0.0.1:5500/"></a>
    </button>
`;

class SlideButton extends HTMLElement{
    constructor(){
        super();
        
        this.attachShadow({mode: "open"});
        const shadowRoot = this.shadowRoot;

        shadowRoot.appendChild(template.content.cloneNode(true));
        shadowRoot.querySelector("a").innerText = this.getAttribute("text")
        shadowRoot.querySelector("button").type = this.getAttribute("type")
        shadowRoot.querySelector("button").id = this.getAttribute("id")
        shadowRoot.querySelector("a").href = this.getAttribute("href")



        shadowRoot.querySelector(".contact__btn").addEventListener("mouseenter", function() {
            shadowRoot.querySelector("a").style.cssText = "color:#000;font-weight: 500"
        })

        shadowRoot.querySelector(".contact__btn").addEventListener("mouseleave", function() {
            shadowRoot.querySelector("a").style.cssText = "color:aqua;font-weight: 300"
        })
        
    }
}

window.customElements.define("slide-button", SlideButton)


