// import "./C++.css";
// import "../globalStyle.css";
import images from "../../../assets/C++/index";

export const Cplusprogramming = () => {
  return (
    <div class="main-container-interview-questions">
      <div>
        <p class="main-heading-q-a">C++ Interview Questions and Answers</p>
        <div class="main-heading-interview-questions-answers">
          <img class="img-class-language-logo" src={images.Cplus} />
          <p>
            C++ is a high-level, general-purpose programming language designed
            as an extension of the C programming language with object-oriented
            programming features. It supports both procedural and
            object-oriented programming paradigms, allowing developers to choose
            the style that best fits their problem domain. C++ is a compiled
            language, and its source code is translated into machine code by a
            compiler before execution. Known for its performance and efficiency,
            C++ is often used in systems programming, game development, and
            performance-critical applications. C++ introduces classes, objects,
            inheritance, polymorphism, and encapsulation, providing powerful
            tools for structuring and organizing code. <br />
            The STL offers a collection of generic algorithms and data
            structures, facilitating code reuse and enhancing productivity. C++
            provides manual memory management, allowing programmers control over
            memory allocation and deallocation. Widely used in industries, C++
            forms the basis for many software systems, libraries, and
            frameworks, contributing to its popularity. C++ supports
            cross-platform development, enabling the creation of applications
            that can run on various operating systems with minimal modification.
          </p>
        </div>
      </div>
      <div className="question-answer">
        <h4 id="1what-is-c">1.What is C++?</h4>
        <p>
          C++ is a general-purpose programming language that was developed as an
          extension of the C programming language.It was created by Bjarne
          Stroustrup at Bell Labs in the early 1980s.C++ introduces
          object-oriented programming features to C, allowing for the creation
          of classes and objects, as well as supporting features like
          inheritance and polymorphism.Initially, Stroustrup called the new
          language &quot;C with classes&quot;. However, after sometime the name
          was changed to C++.The idea of C++ comes from the C increment operator
          ++.
        </p>
        <h4 id="2-why-c">2. Why C++?</h4>
        <p>
          It is used in developing graphical user interface-based applications
          like adobe photoshop.It is used in developing games as it overrides
          the complexity of 3D games.There is much-animated software developed
          in C++.Most of the compilers are written in C++.Google Chrome, Mozilla
          Firefox etc. web browsers are developed using C++
        </p>
        <h4 id="3-what-is-the-difference-between-c-and-c">
          3. What is the difference between C and C++?
        </h4>
        <table>
          <thead>
            <tr>
              <th align="left">C</th>
              <th align="left">C++</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                C is a procedural programming language. It follows the
                procedural programming paradigm, focusing on functions and
                structured programming.
              </td>
              <td align="left">
                C++ is a multi-paradigm language. It supports procedural,
                object-oriented, and generic programming paradigms. It
                introduces classes and objects for object-oriented programming.
              </td>
            </tr>
            <tr>
              <td align="left">
                C is not an object-oriented language. It does not have built-in
                support for classes, objects, and other OOP features.
              </td>
              <td align="left">
                C++ is designed to support object-oriented programming. It
                introduces classes, encapsulation, inheritance, and polymorphism
                for OOP development.
              </td>
            </tr>
            <tr>
              <td align="left">
                In C, memory management is done manually using functions like
                <strong>malloc</strong> and <strong>free</strong>. There is no
                built-in support for automatic memory management.
              </td>
              <td align="left">
                C++ introduces the concept of constructors and destructors for
                automatic memory management. It includes the
                <strong>new</strong> and <strong>delete</strong> operators for
                dynamic memory allocation and deallocation.
              </td>
            </tr>
            <tr>
              <td align="left">C does not have a standard template library.</td>
              <td align="left">
                C++ includes the Standard Template Library (STL), which provides
                a collection of template classes and functions for common data
                structures (like vectors, lists, and queues) and algorithms.
              </td>
            </tr>
            <tr>
              <td align="left">
                C does not support function overloading. In C, functions must
                have unique names.
              </td>
              <td align="left">
                C++ supports function overloading, allowing multiple functions
                with the same name but different parameter lists.
              </td>
            </tr>
            <tr>
              <td align="left">C does not support namespaces.</td>
              <td align="left">
                C++ introduces namespaces to organize code into separate logical
                units, preventing naming conflicts.
              </td>
            </tr>
            <tr>
              <td align="left">
                C uses functions like <strong>printf</strong> and
                <strong>scanf</strong> for input/output operations.
              </td>
              <td align="left">
                C++ introduces the concept of streams for input/output
                operations. It provides <strong>cin</strong> and{" "}
                <strong>cout</strong> for console-based I/O.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <h4 id="4-define-tokens-in-c">4. Define tokens in C++</h4>
        <p>
          In C++, a token is the smallest unit in the source code that has a
          meaning.C++ programs are composed of various types of tokens. The
          basic types of tokens in C++ include:
        </p>
        <p>
          <strong>Keywords:</strong> Keywords are reserved words with special
          meanings in C++.Examples include int, double, if, else, class, etc.
        </p>
        <p>
          <strong>Identifiers:</strong> Identifiers are names given to various
          program elements such as variables, functions, classes, etc.An
          identifier must begin with a letter or underscore and can be followed
          by letters, digits, or underscores.
        </p>
        <p>
          <strong>Literals:</strong> Literals represent constant values.Examples
          include integer literals (10), floating-point literals (3.14),
          character literals (&#39;A&#39;), and string literals
          (&quot;Hello&quot;).
        </p>
        <p>
          <strong>Operators:</strong> Operators perform operations on variables
          and values.Examples include arithmetic operators (+, -, *, /),
          relational operators (==, !=, &lt;, &gt;), and logical operators
          (&amp;&amp;, ||, !).
        </p>
        <p>
          <strong>Punctuators:</strong> Punctuators are symbols used to
          punctuate C++ code.Examples include semicolons (;), commas (,),
          parentheses (()), and curly braces (&#123;&#125;).
        </p>
        <p>
          <strong>Constants:</strong> Constants are symbolic names for values
          that do not change during program execution.Constants can be created
          using the const keyword.
        </p>
        <p>
          <strong>Comments:</strong> Comments are not actual tokens processed by
          the compiler but are used for documentation. They help explain the
          code to developers. There are two types of comments in C++:
        </p>
        <ul>
          <li>single-line comments (//)</li>
          <li>multi-line comments (/* ... */).</li>
        </ul>
        <h4 id="5-what-is-variable-in-c">5. What is variable in c++?</h4>
        <p>
          In C++, a variable is a named storage location that holds a value, and
          its value can be changed during the program&#39;s execution.Variables
          are a fundamental concept in programming languages and are used to
          store and manipulate data.
        </p>
        <p>
          <strong>Some key points about variables in C++:</strong>
        </p>
        <p>
          <strong>Declaration:</strong> Before using a variable, you need to
          declare it. This involves specifying the variable&#39;s type and name.
        </p>
        <p>For example:</p>
        {/* <pre>
          <code>
            int age; // Declaration of an integer variable named &#39;age&#39;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`int age; // Declaration of an integer variable named 'age'`}
          </code>
        </pre>

        <p>
          <strong>Initialization:</strong> Variables can be initialized
          (assigned an initial value) at the time of declaration or later in the
          program.
        </p>
        <pre>
          <code>
            int age = 25; // Initialization at the time of declaration
          </code>
        </pre>
        <p>
          <strong>Assignment:</strong> The value of a variable can be changed
          during the program&#39;s execution using the assignment operator (=).
        </p>
        <pre>
          <code>
            age = 30; // Assigning a new value to the &#39;age&#39; variable
          </code>
        </pre>
        <p>
          <strong>Data Types:</strong> Variables have data types that define the
          type of data they can hold, such as int (integer),
          double(floating-point),char (character), etc.
        </p>
        <pre>
          <code>
            double temperature = 98.6; // Declaration and initialization of a
            double variable
          </code>
        </pre>
        <h4 id="6-what-are-the-different-data-types-present-in-c">
          6. What are the different data types present in C++?
        </h4>
        <p>There are 4 Data types present in C++, they are</p>
        <ul>
          <li>
            <p>
              Primitive Datatype(basic datatype). Example- char, short, int,
              float, long, double, bool, etc.
            </p>
          </li>
          <li>
            <p>Derived datatype. Example- array, pointer, etc.</p>
          </li>
          <li>
            <p>Enumeration. Example- enum</p>
          </li>
          <li>
            <p>User-defined data types. Example- structure, class, etc</p>
          </li>
        </ul>
        <h4 id="7-what-are-the-different-types-of-operators-in-c">
          7. What are the different types of Operators in C++?
        </h4>
        <ul>
          <li>
            <p>Arithmetic Operators</p>
          </li>
          <li>
            <p>Assignment Operators</p>
          </li>
          <li>
            <p>Relational Operators</p>
          </li>
          <li>
            <p>Logical Operators</p>
          </li>
          <li>
            <p>Bitwise Operators</p>
          </li>
          <li>
            <p>Other Operators</p>
          </li>
        </ul>
        <h4 id="8-define-scope-of-variable-in-c">
          8. Define scope of variable in C++.
        </h4>
        <p>
          In C++, the scope of a variable refers to the region of the program
          where the variable is accessible and can be used. The scope of a
          variable is determined by its declaration and depends on where the
          variable is defined.There are primarily two types of scope in C++.
        </p>
        <p>
          <strong>Local Scope:</strong> Variables declared inside a block,
          function, or loop have local scope.They are only accessible within
          that specific block, function, or loop.
        </p>
        <h6 id="example">Example:</h6>
        {/* <pre>
          <code>
            #include &lt;iostream&gt; int main() &#123; // Local variable
            &#39;x&#39; with scope limited to the &#39;main&#39; function int x
            = 5; // Another block with its own local variable &#39;y&#39; &#123;
            int y = 10; // &#39;x&#39; is accessible here // &#39;y&#39; is
            accessible here &#125; // &#39;y&#39; is no longer accessible here
            // &#39;x&#39; is accessible here return 0; &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`#include <iostream>
int main() {
    // Local variable 'x' with scope limited to the 'main' function
    int x = 5;
    // Another block with its own local variable 'y'
    {
        int y = 10;
        // 'x' is accessible here
        // 'y' is accessible here
    }
    // 'y' is no longer accessible here
    // 'x' is accessible here
    return 0;
}`}
          </code>
        </pre>

        <p>
          <strong>Global Scope:</strong> Variables declared outside of any
          function or block have global scope.They are accessible throughout the
          entire program.
        </p>
        <h6 id="example-1">Example:</h6>
        {/* <pre>
          <code>
            #include &lt;iostream&gt; // Global variable &#39;globalVar&#39;
            with scope across the entire program int globalVar = 100; int main()
            &#123; // &#39;globalVar&#39; is accessible here return 0; &#125;
            void anotherFunction() &#123; // &#39;globalVar&#39; is accessible
            here &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`#include <iostream>
// Global variable 'globalVar' with scope across the entire program
int globalVar = 100;
int main() {
    // 'globalVar' is accessible here
    return 0;
}
void anotherFunction() {
    // 'globalVar' is accessible here
}`}
          </code>
        </pre>

        <h4 id="9--what-is-using-namespace-std-in-c">
          9. What is using namespace std in C++?
        </h4>
        <p>
          In C++, <strong>using namespace std</strong> is a directive that tells
          the compiler to consider the identifiers in the std namespace as if
          they were in the global namespace.The <strong>std</strong> namespace
          is a namespace in the C++ Standard Library that contains the standard
          C++ library functions and objects.
        </p>
        <p>
          When you write C++ code, many standard library functions and objects
          are defined within the std namespace.For example, functions like
          <strong>cout</strong> and <strong>cin</strong> for input and output,
          as well as containers like <strong>vector</strong> and algorithms like
          <strong>sort</strong>, are part of the std namespace.
        </p>
        <p>
          By using <strong>using namespace std</strong>, you can avoid having to
          prepend std:: to every identifier from the standard library.For
          example, instead of writing std::cout or std::endl, you can simply
          write cout or endl.
        </p>
        <p>Here&#39;s an example:</p>
        {/* <pre>
          <code>
            #include &lt;iostream&gt; using namespace std;// This line allows
            you to use identifiers from the std namespace without prefixing them
            with std:: int main() &#123; cout &lt;&lt; &quot;Hello, World!&quot;
            &lt;&lt; endl; return 0; &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`#include <iostream>
using namespace std; // Allows using identifiers from std namespace without std::
int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`}
          </code>
        </pre>

        <h4 id="10-what-is-a-pointer-in-c">10. What is a pointer in C++?</h4>
        <p>
          In C++, a pointer is a variable that stores the memory address of
          another variable.Pointers are used to work with memory directly and to
          manipulate data at a lower level than the typical variable types.They
          play a crucial role in dynamic memory allocation, accessing array
          elements, and working with functions that operate on memory addresses.
        </p>
        <p>Here&#39;s a basic overview of pointers in C++:</p>
        <p>Declaration:</p>
        <pre>
          <code>int *ptr; // declares a pointer to an integer</code>
        </pre>
        <p>Initialization:</p>
        {/* <pre>
          <code>
            int num = 42; int *ptr = &amp;num; // ptr now contains the memory
            address of the variable &#39;num&#39;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`int num = 42;
int *ptr = &num; // ptr now contains the memory address of the variable 'num'`}
          </code>
        </pre>

        <p>Dereferencing:</p>
        {/* <pre>
          <code>
            int value = *ptr; // retrieves the value stored at the memory
            address pointed to by &#39;ptr&#39;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`int value = *ptr; // retrieves the value stored at the memory address pointed to by 'ptr'`}
          </code>
        </pre>

        <h4 id="11-what-is-the-difference-between-shallow-copy-and-deep-copy-in-c">
          11. What is the difference between shallow copy and deep copy in C++?
        </h4>
        <table>
          <thead>
            <tr>
              <th align="left">Shallow Copy</th>
              <th align="left">Deep Copy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                A shallow copy creates a new object, but it does not create
                copies of the objects pointed to by the original object.
              </td>
              <td align="left">
                A deep copy, on the other hand, creates a new object and also
                duplicates the objects pointed to by the original object.
              </td>
            </tr>
            <tr>
              <td align="left">
                If the original object contains pointers, the shallow copy will
                copy the addresses of the objects being pointed to, rather than
                duplicating the actual content.
              </td>
              <td align="left">
                It allocates new memory for the copied data and copies the
                content to the new memory locations.
              </td>
            </tr>
            <tr>
              <td align="left">
                As a result, both the original and the copied objects will point
                to the same dynamically allocated memory.Changes made through
                one object will affect the other, as they share the same
                underlying data.
              </td>
              <td align="left">
                As a result, changes made to one object do not affect the other,
                as they have independent copies of the data.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <h4 id="12-what-are-void-pointers-in-c">
          12. What are void pointers in C++?
        </h4>
        <p>
          In C++, a void pointer (often referred to as a &quot;generic
          pointer&quot;) is a special type of pointer that can point to objects
          of any data type.Unlike regular pointers, which are type-specific,
          void pointers do not have a specific data type associated with
          them.This allows them to be used for more general-purpose scenarios,
          such as when you want to work with memory in a type-agnostic way.
        </p>
        <p>The declaration syntax for a void pointer is as follows:</p>
        <pre>
          <code>void *ptr;</code>
        </pre>
        <h6 id="heres-a-simple-example">Here&#39;s a simple example:</h6>
        {/* <pre>
          <code>
            #include &lt;iostream&gt; int main() &#123; int intValue = 42; float
            floatValue = 3.14; void *ptr; // Pointing to an integer ptr =
            &amp;intValue; std::cout &lt;&lt; &quot;Value pointed to by void
            pointer: &quot; &lt;&lt; *(static_cast&lt;int*&gt;(ptr)) &lt;&lt;
            std::endl; // Pointing to a float ptr = &amp;floatValue; std::cout
            &lt;&lt; &quot;Value pointed to by void pointer: &quot; &lt;&lt;
            *(static_cast&lt;float*&gt;(ptr)) &lt;&lt; std::endl; return 0;
            &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`#include <iostream>
int main() {
    int intValue = 42;
    float floatValue = 3.14;
    void *ptr;
    // Pointing to an integer
    ptr = &intValue;
    std::cout << "Value pointed to by void pointer: " << *(static_cast<int*>(ptr)) << std::endl;
    // Pointing to a float
    ptr = &floatValue;
    std::cout << "Value pointed to by void pointer: " << *(static_cast<float*>(ptr)) << std::endl;
    return 0;
}`}
          </code>
        </pre>

        <h4 id="13-what-is-a-function-in-c">13. What is a function in C++?</h4>
        <p>
          In C++, a function is a named block of code that performs a specific
          task.Functions provide a way to modularize code,making it more
          readable, reusable, and maintainable.In C++, a program typically
          consists of one or more functions that work together to accomplish a
          specific goal.
        </p>
        <p>Here is the basic syntax of a function in C++:</p>
        {/* <pre>
          <code>
            returnType functionName(parameter1Type parameter1, parameter2Type
            parameter2, ...) &#123; // Function body: code that performs the
            task // ... return returnValue; // Optional: return a value of the
            specified returnType &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`returnType functionName(parameter1Type parameter1, parameter2Type parameter2, ...) {
    // Function body: code that performs the task
    // ...
    return returnValue; // Optional: return a value of the specified returnType
}`}
          </code>
        </pre>

        <p>
          <strong>returnType:</strong> Specifies the type of value that the
          function returns. If the function does not return a value, void is
          used.
        </p>
        <p>
          <strong>functionName:</strong> A unique identifier for the function.
          It should follow the rules for naming identifiers in C++.
        </p>
        <p>
          <strong>parameters:</strong> Input values passed to the function. A
          function may take zero or more parameters. Each parameter consists of
          a type and a name.
        </p>
        <p>
          <strong>Function body:</strong> The block of code enclosed in curly
          braces &#123;&#125; that defines what the function does. It contains
          the statements that make up the function&#39;s logic.
        </p>
        <p>
          <strong>return statement:</strong> If the function has a returnType
          other than void, it must use a return statement to specify the value
          to be returned. The type of the returned value must match the
          specified returnType.
        </p>
        <h4 id="14-what-is-a-reference-in-c">
          14. What is a reference in C++?
        </h4>
        <p>
          In C++, a reference is an alias or an alternative name for an existing
          variable.It provides a way to access the value of a variable using a
          different identifier.Unlike pointers, references cannot be reassigned
          to refer to a different variable after initialization.Once a reference
          is bound to a variable, it remains bound to that variable for its
          entire lifetime.
        </p>
        <p>Here&#39;s the basic syntax for declaring a reference:</p>
        <pre>
          <code>type &amp;refName = existingVariable;</code>
        </pre>
        <p>
          <strong>type:</strong> The data type of the variable being referred
          to.
        </p>
        <p>
          <strong>refName:</strong> The name of the reference variable.
        </p>
        <p>
          <strong>existingVariable:</strong> The variable to which the reference
          is initially bound.
        </p>
        <h6 id="example-2">example</h6>
        {/* <pre>
          <code>
            #include &lt;iostream&gt; int main() &#123; int originalVariable =
            42; // Reference declaration int &amp;ref = originalVariable; //
            Modifying the value through the reference ref = 99; // Output the
            changes std::cout &lt;&lt; &quot;Original Variable: &quot; &lt;&lt;
            originalVariable &lt;&lt; std::endl; std::cout &lt;&lt; &quot;Value
            through Reference: &quot; &lt;&lt; ref &lt;&lt; std::endl; return 0;
            &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`#include <iostream>

int main() {
    int originalVariable = 42;
    // Reference declaration
    int &ref = originalVariable;
    // 'ref' is a reference to 'originalVariable'
    // Modifying the value through the reference
    ref = 99;
    // Output the changes
    std::cout << "Original Variable: " << originalVariable << std::endl;
    std::cout << "Value through Reference: " << ref << std::endl;
    return 0;
}`}
          </code>
        </pre>

        <h4 id="15-what-is-the-difference-between-reference-and-pointer-in-c">
          15. What is the difference between reference and pointer in C++?
        </h4>
        <table>
          <thead>
            <tr>
              <th align="left">Reference</th>
              <th align="left">Pointer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                A reference is an alias for a variable that already exists.
              </td>
              <td align="left">
                A pointer is a variable that holds the memory address of another
                variable.
              </td>
            </tr>
            <tr>
              <td align="left">
                The reference variable shares the same memory address as the
                existing variable.
              </td>
              <td align="left">Pointer has its own memory address.</td>
            </tr>
            <tr>
              <td align="left">
                It is necessary to initialize it with a value during
                declaration.
              </td>
              <td align="left">
                Pointer variable can be declared without initializing.
              </td>
            </tr>
            <tr>
              <td align="left">It cannot be assigned a null value.</td>
              <td align="left">It can be assigned null value.</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h4 id="16-what-is-the-difference-between-call-by-value-and-call-by-reference">
          16. What is the difference between call by value and call by
          reference?
        </h4>
        <p>
          In C++, the terms &quot;call by value&quot; and &quot;call by
          reference&quot; refer to two different ways in which arguments are
          passed to functions.These methods affect how modifications to function
          parameters inside the function impact the original values outside the
          function.
        </p>
        <p>
          <strong>Call by Value:</strong> In call by value, a copy of the actual
          argument&#39;s value is passed to the function parameter.The function
          works with this copy, and any modifications made to the parameter
          inside the function do not affect the original value outside the
          function.This is the default way of passing arguments to functions in
          C++.
        </p>
        <h6 id="example-of-call-by-value">Example of call by value:</h6>
        {/* <pre>
          <code>
            #include &lt;iostream&gt; void incrementByValue(int x) &#123; x++;
            std::cout &lt;&lt; &quot;Inside function: &quot; &lt;&lt; x &lt;&lt;
            std::endl; &#125; int main() &#123; int num = 5;
            incrementByValue(num); std::cout &lt;&lt; &quot;Outside function:
            &quot; &lt;&lt; num &lt;&lt; std::endl; return 0; &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`#include <iostream>

void incrementByValue(int x) {
    x++;
    std::cout << "Inside function: " << x << std::endl;
}

int main() {
    int num = 5;
    incrementByValue(num);
    std::cout << "Outside function: " << num << std::endl;
    return 0;
}`}
          </code>
        </pre>

        <h6 id="output">Output</h6>
        {/* <pre>
          <code>Inside function: 6 Outside function: 5</code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`Inside function: 6
Outside function: 5`}
          </code>
        </pre>

        <p>
          <strong>Call by Reference:</strong> In call by reference, the memory
          address (reference) of the actual argument is passed to the function
          parameter.The function works with the original variable, and any
          modifications made to the parameter inside the function directly
          affect the original value outside the function.To achieve call by
          reference, you use references (&amp; symbol) in the function parameter
          list.
        </p>
        <h6 id="example-of-call-by-reference">Example of call by reference:</h6>
        {/* <pre>
          <code>
            #include &lt;iostream&gt; void incrementByReference(int &amp;x)
            &#123; x++; std::cout &lt;&lt; &quot;Inside function: &quot;
            &lt;&lt; x &lt;&lt; std::endl; &#125; int main() &#123; int num = 5;
            incrementByReference(num); std::cout &lt;&lt; &quot;Outside
            function: &quot; &lt;&lt; num &lt;&lt; std::endl; return 0; &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`#include <iostream>

void incrementByReference(int &x) {
    x++;
    std::cout << "Inside function: " << x << std::endl;
}

int main() {
    int num = 5;
    incrementByReference(num);
    std::cout << "Outside function: " << num << std::endl;
    return 0;
}`}
          </code>
        </pre>

        <h6 id="output-1">Output:</h6>
        {/* <pre>
          <code>Inside function: 6 Outside function: 6</code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`Inside function: 6
Outside function: 6`}
          </code>
        </pre>

        <h4 id="17-what-is-the-oops-concept-in-c-and-why-do-we-need-it">
          17. What is the OOPS concept in C++, and why do we need it?
        </h4>
        <p>
          Object Oriented Programming (OOP) is a programming paradigm that
          includes many principles such as inheritance, encapsulation,
          polymorphism, and so on.In earlier programming languages, such as C,
          we used procedural-oriented programming.This approach was not
          effective because it had some limitations, such as code that could not
          be reused in the program.So OOPS provides us with functionalities like
          code usability and data hiding.
        </p>
        <h4 id="18-what-are-class-and-objects-in-c">
          18. What are class and objects in C++?
        </h4>
        <p>
          In C++, a class is a user-defined data type that serves as a blueprint
          for creating objects.It defines a template for the creation of objects
          that encapsulate data and the operations that can be performed on that
          data.In other words, a class is a way to bundle data and functions
          that operate on that data into a single unit.
        </p>
        <p>Here&#39;s a basic example of a class in C++:</p>
        {/* <pre>
          <code>
            #include &lt;iostream&gt; // Class definition class MyClass &#123;
            public: // Access specifier // Data members int myData; // Member
            function (method) void displayData() &#123; std::cout &lt;&lt;
            &quot;Data: &quot; &lt;&lt; myData &lt;&lt; std::endl; &#125;
            &#125;; int main() &#123; // Object creation MyClass obj; //
            Accessing data member and calling member function obj.myData = 42;
            obj.displayData(); return 0; &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`#include <iostream>

// Class definition
class MyClass {
public: 
    // Data members
    int myData;

    // Member function (method)
    void displayData() {
        std::cout << "Data: " << myData << std::endl;
    }
};

int main() {
    // Object creation
    MyClass obj;

    // Accessing data member and calling member function
    obj.myData = 42;
    obj.displayData();

    return 0;
}`}
          </code>
        </pre>

        <p>
          In this example:<strong> MyClass</strong> is a class with a single
          data member (<strong>myData</strong>) and a member function (
          <strong>displayData</strong>).An object of the class is created using
          <strong>MyClass obj;</strong>.The data member <strong>myData</strong>{" "}
          is accessed and modified using <strong>obj.myData</strong>. The member
          function <strong>displayData</strong> is called on the object
          <strong>obj</strong>.
        </p>
        <h4 id="19-why-do-we-use-constructors-in-c">
          19. Why do we use constructors in C++?
        </h4>
        <p>
          In C++, constructors are special member functions with the same name
          as their class.It can be used to initialize values to an object&#39;s
          data members.Whenever any instance of a class is created, it is
          automatically executed.
        </p>
        <h4 id="20-what-are-types-of-constructor-in-c">
          20. what are types of constructor in C++?
        </h4>
        <p>
          <strong>Default Constructor:</strong> A default constructor is a
          constructor with no parameters.If a class does not explicitly define a
          constructor, the compiler provides a default constructor.It
          initializes the data members to default values (zero for numeric
          types, null for pointers, etc.).
        </p>
        <h6 id="example-3">Example:</h6>
        {/* <pre>
          <code>
            class MyClass &#123; public: // Default constructor (provided by the
            compiler) &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class MyClass {
public:
    // Default constructor (provided by the compiler)
};`}
          </code>
        </pre>

        <p>
          <strong>Parameterized Constructor:</strong>
        </p>
        <p>
          A parameterized constructor is a constructor that takes parameters to
          initialize the object&#39;s data members with specified values.It
          allows for customization of object initialization.
        </p>
        <h6 id="example-4">Example:</h6>
        {/* <pre>
          <code>
            class Point &#123; public: // Parameterized constructor Point(int
            initialX, int initialY) &#123; x = initialX; y = initialY; &#125;
            private: int x, y; &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class Point {
public:
    // Parameterized constructor
    Point(int initialX, int initialY) {
        x = initialX;
        y = initialY;
    }

private:
    int x, y;
};`}
          </code>
        </pre>

        <p>
          <strong>Copy Constructor:</strong>
        </p>
        <p>
          A copy constructor is a constructor that initializes an object using
          another object of the same class.It is called when an object is passed
          by value, returned by value, or explicitly when creating a new object
          based on an existing one.
        </p>
        <h6 id="example-5">Example:</h6>
        {/* <pre>
          <code>
            class MyClass &#123; public: // Copy constructor MyClass(const
            MyClass &amp;other) &#123; // Copy data from &#39;other&#39; to the
            current object &#125; &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class MyClass {
public:
    // Copy constructor
    MyClass(const MyClass &other) {
        // Copy data from 'other' to the current object
    }
};`}
          </code>
        </pre>

        <h4 id="21-what-is-destructor-in-c">21. What is Destructor in C++?</h4>
        <p>
          In C++, a destructor is a special member function of a class that is
          responsible for cleaning up resources and performing any necessary
          finalization when an object goes out of scope or is explicitly
          deleted.Destructors have the same name as the class preceded by a
          tilde (~).
        </p>
        <p>
          <strong>Key points about destructors:</strong>
        </p>
        <p>
          <strong>Purpose:</strong> Destructors are used to release resources
          acquired by an object during its lifetime.Common use cases include
          releasing dynamic memory, closing files, closing network connections,
          or releasing any other resources that the object might have acquired.
        </p>
        <p>
          <strong>Syntax:</strong> The syntax for a destructor is as follows:
        </p>
        {/* <pre>
          <code>
            class MyClass &#123; public: // Constructor MyClass() &#123; //
            Initialization code &#125; // Destructor ~MyClass() &#123; //
            Cleanup code &#125; &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class MyClass {
public:
    // Constructor
    MyClass() {
        // Initialization code
    }

    // Destructor
    ~MyClass() {
        // Cleanup code
    }
};`}
          </code>
        </pre>

        <p>
          <strong>Automatically Called:</strong> Destructors are automatically
          called when an object goes out of scope or is explicitly deleted using
          the delete operator.The order of destruction is the reverse of the
          order of construction.
        </p>
        {/* <pre>
          <code>
            void someFunction() &#123; MyClass obj; // Constructor is called
            when &#39;obj&#39; is created &#125; // Destructor is called when
            &#39;obj&#39; goes out of scope
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`void someFunction() {
    MyClass obj; // Constructor is called when 'obj' is created
} // Destructor is called when 'obj' goes out of scope`}
          </code>
        </pre>

        <h4 id="22-how-is-memory-allocated-and-deallocated-in-c">
          22. How is memory allocated and deallocated in C++?
        </h4>
        <p>
          Memory allocation and deallocation in C++ are primarily managed using
          operators such as new, delete, malloc, calloc, realloc, and
          free.Additionally, C++ provides mechanisms for automatic memory
          management, such as local variables, arrays, and smart
          pointers.Let&#39;s explore the main approaches to memory allocation
          and deallocation in C++:
        </p>
        <p>
          <strong>Dynamic Memory Allocation (new and delete):</strong> The new
          operator is used to dynamically allocate memory for a single object on
          the heap. The delete operator is used to deallocate the memory
          previously allocated with new.
        </p>
        <h4 id="23-what-are-access-modifiers">
          23. What are access modifiers?
        </h4>
        <p>
          In C++, access modifiers are keywords that determine the visibility
          and accessibility of class members (data members and member functions)
          from outside the class.
        </p>
        <p>There are three main access modifiers in C++:</p>
        <p>
          <strong>Public:</strong> Members declared as public are accessible
          from outside the class.Public members can be accessed by any part of
          the program.Public members are often used to represent the interface
          of the class.
        </p>
        {/* <pre>
          <code>
            class MyClass &#123; public: int publicVar; // Public data member
            void publicFunction() &#123; // Public member function &#125;
            &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class MyClass {
public:
    int publicVar;           // Public data member
    void publicFunction() {  // Public member function
        // Function body
    }
};`}
          </code>
        </pre>

        <p>
          <strong>Private:</strong> Members declared as private are not
          accessible from outside the class.Private members can only be accessed
          within the class.Private members are used to implement the internal
          details of the class and to enforce encapsulation.
        </p>
        {/* <pre>
          <code>
            class MyClass &#123; private: int privateVar; // Private data member
            void privateFunction() &#123; // Private member function &#125;
            &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class MyClass {
private:
    int privateVar;             // Private data member
    void privateFunction() {    // Private member function
        // Function body
    }
};`}
          </code>
        </pre>

        <p>
          <strong>Protected:</strong> Members declared as protected are similar
          to private members but have limited accessibility in derived
          classes.Protected members are accessible within the class and its
          derived classes.Protected members are often used in the context of
          inheritance to allow derived classes to access certain members.
        </p>
        {/* <pre>
          <code>
            class BaseClass &#123; protected: int protectedVar; // Protected
            data member void protectedFunction() &#123; // Protected member
            function &#125; &#125;; class DerivedClass : public BaseClass &#123;
            public: void accessProtectedMember() &#123; // Derived class can
            access protected members of the base class protectedVar = 10;
            protectedFunction(); &#125; &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class BaseClass {
protected:
    int protectedVar;              // Protected data member
    void protectedFunction() {     // Protected member function
        // Function body
    }
};

class DerivedClass : public BaseClass {
public:
    void accessProtectedMember() {
        // Derived class can access protected members of the base class
        protectedVar = 10;
        protectedFunction();
    }
};`}
          </code>
        </pre>

        <h4 id="24-what-is-inheritance-in-c">
          24. What is Inheritance in C++?
        </h4>
        <p>
          Inheritance is a fundamental concept in object-oriented programming
          (OOP) that allows a class to inherit properties and behaviors from
          another class.In C++, a class can inherit members (data members and
          member functions) from another class, known as the
          <strong>base class or parent class</strong>.The class that inherits
          from the base class is called the
          <strong>derived class or child class</strong>.Inheritance in C++
          provides a way to create a hierarchy of classes, where a derived class
          can reuse and extend the functionality of a base class.This promotes
          code reuse, modularity, and the organization of code in a more
          hierarchical and structured manner.
        </p>
        <h4 id="25-define-inheritance-types-in-c">
          25. Define Inheritance types in C++.
        </h4>
        <p>
          <strong>Single Inheritance:</strong> A derived class inherits from
          only one base class.
        </p>
        {/* <pre>
          <code>
            class BaseClass &#123; // Base class members &#125;; class
            DerivedClass : public BaseClass &#123; // Derived class members
            &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class BaseClass {
    // Base class members
};

class DerivedClass : public BaseClass {
    // Derived class members
};`}
          </code>
        </pre>

        <p>
          <strong>Multiple Inheritance:</strong> A derived class can inherit
          from multiple base classes.
        </p>
        {/* <pre>
          <code>
            class BaseClass1 &#123; // Base class 1 members &#125;; class
            BaseClass2 &#123; // Base class 2 members &#125;; class DerivedClass
            : public BaseClass1, public BaseClass2 &#123; // Derived class
            members &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class BaseClass1 {
    // Base class 1 members
};

class BaseClass2 {
    // Base class 2 members
};

class DerivedClass : public BaseClass1, public BaseClass2 {
    // Derived class members
};`}
          </code>
        </pre>

        <p>
          <strong>Multilevel Inheritance:</strong> A derived class is used as a
          base class for another class.
        </p>
        {/* <pre>
          <code>
            class BaseClass &#123; // Base class members 25;; class
            IntermediateClass : public BaseClass &#123; // Intermediate class
            members &#125;; class DerivedClass : public IntermediateClass &#123;
            // Derived class members &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class BaseClass {
    // Base class members
};

class IntermediateClass : public BaseClass {
    // Intermediate class members
};

class DerivedClass : public IntermediateClass {
    // Derived class members
};`}
          </code>
        </pre>

        <p>
          <strong>Hierarchical Inheritance:</strong> Multiple classes inherit
          from a single base class.
        </p>
        {/* <pre>
          <code>
            class BaseClass &#123; // Base class members &#125;; class
            DerivedClass1 : public BaseClass &#123; // Derived class 1 members
            &#125;; class DerivedClass2 : public BaseClass &#123; // Derived
            class 2 members &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class BaseClass {
    // Base class members
};

class DerivedClass1 : public BaseClass {
    // Derived class 1 members
};

class DerivedClass2 : public BaseClass {
    // Derived class 2 members
};`}
          </code>
        </pre>

        <p>
          <strong>Hybrid Inheritance:</strong> It is a combination of two or
          more types of inheritance. For example, a combination of single and
          multiple inheritance.
        </p>
        {/* <pre>
          <code>
            class BaseClass &#123; // Base class members &#125;; class
            DerivedClass1 : public BaseClass &#123; // Derived class 1 members
            &#125;; class DerivedClass2 : public BaseClass, public AnotherClass
            &#123; // Derived class 2 members &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class BaseClass {
    // Base class members
};

class DerivedClass1 : public BaseClass {
    // Derived class 1 members
};

class DerivedClass2 : public BaseClass, public AnotherClass {
    // Derived class 2 members
};`}
          </code>
        </pre>

        <h4 id="26-what-is-encapsulation-in-c">
          26. What is Encapsulation in C++?
        </h4>
        <p>
          Encapsulation is one of the four fundamental principles of
          object-oriented programming (OOP), and it refers to the bundling of
          data (attributes) and the methods (functions) that operate on that
          data into a single unit known as a class.The main idea behind
          encapsulation is to hide the internal details of how an object works
          and expose only what is necessary for the outside world to interact
          with it.
        </p>
        <p>
          <strong>Encapsulation Benefits:</strong>
        </p>
        <p>
          <strong>Data Protection:</strong> Encapsulation helps in protecting
          the integrity of data by restricting direct access to the private
          members. Access to the data is controlled through public methods,
          which can include validation logic.
        </p>
        <p>
          <strong>Implementation Flexibility:</strong> The internal
          implementation details of a class can be changed without affecting the
          code that uses the class. This promotes code maintainability and
          flexibility.
        </p>
        <p>
          <strong>Code Organization:</strong> Encapsulation facilitates modular
          design, making it easier to manage and understand large codebases by
          organizing related functionality within classes.
        </p>
        {/* <pre>
          <code>
            int main() &#123; Circle myCircle; myCircle.setRadius(5.0); //
            Direct access to private members is not allowed // double r =
            myCircle.radius; // Compilation error double area =
            myCircle.calculateArea(); std::cout &lt;&lt; &quot;Area: &quot;
            &lt;&lt; area &lt;&lt; std::endl; return 0; &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`int main() {
    Circle myCircle;
    myCircle.setRadius(5.0);

    // Direct access to private members is not allowed
    // double r = myCircle.radius; // Compilation error

    double area = myCircle.calculateArea();
    std::cout << "Area: " << area << std::endl;

    return 0;
}`}
          </code>
        </pre>

        <h4 id="27define-function-overloading-in-c">
          27.Define Function Overloading in C++.
        </h4>
        <p>
          Function overloading in C++ refers to the ability to define multiple
          functions in the same scope (such as within the same class or
          namespace) with the same name but different parameter lists.The
          compiler distinguishes between these functions based on the number,
          types, or order of the parameters.
        </p>
        <p>
          Function overloading allows you to provide multiple versions of a
          function, each tailored to handle different types of input or perform
          different tasks.
        </p>
        <p>Key points about function overloading:</p>
        <strong>
          <p>Parameter Lists:</p>
        </strong>
        <p>
          Functions that are overloaded must have different parameter lists,
          which can include differences in the number, types, or order of
          parameters.Return types alone do not differentiate overloaded
          functions.
        </p>
        <p>
          <strong>Function Signature:</strong> The combination of a
          function&#39;s name and its parameter list is known as its signature.
          Two functions with the same name but different parameter lists have
          different signatures and are considered overloaded.
        </p>
        <h6 id="example-of-function-overloading">
          Example of Function Overloading:
        </h6>
        {/* <pre>
          <code>
            #include &lt;iostream&gt; #include &lt;string&gt; class
            OverloadedExample &#123; public: // Function to add two integers int
            add(int a, int b) &#123; return a + b; &#125; // Function to add two
            doubles double add(double a, double b) &#123; return a + b; &#125;
            &#125;; int main() &#123; OverloadedExample obj; // Calls the add
            function for integers int result1 = obj.add(5, 10); std::cout
            &lt;&lt; &quot;Result for integers: &quot; &lt;&lt; result1 &lt;&lt;
            std::endl; // Calls the add function for doubles double result2 =
            obj.add(3.5, 2.5); std::cout &lt;&lt; &quot;Result for doubles:
            &quot; &lt;&lt; result2 &lt;&lt; std::endl; return 0; &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`#include <iostream>
#include <string>

class OverloadedExample {
public:
    // Function to add two integers
    int add(int a, int b) {
        return a + b;
    }

    // Function to add two doubles
    double add(double a, double b) {
        return a + b;
    }
};

int main() {
    OverloadedExample obj;

    // Calls the add function for integers
    int result1 = obj.add(5, 10);
    std::cout << "Result for integers: " << result1 << std::endl;

    // Calls the add function for doubles
    double result2 = obj.add(3.5, 2.5);
    std::cout << "Result for doubles: " << result2 << std::endl;

    return 0;
}`}
          </code>
        </pre>

        <h4 id="28what-is-operator-overloading-in-c">
          28.What is Operator Overloading in C++?
        </h4>
        <p>
          Operator overloading in C++ allows you to define and use operators
          with user-defined data types, extending the functionality of built-in
          operators.With operator overloading, you can provide a custom
          implementation for how operators work with objects of your classes.
        </p>
        <p>Key points about operator overloading:</p>
        <p>
          <strong>Syntax:</strong> Operator overloading is achieved by defining
          a special member function for a class, known as an overloaded operator
          function.The syntax for operator overloading is returnType operator
          op(parameters), where op is the operator being overloaded.
        </p>
        {/* <pre>
          <code>
            class MyClass &#123; public: // Overloaded + operator MyClass
            operator+(const MyClass&amp; obj) &#123; MyClass result; // Custom
            addition logic here return result; &#125; &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class MyClass {
public:
    // Overloaded + operator
    MyClass operator+(const MyClass& obj) {
        MyClass result;
        // Custom addition logic here
        return result;
    }
};`}
          </code>
        </pre>

        <p>
          <strong>Overloadable Operators:</strong>
        </p>
        <p>
          Not all operators can be overloaded. For example, operators like .
          (member access), :: (scope resolution), ?: (ternary conditional), and
          sizeof cannot be overloaded. Some operators have restrictions or
          conventions associated with their overloading.
        </p>
        <h6 id="example-of-operator-overloading">
          Example of Operator Overloading:
        </h6>
        {/* <pre>
          <code>
            #include &lt;iostream&gt; class Complex &#123; private: double real;
            double imag; public: Complex(double r, double i) : real(r), imag(i)
            &#123;&#125; // Overloaded + operator Complex operator+(const
            Complex&amp; other) const &#123; return Complex(real + other.real,
            imag + other.imag); &#125; // Function to display complex number
            void display() const &#123; std::cout &lt;&lt; real &lt;&lt; &quot;
            + &quot; &lt;&lt; imag &lt;&lt; &quot;i&quot; &lt;&lt; std::endl;
            &#125; &#125;; int main() &#123; Complex c1(2.0, 3.5); Complex
            c2(1.5, 2.5); // Using the overloaded + operator Complex result = c1
            + c2; // Displaying the result std::cout &lt;&lt; &quot;Result:
            &quot;; result.display(); return 0; &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`#include <iostream>

class Complex {
private:
    double real;
    double imag;

public:
    Complex(double r, double i) : real(r), imag(i) {}

    // Overloaded + operator
    Complex operator+(const Complex& other) const {
        return Complex(real + other.real, imag + other.imag);
    }

    // Function to display complex number
    void display() const {
        std::cout << real << " + " << imag << "i" << std::endl;
    }
};

int main() {
    Complex c1(2.0, 3.5);
    Complex c2(1.5, 2.5);

    // Using the overloaded + operator
    Complex result = c1 + c2;

    // Displaying the result
    std::cout << "Result: ";
    result.display();

    return 0;
}`}
          </code>
        </pre>

        <h4 id="29-define-polymorphism-in-c">
          29. Define Polymorphism in C++.
        </h4>
        <p>
          Polymorphism is a fundamental concept in object-oriented programming
          (OOP) that allows objects of different types to be treated as objects
          of a common base type. It enables a single interface to represent
          multiple forms (types) and allows for more generic and flexible code.
        </p>
        <p>There are two main types of polymorphism in C++:</p>
        <ul>
          <li>Compile-Time Polymorphism (Static Binding)</li>
          <li>Run-Time Polymorphism (Dynamic Binding)</li>
        </ul>
        <h4 id="30-define-virtual-function-in-c">
          30. Define virtual function in C++?
        </h4>
        <p>
          In C++, a virtual function is a member function of a class that is
          declared with the virtual keyword in the base class and is intended to
          be overridden by derived classes. Virtual functions enable
          polymorphism, allowing a program to achieve run-time binding and
          dynamic dispatch.
        </p>
        <p>Here are key points about virtual functions in C++:</p>
        <p>
          <strong>Syntax:</strong> To declare a virtual function in a base
          class, use the virtual keyword in the function declaration.Derived
          classes can then override this virtual function.
        </p>
        {/* <pre>
          <code>
            class BaseClass &#123; public: virtual void virtualFunction() &#123;
            // Virtual function implementation in the base class &#125; &#125;;
            class DerivedClass : public BaseClass &#123; public: void
            virtualFunction() override &#123; // Override the virtual function
            in the derived class &#125; &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class BaseClass {
public:
    virtual void virtualFunction() {
        // Virtual function implementation in the base class
    }
};

class DerivedClass : public BaseClass {
public:
    void virtualFunction() override {
        // Override the virtual function in the derived class
    }
};`}
          </code>
        </pre>

        <p>
          <strong>Dynamic Binding:</strong> Virtual functions enable dynamic
          binding (also known as late binding or run-time polymorphism).The
          actual function that gets executed is determined at run time based on
          the type of the object, rather than at compile time.
        </p>
        <p>
          <strong>Use of &#39;override&#39;:</strong> In C++11 and later,
          it&#39;s a good practice to use the override specifier when overriding
          virtual functions in derived classes.This helps the compiler catch
          errors if the function in the derived class does not actually override
          a virtual function from the base class.
        </p>
        {/* <pre>
          <code>
            class DerivedClass : public BaseClass &#123; public: void
            virtualFunction() override &#123; // Override the virtual function
            in the derived class &#125; &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class DerivedClass : public BaseClass {
public:
    void virtualFunction() override {
        // Override the virtual function in the derived class
    }
};`}
          </code>
        </pre>

        <h4 id="31-what-is-pure-virtual-functions-in-c">
          31. What is Pure Virtual Functions in C++?
        </h4>
        <p>
          A pure virtual function in C++ is a virtual function that is declared
          in a base class but has no implementation in that class.Pure virtual
          functions are declared by appending = 0 to the virtual function
          declaration.The presence of at least one pure virtual function in a
          class makes that class an abstract class, and instances (objects) of
          abstract classes cannot be created.
        </p>
        <p>Key points about pure virtual functions:</p>
        <p>
          <strong>Syntax:</strong> The syntax for declaring a pure virtual
          function is as follows:
        </p>
        {/* <pre>
          <code>
            class AbstractBase &#123; public: virtual void pureVirtualFunction()
            = 0; // Pure virtual function &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class AbstractBase {
public:
    virtual void pureVirtualFunction() = 0; // Pure virtual function
};`}
          </code>
        </pre>

        <p>
          <strong>No Implementation:</strong> Unlike regular virtual functions,
          a pure virtual function has no implementation in the base class. It is
          meant to be overridden by derived classes, and those derived classes
          must provide concrete implementations.
        </p>
        <h4 id="32-define-compile-time-polymorphism-static-binding-in-c">
          32. Define Compile-Time Polymorphism (Static Binding) in C++.
        </h4>
        <p>
          Compile-Time Polymorphism is also known as early binding or method
          overloading. It occurs at compile time and involves the use of
          function overloading or operator overloading. The decision about which
          function or operator to call is made by the compiler based on the
          number and types of arguments.
        </p>
        {/* <pre>
          <code>
            #include &lt;iostream&gt; class CompileTimePolymorphism &#123;
            public: void display(int x) &#123; std::cout &lt;&lt; &quot;Integer:
            &quot; &lt;&lt; x &lt;&lt; std::endl; &#125; void display(double y)
            &#123; std::cout &lt;&lt; &quot;Double: &quot; &lt;&lt; y &lt;&lt;
            std::endl; &#125; &#125;; int main() &#123; CompileTimePolymorphism
            obj; obj.display(5); // Calls display(int) obj.display(3.14); //
            Calls display(double) return 0; &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`#include <iostream>

class CompileTimePolymorphism {
public:
    void display(int x) {
        std::cout << "Integer: " << x << std::endl;
    }

    void display(double y) {
        std::cout << "Double: " << y << std::endl;
    }
};

int main() {
    CompileTimePolymorphism obj;
    obj.display(5);     // Calls display(int)
    obj.display(3.14);  // Calls display(double)

    return 0;
}`}
          </code>
        </pre>

        <h4 id="33-define-run-time-polymorphism-dynamic-binding-in-c">
          33. Define Run-Time Polymorphism (Dynamic Binding) in C++.
        </h4>
        <p>
          Run-Time Polymorphism is also known as late binding or method
          overriding. It occurs at runtime and involves the use of virtual
          functions, pointers, or references to base class objects. The decision
          about which function to call is made at runtime based on the actual
          type of the object.
        </p>
        <h6 id="example-6">Example:</h6>
        {/* <pre>
          <code>
            #include &lt;iostream&gt; class Shape &#123; public: virtual void
            draw() &#123; std::cout &lt;&lt; &quot;Drawing a shape&quot;
            &lt;&lt; std::endl; &#125; &#125;; class Circle : public Shape
            &#123; public: void draw() override &#123; std::cout &lt;&lt;
            &quot;Drawing a circle&quot; &lt;&lt; std::endl; &#125; &#125;;
            class Square : public Shape &#123; public: void draw() override
            &#123; std::cout &lt;&lt; &quot;Drawing a square&quot; &lt;&lt;
            std::endl; &#125; &#125;; int main() &#123; Shape* shape1 = new
            Circle(); Shape* shape2 = new Square(); shape1-&gt;draw(); // Calls
            draw() of Circle shape2-&gt;draw(); // Calls draw() of Square delete
            shape1; delete shape2; return 0; &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`#include <iostream>

class Shape {
public:
    virtual void draw() {
        std::cout << "Drawing a shape" << std::endl;
    }
};

class Circle : public Shape {
public:
    void draw() override {
        std::cout << "Drawing a circle" << std::endl;
    }
};

class Square : public Shape {
public:
    void draw() override {
        std::cout << "Drawing a square" << std::endl;
    }
};

int main() {
    Shape* shape1 = new Circle();
    Shape* shape2 = new Square();

    shape1->draw(); // Calls draw() of Circle
    shape2->draw(); // Calls draw() of Square

    delete shape1;
    delete shape2;

    return 0;
}`}
          </code>
        </pre>

        <h4 id="34-what-is-abstraction-in-c">
          34. What is Abstraction in C++?
        </h4>
        <p>
          Abstraction is a fundamental concept in object-oriented programming
          (OOP) that involves simplifying complex systems by modeling classes
          based on the essential features and ignoring the non-essential
          details.It allows developers to focus on what an object does rather
          than how it achieves its functionality.Abstraction is achieved in C++
          through the use of abstract classes and interfaces.
        </p>
        <p>
          <strong>Abstract Classes:</strong> An abstract class is a class that
          cannot be instantiated on its own and is meant to be subclassed by
          other classes.It may contain abstract methods (pure virtual functions)
          that have no implementation in the abstract class and must be
          implemented by any concrete (non-abstract) subclass.
        </p>
        <h6 id="example-7">Example:</h6>
        {/* <pre>
          <code>
            class AbstractShape &#123; public: // Pure virtual function
            (abstract method) virtual void draw() const = 0; // Regular member
            function with implementation void commonFunction() &#123; //
            Implementation &#125; &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class AbstractShape {
public:
    // Pure virtual function (abstract method)
    virtual void draw() const = 0;

    // Regular member function with implementation
    void commonFunction() {
        // Implementation
    }
};`}
          </code>
        </pre>

        <p>
          <strong> Abstraction and Implementation Separation:</strong>
          ,Abstraction allows you to separate the abstract concept of an object
          from its implementation details.The abstract class provides an
          interface that defines what an object can do, while the concrete
          subclasses provide the actual implementation.
        </p>
        {/* <pre>
          <code>
            class Circle : public AbstractShape &#123; public: void draw() const
            override &#123; // Implementation of drawing a circle &#125; &#125;;
            class Square : public AbstractShape &#123; public: void draw() const
            override &#123; // Implementation of drawing a square &#125; &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class Circle : public AbstractShape {
public:
    void draw() const override {
        // Implementation of drawing a circle
    }
};

class Square : public AbstractShape {
public:
    void draw() const override {
        // Implementation of drawing a square
    }
};`}
          </code>
        </pre>

        <h4 id="35-what-is-the-difference-between-structure-and-class-in-c">
          35. What is the difference between structure and class in C++?
        </h4>
        <p>
          In C++, both structures and classes are used to define user-defined
          data types, but there are some key differences in their default access
          levels and member visibility.
        </p>
        <table>
          <thead>
            <tr>
              <th align="left">Structure</th>
              <th align="left">Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                In a structure, the members (both data members and member
                functions) have public access by default. This means that all
                the members of a structure are accessible from outside the
                structure.
              </td>
              <td align="left">
                In a class, the members have private access by default. This
                means that members are not accessible from outside the class
                unless explicitly specified otherwise.
              </td>
            </tr>
            <tr>
              <td align="left">
                In a class, if you don&#39;t specify an access modifier for
                inheritance (using class or struct), it defaults to private.
              </td>
              <td align="left">
                In a structure, if you don&#39;t specify an access modifier for
                inheritance (using class or struct), it defaults to public.
              </td>
            </tr>
            <tr>
              <td align="left">
                In C++, structures are often used for simple data structures
                where members are typically data fields, and there might not be
                much behavior associated with the structure.
              </td>
              <td align="left">
                Classes are used when there is a need for encapsulation and the
                inclusion of member functions to operate on the data. Classes
                are often used for more complex scenarios where data and methods
                are tightly bound.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <h4 id="36-what-is-a-class-template-in-c">
          36. What is a class template in C++?
        </h4>
        <p>
          In C++, a class template is a mechanism that allows you to define a
          generic class where types (such as data types or class types) can be
          specified as parameters.Class templates enable you to create a family
          of classes with a common structure but with the flexibility to use
          different data types without rewriting the entire class for each
          variation.The syntax for declaring a class template is similar to that
          of a regular class, with the addition of template parameters enclosed
          in angle brackets (&lt;&gt;).
        </p>
        <p>Here&#39;s a basic example:</p>
        {/* <pre>
          <code>
            template &lt;typename T&gt; class MyTemplate &#123; private: T data;
            public: MyTemplate(T value) : data(value) &#123;&#125; T getData()
            const &#123; return data; &#125; &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`template <typename T>
class MyTemplate {
private:
    T data;

public:
    MyTemplate(T value) : data(value) {}

    T getData() const {
        return data;
    }
};`}
          </code>
        </pre>

        <p>
          In this example, MyTemplate is a class template with a single template
          parameter T.The class has a member variable data of type T, and a
          constructor that initializes this variable.The getData member function
          returns the stored data.You can instantiate objects of the template
          class with different data types:
        </p>
        {/* <pre>
          <code>
            int main() &#123; MyTemplate&lt;int&gt; intObj(42); std::cout
            &lt;&lt; &quot;Integer data: &quot; &lt;&lt; intObj.getData()
            &lt;&lt; std::endl; MyTemplate&lt;double&gt; doubleObj(3.14);
            std::cout &lt;&lt; &quot;Double data: &quot; &lt;&lt;
            doubleObj.getData() &lt;&lt; std::endl;
            MyTemplate&lt;std::string&gt; stringObj(&quot;Hello,
            Templates!&quot;); std::cout &lt;&lt; &quot;String data: &quot;
            &lt;&lt; stringObj.getData() &lt;&lt; std::endl; return 0; &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`int main() {
    MyTemplate<int> intObj(42);
    std::cout << "Integer data: " << intObj.getData() << std::endl;

    MyTemplate<double> doubleObj(3.14);
    std::cout << "Double data: " << doubleObj.getData() << std::endl;

    MyTemplate<std::string> stringObj("Hello, Templates!");
    std::cout << "String data: " << stringObj.getData() << std::endl;

    return 0;
}`}
          </code>
        </pre>

        <h4 id="37-what-is-a-scope-resolution-operator-in-c">
          37. What is a scope resolution operator in C++?
        </h4>
        <p>
          In C++, the scope resolution operator :: is used to access members
          (variables or functions) within a class or namespace.It allows you to
          specify the scope of a particular identifier, indicating whether it
          belongs to a class, a namespace, or the global scope.
        </p>
        <p>
          <strong>For Classes:</strong> With classes, the scope resolution
          operator is used to access static members, nested classes, and
          overloaded functions.
        </p>
        {/* <pre>
          <code>
            class MyClass &#123; public: static int staticVar; void
            myFunction(); &#125;; int MyClass::staticVar = 10; // Definition of
            the static variable outside the class void MyClass::myFunction()
            &#123; // Function implementation &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class MyClass {
public:
    static int staticVar;
    void myFunction();
};

// Definition of the static variable outside the class
int MyClass::staticVar = 10;

void MyClass::myFunction() {
    // Function implementation
}`}
          </code>
        </pre>

        <p>
          <strong>For Namespaces:</strong> The scope resolution operator is also
          used to access members of a namespace.
        </p>
        {/* <pre>
          <code>
            namespace MyNamespace &#123; int globalVar = 42; void myFunction()
            &#123; // Function implementation &#125; &#125; int main() &#123;
            int localVar = MyNamespace::globalVar; // Accessing globalVar from
            MyNamespace MyNamespace::myFunction(); // Calling myFunction from
            MyNamespace return 0; &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`namespace MyNamespace {
    int globalVar = 42;
    void myFunction() {
        // Function implementation
    }
}

int main() {
    int localVar = MyNamespace::globalVar;  // Accessing globalVar from MyNamespace
    MyNamespace::myFunction();               // Calling myFunction from MyNamespace
    return 0;
}`}
          </code>
        </pre>

        <p>
          <strong>For Global Scope:</strong> In the global scope, the scope
          resolution operator is used to qualify the names of functions or
          variables that might be shadowed by a local declaration.
        </p>
        {/* <pre>
          <code>
            int globalVar = 100; int main() &#123; int localVar = 5; int
            globalVar = 20; // Accessing global variables using scope resolution
            int result = ::globalVar + localVar; return 0; &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`int globalVar = 100;

int main() {
    int localVar = 5;
    int globalVar = 20;  // Local variable with same name as global

    // Accessing the global variable using scope resolution operator
    int result = ::globalVar + localVar;

    return 0;
}`}
          </code>
        </pre>

        <h4 id="38-what-is-an-inline-function--in-c">
          38. What is an inline function in C++?
        </h4>
        <p>
          In C++, an inline function is a function that, at the compiler&#39;s
          discretion, is expanded in place where it is called, rather than being
          invoked through a regular function call.The inline keyword is used to
          suggest to the compiler that a function should be treated as inline.
        </p>
        <p>
          When a function is declared as inline, the compiler may replace the
          function call with the actual code of the function, leading to
          potential performance improvements.However, the decision of whether to
          inline a function is ultimately made by the compiler.
        </p>
        <h6 id="example-8">Example:</h6>
        {/* <pre>
          <code>
            #include &lt;iostream&gt; // Declaration of an inline function
            inline int add(int a, int b) &#123; return a + b; &#125; int main()
            &#123; int result = add(3, 4); // The compiler may replace this with
            the actual code of the add function std::cout &lt;&lt; &quot;Result:
            &quot; &lt;&lt; result &lt;&lt; std::endl; return 0; &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`#include <iostream>

// Declaration of an inline function
inline int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(3, 4);  // The compiler may replace this with the actual code of the add function
    std::cout << "Result: " << result << std::endl;
    return 0;
}`}
          </code>
        </pre>

        <h4 id="39-difference-between-a-regular-function-and-an-inline-function-in-c">
          39. Difference between a regular function and an inline function in
          C++.
        </h4>
        <p>
          In C++, the main difference between a regular function and an inline
          function lies in how the compiler handles their calls and expansions
          during the compilation process.
        </p>
        <p>Here are the key distinctions:</p>
        <table>
          <thead>
            <tr>
              <th align="left">Regular Function</th>
              <th align="left">Inline Function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                A regular function is defined in a separate block of code,
                typically in a source file or a separate compilation unit.
              </td>
              <td align="left">
                An inline function is declared with the inline keyword,
                suggesting to the compiler that it may choose to expand the
                function&#39;s code in place at each call site.
              </td>
            </tr>
            <tr>
              <td align="left">
                When a regular function is called, the control is transferred to
                the function, and a separate instance of the function&#39;s code
                is executed.
              </td>
              <td align="left">
                When an inline function is called, the compiler may replace the
                function call with the actual code of the function, eliminating
                the function call overhead.
              </td>
            </tr>
            <tr>
              <td align="left">
                Regular functions are subject to function call overhead,
                including the cost of pushing and popping parameters, as well as
                the jump to and from the function code.
              </td>
              <td align="left">
                Inline functions are most effective for small and frequently
                used functions where the cost of the function call is
                significant compared to the function&#39;s execution.
              </td>
            </tr>
            <tr>
              <td align="left">
                Regular functions have function call overhead, which includes
                the cost of setting up and tearing down the function call stack,
                passing parameters, and the jump to the function code.
              </td>
              <td align="left">
                Inline functions aim to reduce function call overhead by
                potentially expanding the function&#39;s code directly at the
                call site, eliminating the need for a separate function call.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <h6 id="regular-function-example">Regular Function Example:</h6>
        {/* <pre>
          <code>
            // Regular function definition int add(int a, int b) &#123; return a
            + b; &#125; // Function call int result = add(3, 4);
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`// Regular function definition
int add(int a, int b) {
    return a + b;
}

// Function call
int result = add(3, 4);`}
          </code>
        </pre>

        <h6 id="inline-function-example">Inline Function Example:</h6>
        {/* <pre>
          <code>
            // Inline function definition inline int multiply(int a, int b)
            &#123; return a * b; &#125; // Inline function call (may be expanded
            in place) int result = multiply(5, 3);
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`// Inline function definition
inline int multiply(int a, int b) {
    return a * b;
}

// Inline function call (may be expanded in place)
int result = multiply(5, 3);`}
          </code>
        </pre>

        <h4 id="40-what-is-forward-declaration-in-c">
          40. What is Forward declaration in C++?
        </h4>
        <p>
          In C++, forward declaration is a declaration of a class, function, or
          variable that tells the compiler that the entity exists but provides
          limited information about it. It allows you to inform the compiler
          about the existence of an entity before its full definition is
          available.
        </p>
        <p>
          This is useful in situations where the complete definition is not yet
          available but is needed for the compiler to proceed with the current
          code.
        </p>
        <p>
          <strong>Forward Declaration of a Class:</strong>
        </p>
        {/* <pre>
          <code>
            / Forward declaration of a class class MyClass; // Function that
            takes an object of MyClass by reference void myFunction(const
            MyClass&amp; obj); // Definition of MyClass class MyClass &#123;
            public: // Class implementation &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`// Forward declaration of a class
class MyClass;

// Function that takes an object of MyClass by reference
void myFunction(const MyClass& obj);

// Definition of MyClass
class MyClass {
public:
    // Class implementation
};`}
          </code>
        </pre>

        <p>
          <strong>Forward Declaration of a Function:</strong>
        </p>
        {/* <pre>
          <code>
            // Forward declaration of a function int add(int a, int b); int
            main() &#123; int result = add(3, 4); // Using the function before
            its full definition return 0; &#125; // Definition of the function
            int add(int a, int b) &#123; return a + b; &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`// Forward declaration of a function
int add(int a, int b);

int main() {
    int result = add(3, 4);  // Using the function before its full definition
    return 0;
}

// Definition of the function
int add(int a, int b) {
    return a + b;
}`}
          </code>
        </pre>

        <h4 id="41-define-friend-class-in-c">
          41. Define friend class in C++?
        </h4>
        <p>
          In C++, a friend class is a class that is granted access to the
          private and protected members of another class.This is achieved by
          declaring the friend class in the class that wants to allow
          access.Once a class is declared as a friend, it can access the private
          and protected members of the declaring class as if they were its own.
        </p>
        <p>Here&#39;s a basic example of a friend class:</p>
        {/* <pre>
          <code>
            #include &lt;iostream&gt; // Forward declaration of the FriendClass
            class FriendClass; // MyClass declares FriendClass as a friend class
            MyClass &#123; private: int privateVar; public: MyClass(int value) :
            privateVar(value) &#123;&#125; // Declaration of FriendClass as a
            friend class friend class FriendClass; &#125;; // Definition of the
            FriendClass class FriendClass &#123; public: // Function of
            FriendClass accessing privateVar of MyClass void
            accessPrivateVar(MyClass obj) &#123; std::cout &lt;&lt;
            &quot;Accessing privateVar from FriendClass: &quot; &lt;&lt;
            obj.privateVar &lt;&lt; std::endl; &#125; &#125;; int main() &#123;
            MyClass obj(42); FriendClass friendObj; // FriendClass can access
            privateVar of MyClass friendObj.accessPrivateVar(obj); return 0;
            &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`#include <iostream>

// Forward declaration of the FriendClass
class FriendClass;

// MyClass declares FriendClass as a friend class
class MyClass {
private:
    int privateVar;

public:
    MyClass(int value) : privateVar(value) {}

    // Declaration of FriendClass as a friend class
    friend class FriendClass;
};

// Definition of the FriendClass
class FriendClass {
public:
    // Function of FriendClass accessing privateVar of MyClass
    void accessPrivateVar(MyClass obj) {
        std::cout << "Accessing privateVar from FriendClass: " << obj.privateVar << std::endl;
    }
};

int main() {
    MyClass obj(42);
    FriendClass friendObj;

    // FriendClass can access privateVar of MyClass
    friendObj.accessPrivateVar(obj);

    return 0;
}`}
          </code>
        </pre>

        <h4 id="42-define-friend-function-in-c">
          42. Define Friend Function in C++.
        </h4>
        <p>
          In C++, a friend function is a function that is not a member of a
          class but is granted access to the private and protected members of
          that class.A friend function is declared inside a class using the
          friend keyword.Once declared as a friend, the function can access
          private and protected members of the class as if it were a member of
          the class itself.
        </p>
        <h6 id="example-9">Example:</h6>
        {/* <pre>
          <code>
            #include &lt;iostream&gt; // Forward declaration of the MyClass
            class class MyClass; // Friend function declaration void
            friendFunction(const MyClass&amp; obj); // Definition of the MyClass
            class class MyClass &#123; private: int privateVar; public:
            MyClass(int value) : privateVar(value) &#123;&#125; // Declaration
            of the friend function friend void friendFunction(const MyClass&amp;
            obj); &#125;; // Definition of the friend function void
            friendFunction(const MyClass&amp; obj) &#123; // Accessing
            privateVar from MyClass std::cout &lt;&lt; &quot;Accessing
            privateVar from friendFunction: &quot; &lt;&lt; obj.privateVar
            &lt;&lt; std::endl; &#125; int main() &#123; MyClass obj(42); //
            Calling the friend function friendFunction(obj); return 0; &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`#include <iostream>

// Forward declaration of the MyClass
class MyClass;

// Friend function declaration
void friendFunction(const MyClass& obj);

// Definition of the MyClass
class MyClass {
private:
    int privateVar;

public:
    MyClass(int value) : privateVar(value) {}

    // Declaration of the friend function
    friend void friendFunction(const MyClass& obj);
};

// Definition of the friend function
void friendFunction(const MyClass& obj) {
    // Accessing privateVar from MyClass
    std::cout << "Accessing privateVar from friendFunction: " << obj.privateVar << std::endl;
}

int main() {
    MyClass obj(42);

    // Calling the friend function
    friendFunction(obj);

    return 0;
}`}
          </code>
        </pre>

        <h4 id="43-what-are-the-characteristics-of-a-friend-function">
          43. What are the characteristics of a friend function?
        </h4>
        <p>
          The function isn&#39;t part of the class to something that is been
          added as a buddy.Because it isn&#39;t in the scope of that class, it
          can&#39;t be called using the object.It can be used without the
          object, just like any other function.
        </p>
        <p>
          It can&#39;t get at the member names simply, so it has to utilize an
          object name and the dot membership, operator.It might be stated in
          either the private or public sections.
        </p>
        <h4 id="44-what-are-the-static-members-and-static-member-functions">
          44. What are the static members and static member functions?
        </h4>
        <p>
          In C++, static members and static member functions are associated with
          the class rather than with instances (objects) of the class.These
          elements are shared among all instances of the class and can be
          accessed without creating an object.Here are the key characteristics
          of static members and static member functions:
        </p>
        <p>
          <strong>Static Members:</strong>
        </p>
        <ul>
          <li>
            Shared Among All Instances: Static members are shared among all
            instances of a class. They belong to the class rather than to any
            specific object.
          </li>
        </ul>
        <ul>
          <li>
            Declared with the static Keyword: Static members are declared using
            the static keyword before their declaration. This includes static
            data members and static member functions.
          </li>
        </ul>
        {/* <pre>
          <code>
            class MyClass &#123; public: static int staticVar; // Static data
            member // Other members... &#125;; // Definition of the static data
            member int MyClass::staticVar = 0;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class MyClass {
public:
    static int staticVar;  // Static data member
    // Other members...
};

// Definition of the static data member
int MyClass::staticVar = 0;`}
          </code>
        </pre>

        <ul>
          <li>
            Initialization and Definition: Static data members must be defined
            outside the class (usually in a source file) to allocate memory for
            them. They can also be initialized at the point of declaration.
          </li>
        </ul>
        {/* <pre>
          <code>
            // Definition and initialization of the static data member int
            MyClass::staticVar = 0;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`// Definition and initialization of the static data member
int MyClass::staticVar = 0;`}
          </code>
        </pre>

        <ul>
          <li>
            Accessed Using the Class Name: Static members are accessed using the
            class name and the scope resolution operator (::).
          </li>
        </ul>
        {/* <pre>
          <code>MyClass::staticVar = 42;</code>
        </pre> */}
        <pre className="code-block">
          <code>{`MyClass::staticVar = 42;`}</code>
        </pre>

        <ul>
          <li>
            Shared State: Changes to the static data member affect all instances
            of the class. It represents shared state among objects.
          </li>
        </ul>
        <p>
          <strong>Static Member Functions:</strong>
        </p>
        <ul>
          <li>
            Not Bound to an Instance: Static member functions are not bound to
            any specific instance of the class. They can be called without
            creating an object.
          </li>
        </ul>
        {/* <pre>
          <code>
            class MyClass &#123; public: static void staticFunction(); // Static
            member function // Other members... &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class MyClass {
public:
    static void staticFunction();  // Static member function
    // Other members...
};`}
          </code>
        </pre>

        <ul>
          <li>
            Declared with the static Keyword: Like static data members, static
            member functions are declared with the static keyword.
          </li>
        </ul>
        {/* <pre>
          <code>
            // Definition of the static member function void
            MyClass::staticFunction() &#123; // Implementation... &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`// Definition of the static member function
void MyClass::staticFunction() {
    // Implementation...
}`}
          </code>
        </pre>

        <ul>
          <li>
            Accessed Using the Class Name: Static member functions are accessed
            using the class name and the scope resolution operator (::).
          </li>
        </ul>
        {/* <pre>
          <code>MyClass::staticFunction();</code>
        </pre> */}
        <pre className="code-block">
          <code>{`MyClass::staticFunction();`}</code>
        </pre>

        <ul>
          <li>
            Cannot Access Non-Static Members: Static member functions cannot
            access non-static (instance) members directly. They can only access
            other static members.
          </li>
        </ul>
        <ul>
          <li>
            Useful for Utility Functions: Static member functions are often used
            for utility functions that are not tied to a specific instance&#39;s
            state.
          </li>
        </ul>
        <h6 id="example-10">Example:</h6>
        {/* <pre>
          <code>
            #include &lt;iostream&gt; class MathOperations &#123; public: static
            int add(int a, int b) &#123; return a + b; &#125; static double
            multiply(double x, double y) &#123; return x * y; &#125; static void
            printMessage() &#123; std::cout &lt;&lt; &quot;This is a static
            member function.&quot; &lt;&lt; std::endl; &#125; &#125;; int main()
            &#123; int sum = MathOperations::add(3, 4); std::cout &lt;&lt;
            &quot;Sum: &quot; &lt;&lt; sum &lt;&lt; std::endl; double product =
            MathOperations::multiply(2.5, 3.0); std::cout &lt;&lt;
            &quot;Product: &quot; &lt;&lt; product &lt;&lt; std::endl;
            MathOperations::printMessage(); return 0; &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`#include <iostream>

class MathOperations {
public:
    static int add(int a, int b) {
        return a + b;
    }

    static double multiply(double x, double y) {
        return x * y;
    }

    static void printMessage() {
        std::cout << "This is a static member function." << std::endl;
    }
};

int main() {
    int sum = MathOperations::add(3, 4);
    std::cout << "Sum: " << sum << std::endl;

    double product = MathOperations::multiply(2.5, 3.0);
    std::cout << "Product: " << product << std::endl;

    MathOperations::printMessage();

    return 0;
}`}
          </code>
        </pre>

        <h4 id="45-explain-the-role-of-the-const-keyword-in-c">
          45. Explain the role of the const keyword in C++.
        </h4>
        <p>
          In C++, the const keyword is used to declare a constant.It can be
          applied to variables, pointers, and member functions.The primary role
          of const is to indicate that the declared entity should not be
          modified after its initialization.
        </p>
        <p>
          <strong>Constant Variables:</strong> Here, myConstant is a constant
          variable, and its value cannot be changed once it has been assigned.
        </p>
        <pre>
          <code>const int myConstant = 10;</code>
        </pre>
        <p>
          <strong>Constant Pointers:</strong>
        </p>
        {/* <pre>
          <code>
            int regularVariable = 5; const int* ptr = &amp;regularVariable;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`int regularVariable = 5;
const int* ptr = &regularVariable;`}
          </code>
        </pre>

        <p>
          In this example, ptr is a pointer to a constant integer.This means
          that the integer it points to cannot be modified through the pointer.
        </p>
        {/* <pre>
          <code>
            int anotherVariable = 8; ptr = &amp;anotherVariable; // Valid,
            pointer can point to another variable //*ptr = 20; // Invalid,
            attempting to modify the value through the pointer is not allowed
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`int anotherVariable = 8;
ptr = &anotherVariable;  // Valid, pointer can point to another variable
//*ptr = 20;  // Invalid, attempting to modify the value through the pointer is not allowed`}
          </code>
        </pre>

        <p>
          <strong>Pointer to a Constant:</strong>
        </p>
        {/* <pre>
          <code>
            int variable = 42; int* const constantPtr = &amp;variable;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`int variable = 42;
int* const constantPtr = &variable;`}
          </code>
        </pre>

        <p>
          Here, constantPtr is a constant pointer to an integer.* The pointer
          itself cannot be reassigned to point to another variable, but the
          value it points to can be modified.
        </p>
        {/* <pre>
          <code>
            *constantPtr = 50; // Valid, modifying the value through the
            constant pointer //constantPtr = &amp;anotherVariable; // Invalid,
            attempting to reassign the constant pointer
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`*constantPtr = 50;  // Valid, modifying the value through the constant pointer
//constantPtr = &anotherVariable;  // Invalid, attempting to reassign the constant pointer`}
          </code>
        </pre>

        <p>
          <strong>Constant Member Functions: </strong> In the context of class
          member functions, const can be used to indicate that the function does
          not modify the state of the object.
        </p>

        {/* <pre>
          <code>
            class MyClass &#123; public: void regularFunction() &#123; // This
            function can modify the object&#39;s state &#125; void
            constFunction() const &#123; // This function cannot modify the
            object&#39;s state &#125; &#125;;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`class MyClass {
public:
    void regularFunction() {
        // This function can modify the object's state
    }
    void constFunction() const {
        // This function cannot modify the object's state
    }
};`}
          </code>
        </pre>

        <p>
          If an object is declared as const, only the member functions marked as
          const can be called on it.
        </p>
        {/* <pre>
          <code>
            const MyClass myObj; // myObj.regularFunction(); // Invalid,
            regularFunction cannot be called on a const object
            myObj.constFunction(); // Valid, constFunction can be called on a
            const object
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`const MyClass myObj;
// myObj.regularFunction();  // Invalid, regularFunction cannot be called on a const object
myObj.constFunction();     // Valid, constFunction can be called on a const object`}
          </code>
        </pre>

        <h4 id="46-what-is-the-difference-between-malloc-and-new-in-c">
          46. What is the difference between malloc() and new in C++?
        </h4>
        <table>
          <thead>
            <tr>
              <th align="left">malloc()</th>
              <th align="left">new</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="left">
                malloc() is a function from the C library, and it returns a
                void* (generic pointer).
              </td>
              <td align="left">
                new is an operator in C++, and it returns a pointer to the type
                of object being allocated.
              </td>
            </tr>
            <tr>
              <td align="left">
                malloc() only allocates memory and does not initialize the
                allocated memory. The content of the allocated memory is
                indeterminate.
              </td>
              <td align="left">
                new not only allocates memory but also calls the constructor for
                the object being created, initializing the memory.
              </td>
            </tr>
            <tr>
              <td align="left">
                In malloc(), the size of the memory block is specified in terms
                of the number of bytes.
              </td>
              <td align="left">
                In new, the size is specified in terms of the type of object
                being allocated.
              </td>
            </tr>
            <tr>
              <td align="left">
                Memory allocated with malloc() is deallocated using the free()
                function.
              </td>
              <td align="left">
                Memory allocated with new is deallocated using the delete
                operator for a single object or delete[] for an array.
              </td>
            </tr>
            <tr>
              <td align="left">
                malloc() is part of the C standard library, and it can be used
                in C++.
              </td>
              <td align="left">
                new is specific to C++ and provides additional features like
                initialization and type safety.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <h6 id="example-11">Example</h6>
        {/* <pre>
          <code>
            int *intPtr1 = (int*)malloc(sizeof(int)); // Memory is not
            initialized. int *intPtr2 = new int; // Memory is initialized to the
            default value for an int (zero in this case). int *intPtr3 =
            (int*)malloc(5 * sizeof(int)); // Allocates space for 5 integers.
            int *intPtr4 = new int[5]; // Allocates an array of 5 integers.
            free(intPtr1); delete intPtr2; // for a single object delete[]
            intPtr2; // for an array
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`int *intPtr1 = (int*)malloc(sizeof(int));   // Memory is not initialized
int *intPtr2 = new int; // Memory is not initialized
int *intPtr3 = (int*)malloc(5 * sizeof(int));  // Allocates space for 5 integers
int *intPtr4 = new int[5];                     // Allocates an array of 5 integers
free(intPtr1);
delete intPtr2;  // for a single object
delete[] intPtr4;// for an array`}
          </code>
        </pre>

        <h4 id="47-explain-the-difference-between-include-header-and-include-header-in-c">
          47. Explain the difference between #include &lt;header&gt; and
          #include &quot;header&quot; in C++.
        </h4>
        <p>
          In C++, the #include directive is used to include header files in your
          source code. There are two main forms of including header files, and
          they are distinguished by the use of angle brackets (&lt;&gt;) and
          double quotes (&quot;&quot;):
        </p>
        <p>
          <strong>#include &lt;header&gt; (Angle Brackets):</strong> This form
          is typically used for standard C++ library headers. The compiler
          searches for the header file in the standard system directories. Angle
          bracket inclusion is generally used for headers that are part of the
          C++ standard library or other system-wide libraries.
        </p>
        {/* <pre>
          <code>#include &lt;iostream&gt; #include &lt;vector&gt;</code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`#include <iostream>
#include <vector>`}
          </code>
        </pre>

        <p>
          <strong>#include &quot;header&quot; (Double Quotes):</strong> This
          form is typically used for user-defined or project-specific headers.
          The compiler searches for the header file in the current directory
          first and then in the specified or default include paths.Double quote
          inclusion is commonly used for headers that are part of your project
          or are located in directories relative to your source code.
        </p>
        {/* <pre>
          <code>
            #include &quot;myheader.h&quot; #include
            &quot;folder/myotherheader.h&quot;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`#include "myheader.h"
#include "folder/myotherheader.h"`}
          </code>
        </pre>

        <h4 id="48-what-is-the-difference-between-delete-and-delete-in-c">
          48. What is the difference between delete and delete[] in C++?
        </h4>
        <p>
          In C++, delete and delete[] are operators used for freeing memory that
          was allocated using new and new[], respectively. The key difference
          between them lies in how they deal with memory allocated for single
          objects versus arrays.
        </p>
        <p>
          <strong>delete Operator:</strong> It is used to free the memory
          allocated for a single object using new. It calls the destructor of
          the object (if the object is of a class type) and releases the memory
          associated with that single object.
        </p>
        {/* <pre>
          <code>
            MyClass* obj = new MyClass; // ... delete obj; // Frees the memory
            allocated for a single object
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`MyClass* obj = new MyClass;  // Dynamically allocate object

                                     // ...

delete obj;  // Frees the memory allocated for a single object`}
          </code>
        </pre>

        <p>
          <strong>delete[] Operator:</strong> It is used to free the memory
          allocated for an array of objects using new[].It calls the destructor
          for each element in the array (if the elements are of a class type)
          and releases the entire block of memory associated with the array.
        </p>
        {/* <pre>
          <code>
            MyClass* arrayObj = new MyClass[5]; // ... delete[] arrayObj; //
            Frees the memory allocated for an array of objects
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`MyClass* arrayObj = new MyClass[5];  // Dynamically allocate array of objects

                                         // ...

delete[] arrayObj;  // Frees the memory allocated for an array of objects`}
          </code>
        </pre>

        <h4 id="49--what-is-the-difference-between-const-char-and-char-const-in-c">
          49. What is the difference between const char* and char const* in C++?
        </h4>
        <p>
          In C++, const char* and char const* are functionally equivalent and
          represent a pointer to a constant character.Both are used to indicate
          that the character being pointed to is constant, and its value cannot
          be changed through the pointer.The difference lies in the syntactic
          arrangement, but the meaning remains the same.
        </p>
        {/* <pre>
          <code>
            const char* str1 = &quot;Hello&quot;; // Pointer to a constant
            character char const* str2 = &quot;World&quot;; // Equivalent to
            const char* // Attempting to modify the string will result in a
            compilation error // str1[0] = &#39;A&#39;; // Error: assignment of
            read-only location // str2[0] = &#39;A&#39;; // Error: assignment of
            read-only location
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`const char* str1 = "Hello";   // Pointer to a constant character
char const* str2 = "World";       // Equivalent to const char*
// Attempting to modify the string will result in a compilation error
// str1[0] = 'A';  // Error: assignment of read-only location
// str2[0] = 'A';  // Error: assignment of read-only location`}
          </code>
        </pre>

        <p>
          In this example, str1 and str2 are both pointers to constant
          characters. The strings they point to are string literals, which are
          immutable in C++. Trying to modify the characters through these
          pointers will result in a compilation error.
        </p>
        <h4 id="50-what-is-the-purpose-of-the-volatile-keyword-in-c">
          50. What is the purpose of the volatile keyword in C++?
        </h4>
        <p>
          In C++, the volatile keyword is used to indicate to the compiler that
          a variable can be changed unexpectedly by external factors that are
          not explicitly specified in the program.
        </p>
        <p>
          The purpose of volatile is to prevent the compiler from performing
          certain optimizations that might assume the variable&#39;s value
          remains unchanged between different points in the program.
        </p>
        <p>
          The volatile qualifier is commonly used in scenarios where a variable
          can be modified by hardware, an interrupt service routine, or another
          part of the program that is not apparent to the compiler during its
          normal analysis.
        </p>
        {/* <pre>
          <code>
            volatile int sensorValue; // Variable may be changed by hardware or
            an interrupt
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`volatile int sensorValue;  
// Variable may be changed by hardware or an interrupt`}
          </code>
        </pre>

        <h4 id="51-explain-what-is-the-use-of-int-main--in-c">
          51. Explain what is the use of int main () in C++?
        </h4>
        <p>
          In C++, int main() is the entry point of a C++ program. It is the
          function where program execution begins.The main function is mandatory
          in every C++ program, and it serves as the starting point for the
          program&#39;s execution.The program&#39;s execution begins with the
          first statement inside the main function and continues sequentially
          until the end of the function or until the program encounters a return
          statement.
        </p>
        {/* <pre>
          <code>
            int main() &#123; // Program logic goes here return 0; // Indicates
            successful program execution &#125;
          </code>
        </pre> */}
        <pre className="code-block">
          <code>
            {`int main() {
    // Program logic goes here
    return 0;  // Indicates successful program execution
}`}
          </code>
        </pre>

        <p>
          <strong>Return Type:</strong> The main function has an integer return
          type (int).The return value is used to indicate the exit status of the
          program to the operating system. By convention, a return value of 0
          indicates successful execution, while a non-zero value indicates an
          error.
        </p>
        <p>
          <strong>Arguments:</strong> The main function can be written in two
          forms:
        </p>
        <ul>
          <li>
            <p>
              int main(): Indicates that the program takes no command-line
              arguments.
            </p>
          </li>
          <li>
            <p>
              int main(int argc, char* argv[]): Indicates that the program can
              accept command-line arguments.
            </p>
          </li>
        </ul>
        <p>
          <strong>Execution Order:</strong> The statements inside the main
          function are executed sequentially, starting from the first statement
          and continuing until the end of the function.
        </p>
        <p>
          <strong>Return Statement:</strong> The return 0; statement at the end
          of the main function indicates successful program execution. A
          non-zero return value typically signifies an error condition.
        </p>
      </div>
    </div>
  );
};
