const divErrorMessage = document.createElement("div")

function validateGuess(guess) {
  const number = +guess

  if (guess.toUpperCase() === "GAME OVER") {
    document.body.innerHTML = `
      <h2>Game over!</h2>
      <h3>The secret number was ${secretNumber}</h3>

      <button id="play-again" class="btn-play-again">Play again</button>
    `
  }

  if (isText(number)) {
    divErrorMessage.innerHTML = `<div>The guess must be a number.</div>`
    divGuess.append(divErrorMessage)
    return
  }

  if (notBetweenLimits(guess)) {
    divErrorMessage.innerHTML = `
      <div>
        The number is not between limits. 
        The number must be between ${smallerNumber} and ${largerNumber}.
      </div>
    `
    divGuess.append(divErrorMessage)
    return
  }

  if (number === secretNumber) {
    document.body.innerHTML = `
      <h2>You've made it!</h2>
      <h3>The secret number was ${secretNumber}</h3>

      <button id="play-again" class="btn-play-again">Play again</button>
    `
  } else if (number > secretNumber) {
    divErrorMessage.innerHTML = `
      <div>
        The secret number is larger <i class="fa-duotone fa-greater-than"></i>
      </div>
    `
    divGuess.append(divErrorMessage)
  } else {
    divErrorMessage.innerHTML = `
      <div>
        The secret number is smaller <i class="fa-duotone fa-less-than"></i>
      </div>
    `
    divGuess.append(divErrorMessage)
  }
}

function isText(guess) {
  return Number.isNaN(guess)
}

function notBetweenLimits(guess) {
  return guess < smallerNumber || guess > largerNumber
}

document.body.addEventListener("click", event => {
  if (event.target.id == "play-again") {
    window.location.reload()
  }
})