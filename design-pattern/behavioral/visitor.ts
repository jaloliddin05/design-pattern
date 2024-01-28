/*
The Visitor Design Pattern is a behavioral pattern that allows you to define a new operation without changing the classes of the elements 
on which it operates. It involves creating a separate visitor class that encapsulates the new operation and traversing the elements using this visitor. 
Let's go through an example of the Visitor Design Pattern in TypeScript.
*/

// Element Interface
interface Shape_ {
  accept(visitor: ShapeVisitor): void;
}

// Concrete Elements
class Circle_ implements Shape_ {
  constructor(public radius: number) {}

  accept(visitor: ShapeVisitor): void {
    visitor.visitCircle(this);
  }
}

class Square_ implements Shape_ {
  constructor(public side: number) {}

  accept(visitor: ShapeVisitor): void {
    visitor.visitSquare(this);
  }
}

// Visitor Interface
interface ShapeVisitor {
  visitCircle(circle: Circle_): void;
  visitSquare(square: Square_): void;
}

// Concrete Visitor
class AreaCalculator implements ShapeVisitor {
  visitCircle(circle: Circle_): void {
    const area = Math.PI * Math.pow(circle.radius, 2);
    console.log(`Area of Circle: ${area.toFixed(2)}`);
  }

  visitSquare(square: Square_): void {
    const area = Math.pow(square.side, 2);
    console.log(`Area of Square: ${area.toFixed(2)}`);
  }
}

// Client Code
const shapes: Shape_[] = [new Circle_(5), new Square_(4)];

const areaCalculator = new AreaCalculator();

shapes.forEach((shape) => {
  shape.accept(areaCalculator);
});

/*
  Element Interface (Shape):
  
  Declares an accept method that takes a ShapeVisitor.
  Concrete Elements (Circle and Square):
  
  Implement the Shape interface.
  Provide an implementation for the accept method by calling the appropriate method on the visitor.
  Visitor Interface (ShapeVisitor):
  
  Declares methods for each type of element (e.g., visitCircle, visitSquare).
  Concrete Visitor (AreaCalculator):
  
  Implements the ShapeVisitor interface.
  Provides specific implementations for calculating the area of circles and squares.
  Client Code:
  
  Creates instances of concrete elements (e.g., Circle and Square).
  Creates an instance of the concrete visitor (AreaCalculator).
  Iterates through the elements and calls the accept method, passing the visitor.
  
  
  --------------------------------------------------------------------------------------------------------------------------------------------
  
  
  When explaining the Visitor Design Pattern:
  
  Definition:
  
  "The Visitor Design Pattern allows you to define a new operation without changing the classes of the elements on which it operates. 
  It involves creating a separate visitor class with methods for each type of element, and elements accept the visitor to perform the operation."
  Purpose:
  
  "The primary goal is to separate the algorithm from the object structure, enabling the addition of new operations without modifying existing classes. 
  It promotes flexibility and extensibility."
  Key Components:
  
  "The key components include the Element Interface (defining the accept method), Concrete Elements (implementing the Element Interface), Visitor 
  Interface (declaring visit methods), and Concrete Visitor (implementing the Visitor Interface)."
  How It Works:
  
  "Elements accept a visitor, and the visitor's methods are called based on the element's type. This allows the visitor to perform operations on 
  elements without modifying their classes."
  Benefits:
  
  "Benefits include the ability to add new operations without changing existing classes, improved separation of concerns, and better support for 
  multiple algorithms on the same set of elements."
  Real-World Analogy (Optional):
  
  "Think of a museum tour guide as a real-world analogy. The guide (visitor) leads visitors (elements) through different exhibits (types of elements) 
  and provides information specific to each exhibit."
  Example Usage:
  
  "In our example, we used the Visitor pattern to calculate the area of different shapes without modifying their classes. The AreaCalculator visitor 
  encapsulates the area calculation algorithm."
  Conclusion:
  
  "In conclusion, the Visitor pattern is a powerful way to extend the functionality of a set of classes without modifying their code. It enhances 
  code modularity and maintainability."
  Remember to adapt the explanation based on the interviewer's background and the context of the interview.
  */
