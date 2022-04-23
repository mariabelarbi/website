$(document).ready(function () {
  $(".owl-carousel").owlCarousel({items:4,nav:true});
});
const navbar = { 
  button : "",

  nav:document.querySelector(".main-nav")
};
const schedule = {
  schedule:document.querySelector("#Schedule"),
  buttons: document.querySelectorAll(".schedule-nav a"),
days: document.querySelectorAll(".schedule-day"),
};
function hideDays(){
  schedule.days.forEach((elm) => {
    elm.classList.remove("active");
  });
  schedule.buttons.forEach((elm) => {
    elm.classList.remove("active");});
}

schedule.buttons.forEach(function(elm,i){
elm.onclick = function () {
  hideDays();
  schedule.days[i].classList.add("active");
  

};
});
function scrollHandler(e){if(window.pageYOffset) navbar.nav.classList.add("fixed")
else navbar.nav.classList.remove("fixed");
console.dir(schedule.schedule.offsetTop - schedule.schedule.offsetHeight < window.pageYOffset);}
document.onscroll = scrollHandler;

scrollHandler();

mainnanv = document.getElementsByClassName("main-nav")[0],
    hamburger = document.getElementsByClassName("hamburger")[0],
    mainnavelements = document.getElementsByClassName("main-nav-elements")[0],
    links = document.querySelectorAll(".main-nav-elements a");
links.forEach((elm) => {
    elm.onclick = function () {
        mainnavelements.classList.remove("desc");
    };});
hamburger.onclick = function () {
    mainnavelements.classList.toggle("desc");

    
};
//modals script
REGISTRATIONS = {
  btns: document.querySelectorAll('[href="#REGISTRATIONS"]'),
  register: document.querySelector("#REGISTER"),
  modal: document.getElementById("REGISTRATIONS"),
  form: document.querySelectorAll("#REGISTRATIONS form [name]"),
  close: document.querySelector("#REGISTRATIONS .close"),
  data: {},
}
REGISTRATIONS.close.onclick = function () {
  REGISTRATIONS.modal.classList.remove("open");
};
REGISTRATIONS.register.onclick = function Register() {
  for (let i = 0; i < REGISTRATIONS.form.length; i++) {
      REGISTRATIONS.data[REGISTRATIONS.form[i].name] = REGISTRATIONS.form[i].value;
  }
  let { done } = Req("/api/participate", REGISTRATIONS.data);
  done.then(() => {
      REGISTRATIONS.modal.classList.remove("open");
  }).catch(console.error);
};
function RegisterOpen() {
  REGISTRATIONS.modal.classList.add("open");
}
for (let i = 0; i < REGISTRATIONS.btns.length; i++) {
  const btn = REGISTRATIONS.btns[i];
  btn.onclick = RegisterOpen;
}