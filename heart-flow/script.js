const body=document.querySelector("body");
body.addEventListener("mousemove",(event)=>{
    const xpos=event.offsetX;
    const ypos=event.offsetY;
    const spanE=document.querySelector("span");
    bodyE.style.left=xPos +"ps";
    bodyE.style.top=yPos +"ps";
    bodyE.appendChild(spanE);
})