// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
let toggleId = document.querySelector("#toggle");

function toggleTheme() {
  let currentTheme = "light";

  if (localStorage.getItem("theme") !== undefined) {
    currentTheme = localStorage.getItem("theme");
    // console.log("The current theme is: ", currentTheme);

    if (currentTheme === "light") {
      // remove light class
      const themeElems = document.querySelectorAll(`.${currentTheme}`);
      for (let i = 0; i < themeElems.length; i++) {
        // console.log("Theme Element ->", themeElems[i]);
        themeElems[i].classList.remove(`${currentTheme}`);
      }
      // set theme to dark, save it locally, and add dark class to elements
      currentTheme = "dark";
      localStorage.setItem("theme", "dark");
      // swap icon
      toggleId.setAttribute("src", "./assets/icons/moon-icon.svg");

      for (let i = 0; i < themeElems.length; i++) {
        // console.log("Theme Element ->", themeElems[i]);
        themeElems[i].classList.add(`${currentTheme}`);
      }
    } else {
      // current theme has returned as dark, remove dark, add light to all elems.

      const themeElems = document.querySelectorAll(`.${currentTheme}`);
      for (let i = 0; i < themeElems.length; i++) {
        // console.log("Theme Element ->", themeElems[i]);
        themeElems[i].classList.remove(`${currentTheme}`);
      }
      // set and save to local storage
      currentTheme = "light";
      localStorage.setItem("theme", "light");
      // swap icon
      toggleId.setAttribute("src", "./assets/icons/sun-icon.svg");

      for (let i = 0; i < themeElems.length; i++) {
        // console.log("Theme Element ->", themeElems[i]);
        themeElems[i].classList.add(`${currentTheme}`);
      }
    }
  } else {
    console.log("The current theme is undefined: ", currentTheme); // undefined
  }
}

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

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = "";

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
