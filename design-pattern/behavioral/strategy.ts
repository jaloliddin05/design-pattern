/*
The Strategy Design Pattern is a behavioral pattern that defines a family of algorithms, encapsulates each algorithm, and makes them interchangeable. 
It allows the client to choose an algorithm from a family of algorithms at runtime without altering the client's code. Let's go through an example of 
the Strategy Design Pattern in TypeScript.
*/

// Strategy Interface
interface PaymentStrategy {
  pay(amount: number): void;
}

// Concrete Strategies
class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using Credit Card`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using PayPal`);
  }
}

class BankTransferPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using Bank Transfer`);
  }
}

// Context
class ShoppingCart {
  private paymentStrategy: PaymentStrategy;

  constructor(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  checkout(amount: number): void {
    this.paymentStrategy.pay(amount);
  }

  setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
    this.paymentStrategy = paymentStrategy;
  }
}

// Client Code
const shoppingCart = new ShoppingCart(new CreditCardPayment());

// Customer purchases using the current payment strategy (Credit Card)
shoppingCart.checkout(100);

// Customer switches to PayPal for the next purchase
shoppingCart.setPaymentStrategy(new PayPalPayment());
shoppingCart.checkout(50);

// Customer switches to Bank Transfer for another purchase
shoppingCart.setPaymentStrategy(new BankTransferPayment());
shoppingCart.checkout(200);

/*
  Strategy Interface:
  
  The PaymentStrategy interface declares a method pay that represents the payment algorithm.
  Concrete Strategies:
  
  The CreditCardPayment, PayPalPayment, and BankTransferPayment classes implement the PaymentStrategy interface and provide specific payment algorithms.
  Context:
  
  The ShoppingCart class is the context that contains a reference to a PaymentStrategy.
  The checkout method delegates the payment operation to the current PaymentStrategy.
  Client Code:
  
  The client creates a ShoppingCart with an initial payment strategy (Credit Card).
  The client can change the payment strategy dynamically using the setPaymentStrategy method.
  In this example, the Strategy Design Pattern is used to implement different payment strategies (CreditCardPayment, PayPalPayment, and BankTransferPayment). 
  The ShoppingCart context can switch between these strategies at runtime, allowing flexibility in payment processing without modifying the client code.
  
  
  
  ----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  
  
  When explaining the Strategy Design Pattern:
  
  Definition:
  
  "The Strategy Design Pattern defines a family of algorithms, encapsulates each algorithm, and makes them interchangeable. It allows a client to choose 
  an algorithm from a family of algorithms at runtime."
  Purpose:
  
  "The main purpose is to enable the client to vary its behavior by selecting an appropriate algorithm at runtime. It promotes encapsulation and allows 
  for easy extension with new algorithms."
  Key Components:
  
  "The key components include the Strategy Interface, Concrete Strategies, and the Context. The Strategy Interface declares the algorithm, 
  and Concrete Strategies provide specific implementations. The Context maintains a reference to a strategy and delegates the algorithm's execution to it."
  How It Works:
  
  "The client interacts with the context, and the context, in turn, delegates the task to the current strategy. The client can dynamically 
  change the strategy at runtime."
  Benefits:
  
  "Benefits include flexibility, encapsulation, and easy extensibility. Clients can choose different algorithms without altering their code, 
  and new algorithms can be added without modifying existing code."
  Real-World Analogy (Optional):
  
  "Think of a sorting algorithm as a real-world analogy. You may have different sorting algorithms (strategies) like bubble sort, quicksort, 
  and merge sort. Depending on the size or type of data, you can dynamically choose the most suitable sorting algorithm."
  Example Usage:
  
  "In the example, the payment processing in a shopping cart is a common use case. Different payment strategies can be applied based on customer 
  preferences or business requirements."
  Conclusion:
  
  "In conclusion, the Strategy pattern provides a flexible way to manage algorithms, allowing clients to choose and switch between them at runtime. 
  It enhances code maintainability and extensibility."
  Remember to adapt the level of technical detail based on the interviewer's background and the context of the interview.
  */
