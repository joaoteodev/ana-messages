const inputName = document.querySelector(".inputName");
const buttonStart = document.querySelector(".buttonStart");
const mainTitle = document.querySelector(".mainTitle");
const subTitle = document.querySelector(".subTitle");
const kuromi = document.querySelector(".kuromi");
const boxImages = document.querySelector(".boxImages");
const images = document.querySelectorAll(".imgScreenshot");

let isFirstName = true;
let attempts = 0;

function validateName(name, nameExpected) {
  let nameCaps = name.toUpperCase();
  if (nameCaps == nameExpected) {
    return true;
  }
}

function clearInput() {
  inputName.value = "";
}

function updateScreen() {
  inputName.style.display = "none";
  buttonStart.style.display = "none";
  subTitle.style.display = "none";
  mainTitle.textContent = "I like you more than I can describe...";
  kuromi.setAttribute("src", "../images/kuromi-2.png");

  setTimeout(() => {
    boxImages.style.top = 0;
    setTimeout(() => {
      handleScroll();
    }, 2000);
  }, 3000);
}

function handleInput(e) {
  if (e.key == "Enter") {
    if (attempts == 2) {
      alert("Você não deveria estar acessando esse site!!!");
      inputName.disabled = true;
      buttonStart.disabled = true;
      inputName.style.cursor = "not-allowed";
      buttonStart.style.cursor = "not-allowed";
      mainTitle.textContent = "Get out of this site right now!!!".toUpperCase();
      kuromi.setAttribute("src", "../images/kuromi-3.png");
      return false;
    }

    isFirstName ? handleFirstName() : handleSecondName();
  }
}

function handleFirstName() {
  let nameIsAna = validateName(inputName.value, "ANA");
  const phrase = "Please insert your second name:";

  if (nameIsAna) {
    alert(
      "Very well, Ana. But before we go, I need you to confirm your identity."
    );

    subTitle.textContent = phrase;
    inputName.placeholder = phrase;

    isFirstName = false;
    clearInput();
  } else {
    alert("It seems to me that you shouldn't be accessing this site...");
    attempts += 1;
    clearInput();
  }
}
function handleSecondName() {
  let nameIsGabriely = validateName(inputName.value, "GABRIELY");

  if (nameIsGabriely) {
    alert("So it is really you... I hope you enjoy :)");
    clearInput();
    updateScreen();
  } else {
    alert("You are a Ana, but you're not the right Ana.");
    attempts += 1;
    clearInput();
  }
}

function handleClick() {
  handleInput({ key: "Enter" });
}

function handleScroll() {
  images.forEach(el => {
    let elTop = el.getBoundingClientRect().top;

    if (elTop < window.innerHeight - 150) {
      el.classList.add("animate");
    }
  });
}

inputName.addEventListener("keypress", handleInput);
buttonStart.addEventListener("click", handleClick);
// updateScreen();

boxImages.addEventListener("scroll", function () {
  handleScroll();
});
