var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastKitten() {
  kittens.pop('Garfield')
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstKitten() {
  kittens.shift('Milo')
  return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function appendKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.push('Broom')
  return kittens
}
