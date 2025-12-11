import "./JavaInterviewQues.css";
import "../../Interview_Section/InterviewQuestions/Main.css";

export const JavaInterviewQues = () => {
  return (
    <div class="main-container-interview-questions">
      <div>
        <p class="main-heading-q-a">Java Interview Questions and Answers</p>
        <div class="main-heading-interview-questions-answers">
          <img
            class="img-class-language-logo"
            src="../../../assets/java/java-logo-vector-1.svg"
          />
          <p>
            Java programs are platform-independent, meaning they can run on any
            device or operating system that has a Java Virtual Machine (JVM)
            installed.At its core, a Java program follows an object-oriented
            paradigm, allowing for the creation of modular and reusable code. It
            emphasizes concepts such as encapsulation, inheritance, and
            polymorphism, enabling developers to build complex systems with
            ease. Java programs are compiled into bytecode by the Java compiler,
            which is then executed by the JVM. This bytecode can be run on any
            platform with a compatible JVM, providing a high level of
            portability and flexibility. Furthermore, Java offers a rich set of
            libraries and frameworks that extend its capabilities, allowing
            developers to leverage existing solutions to expedite the
            development process. Additionally, Java's robust security features,
            such as sandboxing and automatic memory management, make it a
            popular choice for building secure and reliable applications.Java
            programs are versatile, platform-independent software solutions that
            leverage the object-oriented paradigm to provide modular, reusable,
            and secure code for a wide range of applications.
          </p>
        </div>
      </div>

       <div>
      <h4 id="1-what-is-java">1. What is java?</h4>
      <p>
        Java is a class-based, object-oriented programming language with minimal
        implementation dependencies.A general-purpose programming language, Java
        allows programmers to write once and run anywhere (WORA), meaning
        compiled Java code can execute on all Java-supported platforms without
        recompilation. Java applications are usually compiled to bytecode that
        works on any JVM, regardless of computer architecture.
      </p>
      <h4 id="2-explain-in-brief-the-history-of-java">
        2. Explain in brief the history of Java?
      </h4>
      <p>
        Java is a high-level, general-purpose programming language that was
        developed by James Gosling and his team at Sun Microsystems in the early
        1990s.
      </p>
      <ul>
        <li>
          <p>
            <strong>1991-1995:</strong> James Gosling and his team at Sun
            Microsystems develop a programming language called &quot;Oak,&quot;
            intended for consumer electronics. In 1995, Oak is officially
            released as Java 1.0, with a focus on platform independence.
          </p>
        </li>
        <li>
          <p>
            <strong>1998: </strong>Java 1.2 introduces the Java 2 platform,
            featuring significant enhancements, including the Swing GUI toolkit
            and the Collections Framework.
          </p>
        </li>
        <li>
          <p>
            <strong>Early 2000s:</strong> Java splits into three platforms: J2SE
            (Standard Edition) for desktop, J2EE (Enterprise Edition) for
            enterprise-level applications, and J2ME (Micro Edition) for mobile
            and embedded systems.
          </p>
        </li>
        <li>
          <p>
            <strong>2006:</strong> Sun Microsystems open-sources Java under the
            GNU General Public License (GPL), launching the OpenJDK initiative
            to encourage community involvement.
          </p>
        </li>
        <li>
          <p>
            <strong>2010:</strong> Oracle Corporation acquires Sun Microsystems,
            becoming the steward of Java.
          </p>
        </li>
        <li>
          <p>
            <strong>2014:</strong> Java SE 8 introduces major features like
            lambda expressions, the Stream API, and the java.time package.
          </p>
        </li>
        <li>
          <p>
            <strong>2017 Onwards:</strong> Java adopts a time-driven release
            model, with a new version every six months starting from Java SE 9.
            Notable releases include Java 9 (module system), Java 11 (Long-Term
            Support), and subsequent updates with new features and improvements.
          </p>
        </li>
      </ul>
      <h4 id="3-list-the-features-of-java-programming-language">
        3. List the features of Java programming language.
      </h4>
      <ul>
        <li>
          <p>
            Java is a language that is considered simple to learn. One
            fundamental notion of OOP Java must be understood. Java offers a
            secure feature that aids in the development of a virus-free and
            tamper-proof system for users.
          </p>
        </li>
        <li>
          <p>
            OOP is an abbreviation for Object-Oriented Programming language. OOP
            denotes that everything in Java is considered an object. Java is not
            compiled into a platform-specific machine; rather, it is compiled
            into platform-independent bytecode. The Virtual Machine that
            operates the platform interprets this code.
          </p>
        </li>
      </ul>

      <h4 id="4-what-is-the-difference-between-c-and-java">
        4. What is the difference between C and Java?
      </h4>
      <table>
        <thead>
          <tr>
            <th>C- Language</th>
            <th>Java</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              C language was developed by Dennis M. Ritchie in the year 1972.
            </td>
            <td>Java was developed by James Gosling in the year 1995.</td>
          </tr>
          <tr>
            <td>C is Procedural-Oriented</td>
            <td>Java is Object-Oriented</td>
          </tr>
          <tr>
            <td>Functions play a major role in the C language.</td>
            <td>Objects play a major role in the Java language.</td>
          </tr>
          <tr>
            <td>It is a middle-level language</td>
            <td>It is a high-level language.</td>
          </tr>
          <tr>
            <td>C language does not support OOPS Concepts.</td>
            <td>
              Java supports OOPS concepts, in which Inheritance the main
              property used for code reusability.
            </td>
          </tr>
          <tr>
            <td>In C, memory is allocated using Malloc</td>
            <td>In Java, memory is allocated using a new keyword.</td>
          </tr>
          <tr>
            <td>The threading concept is not supported by C</td>
            <td>Java supports Threading</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h4 id="5-explain-jdk-jre-and-jvm">5. Explain JDK, JRE and JVM?</h4>
      <table class="table">
        <thead>
          <tr>
            <th>JDK</th>
            <th>JRE</th>
            <th>JVM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>It stands for Java Development Kit.</td>
            <td>It stands for Java Runtime Environment.</td>
            <td>It stands for Java Virtual Machine.</td>
          </tr>
          <tr>
            <td>
              It is the tool necessary to compile, document and package Java
              programs.
            </td>
            <td>
              JRE refers to a runtime environment in which Java bytecode can be
              executed.
            </td>
            <td>
              It is an abstract machine. It is a specification that provides a
              run-time environment in which Java bytecode can be executed.
            </td>
          </tr>
          <tr>
            <td>It contains JRE + development tools.</td>
            <td>It’s an implementation of the JVM which physically exists.</td>
            <td>
              JVM follows three notations: Specification,
              <strong>Implementation, and Runtime Instance.</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <p><img src="../../../assets/java/jdk.png" alt="" class="img-cls" /></p>
      <h4 id="6-how-does-the-java-program-get-executed">
        6. How does the Java program get executed?
      </h4>
      <p>
        The execution of a Java program involves several steps, from writing the
        source code to the actual execution on the Java Virtual Machine (JVM).
      </p>
      <p><strong>Step 1: Write Java Source Code</strong></p>
      <p>
        The Java program is written in a high-level programming language. In
        this case, it&#39;s a simple program that prints &quot;Hello,
        World!&quot; to the console.
      </p>
      <p><strong>Step 2: Compile Java Source Code:</strong></p>
      <p>
        The javac compiler is used to compile the source code
        <strong>(HelloWorld.java)</strong> into bytecode. Bytecode is stored in
        a file with the .class extension <strong>(HelloWorld.class)</strong>.
      </p>
      <p><strong>Step 3: Execute on Java Virtual Machine (JVM):</strong></p>
      <p>
        The compiled bytecode (HelloWorld.class) is executed on the Java Virtual
        Machine. The JVM interprets the bytecode and translates it into machine
        code specific to the underlying hardware.The result is the execution of
        the Java program, and the output is displayed on the console.
      </p>
      <p>
        <img
          src="../../../assets/java/java-architecture.webp"
          alt=""
          class="img-cls"
        />
      </p>
      <h4 id="7-java-is-compiled-or-interpreted-programming-language">
        7. Java is compiled or interpreted programming language?
      </h4>
      <p>
        Java is often described as a &quot;compiled and interpreted&quot;
        programming language. This is because the Java programming language
        follows a two-step process: compilation and interpretation.
      </p>
      <p><strong>Compilation:</strong></p>
      <p>
        Java source code is initially compiled by the Java Compiler (javac) into
        an intermediate form called bytecode. Bytecode is a platform-independent
        representation of the program, and it is not specific to any particular
        hardware or operating system.
      </p>
      <p><strong>Interpretation:</strong></p>
      <p>
        The compiled bytecode is then interpreted and executed by the Java
        Virtual Machine (JVM). The JVM is a software-based emulator that
        provides a runtime environment for Java programs.The JVM translates the
        bytecode into machine code specific to the host machine using a
        Just-In-Time (JIT) compiler or other runtime techniques.The translated
        machine code is executed by the underlying hardware.
      </p>
      <h4 id="8-why-java-is-not-100-object-oriented">
        8. Why Java is not 100% Object-oriented?
      </h4>
      <p>
        Java is not 100% Object-oriented because it makes use of eight primitive
        data types such as boolean, byte, char, int, float, double, long, short
        which are not objects.
      </p>
      <h4 id="9-how-to-write-a-basic-hello-world-program-in-java">
        9. How to write a basic Hello World program in Java?
      </h4>
      <h6 id="program">Program:</h6>
      <pre><code>class HelloWorld&#123;
  public static void main(String args[]) &#123;
  System.out.println(&quot;Hello World&quot;);
 &#125;
&#125;
</code></pre>
      <h6 id="output">Output:</h6>
      <p>
        <img
          src="../../../assets/java/HelloWorldOutput.png"
          alt=""
          class="img-cls"
        />
      </p>
      <h4 id="10-define-the-jit-compiler-in-java">
        10. Define the JIT compiler in Java?
      </h4>
      <p>
        Just In Time Compiler is the component of JRE, which is used to compile
        the bytecodes of the particular method into the native machine code.
        This compiled code of the method is directly called by JVM without
        interpreting it.
      </p>
      <h4 id="11-define-variables-in-java-and-explain-with-example">
        11. Define variables in Java and explain with example?
      </h4>
      <p>
        In Java, variables are containers that store data values. Each variable
        must be declared with a data type, and it can hold a specific type of
        data.
      </p>
      <h6 id="syntax">Syntax:</h6>
      <p><code>datatype variableName;</code></p>
      <h6 id="example">Example:</h6>
      <pre><code>// Integer variable
int age;

// Double variable
double salary;

// String variable
String name;

// Boolean variable
boolean isStudent;
</code></pre>
      <h6 id="initialization">Initialization:</h6>
      <p>
        Variables can be initialized (given an initial value) at the time of
        declaration or later in the code:
      </p>
      <h6 id="example-1">Example:</h6>
      <pre><code>// Declare and initialize
int numberOfBooks = 10;

// Later initialization
double pi;
pi = 3.14159;

// Initializing with a string
String greeting = &quot;Hello, World!&quot;;
</code></pre>
      <h4 id="12-what-are-the-different-types-of-variables-in-java">
        12. What are the different types of variables in Java?
      </h4>
      <p><strong>Local Variables:</strong></p>
      <p>
        Declared inside a method or a block. Must be initialized before use.
      </p>
      <h6 id="example-2">Example:</h6>
      <pre><code>void exampleMethod() &#123;
  int x; // Local variable
  x = 5; // Initialization
  // ...
&#125;
</code></pre>
      <p><strong>Instance Variables (Object Variables):</strong></p>
      <p>
        Declared inside a class but outside of any method or block. Each
        instance of the class has its own copy of these variables.
      </p>
      <h6 id="example-3">Example:</h6>
      <pre><code>public class MyClass &#123;
    int age; // Instance variable
    String name; // Instance variable
&#125;
</code></pre>
      <p><strong>Class Variables (Static Variables):</strong></p>
      <p>
        Declared with the static keyword. Shared among all instances of a class.
      </p>
      <h6 id="example-4">Example:</h6>
      <pre><code>public class MyClass &#123;
    static int count; // Class variable
  &#125;
</code></pre>
      <h6 id="common-example">Common Example:</h6>
      <pre><code>class Example&#123;  
  int num=30;//instance variable  
  static char name=&quot;Thamizh&quot;;//static variable  
  void method()&#123;  
    int n=90;//local variable  
  &#125;  
&#125;//end of class 
</code></pre>
      <h4 id="13-what-is-data-types-in-java">
        13. What is data types in java?
      </h4>
      <p>
        In Java, a data type is a classification that specifies which type of
        value a variable can hold.Java is a statically-typed language, meaning
        that you must declare the data type of a variable before you can use
        it.Java has two categories of data types:
      </p>
      <ul>
        <li>
          <p>primitive data types</p>
        </li>
        <li>
          <p>reference data types</p>
        </li>
      </ul>

      {/* <!-- 14 --> */}
      <h4 id="14-what-is-primitive-datatype-in-java-and-its-types">
        14. what is Primitive Datatype in Java and its types?
      </h4>
      <p>
        In Java, primitive data types are the most basic data types that
        directly operate upon the machine instructions.They are not objects and
        do not have methods.There are eight primitive data types in Java, and
        they are categorized into four groups: integer, floating-point,
        character, and boolean.
      </p>
      <p><strong>Integer Data Types:</strong></p>
      <p>
        byte: <strong>Size:</strong> 8 bits <strong>Range:</strong> -128 to 127
      </p>
      <p>
        short: <strong>Size:</strong> 16 bits <strong>Range:</strong> -32,768 to
        32,767
      </p>
      <p>
        int: <strong>Size:</strong> 32 bits <strong>Range:</strong> -2^31 to
        2^31 - 1
      </p>
      <p>
        long: <strong>Size:</strong> 64 bits <strong>Range:</strong> -2^63 to
        2^63 - 1
      </p>
      <h6 id="example">Example:</h6>
      <pre><code>byte age = 25;
short distance = 10000;
int population = 2000000;
long totalStars = 123456789012345L; // Note the &#39;L&#39; at the end to denote a long literal</code></pre>
      <p><strong>Floating-Point Data Types:</strong></p>
      <p>
        float: <strong>Size:</strong> 32 bits
        <strong>Range:</strong> Approximately ±3.4E38
        <strong>Suffix:</strong> &#39;f&#39; or &#39;F&#39;
      </p>
      <p>
        double: <strong>Size:</strong> 64 bits
        <strong>Range:</strong> Approximately ±1.7E308
        <strong>Suffix:</strong> &#39;d&#39; or &#39;D&#39; (optional)
      </p>
      <h6 id="example-1">Example:</h6>
      <pre><code>float salary = 50000.50f; // Note the &#39;f&#39; at the end to denote a float literal
double pi = 3.14159; // The &#39;d&#39; at the end is optional for double literals</code></pre>
      <p><strong>Character Data Type:</strong></p>
      <p>
        char: <strong>Size:</strong> 16 bits, Represents a single Unicode
        character.
      </p>
      <h6 id="example-2">Example</h6>
      <pre><code>char grade = &#39;A&#39;;
char symbol = &#39;\u20AC&#39;; // Unicode representation of the Euro symbol</code></pre>
      <p><strong>Boolean Data Type:</strong></p>
      <p>boolean: Represents true or false values.</p>
      <h6 id="example-3">Example</h6>
      <pre><code>boolean isJavaFun = true;
boolean isFishTasty = false;</code></pre>

      {/* <!-- 15 --> */}
      <h4 id="15-what-is-reference-data-type-in-java-and-its-types">
        15. What is reference Data Type in java and its types?
      </h4>
      <p>
        In Java, reference data types are used to store memory addresses or
        references to objects. Unlike primitive data types that store values
        directly, reference data types store references or addresses of the
        memory locations where objects are stored.Reference data types are
        sometimes called &quot;objects&quot; because they refer to instances of
        classes or arrays.
      </p>
      <ul>
        <li>Classes</li>
        <li>Interfaces</li>
        <li>Arrays</li>
        <li>Enums</li>
        <li>Strings</li>
        <li>Other Reference Types</li>
      </ul>
      <p>
        <strong>Classes:</strong> In Java, a class is a blueprint for creating
        objects.When you create an instance (object) of a class, you are
        creating a reference to that object.Objects created from classes can
        have both primitive and reference data types as their member variables.
      </p>
      <h6 id="example-9">Example:</h6>
      <pre><code>class Person &#123;
    String name;
    int age;
&#125;

// Creating an instance of the Person class
Person person1 = new Person();
person1.name = &quot;John&quot;;
person1.age = 25;
</code></pre>
      <p>
        <strong>Interfaces:</strong> Interfaces in Java define a contract for
        classes that implement them.An interface reference can be used to refer
        to objects of classes that implement the interface.
      </p>
      <h6 id="example-10">Example:</h6>
      <pre><code>interface Drawable &#123;
    void draw();
&#125;

class Circle implements Drawable &#123;
    public void draw() &#123;
        System.out.println(&quot;Drawing a circle&quot;);
    &#125;
&#125;

// Using an interface reference
Drawable shape = new Circle();
shape.draw();
</code></pre>
      <p>
        <strong>Arrays:</strong> Arrays are reference data types in Java. An
        array is a collection of elements of the same type.The array variable
        stores a reference to the memory location where the array is stored.
      </p>
      <h6 id="example-11">Example:</h6>
      <pre><code>int[] numbers = &#123;1, 2, 3, 4, 5&#125;;
</code></pre>
      <p>
        <strong>Enums:</strong> Enums (enumerations) in Java are reference data
        types that represent a fixed set of constants.
      </p>
      <h6 id="example-12">Example:</h6>
      <pre><code>enum Day &#123;
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
&#125;

Day today = Day.MONDAY;
</code></pre>
      <p>
        <strong>Strings:</strong> Strings in Java are a special type of
        reference data type. Although they are often used like primitive data
        types, they are implemented as objects of the String class.
      </p>
      <h6 id="example-13">Example:</h6>
      <p><code>String greeting = &quot;Hello, World!&quot;;</code></p>
      <p>
        <strong>Other Reference Types:</strong> Other reference types include
        custom classes that you create, and any user-defined objects or
        instances of classes.
      </p>
      <h6 id="example-14">Example:</h6>
      <pre><code>class Car &#123;
    String model;
    int year;
&#125;

  Car myCar = new Car();
  myCar.model = &quot;Toyota&quot;;
  myCar.year = 2022;</code></pre>
      <h4 id="16-what-is-typecasting-in-java">
        16. What is Typecasting in java?
      </h4>
      <p>
        Typecasting in Java refers to the process of converting a variable from
        one data type to another.Java has two types of casting:
      </p>
      <ul>
        <li>Implicit (automatic) casting</li>
        <li>Explicit (manual) casting.</li>
      </ul>
      <p>
        <strong>Implicit (Automatic) Casting:</strong> Implicit casting happens
        automatically when a smaller data type is promoted to a larger data
        type. It is also known as widening or automatic type conversion. In
        implicit casting, there is no loss of data because the destination type
        can represent a larger range of values.
      </p>
      <h6 id="example-15">Example:</h6>
      <pre><code>int intValue = 42;
long longValue = intValue; // Implicit casting from int to long
</code></pre>
      <p>
        <strong>Explicit (Manual) Casting:</strong> Explicit casting is required
        when a larger data type is demoted to a smaller data type. It is also
        known as narrowing or manual type conversion.Explicit casting requires
        the use of parentheses and can result in a loss of data if the value is
        too large to be represented by the destination type.
      </p>
      <h6 id="example-16">Example:</h6>
      <pre><code>double doubleValue = 123.456;
int intValue = (int) doubleValue; // Explicit casting from double to int
</code></pre>
      <h4 id="17-what-are-operators-in-java">
        17. What are operators in Java?
      </h4>
      <p>
        In Java, operators are symbols that perform operations on operands.
        Operands can be variables, literals, method calls, or expressions. Java
        supports a wide range of operators, which can be categorized into
        several types:
      </p>
      <ul>
        <li>Arithmetic Operators</li>
        <li>Relational Operators</li>
        <li>Logical Operators</li>
        <li>Assignment Operators</li>
        <li>Increment and Decrement Operators</li>
        <li>Conditional (Ternary) Operator</li>
        <li>Bitwise Operators</li>
      </ul>
      <h4 id="18-what-is-the-difference-between--and-equals-in-java">
        18. What is the difference between == and .equals() in Java?
      </h4>
      <p>
        In Java, == and .equals() serve different purposes when it comes to
        comparing objects.
      </p>
      <p><strong>&#39;==&#39; Operator:</strong></p>
      <p>
        The == operator is used to compare primitive data types and objects&#39;
        references.When used with primitive types (int, char, etc.), it checks
        if the values are equal.When used with objects, it checks whether the
        references point to the same memory location, not whether the contents
        of the objects are the same.
      </p>
      <h6 id="example-with-primitive-types">Example with primitive types:</h6>
      <pre><code>  int a = 5;
  int b = 5;
  System.out.println(a == b);  // true
</code></pre>
      <h6 id="example-with-objects">Example with objects:</h6>
      <pre><code>String str1 = new String(&quot;Hello&quot;);
String str2 = new String(&quot;Hello&quot;);
System.out.println(str1 == str2);  // false, as they are different objects in memory
</code></pre>
      <p><strong>.equals() Method:</strong></p>
      <p>
        The .equals() method is a method provided by the Object class and is
        meant to be overridden by classes that wish to provide their own
        definition of equality.By default, the .equals() method in the Object
        class compares object references, similar to the == operator.Many
        classes override the .equals() method to compare the content of objects
        rather than their references.
      </p>
      <h6 id="example-with-string-class">Example with String class:</h6>
      <pre><code>String str1 = new String(&quot;Hello&quot;);
String str2 = new String(&quot;Hello&quot;);
System.out.println(str1.equals(str2));  // true, as the contents are the same
</code></pre>
      <h4 id="19-what-is-the-difference-between-a-and-a-increment-operators">
        19. What is the difference between ++a and a++ increment operators?
      </h4>
      <p>
        <strong>++a (Pre-increment):</strong> The ++a is a pre-increment
        operator.It increments the value of the variable &#39;a&#39; before its
        current value is used in an expression.
      </p>
      <h6 id="example-17">Example:</h6>
      <pre><code>int a = 5;
int b = ++a;
// After this, &#39;a&#39; becomes 6, and &#39;b&#39; also becomes 6
</code></pre>
      <p>
        <strong>a++ (Post-increment):</strong> The a++ is a post-increment
        operator.It increments the value of the variable &#39;a&#39;, but the
        original value (before incrementing) is used in the expression where the
        increment operation is applied.
      </p>
      <h6 id="example-18">Example:</h6>
      <pre><code>int a = 5;
int b = a++;
// After this, &#39;a&#39; becomes 6, but &#39;b&#39; becomes 5
</code></pre>
      <h4 id="20-what-is-a-ternary-operator-in-java">
        20. What is a ternary operator in java?
      </h4>
      <p>
        The ternary operator, also known as the conditional operator, is a
        shorthand way of writing an if-else statement in a single line.It is
        unique in that it takes three operands and is the only operator in Java
        that does so.The general syntax of the ternary operator is:
      </p>
      <p><code>condition ? expression_if_true : expression_if_false;</code></p>
      <h6 id="example-19">Example:</h6>
      <pre><code>    int x = 5;
    int y = (x &gt; 0) ? 10 : 20;
</code></pre>
      <h4 id="21-define-the-method-in-java">21. Define the method in Java?</h4>
      <p>
        In Java, a method is a block of code that performs a specific task or
        set of tasks and is defined within a class. Methods are one of the
        primary building blocks of Java programs, allowing you to organize code,
        promote code reuse, and encapsulate functionality.
      </p>
      <h6 id="basic-syntax-for-defining-a-method-in-java">
        Basic syntax for defining a method in Java:
      </h6>
      <pre><code>returnType methodName(parameter1Type parameter1Name, parameter2Type parameter2Name, ...) &#123;
    // Method body or code block
    // Perform tasks and computations
    // Optionally return a value using the &#39;return&#39; keyword
&#125;
</code></pre>
      <p>
        <strong>returnType</strong>: Specifies the data type of the value that
        the method returns. If the method does not return any value, use the
        keyword void.
      </p>
      <p>
        <strong>methodName</strong>: The name of the method, which is used to
        invoke or call the method.
      </p>
      <p>
        <strong
          >parameter1Type parameter1Name, parameter2Type parameter2Name,
          ...</strong
        >: Parameters (if any) that the method accepts. Each parameter consists
        of a data type and a name.
      </p>
      <p>
        <strong>&#123; ... &#125;</strong>: The method body, enclosed within
        curly braces, contains the actual code that defines what the method
        does.
      </p>
      <h6 id="example-20">Example:</h6>
      <pre><code>public class MathOperations &#123;
    // Method without parameters and without a return value (void)
    public void sayHello() &#123;
        System.out.println(&quot;Hello, World!&quot;);
    &#125;

    // Method with parameters and a return value
    public int add(int num1, int num2) &#123;
        return num1 + num2;
    &#125;

    // Method without parameters and with a return value
    public double getRandomNumber() &#123;
        return Math.random();
    &#125;
&#125;
</code></pre>
      <h4 id="22-what-is-meant-by-the-term-oops">
        22. What is meant by the term OOPs?
      </h4>
      <p>
        Object-Oriented Programming(OOPs) is a type of programming that is based
        on objects rather than just functions and procedures. Individual objects
        are grouped into classes. OOPs implements real-world entities like
        inheritance, polymorphism, hiding, etc into programming. It also allows
        binding data and code together.
      </p>
      <h4 id="23-why-use-oops">23. Why use OOPs?</h4>
      <p>
        OOPs allows clarity in programming thereby allowing simplicity in
        solving complex problems. Code can be reused through inheritance thereby
        reducing redundancy.Data and code are bound together by
        encapsulation.OOPs allows data hiding, therefore, private data is kept
        confidential. Problems can be divided into different parts making it
        simple to solve. The concept of polymorphism gives flexibility to the
        program by allowing the entities to have multiple forms
      </p>
      <h4 id="24-what-are-the-main-features-of-oops">
        24. What are the main features of OOPs?
      </h4>
      <p>
        <strong>Objects and Classes:</strong> Programming is organized around
        objects, which are instances of classes. Classes define the properties
        and behaviors that objects will have.
      </p>
      <p>
        <strong>Encapsulation:</strong> Bundling of data (attributes) and
        methods that operate on the data into a single unit
        (class).Encapsulation hides the internal details and provides controlled
        access through well-defined interfaces.
      </p>
      <p>
        <strong>Inheritance:</strong> Enables a class (subclass) to inherit
        properties and behaviors from another class (superclass).Promotes code
        reuse and the creation of a hierarchy of classes.
      </p>
      <p>
        <strong>Polymorphism:</strong> Allows objects of different types to be
        treated as objects of a common type.Can manifest as method overloading
        (compile-time polymorphism) and method overriding (runtime
        polymorphism).
      </p>
      <p>
        <strong>Abstraction:</strong> Simplification of complex systems by
        modeling classes based on essential properties and behaviors.Involves
        ignoring irrelevant details and focusing on what is necessary.
      </p>
      <h4 id="25-what-is-class-in-java">25. What is class in java?</h4>
      <p>
        In Java, a class is a blueprint or template for creating objects. It
        defines the properties (attributes) and behaviors (methods) that objects
        of that class will have.
      </p>
      <h6 id="example-21">Example:</h6>
      <pre><code>// Define a simple class named &#39;Car&#39;
    public class Car &#123;
    // Attributes (data members)
    String make;
    String model;
    int year;

    // Constructor (initialize attributes when an object is created)
    public Car(String make, String model, int year) &#123;
        this.make = make;
        this.model = model;
        this.year = year;
    &#125;

    // Method to display information about the car
    public void displayInfo() &#123;
        System.out.println(&quot;Make: &quot; + make);
        System.out.println(&quot;Model: &quot; + model);
        System.out.println(&quot;Year: &quot; + year);
    &#125;

    // Method to start the car
    public void start() &#123;
        System.out.println(&quot;The car is starting.&quot;);
    &#125;
&#125;

    // Usage of the &#39;Car&#39; class in another file or the same file
    public class CarExample &#123;
        public static void main(String[] args) &#123;
        // Create an object of the &#39;Car&#39; class
        Car myCar = new Car(&quot;Toyota&quot;, &quot;Camry&quot;, 2022);

        // Access attributes and call methods using the object
        myCar.displayInfo();
        myCar.start();
    &#125;
&#125;
</code></pre>
      <h4 id="26--what-is-an-object">26. What is an object?</h4>
      <p>
        In Java, an object is an instance of a class. A class is a blueprint or
        template that defines the attributes and behaviors common to all objects
        of that type. Objects are created based on these class definitions, and
        they represent real-world entities or concepts in a program.The general
        syntax for creating an object
      </p>
      <p><code>ClassName objectName = new ClassName();</code></p>
      <h6 id="example-22">Example:</h6>
      <pre><code>// Create an object of the &#39;Car&#39; class
Car myCar = new Car(&quot;Toyota&quot;, &quot;Camry&quot;, 2022);</code></pre>
      <h4 id="27-what-is-the-difference-between-a-class-and-an-object">
        27. What is the difference between a class and an object?
      </h4>
      <table>
        <thead>
          <tr>
            <th>Object</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A real-world entity which is an instance of a class</td>
            <td>
              A class is basically a template or a blueprint within which
              objects can be created
            </td>
          </tr>
          <tr>
            <td>An object acts like a variable of the class</td>
            <td>Binds methods and data together into a single unit</td>
          </tr>
          <tr>
            <td>An object is a physical entity</td>
            <td>A class is a logical entity</td>
          </tr>
          <tr>
            <td>Objects take memory space when they are created</td>
            <td>A class does not take memory space when created</td>
          </tr>
          <tr>
            <td>Objects can be declared as and when required</td>
            <td>Classes are declared just once</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h4 id="28-define-constructor-in-java">
        28. Define Constructor in Java?
      </h4>
      <p>
        A constructor is a special type of method with a block of code to
        initialize the state of an object. A constructor is called only when the
        instance of the object is created. Every time in Java object is created
        using the new keyword and by default, the constructor is called.
      </p>
      <h4
        id="29-what-all-the-rules-must-be-followed-while-creating-a-constructor-in-java"
      >
        29. What all the rules must be followed while creating a constructor in
        Java?
      </h4>
      <p>
        The constructor must have the same name as the class.It cannot have a
        return type, not even &#39;void&#39;. Constructors can take parameters,
        and you can have multiple constructors with different parameter lists
        (overloading). Parameters are used to initialize the attributes of the
        object being created. Constructors can have access modifiers like
        public, private, protected, or package-private (default).In Java, a
        constructor cannot be synchronized, abstract, final, and static.
      </p>
      <h4
        id="30-what-are-the-different-types-of-constructors-available-in-java"
      >
        30. What are the different types of constructors available in Java?
      </h4>
      <p>There are two constructors in Java, and they are:</p>
      <p>
        <strong>Default constructor:</strong> It is also called a no-argument
        constructor and it is mainly used to initialize the instance variable
        with the default value. Moreover, it is also used to perform some useful
        tasks on object creation.This default constructor is implicitly invoked
        by the compiler if there is no constructor for a particular class.
      </p>
      <h6 id="example-23">Example:</h6>
      <pre><code>  class MyClass&#123; 

  //creating a default constructor  
  MyClass()&#123;
    System.out.println(&quot;Welcome to Java&quot;);
  &#125; 
   
  //main method  
  public static void main(String args[])&#123;  
    //calling a default constructor  
    MyClass c=new MyClass();  
  &#125;  
&#125; 
</code></pre>
      <h6 id="output-1">Output:</h6>
      <p><img src="../../../assets/java/myClassOutput.png" alt="" /></p>
      <p>
        <strong>Parameterized constructor: </strong> A parameterized constructor
        is one type of constructor which is mainly used to initialize the
        instance variables with the given values.In simple words, the
        constructor that accepts arguments is called a parameterized
        constructor.
      </p>
      <h6 id="example-24">Example:</h6>
      <pre><code>public class Training &#123;
     int id;  
        String name;  
        //creating a parameterized constructor  
        Training(int i,String n)&#123;  
       id = i;  
        name = n;  
        &#125;  
        //method to display the values  
        void display()
    &#123;
    System.out.println(id+&quot; &quot;+name);
    &#125;     
    public static void main(String args[])&#123;  
    //creating objects and passing values  
    Training t1 = new Training(111,&quot;DevOps&quot;);  
     //calling method to display the values of object  
      t1.display();  
        
       &#125;  
&#125;
</code></pre>
      <h6 id="output-2">Output:</h6>
      <p><img src="../../../assets/java/TrainingOutput.png" alt="" /></p>
      <h4 id="31-difference-between-constructor-and-method">
        31. Difference between constructor and method?
      </h4>
      <table>
        <thead>
          <tr>
            <th>Constructor</th>
            <th>Method</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The constructor should have the same name as the class name</td>
            <td>The method name is not the same as that of the class name</td>
          </tr>
          <tr>
            <td>A constructor has no return type</td>
            <td>The method must have a return type</td>
          </tr>
          <tr>
            <td>It can be invoked implicitly</td>
            <td>It can be invoked explicitly</td>
          </tr>
          <tr>
            <td>
              The constructor is used to initialize the state of the object
            </td>
            <td>A method is used to expose the behavior of an object</td>
          </tr>
          <tr>
            <td>Default constructor can be provided by the compiler</td>
            <td>The default method is not provided by the Java compiler</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h4 id="32-what-is-the-purpose-of-a-default-constructor-in-java">
        32. What is the purpose of a Default constructor in Java?
      </h4>
      <p>
        If no constructor is available in the class, the java compiler creates a
        default constructor and assigns the default value to the instance
        variables.
      </p>
      <h6 id="example-25">Example:</h6>
      <pre><code>import java.util.*;
class A
&#123;
    String name;
    int id;
    void display()
    &#123;
        System.out.println(&quot;Name: &quot;+this.name);
        System.out.println(&quot;Id: &quot;+this.id);
    &#125;
    
&#125;
public class B
&#123;
    public static void main(String args[])
    &#123;
        A object=new A();
        System.out.println(&quot;The values of the instance variables are:&quot;);
        System.out.println(&quot;Name: &quot;+object.name);
        System.out.println(&quot;Name: &quot;+object.id);
    &#125;
&#125;
</code></pre>
      <h6 id="output-3">Output:</h6>
      <p>
        <img
          src="../../../assets/java/BClassOutput.png"
          alt=""
          class="img-cls"
        />
      </p>
      <h4 id="33-what-is-the-use-of-this-keyword-in-java">
        33. What is the use of &#39;this&#39; keyword in java?
      </h4>
      <p>
        In Java, the &quot;this&quot; keyword is a reference variable that is
        used to refer to the current object within an instance method or a
        constructor.It is primarily used to differentiate instance variables
        from local variables when they have the same name, and it can also be
        used to invoke the current object&#39;s methods.
      </p>
      <h6 id="example-26">Example:</h6>
      <pre><code>public class MyClass &#123;
    private int myValue; // Instance variable

    public void setMyValue(int myValue) &#123;
        // Using &#39;this&#39; to refer to the instance variable
        this.myValue = myValue;
    &#125;
&#125;
</code></pre>
      <h4 id="34-why-is-the-main-method-static-in-java">
        34. Why is the main method static in Java?
      </h4>
      <p>
        The main method is static in Java because to call the static methods,
        there is no need for the object.The Java Virtual Machine(JVM) has to
        create an object to call the non-static main() method, which will result
        in extra memory allocation.
      </p>
      <h4 id="35-what-is-inheritance">35. What is inheritance?</h4>
      <p>
        Inheritance is a feature of OOPs which allows classes inherit common
        properties from other classes.For example, if there is a class such as
        ‘vehicle’, other classes like ‘car’, ‘bike’, etc can inherit common
        properties from the vehicle class.This property helps you get rid of
        redundant code thereby reducing the overall size of the code.
      </p>
      <h4 id="36-what-are-the-different-types-of-inheritance">
        36. What are the different types of inheritance?
      </h4>
      <ul>
        <li>Single inheritance</li>
        <li>Multiple inheritance</li>
        <li>Multilevel inheritance</li>
        <li>Hierarchical inheritance</li>
        <li>Hybrid inheritance</li>
      </ul>
      <h4
        id="37-what-is-the-difference-between-multiple-and-multilevel-inheritance"
      >
        37. What is the difference between multiple and multilevel inheritance?
      </h4>
      <table>
        <thead>
          <tr>
            <th>Multiple Inheritance</th>
            <th>Multilevel Inheritance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Multiple inheritance comes into picture when a class inherits more
              than one base class
            </td>
            <td>
              Multilevel inheritance means a class inherits from another class
              which itself is a subclass of some other base class
            </td>
          </tr>
          <tr>
            <td>
              Example: A class defining a child inherits from two base classes
              Mother and Father
            </td>
            <td>
              Example: A class describing a sports car will inherit from a base
              class Car which inturn inherits another class Vehicle
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <h4 id="38-what-are-the-limitations-of-inheritance">
        38. What are the limitations of inheritance?
      </h4>
      <p>
        Increases the time and effort required to execute a program as it
        requires jumping back and forth between different classes.The parent
        class and the child class get tightly coupled.Any modifications to the
        program would require changes both in the parent as well as the child
        class.Needs careful implementation else would lead to incorrect results.
      </p>
      <h4 id="39-what-is-a-superclass">39. What is a superclass?</h4>
      <p>
        A superclass or base class is a class that acts as a parent to some
        other class or classes. For example, the Vehicle class is a superclass
        of class Car.
      </p>
      <h4 id="40-what-is-a-subclass">40. What is a subclass?</h4>
      <p>
        A class that inherits from another class is called the subclass. For
        example, the class Car is a subclass or a derived of Vehicle class.
      </p>
      <h4 id="41-what-is-polymorphism">41. What is polymorphism?</h4>
      <p>
        Polymorphism refers to the ability to exist in multiple forms.Multiple
        definitions can be given to a single interface. For example, if you have
        a class named Vehicle, it can have a method named speed but you cannot
        define it because different vehicles have different speed.This method
        will be defined in the subclasses with different definitions for
        different vehicles.
      </p>
      <h4 id="42-what-is-method-overloading">
        42. What is method overloading?
      </h4>
      <p>
        Method overloading is a feature of OOPs which makes it possible to give
        the same name to more than one methods within a class if the arguments
        passed differ.
      </p>
      <h4 id="43-what-is-method-overriding">43. What is method overriding?</h4>
      <p>
        Method overriding is a feature of OOPs by which the child class or the
        subclass can redefine methods present in the base class or parent
        class.Here, the method that is overridden has the same name as well as
        the signature meaning the arguments passed and the return type.
      </p>
      <h4 id="44-differentiate-between-overloading-and-overriding">
        44. Differentiate between overloading and overriding.
      </h4>
      <table>
        <thead>
          <tr>
            <th>Overloading</th>
            <th>Overriding</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Two or more methods having the same name but different parameters
              or signature
            </td>
            <td>
              Child class redefining methods present in the base class with the
              same parameters/ signature
            </td>
          </tr>
          <tr>
            <td>Resolved during compile-time</td>
            <td>Resolved during runtime</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h4 id="45-what-is-static-keyword-in-java">
        45. What is static keyword in java?
      </h4>
      <p>
        In Java, the static keyword is used to define a member (variable or
        method) that belongs to the class rather than an instance of the class.
        When a member is declared as static, it means there is only one copy of
        that member shared by all instances of the class, rather than each
        instance having its own copy.
      </p>
      <p>
        <strong>Static Variables (Class Variables):</strong> A static variable
        is a class-level variable that is shared among all instances of the
        class.It is declared using the static keyword and is typically used for
        constants or properties that should be common to all instances.Static
        variables are accessed using the class name, not through an instance of
        the class.
      </p>
      <p>
        <strong>Static Methods:</strong> A static method is a method that
        belongs to the class rather than an instance of the class.It can be
        called using the class name without creating an instance of the
        class.Static methods cannot access instance-specific variables or
        methods directly, as they are not associated with a particular instance.
      </p>
      <p>
        <strong>Static Block:</strong> A static block is a block of code
        enclosed in curly braces &#123;&#125; that is executed when the class is
        loaded into the Java Virtual Machine (JVM).It is used to initialize
        static variables or perform other static initialization tasks.
      </p>
      <p>
        <strong>Static Nested Classes:</strong> A static nested class is a class
        that is defined within another class and marked as static.It is
        associated with the outer class, not with any specific instance, and can
        be instantiated without creating an instance of the outer class.
      </p>
      <h6 id="static-variables-example">Static Variables Example:</h6>
      <pre><code>public class MyClass &#123;
  static int count;  // Static variable

  // Other members...

  public static void main(String[] args) &#123;
    MyClass.count = 10;  // Accessing static variable
  &#125;
&#125;</code></pre>
      <h6 id="static-methods-example">Static Methods Example:</h6>
      <pre><code>public class MyClass &#123;
  static void staticMethod() &#123;
    System.out.println(&quot;This is a static method.&quot;);
  &#125;

  // Other members...

  public static void main(String[] args) &#123;
    MyClass.staticMethod();  // Calling static method
  &#125;
&#125;</code></pre>
      <h6 id="static-block-example">Static Block Example:</h6>
      <pre><code>public class MyClass &#123;
  static &#123;
    // Static block
      System.out.println(&quot;This is a static block.&quot;);
    &#125;

    // Other members...

  public static void main(String[] args) &#123;
    // Main method
  &#125;
&#125;
</code></pre>
      <h6 id="static-nested-classes-example">Static Nested Classes Example:</h6>
      <pre><code>public class OuterClass &#123;
    static class StaticNestedClass &#123;
        // Static nested class
    &#125;
&#125;
</code></pre>
      <h4 id="46-what-is-encapsulation">46. What is encapsulation?</h4>
      <p>
        Encapsulation refers to binding the data and the code that works on that
        together in a single unit. For example, a class. Encapsulation also
        allows data-hiding as the data specified in one class is hidden from
        other classes.
      </p>
      <h4 id="47-what-are-access-specifiers">
        47. What are access specifiers?
      </h4>
      <p>
        Access specifiers or access modifiers are keywords that determine the
        accessibility of methods, classes, etc in OOPs. These access specifiers
        allow the implementation of encapsulation. The most common access
        specifiers are public, private and protected. However, there are a few
        more which are specific to the programming languages.
      </p>
      <h4
        id="48-what-is-the-difference-between-public-private-and-protected-access-modifiers"
      >
        48. What is the difference between public, private and protected access
        modifiers?
      </h4>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Accessibility from own class</th>
            <th>Accessibility from derived class</th>
            <th>Accessibility from world</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Public</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Private</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Protected</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Default</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h4 id="49-what-is-data-abstraction">49. What is data abstraction?</h4>
      <p>
        Data abstraction is a very important feature of OOPs that allows
        displaying only the important information and hiding the implementation
        details.For example, while riding a bike, you know that if you raise the
        accelerator, the speed will increase, but you don’t know how it actually
        happens. This is data abstraction as the implementation details are
        hidden from the rider.
      </p>
      <h4 id="50-differentiate-between-data-abstraction-and-encapsulation">
        50. Differentiate between data abstraction and encapsulation.
      </h4>
      <table>
        <thead>
          <tr>
            <th>Data abstraction</th>
            <th>Encapsulation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Solves the problem at the design level</td>
            <td>Solves the problem at the implementation level</td>
          </tr>
          <tr>
            <td>
              Allows showing important aspects while hiding implementation
              details
            </td>
            <td>
              Binds code and data together into a single unit and hides it from
              the world
            </td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>
    </div>
  );
};
