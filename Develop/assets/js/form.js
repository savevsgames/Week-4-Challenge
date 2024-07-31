// TODO: Create a variable that selects the form element

const formEl = document.getElementById("form");
const submit = document.getElementById("submit");
const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const errorMsg = document.getElementById("error");

// TODO: Create a function that handles the form submission.
function createPost(event) {
  event.preventDefault();
  // check the input elements for valid data
  if (
    usernameInput.value !== "" &&
    titleInput.value !== "" &&
    contentInput.value !== ""
  ) {
    // set the elements
    const post = {
      username: usernameInput.value,
      title: titleInput.value,
      content: contentInput.value,
    };

    console.log(post.username);
    // Grab the form data and store it in local storage,
    // - if null, then set to an empty array
    const returnedUserData = readLocalStorage(post.username) ?? [];

    console.log(returnedUserData);
    // push the data to the user's returned array of post objects
    returnedUserData.push(post);
    storeLocalStorage(post.username, returnedUserData);
    // then redirect to the blog page using the `redirectPage` function.
    redirectPage("blog.html");
  } else {
    // If the form is submitted with missing data, display an error message to the user.

    errorMsg.textContent = "Please complete the form.";
  }
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
submit.addEventListener("click", createPost);
