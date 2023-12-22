let selectfield= document.getElementById("select-field")
let selecttext=document.getElementById("select-text");
let list=document.getElementById("list");
let arrowicon=document.getElementById("arrowicon");
let options=document.getElementsByClassName("options");

selectfield.addEventListener("click",function(){
    list.classList.toggle("hide")
    arrowicon.classList.toggle("rotate")
})


for (option of options){  
    option.onclick=function(){
        selecttext.innerHTML=this.textContent;
        list.classList.toggle("hide")
        arrowicon.classList.toggle("rotate")
    }
}