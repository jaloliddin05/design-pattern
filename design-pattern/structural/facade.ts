/*
The Facade Design Pattern is a structural pattern that provides a simplified interface to a set of interfaces in a subsystem. It encapsulates 
a group of interfaces, making the subsystem easier to use. Let's go through an example of the Facade Design Pattern in TypeScript.
*/

// Subsystem class 1
class SubsystemOne {
  operationOne(): string {
    return "Subsystem One: Operation One";
  }
}

// Subsystem class 2
class SubsystemTwo {
  operationTwo(): string {
    return "Subsystem Two: Operation Two";
  }
}

// Subsystem class 3
class SubsystemThree {
  operationThree(): string {
    return "Subsystem Three: Operation Three";
  }
}

// Facade class
class Facade {
  private subsystemOne: SubsystemOne;
  private subsystemTwo: SubsystemTwo;
  private subsystemThree: SubsystemThree;

  constructor() {
    this.subsystemOne = new SubsystemOne();
    this.subsystemTwo = new SubsystemTwo();
    this.subsystemThree = new SubsystemThree();
  }

  // Facade methods that simplify the interface for the client
  operation(): string {
    let result = "Facade initializes subsystems:\n";
    result += this.subsystemOne.operationOne() + "\n";
    result += this.subsystemTwo.operationTwo() + "\n";
    result += this.subsystemThree.operationThree();
    return result;
  }
}

// Client code
function clientCode(facade: Facade) {
  console.log(facade.operation());
}

// Usage
const facade = new Facade();
clientCode(facade);

/*
  SubsystemOne, SubsystemTwo, and SubsystemThree are classes representing different parts of the subsystem with their respective operations.
Facade is the facade class that simplifies the interface for the client. It initializes instances of the subsystem classes and delegates client 
requests to them.
The client interacts with the subsystem through the Facade, calling the operation method.
In this example, the Facade pattern provides a unified interface (operation) that hides the complexities of the subsystem from the client.
 The client doesn't need to know the details of the subsystem classes; it interacts with the simplified interface provided by the Facade.

This pattern is particularly useful when you have a complex subsystem, and you want to provide a higher-level interface that abstracts away the complexity, 
making it easier for clients to use the subsystem.


-----------------------------------------------------------------------------------------------------------------------------------------------------


When explaining the Facade Design Pattern in an interview, it's important to provide a clear and concise description of the pattern, its purpose,
 and how it is implemented. Here's a structured way to explain the Facade Design Pattern:

1. **Definition:**
   - Begin with a concise definition of the Facade Design Pattern:

     "The Facade Design Pattern is a structural pattern that provides a simplified interface to a set of interfaces in a subsystem. 
     It acts as a higher-level interface that makes a complex subsystem easier to use by encapsulating its individual components."

2. **Purpose:**
   - Explain the main purpose of using the Facade pattern:

     "The primary goal of the Facade pattern is to simplify the interaction with a complex subsystem by providing a unified and simplified interface.
      It hides the complexities of the subsystem's components, making it easier for clients to use."

3. **Key Components:**
   - Discuss the key components involved in the pattern:

     - **Subsystem Classes:**
       - "Subsystem classes are the individual components that make up the complex subsystem. They have their own methods and functionalities."

     - **Facade Class:**
       - "The Facade class is a higher-level class that provides a simplified interface to the client. It delegates the client's requests to the
        appropriate subsystem classes."

4. **How It Works:**
   - Describe the typical workflow or process of how the Facade Design Pattern operates:

     "When a client interacts with the system, instead of directly interacting with the individual components of the subsystem, it interacts with a Facade. 
     The Facade class encapsulates the interactions with the subsystem components, abstracting away the complexity."

5. **Benefits:**
   - Highlight the advantages and benefits of using the Facade Design Pattern:

     - **Simplified Interface:**
       - "The Facade pattern simplifies the overall interface for the client, presenting a higher-level interface that hides the details of the subsystem."

     - **Decoupling:**
       - "It promotes loose coupling between the client and the subsystem components. Changes in the subsystem don't affect the client,
        as long as the Facade interface remains consistent."

     - **Ease of Use:**
       - "Clients find it easier to use the system with a Facade, especially when dealing with a complex subsystem."

6. **Real-World Analogy (Optional):**
   - If applicable, use a real-world analogy to make the concept more relatable:

     "Think of a building's concierge desk as a facade. The concierge serves as a single point of contact for residents or guests,
      handling various requests and interactions. Behind the scenes, different departments (subsystems) handle specific aspects,
       but the concierge shields the residents from the complexity of dealing with each department separately."

7. **Example Usage:**
   - Provide a simple example or scenario where the Facade Design Pattern could be applied:

     "For instance, in a software system with multiple subsystems or modules, a facade can be created to simplify the interface for a specific
      set of functionalities, making it more user-friendly for clients."

8. **Conclusion:**
   - Summarize the key points and reiterate the importance of the Facade Design Pattern in simplifying complex systems and improving the
    overall usability for clients.

Remember to use clear language, relate the explanation to real-world scenarios, and adapt the level of technical detail based on the
 interviewer's background and the context of the interview.
*/
