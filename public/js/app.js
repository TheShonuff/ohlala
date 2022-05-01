var myModal = document.querySelector(".modal-body");
const myModalTitle = document.querySelector(".modal-title");
var myInput = document.getElementById("myInput");
const buttons = document.querySelectorAll(".mod");
const submit = document.querySelector(".sub");
const subject = document.querySelector("#subject");

// myModal.addEventListener("shown.bs.modal", function () {
//   myInput.focus();
// });
// window.onload = () => {
//   var elem = document.querySelector(".grid");
//   var msnry = new Masonry(elem, {
//     // options
//     itemSelector: ".grid-item",
//     columnwidth: ".grid-sizer",
//     gutter: ".gutter-sizer",
//   });
// };

console.log(buttons);
console.log(submit);

const photoPackages = [
  saguaro,
  agave,
  cholla,
  mini,
  portrait,
  couples,
  maternity,
  smallFam,
  largeFam,
  cakeSmash,
  boudoir,
];
for (let i = 0; i <= buttons.length; i++) {
  let button = buttons[i];

  button.addEventListener("click", function () {
    if (buttons[i]) {
      photoPackages[i]();
    }
    // submit.addEventListener("submit", function (event) {
    //   console.log("Submit Clicked");
    // });
  });
}

const form = document.querySelector("form-horizontal");

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();

  let mail = new FormData(form);

  sendMail(mail);
});

const sendMail = (mail) => {
  fetch("/send", {
    method: "post",
    body: mail,
  }).then((response) => {
    return response.json();
  });
};

function saguaro() {
  console.log("The Saguaro Package was clicked");
  myModalTitle.innerHTML = "The Saquaro Package";
  subject.value = "The Saguaro Package";
}

function agave() {
  myModalTitle.innerHTML = "The Agave Package";
  console.log("The Agave package was clicked");
  subject.value = "The Agave Package";
}

function cholla() {
  console.log("The Cholla package was clicked");
  myModalTitle.innerHTML = "The Cholla Package";
  subject.value = "The Cholla Package";
}

function mini() {
  console.log("The Mini package was clicked");
  myModalTitle.innerHTML = "The Mini Package";
  subject.value = "Mini Session";
}

function portrait() {
  console.log("The Portrait package was clicked");
  myModalTitle.innerHTML = "The Portrait Session Package";
  subject.value = "Portrait Session";
}

function couples() {
  console.log("The Couples package was clicked");
  myModalTitle.innerHTML = "The Cholla Session Package";
  subject.value = "Couples Session";
}

function maternity() {
  console.log("The Maternity package was clicked");
  myModalTitle.innerHTML = "The Maternity Session Package";
  subject.value = "Maternity Session";
}

function smallFam() {
  console.log("The Small Family package was clicked");
  myModalTitle.innerHTML = "The Small Family Session";
  subject.value = "Small Family Session";
}

function largeFam() {
  console.log("The Large Family package was clicked");
  myModalTitle.innerHTML = "The Large Family Session";
  subject.value = "Large Family Session";
}

function cakeSmash() {
  console.log("The Cake Smash package was clicked");
  myModalTitle.innerHTML = "The Cake Smash Package";
  subject.value = "Cake Smash Session";
}

function boudoir() {
  console.log("The Boudoir package was clicked");
  myModalTitle.innerHTML = "The Boudoir Session Package";
  subject.value = "Boudoir Session";
}
