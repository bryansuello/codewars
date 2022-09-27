// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

let animal = 'chickadee';
let dish = 'chocolate cake';

function feast(beast, dish) {
  if (
    beast.charAt(0) == dish.charAt(0) &&
    beast.charAt(beast.length - 1) == dish.charAt(dish.length - 1)
  )
    return true;
  else return false;
}

console.log(feast(animal, dish));

// function feast(beast, dish) {
//   return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
// }

// function feast(beast, dish) {
//   return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
// }

// function feast(beast, dish) {
//   return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
// }

// function feast(beast, dish) {
//   return beast.first() + beast.last() == dish.first() + dish.last();
// }
// String.prototype.first = function() {
//   return this[0];
// }
// String.prototype.last = function() {
//   return this[this.length-1];
// }

// feast=(beast, dish)=>beast.slice(0,1)==dish.slice(0,1)&&beast.slice(-1)==dish.slice(-1)
