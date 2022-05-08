document.getElementById("help").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "flex";
})
document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none";
})

document.getElementById("Email").addEventListener("click",function(){
    document.querySelector(".popupEmail").style.display = "flex";
})

document.querySelector("#Remove").addEventListener("click",function(){
    document.querySelector(".popupEmail").style.display = "none";
})