const person = {
  name: 'John Doe',
  age: 26,
  say: () => 'Hello'
}

console.log(person?.height?.value) // eslint-disable-line
console.log(person?.say?.()) // eslint-disable-line
console.log(person?.walk?.()) // eslint-disable-line

export {}