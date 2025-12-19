import "./Mysql.css";
import "../globalStyle.css";
import images from "../../../assets/Mysql/index"

export const Mysql = () => {
  return (
    <div className="main-container-interview-questions">
      <div>
        <p className="main-heading-q-a">
          MYSQL Interview Questions and Answers
        </p>
        <div className="main-heading-interview-questions-answers">
          <img
            className="img-class-language-logo"
            src={images.Mysql_logo}
          />
          <p>
            MySQL is a popular open-source relational database management system
            (RDBMS) that is widely used for storing, organizing, and retrieving
            data in various applications and websites. Developed by MySQL AB,
            now owned by Oracle Corporation, MySQL offers a robust, scalable,
            and reliable database solution that is trusted by businesses,
            developers, and organizations worldwide.
            <br /> It supports a wide range of features including SQL queries,
            transactions, indexes, stored procedures, and triggers, making it
            suitable for diverse use cases ranging from small-scale web
            applications to large-scale enterprise systems. With its ease of
            use, high performance, and extensive community support, MySQL
            continues to be a preferred choice for developers and businesses
            seeking a cost-effective and efficient database solution.
          </p>
        </div>
      </div>

      <section className="question-answer">
        {/* <!-- 1 --> */}
        <h4 id="1-what-is-sql-">1. What is SQL?</h4>
        <p>
          SQL stands for <strong>Structured Query Language.</strong> It is a
          domain-specific programming language designed for managing and
          manipulating relational databases. SQL provides a standardized way to
          interact with relational database management systems (RDBMS), allowing
          users to perform tasks such as querying data, updating records, and
          defining the structure of a database.
        </p>
        {/* <!-- 2 --> */}
        <h4 id="2-what-is-mysql-">2. What is MySQL?</h4>
        <p>
          MySQL is an open-source relational database management system (RDBMS)
          that uses Structured Query Language (SQL), a standard language for
          interacting with databases. It is widely used for managing and
          manipulating data in databases.
        </p>
        {/* <!-- 3 --> */}
        <h4 id="3-what-is-difference-between-dbms-and-rdbms-">
          3. What is difference between DBMS and RDBMS?
        </h4>
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>DBMS</th>
              <th>RDBMS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                DBMS can manage any type of data, and it does not necessarily
                enforce relationships between tables. It may support different
                data models such as hierarchical, network, or relational.
              </td>
              <td>
                RDBMS specifically manages data using a relational model, where
                data is organized into tables with rows and columns. Tables can
                be related to each other through defined relationships.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                While DBMS systems may provide some mechanisms for ensuring data
                integrity, they do not enforce relationships between tables or
                provide features like referential integrity.
              </td>
              <td>
                RDBMS enforces data integrity through features like primary
                keys, foreign keys, and constraints, ensuring that relationships
                between tables are maintained and preventing inconsistencies in
                the data.?
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                DBMS systems may or may not support normalization, a process of
                organizing data to minimize redundancy and dependency.
              </td>
              <td>
                RDBMS typically supports normalization, and it encourages the
                use of normalization techniques to reduce redundancy and improve
                data consistency.
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                DBMS offers more flexibility in terms of data modeling and
                structure. It is not constrained to the rules of the relational
                model.
              </td>
              <td>
                RDBMS has a more structured and rigid approach to data
                management, adhering to the principles of the relational model.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        {/* <!-- 4 --> */}
        <h4 id="4-what-is-table-record-tuple-and-field-">
          4. What is table, record, tuple and field?
        </h4>
        <ul>
          <li>
            <p>
              <strong>Table:</strong> In MySQL, a table is a collection of data
              organized into rows and columns. Each table represents a specific
              entity (such as customers, products, or orders) and defines the
              structure of the data it contains. Tables are the basic building
              blocks of a relational database.
            </p>
          </li>
          <li>
            <p>
              <strong>Record (or Row):</strong> A record, also known as a row,
              is a single entry or a set of related data in a table. Each row in
              a table represents a unique instance of the entity the table is
              designed to store. For example, in a &quot;Customers&quot; table,
              each row might represent information about a specific customer,
              including details such as name, address, and contact information.
            </p>
          </li>
          <li>
            <p>
              <strong>Field (or Column):</strong> A field, also known as a
              column, is a single data element within a record. It represents a
              specific attribute of the entity the table is designed to store.
              For instance, in a &quot;Customers&quot; table, fields might
              include &quot;CustomerID,&quot; &quot;FirstName,&quot;
              &quot;LastName,&quot; &quot;Address,&quot; and so on. Each column
              has a data type that defines the kind of data it can store, such
              as integer, varchar (variable character), date, etc.
            </p>
          </li>
          <li>
            <p>
              <strong>Tuple:</strong> The term &quot;tuple&quot; is sometimes
              used interchangeably with &quot;record&quot; or &quot;row.&quot;
              In the context of a relational database, a tuple typically refers
              to a single entry or record in a table.
            </p>
          </li>
        </ul>
        <p>
          <strong>Table Example(&quot;Customers&quot;):</strong>
        </p>
        <p>
          <img src={images.four4} alt="output4" className="img-cls" />
        </p>
        {/* <!-- 5  --> */}

        <h4 id="5-what-is-ddl-statements-">5. What is DDL statements?</h4>
        <p>
          DDL is stands for <strong>Data Definition Language.</strong> It is
          used to define and manage the structure of a database. Here are some
          common DDL statements in MySQL.
        </p>
        <ul>
          <li>
            <strong>CREATE:</strong> Creates a new database or table.
          </li>
          <li>
            <strong>ALTER:</strong> Modifies the structure of an existing table,
            such as adding or modifying columns.
          </li>
          <li>
            <strong>DROP:</strong> Deletes an existing database or table.
          </li>
          <li>
            <strong>TRUNCATE:</strong> Removes all records from a table but
            retains the table structure for future use.
          </li>
          <li>
            <strong>RENAME:</strong> Renames an existing table.
          </li>
        </ul>
        {/* <!--  6 --> */}
        <h4 id="6-what-is-dml-statements-">6. What is DML statements?</h4>
        <p>
          DML is stands for <strong>Data Manipulation Language.</strong> It is
          used to manage data within a databases. DML statements are responsible
          for inserting, updating, and deleting records in database tables. Here
          are some common DML statements in MySQL.
        </p>
        <ul>
          <li>
            <strong>INSERT:</strong> Adds new records (rows) to a table.
          </li>
          <li>
            <strong>UPDATE:</strong> Modifies existing records in a table.
          </li>
          <li>
            <strong>DELETE:</strong> Removes records from a table.
          </li>
        </ul>
        {/* <!-- 7 --> */}
        <h4 id="7-what-is-dql-statements-">7. What is DQL statements?</h4>
        <p>
          DQL is stands for <strong>Data Query Language.</strong> It is used for
          querying and retrieving data from a database.
        </p>
        <ul>
          <li>
            <strong>SELECT:</strong> Retrieves data from one or more tables.
            This is the primary statement used for querying and fetching data.
          </li>
        </ul>
        {/* <!-- 8 --> */}
        <h4 id="8-what-is-dcl-statements-">8. What is DCL statements?</h4>
        <p>
          DCL is stands for <strong>Data Control Language.</strong> It is used
          to control access to data within a database. DCL statements are
          responsible for setting permissions and privileges for database users.
          Here are two primary DCL statements in MySQL:
        </p>
        <ul>
          <li>
            <strong>GRANT:</strong> Provides specific privileges to database
            users.
          </li>
          <li>
            <strong>REVOKE:</strong> Removes specific privileges from database
            users.
          </li>
        </ul>
        {/* <!-- 9 --> */}
        <h4 id="9-what-is-tcl-statements-">9. What is TCL statements?</h4>
        <p>
          TCL, or Transaction Control Language, consists of SQL statements that
          manage transactions within a database. Transactions are sequences of
          one or more SQL statements that are executed as a single unit of work.
          TCL statements help control the beginning and end of transactions, as
          well as the commitment or rollback of changes. Here are the primary
          TCL statements in MySQL:
        </p>
        <ul>
          <li>
            <strong>COMMIT:</strong> Saves all the changes made during the
            current transaction. Once a COMMIT statement is executed, the
            changes become permanent in the database.
          </li>
          <li>
            <strong>ROLLBACK:</strong> Undoes all the changes made during the
            current transaction. It reverts the database to its state before the
            transaction began.
          </li>
          <li>
            <strong>SAVEPOINT:</strong> Sets a point within a transaction to
            which you can later roll back. SAVEPOINT creates a named point in
            the transaction, allowing you to roll back to that point if needed.
          </li>
        </ul>
        {/* <!-- 10 --> */}
        <h4 id="10-write-a-query-for-show-all-the-databases-in-mysql-">
          10. Write a query for show all the databases in mysql?
        </h4>
        <ul>
          <li>
            <strong>SHOW</strong> command is used to list all the databases.
          </li>
        </ul>
        <h6 id="query-">QUERY:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">SHOW</span>{" "}
            <span className="hljs-keyword">DATABASES</span>;
          </code>
        </pre>
        <h6 id="output-">OUTPUT:</h6>
        <p>
          <img
            src={images.Ten10}
            alt="output10"
            className="img-cls"
          />
        </p>
        {/* <!-- 11 --> */}
        <h4 id="11-write-a-query-to-create-a-database-">
          11. Write a query to create a database?
        </h4>
        <h6 id="syntax-">SYNTAX:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">CREATE</span>{" "}
            <span className="hljs-keyword">DATABASE</span> database_name;
          </code>
        </pre>
        <h6 id="query-">QUERY:</h6>
        {/* <pre>
          <code>
            <span className="hljs-keyword">CREATE</span>{" "}
            <span className="hljs-keyword">DATABASE</span> mydatabase;
            <span className="hljs-keyword">USE</span> mydatabase;
          </code>
        </pre> */}
        <pre>
          <code>
            {`CREATE DATABASE mydatabase;
USE mydatabase;`}
          </code>
        </pre>
        {/* <!-- 12 --> */}
        <h4 id="12-write-a-query-to-create-a-table-">
          12. Write a query to create a table?
        </h4>
        <h6 id="syntax-">SYNTAX:</h6>
        {/* <pre>
          <code>
            <span className="hljs-type">CREATE</span>{" "}
            <span className="hljs-type">TABLE</span> table_name ( column1 data
            <span className="hljs-keyword">type</span>, column2 data
            <span className="hljs-keyword">type</span>, column3 data
            <span className="hljs-keyword">type</span>, ... );
          </code>
        </pre> */}
        <pre>
          <code>
            {`CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
    ...
);`}
          </code>
        </pre>
        <h6 id="query-">QUERY:</h6>
        {/* <pre>
          <code>
            <span className="hljs-keyword">CREATE</span>{" "}
            <span className="hljs-keyword">TABLE</span> employees ( employee_id{" "}
            <span className="hljs-built_in">INT</span> PRIMARY{" "}
            <span className="hljs-keyword">KEY</span>, first_name{" "}
            <span className="hljs-built_in">VARCHAR</span>(
            <span className="hljs-number">50</span>), last_name{" "}
            <span className="hljs-built_in">VARCHAR</span>(
            <span className="hljs-number">50</span>), email{" "}
            <span className="hljs-built_in">VARCHAR</span>(
            <span className="hljs-number">100</span>), hire_date{" "}
            <span className="hljs-built_in">DATE</span>
            );
          </code>
        </pre> */}
        <pre>
          <code>
            {`CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    hire_date DATE
);`}
          </code>
        </pre>
        {/* <!-- 13 --> */}
        <h4 id="13-write-a-query-to-view-the-table-structure-">
          13. Write a query to view the table structure?
        </h4>
        <h6 id="syntax-">SYNTAX:</h6>
        {/* <pre>
          <code>
            DESCRIBE tablename<span className="hljs-comment">;</span>
            <span className="hljs-keyword">Or</span>DESC tablename
            <span className="hljs-comment">;</span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`DESCRIBE tablename;
        Or
DESC tablename;`}
          </code>
        </pre>
        <h6 id="query-">QUERY:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">DESCRIBE</span> employees;
          </code>
        </pre>
        <h6 id="output-">OUTPUT:</h6>
        <p>
          <img
            src={images.Thirteen13}
            alt="output13"
            className="img-cls"
          />
        </p>
        {/* <!-- 14 --> */}
        <h4 id="14-write-a-query-to-add-the-new-column-to-the-table-">
          14. Write a query to add the new column to the table?
        </h4>
        <h6 id="syntax-">SYNTAX:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">ALTER</span>{" "}
            <span className="hljs-keyword">TABLE</span> your_table_name{" "}
            <span className="hljs-keyword">ADD</span>{" "}
            <span className="hljs-keyword">COLUMN</span> new_column_name datatype;
          </code>
        </pre>
        <h6 id="query-">QUERY:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">ALTER</span>{" "}
            <span className="hljs-keyword">TABLE</span> employees{" "}
            <span className="hljs-keyword">ADD</span>{" "}
            <span className="hljs-keyword">COLUMN</span> birth_date{" "}
            <span className="hljs-built_in">DATE</span>;
          </code>
        </pre>
        <h6 id="otuput-">OTUPUT:</h6>
        <p>
          <img
            src={images.Fourteen14}
            alt="output14"
            className="img-cls"
          />
        </p>

        {/* <!-- 15 --> */}
        <h4 id="15-write-a-query-to-modify-the-column-">
          15. write a query to modify the column?
        </h4>
        <h6 id="syntax-">SYNTAX:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">ALTER</span>{" "}
            <span className="hljs-keyword">TABLE</span> your_table_name{" "}
            <span className="hljs-keyword">MODIFY</span>{" "}
            <span className="hljs-keyword">COLUMN</span> column_name new_datatype;
          </code>
        </pre>
        <h6 id="query-">QUERY:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">ALTER</span>{" "}
            <span className="hljs-keyword">TABLE</span> employees{" "}
            <span className="hljs-keyword">MODIFY</span>{" "}
            <span className="hljs-keyword">COLUMN</span> email{" "}
            <span className="hljs-built_in">VARCHAR</span>(
            <span className="hljs-number">150</span>);
          </code>
        </pre>
        <h6 id="output-">OUTPUT:</h6>
        <p>
          <img
            src={images.Fivteen15}
            alt="output15"
            className="img-cls"
          />
        </p>

        {/* <!-- 16 --> */}

        <h4 id="16-write-a-query-to-drop-the-column-">
          16. Write a query to drop the column?
        </h4>
        <h6 id="syntax-">SYNTAX:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">ALTER</span>{" "}
            <span className="hljs-keyword">TABLE</span> your_table_name{" "}
            <span className="hljs-keyword">DROP</span>{" "}
            <span className="hljs-keyword">COLUMN</span> column_name;
          </code>
        </pre>
        <h6 id="query-">QUERY:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">ALTER</span>{" "}
            <span className="hljs-keyword">TABLE</span> employees{" "}
            <span className="hljs-keyword">DROP</span>{" "}
            <span className="hljs-keyword">COLUMN</span> birth_date;
          </code>
        </pre>
        <h6 id="output-">OUTPUT:</h6>
        <p>
          <img
            src={images.Sixteen16}
            alt="output16"
            className="img-cls"
          />
        </p>

        {/* <!-- 17 --> */}
        <h4 id="17-write-a-query-to-renmae-the-column-name-">
          17. Write a query to renmae the column name?
        </h4>
        <h6 id="syntax-">SYNTAX:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">ALTER</span>{" "}
            <span className="hljs-keyword">TABLE</span> your_table_name{" "}
            <span className="hljs-keyword">CHANGE</span>{" "}
            <span className="hljs-keyword">COLUMN</span> old_column_name
            new_column_name datatype;
          </code>
        </pre>
        <h6 id="query-">QUERY:</h6>
        <p>
          ALTER TABLE employees CHANGE COLUMN first_name given_name VARCHAR(50);
        </p>
        <h6 id="output-">OUTPUT:</h6>
        <p>
          <img
            src={images.Seventeen17}
            alt="output17"
            className="img-cls"
          />
        </p>

        {/* <!-- 18 --> */}

        <h4 id="18-write-a-query-to-drop-the-table-or-database-">
          18. Write a query to drop the table or database;
        </h4>
        <h6 id="syntax-">SYNTAX:</h6>
        {/* <pre>
          <code>
            <span className="hljs-keyword">DROP</span>{" "}
            <span className="hljs-keyword">TABLE</span> your_table_name;
            <span className="hljs-keyword">DROP</span>{" "}
            <span className="hljs-keyword">DATABASE</span> your_database_name;
          </code>
        </pre> */}
        <pre>
          <code>
            {`DROP TABLE your_table_name;
DROP DATABASE your_database_name;`}
          </code>
        </pre>
        <h6 id="query-">QUERY:</h6>
        {/* <pre>
          <code>
            <span className="hljs-keyword">DROP</span>{" "}
            <span className="hljs-keyword">TABLE</span> employees;
            <span className="hljs-keyword">DROP</span>{" "}
            <span className="hljs-keyword">DATABASE</span> mydatabase;
          </code>
        </pre> */}
        <pre>
          <code>
            {`DROP TABLE employees;
DROP DATABASE mydatabase;`}
          </code>
        </pre>

        {/* <!-- 19 --> */}
        <h4 id="19-write-a-query-to-rename-the-table-">
          19. Write a query to rename the table?
        </h4>
        <h6 id="syntax-">SYNTAX:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">RENAME</span>{" "}
            <span className="hljs-keyword">TABLE</span> old_table_name{" "}
            <span className="hljs-keyword">TO</span> new_table_name;
          </code>
        </pre>
        <h6 id="query-">QUERY:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">RENAME</span>{" "}
            <span className="hljs-keyword">TABLE</span> employees{" "}
            <span className="hljs-keyword">to</span> employees_info;
          </code>
        </pre>

        {/* <!-- 20 --> */}
        <h4 id="20-what-is-primary-key-">20. What is Primary Key?</h4>
        <p>
          Ensures that a column or a combination of columns contains unique
          values and cannot have NULLs. It is used to uniquely identify each
          record in a table.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">CREATE</span>{" "}
            <span className="hljs-keyword">TABLE</span> example (
            <span className="hljs-keyword">id</span>{" "}
            <span className="hljs-built_in">INT</span> PRIMARY{" "}
            <span className="hljs-keyword">KEY</span>,
            <span className="hljs-keyword">name</span>{" "}
            <span className="hljs-built_in">VARCHAR</span>(
            <span className="hljs-number">50</span>) );
          </code>
        </pre> */}
        <pre>
          <code>
            {`CREATE TABLE example (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);`}
          </code>
        </pre>

        {/* <!-- 21 --> */}

        <h4 id="21-what-is-foreign-key-">21. What is Foreign Key?</h4>
        <p>
          Establishes a link between data in two tables, enforcing referential
          integrity. The foreign key column in one table refers to the primary
          key column in another table.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">CREATE</span>{" "}
            <span className="hljs-keyword">TABLE</span> orders ( order_id{" "}
            <span className="hljs-built_in">INT</span> PRIMARY{" "}
            <span className="hljs-keyword">KEY</span>, product_id{" "}
            <span className="hljs-built_in">INT</span>, FOREIGN{" "}
            <span className="hljs-keyword">KEY</span> (product_id){" "}
            <span className="hljs-keyword">REFERENCES</span> products(product_id) );
          </code>
        </pre> */}
        <pre>
          <code>
            {`CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);`}
          </code>
        </pre>

        {/* <!-- 22 --> */}

        <h4 id="22-what-is-unique-">22. What is Unique?</h4>
        <p>
          Ensures that all values in a column or a combination of columns are
          unique. Unlike a primary key, a unique constraint allows NULL values.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">CREATE</span>{" "}
            <span className="hljs-keyword">TABLE</span> employees ( employee_id{" "}
            <span className="hljs-built_in">INT</span>{" "}
            <span className="hljs-keyword">UNIQUE</span>, email{" "}
            <span className="hljs-built_in">VARCHAR</span>(
            <span className="hljs-number">100</span>){" "}
            <span className="hljs-keyword">UNIQUE</span>
            );
          </code>
        </pre> */}
        <pre>
          <code>
            {`CREATE TABLE employees (
    employee_id INT UNIQUE,
    email VARCHAR(100) UNIQUE
);`}
          </code>
        </pre>

        {/* <!-- 23 --> */}
        <h4 id="23-what-is-check-">23. What is check?</h4>
        <p>
          Restricts the range of values that a column can contain. It specifies
          a condition that must be satisfied for each row in the table.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">CREATE</span>{" "}
            <span className="hljs-keyword">TABLE</span> students ( student_id{" "}
            <span className="hljs-built_in">INT</span>, age{" "}
            <span className="hljs-built_in">INT</span>{" "}
            <span className="hljs-keyword">CHECK</span> (age &gt;={" "}
            <span className="hljs-number">18</span>) );
          </code>
        </pre> */}
        <pre>
          <code>
            {`CREATE TABLE students (
    student_id INT,
    age INT CHECK (age >= 18)
);`}
          </code>
        </pre>

        {/* <!-- 24 --> */}
        <h4 id="24-what-is-not-null-">24. What is NOT NULL?</h4>
        <p>Ensures that a column cannot contain NULL values.</p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">CREATE</span>{" "}
            <span className="hljs-keyword">TABLE</span> contacts ( contact_id{" "}
            <span className="hljs-built_in">INT</span> PRIMARY{" "}
            <span className="hljs-keyword">KEY</span>, phone_number{" "}
            <span className="hljs-built_in">VARCHAR</span>(
            <span className="hljs-number">15</span>){" "}
            <span className="hljs-keyword">NOT</span>{" "}
            <span className="hljs-literal">NULL</span>
            );
          </code>
        </pre> */}
        <pre>
          <code>
            {`CREATE TABLE contacts (
    contact_id INT PRIMARY KEY,
    phone_number VARCHAR(15) NOT NULL
);`}
          </code>
        </pre>
        {/* <!-- 25 --> */}
        <h4 id="25-what-is-default-">25. What is DEFAULT?</h4>
        <p>
          Provides a default value for a column when no value is specified
          during the INSERT operation.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">CREATE</span>{" "}
            <span className="hljs-keyword">TABLE</span> products ( product_id{" "}
            <span className="hljs-built_in">INT</span> PRIMARY{" "}
            <span className="hljs-keyword">KEY</span>, stock_quantity{" "}
            <span className="hljs-built_in">INT</span>{" "}
            <span className="hljs-keyword">DEFAULT</span>{" "}
            <span className="hljs-number">0</span>
            );
          </code>
        </pre> */}
        <pre>
          <code>
            {`CREATE TABLE products (
    product_id INT PRIMARY KEY,
    stock_quantity INT DEFAULT 0
);`}
          </code>
        </pre>

        {/* <!-- 26 --> */}
        <h4 id="26-write-a-query-to-insert-the-data-">
          26. Write a query to insert the data?
        </h4>
        <h6 id="syntax-">SYNTAX:</h6>
        {/* <pre>
          <code>
            <span className="hljs-keyword">INSERT</span>{" "}
            <span className="hljs-keyword">INTO</span> yourTableName (column1,
            column2, column3)
            <span className="hljs-keyword">VALUES</span> (
            <span className="hljs-string">'value1'</span>,{" "}
            <span className="hljs-string">'value2'</span>,{" "}
            <span className="hljs-string">'value3'</span>);
          </code>
        </pre> */}
        <pre>
          <code>
            {`INSERT INTO yourTableName (column1, column2, column3)
VALUES ('value1', 'value2', 'value3');`}
          </code>
        </pre>
        <h6 id="query-">QUERY:</h6>
        {/* <pre>
          <code>
            <span className="hljs-selector-tag">INSERT</span>{" "}
            <span className="hljs-selector-tag">INTO</span>{" "}
            <span className="hljs-selector-tag">employees</span> (employee_id,
            first_name, last_name, email, hire_date)
            <span className="hljs-selector-tag">VALUES</span>(
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-string">'John'</span>,{" "}
            <span className="hljs-string">'Doe'</span>,{" "}
            <span className="hljs-string">'john.doe@email.com'</span>,{" "}
            <span className="hljs-string">'2022-01-15'</span>), (
            <span className="hljs-number">2</span>,{" "}
            <span className="hljs-string">'Jane'</span>,{" "}
            <span className="hljs-string">'Smith'</span>,{" "}
            <span className="hljs-string">'jane.smith@email.com'</span>,{" "}
            <span className="hljs-string">'2022-02-20'</span>), (
            <span className="hljs-number">3</span>,{" "}
            <span className="hljs-string">'Bob'</span>,{" "}
            <span className="hljs-string">'Johnson'</span>,{" "}
            <span className="hljs-string">'bob.johnson@email.com'</span>,{" "}
            <span className="hljs-string">'2022-03-25'</span>);
          </code>
        </pre> */}
        <pre>
          <code>
            {`INSERT INTO employees (employee_id, first_name, last_name, email, hire_date)
VALUES
    (1, 'John', 'Doe', 'john.doe@email.com', '2022-01-15'),
    (2, 'Jane', 'Smith', 'jane.smith@email.com', '2022-02-20'),
    (3, 'Bob', 'Johnson', 'bob.johnson@email.com', '2022-03-25');`}
          </code>
        </pre>
        <h6 id="output-">OUTPUT:</h6>
        <p>
          <img
            src={images.Twentysix26}
            alt="output26"
            className="img-cls"
          />
        </p>

        {/* <!-- 27 --> */}
        <h4 id="27-write-a-query-to-read-all-the-records-in-the-table-">
          27. Write a query to read all the records in the table?
        </h4>
        <h6 id="syntax-">SYNTAX:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">SELECT</span> *{" "}
            <span className="hljs-keyword">FROM</span> table_name;
          </code>
        </pre>
        <h6 id="query-">QUERY:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">SELECT</span> *{" "}
            <span className="hljs-keyword">FROM</span> employees;
          </code>
        </pre>

        {/* <!-- 28 --> */}
        <h4 id="28-write-a-query-to-read-the-specific-field-in-the-table-">
          28. Write a query to read the specific field in the table?
        </h4>
        <h6 id="syntax-">SYNTAX:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">SELECT</span> column1, column2, ...{" "}
            <span className="hljs-keyword">FROM</span> yourTableName;
          </code>
        </pre>
        <h6 id="query-">QUERY:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">SELECT</span> first_name, last_name,
            hire_date <span className="hljs-keyword">FROM</span> employees;
          </code>
        </pre>
        <p>
          <img
            src={images.Twentyseven27}
            alt="output27"
            className="img-cls"
          />
        </p>

        {/* <!-- 29 --> */}
        <h4 id="29-write-a-query-to-read-the-specific-record-in-the-table-">
          29. Write a query to read the specific record in the table?
        </h4>
        <h6 id="syntax-">SYNTAX:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">SELECT</span> *{" "}
            <span className="hljs-keyword">FROM</span> yourTableName{" "}
            <span className="hljs-keyword">WHERE</span> condition;
          </code>
        </pre>
        <h6 id="query-">QUERY:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">SELECT</span> *{" "}
            <span className="hljs-keyword">FROM</span> employees{" "}
            <span className="hljs-keyword">WHERE</span> employee_id ={" "}
            <span className="hljs-number">1</span>;
          </code>
        </pre>
        <h6 id="output-">OUTPUT:</h6>
        <p>
          <img
            src={images.Twentynine29}
            alt="output29"
            className="img-cls"
          />
        </p>

        {/* <!-- 30 --> */}
        <h4 id="30-write-a-query-to-update-the-record-in-the-table-">
          30. Write a query to update the record in the table?
        </h4>
        <h6 id="syntax-">SYNTAX:</h6>
        {/* <pre>
          <code>
            UPDATE yourTableName
            <span className="hljs-keyword">SET</span> column1{" "}
            <span className="hljs-comment">= value1, column2 = value2, ...</span>
            WHERE <span className="hljs-comment">condition</span>;
          </code>
        </pre> */}
        <pre>
          <code>
            {`UPDATE yourTableName
      SET column1 = value1, column2 = value2, ...
      WHERE condition;`}
          </code>
        </pre>
        <h6 id="query-">QUERY:</h6>
        {/* <pre>
          <code>
            <span className="hljs-comment">
              -- Update the email for an employee with employee_id = 1
            </span>
            <span className="hljs-keyword">UPDATE</span> employees
            <span className="hljs-keyword">SET</span> email ={" "}
            <span className="hljs-string">'new.email@example.com'</span>
            <span className="hljs-keyword">WHERE</span> employee_id ={" "}
            <span className="hljs-number">1</span>;
            <span className="hljs-keyword">SELECT</span> *{" "}
            <span className="hljs-keyword">FROM</span> employees;
          </code>
        </pre> */}
        <pre>
          <code>
            {`-- Update the email for an employee with employee_id = 1
      UPDATE employees
      SET email = 'new.email@example.com'
      WHERE employee_id = 1;
      
      SELECT * FROM employees;`}
          </code>
        </pre>
        <h6 id="output-">OUTPUT:</h6>
        <p>
          <img
            src={images.Thirty30}
            alt="output30"
            className="img-cls"
          />
        </p>

        {/* <!-- 31 --> */}

        <h4 id="31-write-a-query-to-delete-the-record-in-the-table-">
          31. Write a query to delete the record in the table?
        </h4>
        <h6 id="syntax-">SYNTAX:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">DELETE</span>{" "}
            <span className="hljs-keyword">FROM</span> yourTableName{" "}
            <span className="hljs-keyword">WHERE</span> condition;
          </code>
        </pre>
        <h6 id="query-">QUERY:</h6>
        {/* <pre>
          <code>
            <span className="hljs-comment">
              -- Delete the employee with employee_id = 1
            </span>
            <span className="hljs-keyword">DELETE</span>{" "}
            <span className="hljs-keyword">FROM</span> employees{" "}
            <span className="hljs-keyword">WHERE</span> employee_id ={" "}
            <span className="hljs-number">1</span>;
          </code>
        </pre> */}
        <pre>
          <code>
            {`-- Delete the employee with employee_id = 1
      DELETE FROM employees WHERE employee_id = 1;`}
          </code>
        </pre>
        <h6 id="output-">OUTPUT:</h6>
        <p>
          <img
            src={images.Thirtyone31}
            alt="output31"
            className="img-cls"
          />
        </p>

        {/* <!-- 32 --> */}

        <h4 id="32-what-is-joins-">32. What is joins?</h4>
        <p>
          In MySQL, as in other relational database systems, a join is a
          mechanism used to combine rows from two or more tables based on a
          related column between them. Joins are fundamental for retrieving and
          combining data from different tables in a relational database. MySQL
          supports various types of joins:
        </p>
        <ul>
          <li>INNER JOIN</li>
          <li>RIGHT JOIN</li>
          <li>LEFT JOIN</li>
          <li>OUTER JOIN</li>
        </ul>

        {/* <!-- 33 --> */}
        <h4 id="33-what-is-inner-join-">33. What is INNER JOIN?</h4>
        <p>Returns only the rows where there is a match in both tables.</p>
        <p>
          <img
            src={images.Thirtythree33}
            alt="output33"
            className="img-cls"
          />
        </p>
        <pre>
          <code>
            <span className="hljs-keyword">SELECT</span> *{" "}
            <span className="hljs-keyword">FROM</span> table1{" "}
            <span className="hljs-keyword">INNER</span>{" "}
            <span className="hljs-keyword">JOIN</span> table2{" "}
            <span className="hljs-keyword">ON</span> table1.column = table2.column;
          </code>
        </pre>

        {/* <!-- 34 --> */}
        <h4 id="34-what-is-left-join-">34. What is LEFT JOIN?</h4>
        <p>
          Returns all rows from the left table and the matched rows from the
          right table. If there is no match, NULL values are returned for
          columns from the right table.
        </p>
        <p>
          <img
            src={images.Thirtyfour34}
            alt="output34"
            className="img-cls"
          />
        </p>
        <pre>
          <code>
            <span className="hljs-keyword">SELECT</span> *{" "}
            <span className="hljs-keyword">FROM</span> table1{" "}
            <span className="hljs-keyword">LEFT</span>{" "}
            <span className="hljs-keyword">JOIN</span> table2{" "}
            <span className="hljs-keyword">ON</span> table1.column = table2.column;
          </code>
        </pre>

        {/* <!-- 35 --> */}
        <h4 id="35-what-is-right-join-">35. What is RIGHT JOIN?</h4>
        <p>
          Returns all rows from the right table and the matched rows from the
          left table. If there is no match, NULL values are returned for columns
          from the left table.
        </p>
        <p>
          <img
            src={images.Thirtyfive35}
            alt="output35"
            className="img-cls"
          />
        </p>
        <pre>
          <code>
            <span className="hljs-keyword">SELECT</span> *{" "}
            <span className="hljs-keyword">FROM</span> table1{" "}
            <span className="hljs-keyword">RIGHT</span>{" "}
            <span className="hljs-keyword">JOIN</span> table2{" "}
            <span className="hljs-keyword">ON</span> table1.column = table2.column;
          </code>
        </pre>

        {/* <!-- 36 --> */}
        <h4 id="36-what-is-cross-join-">36. What is CROSS JOIN?</h4>
        <p>
          Returns the Cartesian product of the two tables, meaning all possible
          combinations of rows. It does not require a matching column.
        </p>
        <p>
          <img
            src={images.Thirtysix36}
            alt="output36"
            className="img-cls"
          />
        </p>
        <pre>
          <code>
            <span className="hljs-keyword">SELECT</span> *{" "}
            <span className="hljs-keyword">FROM</span> table1{" "}
            <span className="hljs-keyword">CROSS</span>{" "}
            <span className="hljs-keyword">JOIN</span> table2;
          </code>
        </pre>

        {/* <!-- 37 --> */}
        <h4 id="37-write-a-query-to-create-a-new-user-in-mysql-">
          37. Write a query to create a new user in MySQL?
        </h4>
        <h6 id="syntax-">SYNTAX:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">CREATE</span>{" "}
            <span className="hljs-keyword">USER</span>{" "}
            <span className="hljs-string">'username'</span>@
            <span className="hljs-string">'host'</span>{" "}
            <span className="hljs-keyword">IDENTIFIED</span>{" "}
            <span className="hljs-keyword">BY</span>{" "}
            <span className="hljs-string">'password'</span>;
          </code>
        </pre>
        <h6 id="query-">QUERY:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">CREATE</span>{" "}
            <span className="hljs-keyword">USER</span>{" "}
            <span className="hljs-string">'ocean'</span>@
            <span className="hljs-string">'localhost'</span>{" "}
            <span className="hljs-keyword">IDENTIFIED</span>{" "}
            <span className="hljs-keyword">BY</span>{" "}
            <span className="hljs-string">'1669'</span>;
          </code>
        </pre>

        {/* <!-- 38 --> */}
        <h4 id="38-write-a-query-to-grant-privileges-to-a-user-">
          38. Write a query to grant privileges to a user?
        </h4>
        <h6 id="syntax-">SYNTAX:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">GRANT</span>{" "}
            <span className="hljs-keyword">privileges</span>{" "}
            <span className="hljs-keyword">ON</span> databaseName.tableName{" "}
            <span className="hljs-keyword">TO</span>{" "}
            <span className="hljs-string">'userName'</span>@
            <span className="hljs-string">'host'</span>;
          </code>
        </pre>
        <h6 id="query-">QUERY:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">GRANT</span>{" "}
            <span className="hljs-keyword">SELECT</span>,{" "}
            <span className="hljs-keyword">INSERT</span>,{" "}
            <span className="hljs-keyword">UPDATE</span>,{" "}
            <span className="hljs-keyword">DELETE</span>{" "}
            <span className="hljs-keyword">ON</span> mydatabase.employees{" "}
            <span className="hljs-keyword">TO</span>{" "}
            <span className="hljs-string">'ocean'</span>@
            <span className="hljs-string">'localhost'</span>;
          </code>
        </pre>

        {/* <!-- 39 --> */}
        <h4 id="39-write-a-query-to-shows-the-grant-for-particular-user-">
          39. Write a query to shows the grant for particular user?
        </h4>
        <h6 id="syntax-">SYNTAX:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">SHOW</span>{" "}
            <span className="hljs-keyword">GRANTS</span>{" "}
            <span className="hljs-keyword">FOR</span> username;
          </code>
        </pre>
        <h6 id="query-">QUERY:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">SHOW</span>{" "}
            <span className="hljs-keyword">GRANTS</span>{" "}
            <span className="hljs-keyword">FOR</span> ocean@localhost;
          </code>
        </pre>

        {/* <!-- 40 --> */}
        <h4 id="40-write-a-query-to-revoke-all-privileges-from-user-">
          40. Write a query to revoke all privileges from user?
        </h4>
        <h6 id="syntax-">SYNTAX:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">REVOKE</span> ALL privileges_names{" "}
            <span className="hljs-keyword">ON</span>{" "}
            <span className="hljs-keyword">object</span>{" "}
            <span className="hljs-keyword">FROM</span>{" "}
            <span className="hljs-keyword">user</span>;
          </code>
        </pre>
        <h6 id="query-">QUERY:</h6>
        <pre>
          <code>
            <span className="hljs-keyword">REVOKE</span> ALL{" "}
            <span className="hljs-keyword">PRIVILEGES</span>{" "}
            <span className="hljs-keyword">ON</span> mydatabase.employees{" "}
            <span className="hljs-keyword">FROM</span>{" "}
            <span className="hljs-string">'ocean'</span>@
            <span className="hljs-string">'localhost'</span>;
          </code>
        </pre>

        {/* <!-- 41 --> */}
        <h4 id="41-what-is-a-stored-procedure-">
          41. What is a stored procedure?
        </h4>
        <p>
          A stored procedure is a precompiled collection of one or more SQL
          statements that can be stored and executed on the database server.
        </p>

        {/* <!-- 42 --> */}
        <h4 id="42-what-are-the-advantages-of-using-stored-procedures-">
          42. What are the advantages of using stored procedures?
        </h4>
        <p>
          Some advantages include improved performance, code reusability,
          enhanced security, and easier maintenance.
        </p>

        {/* <!-- 43 --> */}
        <h4 id="43-how-do-you-create-a-stored-procedure-in-mysql-">
          43. How do you create a stored procedure in MySQL?
        </h4>
        <p>The syntax to create a stored procedure is:</p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">CREATE</span>{" "}
            <span className="hljs-function">
              <span className="hljs-keyword">PROCEDURE</span>{" "}
              <span className="hljs-title">procedure_name</span>
              <span className="hljs-params">(parameters)</span>
              <span className="hljs-title">BEGIN</span>
              -- <span className="hljs-title">SQL</span>{" "}
              <span className="hljs-title">statements</span>
              <span className="hljs-title">END</span>;
            </span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`CREATE PROCEDURE procedure_name(parameters)
      BEGIN
          -- SQL statements
      END;`}
          </code>
        </pre>

        {/* <!-- 44 --> */}
        <h4 id="44-what-are-parameters-in-a-stored-procedure-">
          44. What are parameters in a stored procedure?
        </h4>
        <p>
          Parameters are placeholders in a stored procedure that allow you to
          pass values into the procedure when it is called. They can be IN, OUT,
          or INOUT parameters.
        </p>

        {/* <!-- 45 --> */}
        <h4 id="45-how-do-you-call-a-stored-procedure-">
          45. How do you call a stored procedure?
        </h4>
        <p>The syntax to call a stored procedure is:</p>
        <pre>
          <code>
            <span className="hljs-keyword">CALL</span> procedure_name(
            <span className="hljs-keyword">parameters</span>);
          </code>
        </pre>

        {/* <!-- 46 --> */}
        <h4 id="46-what-is-the-purpose-of-the-delimiter-statement-in-the-context-of-creating-stored-procedures-">
          46. What is the purpose of the DELIMITER statement in the context of
          creating stored procedures?
        </h4>
        <ul>
          <li>
            <p>
              The DELIMITER statement is used to change the default statement
              delimiter (;) to another character, allowing the use of semicolons
              within the body of a stored procedure.
            </p>
          </li>
          <li>
            <p>
              These questions cover a range of topics related to stored
              procedures in MySQL and can help assess a candidate&#39;s
              understanding of the concept and their ability to work with them
              effectively.
            </p>
          </li>
        </ul>

        {/* <!-- 47 --> */}
        <h4 id="47-can-you-provide-an-example-of-a-stored-procedure-that-takes-parameters-">
          47. Can you provide an example of a stored procedure that takes
          parameters?
        </h4>
        {/* <pre>
          <code>
            <span className="hljs-keyword">CREATE</span>{" "}
            <span className="hljs-function">
              <span className="hljs-keyword">PROCEDURE</span>{" "}
              <span className="hljs-title">GetEmployee</span>
              <span className="hljs-params">
                (<span className="hljs-keyword">IN</span> employee_id INT)
              </span>
              <span className="hljs-title">BEGIN</span>
              <span className="hljs-title">SELECT</span> *{" "}
              <span className="hljs-title">FROM</span>{" "}
              <span className="hljs-title">employees</span>{" "}
              <span className="hljs-title">WHERE</span>{" "}
              <span className="hljs-title">id</span> ={" "}
              <span className="hljs-title">employee_id</span>;
            </span>
            <span className="hljs-keyword">END</span>;
          </code>
        </pre> */}
        <pre>
          <code>
            {`CREATE PROCEDURE GetEmployee(IN employee_id INT)
      BEGIN
          SELECT * FROM employees WHERE id = employee_id;
      END;`}
          </code>
        </pre>

        {/* <!-- 48 --> */}
        <h4 id="48-what-is-a-cursor-and-why-might-you-use-it-in-a-database-context-">
          48. What is a cursor, and why might you use it in a database context?
        </h4>
        <p>
          A cursor is a programming construct that enables the traversal of
          records in a result set. It is used when you need to process
          individual rows of a query result one at a time, typically in
          scenarios where set-based operations are not sufficient.
        </p>

        {/* <!-- 49 --> */}
        <h4 id="49-what-is-a-database-trigger-and-how-does-it-differ-from-a-stored-procedure-">
          49. What is a database trigger, and how does it differ from a stored
          procedure?
        </h4>
        <p>
          A database trigger is a set of instructions that are automatically
          executed (&quot;triggered&quot;) in response to specified events on a
          particular table or view. Unlike stored procedures, triggers are
          automatically invoked by the database management system.
        </p>

        {/* <!-- 50 --> */}
        <h4 id="50-what-is-functions-in-mysql-">
          50. What is functions in MySQL?
        </h4>
        <p>
          A function returns a single value and is typically used in SQL
          expressions.
        </p>
        <h6 id="create-a-function-">CREATE A FUNCTION:</h6>
        {/* <pre>
          <code>
            <span className="hljs-keyword">CREATE</span>{" "}
            <span className="hljs-keyword">FUNCTION</span> my_function(parameter{" "}
            <span className="hljs-built_in">INT</span>)
            <span className="hljs-keyword">RETURNS</span>{" "}
            <span className="hljs-built_in">INT</span>
            <span className="hljs-keyword">BEGIN</span>
            <span className="hljs-comment">-- Function logic here</span>
            <span className="hljs-keyword">END</span>; ```
          </code>
        </pre> */}
        <pre>
          <code>
            {`CREATE FUNCTION my_function(parameter INT)
      RETURNS INT
      BEGIN
          -- Function logic here
      END;
      `}
          </code>
        </pre>
      </section>
    </div>
  );
}; 
