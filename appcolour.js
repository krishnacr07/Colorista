let btn = document.querySelector("button");
let box=document.querySelector(".innercard");
let text=document.querySelector("p");

btn.addEventListener("click",function(){
    let randcolor=randomcolour();
    box.style.backgroundColor=randcolor;
    text.innerText=`${randcolor}`;
});


function randomcolour(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    return`rgb(${red},${green},${blue})`;
}