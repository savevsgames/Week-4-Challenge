// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
let toggleId = document.querySelector("#toggle");
const currentThemeElem = document.getElementById("theme-change");
// get the theme to load
var currentTheme = currentThemeElem.getAttribute("class");

// LOADS PAGE STORED IN LOCAL STORAGE IF AVAILABLE
// var savedTheme = getThemeFromStorage();

// console.log("Page load current theme grabbed ->", currentTheme);

// if (localStorage.getItem("theme") !== undefined) {
//   loadSavedTheme();
// }

function getThemeFromStorage() {
  currentTheme = localStorage.getItem("theme");
  console.log("Theme grabbed from storage - >", currentTheme);
  return currentTheme;
}

function toggleTheme() {
  if (currentTheme === "light") {
    const themeElems = document.querySelectorAll(`.${currentTheme}`);
    for (let i = 0; i < themeElems.length; i++) {
      // console.log("Theme Element ->", themeElems[i]);
      themeElems[i].classList.remove(`${currentTheme}`);
    }

    // set theme to dark, save it locally, and add dark class to elements
    currentTheme = "dark";
    localStorage.setItem("theme", "dark");
    console.log("The theme was toggled, now it is: ", currentTheme);
    // swap icon
    toggleId.setAttribute("src", "./assets/icons/moon-icon.svg");
    // change circle color
    document.documentElement.style.setProperty("--circle-color", "#4a1b80");

    for (let i = 0; i < themeElems.length; i++) {
      // console.log("Theme Element ->", themeElems[i]);
      themeElems[i].classList.add(`${currentTheme}`);
    }
  } else {
    // theme was dark
    const themeElems = document.querySelectorAll(`.${currentTheme}`);
    for (let i = 0; i < themeElems.length; i++) {
      // console.log("Theme Element ->", themeElems[i]);
      themeElems[i].classList.remove(`${currentTheme}`);
    }

    // set theme to dark, save it locally, and add dark class to elements
    currentTheme = "light";
    localStorage.setItem("theme", "light");
    console.log("The theme was toggled, now it is: ", currentTheme);
    // swap icon
    toggleId.setAttribute("src", "./assets/icons/sun-icon.svg");
    // change circle color
    document.documentElement.style.setProperty("--circle-color", "#ffb100");

    for (let i = 0; i < themeElems.length; i++) {
      // console.log("Theme Element ->", themeElems[i]);
      themeElems[i].classList.add(`${currentTheme}`);
    }
  }
}

function loadSavedTheme() {
  savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    const themeElems = document.querySelectorAll(".dark");

    for (let i = 0; i < themeElems.length; i++) {
      // console.log("Theme Element ->", themeElems[i]);
      themeElems[i].classList.remove("dark");
    }

    currentTheme = "light";
    localStorage.setItem("theme", "light");
    console.log("The theme is: ", savedTheme);
    // swap icon
    toggleId.setAttribute("src", "./assets/icons/sun-icon.svg");
    // change circle color
    document.documentElement.style.setProperty("--circle-color", "#ffb100");

    for (let i = 0; i < themeElems.length; i++) {
      // console.log("Theme Element ->", themeElems[i]);
      themeElems[i].classList.add(`${currentTheme}`);
    }
  } else {
    // theme was dark

    const themeElems = document.querySelectorAll(".light");
    console.log("Theme Elements->", themeElems);
    for (let i = 0; i < themeElems.length; i++) {
      // console.log("Theme Element ->", themeElems[i]);
      themeElems[i].classList.remove("light");
    }
    console.log("Theme Elements->", themeElems);
    // set theme to dark, save it locally, and add dark class to elements
    currentTheme = "dark";
    localStorage.setItem("theme", "dark");
    console.log("The theme is: ", savedTheme, currentTheme);
    // swap icon
    toggleId.setAttribute("src", "./assets/icons/moon-icon.svg");
    // change circle color
    document.documentElement.style.setProperty("--circle-color", "#4a1b80");

    for (let i = 0; i < themeElems.length; i++) {
      // console.log("Theme Element ->", themeElems[i]);
      themeElems[i].classList.add(`${savedTheme}`);
    }
  }
}

let redirectURL = "";
// ! Use the following function whenever you need to redirect to a different page

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

toggleId.addEventListener("click", toggleTheme);

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
// funcion that takes a username and an input and queries the localStorage
function readLocalStorage(username) {
  let userData;
  const user_id = `user_${username}`;
  const userDataString = localStorage.getItem(user_id);
  // if userData exits/is NOT undefined, then parse it. If it does not exist, return null.
  console.log("userDataString: ", userDataString);
  if (userDataString) {
    userData = JSON.parse(userDataString);
    console.log("userData: ", userData);
  } else {
    userData = [];
  }
  return userData;
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
//  function that takes a user's username and all their post data as inputs
// and then saves them to localStorage under a unique id based on their username
// prefixed with user_ to indicate the username value.
function storeLocalStorage(username, data) {
  const user_id = `user_${username}`;
  const user_data_String = JSON.stringify(data);
  localStorage.setItem(user_id, user_data_String);
  // set the currentUser to that user_id
  localStorage.setItem("currentUser", JSON.stringify(user_id));
}
