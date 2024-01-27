/*
The State Design Pattern is a behavioral pattern that allows an object to alter its behavior when its internal state changes. 
The pattern encapsulates the state-related behavior in separate classes and delegates the state-specific logic to these classes. 
This enables the object to appear as if it changes its class.
*/

// State interface
interface State {
  turnOn(): void;
  turnOff(): void;
}

// Concrete State: OnState
class OnState implements State {
  turnOn(): void {
    console.log("Already turned on");
  }

  turnOff(): void {
    console.log("Turning off");
  }
}

// Concrete State: OffState
class OffState implements State {
  turnOn(): void {
    console.log("Turning on");
  }

  turnOff(): void {
    console.log("Already turned off");
  }
}

// Context: LightSwitch
class LightSwitch {
  private state: State;

  constructor() {
    // Initial state is Off
    this.state = new OffState();
  }

  // Set the current state
  setState(state: State): void {
    this.state = state;
  }

  // Delegate behavior to the current state
  turnOn(): void {
    this.state.turnOn();
  }

  turnOff(): void {
    this.state.turnOff();
  }
}

// Client Code
const lightSwitch = new LightSwitch();

// Initial state is Off
lightSwitch.turnOn(); // Turning on

// Change state to On
lightSwitch.setState(new OnState());
lightSwitch.turnOn(); // Already turned on
lightSwitch.turnOff(); // Turning off

// Change state to Off
lightSwitch.setState(new OffState());
lightSwitch.turnOn(); // Turning on
lightSwitch.turnOff(); // Already turned off

/*
  State Interface:
  
  The State interface declares methods that represent the actions that can be performed in different states. In this example, it includes turnOn and turnOff.
  Concrete States: OnState and OffState:
  
  The OnState and OffState classes implement the State interface and provide the specific behavior for turning on and off in their respective states.
  Context: LightSwitch:
  
  The LightSwitch class represents the context that can change its behavior based on the current state.
  The setState method allows changing the current state dynamically.
  The turnOn and turnOff methods delegate the behavior to the current state.
  Client Code:
  
  The client code creates a LightSwitch and interacts with it. The behavior of turning on and off depends on the current state.
  In this example, the State Design Pattern is applied to a simple LightSwitch context with two states: OnState and OffState. The context's behavior changes 
  dynamically based on the current state. This pattern is useful when an object's behavior depends on its internal state, and it allows for cleaner code by 
  separating the behavior into state-specific classes.
  
  Remember that the State Design Pattern becomes more beneficial as the complexity of the state transitions and behaviors increases in a real-world application.
  
  
  ---------------------------------------------------------------------------------------------------------------------------------------------------------
  
  
  When explaining the State Design Pattern in an interview, you want to convey the purpose, structure, and benefits of the pattern. 
  Here's a step-by-step guide on how to explain the State Design Pattern:
  
  1. **Definition:**
     - Start with a concise definition of the State Design Pattern:
  
       "The State Design Pattern is a behavioral pattern that allows an object to alter its behavior when its internal state changes. 
       It achieves this by encapsulating the state-specific behavior in separate classes, known as states, and allowing the object to switch between these states."
  
  2. **Purpose:**
     - Explain the main purpose of using the State pattern:
  
       "The primary goal of the State pattern is to enable an object to change its behavior dynamically when its internal state changes. 
       It promotes encapsulation by organizing state-specific behavior into separate classes, making it easier to add new states and modify 
       existing behavior without altering the object's code."
  
  3. **Key Components:**
     - Discuss the key components involved in the pattern:
  
       - **Context:**
         - "The Context is the object that can change its behavior based on its internal state. It maintains a reference to the current state object."
  
       - **State Interface:**
         - "The State Interface declares methods representing the actions that the Context can perform in different states. Each state implements this interface."
  
       - **Concrete States:**
         - "Concrete State classes implement the State Interface and provide specific behavior for the Context in a particular state. They encapsulate 
         the logic associated with each state."
  
  4. **How It Works:**
     - Describe the typical workflow or process of how the State Design Pattern operates:
  
       "The Context delegates state-specific behavior to the current state object. When the internal state changes, the Context switches to a 
       different Concrete State, effectively changing its behavior. This allows the object to appear as if it changes its class dynamically."
  
  5. **Benefits:**
     - Highlight the advantages and benefits of using the State Design Pattern:
  
       - **Cleaner Code:**
         - "The State pattern promotes cleaner and more maintainable code by encapsulating state-specific behavior in separate classes, avoiding large 
         conditional statements."
  
       - **Flexibility:**
         - "It provides flexibility in adding new states without modifying existing code. Each state is a self-contained unit that can be added or 
         modified independently."
  
       - **Readability:**
         - "By organizing state-specific behavior into separate classes, the code becomes more readable and understandable, making it easier to manage and extend."
  
  6. **Real-World Analogy (Optional):**
     - If applicable, use a real-world analogy to make the concept more relatable:
  
       "Think of a traffic light as a real-world example of the State pattern. The traffic light has different states (red, yellow, green), and its 
       behavior (allowing or stopping traffic) changes based on its current state. Each state, represented by a color, encapsulates the specific 
       behavior associated with that state."
  
  7. **Example Usage:**
     - Provide a simple example or scenario where the State Design Pattern could be applied:
  
       "For instance, in a vending machine, the State pattern can be used to represent different states such as 'No Coin,' 'Has Coin,' and 'Sold.' 
       The behavior of the vending machine changes dynamically based on its current state, allowing it to handle user interactions effectively."
  
  8. **Conclusion:**
     - Summarize the key points and emphasize how the State pattern helps in managing the behavior of an object in a flexible and maintainable way.
  
  Remember to use clear language, provide concrete examples, and adapt the level of technical detail based on the interviewer's background and the 
  context of the interview.
  */
