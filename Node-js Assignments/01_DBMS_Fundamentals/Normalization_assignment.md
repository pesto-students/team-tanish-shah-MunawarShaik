## Question 1: Normalization

Consider the following unnormalized table for a bookstore database:

| Book ID | Title                 | Author              | Genre   | Publisher     | ISBN           | Price |
| ------- | --------------------- | ------------------- | ------- | ------------- | -------------- | ----- |
| 101     | To Kill a Mockingbird | Harper Lee          | Fiction | HarperCollins | 978-0061120084 | 10.99 |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction | Scribner      | 978-0743273565 | 12.50 |
| 103     | Principles of Physics | Jearl Walker        | Science | Wiley         | 978-0321976444 | 50.00 |

Normalize the table to 1NF, 2NF, and 3NF, explaining the steps you took at each normalization level.

## Ans :-1NF (First Normal Form): The table already satisfies 1NF because all the cells contain atomic values.

| Book ID | Title                 | Author              | Genre   | Publisher     | ISBN           | Price |
| ------- | --------------------- | ------------------- | ------- | ------------- | -------------- | ----- |
| 101     | To Kill a Mockingbird | Harper Lee          | Fiction | HarperCollins | 978-0061120084 | 10.99 |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction | Scribner      | 978-0743273565 | 12.50 |
| 103     | Principles of Physics | Jearl Walker        | Science | Wiley         | 978-0321976444 | 50.00 |

## ANS :- 2NF (Second Normal Form): To achieve 2NF, we should create separate tables for authors, genres, and publishers, and reference them using foreign keys in the main table.

Books Table:

Book ID | Title | ISBN |Price|
101 |To Kill a Mockingbird |978-0061120084 |10.99|
102 |The Great Gatsby |978-0743273565 |12.50|
103 |Principles of Physics |978-0321976444 |50.00|

Authors Table:

|Author ID |Author |
|1 |Harper Lee |
|2 |F. Scott Fitzgerald |
|3 |Jearl Walker |

Genres Table:

|Genre ID | Genre |
|1 |Fiction |
|2 |Science |

Publishers Table:

|Publisher ID |Publisher |
|1 |HarperCollins |
|2 |Scribner |
|3 |Wiley |

## ANS :- 3NF (Third Normal Form):

To achieve 3NF, we need to eliminate transitive dependencies. In the 2NF version, we still have a transitive dependency where "Genre" depends on "Title" (through "Book ID").

Transitive Dependency: "Genre" depends on "Title."
To eliminate this dependency, we can create a new table for "Title" and "Genre" and use "Title" as the primary key.

Titles Table:

|Title |Genre ID|
|To Kill a Mockingbird |1 |
|The Great Gatsby |1 |
|Principles of Physics |2 |

### Step-by-Step Guidelines:

### Step 1: First Normal Form (1NF)

Ensure each column contains atomic values.
Eliminate repeating groups.
Result: The table should not contain any repeating groups.

### Step 2: Second Normal Form (2NF)

Identify the primary key(s).
Eliminate partial dependencies.
Result: The table should be in 2NF with separate tables for each entity and its attributes.

### Step 3: Third Normal Form (3NF)

Remove transitive dependencies.
Result: The table should be in 3NF with separate tables for each relationship.

### Step 4: Fourth Normal Form (4NF)

Remove multi-valued dependencies.
Result: The table should be in 4NF with separate tables for independent multi-valued attributes.

### Step 5: Fifth Normal Form (5NF) [If Applicable]

Apply 5NF if the database has complex multi-valued relationships.
In some cases, 5NF may not be necessary, as it applies to certain complex databases. If 5NF is applicable, it usually deals with cases of lossless-join decompositions.

Note: The normalization process may involve additional steps and considerations depending on the complexity of the original table and the specific database design. Always aim to minimize redundancy, improve data integrity, and optimize the structure of the database.

## Question 3: What are the primary keys and foreign keys in a relational database, and how do they establish relationships between tables?

## Ans :-

Primary Key: A primary key is a unique identifier for an entity. It ensures that each instance of the entity is distinct. Primary keys are denoted in ERDs by underlining the attribute.

Foreign Key: A foreign key is an attribute that creates a link between two entities. It is used to establish relationships between entities.

## Question 4: Explain the ACID properties in the context of database transactions.

## Ans :-

ACID stands for Atomicity, Consistency, Isolation, and Durability.

1. Atomicity
   Atomicity guarantees that a transaction is treated as a single, indivisible unit. Either all the changes within a transaction are committed, or none of them are. This property prevents partial or incomplete updates to the database.

2. Consistency
   Consistency ensures that a transaction takes the database from one consistent state to another. In other words, a transaction should bring the database from one valid state to another valid state, maintaining data integrity and adhering to defined constraints.

3. Isolation
   Isolation ensures that transactions can occur concurrently without interfering with each other. Even though multiple transactions may be executed simultaneously, the end result should be the same as if they were executed sequentially. Isolation prevents "dirty reads" and "phantom reads."

4. Durability
   Durability guarantees that once a transaction is committed, its effects are permanent and will survive any subsequent system failures. Committed data will not be lost, even in the face of power outages, crashes, or other disruptions.

## Question 5: Describe the concept of indexing in a database. How does indexing improve query performance?

## Ans :-

In a DBMS, an index is a data structure that enhances the speed of data retrieval operations on a database table at the cost of additional storage space and maintenance overhead. Indexes are akin to the index of a book, which allows you to quickly locate information in the book without having to read every page sequentially.

Improved Query Performance: Indexes make data retrieval operations significantly faster, especially when dealing with large datasets. Without indexes, the database engine would have to scan the entire table, which can be inefficient and time-consuming.

## Question 6: Explain the concept of concurrency control, deadlocks in a multi-user database environment.

Concurrency control is a mechanism used in multi-user database systems to manage and coordinate multiple transactions (e.g., queries, updates) accessing the database concurrently.There are several methods to achieve concurrency control:
a. Locking
b. Serializability
c. Timestamp-based Ordering
d. Two-Phase Locking (2PL)

A deadlock is a situation in which two or more transactions or processes are unable to proceed because they are each waiting for the other to release a resource.There are various techniques to handle deadlocks:

a. Timeouts
b. Resource Allocation Graphs
c. Wait-Die and Wound-Wait
d. Deadlock Detection and

## Question 7: Read about Database sharding and explain couple of real time examples where, why, how it this concept is used.

Database sharding is a technique used in database management to improve performance and scalability by distributing data across multiple servers or databases. It involves breaking a large database into smaller, more manageable parts called shards, which can be stored on separate hardware or database instances

1. Social Media Platforms:
   Example: Facebook
2. E-commerce Platforms:
   Example: Amazon
