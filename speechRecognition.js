const divGuess = document.querySelector("#guess")
const divYouSaid = document.createElement("div")
const spanBox = document.createElement("span")

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = "pt-BR"
recognition.start()

recognition.addEventListener("result", onSpeak)

function onSpeak(e) {
  guess = e.results[0][0].transcript
  showGuess(guess)
  validateGuess(guess)
}

function showGuess(guess) {
  divYouSaid.innerHTML = `<div>You said:</div>`
  spanBox.innerHTML = `<span class="box">${guess}</span>`

  divGuess.append(divYouSaid)
  divGuess.append(spanBox)
}