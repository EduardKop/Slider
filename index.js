let slideIndex = 1;
const slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev-slide'),
    next = document.querySelector('.next-slide');



showSlides(slideIndex);

function showSlides(n){
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }

    slides.forEach((slide)=> slide.style.display = 'none');

    slides[slideIndex - 1].style.display="block";

}


function plusSlides(n){
    showSlides(slideIndex += n)
    }

    prev.addEventListener('click', ()=>{
        plusSlides(-1)
    })
    next.addEventListener('click', ()=>{
        plusSlides(+1)
        })