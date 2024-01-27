/*
The Chain of Responsibility Design Pattern is a behavioral pattern that allows an object to pass a request along a chain of potential handlers. 
Each handler in the chain decides either to process the request or to pass it to the next handler in the chain. Let's go through an example of the 
Chain of Responsibility Design Pattern in TypeScript.
*/

// Handler: SupportTeam
interface SupportTeam {
  setNextTeam(nextTeam: SupportTeam): SupportTeam;
  handleRequest(request: string): void;
}

// Concrete Handlers: Level1Support, Level2Support, Level3Support
class Level1Support implements SupportTeam {
  private nextTeam: SupportTeam | null = null;

  setNextTeam(nextTeam: SupportTeam): SupportTeam {
    this.nextTeam = nextTeam;
    return nextTeam;
  }

  handleRequest(request: string): void {
    if (request === "Level1") {
      console.log("Level 1 Support is handling the request.");
    } else if (this.nextTeam) {
      this.nextTeam.handleRequest(request);
    } else {
      console.log("Unable to handle the request.");
    }
  }
}

class Level2Support implements SupportTeam {
  private nextTeam: SupportTeam | null = null;

  setNextTeam(nextTeam: SupportTeam): SupportTeam {
    this.nextTeam = nextTeam;
    return nextTeam;
  }

  handleRequest(request: string): void {
    if (request === "Level2") {
      console.log("Level 2 Support is handling the request.");
    } else if (this.nextTeam) {
      this.nextTeam.handleRequest(request);
    } else {
      console.log("Unable to handle the request.");
    }
  }
}

class Level3Support implements SupportTeam {
  private nextTeam: SupportTeam | null = null;

  setNextTeam(nextTeam: SupportTeam): SupportTeam {
    this.nextTeam = nextTeam;
    return nextTeam;
  }

  handleRequest(request: string): void {
    if (request === "Level3") {
      console.log("Level 3 Support is handling the request.");
    } else {
      console.log("Unable to handle the request.");
    }
  }
}

// Client Code
const level1Support = new Level1Support();
const level2Support = new Level2Support();
const level3Support = new Level3Support();

level1Support.setNextTeam(level2Support).setNextTeam(level3Support);

// Simulate handling various support requests
level1Support.handleRequest("Level2");
level1Support.handleRequest("Level3");
level1Support.handleRequest("Unknown");

/*
  SupportTeam: This is the handler interface declaring the methods for setting the next handler and handling requests.
  
  Concrete Handlers: Level1Support, Level2Support, and Level3Support are the concrete handler classes. Each handler can handle a specific type of request 
  and may pass the request to the next handler in the chain.
  
  Client Code: Instances of the concrete handlers are created, and a chain of responsibility is established by setting the next team for each level.
  
  Simulated Requests: The client code simulates handling various support requests, and the requests are passed through the chain of responsibility.
  
  In this example, the Chain of Responsibility pattern allows you to create a flexible and extensible system for handling support tickets. Each support 
  team can handle specific types of issues, and if they cannot handle a request, they pass it along to the next team in the chain.
  
  This pattern promotes loose coupling between senders and receivers, and it allows for dynamic modification of the chain during runtime. 
  The client doesn't need to know which specific team will handle the request; it simply sends the request to the first team in the chain.
  
  
  
  ------------------------------------------------------------------------------------------------------------------------------------------------------
  
  
  When explaining the Chain of Responsibility Design Pattern in an interview, it's important to provide a clear and structured overview of the pattern, 
  its components, and its benefits. Here's a step-by-step guide on how to explain the Chain of Responsibility Design Pattern:
  
  1. **Definition:**
     - Start with a concise definition of the Chain of Responsibility Design Pattern:
  
       "The Chain of Responsibility is a behavioral design pattern that allows an object to pass a request along a chain of potential handlers. 
       Each handler in the chain decides either to process the request or to pass it to the next handler in the chain."
  
  2. **Purpose:**
     - Explain the main purpose of using the Chain of Responsibility pattern:
  
       "The primary goal of the Chain of Responsibility pattern is to decouple senders and receivers of requests by allowing multiple objects to 
       handle a request without the sender needing to know which object will eventually process it. This promotes flexibility, extensibility, and the 
       ability to dynamically change the handling chain."
  
  3. **Key Components:**
     - Discuss the key components involved in the pattern:
  
       - **Handler:**
         - "The Handler is an interface or abstract class that declares a method for handling requests and may have a reference to the next handler in the chain."
  
       - **Concrete Handler:**
         - "Concrete Handler classes implement the Handler interface. They decide whether to handle a request or pass it to the next handler in the chain."
  
       - **Client:**
         - "The Client initiates requests but doesn't need to know the specific handler in the chain. It sends requests to the first handler in the chain, 
         and the request is processed by one or more handlers."
  
  4. **How It Works:**
     - Describe the typical workflow or process of how the Chain of Responsibility Design Pattern operates:
  
       "When a client sends a request, the first handler in the chain decides whether to process the request or pass it to the next handler. Each handler in 
       the chain follows the same principle, providing a sequence of potential handlers that can process the request."
  
  5. **Benefits:**
     - Highlight the advantages and benefits of using the Chain of Responsibility Design Pattern:
  
       - **Loose Coupling:**
         - "The pattern promotes loose coupling between senders and receivers. Senders are unaware of which handler will process the request, and receivers 
         don't need to know the sender."
  
       - **Flexibility and Extensibility:**
         - "The chain can be easily extended or modified during runtime. New handlers can be added, and the order of handlers can be changed without affecting 
         the client."
  
       - **Dynamic Handling:**
         - "The ability to dynamically change the handling chain allows for different configurations and variations in the processing of requests."
  
  6. **Real-World Analogy (Optional):**
     - If applicable, use a real-world analogy to make the concept more relatable:
  
       "Think of a customer support ticketing system where different levels of support teams (Level 1, Level 2, Level 3) handle different types of issues. 
       When a ticket is submitted, it passes through a chain of teams, and each team decides whether to handle the issue or escalate it to the next level."
  
  7. **Example Usage:**
     - Provide a simple example or scenario where the Chain of Responsibility Design Pattern could be applied:
  
       "For example, in a workflow system, where different processors handle different stages of a process, the Chain of Responsibility can be employed. 
       Each processor decides whether it can handle the current stage or pass it along to the next processor."
  
  8. **Conclusion:**
     - Summarize the key points and reiterate the importance of the Chain of Responsibility Design Pattern in achieving flexibility, extensibility, 
     and dynamic handling of requests.
  
  Remember to use clear language, provide concrete examples, and adapt the level of technical detail based on the interviewer's background and the 
  context of the interview.
  */
