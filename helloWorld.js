const greetUser = (input) => {
    const inputFromUser = prompt("Please enter your name", input);
    
    if (inputFromUser != null) {
      document.getElementById("greet").innerHTML =
      "Hello " + inputFromUser + "!"
}
}
   
greetUser();
