// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.getElementsByTagName("main")[0];
const backButton = document.getElementById("back");
// TODO: Create a function that builds an element and appends it to the DOM
function buildAppend(post) {
  const element = document.createElement("article");
  element.innerHTML = `<h2>${post.title}</h2>
                        <blockquote>${post.content}</blockquote>
                        <p>${post.username}</p>`;
  element.classList.add(".card");
  mainElement.appendChild(element);
}
// TODO: Create a function that handles the case where there are no blog posts to display
// ie. function to see if user exists already and if they do, set them as the "currentUser", if not, display message.
function currentUser() {
  const usernameById = JSON.parse(localStorage.getItem("currentUser"));
  if (usernameById) {
    // console.log(usernameById);
    const usersPostData = JSON.parse(localStorage.getItem(usernameById));
    // retrieve posts if they are a user and return them
    // console.log("User Post Data", usersPostData);
    return usersPostData;
  } else {
    const element = document.createElement("article");
    element.innerHTML = `<h2>No Blog posts yet...</h2>`;
    element.classList.add("card");
    mainElement.appendChild(element);
  }
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList(userdata) {
  for (let i = 0; i < userdata.length; i++) {
    buildAppend(userData[i]);
  }
}
// TODO: Call the `renderBlogList` function
const userData = currentUser() ?? [];
renderBlogList(userData);

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener("click", function () {
  redirectPage("index.html");
});
