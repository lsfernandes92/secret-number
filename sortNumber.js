const smallerNumberElement = document.querySelector("#smaller-number")
const largerNumberElement = document.querySelector("#larger-number")

const smallerNumber = 1
const largerNumber = 10
const secretNumber = sortRandomNumber()

function sortRandomNumber() {
  return parseInt(Math.random() * largerNumber + 1)
}

console.log("Secret number: ", secretNumber)

smallerNumberElement.textContent = smallerNumber
largerNumberElement.textContent = largerNumber