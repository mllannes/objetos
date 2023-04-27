// let num1 = 0
// let num2 = num1
// num2++

// console.log(num1)
// console.log(num2)

const typeCheck = type => {
  const typeString = Reflect.apply(Object.prototype.toString, type, [])
  return typeString
    .slice(typeString.indexOf(' ') + 1, typeString.indexOf(']'))
    .toLowerCase()
}

console.log(typeof null === typeof {})
console.log(typeCheck([]))
console.log(typeCheck(null))
console.log(typeCheck({}))
console.log(typeCheck('teste'))
console.log(typeCheck(123))

const cloneArray = element => {
  if (typeCheck(element) !== 'array') return element
  return element.map(cloneArray)
}
