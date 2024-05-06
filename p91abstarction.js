// Abstraction and encapsulation example in JavaScript

class Animal {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  
    // Encapsulated method
    _makeSound(sound) {
      console.log(`${this.name} makes ${sound} sound.`);
    }
  
    // Abstraction - Public method
    makeSound() {
      throw new Error('makeSound method must be implemented');
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name, 'dog');
    }
  
    // Implementing the abstract method
    makeSound() {
      this._makeSound('bark');
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name, 'cat');
    }
  
    // Implementing the abstract method
    makeSound() {
      this._makeSound('meow');
    }
  }
  
  // Creating instances of Dog and Cat
  const myDog = new Dog('Buddy');
  const myCat = new Cat('Whiskers');
  
  // Using the abstraction
  myDog.makeSound(); // Output: Buddy makes bark sound.
  myCat.makeSound(); // Output: Whiskers makes meow sound.