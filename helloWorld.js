/**
 * Printing the input from the user
 * @param {string} input
 */
const greetUser = (input) => {
  // prompting the user to enter their name
  const inputUser = prompt("Please enter your name", input);

  // checking if the input is not empty, thus printing the input from the user
  if (inputUser != null) {
    // selecting the span element using id
    document.getElementById("greet").innerHTML = "Hello " + inputUser + "!";
  }
};

greetUser();
