const slides=document.querySelectorAll(".slides img");
let slideIndex=0;
let intervalId=null;

//intializeslider();
document.addEventListener("DOMContentLoaded",intializeslider);


function intializeslider(){
    if(slides.length>0){
 slides[slideIndex].classList.add("displaySlide");
intervalId=setInterval(nextS,5000);


}
}

function showSlide(index){
if(index>=slides.length){
    slideIndex=0;
}
else if(index<0){
    slideIndex=slides.length-1;
}




    slides.array.forEach(slide => {
        slide.classList.remove("displaySlide");
        
    });
   slides[slideIndex].classList.add("displaySlide");


}

function prevS(){
    clearInterval(intervalId);
    slideIndex--;
showSlide(slideIndex);


}

function nextS(){
slideIndex++;
showSlide(slideIndex);
}