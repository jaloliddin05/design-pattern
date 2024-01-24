class Singleton {
    // Private static instance variable to hold the single instance
    private static instance: Singleton | null = null;
    private age:number
  
    // Private constructor to prevent external instantiation
    private constructor() {}
  
    // Public static method to get the singleton instance
    static getInstance(): Singleton {
      // If no instance exists, create one; otherwise, return the existing instance
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
    get value(){
        return this.age
    }

    set value(age:number){
       this.age = age
    }
  
    // Public method of the singleton instance
    public showMessage(): void {
      console.log("Hello, I am a singleton instance!");
    }
  }
  
  // Example Usage
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();
  
  console.log(instance1 === instance2); // Output: true (both references point to the same instance)
  
  instance1.showMessage(); // Output: Hello, I am a singleton instance!
  instance2.showMessage(); // Output: Hello, I am a singleton instance!
  
  instance1.value = 10
  console.log(instance2.value);
  

/*
  
  The Singleton class has a private static instance variable (Singleton.instance) to hold the single instance.
The constructor is marked as private to prevent external instantiation of the class.
The getInstance method is a public static method that returns the single instance. If an instance doesn't exist, it creates one; otherwise,
 it returns the existing instance.
Example usage demonstrates that both instance1 and instance2 refer to the same instance, confirming the Singleton pattern.
Key points:

The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance.
It is implemented by maintaining a private static instance variable and controlling the instantiation process through a static method.
The pattern ensures that only one instance is created and provides a way to access it globally.
Keep in mind that while the Singleton pattern has its use cases, it should be used judiciously, as it introduces global state and can make code 
harder to test and maintain.


---------------------------------------------------------------------------------------------------------------------------------------------

When explaining the Singleton Design Pattern in an interview, it's important to provide a clear and concise description of the pattern, 
its purpose, and how it is implemented. Here's a structured way to explain the Singleton Design Pattern:

1. **Introduction:**
   - Begin with a brief definition of the Singleton Design Pattern:

     "The Singleton Design Pattern is a creational pattern that ensures a class has only one instance and provides a global point of access to that instance.
      It is often used when exactly one object is needed to coordinate actions across the system."

2. **Purpose:**
   - Explain the main purpose of using the Singleton pattern:

     "The primary goal of the Singleton pattern is to control the instantiation process of a class, ensuring that only one instance is created and providing 
     a centralized way to access that instance. This is useful in scenarios where having multiple instances of a class could lead to issues, such as global 
     configuration settings, logging, or resource management."

3. **Key Components:**
   - Discuss the key components involved in the pattern:

     - **Private Instance Variable:**
       - Mention the private static variable that holds the single instance of the class.

     - **Private Constructor:**
       - Explain that the constructor is marked as private to prevent external instantiation.

     - **Static Method (`getInstance`):**
       - Discuss the public static method that controls access to the single instance, creating it if necessary.

4. **How It Works:**
   - Describe the typical workflow or process of how the Singleton Design Pattern operates:

     "When a client requests the singleton instance, the `getInstance` method is called. If no instance exists, it creates one; otherwise, it 
     returns the existing instance. This ensures that the class has only one instance throughout the application."

5. **Benefits:**
   - Highlight the advantages and benefits of using the Singleton Design Pattern:

     - **Global Access:**
       - "The pattern provides a global point of access to the singleton instance, making it easy to coordinate actions across different parts of the system."

     - **Resource Management:**
       - "It helps in efficient resource management by ensuring that only one instance of the class is created."

     - **Lazy Initialization (Optional):**
       - "Singletons can be lazily initialized, meaning that the instance is created only when it is first requested, improving performance."

6. **Thread Safety (Optional):**
   - If relevant to the language being used, mention considerations for thread safety:

     - "In multi-threaded environments, it's important to ensure thread safety when implementing the Singleton pattern. This can be achieved 
     through various mechanisms such as double-checked locking or using a thread-safe initialization block."

7. **Example Usage:**
   - Provide a simple example or scenario where the Singleton Design Pattern could be applied:

     "For example, a logging service implemented as a singleton ensures that all parts of an application log messages to the same instance,
      maintaining a consistent log across the entire system."

8. **Conclusion:**
   - Summarize the key points and reiterate the importance of the Singleton Design Pattern in controlling object instantiation and providing a 
   single point of access.

Remember to tailor your explanation to the technical level of the interviewer, provide a clear and logical presentation, and be prepared to answer 
any follow-up questions related to the Singleton pattern.
*/