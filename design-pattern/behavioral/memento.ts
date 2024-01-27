/*
The Memento Design Pattern is a behavioral pattern that provides the ability to capture an object's internal state and externalize it so that the 
object can be restored to this state later. This pattern is particularly useful when you need to implement undo functionality or maintain a history of 
an object's state.
*/

// Originator: TextEditor
class TextEditor {
  private content: string;

  constructor() {
    this.content = "";
  }

  type(text: string): void {
    this.content += text;
  }

  getContent(): string {
    return this.content;
  }

  save(): Memento {
    return new ConcreteMemento(this.content);
  }

  restore(memento: Memento): void {
    this.content = memento.getState();
  }
}

// Memento Interface
interface Memento {
  getState(): string;
}

// Concrete Memento: ConcreteMemento
class ConcreteMemento implements Memento {
  constructor(private state: string) {}

  getState(): string {
    return this.state;
  }
}

// Caretaker: History
class History_ {
  private mementos: Memento[] = [];

  addMemento(memento: Memento): void {
    this.mementos.push(memento);
  }

  getMemento(index: number): Memento | null {
    if (index >= 0 && index < this.mementos.length) {
      return this.mementos[index];
    }
    return null;
  }
}

// Client Code
const textEditor = new TextEditor();
const history_ = new History_();

textEditor.type("Hello, ");
history_.addMemento(textEditor.save());

textEditor.type("World!");
history_.addMemento(textEditor.save());

console.log("Current Content:", textEditor.getContent());

// UndogetContent
const undoMemento = history_.getMemento(0);
if (undoMemento) {
  textEditor.restore(undoMemento);
}

console.log("After Undo:", textEditor.getContent());

/*
  Originator: TextEditor
  
  The TextEditor class is the originator that has an internal state (content) that can be modified.
  Memento Interface
  
  The Memento interface declares a method getState to retrieve the state of the object.
  Concrete Memento: ConcreteMemento
  
  The ConcreteMemento class implements the Memento interface and holds the actual state of the TextEditor.
  Caretaker: History
  
  The History class keeps track of mementos and allows adding and retrieving them.
  Client Code
  
  The client code creates a TextEditor and a History.
  The user types text into the editor, and the editor saves the state as a memento in the history.
  The client can later retrieve mementos from the history and restore the editor's state.
  This example demonstrates how the Memento pattern allows the TextEditor to save and restore its state using mementos. The History class acts 
  as a caretaker, managing the history of states. Users can type, save states, and undo changes by restoring previous states.
  
  The Memento Design Pattern is useful when you need to implement a mechanism for undo/redo functionality or maintain a history of an object's state. 
  It allows objects to capture and externalize their internal state without exposing the details of that state.
  
  
  ---------------------------------------------------------------------------------------------------------------------------------------------------
  
  
  When explaining the Memento Design Pattern in an interview, you want to cover its purpose, structure, and benefits. Here's a step-by-step 
  guide on how to explain the Memento Design Pattern:
  
  1. **Definition:**
     - Start with a concise definition of the Memento Design Pattern:
  
       "The Memento Design Pattern is a behavioral pattern that provides the ability to capture and externalize an object's internal state so that the 
       object can be restored to this state later. It is used to implement undo mechanisms, history tracking, or any feature that requires the ability to 
       revert an object to a previous state."
  
  2. **Purpose:**
     - Explain the main purpose of using the Memento pattern:
  
       "The primary goal of the Memento pattern is to allow objects to capture their internal state and save it in a separate object known as a memento. 
       This memento can later be used to restore the object to its previous state, providing the ability to undo changes or revert to a specific point in time."
  
  3. **Key Components:**
     - Discuss the key components involved in the pattern:
  
       - **Originator:**
         - "The Originator is the object whose state needs to be saved. It has methods to capture its current state (`save`) and restore its state from 
         a memento (`restore`)."
  
       - **Memento:**
         - "The Memento is an object that represents the state of the Originator at a particular point in time. It has a method (`getState`) to 
         retrieve the saved state."
  
       - **Caretaker:**
         - "The Caretaker is responsible for keeping track of the mementos. It manages the history of the Originator's states and allows for undo 
         or history functionality."
  
  4. **How It Works:**
     - Describe the typical workflow or process of how the Memento Design Pattern operates:
  
       "When an Originator needs to save its state, it creates a Memento object and stores its state in it. The Memento is then passed to the Caretaker, 
       which keeps track of the mementos. Later, if the Originator needs to revert to a previous state, it retrieves the desired Memento from the 
       Caretaker and restores its state."
  
  5. **Benefits:**
     - Highlight the advantages and benefits of using the Memento Design Pattern:
  
       - **Undo/Redo Functionality:**
         - "The Memento pattern enables the implementation of undo and redo functionality in applications by maintaining a history of an object's states."
  
       - **Isolation of State:**
         - "It isolates the internal state of an object, preventing direct access. This promotes encapsulation and information hiding."
  
       - **History Tracking:**
         - "It allows the creation of a history of an object's states, facilitating features such as versioning or auditing."
  
  6. **Real-World Analogy (Optional):**
     - If applicable, use a real-world analogy to make the concept more relatable:
  
       "Think of a Memento as a snapshot of a document's state. When you save a document, you create a snapshot (memento) that represents its content 
       at that moment. Later, if you want to revert to a previous version, you can restore the document from the saved snapshot."
  
  7. **Example Usage:**
     - Provide a simple example or scenario where the Memento Design Pattern could be applied:
  
       "For instance, in a text editor application, the Memento pattern can be used to implement undo and redo functionality. Each time the user makes a 
       change, a memento is created and stored in a history. The user can then undo or redo changes by restoring states from the history."
  
  8. **Conclusion:**
     - Summarize the key points and emphasize the versatility of the Memento pattern in managing an object's state over time.
  
  Remember to use clear language, provide concrete examples, and adapt the level of technical detail based on the interviewer's background and the 
  context of the interview.
  */
