document.querySelector(".contact__btn").addEventListener("mouseenter", 
function(){
    document.querySelector(".contact_a").style.cssText = "color:#000;font-weight: 400";
})

document.querySelector(".contact__btn").addEventListener("mouseleave", 
function(){
    document.querySelector(".contact_a").style.cssText = "color:aqua;font-weight: 300";
})

document.getElementById("submit").addEventListener("mouseenter", 
function(){
    document.querySelector(".submit_btn_text").style.cssText = "color:#000;font-weight: 400";
})

document.getElementById("submit").addEventListener("mouseleave", 
function(){
    document.querySelector(".submit_btn_text").style.cssText = "color:aqua;font-weight: 300";
})