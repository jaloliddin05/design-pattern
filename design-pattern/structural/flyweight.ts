/*
  The Flyweight Design Pattern is a structural pattern that focuses on optimizing memory usage or computational expenses by sharing common parts of state
  among multiple objects. It is particularly useful when dealing with a large number of similar objects, and the pattern minimizes the memory footprint by 
  sharing as much as possible between instances. Let's go through an example of the Flyweight Design Pattern in TypeScript.
*/

// Flyweight: Character
class Character {
  private character: string;

  constructor(character: string) {
    this.character = character;
  }

  print(fontSize: number): string {
    return `Character: ${this.character}, Font Size: ${fontSize}`;
  }
}

// Flyweight Factory: CharacterFactory
class CharacterFactory {
  private characterCache: { [key: string]: Character } = {};

  getCharacter(character: string): Character {
    if (!this.characterCache[character]) {
      this.characterCache[character] = new Character(character);
    }
    return this.characterCache[character];
  }
}

// Client Code
function clientCodes(charFactory: CharacterFactory): void {
  const charactersToPrint = ["A", "B", "A", "C", "B", "A"];

  const fontSize = 12;
  charactersToPrint.forEach((char) => {
    const character = charFactory.getCharacter(char);
    console.log(character.print(fontSize));
  });
}

// Usage
const characterFactory = new CharacterFactory();
clientCodes(characterFactory);

/*
  The Character class is the flyweight that represents a single character. It has an intrinsic state (the character itself) and an extrinsic state (font size).
  The CharacterFactory class acts as a flyweight factory, ensuring that each unique character is only created once and reused for subsequent requests.
  The clientCode function simulates the printing of characters with different font sizes. It requests characters from the CharacterFactory and prints their details.
  In this example, the CharacterFactory ensures that only one instance of a character is created, and subsequent requests for the same character reuse the 
  existing instance. This helps minimize memory usage when dealing with a large number of similar characters.
  
  The Flyweight Design Pattern is particularly beneficial when there is a significant amount of redundancy in the data shared among objects, and it allows for 
  efficient resource usage.
  
  
  
  -------------------------------------------------------------------------------------------------------------------------------------------------
  
  When explaining the Flyweight Design Pattern in an interview, it's important to communicate the purpose, structure, and benefits of the pattern.
   Here's a structured way to explain the Flyweight Design Pattern:
  
  1. **Definition:**
     - Start with a concise definition of the Flyweight Design Pattern:
  
       "The Flyweight Design Pattern is a structural pattern that aims to optimize memory usage or computational expenses by sharing common parts 
       of state among multiple objects. It is particularly useful when dealing with a large number of similar objects, allowing instances to share as
        much state as possible."
  
  2. **Purpose:**
     - Explain the main purpose of using the Flyweight pattern:
  
       "The primary goal of the Flyweight pattern is to minimize the memory footprint or computational costs associated with creating and managing a large 
       number of similar objects. By sharing common state (intrinsic state) among multiple instances, the pattern aims to reduce redundancy and improve efficiency."
  
  3. **Key Components:**
     - Discuss the key components involved in the pattern:
  
       - **Flyweight:**
         - "The Flyweight represents the shared state that can be shared among multiple objects. It contains intrinsic state that is common across instances."
  
       - **Concrete Flyweight:**
         - "Concrete Flyweights are actual instances of the Flyweight that implement the shared state. They may also include extrinsic state, which is unique 
         to each instance."
  
       - **Flyweight Factory:**
         - "The Flyweight Factory manages the creation and retrieval of Flyweight instances. It ensures that instances are shared and reused when appropriate."
  
  4. **How It Works:**
     - Describe the typical workflow or process of how the Flyweight Design Pattern operates:
  
       "When a client requests an object, the Flyweight Factory checks if an instance with the requested state already exists. If it does, the existing 
       instance is reused. If not, a new instance is created. This way, common state is shared among multiple instances, minimizing the overall memory usage."
  
  5. **Benefits:**
     - Highlight the advantages and benefits of using the Flyweight Design Pattern:
  
       - **Memory Optimization:**
         - "The pattern reduces memory usage by sharing common state among multiple instances, avoiding the need to duplicate the same data."
  
       - **Efficiency:**
         - "It improves computational efficiency by reusing existing instances, especially when dealing with a large number of similar objects."
  
       - **Scalability:**
         - "The Flyweight pattern is particularly useful in scenarios where a large number of objects need to be managed efficiently, contributing 
         to better scalability."
  
  6. **Real-World Analogy (Optional):**
     - If applicable, use a real-world analogy to make the concept more relatable:
  
       "Consider a book where each word is represented by a Flyweight. The words themselves (common state) are shared, and each word's position on 
       the page (extrinsic state) is unique to each instance. This sharing mechanism reduces the overall amount of text data needed to represent the book."
  
  7. **Example Usage:**
     - Provide a simple example or scenario where the Flyweight Design Pattern could be applied:
  
       "For instance, in a text editor where individual characters or fonts need to be represented efficiently, the Flyweight pattern can be used to
        share common characters or font styles among multiple instances."
  
  8. **Conclusion:**
     - Summarize the key points and reiterate the importance of the Flyweight Design Pattern in optimizing resource usage and improving the efficiency 
     of systems dealing with a large number of similar objects.
  
  Remember to use clear language, provide concrete examples, and adapt the level of technical detail based on the interviewer's background and the context 
  of the interview.
  */
