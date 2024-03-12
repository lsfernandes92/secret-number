const divGuess = document.querySelector("#guess")

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = "pt-BR"
recognition.start()

recognition.addEventListener("result", onSpeak)

function onSpeak(e) {
  console.log(e)
  guess = e.results[0][0].transcript
  showGuess(guess)
}

function showGuess(guess) {
  const divYouSaid = document.createElement("div")
  const spanBox = document.createElement("span")

  divYouSaid.innerHTML = `<div>You said:</div>`
  spanBox.innerHTML = `<span class="box">${guess}</span>`

  divGuess.append(divYouSaid)
  divGuess.append(spanBox)
}