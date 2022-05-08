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

var bagArr = JSON.parse(localStorage.getItem("bag")) || [];
console.log(bagArr);
display1(bagArr);
function display1(arr)
    {
        arr.map(function(el,index){
        var div = document.createElement("div");
        div.setAttribute("class","Prod")
        var img = document.createElement("img");
        img.setAttribute("src",el.avatar);
        img.style.width = "25%";
        img.style.marginLeft = "10px";
        var h3 = document.createElement("h3");
        h3.style.marginLeft = "55px"
        h3.innerText = el.first;
        var p1 = document.createElement("p");
       
        p1.innerText = el.type;
        p1.setAttribute("class","Des")
        var p2 = document.createElement("p");
        p2.setAttribute("class","DesCommon")
        p2.innerText = el.price;
       
        var p3 = document.createElement("P");
        p3.setAttribute("class","DesCommon")
        p3.innerText = el.size;
        var dlt = document.createElement("button");
        dlt.setAttribute("class","button")
        
        dlt.innerText = "Remove"
        dlt.addEventListener("click",function(){
           dltDiv(el,index)
        })

        div.append(img,h3,p1,p2,p3,dlt);
        document.querySelector("#main").append(div);
        });
        if(bagArr == []){
            console.log("Your Shopping Bag is empty.")
        }

    };
    function dltDiv(elem,index){
        bagArr.splice(index,1);
        localStorage.setItem("bag",JSON.stringify(bagArr));
        window.location.reload();

    }
   
