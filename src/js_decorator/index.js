function rescure(actions) {
  return function (Class) {
    return function (...args) {
      const instance = Class.call(Class, ...args)
      for (const actionType in actions) {
        instance[actionType] = actions[actionType]
      }
      return instance
    }
  }
}

function DisabledPerson(name, age) {
  return {
    name,
    age
  }
}

const actions = {
  walk: function () {
    return `${this.name} who's ${this.age} is walking`
  },
  greet: function () {
    return `${this.name} says hello`
  }
}

const janeDoe = DisabledPerson('Jane Doe', 26)
const johnDoe = rescure(actions)(DisabledPerson)('John Doe', 26)

console.log(johnDoe?.walk?.()) // eslint-disable-line
console.log(johnDoe?.greet?.()) // eslint-disable-line
console.log(janeDoe?.walk?.()) // eslint-disable-line

export {}