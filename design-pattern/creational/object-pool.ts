/*
The Object Pool Design Pattern is a creational pattern that manages a pool of reusable objects, avoiding the overhead of 
creating and destroying objects frequently. Instead of creating new objects, the pattern reuses existing objects from the pool, 
improving performance in scenarios where object creation is expensive.
*/

// Object to be pooled
class Connection {
  private id: number;

  constructor(id: number) {
    this.id = id;
  }

  connect(): void {
    console.log(`Connected to server with Connection ID: ${this.id}`);
  }

  disconnect(): void {
    console.log(`Disconnected from server with Connection ID: ${this.id}`);
  }
}

// Object Pool
class ConnectionPool {
  private static readonly MAX_POOL_SIZE: number = 5;
  private static instance: ConnectionPool;

  private pool: Connection[] = [];

  private constructor() {}

  static getInstance(): ConnectionPool {
    if (!ConnectionPool.instance) {
      ConnectionPool.instance = new ConnectionPool();
    }
    return ConnectionPool.instance;
  }

  acquireConnection(): Connection | null {
    if (this.pool.length > 0) {
      // Reuse an existing connection from the pool
      return this.pool.pop()!;
    } else if (this.pool.length < ConnectionPool.MAX_POOL_SIZE) {
      // Create a new connection if the pool is not at max capacity
      const newConnection = new Connection(this.pool.length + 1);
      return newConnection;
    } else {
      // The pool is at max capacity
      console.log("No available connections in the pool.");
      return null;
    }
  }

  releaseConnection(connection: Connection): void {
    // Release the connection back to the pool
    this.pool.push(connection);
  }
}

// Example Usage
const connectionPool = ConnectionPool.getInstance();

// Acquire connections
const connection1 = connectionPool.acquireConnection();
const connection2 = connectionPool.acquireConnection();

if (connection1 && connection2) {
  connection1.connect();
  connection2.connect();

  // Release connections back to the pool
  connectionPool.releaseConnection(connection1);
  connectionPool.releaseConnection(connection2);

  // Acquire and use the released connections
  const reusedConnection1 = connectionPool.acquireConnection();
  const reusedConnection2 = connectionPool.acquireConnection();

  if (reusedConnection1 && reusedConnection2) {
    reusedConnection1.connect();
    reusedConnection2.connect();

    // Clean up
    reusedConnection1.disconnect();
    reusedConnection2.disconnect();
  }
}

/*
  
  Connection Class:

Represents the object to be pooled (Connection in this case).
ConnectionPool Class:

Manages a pool of Connection objects.
Implements methods for acquiring and releasing connections.
Ensures that the pool does not exceed a maximum size.
Example Usage:

Acquires connections from the pool.
Uses and then releases connections back to the pool.
Acquires and reuses released connections.
This example illustrates how the Object Pool Design Pattern can be used to manage a pool of reusable objects (connections, in this case). 
It helps avoid the overhead of creating and destroying objects frequently, making the application more efficient, especially in scenarios 
where object creation is resource-intensive.



------------------------------------------------------------------------------------------------------------------------------------------

When explaining the Object Pool Design Pattern in an interview, you should provide a clear and concise description of the pattern, its purpose, 
and how it is implemented. Here's a structured way to explain the Object Pool Design Pattern:

1. **Introduction:**
   - Start with a brief definition of the Object Pool Design Pattern:

     "The Object Pool Design Pattern is a creational pattern that manages a pool of reusable objects. The pattern is designed to improve performance by 
     avoiding the overhead of creating and destroying objects frequently."

2. **Purpose:**
   - Explain the main purpose of using the Object Pool Design Pattern:

     "The primary goal of the Object Pool Pattern is to enhance efficiency in scenarios where creating and destroying objects is resource-intensive.
      Instead of creating new objects, the pattern allows for reusing existing objects from a managed pool."

3. **Key Components:**
   - Discuss the key components involved in the pattern:

     - **Object to be Pooled:**
       - Mention the class or type of objects that are being managed in the pool.

     - **Object Pool:**
       - Explain the central component responsible for managing and providing access to the pool of objects.

4. **How It Works:**
   - Describe the typical workflow or process of how the Object Pool Pattern operates:

     "When an object is needed, the client requests it from the pool. If an available (idle) object is present in the pool, it is returned to the client.
      If no idle object is available and the pool is not at its maximum capacity, a new object is created and provided to the client. After the client is 
      done using the object, it is returned to the pool for future reuse."

5. **Benefits:**
   - Highlight the advantages and benefits of using the Object Pool Design Pattern:

     - **Performance Improvement:**
       - "The pattern significantly reduces the overhead of creating and destroying objects, leading to improved performance."

     - **Resource Efficiency:**
       - "By reusing existing objects, the pattern helps in efficiently managing system resources."

6. **Real-World Analogy (Optional):**
   - If applicable, use a real-world analogy to make the concept more relatable:

     "Think of an object pool like a lending library for objects. Instead of buying or creating a new book (object) each time you need it, you borrow one 
     from the library. After you're done, you return it to the library for others to use."

7. **Example Usage:**
   - Provide a simple example or scenario where the Object Pool Pattern could be applied:

     "For instance, in a network application, managing a pool of connection objects can help reduce the overhead of establishing and tearing down connections 
     repeatedly."

8. **Conclusion:**
   - Summarize the key points and reiterate the significance of the Object Pool Design Pattern in improving performance and resource management.

Remember to adapt your explanation based on the technical level of the interviewer and provide a clear and logical presentation of the Object Pool Design Pattern.


*/
