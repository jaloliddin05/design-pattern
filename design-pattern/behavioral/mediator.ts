/*
The Mediator Design Pattern is a behavioral pattern that defines an object (the mediator) that centralizes communication between a set of objects 
(colleagues) in a system. Instead of allowing direct communication between the colleagues, they communicate through the mediator. This promotes loose 
coupling and simplifies the relationships between objects.
*/

// Mediator Interface
interface ChatMediator {
  sendMessage(message: string, user: User): void;
  addUser(user: User): void; // Added addUser method
}

// Concrete Mediator: ChatRoom
class ChatRoom implements ChatMediator {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  sendMessage(message: string, sender: User): void {
    console.log(`${sender.getName()} sends: ${message}`);
    this.users
      .filter((user) => user !== sender)
      .forEach((user) => user.receiveMessage(message));
  }
}

// Colleague Interface
interface User {
  getName(): string;
  sendMessage(message: string): void;
  receiveMessage(message: string): void;
}

// Concrete Colleague: ChatUser
class ChatUser implements User {
  constructor(private name: string, private mediator: ChatMediator) {
    mediator.addUser(this);
  }

  getName(): string {
    return this.name;
  }

  sendMessage(message: string): void {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receiveMessage(message: string): void {
    console.log(`${this.name} receives: ${message}`);
  }
}

// Client Code
const chatMediator = new ChatRoom();

const user1 = new ChatUser("User 1", chatMediator);
const user2 = new ChatUser("User 2", chatMediator);
const user3 = new ChatUser("User 3", chatMediator);

user1.sendMessage("Hello, everyone!");

// Output:
// User 1 sends: Hello, everyone!
// User 2 receives: Hello, everyone!
// User 3 receives: Hello, everyone!

/*
  
  Mediator Interface:
  
  The ChatMediator interface declares the sendMessage method, which colleagues use to send messages.
  Concrete Mediator: ChatRoom:
  
  The ChatRoom class implements the ChatMediator interface. It keeps track of the users and facilitates communication among them.
  Colleague Interface:
  
  The User interface declares methods for sending and receiving messages.
  Concrete Colleague: ChatUser:
  
  The ChatUser class implements the User interface. Each user registers with the mediator (ChatRoom) during instantiation.
  Users can send messages to the mediator using sendMessage, and they receive messages through the receiveMessage method.
  Client Code:
  
  The client creates a ChatRoom mediator and several ChatUser colleagues.
  Users can send messages to the mediator, and the mediator distributes the messages to other users.
  In this example, the ChatRoom acts as the mediator, and ChatUser instances are the colleagues. Users communicate by sending messages to the mediator, 
  which then broadcasts the messages to all other users. This promotes loose coupling between users, as they don't need to be aware of each other.
  
  The Mediator Design Pattern is useful when you want to centralize communication logic between a set of objects, avoiding direct dependencies between them. 
  It's particularly beneficial in scenarios where a system's communication logic becomes complex, and a centralized mediator can simplify the interactions.
  
  
  ------------------------------------------------------------------------------------------------------------------------------------------------------
  
  
  When explaining the Mediator Design Pattern in an interview, it's important to convey the purpose, structure, and benefits of the pattern. 
  Here's a step-by-step guide on how to explain the Mediator Design Pattern:
  
  1. **Definition:**
     - Start with a concise definition of the Mediator Design Pattern:
  
       "The Mediator Design Pattern is a behavioral pattern that defines an object (the mediator) to centralize communication between a set of objects 
       (colleagues) in a system. It promotes loose coupling by ensuring that objects do not communicate directly but instead interact through the mediator."
  
  2. **Purpose:**
     - Explain the main purpose of using the Mediator pattern:
  
       "The primary goal of the Mediator pattern is to simplify the relationships between objects by centralizing communication logic. Instead of objects 
       interacting directly with each other, they communicate through a mediator object. This promotes a more maintainable and loosely coupled design."
  
  3. **Key Components:**
     - Discuss the key components involved in the pattern:
  
       - **Mediator Interface:**
         - "The Mediator interface declares methods for facilitating communication among colleagues. It may include methods for registering colleagues and 
         exchanging information."
  
       - **Concrete Mediator:**
         - "The Concrete Mediator class implements the Mediator interface and contains the communication logic. It keeps track of colleagues and facilitates 
         communication among them."
  
       - **Colleague Interface:**
         - "The Colleague interface declares methods for sending and receiving messages. Colleagues are objects that interact with each other through the mediator."
  
       - **Concrete Colleague:**
         - "Concrete Colleague classes implement the Colleague interface. They register with the mediator and communicate with other colleagues indirectly 
         through the mediator."
  
  4. **How It Works:**
     - Describe the typical workflow or process of how the Mediator Design Pattern operates:
  
       "Colleagues do not communicate directly with each other but instead send messages through the mediator. When a colleague wants to communicate, 
       it sends a message to the mediator, which then forwards the message to the appropriate colleagues. This centralizes communication logic and reduces 
       dependencies among objects."
  
  5. **Benefits:**
     - Highlight the advantages and benefits of using the Mediator Design Pattern:
  
       - **Loose Coupling:**
         - "The Mediator pattern promotes loose coupling by decoupling objects from each other. Colleagues are only aware of the mediator, not each other, 
         reducing direct dependencies."
  
       - **Centralized Control:**
         - "Communication logic is centralized in the mediator, making it easier to manage and modify. Changes to communication rules or the addition of new 
         colleagues can be handled in the mediator."
  
       - **Reusability:**
         - "Mediators can be reused in different contexts with different sets of colleagues. This promotes the reuse of mediator classes and facilitates 
         the extension of the system."
  
  6. **Real-World Analogy (Optional):**
     - If applicable, use a real-world analogy to make the concept more relatable:
  
       "Think of a mediator as an air traffic control tower. Pilots (colleagues) don't communicate directly with each other; instead, they communicate with 
       the control tower, which coordinates their movements and ensures safe air traffic."
  
  7. **Example Usage:**
     - Provide a simple example or scenario where the Mediator Design Pattern could be applied:
  
       "For instance, in a graphical user interface (GUI) framework, a mediator could manage communication between different UI components. Instead of buttons, 
       text fields, and checkboxes interacting directly, they could communicate through a mediator to update and synchronize their states."
  
  8. **Conclusion:**
     - Summarize the key points and reiterate the importance of the Mediator Design Pattern in simplifying communication and promoting a more modular and 
     maintainable system.
  
  Remember to use clear language, provide concrete examples, and adapt the level of technical detail based on the interviewer's background and the context of t
  he interview.
  */
