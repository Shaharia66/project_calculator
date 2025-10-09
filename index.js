const btn1=document.querySelector(".btn1");
const int1=document.querySelector("#int1");

int1.addEventListener("click",display(btn1.value));
let display=(numb)=>{
    btn1.innerText +=numb;
}
const btn2=document.querySelector(".btn2");

