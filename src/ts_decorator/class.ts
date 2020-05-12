/* eslint-disable @typescript-eslint/no-explicit-any */
type Constructor = new (...agrs: any[]) => object

interface Actions {
  walk(): string
  greet(): string
}

function rescure(actions: Actions) { // Factory function
  return function <T extends Constructor>(Constructor: T) { // Decorator
    return class extends Constructor {
      constructor(...args: any[]) {
        super(...args)
        for (const actionType in actions) {
          this[actionType] = actions[actionType]
        }
      }
    }
  }
}

function rescureFeet(message: string) {
  return function(target: any, propertyKey: string, descriptor: any) { // Decorator
    const originalMethod = descriptor.value
    descriptor.value = function (...args: any[]) {
      console.log(message)
      originalMethod.apply(this, args)
    }
  }
}

@rescure({
  walk: function () {
    return 'I am rescured, I can walk'
  },
  greet: function () {
    return 'I am rescured, I can greet'
  }
})
export class DisabledPerso {
  public name: string
  public age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  @rescureFeet('I only rescure foot')
  public walk() {
    return 'I am disabled, I can\'t walk'
  }
  public greet() {
    return 'I am disabled, I can\'t greet'
  }
}

const johnDoe = new DisabledPerso('John Doe', 26)

johnDoe.walk() // eslint-disable-line