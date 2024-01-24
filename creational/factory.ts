// Product interface
interface Car {
  drive(): void;
}

// Concrete Products
class Sedan implements Car {
  drive(): void {
    console.log("Driving a Sedan");
  }
}

class SUV implements Car {
  drive(): void {
    console.log("Driving an SUV");
  }
}

// Creator interface
interface CarFactory {
  createCar(): Car;
}

// Concrete Creators
class SedanFactory implements CarFactory {
  createCar(): Car {
    return new Sedan();
  }
}

class SUVFactory implements CarFactory {
  createCar(): Car {
    return new SUV();
  }
}

// Client code
function testFactory(factory: CarFactory): void {
  const car = factory.createCar();
  car.drive();
}

// Example usage
const sedanFactory = new SedanFactory();
testFactory(sedanFactory); // Output: Driving a Sedan

const suvFactory = new SUVFactory();
testFactory(suvFactory); // Output: Driving an SUV



/*
Chat Gpt

When explaining the Factory Design Pattern in an interview, it's important to provide a clear and concise explanation. Here's a structured way to explain the Factory Design Pattern:

1. **Definition:**
   Start by giving a brief definition of the Factory Design Pattern:

   "The Factory Design Pattern is a creational pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created."

2. **Key Components:**
   - **Product Interface/Class:**
     - Explain that there's a common interface or base class (e.g., `Car` in the example) that defines the structure for the products to be created.

   - **Concrete Products:**
     - Mention that there are multiple concrete classes (e.g., `Sedan` and `SUV`) that implement the product interface.

   - **Creator Interface/Class:**
     - Explain that there's a creator interface or class (e.g., `CarFactory` in the example) that declares a method (`createCar`) for creating products.

   - **Concrete Creators:**
     - Mention that there are concrete creator classes (e.g., `SedanFactory` and `SUVFactory`) that implement the creator interface and provide specific implementations for creating concrete products.

3. **Client Code:**
   - Explain how the client code uses the factory to create objects without knowing the specific class of the created object.
   - Highlight that the client code is decoupled from the concrete classes and relies on the factory to instantiate objects.

4. **Advantages:**
   - Discuss the advantages of using the Factory Design Pattern:
     - **Flexibility:** It allows adding new product types and corresponding factories without modifying existing code.
     - **Encapsulation:** It encapsulates the object creation logic in the factories, promoting loose coupling.

5. **Example Usage:**
   - Provide a simple example (e.g., creating different types of cars) to illustrate how the pattern works in practice.

6. **Real-World Analogy (Optional):**
   - If applicable, you can use a real-world analogy to make the concept more relatable. For example, a smartphone manufacturing plant that produces different models based on the same assembly line.

7. **Conclude:**
   - Summarize the key points and reiterate the benefits of using the Factory Design Pattern.

Remember to adapt your explanation based on the specific context of the interview and the technical level of the interviewer. Demonstrate a clear understanding of the pattern's purpose, components, and benefits.
*/