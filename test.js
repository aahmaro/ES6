const nums = [1, 2, 3, , 4, 5]
var sum = 0

function adder(nom) {
  sum += nom
}

nums.forEach(adder)

console.log(sum)
