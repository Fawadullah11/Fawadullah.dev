const changecolor = document.querySelectorAll(".navigation__item");
const sections = document.querySelectorAll("section"); // Each section of the page


window.addEventListener("scroll", () => {
  let currentSectionIndex = 0;

  // Loop through sections to find the one in view
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop; // Distance from top of page
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - 1250 && window.scrollY < sectionTop + sectionHeight) {
      currentSectionIndex = index; // Update index of the visible section
    }
  });

  // Highlight the corresponding navigation item
  clearactive();
  changecolor[currentSectionIndex].classList.add("navigation__item--active");
});

function clearactive() {
  changecolor.forEach((item) => {
    item.classList.remove("navigation__item--active");
  });
}
// link logic
let github = document.getElementById('link-1');
github.href = "https://github.com/Fawadullah11";
let mail = document.getElementById('link-2');
mail.href = "mailto:fawadullah1996@gmail.com";
let linkdin = document.getElementById("link-3");
linkdin.href = "https://www.linkedin.com/in/fawad-ullah-433064244/"
// Error logic//
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
document.querySelector("#submit").addEventListener("click", () => {
  let name = document.getElementById('form-name');
  let email = document.querySelector('.contact-form-email');
  let yourMessage = document.querySelector('.contact-form-message');
  const nameError = document.querySelector(".form-error-name");
  const emailError = document.querySelector(".form-error-email");
  const messageError = document.querySelector(".form-error-message");

  let isNameValid = true;
  let isEmailValid = true;
  let isMessageValid = true;

  if (name.value.trim() === "") {
    name.classList.add("input-error");
    isNameValid = false;
    nameError.style.display = "block";

  }
  else {
    name.classList.remove("input-error");
    nameError.style.display = "none"

  }
  if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
    email.classList.add( "input-error");
    isEmailValid=false;
    emailError.style.display="block"
  } else {
    email.classList.remove( "input-error");
    emailError.style.display="none"

  }

  if (yourMessage.value.trim() === "") {
    yourMessage.classList.add( "input-error");
    isMessageValid=false;
    messageError.style.display="block"
  } else {
    yourMessage.classList.remove("input-error");
    messageError.style.display="none"
  }
  // Submit Form if All Fields are Valid
  if (isNameValid && isEmailValid && isMessageValid) {
    document.querySelector(".contact-form").submit();

    // Reset Form After 1.5 Seconds
    setTimeout(() => {
      document.querySelector(".contact__form").reset();
    }, 1500);
  };
})
document.getElementById("hire").onclick = function () {
  window.location.href = "https://wa.me/03174724221",target="blank";
};


document.getElementById("resume").onclick = function () {
  window.location.href = "" ;
};


