/*
The Observer Design Pattern is a behavioral pattern where an object, known as the subject, maintains a list of its dependents, known as observers, that are notified of any 
changes in the subject's state. This pattern is used to define a one-to-many dependency between objects so that when one object changes state, 
all its dependents are notified and updated automatically.
*/

// Observer Interface
interface Observer {
  update(article: string): void;
}

// Concrete Observer: Subscriber
class Subscriber implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(article: string): void {
    console.log(`${this.name} received a new article: "${article}"`);
  }
}

// Subject: NewsAgency
class NewsAgency {
  private observers: Observer[] = [];
  private latestArticle: string = "";

  // Method to subscribe an observer
  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  // Method to unsubscribe an observer
  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // Method to publish a new article
  publishArticle(article: string): void {
    this.latestArticle = article;
    this.notifyObservers();
  }

  // Method to notify all observers
  private notifyObservers(): void {
    this.observers.forEach((observer) => observer.update(this.latestArticle));
  }
}

// Client Code
const subscriber1 = new Subscriber("Subscriber 1");
const subscriber2 = new Subscriber("Subscriber 2");

const newsAgency = new NewsAgency();

// Subscribers subscribe to the news agency
newsAgency.subscribe(subscriber1);
newsAgency.subscribe(subscriber2);

// News agency publishes a new article
newsAgency.publishArticle("Breaking News: Important Event!");

// Output:
// Subscriber 1 received a new article: "Breaking News: Important Event!"
// Subscriber 2 received a new article: "Breaking News: Important Event!"

/*
  Observer Interface:
  
  Observer is an interface that declares the update method, which will be implemented by concrete observers.
  Concrete Observer: Subscriber:
  
  Subscriber is a concrete observer that implements the update method to react to changes in the subject (NewsAgency).
  Subject: NewsAgency:
  
  NewsAgency is the subject that maintains a list of observers and notifies them of changes.
  subscribe and unsubscribe methods are provided for observers to register and unregister.
  publishArticle method publishes a new article and notifies all subscribed observers.
  Client Code:
  
  Subscribers (Subscriber 1 and Subscriber 2) subscribe to the news agency and receive updates when a new article is published.
  When the publishArticle method is called, all subscribed observers are notified, and they receive the latest article. 
  This demonstrates the Observer Design Pattern, where the subject (NewsAgency) maintains a list of observers (subscribers) and notifies them of any state changes.
  
  This pattern is beneficial in scenarios where a change in one object should trigger changes in other objects without them being tightly coupled. 
  The observers can react to changes independently of the subject.
  
  
  
  ----------------------------------------------------------------------------------------------------------------------------------------------------
  
  When explaining the Observer Design Pattern in an interview, you can follow a structured approach to convey the key concepts, purpose, components, 
  and benefits of the pattern. Here's a step-by-step guide on how to explain the Observer Design Pattern:
  
  1. **Definition:**
     - Begin with a concise definition of the Observer Design Pattern:
  
       "The Observer Design Pattern is a behavioral pattern that establishes a one-to-many dependency between objects, where changes in one object (the subject) 
       are automatically communicated to other objects (observers) without them being tightly coupled."
  
  2. **Purpose:**
     - Explain the main purpose of using the Observer pattern:
  
       "The primary goal of the Observer pattern is to define a dependency between objects so that when one object changes state, all its dependents are 
       notified and updated automatically. This promotes loose coupling, flexibility, and maintainability in software design."
  
  3. **Key Components:**
     - Discuss the key components involved in the pattern:
  
       - **Subject:**
         - "The Subject is the object that maintains a list of its dependents, the observers. It provides methods to attach, detach, and notify observers of changes."
  
       - **Observer:**
         - "The Observer is the interface or abstract class that declares the `update` method. Concrete observers implement this method to react to changes 
         in the subject."
  
  4. **How It Works:**
     - Describe the typical workflow or process of how the Observer Design Pattern operates:
  
       "When the state of the subject changes, it notifies all registered observers by calling their `update` method. Each observer reacts to the change 
       independently, allowing the subject and observers to remain loosely coupled."
  
  5. **Benefits:**
     - Highlight the advantages and benefits of using the Observer Design Pattern:
  
       - **Loose Coupling:**
         - "The pattern promotes loose coupling between the subject and observers. The subject doesn't need to know the specific details of its observers, 
         and new observers can be added without modifying the subject."
  
       - **Flexibility and Extensibility:**
         - "Observers can be added or removed dynamically at runtime, making the system more flexible and extensible. This allows for easy adaptation to 
         changing requirements."
  
       - **Decoupled Communication:**
         - "Observers are not directly coupled to each other. They communicate with the subject through well-defined interfaces, providing a decoupled 
         communication mechanism."
  
  6. **Real-World Analogy (Optional):**
     - If applicable, use a real-world analogy to make the concept more relatable:
  
       "Think of a news agency and its subscribers. The news agency (subject) publishes articles, and subscribers (observers) receive updates when new 
       articles are published. The news agency doesn't need to know the specific subscribers, and subscribers are notified independently."
  
  7. **Example Usage:**
     - Provide a simple example or scenario where the Observer Design Pattern could be applied:
  
       "For instance, in a user interface, the Observer pattern can be used to notify various UI components about changes in a model or data. When the 
       model changes, the UI components are automatically updated without being tightly coupled to each other."
  
  8. **Conclusion:**
     - Summarize the key points and reiterate the importance of the Observer Design Pattern in achieving loose coupling, flexibility, and effective 
     communication between objects.
  
  Remember to use clear language, provide concrete examples, and adapt the level of technical detail based on the interviewer's background and the 
  context of the interview.
  */
