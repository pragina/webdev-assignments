let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // Add your code here

  let username = form.elements.Username.value;
  let email = form.elements.Email.value;
  let newsletter = form.elements.newsletter.value;
  let datevalue = form.elements.Date.value;
  let password = form.elements.Password.value;

  console.log("========= Form Submission =========");

  if (
    username == "" &&
    email == "" &&
    newsletter == "" &&
    datevalue == "" &&
    password == ""
  ) {
    console.log("You must enter some data to submit this form");
  } else {
    if (username !== "") {
      console.log("Username: ", username);
    } else {
      console.log("Username: no submission");
    }
    if (email !== "") {
      console.log("Email: ", email);
    } else {
      console.log("Email: no submission");
    }
    if (newsletter !== "") {
      console.log("Newsletter: Yes");
    } else {
      console.log("Newsletter: no submission");
    }
    if (datevalue !== "") {
      console.log("Date: ", datevalue);
    } else {
      console.log("Date: no submission");
    }
    event.preventDefault();
  }
}
