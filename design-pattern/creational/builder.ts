/*
The Builder Design Pattern is a creational pattern that separates the construction of a complex object from its representation. 
It allows you to construct a product step by step and produce different representations of the same construction process. 
This pattern is especially useful when you have an object with a large number of optional parameters or configurations.
*/

// Product: Computer
class Computer {
  private parts: string[] = [];

  addPart(part: string): void {
    this.parts.push(part);
  }

  showParts(): void {
    console.log(`Computer parts: ${this.parts.join(", ")}`);
  }
}

// Abstract Builder
interface ComputerBuilder {
  buildCPU(): void;
  buildRAM(): void;
  buildStorage(): void;
  getResult(): Computer;
}

// Concrete Builder: DesktopBuilder
class DesktopBuilder implements ComputerBuilder {
  private computer: Computer = new Computer();

  buildCPU(): void {
    this.computer.addPart("Desktop CPU");
  }

  buildRAM(): void {
    this.computer.addPart("8GB RAM");
  }

  buildStorage(): void {
    this.computer.addPart("1TB HDD");
  }

  getResult(): Computer {
    return this.computer;
  }
}

// Concrete Builder: LaptopBuilder
class LaptopBuilder implements ComputerBuilder {
  private computer: Computer = new Computer();

  buildCPU(): void {
    this.computer.addPart("Laptop CPU");
  }

  buildRAM(): void {
    this.computer.addPart("16GB RAM");
  }

  buildStorage(): void {
    this.computer.addPart("512GB SSD");
  }

  getResult(): Computer {
    return this.computer;
  }
}

// Director: Controls the construction process
class ComputerEngineer {
  private builder: ComputerBuilder;

  constructor(builder: ComputerBuilder) {
    this.builder = builder;
  }

  constructComputer(): void {
    this.builder.buildCPU();
    this.builder.buildRAM();
    this.builder.buildStorage();
  }

  getComputer(): Computer {
    return this.builder.getResult();
  }
}

// Example Usage
const desktopBuilder = new DesktopBuilder();
const laptopBuilder = new LaptopBuilder();

const desktopEngineer = new ComputerEngineer(desktopBuilder);
const laptopEngineer = new ComputerEngineer(laptopBuilder);

desktopEngineer.constructComputer();
const desktopComputer = desktopEngineer.getComputer();
desktopComputer.showParts();
// Output: Computer parts: Desktop CPU, 8GB RAM, 1TB HDD

laptopEngineer.constructComputer();
const laptopComputer = laptopEngineer.getComputer();
laptopComputer.showParts();
// Output: Computer parts: Laptop CPU, 16GB RAM, 512GB SSD

/*
  Product (Computer):

Represents the complex object to be constructed.
Abstract Builder (ComputerBuilder):

Declares the steps for building the product.
Concrete Builders (DesktopBuilder and LaptopBuilder):

Implement the steps declared by the abstract builder.
Provide a method to retrieve the final product.
Director (ComputerEngineer):

Controls the construction process.
Takes a builder as a parameter and guides the construction steps.
Client Code:

Instantiates a builder (e.g., DesktopBuilder, LaptopBuilder).
Creates a director (e.g., ComputerEngineer) with the chosen builder.
Instructs the director to construct the computer.
Retrieves the final product from the builder.
This example demonstrates how the Builder Design Pattern allows you to construct different types of computers using the same construction 
process while providing flexibility in the representation of the final product.


--------------------------------------------------------------------------------------------------------------------------------------------




*/
