const btn1=document.querySelector(".btn1");
const int1=document.querySelector("#int1");

int1.addEventListener("click",display());
let display=(numb)=>{
    btn1.innerText +=numb;
}