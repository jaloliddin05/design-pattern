/*
The Template Design Pattern is a behavioral pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific 
steps of the algorithm without changing its structure. It is used to define a common structure for a series of algorithms while allowing some steps to 
be implemented by the subclasses.
*/

// Abstract Class - Template
abstract class AbstractMealTemplate {
  // Template Method
  prepareMeal(): void {
    this.prepareIngredients();
    this.cook();
    this.serve();
  }

  // Abstract methods to be implemented by subclasses
  abstract prepareIngredients(): void;
  abstract cook(): void;
  abstract serve(): void;
}

// Concrete Class - BreakfastMeal
class BreakfastMeal extends AbstractMealTemplate {
  prepareIngredients(): void {
    console.log("Gathering ingredients for a delicious breakfast.");
  }

  cook(): void {
    console.log("Cooking breakfast items.");
  }

  serve(): void {
    console.log("Serving a delightful breakfast.");
  }
}

// Concrete Class - DinnerMeal
class DinnerMeal extends AbstractMealTemplate {
  prepareIngredients(): void {
    console.log("Collecting ingredients for a hearty dinner.");
  }

  cook(): void {
    console.log("Cooking dinner dishes.");
  }

  serve(): void {
    console.log("Serving a satisfying dinner.");
  }
}

// Client Code
const breakfastMeal = new BreakfastMeal();
breakfastMeal.prepareMeal();

const dinnerMeal = new DinnerMeal();
dinnerMeal.prepareMeal();

/*
  Abstract Class - Template (AbstractMealTemplate):

Defines the template method (prepareMeal) that outlines the algorithm's structure.
Contains abstract methods (prepareIngredients, cook, serve) that represent steps to be implemented by subclasses.
Concrete Classes (BreakfastMeal and DinnerMeal):

Subclasses of the abstract class.
Implement the abstract methods, providing specific implementations for each step of the algorithm.
Client Code:

Instantiates objects of concrete classes.
Calls the common template method (prepareMeal) on each object, executing the algorithm.
Benefits of the Template Design Pattern:

Code Reusability: The common algorithm is defined in the superclass, promoting code reuse.
Flexibility: Subclasses can provide specific implementations for individual steps while adhering to the overall structure.
Encapsulation: The details of the algorithm are encapsulated in the abstract class.
Use Cases:

When you want to define a common algorithm but allow flexibility in certain steps.
In scenarios where a series of steps need to be followed, but some steps can be customized by subclasses.
In the example, the AbstractMealTemplate defines a template method for preparing a meal, with specific steps for gathering ingredients, 
cooking, and serving. The concrete classes (BreakfastMeal and DinnerMeal) provide their implementations for each step. The client 
code can create instances of these concrete classes and use the common template method to prepare meals.


-------------------------------------------------------------------------------------------------------------------------------------


When explaining the Template Design Pattern in an interview, it's essential to provide a clear and concise overview. Here's a step-by-step guide 
on how to explain the Template Design Pattern:

1. **Definition:**
   - Start with a succinct definition of the Template Design Pattern:

     "The Template Design Pattern is a behavioral pattern that defines the skeleton of an algorithm in the superclass but allows subclasses to override 
     specific steps of the algorithm without changing its structure."

2. **Purpose:**
   - Explain the primary purpose of using the Template Design Pattern:

     "The main goal of the Template pattern is to provide a common structure for a series of algorithms while allowing some steps to be implemented by 
     subclasses. It promotes code reuse, encapsulates algorithm details, and allows flexibility in specific steps."

3. **Key Components:**
   - Describe the key components involved in the pattern:

     - **Abstract Class (Template):**
       - "The abstract class, also known as the template class, defines the template method that outlines the algorithm's structure."
       - "May include abstract methods representing steps to be implemented by subclasses."

     - **Concrete Classes:**
       - "Concrete classes extend the abstract class and provide specific implementations for the abstract methods, customizing individual steps of the algorithm."

4. **How It Works:**
   - Walk through the typical workflow or process of how the Template Design Pattern operates:

     "The abstract class contains a template method that calls various steps, including abstract methods. Subclasses extend the abstract class and 
     provide concrete implementations for these abstract methods. When a client uses an object of a concrete class, it invokes the template method, 
     and the algorithm follows the structure defined in the abstract class."

5. **Benefits:**
   - Highlight the advantages and benefits of using the Template Design Pattern:

     - **Code Reusability:**
       - "The pattern promotes code reuse by defining a common algorithm in the abstract class."

     - **Flexibility:**
       - "It allows flexibility in the implementation of specific steps, enabling subclasses to customize parts of the algorithm."

     - **Encapsulation:**
       - "Algorithm details are encapsulated in the abstract class, making it easier to manage and understand."

6. **Real-World Analogy (Optional):**
   - If applicable, use a real-world analogy to make the concept more relatable:

     "Consider a recipe as a real-world analogy. The recipe provides a general structure (ingredients, steps) for preparing a dish. Different chefs 
     can follow the same recipe but add their touches and variations to specific steps."

7. **Example Usage:**
   - Provide a simple example or scenario where the Template Design Pattern could be applied:

     "For instance, in software development, the template pattern could be used for creating different reports with a common structure. 
     The abstract class defines the overall report generation process, while subclasses provide specific implementations for data retrieval, 
     formatting, and presentation."

8. **Conclusion:**
   - Summarize the key points and emphasize how the Template Design Pattern facilitates the creation of a common algorithm structure with customizable steps.

Remember to use clear language, provide concrete examples, and adapt the level of technical detail based on the interviewer's background and the 
context of the interview.
*/
