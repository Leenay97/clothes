let button = document.querySelector('.button');
let color = document.querySelector('.color');
let clothes = document.querySelector('.clothes');
let random = Math.floor(Math.random()*11+1);
let random1 = Math.floor(Math.random()*11+1);
color.style.backgroundImage = `url('colors/${random}.png')`;
clothes.style.backgroundImage = `url('imgs/${random1}.jpg')`;

button.addEventListener('click', (e)=>{
    random = Math.floor(Math.random()*11+1);
    random1 = Math.floor(Math.random()*16+1);
    color.style.backgroundImage = `url('colors/${random}.png')`;
    clothes.style.backgroundImage = `url('imgs/${random1}.jpg')`;

});