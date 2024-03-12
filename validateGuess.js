const divErrorMessage = document.createElement("div")

function validateGuess(guess) {
  const number = +guess

  if (isText(number)) {
    divErrorMessage.innerHTML += `<div>The guess must be a number.</div>`
    divGuess.append(divErrorMessage)
    return
  }

  if (notBetweenLimits(guess)) {
    divErrorMessage.innerHTML += `
      <div>
        The number is not between limits. 
        The number must be between ${smallerNumber} and ${largerNumber}.
      </div>
    `
    divGuess.append(divErrorMessage)
    return
  }

  debugger
  if (number === secretNumber) {
    document.body.innerHTML = `
      <h2>You've made it!</h2>
      <h3>The secret number was ${secretNumber}</h3>
    `
  }
}

function isText(guess) {
  return Number.isNaN(guess)
}

function notBetweenLimits(guess) {
  return guess < smallerNumber || guess > largerNumber
}