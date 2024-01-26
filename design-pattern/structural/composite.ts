/*
  The Composite Design Pattern is a structural pattern that allows you to compose objects into tree structures to represent part-whole hierarchies.
  This pattern lets clients treat individual objects and compositions of objects uniformly. Let's go through an example
  of the Composite Design Pattern in TypeScript.
*/

// Component: FileSystemComponent
interface FileSystemComponent {
  display(indentation: string): void;
}

// Leaf: File
class File1 implements FileSystemComponent {
  constructor(private name: string) {}

  display(indentation: string): void {
    console.log(`${indentation}File: ${this.name}`);
  }
}

// Composite: Directory
class Directory implements FileSystemComponent {
  private children: FileSystemComponent[] = [];
  constructor(private name: string) {}

  add(component: FileSystemComponent): void {
    this.children.push(component);
  }

  display(indentation: string): void {
    console.log(`${indentation}Directory: ${this.name}`);
    indentation += "  ";

    for (const child of this.children) {
      child.display(indentation);
    }
  }
}

// Client Code
function clientCod(component: FileSystemComponent): void {
  component.display("");
}

// Usage
const file1 = new File1("file1.txt");
const file2 = new File1("file2.txt");

const directory1 = new Directory("Folder 1");
directory1.add(file1);
directory1.add(file2);

const file3 = new File1("file3.txt");
const file4 = new File1("file4.txt");

const directory2 = new Directory("Folder 2");
directory2.add(file3);
directory2.add(file4);

const rootDirectory = new Directory("Root");
rootDirectory.add(directory1);
rootDirectory.add(directory2);

clientCod(rootDirectory);
/*
  Output:
  Directory: Root
    Directory: Folder 1
      File: file1.txt
      File: file2.txt
    Directory: Folder 2
      File: file3.txt
      File: file4.txt
  */

/*
  The FileSystemComponent interface defines the common method display(indentation: string) that concrete components must implement.
  File is a leaf class representing a file.
  Directory is a composite class representing a directory. It can contain both files and subdirectories.
  The clientCode function can treat both individual files and directories uniformly, invoking the display() method on each.
  In this example, the Composite Design Pattern allows you to represent a hierarchical file system structure where both individual files and directories 
  can be treated as a single entity. The pattern enables clients to work with complex structures in a uniform manner, whether dealing with a single file or
   a nested directory.
  
  
   ------------------------------------------------------------------------------------------------------------------------------------
  
  
  When explaining the Composite Design Pattern in an interview, you want to provide a clear and concise description of the pattern, its purpose, structure, 
  and benefits. Here's a structured way to explain the Composite Design Pattern:
  
  1. **Definition:**
     - Start with a concise definition of the Composite Design Pattern:
  
       "The Composite Design Pattern is a structural pattern that allows you to compose objects into tree structures to represent part-whole hierarchies. 
       It lets clients treat individual objects and compositions of objects uniformly."
  
  2. **Purpose:**
     - Explain the main purpose of using the Composite pattern:
  
       "The primary goal of the Composite pattern is to enable clients to work with individual objects and compositions of objects in a consistent manner.
        It facilitates the creation of complex tree structures where clients can treat leaf objects (individual elements) and composite objects (collections
           of elements) uniformly."
  
  3. **Key Components:**
     - Discuss the key components involved in the pattern:
  
       - **Component:**
         - "The Component is the common interface or abstract class that declares the methods common to both leaf and composite objects."
  
       - **Leaf:**
         - "A Leaf is a class that implements the Component interface. It represents individual objects in the hierarchy."
  
       - **Composite:**
         - "A Composite is a class that implements the Component interface as well. It can contain both leaf objects and other composite objects, 
         forming a recursive tree structure."
  
  4. **How It Works:**
     - Describe the typical workflow or process of how the Composite Design Pattern operates:
  
       "Clients interact with objects through the common interface (Component). Leaf objects represent individual elements, and composite objects 
       represent collections or hierarchies of elements. Clients can traverse the tree structure and perform operations uniformly on both individual 
       elements and collections."
  
  5. **Benefits:**
     - Highlight the advantages and benefits of using the Composite Design Pattern:
  
       - **Uniform Treatment:**
         - "Clients can treat individual objects and compositions of objects uniformly, simplifying the client code."
  
       - **Hierarchical Structures:**
         - "It facilitates the creation of hierarchical structures where elements can be nested within one another."
  
       - **Flexibility:**
         - "The pattern provides flexibility by allowing the addition of new leaf and composite classes without modifying existing client code."
  
  6. **Real-World Analogy (Optional):**
     - If applicable, use a real-world analogy to make the concept more relatable:
  
       "Think of a file system where a directory can contain both files and subdirectories. Clients can perform operations on individual files or 
       entire directory structures without knowing the exact type of element they are working with."
  
  7. **Example Usage:**
     - Provide a simple example or scenario where the Composite Design Pattern could be applied:
  
       "For instance, representing a graphical user interface (GUI) where both simple graphical elements (e.g., buttons and text fields) and complex 
       composite elements (e.g., panels containing other elements) can be treated uniformly."
  
  8. **Conclusion:**
     - Summarize the key points and reiterate the importance of the Composite Design Pattern in creating flexible and maintainable hierarchical structures 
     in software design.
  
  Remember to use clear language, provide concrete examples, and adapt the level of technical detail based on the interviewer's background and the context
   of the interview.
  */
