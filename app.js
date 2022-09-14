window.addEventListener("keydown", function (e) {
  // window because we are adding the event listener to the whole page
  const audio = document.querySelector(`audio[data-key="${e.key}"]`); // this selects the audio connected to the corresponding key strike
  if (!audio) return; // stops the funcion from running anymore
  audio.currentTime = 0; // send the audio file back to the start. This way we can hit the key twice and not have to wait for the audio to go all the way and then play it again.
  audio.play(); // this gives our constant an action.
});
