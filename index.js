 window.onscroll = function() {sticky_nav()}; //onscroll: call a function on window being scrolled

var navbar = document.getElementById("nav");
const technNav = document.getElementById('nav-list-one');
const commuNav = document.getElementById('nav-list-two');
const aboutiNav = document.getElementById('nav-list-three');
const drop = document.getElementById('dropdown');

var sticky = 100;

function sticky_nav() {
    if (window.pageYOffset >= sticky) { //pageYOffset: returns the pixels a document has scrolled from the upper left corner of the window.
      navbar.classList.add("sticky");
      technNav.style.display='none';
      commuNav.style.display='none';
      aboutiNav.style.display='none';
      drop.style.display='block';
    } else {
      navbar.classList.remove("sticky");
      technNav.style.display='inline-block';
      commuNav.style.display='inline-block';
      aboutiNav.style.display='inline-block';
      drop.style.display='none';
    }
}

document.addEventListener("DOMContentLoaded", function () {
  const scrollRight = document.getElementById("slideRight");
  const scrollLeft = document.getElementById("slideLeft");
  const flexbox = document.getElementById("overflow");

  scrollRight.addEventListener("click", function () {
      flexbox.scrollBy(390, 0);
  });

  scrollLeft.addEventListener("click", function () {
      flexbox.scrollBy(-390, 0);
  });
});



function simulateLoading() {
  let progress = 0;
  const progressBar = document.getElementById('loading-progress');
  const mainContent = document.querySelector('.main-content');

  const interval = setInterval(() => {
      progress += 1;
      progressBar.textContent = progress;

      if (progress === 100) {
          clearInterval(interval);
          mainContent.style.display = 'block'; 
          document.querySelector('.loading-screen').style.display = 'none'; 
      }
  }, 50); 
}

window.addEventListener('load', simulateLoading);

function showDivOne() {
  const newDivOne = document.getElementById('tech');
  newDivOne.style.display = 'block';
}

function hideDivOne() {
  const newDivOne = document.getElementById('tech');
  newDivOne.style.display = 'none';
}

function showDivTwo() {
  const newDivTwo = document.getElementById('com');
  newDivTwo.style.display = 'block';
}

function hideDivTwo() {
  const newDivTwo = document.getElementById('com');
  newDivTwo.style.display = 'none';
}

function showDivThree() {
  const newDivThree = document.getElementById('about');
  newDivThree.style.display = 'block';
}

function hideDivThree() {
  const newDivThree = document.getElementById('about');
  newDivThree.style.display = 'none';
}

function showNav () {
  const technNav = document.getElementById('nav-list-one');
  const aboutnNav = document.getElementById('nav-list-three');
  const commnNav = document.getElementById('nav-list-two');
  commnNav.style.display='inline-block';
  technNav.style.display='inline-block';
  aboutnNav.style.display='inline-block';
}

function hideNav () {
  const technNav = document.getElementById('nav-list-one');
  const aboutnNav = document.getElementById('nav-list-three');
  const commnNav = document.getElementById('nav-list-two');
  commnNav.style.display='none';
  technNav.style.display='none';
  aboutnNav.style.display='none';
} 

const techNav = document.getElementById('nav-list-one');
const commNav = document.getElementById('nav-list-two');
const aboutNav = document.getElementById('nav-list-three');
const dropdown = document.getElementById('dropdown');
const techDiv = document.getElementById('tech');
const comDiv = document.getElementById('com');
const aboDiv = document.getElementById('about');

techNav.addEventListener('mouseover',showDivOne);
techDiv.addEventListener('mouseover',showDivOne);
commNav.addEventListener('mouseover',showDivTwo);
comDiv.addEventListener('mouseover',showDivTwo);
aboutNav.addEventListener('mouseover',showDivThree);
aboDiv.addEventListener('mouseover',showDivThree);
dropdown.addEventListener('mouseover',showDivOne);
dropdown.addEventListener('mouseover',showNav);
techDiv.addEventListener('mouseout',hideDivOne);
comDiv.addEventListener('mouseout',hideDivTwo);
aboDiv.addEventListener('mouseout',hideDivThree);
