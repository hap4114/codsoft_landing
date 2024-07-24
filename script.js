let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButton = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');

var tl = gsap.timeline();
tl.from(".logo", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5
})
.from("nav a", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.3  
});
nextButton.onclick = function()
{
    showSlider('next');
}

prevButton.onclick = function()
{
    showSlider('prev');
}

let unAcceptClick;
const showSlider = (type) =>{
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('prev','next');
    let items = document.querySelectorAll('.carousel .list .item');
    if (type == 'next')
    {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next')
    }
    else
    {
        let positionLast = items.length-1;
        listHTML.prepend(items[positionLast]);
        carousel.classList.add();
        carousel.classList.add('prev')
    }
    unAcceptClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
        },2000)
}

seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}


