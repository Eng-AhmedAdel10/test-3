// setup
const arrowUp=document.getElementById("arrowUp");

window.onload=()=>{
    if(document.documentElement.scrollTop === 0)
    {
        arrowUp.style.display="none";
    }
}

window.onscroll=()=>{
    if(document.documentElement.scrollTop > 20)
    {
        arrowUp.style.display="block";
    }
    else
    {
        arrowUp.style.display="none";
    }
}

arrowUp.onclick=()=>{
    document.documentElement.scrollTop=0;
}