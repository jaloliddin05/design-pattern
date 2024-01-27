/*
The Interpreter Design Pattern is a behavioral pattern that defines a grammar for interpreting the sentences in a language and provides an 
interpreter to interpret those sentences. This pattern is particularly useful when you need to interpret a language or perform operations based on 
certain grammar rules.
*/

// Context: Context object that contains the current state
class Context {
  private variables: { [key: string]: number } = {};

  public getVariableValue(variable: string): number {
    return this.variables[variable] || 0;
  }

  public setVariableValue(variable: string, value: number): void {
    this.variables[variable] = value;
  }
}

// Abstract Expression
interface Expression {
  interpret(context: Context): number;
}

// Terminal Expression: NumberExpression
class NumberExpression implements Expression {
  constructor(private value: number) {}

  interpret(context: Context): number {
    return this.value;
  }
}

// Terminal Expression: VariableExpression
class VariableExpression implements Expression {
  constructor(private variable: string) {}

  interpret(context: Context): number {
    return context.getVariableValue(this.variable);
  }
}

// Non-terminal Expression: AddExpression
class AddExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}

  interpret(context: Context): number {
    return this.left.interpret(context) + this.right.interpret(context);
  }
}

// Non-terminal Expression: SubtractExpression
class SubtractExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}

  interpret(context: Context): number {
    return this.left.interpret(context) - this.right.interpret(context);
  }
}

// Client Code
const context = new Context();
context.setVariableValue("x", 10);
context.setVariableValue("y", 5);

const expression = new AddExpression(
  new VariableExpression("x"),
  new SubtractExpression(new NumberExpression(20), new VariableExpression("y"))
);

const result = expression.interpret(context);
console.log("Result:", result); // Output: Result: 25

/*
  Context:
  
  Context contains the current state, which includes variable values.
  Abstract Expression:
  
  Expression is an interface that declares the interpret method.
  Terminal Expressions:
  
  NumberExpression represents a numeric constant.
  VariableExpression represents a variable.
  Non-terminal Expressions:
  
  AddExpression and SubtractExpression represent addition and subtraction operations, respectively.
  Client Code:
  
  The client creates a context and sets variable values.
  It constructs an expression representing an arithmetic operation involving variables.
  The expression is then interpreted, and the result is obtained.
  In this example, the Interpreter pattern is used to interpret a simple arithmetic language. The Context object maintains the state, and different 
  expressions interpret the language's grammar rules. The client creates expressions based on the language, and the interpreter evaluates them in the given context.
  
  This pattern is suitable for scenarios where you need to define a grammar for a language and provide an interpreter to evaluate expressions in that 
  language. It's often used in parsing and compiler-related tasks.
  
  
  -----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  
  When explaining the Interpreter Design Pattern in an interview, you can follow a structured approach to communicate the purpose, components, 
  and benefits of the pattern. Here's a step-by-step guide on how to explain the Interpreter Design Pattern:
  
  1. **Definition:**
     - Start with a clear definition of the Interpreter Design Pattern:
  
       "The Interpreter Design Pattern is a behavioral pattern that provides a way to evaluate language grammar or expressions. It defines a grammar 
       for the language and an interpreter that interprets sentences in that language."
  
  2. **Purpose:**
     - Explain the main purpose of using the Interpreter pattern:
  
       "The primary goal of the Interpreter pattern is to define a language grammar and provide an interpreter that can interpret expressions written 
       in that language. It is particularly useful in scenarios where you need to parse and interpret sentences or expressions based on a specific grammar."
  
  3. **Key Components:**
     - Discuss the key components involved in the pattern:
  
       - **Context:**
         - "The Context object contains the current state and any necessary information for the interpretation process."
  
       - **Abstract Expression:**
         - "The Expression interface or abstract class declares the `interpret` method that concrete expressions must implement."
  
       - **Terminal Expressions:**
         - "Terminal expressions represent basic elements of the language, such as constants or variables."
  
       - **Non-terminal Expressions:**
         - "Non-terminal expressions represent complex language constructs formed by combining terminal and/or other non-terminal expressions."
  
  4. **How It Works:**
     - Describe the typical workflow or process of how the Interpreter Design Pattern operates:
  
       "Clients create expressions by combining terminal and non-terminal expressions according to the language grammar. The interpreter evaluates 
       these expressions in the given context, producing the desired results."
  
  5. **Benefits:**
     - Highlight the advantages and benefits of using the Interpreter Design Pattern:
  
       - **Flexibility:**
         - "The pattern provides a flexible way to define and extend grammars, allowing for easy adaptation to different languages or changes in language rules."
  
       - **Separation of Concerns:**
         - "It separates the concerns of language grammar and interpretation, making it easier to maintain and extend the interpreter without modifying 
         the language grammar."
  
       - **Reusability:**
         - "Expressions can be reused in different contexts, and the same interpreter can be applied to various expressions, promoting code reusability."
  
  6. **Real-World Analogy (Optional):**
     - If applicable, use a real-world analogy to make the concept more relatable:
  
       "Think of an interpreter as a language translator. The language translator interprets spoken or written language (expressions) from one language 
       to another based on grammar rules."
  
  7. **Example Usage:**
     - Provide a simple example or scenario where the Interpreter Design Pattern could be applied:
  
       "For instance, in a mathematical expression evaluator, the Interpreter pattern can be used to interpret and evaluate mathematical expressions 
       based on the rules of arithmetic."
  
  8. **Conclusion:**
     - Summarize the key points and reiterate the importance of the Interpreter Design Pattern in parsing and interpreting languages or expressions.
  
  Remember to use clear language, provide concrete examples, and adapt the level of technical detail based on the interviewer's background and the 
  context of the interview.
  */
