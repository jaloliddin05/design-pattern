/*
The Prototype Design Pattern is a creational pattern that involves creating new objects by copying an existing object, 
known as the prototype. This pattern allows you to create new instances without specifying their exact type or class. In TypeScript, 
you can implement the Prototype pattern by using the clone method to create copies of an existing object.
*/

// Prototype interface
interface Shape {
  clone(): Shape;
  getInfo(): string;
}

// Concrete Prototype: Circle
class Circle implements Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  clone(): Shape {
    return new Circle(this.radius);
  }

  getInfo(): string {
    return `Circle with radius ${this.radius}`;
  }
}

// Concrete Prototype: Rectangle
class Rectangle implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  clone(): Shape {
    return new Rectangle(this.width, this.height);
  }

  getInfo(): string {
    return `Rectangle with width ${this.width} and height ${this.height}`;
  }
}

// Client Code
const circlePrototype: Shape = new Circle(5);
const rectanglePrototype: Shape = new Rectangle(3, 4);

// Create new shapes using the prototypes
const clonedCircle: Shape = circlePrototype.clone();
const clonedRectangle: Shape = rectanglePrototype.clone();

// Output information about the clones
console.log(clonedCircle.getInfo()); // Output: Circle with radius 5
console.log(clonedRectangle.getInfo()); // Output: Rectangle with width 3 and height 4

/*
  Prototype Interface (Shape):

Declares the clone method for creating copies of the object.
Provides an additional method (getInfo) to get information about the object.
Concrete Prototypes (Circle and Rectangle):

Implement the Shape interface.
Define their own properties and provide a clone method for creating copies.
Client Code:

Creates instances of concrete prototypes (e.g., circlePrototype and rectanglePrototype).
Uses the clone method to create new instances without specifying their exact class.
Outputs information about the cloned objects.
This example illustrates how the Prototype Design Pattern allows you to create new instances of objects by copying existing instances.
It promotes flexibility and reusability by avoiding the need to know the concrete classes of the objects being created.



----------------------------------------------------------------------------------------------------------------------------------

When explaining the Prototype Design Pattern in an interview, you want to convey a clear understanding of its purpose, components, and how it 
facilitates object creation. Here's a structured way to explain the Prototype Design Pattern:

1. **Introduction:**
   Start with a concise definition of the Prototype Design Pattern:

   "The Prototype Design Pattern is a creational pattern that involves creating new objects by copying an existing object, known as the prototype. 
   This pattern allows you to create new instances without specifying their exact type or class."

2. **Key Components:**
   - **Prototype Interface:**
     - Explain that there is a prototype interface that declares a method for cloning objects (`clone`).
     - Mention that the interface may also include other methods to retrieve information or perform actions on the cloned objects.

   - **Concrete Prototypes:**
     - Describe concrete classes that implement the prototype interface.
     - Explain that each concrete class provides its own implementation of the `clone` method to create copies of the object.

3. **Client Code:**
   - Discuss how client code interacts with the prototypes.
   - Emphasize that clients use the `clone` method to create new instances without specifying the concrete class of the object being cloned.

4. **Flexibility and Reusability:**
   - Highlight the benefits of the Prototype Design Pattern:
     - **Flexibility:** Allows for the creation of new instances without knowing their exact class.
     - **Reusability:** Promotes reusability by enabling the cloning of existing objects.

5. **Real-World Analogy (Optional):**
   - If applicable, use a real-world analogy to make the concept more relatable. For example, think of creating copies of blueprints or templates.

6. **Example Usage:**
   - Provide a simple example (e.g., shapes, documents, or any scenario where object cloning is useful) to illustrate how the pattern works in practice.

7. **Conclude:**
   - Summarize the key points and reiterate the benefits of using the Prototype Design Pattern.
   - Conclude by emphasizing how the pattern facilitates efficient object creation in scenarios where the exact class of the object is not known in advance.

Remember to tailor your explanation to the level of detail expected in the interview and to provide a clear, concise, and coherent description of 
the Prototype Design Pattern.

*/
