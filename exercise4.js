var userInput = "((3plus5minus2)dividedby2)multipliedby4"
let sum = 0
userInput = userInput.replaceAll("plus","+")
userInput=userInput.replaceAll("minus","-")
userInput =  userInput.replaceAll("dividedby","/")
userInput = userInput.replaceAll("multipliedby", "*")
sum = parseInt(eval(userInput))
console.log(sum);