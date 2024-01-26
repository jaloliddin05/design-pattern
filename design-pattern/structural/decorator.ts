/*
The Decorator Design Pattern is a structural pattern that allows behavior to be added to an individual object, 
either statically or dynamically, without affecting the behavior of other objects from the same class. In TypeScript, you can implement 
the Decorator pattern using class inheritance and composition.
*/

// Component interface
interface Coffee {
  cost(): number;
  description(): string;
}

// Concrete Component
class SimpleCoffee implements Coffee {
  cost(): number {
    return 5; // Base cost of simple coffee
  }

  description(): string {
    return "Simple Coffee";
  }
}

// Decorator abstract class
abstract class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  cost(): number {
    return this.coffee.cost();
  }

  description(): string {
    return this.coffee.description();
  }
}

// Concrete Decorator 1
class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 2; // Additional cost for milk
  }

  description(): string {
    return this.coffee.description() + ", with Milk";
  }
}

// Concrete Decorator 2
class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 1; // Additional cost for sugar
  }

  description(): string {
    return this.coffee.description() + ", with Sugar";
  }
}

// Example Usage
let myCoffee: Coffee = new SimpleCoffee();

console.log(
  `Cost: $${myCoffee.cost()}, Description: ${myCoffee.description()}`
);

// Add milk to the coffee
myCoffee = new MilkDecorator(myCoffee);
console.log(
  `Cost: $${myCoffee.cost()}, Description: ${myCoffee.description()}`
);

// Add sugar to the coffee
myCoffee = new SugarDecorator(myCoffee);
console.log(
  `Cost: $${myCoffee.cost()}, Description: ${myCoffee.description()}`
);

/*
  The Coffee interface defines the basic operations that concrete components and decorators must implement.
  The SimpleCoffee class is a concrete component representing a simple coffee.
  The CoffeeDecorator abstract class is a decorator that extends the Coffee interface and contains a reference to a Coffee object.
  MilkDecorator and SugarDecorator are concrete decorators that add specific behavior (cost and description) to the decorated coffee.
  Example usage demonstrates how decorators can be added dynamically to a base component to create a modified object.
  
  
  --------------------------------------------------------------------------------------------------------------------------------------
  
  When explaining the Decorator Design Pattern in an interview, it's important to provide a clear and concise description of the pattern, 
  its purpose, and how it is implemented. Here's a structured way to explain the Decorator Design Pattern:
  
  1. **Introduction:**
     - Begin with a brief definition of the Decorator Design Pattern:
  
       "The Decorator Design Pattern is a structural pattern that allows behavior to be added to an individual object, either statically or dynamically,
        without affecting the behavior of other objects from the same class."
  
  2. **Purpose:**
     - Explain the main purpose of using the Decorator pattern:
  
       "The primary goal of the Decorator pattern is to extend or enhance the functionality of objects in a flexible and reusable way. 
       It allows the addition of new behaviors to objects without altering their structure, promoting an open-closed principle where classes 
       are open for extension but closed for modification."
  
  3. **Key Components:**
     - Discuss the key components involved in the pattern:
  
       - **Component Interface:**
         - "The component interface defines the common interface for concrete components and decorators, ensuring that they can be used interchangeably."
  
       - **Concrete Component:**
         - "A concrete component is the base class that implements the core functionality."
  
       - **Decorator:**
         - "A decorator is an abstract class or interface that extends the component interface and maintains a reference to a component object.
          It adds or overrides specific behaviors."
  
       - **Concrete Decorator:**
         - "Concrete decorators are subclasses of decorators that implement additional behaviors or modify existing ones."
  
  4. **How It Works:**
     - Describe the typical workflow or process of how the Decorator Design Pattern operates:
  
       "When a client interacts with an object, decorators can be dynamically added to it, creating a chain of decorators. 
       Each decorator in the chain adds its behavior while delegating to the next decorator or the base component. 
       This allows for the composition of a variety of behaviors."
  
  5. **Benefits:**
     - Highlight the advantages and benefits of using the Decorator Design Pattern:
  
       - **Flexibility and Extensibility:**
         - "The pattern provides a flexible way to extend or modify the behavior of objects without changing their source code."
  
       - **Reusability:**
         - "Decorators can be reused and combined in various ways to create new combinations of behaviors."
  
       - **Maintainability:**
         - "The open-closed principle is adhered to, making it easier to introduce new functionality without modifying existing code."
  
  6. **Real-World Analogy (Optional):**
     - If applicable, use a real-world analogy to make the concept more relatable:
  
       "Think of a decorator like layers of wrapping paper around a gift box. Each layer adds a decorative element without changing the gift inside.
        You can keep adding layers to enhance the presentation."
  
  7. **Example Usage:**
     - Provide a simple example or scenario where the Decorator Design Pattern could be applied:
  
       "For instance, in a graphic user interface, a graphical component like a window can have decorators for borders, scrollbars, or additional features.
        These decorators can be added dynamically to customize the appearance and behavior of the window."
  
  8. **Conclusion:**
     - Summarize the key points and reiterate the importance of the Decorator Design Pattern in achieving flexible and reusable code through the 
     composition of behaviors.
  
  Remember to tailor your explanation to the technical level of the interviewer and provide a clear and logical presentation of the Decorator pattern.
  */
