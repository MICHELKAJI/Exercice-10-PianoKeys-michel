function keyPlay(event) {
  event.target.style.backgroundColor = "red";
}
// Write a named function with event handler properties
function keyReturn(event) {

  event.target.style.backgroundColor = '';
}

module.exports = { keyPlay, keyReturn };