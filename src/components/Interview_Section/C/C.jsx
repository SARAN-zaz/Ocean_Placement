import "./C.css";
import "../globalStyle.css";
import images from "../../../assets/C/index";

export const Cprogramming = () => {
  return (
    <div class="main-container-interview-questions">
      <div>
        <p class="main-heading-q-a">
          C Programming Interview Questions and Answers
        </p>
        <div class="main-heading-interview-questions-answers">
          <img class="img-class-language-logo" src={images.C} />
          <p>
            C programming is a fundamental language widely used for system and
            application development. It's known for its efficiency and
            versatility. Developed in the 1970s by Dennis Ritchie at Bell Labs,
            C has influenced many modern programming languages. Its syntax is
            relatively simple, making it accessible for beginners. C is often
            the first language taught in computer science courses due to its
            close-to-hardware functionality. It allows for direct manipulation
            of memory, making it ideal for system programming tasks. Despite its
            age, C remains prevalent in industries such as finance, gaming, and
            software development due to its portability and speed. It encourages
            structured programming practices, promoting code organization and
            readability.
            <br />C programming language is characterized by its rich library
            support, enabling developers to perform various tasks efficiently.
            Its low-level features provide control over hardware resources,
            making it suitable for embedded systems development. C's syntax is
            concise and straightforward, allowing for fast program development.
            It supports procedural programming paradigms, facilitating modular
            and reusable code. Overall, C's combination of simplicity, power,
            and flexibility makes it a preferred choice for a wide range of
            programming tasks.
          </p>
        </div>

        {/* <!--  --> */}
        <div className="question-answer">
          <h4 id="1-what-is-c-programming-language">
            1. What is C programming language?
          </h4>
          <p>
            {" "}
            C is a general-purpose programming language developed in the early
            1970s by Dennis Ritchie at Bell Labs. It is widely used for system
            programming, developing operating systems, compilers, and various
            applications.
          </p>
          <h4 id="2-what-are-the-basic-data-types-in-c">
            2. What are the basic data types in C?
          </h4>
          <p>
            {" "}
            The basic data types in C include: * int: Integer type * char:
            Character type * float: Floating-point type * double: Double
            precision floating-point type * void: Represents absence of type
          </p>
          <h4 id="3-how-do-you-declare-variables-in-c">
            3. How do you declare variables in C?
          </h4>
          <p>
            {" "}
            Variables in C are declared by specifying the data type followed by
            the variable name.{" "}
          </p>
          <h6 id="example">Example:</h6>
          {/* <pre>
            <code>int age; char grade; float salary;</code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int age;
char grade;
float salary;`}
            </code>
          </pre>

          <h4 id="4-explain-the-printf-function-in-c-with-an-example">
            4. Explain the printf() function in C with an example.
          </h4>
          <p>
            <code>printf()</code> is a function used to print formatted output
            to the standard output (usually the console).{" "}
          </p>
          <h6 id="example-1">Example:</h6>
          {/* <pre>
            <code>
              int num = 10; printf(&quot;The value of num is: %d\n&quot;, num);
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int num = 10;
printf("The value of num is: %d\\n", num);`}
            </code>
          </pre>

          <h4 id="5-explain-the-scanf-function-in-c-with-an-example">
            5. Explain the scanf() function in C with an example.
          </h4>
          <p>
            <code>scanf()</code> is a function used to read formatted input from
            the standard input (usually the keyboard).
          </p>
          <h6 id="example-2">Example:</h6>
          {/* <pre>
            <code>
              int age; printf(&quot;Enter your age: &quot;);
              scanf(&quot;%d&quot;, &amp;age);
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int age;
printf("Enter your age: ");
scanf("%d", &age);`}
            </code>
          </pre>

          <h4 id="6-how-do-you-write-a-simple-hello-world-program-in-c">
            6. How do you write a simple &quot;Hello, World!&quot; program in C?
          </h4>
          {/* <pre>
            <code>
              #include &lt;stdio.h&gt; int main() &#123; printf(&quot;Hello,
              World!\n&quot;); return 0; &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`}
            </code>
          </pre>

          <h4 id="7-what-is-the-difference-between-single-line-and-multi-line-comments-in-c">
            7. What is the difference between single-line and multi-line
            comments in C?
          </h4>
          <p>
            Single-line comments in C are preceded by <code>//</code>, while
            multi-line comments are enclosed between
            <code>/*</code> and <code>*/</code>.
          </p>
          <h4 id="8-how-do-you-perform-arithmetic-operations-in-c">
            8. How do you perform arithmetic operations in C?
          </h4>
          <p>
            Arithmetic operations in C are performed using arithmetic operators
            such as <code>+</code>, <code>-</code>,<code>*</code>,{" "}
            <code>/</code>, and <code>%</code>.
          </p>
          <h4 id="9--explain-the-if-statement-in-c-with-an-example">
            9. Explain the if statement in C with an example.
          </h4>
          <p>
            The if statement is used to execute a block of code if a specified
            condition is true.{" "}
          </p>
          <h6 id="example-3">Example:</h6>
          {/* <pre>
            <code>
              int num = 10; if (num &gt; 0) &#123; printf(&quot;Positive
              number\n&quot;); &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int num = 10;
if (num > 0) {
    printf("Positive number\\n");
}`}
            </code>
          </pre>

          <h4 id="10-what-is-the-purpose-of-the-else-statement-in-c">
            10. What is the purpose of the else statement in C?
          </h4>
          <p>
            The else statement is used along with the if statement to execute a
            block of code if the condition is false.
          </p>
          <h6 id="example-4">Example:</h6>
          {/* <pre>
            <code>
              int num = -5; if (num &gt; 0) &#123; printf(&quot;Positive
              number\n&quot;); &#125; else &#123; printf(&quot;Negative
              number\n&quot;); &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int num = -5;
if (num > 0) {
    printf("Positive number\\n");
} else {
    printf("Negative number\\n");
}`}
            </code>
          </pre>

          <h4 id="11-how-do-you-use-the-switch-statement-in-c">
            11. How do you use the switch statement in C?
          </h4>
          <p>
            The switch statement is used to select one of many code blocks to be
            executed. It evaluates an expression, and then executes the case
            that matches the value of the expression.{" "}
          </p>
          <h6 id="example-5">Example:</h6>
          {/* <pre>
            <code>
              int choice = 2; switch(choice) &#123; case 1: printf(&quot;Option
              1 selected\n&quot;); break; case 2: printf(&quot;Option 2
              selected\n&quot;); break; default: printf(&quot;Invalid
              choice\n&quot;); &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int choice = 2;
switch (choice) {
    case 1:
        printf("Option 1 selected\\n");
        break;
    case 2:
        printf("Option 2 selected\\n");
        break;
    default:
        printf("Invalid choice\\n");
}`}
            </code>
          </pre>

          <h4 id="12-explain-the-while-loop-in-c-with-an-example">
            12. Explain the while loop in C with an example.
          </h4>
          <p>
            The while loop executes a block of code as long as the specified
            condition is true.{" "}
          </p>
          <h6 id="example-6">Example:</h6>
          {/* <pre>
            <code>
              int i = 0; while (i &lt; 5) &#123; printf(&quot;%d &quot;, i);
              i++; &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int i = 0;
while (i < 5) {
    printf("%d ", i);
    i++;
}`}
            </code>
          </pre>

          <h4 id="13-how-do-you-use-the-for-loop-in-c">
            13. How do you use the for loop in C?
          </h4>
          <p>
            The for loop is used to execute a block of code repeatedly for a
            fixed number of times.{" "}
          </p>
          <h6 id="example-7">Example:</h6>
          {/* <pre>
            <code>
              for (int i = 0; i &lt; 5; i++) &#123; printf(&quot;%d &quot;, i);
              &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int i = 0;
while (i < 5) {
    printf("%d ", i);
    i++;
}`}
            </code>
          </pre>

          <h4 id="14-what-is-an-array-in-c-provide-an-example">
            14. What is an array in C? Provide an example.
          </h4>
          <p>
            An array in C is a collection of elements of the same data type
            stored at contiguous memory locations.{" "}
          </p>
          <h6 id="example-8">Example:</h6>
          {/* <pre>
            <code>int arr[5] = &#123;1, 2, 3, 4, 5&#125;;</code>
          </pre> */}
          <pre className="code-block">
            <code>{`int arr[5] = {1, 2, 3, 4, 5};`}</code>
          </pre>

          <h4 id="15-how-do-you-access-elements-of-an-array-in-c">
            15. How do you access elements of an array in C?
          </h4>
          <p>
            Elements of an array in C can be accessed using index notation.{" "}
          </p>
          <h6 id="example-9">Example:</h6>
          {/* <pre>
            <code>
              int arr[5] = &#123;1, 2, 3, 4, 5&#125;; printf(&quot;%d&quot;,
              arr[0]); // Output: 1
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int arr[5] = {1, 2, 3, 4, 5};
printf("%d", arr[0]); // Output: 1`}
            </code>
          </pre>

          <h4 id="16-explain-the-concept-of-strings-in-c">
            16. Explain the concept of strings in C.
          </h4>
          <p>
            Strings in C are arrays of characters terminated by a null character
            (&#39;\0&#39;).{" "}
          </p>
          <h6 id="example-10">Example:</h6>
          {/* <pre>
            <code>char str[] = &quot;Hello&quot;;</code>
          </pre> */}
          <pre className="code-block">
            <code>{`char str[] = "Hello";`}</code>
          </pre>

          <h4 id="17-how-do-you-concatenate-two-strings-in-c">
            17. How do you concatenate two strings in C?
          </h4>
          <p>
            Strings in C can be concatenated using library function strcat().{" "}
          </p>
          <h6 id="example-11">Example:</h6>
          {/* <pre>
            <code>
              char str1[20] = &quot;Hello &quot;; char str2[] =
              &quot;World!&quot;; strcat(str1, str2);
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`char str1[20] = "Hello ";
char str2[] = "World!";
strcat(str1, str2);`}
            </code>
          </pre>

          <h4 id="18-what-is-the-purpose-of-the-break-statement-in-loops">
            18. What is the purpose of the break statement in loops?
          </h4>
          <p>
            The break statement is used to terminate the loop prematurely and
            transfer the control outside the loop. It is often used with switch
            or while loops.
          </p>
          <h4 id="19-how-do-you-define-and-call-a-function-in-c">
            19. How do you define and call a function in C?
          </h4>
          <p>
            {" "}
            In C programming, a function is a block of code that performs a
            specific task. To define a function, you need to specify its return
            type, name, parameters (if any), and the function body.{" "}
          </p>
          <p> The general syntax for defining a function in C is as follows</p>
          {/* <pre>
            <code>
              return_type function_name(parameter1_type parameter1,
              parameter2_type parameter2, ...) &#123; // Function body //
              Statements to perform the task return value; // Optional return
              statement &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`return_type function_name(parameter1_type parameter1,parameter2_type parameter2,...) {
    // Function body
    // Statements to perform the task
    return value; // Optional return statement
}`}
            </code>
          </pre>

          <ul>
            <li>
              <strong>return_type:</strong> It specifies the data type of the
              value that the function returns to the caller. It can be{" "}
              <code>int</code>, <code>float</code>, <code>char</code>,{" "}
              <code>void</code>, etc.
            </li>
            <li>
              <strong>function_name:</strong> It is the name of the function
              that you define. You can give any meaningful name to the function.
            </li>
            <li>
              <strong>parameters:</strong> These are optional. They specify the
              input values (arguments) that the function can accept. If the
              function does not require any input, you can leave the parameter
              list empty.
            </li>
            <li>
              <strong>function_body:</strong> It contains the statements that
              define the task to be performed by the function. These statements
              are enclosed within curly braces <code>&#123;&#125;</code>.
            </li>
            <li>
              <strong>return value:</strong> This is an optional statement used
              to return a value from the function to the caller. It is required
              only if the function has a return type other than{" "}
              <code>void</code>.
            </li>
          </ul>
          <h6 id="example-12">Example:</h6>
          {/* <pre>
            <code>
              int add(int a, int b) &#123; int sum = a + b; return sum; &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int add(int a, int b) {
    int sum = a + b;
    return sum;
}`}
            </code>
          </pre>

          <h4 id="20-explain-the-return-statement-in-c-functions">
            20. Explain the return statement in C functions.
          </h4>
          <p>
            The return statement is used to return a value from a function. It
            terminates the function&#39;s execution and optionally returns a
            value to the caller.{" "}
          </p>
          <h6 id="example-13">Example:</h6>
          {/* <pre>
            <code>int add(int a, int b) &#123; return a + b; &#125;</code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int add(int a, int b) {
    return a + b;
}`}
            </code>
          </pre>

          <h4 id="21-what-is-a-header-file-in-c-give-an-example">
            21. What is a header file in C? Give an example.
          </h4>
          <p>
            A header file in C is a file containing declarations of functions,
            macros, data types, and other constructs that can be used in
            multiple source files. It typically has a .h extension. Header files
            are included in C source files using the #include preprocessor
            directive.
          </p>
          <h6 id="example-14">Example:</h6>
          <p>
            Consider a header file named math.h containing declaration of a
            function add:
          </p>
          {/* <pre>
            <code>
              // math.h #ifndef MATH_H #define MATH_H int add(int x, int y);
              #endif
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`// math.h
#ifndef MATH_H
#define MATH_H

int add(int x, int y);

#endif`}
            </code>
          </pre>

          <p>
            In another source file main.c, you can include the math.h header
            file and use the add function:
          </p>
          {/* <pre>
            <code>
              // main.c #include &lt;stdio.h&gt; #include &quot;math.h&quot; int
              main() &#123; int result = add(3, 5); printf(&quot;Result:
              %d\n&quot;, result); return 0; &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`// main.c
#include <stdio.h>
#include "math.h"

int main() {
    int result = add(3, 5);
    printf("Result: %d\\n", result);
    return 0;
}`}
            </code>
          </pre>

          <h4 id="22-explain-the-difference-between---and--operators">
            22. Explain the difference between =, ==, and === operators.
          </h4>
          <ul>
            <li>
              <code>=</code> (Assignment Operator): It is used to assign a value
              to a variable.
            </li>
            <li>
              <code>==</code> (Equality Operator): It is used to compare the
              equality of two operands. It returns true if the operands are
              equal, otherwise returns false.
            </li>
            <li>
              <code>===</code> (Triple Equals Operator): This operator is not
              available in C programming language.
            </li>
          </ul>
          <h6 id="example-15">Example:</h6>
          {/* <pre>
            <code>
              int a = 5; // Assignment int b = 5; if (a == b) &#123; // Equality
              comparison printf(&quot;a and b are equal\n&quot;); &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int a = 5; // Assignment
int b = 5;
if (a == b) { // Equality comparison
    printf("a and b are equal\\n");
}`}
            </code>
          </pre>

          <h4 id="23what-is-the-purpose-of-include-directive-in-c">
            23.What is the purpose of #include directive in C?
          </h4>
          <p>
            The #include directive in C is used to include the contents of
            another file (usually a header file) in the current source file. It
            allows reuse of declarations, functions, macros, etc., defined in
            the included file.
          </p>
          <h6 id="example-16">Example:</h6>
          {/* <pre>
            <code>
              #include &lt;stdio.h&gt; // Including standard input-output
              library int main() &#123; printf(&quot;Hello, World!\n&quot;);
              return 0; &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`#include <stdio.h> // Including standard input-output library

int main() {
    printf("Hello, World!\\n");
    return 0;
}`}
            </code>
          </pre>

          <h4 id="24-how-do-you-declare-and-use-a-pointer-in-c">
            24. How do you declare and use a pointer in C?
          </h4>
          <p>
            A pointer in C is a variable that stores the memory address of
            another variable. To declare a pointer, you specify the data type
            followed by an asterisk *. To access the value at the memory address
            stored in a pointer, you use the dereference operator *.
          </p>
          <h6 id="example-17">Example:</h6>
          {/* <pre>
            <code>
              int main() &#123; int num = 10; int *ptr; // Pointer declaration
              ptr = &amp;num; // Assigning address of num to ptr
              printf(&quot;Value of num: %d\n&quot;, *ptr); // Dereferencing
              pointer return 0; &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int main() {
    int num = 10;
    int *ptr; // Pointer declaration
    ptr = &num; // Assigning address of num to ptr
    printf("Value of num: %d\\n", *ptr); // Dereferencing pointer
    return 0;
}`}
            </code>
          </pre>

          <h4 id="25explain-the-concept-of-dynamic-memory-allocation-in-c">
            25.Explain the concept of dynamic memory allocation in C.
          </h4>
          <p>
            Dynamic memory allocation in C allows you to allocate memory at
            runtime using library functions like malloc(), calloc(), realloc().
            It enables you to manage memory more efficiently, especially when
            the size of data is not known at compile time.
          </p>
          <h6 id="example-18">Example:</h6>
          {/* <pre>
            <code>
              int *arr; arr = (int *)malloc(5 * sizeof(int)); // Allocating
              memory for an array of 5 integers if (arr == NULL) &#123;
              printf(&quot;Memory allocation failed\n&quot;); &#125; else &#123;
              // Use the allocated memory // Don&#39;t forget to free the memory
              when done: free(arr); &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int *arr;
arr = (int *)malloc(5 * sizeof(int)); // Allocating memory for an array of 5 integers
if (arr == NULL) {
    printf("Memory allocation failed\\n");
} else {
    // Use the allocated memory
    // Don't forget to free the memory when done:
    free(arr);
}`}
            </code>
          </pre>

          <h4 id="26-what-are-the-different-storage-classes-in-c">
            26. What are the different storage classes in C?
          </h4>
          <p>
            The different storage classes in C are <code>auto</code>,{" "}
            <code>register</code>, <code>static</code>, and
            <code>extern</code>. These storage classes determine the lifetime,
            scope, and initial value of variables.
          </p>
          <h6 id="example-19">Example:</h6>
          {/* <pre>
            <code>
              int main() &#123; auto int x; // Automatic storage class register
              int y; // Register storage class static int z; // Static storage
              class extern int a; // External storage class (declared but
              defined elsewhere) return 0; &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int main() {
    auto int x;     // Automatic storage class
    register int y; // Register storage class
    static int z;   // Static storage class
    extern int a;   // External storage class (declared but defined elsewhere)
    return 0;
}`}
            </code>
          </pre>

          <h4 id="27-what-is-the-difference-between-call-by-value-and-call-by-reference">
            27. What is the difference between call by value and call by
            reference?
          </h4>
          <p>
            Call by Value: In call by value, a copy of the actual
            parameter&#39;s value is passed to the function. Changes made to the
            parameter inside the function do not affect the original value. Call
            by Reference: In call by reference, the address of the actual
            parameter is passed to the function. Changes made to the parameter
            inside the function affect the original value.
          </p>
          <h6 id="example-20">Example:</h6>
          {/* <pre>
            <code>
              void swap(int *a, int *b) &#123; // Call by reference int temp =
              *a; *a = *b; *b = temp; &#125; int main() &#123; int x = 5, y =
              10; swap(&amp;x, &amp;y); // Passing addresses printf(&quot;x =
              %d, y = %d\n&quot;, x, y); // Output: x = 10, y = 5 return 0;
              &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`void swap(int *a, int *b) { // Call by reference
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 5, y = 10;
    swap(&x, &y); // Passing addresses
    printf("x = %d, y = %d\\n", x, y); // Output: x = 10, y = 5
    return 0;
}`}
            </code>
          </pre>

          <h4 id="28-how-do-you-define-a-constant-in-c">
            28. How do you define a constant in C?
          </h4>
          <p>
            In C, you can define a constant using the #define directive or by
            using the const keyword. Constants are used to represent fixed
            values that do not change during the execution of the program.
          </p>
          <h6 id="example-21">Example:</h6>
          <p>Using #define:</p>
          {/* <pre>
            <code>#define PI 3.14159</code>
          </pre> */}
          <pre className="code-block">
            <code>{`#define PI 3.14159`}</code>
          </pre>

          <h4 id="29-explain-the-difference-between-local-and-global-variables">
            29. Explain the difference between local and global variables.
          </h4>
          <p>
            <strong>Local Variables:</strong> Local variables are declared
            within a function or block. They are accessible only within that
            function or block.
          </p>
          <p>
            <strong>Global Variables:</strong> Global variables are declared
            outside of any function. They are accessible from any part of the
            program.
          </p>
          <h6 id="example-22">Example:</h6>
          {/* <pre>
            <code>
              #include &lt;stdio.h&gt; int globalVar = 10; // Global variable
              void func() &#123; int localVar = 20; // Local variable
              printf(&quot;Local variable: %d\n&quot;, localVar);
              printf(&quot;Global variable: %d\n&quot;, globalVar); &#125; int
              main() &#123; func(); printf(&quot;Global variable: %d\n&quot;,
              globalVar); return 0; &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`#include <stdio.h>

int globalVar = 10; // Global variable

void func() {
    int localVar = 20; // Local variable
    printf("Local variable: %d\\n", localVar);
    printf("Global variable: %d\\n", globalVar);
}

int main() {
    func();
    printf("Global variable: %d\\n", globalVar);
    return 0;
}`}
            </code>
          </pre>

          <h4 id="30--what-is-the-difference-between-malloc-and-calloc-functions">
            30. What is the difference between malloc() and calloc() functions?
          </h4>
          <p>
            <strong>malloc():</strong> Allocates memory block of specified size
            and returns a pointer to the first byte of the block. Contents of
            the allocated memory are not initialized.
          </p>
          <p>
            <strong>calloc():</strong> Allocates memory block of specified size
            and initializes all its bits to zero. Returns a pointer to the first
            byte of the block.
          </p>
          <h6 id="example-23">Example:</h6>
          {/* <pre>
            <code>
              int *arr1 = (int *)malloc(5 * sizeof(int)); // Using malloc int
              *arr2 = (int *)calloc(5, sizeof(int)); // Using calloc
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int *arr1 = (int *)malloc(5 * sizeof(int));  // Using malloc
int *arr2 = (int *)calloc(5, sizeof(int));     // Using calloc`}
            </code>
          </pre>

          <h4 id="31-explain-the-purpose-of-the-sizeof-operator">
            31. Explain the purpose of the sizeof operator.
          </h4>
          <p>
            The sizeof operator in C is used to determine the size of a variable
            or data type in bytes. It returns the size of the operand in bytes.
          </p>
          <h6 id="example-24">Example:</h6>
          {/* <pre>
            <code>int size = sizeof(int);</code>
          </pre> */}
          <pre className="code-block">
            <code>{`int size = sizeof(int);`}</code>
          </pre>

          <h4 id="32-what-is-the-difference-between-pre-increment-and-post-increment-operators">
            32. What is the difference between pre-increment and post-increment
            operators?
          </h4>
          <p>
            <strong>Pre-increment (++i):</strong> Increments the value of the
            variable before using it in an expression.
          </p>
          <p>
            <strong>Post-increment (i++):</strong> Increments the value of the
            variable after using it in an expression.
          </p>
          <h6 id="example-25">Example:</h6>
          {/* <pre>
            <code>
              int i = 5; int a = ++i; // a = 6, i = 6 (pre-increment) int b =
              i++; // b = 6, i = 7 (post-increment)
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int i = 5;
int a = ++i; // a = 6, i = 6 (pre-increment)
int b = i++; // b = 6, i = 7 (post-increment)`}
            </code>
          </pre>

          <h4 id="33-explain-the-concept-of-recursion-with-an-example">
            33. Explain the concept of recursion with an example.
          </h4>
          <p>
            Recursion is a programming technique in which a function calls
            itself directly or indirectly to solve a problem. It is useful for
            solving problems that can be broken down into smaller, similar
            subproblems.
          </p>
          <h6 id="example-26">Example:</h6>
          <p>Factorial calculation using recursion:</p>
          {/* <pre>
            <code>
              int factorial(int n) &#123; if (n == 0 || n == 1) return 1; else
              return n * factorial(n - 1); &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int factorial(int n) {
    if (n == 0 || n == 1)
        return 1;
    else
        return n * factorial(n - 1);
}`}
            </code>
          </pre>

          <h4 id="34-how-do-you-swap-two-numbers-without-using-a-temporary-variable">
            34. How do you swap two numbers without using a temporary variable?
          </h4>
          <p>
            You can swap two numbers without using a temporary variable by using
            arithmetic operations or bitwise XOR operation.
          </p>
          <h6 id="example-27">Example:</h6>
          <p>Using arithmetic operations:</p>
          {/* <pre>
            <code>
              void swap(int *a, int *b) &#123; *a = *a + *b; *b = *a - *b; *a =
              *a - *b; &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`void swap(int *a, int *b) {
    *a = *a + *b;
    *b = *a - *b;
    *a = *a - *b;
}`}
            </code>
          </pre>

          <h4 id="35-what-is-a-structure-in-c-provide-an-example">
            35. What is a structure in C? Provide an example.
          </h4>
          <p>
            A structure in C is a composite data type that allows you to group
            together variables of different data types under a single name.
          </p>
          <h6 id="example-28">Example:</h6>
          {/* <pre>
            <code>
              struct Person &#123; char name[50]; int age; float salary; &#125;;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`struct Person {
    char name[50];
    int age;
    float salary;
};`}
            </code>
          </pre>

          <h4 id="36-explain-the-difference-between-strcpy-and-strncpy-functions">
            36. Explain the difference between strcpy() and strncpy() functions.
          </h4>
          <p>
            <code>strcpy()</code>: Copies a null-terminated string from source
            to destination. It does not check the length of the destination
            buffer, which can lead to buffer overflow if the source string is
            longer than the destination buffer.
          </p>
          <p>
            <code>strncpy()</code>: Copies at most n characters from the source
            to the destination, where n is specified by the third parameter. It
            ensures that the destination buffer is not overflowed.
          </p>
          <h6 id="example-29">Example:</h6>
          {/* <pre>
            <code>
              char source[] = &quot;Hello&quot;; char dest[10]; // Using strcpy
              strcpy(dest, source); // Potential buffer overflow if source is
              longer than dest // Using strncpy strncpy(dest, source,
              sizeof(dest) - 1); // Ensure no buffer overflow dest[sizeof(dest)
              - 1] = &#39;\0&#39;; // Ensure null termination
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`char source[] = "Hello";
char dest[10];

// Using strcpy
strcpy(dest, source); // Potential buffer overflow if source is longer than dest

// Using strncpy
strncpy(dest, source, sizeof(dest) - 1); // Ensure no buffer overflow
dest[sizeof(dest) - 1] = '\\0'; // Ensure null termination`}
            </code>
          </pre>

          <h4 id="37-what-is-a-union-in-c-provide-an-example">
            37. What is a union in C? Provide an example.
          </h4>
          <p>
            A union in C is a special data type that allows storing different
            data types in the same memory location. However, only one of its
            members can hold a value at a time. Unions are useful when you need
            to represent a single value in different ways.
          </p>
          <h6 id="example-30">Example:</h6>
          {/* <pre>
            <code>
              union Number &#123; int integer; float floating; &#125;; union
              Number num; num.integer = 10; printf(&quot;%d\n&quot;,
              num.integer); // Output: 10 num.floating = 3.14;
              printf(&quot;%f\n&quot;, num.floating); // Output: 3.140000
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`union Number {
    int integer;
    float floating;
};

union Number num;

num.integer = 10;
printf("%d\\n", num.integer); // Output: 10

num.floating = 3.14;
printf("%f\\n", num.floating); // Output: 3.140000`}
            </code>
          </pre>

          <h4 id="38-how-do-you-find-the-length-of-a-string-in-c">
            38. How do you find the length of a string in C?
          </h4>
          <p>
            You can find the length of a string in C using the{" "}
            <code>strlen()</code> function from the
            <code>&lt;string.h&gt;</code> header.
          </p>
          <h6 id="example-31">Example:</h6>
          {/* <pre>
            <code>
              #include &lt;stdio.h&gt; #include &lt;string.h&gt; int main()
              &#123; char str[] = &quot;Hello, World!&quot;; int length =
              strlen(str); printf(&quot;Length of string: %d\n&quot;, length);
              // Output: 13 return 0; &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello, World!";
    int length = strlen(str);
    printf("Length of string: %d\\n", length); // Output: 13
    return 0;
}`}
            </code>
          </pre>

          <h4 id="39-what-is-the-purpose-of-static-keyword-in-c">
            39. What is the purpose of static keyword in C?
          </h4>
          <p>
            When used with global variables, static keyword limits the scope of
            the variable to the file in which it is declared. When used with
            local variables, static keyword preserves the value of the variable
            between function calls.
          </p>
          <h6 id="example-32">Example:</h6>
          {/* <pre>
            <code>
              static int globalVar; // Static global variable void func() &#123;
              static int localVar; // Static local variable localVar++;
              printf(&quot;%d\n&quot;, localVar); &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`static int globalVar; // Static global variable

void func() {
    static int localVar; // Static local variable
    localVar++;
    printf("%d\\n", localVar);
}`}
            </code>
          </pre>

          <h4 id="40-explain-the-concept-of-bitwise-operators-in-c">
            40. Explain the concept of bitwise operators in C.
          </h4>
          <p>
            Bitwise operators in C operate on individual bits of integers. These
            operators are commonly used in low-level programming, device driver
            development, and embedded systems.
          </p>
          <ul>
            <li>
              <code>&amp;</code> (Bitwise AND): Sets a bit to 1 if both
              corresponding bits are 1.
            </li>
            <li>
              <code>|</code> (Bitwise OR): Sets a bit to 1 if at least one
              corresponding bit is 1.
            </li>
            <li>
              <code>^</code> (Bitwise XOR): Sets a bit to 1 if the corresponding
              bits are different.
            </li>
            <li>
              <code>~</code> (Bitwise NOT): Flips all bits (0 to 1 and 1 to 0).
            </li>
            <li>
              <code>&lt;&lt;</code> (Left shift): Shifts all bits to the left by
              a specified number of positions.
            </li>
            <li>
              <code>&gt;&gt;</code> (Right shift): Shifts all bits to the right
              by a specified number of positions.
            </li>
          </ul>
          <h6 id="example-33">Example:</h6>
          {/* <pre>
            <code>
              unsigned int a = 5; // 0000 0101 unsigned int b = 3; // 0000 0011
              unsigned int result = a &amp; b; // Bitwise AND
              printf(&quot;%u\n&quot;, result); // Output: 0000 0001 (1) result
              = a | b; // Bitwise OR printf(&quot;%u\n&quot;, result); //
              Output: 0000 0111 (7) result = a ^ b; // Bitwise XOR
              printf(&quot;%u\n&quot;, result); // Output: 0000 0110 (6) result
              = ~a; // Bitwise NOT printf(&quot;%u\n&quot;, result); // Output:
              1111 1010 (4294967290) result = a &lt;&lt; 1; // Left shift
              printf(&quot;%u\n&quot;, result); // Output: 0000 1010 (10) result
              = b &gt;&gt; 1; // Right shift printf(&quot;%u\n&quot;, result);
              // Output: 0000 0001 (1)
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`unsigned int a = 5; // 0000 0101
unsigned int b = 3; // 0000 0011
unsigned int result;


result = a & b;// Bitwise AND
printf("%u\\n", result);             // Output: 0000 0001 (1)


result = a | b;// Bitwise OR
printf("%u\\n", result);             // Output: 0000 0111 (7)


result = a ^ b;// Bitwise XOR
printf("%u\\n", result);             // Output: 0000 0110 (6)


result = ~a;// Bitwise NOT
printf("%u\\n", result);             // Output: 1111 1010 (4294967290)


result = a << 1;// Left shift
printf("%u\\n", result);             // Output: 0000 1010 (10)
    

result = b >> 1;// Right shift
printf("%u\\n", result);             // Output: 0000 0001 (1)`}
            </code>
          </pre>

          <h4 id="41-what-is-the-difference-between--and--operators">
            41. What is the difference between &amp;&amp; and || operators?
          </h4>
          <p>
            <code>&amp;&amp;</code> (Logical AND): Returns true if both operands
            are true.
          </p>
          <p>
            <code>||</code> (Logical OR): Returns true if at least one of the
            operands is true.
          </p>
          <h6 id="example-34">Example:</h6>
          {/* <pre>
            <code>
              int a = 5, b = 3; if (a &gt; 0 &amp;&amp; b &gt; 0) &#123;
              printf(&quot;Both numbers are positive\n&quot;); &#125; if (a &gt;
              0 || b &gt; 0) &#123; printf(&quot;At least one number is
              positive\n&quot;); &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int a = 5, b = 3;

// Logical AND
if (a > 0 && b > 0) {
    printf("Both numbers are positive\\n");
}

// Logical OR
if (a > 0 || b > 0) {
    printf("At least one number is positive\\n");
}`}
            </code>
          </pre>

          <h4 id="42-how-do-you-implement-a-stack-using-an-array">
            42. How do you implement a stack using an array?
          </h4>
          <p>
            A stack is a data structure that follows the Last In, First Out
            (LIFO) principle. You can implement a stack using an array by
            keeping track of the top element and performing push and pop
            operations accordingly.
          </p>
          <h6 id="example-35">Example:</h6>
          {/* <pre>
            <code>
              #include &lt;stdio.h&gt; #define MAX_SIZE 100 int stack[MAX_SIZE];
              int top = -1; void push(int item) &#123; if (top == MAX_SIZE - 1)
              &#123; printf(&quot;Stack Overflow\n&quot;); return; &#125;
              stack[++top] = item; &#125; int pop() &#123; if (top == -1) &#123;
              printf(&quot;Stack Underflow\n&quot;); return -1; &#125; return
              stack[top--]; &#125; int main() &#123; push(1); push(2); push(3);
              printf(&quot;%d\n&quot;, pop()); // Output: 3
              printf(&quot;%d\n&quot;, pop()); // Output: 2
              printf(&quot;%d\n&quot;, pop()); // Output: 1
              printf(&quot;%d\n&quot;, pop()); // Output: Stack Underflow return
              0; &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`#include <stdio.h>
#define MAX_SIZE 100

int stack[MAX_SIZE];
int top = -1;

void push(int item) {
    if (top == MAX_SIZE - 1) {
        printf("Stack Overflow\\n");
        return;
    }
    stack[++top] = item;
}

int pop() {
    if (top == -1) {
        printf("Stack Underflow\\n");
        return -1;
    }
    return stack[top--];
}

int main() {
    push(1);
    push(2);
    push(3);
    printf("%d\\n", pop()); // Output: 3
    printf("%d\\n", pop()); // Output: 2
    printf("%d\\n", pop()); // Output: 1
    printf("%d\\n", pop()); // Output: Stack Underflow
    return 0;
}`}
            </code>
          </pre>

          <p>
            In this example, push() function inserts an element onto the stack,
            pop() function removes the top element from the stack, and the
            main() function demonstrates the usage of the stack.
          </p>
          <h4 id="43-explain-the-difference-between-const-and-volatile-qualifiers">
            43. Explain the difference between const and volatile qualifiers.
          </h4>
          <p>
            <code>const</code>: It is a keyword used to declare variables as
            constants, meaning their values cannot be changed after
            initialization.
          </p>
          <p>
            <code>volatile</code>: It is a qualifier used to indicate that a
            variable&#39;s value can be changed unexpectedly by external
            factors, such as hardware interrupts or other threads.
          </p>
          <h6 id="example-36">Example:</h6>
          {/* <pre>
            <code>const int MAX_SIZE = 100; volatile int sensorValue;</code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`const int MAX_SIZE = 100;
volatile int sensorValue;`}
            </code>
          </pre>

          <p>
            In the above example, <code>MAX_SIZE</code> is a constant whose
            value cannot be modified once initialized.
            <code>sensorValue</code> is declared volatile to indicate that its
            value can change unexpectedly, such as in the case of sensor
            readings in embedded systems.
          </p>
          <h4 id="44-what-is-a-function-pointer-provide-an-example">
            44. What is a function pointer? Provide an example.
          </h4>
          <p>
            A function pointer is a pointer that points to a function instead of
            a data value. Function pointers are useful when you want to pass
            functions as arguments to other functions or store functions in data
            structures.
          </p>
          <h6 id="example-37">Example:</h6>
          {/* <pre>
            <code>
              #include &lt;stdio.h&gt; int add(int a, int b) &#123; return a +
              b; &#125; int subtract(int a, int b) &#123; return a - b; &#125;
              int main() &#123; int (*ptr)(int, int); // Function pointer
              declaration ptr = add; // Pointing to add function
              printf(&quot;Result of addition: %d\n&quot;, ptr(3, 5)); //
              Output: 8 ptr = subtract; // Pointing to subtract function
              printf(&quot;Result of subtraction: %d\n&quot;, ptr(8, 3)); //
              Output: 5 return 0; &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

int main() {
    int (*ptr)(int, int); // Function pointer declaration
    ptr = add; // Pointing to add function
    printf("Result of addition: %d\\n", ptr(3, 5)); // Output: 8
    ptr = subtract; // Pointing to subtract function
    printf("Result of subtraction: %d\\n", ptr(8, 3)); // Output: 5
    return 0;
}`}
            </code>
          </pre>

          <h4 id="45-explain-the-purpose-of-typedef-keyword-in-c">
            45. Explain the purpose of typedef keyword in C.
          </h4>
          <p>
            The typedef keyword in C is used to create custom data type aliases.
            It provides a way to give a name to existing data types, making the
            code more readable and easier to maintain.
          </p>
          <h6 id="example-38">Example:</h6>
          {/* <pre>
            <code>
              typedef int Length; // Creating alias for int data type Length
              distance = 100;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`typedef int Length; // Creating alias for int data type
Length distance = 100;`}
            </code>
          </pre>

          <h4 id="46-what-is-the-scope-of-a-variable-in-c">
            46. What is the scope of a variable in C?
          </h4>
          <p>
            The scope of a variable in C determines where in the program it can
            be accessed. There are three types of variable scope:
          </p>
          <p>
            <strong>Local scope</strong>: Variables declared within a block or
            function have local scope and can only be accessed within that block
            or function.
          </p>
          <p>
            <strong>Global scope</strong>: Variables declared outside of all
            functions have global scope and can be accessed from any part of the
            program.
          </p>
          <p>
            <strong>Function parameter scope</strong>: Parameters passed to a
            function have local scope within that function.
          </p>
          <h4 id="47-how-do-you-perform-error-handling-in-c">
            47. How do you perform error handling in C?
          </h4>
          <p>
            Error handling in C can be done using conditional statements, return
            values, and error codes. Common error handling techniques include
            checking return values of functions, using <code>errno</code>{" "}
            variable to check error codes, and using <code>assert()</code> macro
            for debugging purposes.
          </p>
          <h4 id="48-explain-the-purpose-of-do-while-loop-in-c">
            48. Explain the purpose of do-while loop in C.
          </h4>
          <p>
            The do-while loop in C is similar to the while loop, except that the
            condition is checked after executing the loop body. This guarantees
            that the loop body is executed at least once, regardless of the
            condition.
          </p>
          <h6 id="example-39">Example:</h6>
          {/* <pre>
            <code>
              int i = 0; do &#123; printf(&quot;%d\n&quot;, i); i++; &#125;
              while (i &lt; 5);
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`int i = 0;
do {
    printf("%d\\n", i);
    i++;
} while (i < 5);`}
            </code>
          </pre>

          <h4 id="49-explain-the-purpose-of-define-directive-in-c">
            49. Explain the purpose of #define directive in C.
          </h4>
          <p>
            The #define directive in C is used to define macros, which are
            replaced by their values during the preprocessing stage. It is
            commonly used to define constants, function-like macros, and
            conditional compilation.
          </p>
          <h6 id="example-40">Example:</h6>
          {/* <pre>
            <code>#define PI 3.14159 #define SQUARE(x) ((x) * (x))</code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`#define PI 3.14159
#define SQUARE(x) ((x) * (x))`}
            </code>
          </pre>

          <p>
            In this example, PI is a constant and SQUARE(x) is a function-like
            macro.
          </p>
          <h4 id="50-what-is-the-difference-between-int-main-and-void-main">
            50. What is the difference between int main() and void main()?
          </h4>
          <p>
            In C, the main() function serves as the entry point of a program,
            and it returns an integer to the operating system indicating the
            exit status of the program. According to the C standard, the main()
            function should always have a return type of int. Using void main()
            is considered non-standard and might not be supported by all
            compilers.
          </p>
          <h6 id="example-41">Example:</h6>
          {/* <pre>
            <code>
              #include &lt;stdio.h&gt; int main() &#123; printf(&quot;Hello,
              world!\n&quot;); return 0; &#125;
            </code>
          </pre> */}
          <pre className="code-block">
            <code>
              {`#include <stdio.h>

int main() {
    printf("Hello, world!\\n");
    return 0;
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};
