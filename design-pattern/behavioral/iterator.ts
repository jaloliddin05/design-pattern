/*
The Iterator Design Pattern is a behavioral pattern that provides a way to access elements of an aggregate object sequentially without exposing 
its underlying representation. It allows clients to traverse the elements of a collection without knowing the internal structure of the collection. 
The pattern defines an iterator interface with methods like next to access elements and a concrete iterator class that implements the interface.
*/

// Iterator interface
interface Iterator_<T> {
  next(): T | null;
  hasNext(): boolean;
}

// Aggregate interface
interface Aggregate<T> {
  createIterator(): Iterator_<T>;
}

// Concrete Iterator: BookIterator
class BookIterator implements Iterator_<string> {
  private books: string[];
  private index: number;

  constructor(books: string[]) {
    this.books = books;
    this.index = 0;
  }

  next(): string | null {
    if (this.hasNext()) {
      return this.books[this.index++];
    }
    return null;
  }

  hasNext(): boolean {
    return this.index < this.books.length;
  }
}

// Concrete Aggregate: BookCollection
class BookCollection implements Aggregate<string> {
  private books: string[];

  constructor() {
    this.books = [];
  }

  addBook(book: string): void {
    this.books.push(book);
  }

  createIterator(): Iterator_<string> {
    return new BookIterator(this.books);
  }
}

// Client Code
const bookCollection = new BookCollection();
bookCollection.addBook("Book 1");
bookCollection.addBook("Book 2");
bookCollection.addBook("Book 3");

const iterator = bookCollection.createIterator();

while (iterator.hasNext()) {
  const book = iterator.next();
  console.log(book);
}

/*
  Iterator Interface:
  
  The Iterator interface declares methods such as next to retrieve the next element and hasNext to check if there are more elements.
  Aggregate Interface:
  
  The Aggregate interface declares a method createIterator to create an iterator.
  Concrete Iterator: BookIterator:
  
  The BookIterator class implements the Iterator interface for iterating over a collection of books.
  Concrete Aggregate: BookCollection:
  
  The BookCollection class implements the Aggregate interface and maintains a collection of books. It has a method createIterator that creates 
  a BookIterator for the collection.
  Client Code:
  
  The client code creates a BookCollection, adds books to it, and then creates an iterator using createIterator. It iterates over the books using 
  the iterator and prints their names.
  This example demonstrates how the Iterator pattern allows clients to traverse a collection of books without exposing the internal structure of the 
  BookCollection. It promotes separation of concerns, allowing the collection and iterator to vary independently.
  
  The Iterator Design Pattern is particularly useful when you want to provide a standardized way to traverse different types of collections without 
  exposing their implementation details.
  
  
  
  -----------------------------------------------------------------------------------------------------------------------------------------------------
  
  
  When explaining the Iterator Design Pattern in an interview, you want to convey the purpose, structure, and benefits of the pattern. Here's a step-by-step 
  guide on how to explain the Iterator Design Pattern:
  
  1. **Definition:**
     - Start with a concise definition of the Iterator Design Pattern:
  
       "The Iterator Design Pattern is a behavioral pattern that provides a way to access elements of a collection sequentially without exposing its 
       underlying representation. It defines an interface for iterating over a collection and an iterator class that implements the interface."
  
  2. **Purpose:**
     - Explain the main purpose of using the Iterator pattern:
  
       "The primary goal of the Iterator pattern is to provide a standardized way to traverse the elements of a collection without exposing the internal 
       details of the collection. It promotes separation of concerns by isolating the traversal logic in an iterator, allowing clients to iterate over 
       different types of collections in a uniform manner."
  
  3. **Key Components:**
     - Discuss the key components involved in the pattern:
  
       - **Iterator Interface:**
         - "The Iterator interface declares methods such as `next` to retrieve the next element and `hasNext` to check if there are more elements."
  
       - **Concrete Iterator:**
         - "The Concrete Iterator class implements the Iterator interface and provides the actual implementation for traversing a specific collection."
  
       - **Aggregate Interface:**
         - "The Aggregate interface declares a method, often named `createIterator`, to create an iterator for a collection."
  
       - **Concrete Aggregate:**
         - "The Concrete Aggregate class implements the Aggregate interface and represents the collection. It provides a method to create an iterator for 
         the collection."
  
  4. **How It Works:**
     - Describe the typical workflow or process of how the Iterator Design Pattern operates:
  
       "Clients obtain an iterator from a collection by calling a method like `createIterator`. The iterator exposes methods such as `next` to retrieve 
       the next element and `hasNext` to check for the presence of more elements. Clients can then iterate over the collection without being concerned 
       about its internal structure."
  
  5. **Benefits:**
     - Highlight the advantages and benefits of using the Iterator Design Pattern:
  
       - **Separation of Concerns:**
         - "The pattern separates the concerns of collection traversal and the collection itself. Iterators encapsulate the traversal logic, making 
         it easier to change or extend the way elements are accessed without modifying the collection."
  
       - **Uniformity:**
         - "Clients can use a uniform interface to iterate over different types of collections, promoting code reuse and simplicity. It also allows 
         clients to work with collections without knowing their specific implementation details."
  
       - **Flexibility:**
         - "Adding new types of iterators or changing the traversal logic doesn't impact the existing code using iterators. It provides flexibility 
         to adapt to different iteration requirements."
  
  6. **Real-World Analogy (Optional):**
     - If applicable, use a real-world analogy to make the concept more relatable:
  
       "Think of an iterator as a tour guide for a group of tourists. The tour guide provides a standardized way for tourists to explore different 
       attractions without worrying about the details of each location's layout."
  
  7. **Example Usage:**
     - Provide a simple example or scenario where the Iterator Design Pattern could be applied:
  
       "For instance, in a music player application, the Iterator pattern could be used to iterate over a playlist, abstracting away the details of 
       how songs are stored or organized internally."
  
  8. **Conclusion:**
     - Summarize the key points and reiterate the importance of the Iterator Design Pattern in providing a consistent and flexible approach to
      iterating over collections.
  
  Remember to use clear language, provide concrete examples, and adapt the level of technical detail based on the interviewer's background and the 
  context of the interview.
  */
