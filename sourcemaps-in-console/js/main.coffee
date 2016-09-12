person = document.getElementById('person')

greet = (greeting) ->
  console.log(greeting + " " + person.value)

person.addEventListener("focus", -> person.value = "")

greetButton = document.getElementById('greet')

greetButton.addEventListener("click", () ->
  helloOption = document.querySelector("#hello")
  greeting = if helloOption.checked then "Hello" else "Goodbye"
  greet(greeting);
)
