/*
The Command Design Pattern is a behavioral pattern that encapsulates a request as an object, allowing for parameterization of clients with 
different requests, queuing of requests, and logging of the parameters. Let's go through an example of the Command Design Pattern in TypeScript.
*/

// Receiver: ElectronicDevice
interface ElectronicDevice {
    turnOn(): void;
    turnOff(): void;
    setBrightness(brightness: number): void;
  }
  
  // Concrete Receivers: Light and Fan
  class Light implements ElectronicDevice {
    turnOn(): void {
      console.log("Light is ON");
    }
  
    turnOff(): void {
      console.log("Light is OFF");
    }
  
    setBrightness(brightness: number): void {
      console.log(`Setting light brightness to ${brightness}`);
    }
  }
  
  class Fan implements ElectronicDevice {
    turnOn(): void {
      console.log("Fan is ON");
    }
  
    turnOff(): void {
      console.log("Fan is OFF");
    }
  
    setBrightness(brightness: number): void {
      console.log("Fans do not have brightness control");
    }
  }
  
  // Command: Command
  interface Command {
    execute(): void;
  }
  
  // Concrete Commands: TurnOnCommand, TurnOffCommand, SetBrightnessCommand
  class TurnOnCommand implements Command {
    private device: ElectronicDevice;
  
    constructor(device: ElectronicDevice) {
      this.device = device;
    }
  
    execute(): void {
      this.device.turnOn();
    }
  }
  
  class TurnOffCommand implements Command {
    private device: ElectronicDevice;
  
    constructor(device: ElectronicDevice) {
      this.device = device;
    }
  
    execute(): void {
      this.device.turnOff();
    }
  }
  
  class SetBrightnessCommand implements Command {
    private device: ElectronicDevice;
    private brightness: number;
  
    constructor(device: ElectronicDevice, brightness: number) {
      this.device = device;
      this.brightness = brightness;
    }
  
    execute(): void {
      this.device.setBrightness(this.brightness);
    }
  }
  
  // Invoker: RemoteControl
  class RemoteControl {
    private command: Command;
  
    setCommand(command: Command): void {
      this.command = command;
    }
  
    pressButton(): void {
      this.command.execute();
    }
  }
  
  // Client Code
  const light = new Light();
  const fan = new Fan();
  
  const turnOnCommand = new TurnOnCommand(light);
  const turnOffCommand = new TurnOffCommand(light);
  const setBrightnessCommand = new SetBrightnessCommand(light, 50);
  
  const remoteControl = new RemoteControl();
  
  remoteControl.setCommand(turnOnCommand);
  remoteControl.pressButton();
  
  remoteControl.setCommand(turnOffCommand);
  remoteControl.pressButton();
  
  remoteControl.setCommand(setBrightnessCommand);
  remoteControl.pressButton();
  
  /*
  ElectronicDevice: This is the interface for different electronic devices (receivers) like lights and fans.
  
  Light, Fan: These are concrete classes implementing the ElectronicDevice interface.
  
  Command: This is the interface for different commands like turning on, turning off, or setting brightness.
  
  TurnOnCommand, TurnOffCommand, SetBrightnessCommand: These are concrete classes implementing the Command interface. Each command is 
  associated with a specific operation on an electronic device.
  
  RemoteControl: This is the invoker that holds a reference to a command and executes it when a button is pressed.
  
  Client Code: Instances of electronic devices, commands, and the remote control are created, and commands are associated with specific devices. 
  The remote control is then used to execute different commands.
  
  In this example, the Command Design Pattern allows you to encapsulate requests as objects (Command instances) and parameterize the invoker (RemoteControl) 
  with different commands. This decouples the sender of the request from the object that processes the request, providing flexibility and extensibility.
  
  
  -----------------------------------------------------------------------------------------------------------------------------------------------------
  
  When explaining the Command Design Pattern in an interview, it's important to provide a clear and concise overview of the pattern, its components, 
  and its benefits. Here's a structured way to explain the Command Design Pattern:
  
  1. **Definition:**
     - Start with a concise definition of the Command Design Pattern:
  
       "The Command Design Pattern is a behavioral pattern that turns a request into a stand-alone object. This object contains all the information about 
       the request, allowing for parameterization of clients with different requests, queuing of requests, and support for undoable operations."
  
  2. **Purpose:**
     - Explain the main purpose of using the Command pattern:
  
       "The primary goal of the Command pattern is to encapsulate a request as an object, decoupling the sender of the request from the object that performs 
       the operation. This enables the parameterization of clients with different requests and provides support for various operations like undo, redo, and queuing."
  
  3. **Key Components:**
     - Discuss the key components involved in the pattern:
  
       - **Command:**
         - "The Command is an interface or abstract class that declares a method (e.g., `execute()`) for executing a specific operation."
  
       - **Concrete Command:**
         - "Concrete Command classes implement the `Command` interface. They encapsulate a specific operation and contain the necessary information to perform 
         that operation."
  
       - **Invoker:**
         - "The Invoker is responsible for triggering the execution of commands. It holds a reference to a command and invokes its `execute()` method."
  
       - **Receiver:**
         - "The Receiver is the object that performs the actual operation. It knows how to carry out the request specified by the command."
  
  4. **How It Works:**
     - Describe the typical workflow or process of how the Command Design Pattern operates:
  
       "When a client creates a command object and associates it with a receiver, the client can parameterize the invoker with that command. When the invoker 
       triggers the command, it delegates the execution to the associated receiver, allowing for the decoupling of the sender and receiver."
  
  5. **Benefits:**
     - Highlight the advantages and benefits of using the Command Design Pattern:
  
       - **Decoupling:**
         - "The pattern decouples the sender of a request from the object that performs the operation, providing flexibility and reducing dependencies."
  
       - **Undo and Redo:**
         - "By encapsulating operations in command objects, the pattern supports undoable and redoable operations, maintaining a history of executed commands."
  
       - **Queuing and Logging:**
         - "Commands can be queued, logged, and passed around as objects, enabling more sophisticated use cases like macro recording or remote execution."
  
  6. **Real-World Analogy (Optional):**
     - If applicable, use a real-world analogy to make the concept more relatable:
  
       "Think of a restaurant kitchen where a chef (receiver) prepares dishes based on orders (commands) given by a waiter (invoker). The waiter doesn't 
       need to know how each dish is prepared; they simply hand over the order to the chef, who executes the command."
  
  7. **Example Usage:**
     - Provide a simple example or scenario where the Command Design Pattern could be applied:
  
       "For instance, in a home automation system, commands like turning on lights or adjusting thermostat settings can be encapsulated as command objects. 
       These commands can be executed by remote controls, providing a flexible and extensible solution."
  
  8. **Conclusion:**
     - Summarize the key points and reiterate the importance of the Command Design Pattern in promoting decoupling, flexibility, and support for advanced 
     features like undo and redo.
  
  Remember to use clear language, provide concrete examples, and adapt the level of technical detail based on the interviewer's background and the context 
  of the interview.
  */
  