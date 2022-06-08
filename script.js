const toggleSwitch = document.querySelector('input[type=checkbox]');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');

//Dark and Light images
function imageMod(color){
    image1.src = `images/coder${color}.svg`;
    image2.src = `images/idea${color}.svg`;
    image3.src = `images/proud${color}.svg`;
}

//Dark and Light mode
function toggleDarkLightMode(isLight){
    nav.style.backgroundColor = isLight?'rgb(255 255 255 / 50%)':'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor =isLight?'rgb(0 0 0 / 50%)':'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent =isLight?'Light Mode': 'Dark Mode';
    toggleIcon.children[1].classList.toggle('fa-sun');
}


//Switch Theme Dynamically
function switchTheme(change){
    if(change.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
         toggleDarkLightMode(false);
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        toggleDarkLightMode(true);
    }
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);