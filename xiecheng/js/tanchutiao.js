var leftLogo=document.getElementsByClassName("leftlogo")[0];
var leftFixed=document.getElementsByClassName("leftfixed")[0];
var closeBtn=document.getElementsByClassName("close")[0];
leftLogo.addEventListener("click",function (){
    leftLogo.style.left="-100%";
    leftLogo.style.transition="left 1s ease";
    leftFixed.style.left="0%";
    leftFixed.style.transition = "left 1s ease";
});
closeBtn.addEventListener("click",function (){
    leftFixed.style.left="-100%";
    leftFixed.style.transition="left 1s ease";
    leftLogo.style.left="0%";
    leftLogo.style.transition="left 1s ease";
    //leftLogo.style.-ms-transition="left 3s ease";
});
