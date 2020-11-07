//slider
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const text = document.querySelectorAll(".text_holder");
const blur = document.querySelector(".blur");
const background = document.querySelectorAll(".background_holder");

slides.forEach(function(slide,index){
    slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener('click', function() {
    counter++;
    slider();
});
prevBtn.addEventListener('click', function() {
    counter--;
    slider();
});

function slider(){
    if (counter === slides.length) {
        counter = 0;
    } 
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
};