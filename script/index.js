window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  let form = document.getElementById("my-form");
  let button = document.getElementById("my-form-button");
  let status = document.getElementById("my-form-status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

const menuBtn = document.querySelector("#menu");
const ul = document.querySelector("#ul");

menuBtn.addEventListener("click", function () {
  if (menuBtn.src.match("/static/menu.svg")) {
    menuBtn.src = "/static/close.svg";
    ul.classList.toggle("hide");
    window.setTimeout(function () {
      ul.style.transform = "scale(1)";
    }, 0);
  } else {
    menuBtn.src = "/static/menu.svg";
    ul.style.transform = "scale(0)";
    window.setTimeout(function () {
      ul.classList.toggle("hide");
    }, 400);
  }
});

gsap.from(".perfect-plate-left", {
  scrollTrigger: ".perfect-plate-left", // start the animation when ".box" enters the viewport (once)
  x: -100,
  opacity: 0,
  delay: 0.3,
});
gsap.from(".perfect-plate-right", {
  scrollTrigger: ".perfect-plate-right", // start the animation when ".box" enters the viewport (once)
  x: 100,
  opacity: 0,
  delay: 0.3,
});
gsap.from(".devjobs-left", {
  scrollTrigger: ".devjobs-left", // start the animation when ".box" enters the viewport (once)
  x: -100,
  opacity: 0,
  delay: 0.3,
});
gsap.from(".devjobs-right", {
  scrollTrigger: ".devjobs-right", // start the animation when ".box" enters the viewport (once)
  x: 100,
  opacity: 0,
  delay: 0.3,
});
gsap.from(".ip-tracker-left", {
  scrollTrigger: ".ip-tracker-left", // start the animation when ".box" enters the viewport (once)
  x: -100,
  opacity: 0,
  delay: 0.3,
});
gsap.from(".ip-tracker-right", {
  scrollTrigger: ".ip-tracker-right", // start the animation when ".box" enters the viewport (once)
  x: 100,
  opacity: 0,
  delay: 0.3,
});
gsap.from(".shortly-left", {
  scrollTrigger: ".shortly-left", // start the animation when ".box" enters the viewport (once)
  x: -100,
  opacity: 0,
  delay: 0.3,
});
gsap.from(".shortly-right", {
  scrollTrigger: ".shortly-right", // start the animation when ".box" enters the viewport (once)
  x: 100,
  opacity: 0,
  delay: 0.3,
});
gsap.from(".photosnap-left", {
  scrollTrigger: ".photosnap-left", // start the animation when ".box" enters the viewport (once)
  x: -100,
  opacity: 0,
  delay: 0.3,
});
gsap.from(".photosnap-right", {
  scrollTrigger: ".photosnap-right", // start the animation when ".box" enters the viewport (once)
  x: 100,
  opacity: 0,
  delay: 0.3,
});
gsap.from(".construction-left", {
  scrollTrigger: ".construction-left", // start the animation when ".box" enters the viewport (once)
  x: -100,
  opacity: 0,
  delay: 0.3,
});
gsap.from(".construction-right", {
  scrollTrigger: ".construction-right", // start the animation when ".box" enters the viewport (once)
  x: 100,
  opacity: 0,
  delay: 0.3,
});

gsap.from(".hero-left", { duration: 0.5, x: -300, opacity: 0 });
gsap.from(".hero-right", { duration: 0.8, opacity: 0, delay: 0.7 });
gsap.from("nav", { duration: 0.8, opacity: 0, delay: 0.7 });
