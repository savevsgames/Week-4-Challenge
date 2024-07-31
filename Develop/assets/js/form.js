// TODO: Create a variable that selects the form element

const formEl = document.getElementById("form");
const submit = document.getElementById("submit");
const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");

//  function that takes a user's username and all their post data as inputs
// and then saves them to localStorage under a unique id based on their username
// prefixed with user_ to indicate the username value.
function saveUsernameData(username, data) {
  const user_id = `user_${username}`;
  const user_data_String = JSON.stringify(data);
  localStorage.setItem(user_id, user_data_String);
}
// funcion that takes a username and an input and queries the localStorage
// it will return
function getUsernameData(username) {
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

function redirectPage() {
  window.location.href = "blog.html";
}

// TODO: Create a function that handles the form submission.
function createPost(event) {
  event.preventDefault();
  // check the input elements for valid data
  if (usernameInput !== "" && titleInput !== "" && contentInput !== "") {
    // set the elements
    const post = {
      username: usernameInput.value,
      title: titleInput.value,
      content: contentInput.value,
    };

    console.log(post.username);
    // Grab the form data and store it in local storage,
    // - if null, then set to an empty array
    const returnedUserData = getUsernameData(post.username) ?? [];

    console.log(returnedUserData);
    // push the data to the user's returned array of post objects
    returnedUserData.push(post);
    saveUsernameData(post.username, returnedUserData);
    // then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
    // redirectPage();
  } else {
    console.log("Please complete the form.");
  }
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
submit.addEventListener("click", createPost);
