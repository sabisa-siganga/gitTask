
const greetUser = (input) => {
    const inputUser = prompt("Please enter your name", input);
    
    if (inputUser != null) {
      document.getElementById("greet").innerHTML =
      "Hello " + inputUser + "!"
}
}
   
greetUser();
