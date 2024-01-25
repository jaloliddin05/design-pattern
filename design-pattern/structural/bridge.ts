// Abstraction: Remote
interface Remote {
  powerOn(): string;
  powerOff(): string;
  setChannel(channel: number): string;
}

// Concrete Abstraction 1: BasicRemote
class BasicRemote implements Remote {
  constructor(private device: Device) {}

  powerOn(): string {
    return this.device.power() + " and the remote is ON";
  }

  powerOff(): string {
    return this.device.power() + " and the remote is OFF";
  }

  setChannel(channel: number): string {
    return `Set the channel to ${channel}`;
  }
}

// Concrete Abstraction 2: AdvancedRemote
class AdvancedRemote implements Remote {
  constructor(private device: Device) {}

  powerOn(): string {
    return `Powering on ${this.device.getName()} and the remote is ON`;
  }

  powerOff(): string {
    return `Powering off ${this.device.getName()} and the remote is OFF`;
  }

  setChannel(channel: number): string {
    return `Set the channel to ${channel} on ${this.device.getName()}`;
  }
}

// Implementation: Device
interface Device {
  power(): string;
  getName(): string;
}

// Concrete Implementation 1: TV
class TV implements Device {
  power(): string {
    return "TV is powered";
  }

  getName(): string {
    return "TV";
  }
}

// Concrete Implementation 2: Radio
class Radio implements Device {
  power(): string {
    return "Radio is powered";
  }

  getName(): string {
    return "Radio";
  }
}

// Client Code
function client(remote: Remote): void {
  console.log(remote.powerOn());
  console.log(remote.setChannel(5));
  console.log(remote.powerOff());
  console.log();
}

// Usage
const basicRemoteForTV = new BasicRemote(new TV());
const advancedRemoteForRadio = new AdvancedRemote(new Radio());

client(basicRemoteForTV);
/*
    Output:
    TV is powered and the remote is ON
    Set the channel to 5
    TV is powered and the remote is OFF
    */

client(advancedRemoteForRadio);
/*
    Output:
    Powering on Radio and the remote is ON
    Set the channel to 5 on Radio
    Powering off Radio and the remote is OFF
    */

/*
    The Remote interface represents the abstraction for a remote control system.
  BasicRemote and AdvancedRemote are concrete abstractions that implement the Remote interface. They delegate the control tasks to the Device interface.
  The Device interface represents the implementation interface for electronic devices.
  TV and Radio are concrete implementations of the Device interface.
  The client code can use different remotes with different devices without the need for an exhaustive number of classes.
  This example demonstrates how the Bridge Design Pattern allows you to decouple abstraction (remote control) from implementation (electronic devices), 
  providing flexibility and extensibility in managing different combinations of remotes and devices.
  
  
    -----------------------------------------------------------------------------------------------------------------------------------------------------------
  
    When explaining the Bridge Design Pattern in an interview, it's essential to communicate the purpose, structure, and benefits of the pattern. 
    Here's a structured way to explain the Bridge Design Pattern:
  
  1. **Definition:**
     - Start with a concise definition of the Bridge Design Pattern:
  
       "The Bridge Design Pattern is a structural pattern that separates abstraction from implementation, allowing them to vary independently. 
       It involves creating a bridge interface that acts as an intermediary, enabling the abstraction and implementation to evolve independently."
  
  2. **Purpose:**
     - Explain the main purpose of using the Bridge pattern:
  
       "The primary goal of the Bridge pattern is to decouple an abstraction from its implementation, allowing both to change independently without affecting 
       each other. This promotes flexibility, extensibility, and the ability to manage multiple dimensions of variation in a system."
  
  3. **Key Components:**
     - Discuss the key components involved in the pattern:
  
       - **Abstraction:**
         - "The abstraction represents the high-level interface that clients interact with. It defines the abstraction's methods and can vary independently 
         from the implementation."
  
       - **Concrete Abstraction:**
         - "Concrete abstractions are classes that implement the abstraction. They delegate specific tasks to the implementation."
  
       - **Implementation:**
         - "The implementation represents the low-level interface or set of functionalities. It can vary independently from the abstraction."
  
       - **Concrete Implementation:**
         - "Concrete implementations are classes that provide specific implementations of the low-level functionalities. They are used by concrete abstractions."
  
  4. **How It Works:**
     - Describe the typical workflow or process of how the Bridge Design Pattern operates:
  
       "When a client interacts with an abstraction, the abstraction delegates specific tasks to an implementation. This delegation allows the abstraction 
       and implementation to evolve independently. The bridge interface acts as a link, providing a common ground between different abstractions and implementations."
  
  5. **Benefits:**
     - Highlight the advantages and benefits of using the Bridge Design Pattern:
  
       - **Flexibility:**
         - "The pattern allows flexibility by enabling the independent evolution of abstractions and implementations."
  
       - **Extensibility:**
         - "It promotes extensibility, allowing the addition of new abstractions or implementations without modifying existing code."
  
       - **Reduced Coupling:**
         - "By separating abstraction from implementation, the pattern reduces coupling, making the system more modular and easier to maintain."
  
  6. **Real-World Analogy (Optional):**
     - If applicable, use a real-world analogy to make the concept more relatable:
  
       "Consider a remote control system for electronic devices. The remote control (abstraction) can interact with different devices (implementation)
        independently. Adding a new remote or device doesn't require creating a new combination class for each possible variation."
  
  7. **Example Usage:**
     - Provide a simple example or scenario where the Bridge Design Pattern could be applied:
  
       "For instance, managing different shapes and drawing methods in a graphics application, where the shape abstraction can be paired with different 
       rendering implementations."
  
  8. **Conclusion:**
     - Summarize the key points and reiterate the importance of the Bridge Design Pattern in promoting flexibility and maintainability in software design.
  
  Remember to use clear language, provide concrete examples, and adapt the level of technical detail based on the interviewer's background and the context 
  of the interview.
    */
