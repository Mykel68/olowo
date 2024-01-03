// document.addEventListener('DOMContentLoaded', () => {
//     "use strict";
  
    /**
     * Preloader
     */
  
// const preloader = document.querySelector('#preloader');
// if (preloader) {
//   window.addEventListener('load', () => {
//     preloader.remove();
//   });
// }
// const selectHeader = document.querySelector('#header');
// if (selectHeader) {
//   document.addEventListener('scroll', () => {
//     window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
//   });
// }

AOS.init({
once:true,
});


let mybutton = document.getElementById("myBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

mybutton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

var counter =1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
    counter = 1;
}
}, 5000);


const text = document.querySelector('.text');
const bg = document.querySelector('.blur-img');

let load = 0;
let int = setInterval(blurring, 30);

function blurring(){
    load++;
    if(load > 99){
        clearInterval(int);
    }
    text.innerHTML = load + '%';
    text.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};


const testimonials = [
  {
    name: "-Micheal",
    photoUrl:"assets/img/testimonial/images.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Culpa, harum quibusdam quas, nemo esse quam ipsum, iure qui dolores veniam vitae expedita provident earum ex."
  },
  {
    name: "-Mike",
    photoUrl: "assets/img/testimonial/images_002.jpg",
    text: "This is unbeliveable but i really enjoyed the wares elit.Culpa, harum quibusdam quas, nemo esse quam ipsum, iure qui dolores veniam vitae expedita provident earum ex."

  },
  {
    name: "-Mykel",
    photoUrl: "assets/img/testimonial/images_003.jpg",
    text: "Great! this is lovely elit.Culpa, harum quibusdam quas, nemo esse quam ipsum, iure qui dolores veniam vitae expedita provident earum ex."

  }

];


const imgEl = document.querySelector(".img")
const textEl = document.querySelector(".texts")
const usernameEl = document.querySelector(".username")


let idx=0;

    UpdateTestimonials()


function UpdateTestimonials(){
    const{name, photoUrl, text} = testimonials [idx];
    imgEl.src = photoUrl;
    textEl.innerHTML = text;
    usernameEl.innerHTML = name;
    idx++ 

      if(idx === testimonials.length){
        idx = 0
      }
    

    setTimeout(()=>{
      UpdateTestimonials()
    },3500)
}
