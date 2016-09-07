function makeGreeting() {
  var user = document.getElementById('user');
  console.log("user is: " + user.value);
  var greeting = "Hi, " + user.value + "!";
  return greeting;
}

var user = document.getElementById('user');
user.addEventListener("focus", function() {
  var user = document.getElementById('user');
  user.value = "";
  var welcome = document.getElementById('welcome');
  welcome.textContent = "";
}, false);

var greetme = document.getElementById('greetme');

greetme.addEventListener("click", function() {
  var welcome = document.getElementById('welcome');
  welcome.textContent = "";
  welcome.textContent = makeGreeting();
}, false);
