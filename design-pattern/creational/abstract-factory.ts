// Abstract Product A
interface Engine {
  start(): void;
}

// Concrete Products A
class ElectricEngine implements Engine {
  start(): void {
    console.log("Electric engine started");
  }
}

class GasEngine implements Engine {
  start(): void {
    console.log("Gas engine started");
  }
}

// Abstract Product B
interface Wheel {
  rotate(): void;
}

// Concrete Products B
class AlloyWheel implements Wheel {
  rotate(): void {
    console.log("Alloy wheel rotating");
  }
}

class SteelWheel implements Wheel {
  rotate(): void {
    console.log("Steel wheel rotating");
  }
}

// Abstract Factory
interface AbstractCarFactory {
  createEngine(): Engine;
  createWheel(): Wheel;
}

// Concrete Factories
class ElectricCarFactory implements AbstractCarFactory {
  createCar(): Car {
      throw new Error("Method not implemented.");
  }
  createEngine(): Engine {
    return new ElectricEngine();
  }

  createWheel(): Wheel {
    return new AlloyWheel();
  }
}

class GasCarFactory implements AbstractCarFactory {
  createEngine(): Engine {
    return new GasEngine();
  }

  createWheel(): Wheel {
    return new SteelWheel();
  }
}

// Client Code
function assembleCar(factory: AbstractCarFactory): void {
  const engine = factory.createEngine();
  const wheel = factory.createWheel();

  engine.start();
  wheel.rotate();
}

// Example Usage
const electricCarFactory = new ElectricCarFactory();
assembleCar(electricCarFactory);
// Output:
// Electric engine started
// Alloy wheel rotating

const gasCarFactory = new GasCarFactory();
assembleCar(gasCarFactory);
// Output:
// Gas engine started
// Steel wheel rotating





/*
Abstract Products (Engine and Wheel):

Define interfaces for related products. In this case, Engine and Wheel are abstract product interfaces.
Concrete Products (ElectricEngine, GasEngine, AlloyWheel, and SteelWheel):

Implement concrete classes that correspond to the abstract product interfaces.
Abstract Factory (CarFactory):

Declare an abstract factory interface with methods to create abstract products.
Concrete Factories (ElectricCarFactory and GasCarFactory):

Implement concrete factories that produce families of related products. Each concrete factory provides its implementation of creating the abstract products.
Client Code (assembleCar function):

Takes a factory as a parameter and uses it to create and assemble a family of related products.
Example Usage:

Creates instances of concrete factories (ElectricCarFactory and GasCarFactory) and assembles cars using the assembleCar function.



---------------------------------------------------------------------------------------------------------------------------------


When explaining the Abstract Factory Design Pattern in an interview, you want to provide a clear and concise explanation while covering key concepts.
 Here's a structured way to explain the Abstract Factory Design Pattern:

1. **Definition:**
   Start by giving a brief definition of the Abstract Factory Design Pattern:

   "The Abstract Factory Design Pattern is a creational pattern that provides an interface for creating families of related or dependent objects without 
   specifying their concrete classes. It allows a client to create objects that belong to a family of related products without knowing the exact classes
    of those objects."

2. **Key Components:**
   - **Abstract Products:**
     - Explain that there are abstract product interfaces (e.g., `Engine` and `Wheel`) that define the structure for related products.

   - **Concrete Products:**
     - Mention that there are multiple concrete classes (e.g., `ElectricEngine`, `GasEngine`, `AlloyWheel`, and `SteelWheel`) that implement the abstract 
     product interfaces.

   - **Abstract Factory:**
     - Explain that there's an abstract factory interface (e.g., `CarFactory`) that declares methods for creating abstract products.

   - **Concrete Factories:**
     - Mention that there are concrete factory classes (e.g., `ElectricCarFactory` and `GasCarFactory`) that implement the abstract factory interface and
      provide specific implementations for creating families of related products.

3. **Client Code:**
   - Explain how the client code uses the abstract factory to create families of related objects without knowing the specific classes of the created objects.
   - Highlight that the client code is decoupled from the concrete classes and relies on the abstract factory to instantiate objects.

4. **Advantages:**
   - Discuss the advantages of using the Abstract Factory Design Pattern:
     - **Flexibility:** It allows adding new families of related products without modifying existing code.
     - **Compatibility:** It ensures that the created objects are compatible and can work together.

5. **Real-World Analogy (Optional):**
   - If applicable, you can use a real-world analogy to make the concept more relatable. For example, an assembly line in a car manufacturing plant 
   that produces different models with compatible parts.

6. **Example Usage:**
   - Provide a simple example (e.g., creating different types of cars with engines and wheels) to illustrate how the pattern works in practice.

7. **Conclude:**
   - Summarize the key points and reiterate the benefits of using the Abstract Factory Design Pattern.

Remember to adapt your explanation based on the specific context of the interview and the technical level of the interviewer. Demonstrate a clear 
understanding of the pattern's purpose, components, and benefits.

*/