/*
Creational design patterns are a category of design patterns that deal with the process of object creation. 
These patterns provide mechanisms for creating objects in a way that is flexible, efficient, and suitable to the
specific needs of the application. Creational design patterns abstract the instantiation process, making it more independent of the system and its components.

There are several creational design patterns, each addressing different aspects of object creation. Some of the commonly recognized creational 
design patterns include:

1. **Singleton Pattern:**
   - Ensures that a class has only one instance and provides a global point of access to that instance.
   - Useful when exactly one object is needed to coordinate actions across the system.

2. **Factory Method Pattern:**
   - Defines an interface for creating an object but leaves the choice of its type to the subclasses, creating instances of multiple classes derived 
   from a common base class.
   - Useful when a class cannot anticipate the class of objects it must create.

3. **Abstract Factory Pattern:**
   - Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
   - Useful when you need to ensure that the created objects are compatible and can work together.

4. **Builder Pattern:**
   - Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
   - Useful when an object needs to be constructed with a large number of optional parameters.

5. **Prototype Pattern:**
   - Creates new objects by copying an existing object, known as the prototype.
   - Useful when creating new instances is more efficient by copying an existing instance.

6. **Object Pool Pattern:**
   - Manages a pool of reusable objects, avoiding the cost of creating and destroying objects frequently.
   - Useful in scenarios where the cost of initializing an object is high, and objects can be reused.

Creational design patterns play a crucial role in defining how objects are instantiated and managed within a system. They help in promoting flexibility,
 reusability, and maintaining a separation of concerns in object creation. The choice of which creational pattern to use depends on the specific 
 requirements and constraints of the system being designed.
*/