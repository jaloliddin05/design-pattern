/*
The Adapter Design Pattern is a structural pattern that allows the interface of an existing class to be used as another interface. 
It is often used to make existing classes work with others without modifying their source code. Let's go through an example of the 
Adapter Design Pattern in TypeScript.
*/

class OldSystem {
  requestData(): string {
    return "Data from the old system";
  }
}

interface NewSystem {
  fetchData(): string;
}

class OldSystemAdapter implements NewSystem {
  private oldSystem: OldSystem;

  constructor(oldSystem: OldSystem) {
    this.oldSystem = oldSystem;
  }

  fetchData(): string {
    // Use the existing method and adapt it to the new interface
    return this.oldSystem.requestData();
  }
}

// Create an instance of the old system
const oldSystem = new OldSystem();

// Create an adapter for the old system
const adapter = new OldSystemAdapter(oldSystem);

// Use the adapter as if it were the new system
const dataFromNewSystem = adapter.fetchData();

console.log(dataFromNewSystem); // Output: Data from the old system

/*

The OldSystem class is the existing class with a method requestData().
The NewSystem interface is the target interface that the new system expects.
The OldSystemAdapter class is the adapter that implements the NewSystem interface and internally uses the methods of the OldSystem class
 to make it compatible with the new interface.
This way, the OldSystemAdapter acts as a bridge between the old system and the new system, allowing them to work together without modifying
 the existing code of the OldSystem class.

In summary, the Adapter Design Pattern is useful when you have existing classes with incompatible interfaces, and you want to make them work 
together without modifying their source code. The adapter acts as an intermediary that translates the interface of one class into another


---------------------------------------------------------------------------------------------------------------------------------------------------

When explaining the Adapter Design Pattern in an interview, you want to provide a clear and concise description of the pattern, its purpose, 
and how it is implemented. Here's a structured way to explain the Adapter Design Pattern:

1. **Definition:**
   - Begin with a concise definition of the Adapter Design Pattern:

     "The Adapter Design Pattern is a structural pattern that allows incompatible interfaces to work together. It acts as a bridge, allowing
      an existing class to be used in a context where its interface is not directly compatible with what is expected."

2. **Purpose:**
   - Explain the main purpose of using the Adapter pattern:

     "The primary goal of the Adapter pattern is to make classes with incompatible interfaces work together. It allows the integration of 
     existing classes into new systems without modifying their source code, promoting reusability and flexibility."

3. **Key Components:**
   - Discuss the key components involved in the pattern:

     - **Client:**
       - "The client is the code that expects a certain interface."

     - **Target Interface:**
       - "The target interface is what the client expects."

     - **Adaptee:**
       - "The adaptee is the existing class with an incompatible interface that needs to be integrated."

     - **Adapter:**
       - "The adapter is the class that bridges the gap between the client and the adaptee. It implements the target interface and delegates the 
       calls to the adaptee."

4. **How It Works:**
   - Describe the typical workflow or process of how the Adapter Design Pattern operates:

     "When a client interacts with an object, the adapter translates the client's calls into calls that the adaptee can understand. 
     It acts as a wrapper around the adaptee, allowing it to be seamlessly used by the client."

5. **Types of Adapters:**
   - Mention the two common types of adapters: class adapters and object adapters:

     - **Class Adapter:**
       - "A class adapter uses inheritance to adapt the interface of the adaptee."

     - **Object Adapter:**
       - "An object adapter uses composition to adapt the interface of the adaptee."

6. **Benefits:**
   - Highlight the advantages and benefits of using the Adapter Design Pattern:

     - **Reusability:**
       - "Adapters allow existing classes to be reused in new systems without modification."

     - **Flexibility:**
       - "The pattern provides a flexible way to integrate classes with different interfaces."

     - **Maintainability:**
       - "It promotes maintainability by isolating changes to the adapter, avoiding modifications to existing code."

7. **Real-World Analogy (Optional):**
   - If applicable, use a real-world analogy to make the concept more relatable:

     "Think of an electrical adapter that allows a device with one type of plug to be used with a different type of power outlet.
      The adapter acts as an intermediary, ensuring compatibility."

8. **Example Usage:**
   - Provide a simple example or scenario where the Adapter Design Pattern could be applied:

     "For instance, adapting a legacy class to work with a modern interface or integrating a third-party library with a different interface into an existing system."

9. **Conclusion:**
   - Summarize the key points and reiterate the importance of the Adapter Design Pattern in achieving interoperability between classes with incompatible interfaces.

Remember to use clear language, relate the explanation to real-world scenarios, and adapt the level of technical detail based on the interviewer's 
background and the context of the interview.

*/
