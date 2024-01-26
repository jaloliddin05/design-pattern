/*
 The Proxy Design Pattern is a structural pattern that provides a surrogate or placeholder for another object.
 It allows you to control access to the real object, add additional behavior before or after accessing the object, or defer the object's 
 creation and initialization until it is actually needed. Let's go through an example of the Proxy Design Pattern in TypeScript.
*/

// Subject: Image
interface Image {
  display(): void;
}

// RealSubject: RealImage
class RealImage implements Image {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.loadImage();
  }

  private loadImage(): void {
    console.log(`Loading image: ${this.filename}`);
    // Simulate image loading logic
  }

  display(): void {
    console.log(`Displaying image: ${this.filename}`);
  }
}

// Proxy: ProxyImage
class ProxyImage implements Image {
  private realImage: RealImage | null = null;
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  display(): void {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

// Client Code
function clientCode_(image: Image): void {
  // Image is loaded only when display is called
  image.display();
}

// Usage
const imageProxy1 = new ProxyImage("image1.jpg");
const imageProxy2 = new ProxyImage("image2.jpg");

clientCode_(imageProxy1);
// Output: Loading image: image1.jpg
//         Displaying image: image1.jpg

clientCode_(imageProxy2);
// Output: Loading image: image2.jpg
//         Displaying image: image2.jpg

/*
   The Image interface declares the common method display() that both the real subject (RealImage) and the proxy (ProxyImage) will implement.
  RealImage is the real subject that represents the actual image. It loads the image when it is created.
  ProxyImage is the proxy class. It only loads the real image when the display method is called. This lazy-loading approach can be useful for expensive resources.
  The clientCode function demonstrates how the client can work with both the real image and the proxy without needing to be aware of the actual loading mechanism.
  In this example, the Proxy Design Pattern allows you to control access to the real image, loading it only when necessary. This can be beneficial for optimizing 
  resource usage, especially when dealing with expensive operations.
  
  
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  
  When explaining the Proxy Design Pattern in an interview, it's important to convey a clear understanding of the pattern's purpose, structure, and benefits. 
  Here's a structured way to explain the Proxy Design Pattern:
  
  1. **Definition:**
     - Start with a concise definition of the Proxy Design Pattern:
  
       "The Proxy Design Pattern is a structural pattern that provides a surrogate or placeholder for another object to control access to it. It acts as an 
       intermediary, allowing the manipulation of the real object while adding additional behavior or controlling its instantiation."
  
  2. **Purpose:**
     - Explain the main purpose of using the Proxy pattern:
  
       "The primary goal of the Proxy pattern is to control access to the real object by introducing a surrogate or placeholder. This can be beneficial for 
       various reasons, including adding security checks, optimizing performance through lazy loading, or implementing additional behavior before or after 
       accessing the real object."
  
  3. **Key Components:**
     - Discuss the key components involved in the pattern:
  
       - **Subject:**
         - "The Subject is the common interface or abstract class that both the real object and the proxy implement. It defines the operations that the client 
         can perform on the real object."
  
       - **Real Subject:**
         - "The Real Subject is the actual object that the proxy represents. It performs the real operations and may have associated costs or complexities."
  
       - **Proxy:**
         - "The Proxy is a surrogate or placeholder for the real subject. It implements the same interface as the real subject and controls access to it. 
         It can perform additional tasks before or after delegating to the real subject."
  
  4. **Types of Proxies:**
     - Discuss different types of proxies and their use cases:
  
       - **Virtual Proxy:**
         - "Delays the creation and initialization of the real object until it is actually needed, for example, lazy loading of resources."
  
       - **Protection Proxy:**
         - "Controls access to the real object by adding security checks or permissions."
  
       - **Remote Proxy:**
         - "Represents an object that is in a different address space, such as when dealing with distributed systems."
  
  5. **How It Works:**
     - Describe the typical workflow or process of how the Proxy Design Pattern operates:
  
       "When a client interacts with the proxy, the proxy can perform additional tasks, such as checking access permissions or loading the real object lazily. 
       The proxy then delegates the actual operation to the real object, maintaining a similar interface."
  
  6. **Benefits:**
     - Highlight the advantages and benefits of using the Proxy Design Pattern:
  
       - **Lazy Loading:**
         - "Lazy loading allows for the delayed creation and initialization of the real object until it is needed, improving performance by loading 
         resources on demand."
  
       - **Security and Access Control:**
         - "Protection proxies can enforce access controls, ensuring that clients have the necessary permissions before accessing the real object."
  
       - **Reduced Resource Usage:**
         - "Proxies can optimize resource usage by loading or creating the real object only when necessary, conserving memory and processing power."
  
  7. **Real-World Analogy (Optional):**
     - If applicable, use a real-world analogy to make the concept more relatable:
  
       "Consider a key card system where employees need a key card (proxy) to access a secure area. The key card acts as a surrogate, controlling access to 
       the actual secure space (real object)."
  
  8. **Example Usage:**
     - Provide a simple example or scenario where the Proxy Design Pattern could be applied:
  
       "For instance, using a proxy to control access to a large image or resource, loading it only when it is actually displayed, rather than loading it 
       immediately when the application starts."
  
  9. **Conclusion:**
     - Summarize the key points and reiterate the importance of the Proxy Design Pattern in controlling access, optimizing performance, and adding additional 
     behavior to real objects.
  
  Remember to use clear language, provide concrete examples, and adapt the level of technical detail based on the interviewer's background and the context of 
  the interview.
  */
