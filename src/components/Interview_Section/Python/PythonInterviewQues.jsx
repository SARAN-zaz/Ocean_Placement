import "../globalStyle.css";
import "./PythonInterviewQues.css";
import images from "../../../assets/Python/index";

export const PythonInterviewQues = () => {
  return (
    <div className="main-container-interview-questions">
      <div>
        <p className="main-heading-q-a">
          Python Interview Questions and Answers
        </p>
        <div className="main-heading-interview-questions-answers">
          <img className="img-class-language-logo" src={images.pythonlogo} />
          <p>
            Python is a high-level, interpreted language known for its
            simplicity and readability, making it ideal for beginners and
            experienced developers alike.With Python, developers can create
            various types of programs, including web applications, desktop
            applications, data analysis tools, artificial intelligence
            algorithms, and more. Its dynamic typing system allows for rapid
            development and prototyping, enabling developers to quickly iterate
            and test their ideas.Furthermore, Python supports multiple
            programming paradigms, including procedural, object-oriented, and
            functional programming, providing flexibility in designing program
            architectures. Its cross-platform compatibility ensures that Python
            programs can run seamlessly on various operating systems, such as
            Windows, macOS, and Linux.
            <br />
            Python's popularity has led to a vast ecosystem of third-party
            libraries and frameworks, expanding its capabilities and enabling
            developers to leverage existing solutions to accelerate development.
            Moreover, Python's open-source nature encourages collaboration and
            innovation within the developer community, fostering a supportive
            environment for learning and growth. Python is a versatile and
            powerful programming language that empowers developers to build a
            wide range of applications efficiently. Its simplicity, readability,
            and extensive ecosystem make it an excellent choice for both
            beginners.
          </p>
        </div>
      </div>

      <div className="question-answer">
        <h4 id="1-what-is-python-">1. What is python?</h4>
        <p>
          Python is a high-level and object-oriented programming language with
          unified semantics designed primarily for developing apps and the web.
          It is the core language in the field of Rapid Application Development
          (RAD) as it offers options such as dynamic binding and dynamic typing.
        </p>
        <h4 id="2-python-is-an-interpreted-language-explain-">
          2. Python is an interpreted language. Explain?
        </h4>
        <p>
          An interpreted language is any programming language which is not in
          machine-level code before runtime. Therefore, Python is an interpreted
          language.
        </p>
        <h4 id="3-is-identation-required-in-python-">
          3. Is Identation required in python?
        </h4>
        <p>
          Indentation is necessary for Python. It specifies a block of code. All
          code within loops, classes, functions, etc is specified within an
          indented block. It is usually done using four space characters. If
          your code is not indented necessarily, it will not execute accurately
          and will throw errors as well.
        </p>
        <h4 id="4-what-are-the-key-features-of-python-">
          4. What are the key features of python?
        </h4>
        <ul>
          <li>
            <strong>Dynamic Typing:</strong> Variables in Python are dynamically
            typed, allowing for flexibility during runtime.
          </li>
          <li>
            <strong>Interpreted Language:</strong> Python code is executed line
            by line by an interpreter at runtime, without a separate compilation
            step.
          </li>
          <li>
            <strong>Object-Oriented:</strong> Python supports object-oriented
            programming, facilitating code organization and reuse.
          </li>
          <li>
            <strong>Extensive Standard Library:</strong> Python comes with a
            rich standard library, providing modules and packages for various
            tasks.
          </li>
          <li>
            <strong>Cross-Platform:</strong> Python code is portable across
            different platforms due to its interpreted nature.
          </li>
        </ul>
        <h4 id="5-what-are-the-benefits-of-python-">
          5. What are the benefits of python?
        </h4>
        <ul>
          <li>
            <strong>Readability:</strong> Python&#39;s syntax is designed for
            readability, making it easier to write and maintain code.
          </li>
          <li>
            <strong>Versatility:</strong> Python is a versatile language used
            for web development, data science, artificial intelligence,
            automation, and more.
          </li>
          <li>
            <strong>Community Support:</strong> Python has a large and active
            community, leading to extensive libraries, frameworks, and
            resources.
          </li>
          <li>
            <strong>Rapid Development:</strong> Python&#39;s simplicity and
            high-level nature contribute to faster development and iteration.
          </li>
          <li>
            <strong>Integration Capabilities:</strong> Python easily integrates
            with other languages and systems, facilitating interoperability.
          </li>
        </ul>
        <h4 id="6-what-are-python-namesapces-">
          6. What are python namesapces?
        </h4>
        <p>
          A namespace in python refers to the name which is assigned to each
          object in python. The objects are variables and functions. As each
          object is created, its name along with space(the address of the outer
          function in which the object is), gets created. The namespaces are
          maintained in python like a dictionary where the key is the namespace
          and value is the address of the object. There 4 types of namespace in
          python
        </p>
        <ul>
          <li>
            <strong>Built-in namespace:</strong> These namespaces contain all
            the built-in objects in python and are available whenever python is
            running.
          </li>
          <li>
            <strong>Global namespace:</strong> These are namespaces for all the
            objects created at the level of the main program.
          </li>
          <li>
            <strong>Enclosing namespaces:</strong> These namespaces are at the
            higher level or outer function.
          </li>
          <li>
            <strong>Local namespaces:</strong> These namespaces are at the local
            or inner function.
          </li>
        </ul>
        <h4 id="7-how-is-memory-managed-in-python-">
          7. How is memory managed in Python?
        </h4>
        <p>Memory is managed in Python in the following ways:</p>
        <ul>
          <li>
            Memory management in python is managed by
            <strong>Python private heap space.</strong> All Python objects and
            data structures are located in a private heap. The programmer does
            not have access to this private heap. The python interpreter takes
            care of this instead.
          </li>
          <li>
            The allocation of heap space for Python objects is done by Python’s
            memory manager. The core API gives access to some tools for the
            programmer to code.
          </li>
          <li>
            Python also has an inbuilt garbage collector, which recycles all the
            unused memory and so that it can be made available to the heap
            space.
          </li>
        </ul>
        <h4 id="8-what-is-the-difference-between-py-and-pyc-files-">
          8. What is the difference between .py and .pyc files?
        </h4>
        <p>
          The .py files are the python source code files. While the .pyc files
          contain the bytecode of the python files. .pyc files are created when
          the code is imported from some other source. The interpreter converts
          the source .py files to .pyc files which helps by saving time.
        </p>
        <h4 id="9-what-is-type-conversion-in-python-">
          9. What is type conversion in Python?
        </h4>
        <p>
          Type conversion refers to the conversion of one data type into
          another.
        </p>

        <ul>
          <li>
            <strong>int()</strong> - converts any data type into integer type
          </li>
          <li>
            <strong>float()</strong> – converts any data type into float type
          </li>
          <li>
            <strong>ord()</strong> – converts characters into integer
          </li>
          <li>
            <strong>hex()</strong> – converts integers to hexadecimal
          </li>
          <li>
            <strong>oct()</strong> – converts integer to octal
          </li>
          <li>
            <strong>tuple()</strong> – This function is used to convert to a
            tuple.
          </li>
          <li>
            <strong>set()</strong> – This function returns the type after
            converting to set.
          </li>
          <li>
            <strong>list()</strong> – This function is used to convert any data
            type to a list type.
          </li>
          <li>
            <strong>dict()</strong> – This function is used to convert a tuple
            of order (key, value) into a dictionary.
          </li>
          <li>
            <strong>str()</strong> – Used to convert integer into a string.
          </li>
          <li>
            <strong>complex(real,imag)</strong> – This function converts real
            numbers to complex(real,imag) number.
          </li>
        </ul>

        {/* <!-- 10 --> */}

        <h4 id="10-write-a-python-code-to-hello-world-program-">
          10. Write a python code to hello world program?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <span class="hljs-function">
            <span class="hljs-title">print</span>
            <span class="hljs-params">
              (<span class="hljs-string">"Hello World"</span>)
            </span>
          </span>{" "}
        </pre> */}
        <pre>
          <code>{`print("Hello World")`}</code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Ten10} alt="output10" className="img-cls" />
        </p>

        {/* <!-- 11 --> */}

        <h4 id="11-write-a-python-code-in-addition-to-two-numbers-">
          11. Write a python code in addition to two numbers.
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            num1=int(<span class="hljs-name">input</span>(
            <span class="hljs-string">"enter the value of number1:"</span>))
            num2=int(<span class="hljs-name">input</span>(
            <span class="hljs-string">"enter the value of number2:"</span>))
            addition=num1+num2 print(
            <span class="hljs-string">"Addition:"</span>,addition)
          </code>
        </pre> */}
        <pre>
          <code>
            {`num1 = int(input("enter the value of number1:"))
num2 = int(input("enter the value of number2:"))
addition = num1 + num2
print("Addition:", addition)`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Eleven11} alt="output11" className="img-cls" />
        </p>
        {/* <!-- 12 --> */}

        <h4 id="12-write-a-python-code-to-calculate-the-square-root-of-a-given-number-">
          12. Write a Python code to calculate the square root of a given
          number.
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            num = float(<span class="hljs-name">input</span>('Enter a number:
            ')) num_sqrt = num ** <span class="hljs-number">0.5</span>
            print('The square root of %<span class="hljs-number">0.3</span>f is
            %<span class="hljs-number">0.3</span>f'%(
            <span class="hljs-name">num</span> ,num_sqrt))
          </code>
        </pre> */}
        <pre>
          <code>
            {`num = float(input("Enter a number:"))
num_sqrt = num ** 0.5
print("The square root of %0.3f is %0.3f" % (num, num_sqrt))`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Twelve12} alt="output12" className="img-cls" />
        </p>

        {/* <!-- 13 --> */}

        <h4 id="13-write-a-python-code-to-calculate-the-area-of-a-triangle-">
          13. Write a Python code to calculate the area of a triangle.
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            base=int(<span class="hljs-name">input</span>(
            <span class="hljs-string">"enter the base value:"</span>))
            height=int(<span class="hljs-name">input</span>(
            <span class="hljs-string">"enter the height value:"</span>)) area=(
            <span class="hljs-name">base*height</span>)/2 print(
            <span class="hljs-string">"Area of triangle"</span>,area)
          </code>
        </pre> */}
        <pre>
          <code>
            {`base = int(input("enter the base value:"))
height = int(input("enter the height value:"))
area = (base * height) / 2
print("Area of triangle", area)`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Thirteen13} alt="output13" className="img-cls" />
        </p>

        {/* <!-- 14 --> */}

        <h4 id="14-write-a-python-program-to-find-the-cube-root-">
          14. Write a python program to find the cube root?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            <span class="hljs-built_in">num</span>=
            <span class="hljs-built_in">int</span>(input(
            <span class="hljs-string">"enter the number:"</span>)) cube_root=
            <span class="hljs-built_in">num</span>**(
            <span class="hljs-number">1</span>/
            <span class="hljs-number">3</span>)
            <span class="hljs-built_in">print</span>(
            <span class="hljs-string">"cube root of"</span>,
            <span class="hljs-built_in">num</span>,
            <span class="hljs-string">"is"</span>,cube_root)
          </code>
        </pre> */}
        <pre>
          <code>
            {`num = int(input("enter the number:"))
cube_root = num ** (1 / 3)
print("cube root of", num, "is", cube_root)`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Fourteen14} alt="output14" className="img-cls" />
        </p>

        {/* <!-- 15 --> */}

        <h4 id="15-write-a-python-program-to-find-the-area-of-rectangle-">
          15. Write a python program to find the area of rectangle?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            <span class="hljs-keyword">length</span>=
            <span class="hljs-keyword">int</span>(
            <span class="hljs-keyword">input</span>(
            <span class="hljs-string">"enter the value of length:"</span>))
            breadth=<span class="hljs-keyword">int</span>(
            <span class="hljs-keyword">input</span>(
            <span class="hljs-string">"enter the value of breadth:"</span>))
            area=<span class="hljs-keyword">length</span>*breadth
            <span class="hljs-keyword">print</span>(
            <span class="hljs-string">"Area of rectangle"</span>,area)
          </code>
        </pre> */}
        <pre>
          <code>
            {`length = int(input("enter the value of length:"))
breadth = int(input("enter the value of breadth:"))
area = length * breadth
print("Area of rectangle", area)`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Fifteen15} alt="output15" className="img-cls" />
        </p>

        {/* <!-- 16 --> */}

        <h4 id="16-write-a-python-program-to-swap-two-numbers-">
          16. Write a python program to swap two numbers?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            x = input(<span class="hljs-string">'Enter value of x: '</span>) y =
            input(<span class="hljs-string">'Enter value of y: '</span>) temp =
            x x = y y = temp
            <span class="hljs-function">
              <span class="hljs-title">print</span>
              <span class="hljs-params">
                (
                <span class="hljs-string">
                  'The value of x after swapping:'
                </span>
                ,x)
              </span>
            </span>
            <span class="hljs-function">
              <span class="hljs-title">print</span>
              <span class="hljs-params">
                (
                <span class="hljs-string">
                  'The value of y after swapping:'
                </span>
                ,y)
              </span>
            </span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`x = input("Enter value of x: ")
y = input("Enter value of y: ")
temp = x
x = y
y = temp
print("The value of x after swapping:", x)
print("The value of y after swapping:", y)`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Sixteen16} alt="output16" className="img-cls" />
        </p>

        {/* <!-- 17 --> */}

        <h4 id="17-wirte-a-python-program-to-swap-two-number-without-using-temporary-variables-">
          17. Wirte a python program to swap two number without using temporary
          variables?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            x = <span class="hljs-number">5</span>y ={" "}
            <span class="hljs-number">10</span>
            x, y = y, x
            <span class="hljs-function">
              <span class="hljs-title">print</span>
              <span class="hljs-params">
                (<span class="hljs-string">"x ="</span>, x)
              </span>
            </span>
            <span class="hljs-function">
              <span class="hljs-title">print</span>
              <span class="hljs-params">
                (<span class="hljs-string">"y ="</span>, y)
              </span>
            </span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`x = 5
y = 10
x, y = y, x
print("x =", x)
print("y =", y)`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Seventeen17} alt="output17" className="img-cls" />
        </p>

        {/* <!-- 18 --> */}

        <h4 id="18-what-is-the-difference-between-list-and-tuples-in-python-">
          18. What is the difference between list and tuples in python?
        </h4>
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Lists are mutable i.e they can be edited.</td>
              <td>
                Tuples are immutable (tuples are lists which can’t be edited).
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Lists are slower than tuples.</td>
              <td>Tuples are faster than list.</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Syntax: list_1 = [10, &#39;fruits’, 20]</td>
              <td>Syntax: tup_1 = (10, ‘fruits’ , 20)</td>
            </tr>
          </thead>
        </table>
        <br />

        {/* <!-- 19 --> */}

        <h4 id="19-what-is-functions-in-python-">
          19. What is functions in python?
        </h4>
        <p>
          A function is a block of code which is executed only when it is
          called. To define a Python function, the <strong>def</strong> keyword
          is used.
        </p>
        <p>
          <strong>Example:</strong>
        </p>
        {/* <pre>
          <code>
            <span class="hljs-function">
              <span class="hljs-keyword">def</span>{" "}
              <span class="hljs-title">Newfunc</span>
              <span class="hljs-params">()</span>:
            </span>
            print(
            <span class="hljs-string">"Hi, Welcome to Ocean Academy"</span>)
            Newfunc(); <span class="hljs-comment">#calling the function</span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`def Newfunc():
    print("Hi, Welcome to Ocean Academy")
Newfunc();# calling the function`}
          </code>
        </pre>

        {/* <!-- 20 --> */}
        <h4 id="19-what-are-local-variables-and-global-variables-in-python-">
          20. What are local variables and global variables in Python?
        </h4>
        <p>
          <strong>Global Variables:</strong>
        </p>
        <p>
          Variables declared outside a function or in global space are called
          global variables. These variables can be accessed by any function in
          the program.
        </p>
        <p>
          <strong>Local Variables:</strong>
        </p>
        <p>
          Any variable declared inside a function is known as a local variable.
          This variable is present in the local space and not in the global
          space.
        </p>
        <h4 id="20-how-does-break-continue-and-pass-work-">
          21. How does break, continue and pass work?
        </h4>
        <p>
          <strong>Break:</strong>
        </p>
        <p>
          Allows loop termination when some condition is met and the control is
          transferred to the next statement.
        </p>
        <p>
          <strong>Continue:</strong>
        </p>
        <p>
          Allows skipping some part of a loop when some specific condition is
          met and the control is transferred to the beginning of the loop.
        </p>
        <p>
          <strong>Pass:</strong>
        </p>
        <p>
          Used when you need some block of code syntactically, but you want to
          skip its execution. This is basically a null operation. Nothing
          happens when this is executed.
        </p>

        {/* <!-- 22 --> */}

        <h4 id="21-what-is-lambda-function-">22. What is lambda function?</h4>
        <p>
          An anonymous function is known as a lambda function. This function can
          have any number of parameters but can have just one statement.
        </p>
        <p>
          <strong>Example:</strong>
        </p>
        {/* <pre>
          <code>
            <span class="hljs-selector-tag">a</span> = lambda x,y : x+y
            <span class="hljs-function">
              <span class="hljs-title">print</span>
              <span class="hljs-params">
                (a(<span class="hljs-number">5</span>,{" "}
                <span class="hljs-number">6</span>)
              </span>
            </span>
            )
          </code>
        </pre> */}
        <pre>
          <code>
            {`a = lambda x, y :  x + y
print(a(5,   6))`}
          </code>
        </pre>

        {/* <!-- 23 --> */}

        <h4 id="22-what-is-dictionary-in-python-">
          23. What is dictionary in Python?
        </h4>
        <p>
          The built-in datatypes in Python are called dictionaries. It defines a
          one-to-one relationship between keys and values. Dictionaries contain
          pairs of keys and their corresponding values. Dictionaries are indexed
          by keys.
        </p>
        <p>Let’s take an example:</p>
        <p>
          The following example contains some keys. Country &amp; Capital. Their
          corresponding values are India &amp; Delhi respectively.
        </p>
        <p>
          <strong>
            dict=&#123; "&#123;"
            &#125;'Country':'India','Capital':'Delhi','PM':'Modi'&#123; "&#125;"
            &#125;
          </strong>
        </p>

        {/* <!-- 24 --> */}

        <h4 id="23-write-a-python-code-to-check-if-a-number-is-odd-or-even-">
          24. Write a Python Code to Check if a Number is Odd or Even?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            <span class="hljs-built_in">num</span>=
            <span class="hljs-built_in">int</span>(input(
            <span class="hljs-string">"Enter the number"</span>))
            <span class="hljs-keyword">if</span>{" "}
            <span class="hljs-built_in">num</span>%
            <span class="hljs-number">2</span>==
            <span class="hljs-number">0</span>:
            <span class="hljs-built_in">print</span>(
            <span class="hljs-string">"Number is Even"</span>)
            <span class="hljs-keyword">else</span>:
            <span class="hljs-built_in">print</span>(
            <span class="hljs-string">"Number is Odd"</span>)
          </code>
        </pre> */}
        <pre>
          <code>
            {`num=int(input("Enter the number"))
if num%2==0:
             print("Number is Even")
else:
            print("Number is Odd")`}
          </code>
        </pre>
        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Twentythree23} alt="output23" className="img-cls" />
        </p>

        {/* <!-- 25 --> */}

        <h4 id="24-write-a-python-code-to-find-the-greatest-of-two-numbers-">
          25. Write a Python code to find the greatest of two numbers?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            a=<span class="hljs-keyword">int</span>(
            <span class="hljs-keyword">input</span>(
            <span class="hljs-string">"enter the value of a"</span>)) b=
            <span class="hljs-keyword">int</span>(
            <span class="hljs-keyword">input</span>(
            <span class="hljs-string">"enter the value of b"</span>)) c=
            <span class="hljs-keyword">int</span>(
            <span class="hljs-keyword">input</span>(
            <span class="hljs-string">"enter the value of c"</span>))
            <span class="hljs-keyword">if</span> a&gt;=b{" "}
            <span class="hljs-keyword">and</span> a&gt;=c:
            <span class="hljs-keyword">print</span>(
            <span class="hljs-string">"A is greater than B and C"</span>) if
            b&gt;=a <span class="hljs-keyword">and</span> b&gt;=c:
            <span class="hljs-keyword">print</span>(
            <span class="hljs-string">"B is greater than A and C"</span>)
            <span class="hljs-keyword">else</span>:
            <span class="hljs-keyword">print</span>(
            <span class="hljs-string">"C is greater than A and B"</span>)
          </code>
        </pre> */}
        <pre>
          <code>
            {`a=int(input("enter the value of a"))
b=int(input("enter the value of b"))
c=int(input("enter the value of c"))
if a>=b and a>=c:
     print("A is greater than B and C")
if b>=a and b>=c:
     print("B is greater than A and C")
else:
     print("C is greater than A and B")`}
          </code>
        </pre>
        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Twentyfour24} alt="output24" className="img-cls" />
        </p>

        {/* <!-- 26 --> */}

        <h4 id="25-write-a-python-code-to-calculate-the-simple-interest-">
          26. Write a Python code to calculate the simple interest?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            principle=int(<span class="hljs-name">input</span>(
            <span class="hljs-string">"enter the principle amount:"</span>))
            number_Of_Years=int(<span class="hljs-name">input</span>(
            <span class="hljs-string">"enter the number of years:"</span>))
            rate_Of_Interest=int(<span class="hljs-name">input</span>(
            <span class="hljs-string">"enter the rate of interest:"</span>))
            simple_Interest=principle*number_Of_Years*rate_Of_Interest/100
            print(<span class="hljs-string">"Simple Interest ="</span>
            ,simple_Interest)
          </code>
        </pre> */}
        <pre>
          <code>
            {`principle = int(input("enter the principle amount:"))
number_Of_Years = int(input("enter the number of years:"))
rate_Of_Interest = int(input("enter the rate of interest:"))
simple_Interest = principle * number_Of_Years * rate_Of_Interest / 100
print("Simple Interest =", simple_Interest)`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Twentyfive25} alt="output25" className="img-cls" />
        </p>

        {/* <!-- 27 --> */}

        <h4 id="26-write-a-python-code-to-check-whether-age-is-eligible-to-vote-">
          27. Write a Python code to check whether age is eligible to vote?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            age=<span class="hljs-keyword">int</span>(
            <span class="hljs-keyword">input</span>(
            <span class="hljs-string">"Enter the age"</span>))
            <span class="hljs-keyword">if</span> age&gt;=
            <span class="hljs-number">18</span>:
            <span class="hljs-keyword">print</span>(
            <span class="hljs-string">"eligible to vote"</span>)
            <span class="hljs-keyword">else</span>:
            <span class="hljs-keyword">print</span>(
            <span class="hljs-string">"not eligible to vote"</span>)
          </code>
        </pre> */}
        <pre>
          <code>
            {`age = int(input("Enter the age"))
if age >= 18:
    print("eligible to vote")
else:
    print("not eligible to vote")`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p className="two-images-para">
          <img src={images.Twentysix26A} alt="output26A" />
          <img src={images.Twentysix26B} alt="output26B" />
        </p>

        {/* <!-- 28 --> */}
        <h4 id="27-write-a-python-program-to-check-leap-years-">
          28. Write a python program to check leap years?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            yr=<span class="hljs-keyword">int</span>(input(
            <span class="hljs-string">"Enter the year"</span>))
            <span class="hljs-keyword">if</span> yr%100==
            <span class="hljs-number">0</span>:
            <span class="hljs-keyword">if</span> yr%400==
            <span class="hljs-number">0</span>:
            <span class="hljs-keyword">print</span>(
            <span class="hljs-string">"Entered year is leap year"</span>)
            <span class="hljs-keyword">else</span>:
            <span class="hljs-keyword">print</span>(
            <span class="hljs-string">"Entered year is not a leap year"</span>)
            <span class="hljs-keyword">else</span>:
            <span class="hljs-keyword">if</span> yr%4==
            <span class="hljs-number">0</span>:
            <span class="hljs-keyword">print</span>(
            <span class="hljs-string">"Entered year is leap year"</span>)
            <span class="hljs-keyword">else</span>:
            <span class="hljs-keyword">print</span>(
            <span class="hljs-string">"Entered year is not a leap year"</span>)
          </code>
        </pre> */}
        <pre>
          <code>
            {`yr = int(input("Enter the year"))
if yr % 100 == 0:
       if yr % 400 == 0:
             print("Entered year is leap year")
    else:
        print("Entered year is not a leap year")
else:
     if yr%4 == 0:
        print("Entered year is leap year")
    else:
        print("Entered year is not a leap year")`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p className="two-images-para">
          <img src={images.Twentyseven27A} alt="output27A" />
          <img src={images.Twentyseven27B} alt="output27B" />
        </p>

        {/* <!-- 29 --> */}

        <h4 id="28-write-a-python-program-to-check-if-a-number-is-positive-negative-or-0-">
          29. Write a python program to check if a number is positive,Negative
          or 0?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            num1 = <span class="hljs-keyword">int</span>(
            <span class="hljs-keyword">input</span>(
            <span class="hljs-string">"Enter first number"</span>))
            <span class="hljs-keyword">if</span> num1 &gt;{" "}
            <span class="hljs-number">0</span> :
            <span class="hljs-keyword">print</span>(
            <span class="hljs-string">"Number is positive"</span>) elif num1&lt;
            <span class="hljs-number">0</span>:
            <span class="hljs-keyword">print</span>(
            <span class="hljs-string">"Number is negative"</span>)
            <span class="hljs-keyword">else</span>:
            <span class="hljs-keyword">print</span>(
            <span class="hljs-string">"Number is Zero"</span>)
          </code>
        </pre> */}
        <pre>
          <code>
            {`num1 = int(input("Enter first number"))
if num1 > 0:
    print("Number is positive")
elif num1 < 0:
    print("Number is negative")
else:
    print("Number is Zero")`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p className="two-images-para">
          <img src={images.Twentyeight28A} alt="output28A" />
          <img src={images.Twentyeight28B} alt="output28B" />
        </p>

        {/* <!-- 30 --> */}
        <h4 id="29-write-a-python-program-for-below-pattern-">
          30. Write a python program for below pattern?
        </h4>
        {/* <pre>
          <code>
            <span class="hljs-bullet">* </span>
            <span class="hljs-bullet">* *</span>
            <span class="hljs-bullet">* </span>
            <span class="hljs-bullet">* *</span>
            <span class="hljs-bullet">* </span>
            <span class="hljs-bullet">* *</span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`*   *   *
*   *   *
*   *   *`}
          </code>
        </pre>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            <span class="hljs-keyword">for</span> i{" "}
            <span class="hljs-keyword">in</span>{" "}
            <span class="hljs-built_in">range</span>(
            <span class="hljs-number">1</span>,
            <span class="hljs-number">4</span>):
            <span class="hljs-keyword">for</span> j{" "}
            <span class="hljs-keyword">in</span>{" "}
            <span class="hljs-built_in">range</span> (
            <span class="hljs-number">1</span>,
            <span class="hljs-number">4</span>):
            <span class="hljs-built_in">print</span>(
            <span class="hljs-string">"* "</span>,end=
            <span class="hljs-string">""</span>)
            <span class="hljs-built_in">print</span>()
          </code>
        </pre> */}
        <pre>
          <code>
            {`for i in range(1, 4):
    for j in range(1, 4):
        print("* ", end="")
    print()`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Twentynine29} alt="output29" />
        </p>

        {/* <!-- 31 --> */}

        <h4 id="30-write-a-program-to-print-the-first-n-natural-numbers-">
          31. Write a program to print the first n natural numbers?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            n=<span class="hljs-keyword">int</span>(
            <span class="hljs-keyword">input</span>(
            <span class="hljs-string">"Enter the range"</span>)) i=
            <span class="hljs-number">1</span>
            <span class="hljs-keyword">while</span> i&lt;=n:
            <span class="hljs-keyword">print</span>(i) i+=
            <span class="hljs-number">1</span>
          </code>
        </pre> */}

        <pre>
          <code>
            {`n = int(input("Enter the range"))
i = 1
while i <= n:
      print(i)
      i += 1`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Thirty30} alt="output30" />
        </p>

        {/* <!-- 32 --> */}

        <h4 id="31-what-is-python-modules-">32. What is python modules?</h4>
        <p>
          Python modules are files containing Python code. This code can either
          be functions, classes or variables. A Python module is a .py file
          containing executable code.
        </p>
        <p>Some of the commonly used built-in modules are:</p>
        <ul>
          <li>os</li>
          <li>sys</li>
          <li>math</li>
          <li>random</li>
          <li>data time</li>
          <li>JSON</li>
        </ul>

        {/* <!-- 33 --> */}

        <h4 id="32-what-is-_-_init-_-_-">33. What is __init__?</h4>
        <p>
          <strong>__init__</strong> is a method or constructor in Python. This
          method is automatically called to allocate memory when a new object/
          instance of a class is created. All classes have the
          <strong>__init__</strong> method.
        </p>

        {/* <!-- 34 --> */}

        <h4 id="33-what-is-self-in-python-">34. What is self in Python?</h4>
        <ul>
          <li>
            Self is an instance or an object of a class. In Python, this is
            explicitly included as the first parameter. However, this is not the
            case in Java where it’s optional. It helps to differentiate between
            the methods and attributes of a class with local variables.
          </li>
          <li>
            The self variable in the init method refers to the newly created
            object while in other methods, it refers to the object whose method
            was called.
          </li>
        </ul>

        {/* <!-- 35  --> */}
        <h4 id="34-what-is-decorators-in-python-">
          35. What is decorators in python?
        </h4>
        <p>
          Decorators are a powerful and flexible tool in Python, allowing the
          modification of the behavior of a function or class. They are denoted
          with the @decorator syntax.
        </p>
        <p>
          <strong>Example Program:</strong>
        </p>
        {/* <pre>
          <code>
            <span class="hljs-function">
              <span class="hljs-keyword">def</span>{" "}
              <span class="hljs-title">my_decorator</span>
              <span class="hljs-params">(func)</span>:
            </span>
            <span class="hljs-function">
              <span class="hljs-keyword">def</span>{" "}
              <span class="hljs-title">wrapper</span>
              <span class="hljs-params">()</span>:
            </span>
            print(
            <span class="hljs-string">
              "Something is happening before the function is called."
            </span>
            ) func() print(
            <span class="hljs-string">
              "Something is happening after the function is called."
            </span>
            )<span class="hljs-keyword">return</span> wrapper
            <span class="hljs-meta">@my_decorator</span>
            <span class="hljs-function">
              <span class="hljs-keyword">def</span>{" "}
              <span class="hljs-title">say_hello</span>
              <span class="hljs-params">()</span>:
            </span>
            print(<span class="hljs-string">"Hello!"</span>)
            <span class="hljs-comment">
              # The say_hello function is now decorated with my_decorator
            </span>
            say_hello()
          </code>
        </pre> */}

        <pre>
          <code>
            {`def my_decorator(func):
    def wrapper():
               print("Something is  happening before the  function is called.")
               func()
               print("Something is  happening  after  the  function is called.")
          return wrapper

@my_decorator
def say_hello():
    print("Hello!")

# The say_hello function is now decorated with my_decorator
say_hello()`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Thirtyfour34} alt="output34" className="img-cls" />
        </p>

        {/* <!-- 36 --> */}
        <h4 id="35-what-is-exception-handling-in-python-">
          36. What is Exception Handling in python?
        </h4>
        <p>
          Exception handling in Python is a mechanism that allows you to
          gracefully handle errors or exceptional situations that may occur
          during the execution of a program. Instead of abruptly terminating the
          program, you can catch and handle exceptions, which helps in providing
          a more controlled and robust flow.
        </p>

        {/* <!-- 37 --> */}
        <h4 id="36-what-are-the-key-components-in-exception-handling-">
          37. What are the key components in exception handling?
        </h4>
        <p>The key components of exception handling in Python include:</p>
        <ul>
          <li>
            <strong>Try Block:</strong>
          </li>
        </ul>
        <p>
          The try block contains the code that might raise an exception. It is
          the section of code where you anticipate that an exception might
          occur.
        </p>
        <ul>
          <li>
            <strong>Except Block:</strong>
          </li>
        </ul>
        <p>
          The except block is used to handle the exception. If an exception
          occurs inside the try block, the corresponding except block is
          executed. Multiple except blocks can be used to catch different types
          of exceptions.
        </p>
        <ul>
          <li>
            <strong>Else Block (Optional):</strong>
          </li>
        </ul>
        <p>
          The else block is executed if no exceptions are raised in the try
          block. It is optional and used for code that should run only when no
          exceptions occur.
        </p>
        <ul>
          <li>
            <strong>Finally Block (Optional):</strong>
          </li>
        </ul>
        <p>
          The finally block contains code that will be executed regardless of
          whether an exception is raised or not. It is useful for cleanup
          operations.
        </p>

        {/* <!-- 38 --> */}
        <h4 id="37-write-a-example-program-in-exception-handling-">
          38. Write a example program in exception handling?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            <span class="hljs-keyword">try</span>:
            <span class="hljs-comment">
              # Code that might raise an exception
            </span>
            x = int(input(<span class="hljs-string">"Enter a number: "</span>))
            result = <span class="hljs-number">10</span> / x
            <span class="hljs-keyword">except</span> ZeroDivisionError:
            <span class="hljs-comment">
              # Handle division by zero exception
            </span>
            print(<span class="hljs-string">"Error: Division by zero!"</span>)
            <span class="hljs-keyword">except</span> ValueError:
            <span class="hljs-comment">
              # Handle invalid input (non-integer) exception
            </span>
            print(
            <span class="hljs-string">
              "Error: Please enter a valid integer!"
            </span>
            )<span class="hljs-keyword">else</span>:
            <span class="hljs-comment">
              # Code to be executed if no exceptions occurred
            </span>
            print(<span class="hljs-string">"Division result:"</span>, result)
            <span class="hljs-keyword">finally</span>:
            <span class="hljs-comment">
              # Cleanup code (optional), always executed
            </span>
            print(<span class="hljs-string">"Execution complete."</span>)
          </code>
        </pre> */}
        <pre>
          <code>
            {`try:
    # Code that might raise an exception
    x = int(input("Enter a number: "))
    result = 10 / x

except ZeroDivisionError:
    # Handle division by zero exception
    print("Error: Division by zero!")

except ValueError:
    # Handle invalid input (non-integer) exception
    print("Error: Please enter a valid integer!")

else:
    # Code to be executed if no exceptions occurred
    print("Division result:", result)

finally:
    # Cleanup code (optional), always executed
    print("Execution complete.")`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p className="two-images-para">
          <img src={images.Thirtyseven37} alt="output37" className="img-cls" />
          <img
            src={images.Thirtyseven37A}
            alt="output37A"
            className="img-cls"
          />
          <img
            src={images.Thirtyseven37B}
            alt="output37B"
            className="img-cls"
          />
        </p>

        {/* <!-- 39 --> */}
        <h4 id="38-write-a-python-program-to-check-whether-the-number-is-palindrome-or-not">
          39. Write a python program to check whether the number is palindrome
          or Not
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            <span class="hljs-built_in">num</span>=
            <span class="hljs-built_in">int</span>(input(
            <span class="hljs-string">"enter the number"</span>)) result=
            <span class="hljs-number">0</span>
            temp=<span class="hljs-built_in">num</span>
            <span class="hljs-keyword">while</span>{" "}
            <span class="hljs-built_in">num</span>&gt;
            <span class="hljs-number">0</span>: rem=
            <span class="hljs-built_in">num</span>%
            <span class="hljs-number">10</span>
            result= result*<span class="hljs-number">10</span>+rem
            <span class="hljs-built_in">num</span>=
            <span class="hljs-built_in">num</span>
            <span class="hljs-comment">//10</span>
            <span class="hljs-keyword">if</span> (temp==result):
            <span class="hljs-built_in">print</span>(
            <span class="hljs-string">"given number is palindrome"</span>)
            <span class="hljs-keyword">else</span>:
            <span class="hljs-built_in">print</span>(
            <span class="hljs-string">"given number is not palindrome"</span>)
          </code>
        </pre> */}
        <pre>
          <code>
            {`num = int(input("enter the number"))
result = 0
temp = num
while num > 0:
    rem = num % 10
    result = result * 10 + rem
    num = num // 10
if temp == result:
    print("given number is palindrome")
else:
    print("given number is not palindrome")`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Thirtyeight38} alt="output38" className="img-cls" />
        </p>

        {/* <!-- 40 --> */}

        <h4 id="39-rite-a-python-program-to-find-the-sum-of-the-first-10-natural-numbers-">
          40. Write a python program to find the sum of the first 10 natural
          numbers?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            <span class="hljs-keyword">sum</span>=0 i=1
            <span class="hljs-keyword">while</span> i&lt;=10:
            <span class="hljs-keyword">sum</span>=
            <span class="hljs-keyword">sum</span>+
            <span class="hljs-built_in">i</span>
            i+=1
            <span class="hljs-keyword">print</span>(
            <span class="hljs-string">"Sum ="</span>,
            <span class="hljs-keyword">sum</span>)
          </code>
        </pre> */}
        <pre>
          <code>
            {`sum = 0
i = 1
while i <= 10:
    sum = sum + i
    i += 1
print("Sum =", sum)`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Thirtynine39} alt="output39" className="img-cls" />
        </p>

        {/* <!-- 41 --> */}

        <h4 id="40-write-a-program-to-reverse-a-list-without-using-reverse-method-">
          41. Write a program to reverse a list without using reverse() method?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            <span class="hljs-keyword">a</span> = [] n = int(input(
            <span class="hljs-string">"Enter the range of the list: "</span>))
            <span class="hljs-keyword">for</span> i{" "}
            <span class="hljs-keyword">in</span> range(
            <span class="hljs-number">0</span>, n): b = int(input(
            <span class="hljs-string">"Enter the value: "</span>))
            <span class="hljs-keyword">a</span>.append(b) print(
            <span class="hljs-string">"Original List:"</span>,{" "}
            <span class="hljs-keyword">a</span>)
            <span class="hljs-comment">
              # Reversing the list without using reverse method
            </span>
            <span class="hljs-built_in">start</span>,{" "}
            <span class="hljs-function">
              <span class="hljs-keyword">end</span> ={" "}
              <span class="hljs-title">0</span>,{" "}
              <span class="hljs-title">n</span> -{" "}
              <span class="hljs-title">1</span>
            </span>
            <span class="hljs-keyword">while</span>{" "}
            <span class="hljs-built_in">start</span> &lt;{" "}
            <span class="hljs-keyword">end</span>:
            <span class="hljs-keyword">a</span>[
            <span class="hljs-built_in">start</span>],{" "}
            <span class="hljs-keyword">a</span>[
            <span class="hljs-keyword">end</span>] ={" "}
            <span class="hljs-keyword">a</span>[
            <span class="hljs-keyword">end</span>],{" "}
            <span class="hljs-keyword">a</span>[
            <span class="hljs-built_in">start</span>]
            <span class="hljs-built_in">start</span> +={" "}
            <span class="hljs-number">1</span>
            <span class="hljs-function">
              <span class="hljs-keyword">end</span> -={" "}
              <span class="hljs-title">1</span>
            </span>
            print(<span class="hljs-string">"Reversed List:"</span>,{" "}
            <span class="hljs-keyword">a</span>)
          </code>
        </pre> */}

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Fourty40} alt="output40" className="img-cls" />
        </p>

        {/* <!-- 43 --> */}
        <h4 id="43-explain-inheritance-in-python-with-an-example-explain-inheritance-in-python-with-an-example-">
          42. Explain Inheritance in Python with an example.Explain Inheritance
          in Python with an example.
        </h4>
        <p>
          Inheritance is a fundamental concept in object-oriented programming
          (OOP) that allows a class (called the child or subclass) to inherit
          properties and behaviors from another class (called the parent or
          superclass). This promotes code reuse and helps in creating a
          hierarchy of classes.
        </p>
        <p>Let&#39;s illustrate inheritance in Python with a simple example:</p>
        {/* <pre>
          <code>
            <span class="hljs-comment"># Parent class</span>
            <span class="hljs-class">
              <span class="hljs-keyword">class</span>{" "}
              <span class="hljs-title">Animal</span>:
            </span>
            <span class="hljs-function">
              <span class="hljs-keyword">def</span>{" "}
              <span class="hljs-title">__init__</span>
              <span class="hljs-params">
                (<span class="hljs-keyword">self</span>, name)
              </span>
            </span>
            :<span class="hljs-keyword">self</span>.name = name
            <span class="hljs-function">
              <span class="hljs-keyword">def</span>{" "}
              <span class="hljs-title">speak</span>
              <span class="hljs-params">
                (<span class="hljs-keyword">self</span>)
              </span>
            </span>
            : raise NotImplementedError(
            <span class="hljs-string">
              "Subclasses must implement this method"
            </span>
            )<span class="hljs-comment"># Child class 1</span>
            <span class="hljs-class">
              <span class="hljs-keyword">class</span>{" "}
              <span class="hljs-title">Dog</span>(
              <span class="hljs-title">Animal</span>):
            </span>
            <span class="hljs-function">
              <span class="hljs-keyword">def</span>{" "}
              <span class="hljs-title">speak</span>
              <span class="hljs-params">
                (<span class="hljs-keyword">self</span>)
              </span>
            </span>
            :<span class="hljs-keyword">return</span> f
            <span class="hljs-string">"&#123;self.name&#125; says Woof!"</span>
            <span class="hljs-comment"># Child class 2</span>
            <span class="hljs-class">
              <span class="hljs-keyword">class</span>{" "}
              <span class="hljs-title">Cat</span>(
              <span class="hljs-title">Animal</span>):
            </span>
            <span class="hljs-function">
              <span class="hljs-keyword">def</span>{" "}
              <span class="hljs-title">speak</span>
              <span class="hljs-params">
                (<span class="hljs-keyword">self</span>)
              </span>
            </span>
            :<span class="hljs-keyword">return</span> f
            <span class="hljs-string">"&#123;self.name&#125; says Meow!"</span>
            <span class="hljs-comment">
              # Creating instances of the classes
            </span>
            my_dog = Dog(<span class="hljs-string">"Buddy"</span>) my_cat = Cat(
            <span class="hljs-string">"Whiskers"</span>)
            <span class="hljs-comment">
              # Calling the speak method on instances
            </span>
            print(my_dog.speak()){" "}
            <span class="hljs-comment"># Output: Buddy says Woof!</span>
            print(my_cat.speak()){" "}
            <span class="hljs-comment"># Output: Whiskers says Meow!</span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`# Parent class
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError(
            "Subclasses must implement this method"
        )

# Child class 1
class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

# Child class 2
class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

# Creating instances of the classes
my_dog = Dog("Buddy")
my_cat = Cat("Whiskers")

# Calling the speak method on instances
print(my_dog.speak())   # Output: Buddy says Woof!
print(my_cat.speak())   # Output: Whiskers says Meow!`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Fourtytwo42} alt="output42" className="img-cls" />
        </p>

        {/* <!-- 43 --> */}
        <h4 id="43-explain-inheritance-in-python-with-an-example-explain-inheritance-in-python-with-an-example-">
          43. Explain Inheritance in Python with an example.Explain Inheritance
          in Python with an example.
        </h4>
        <p>
          Inheritance is a fundamental concept in object-oriented programming
          (OOP) that allows a class (called the child or subclass) to inherit
          properties and behaviors from another class (called the parent or
          superclass). This promotes code reuse and helps in creating a
          hierarchy of classes.
        </p>
        <p>Let&#39;s illustrate inheritance in Python with a simple example:</p>
        {/* <pre>
          <code>
            <span class="hljs-class">class Animal:</span>
            <span class="hljs-function">
              def __init__(<span class="hljs-keyword">self</span>, name):
            </span>
            <span class="hljs-keyword">self</span>.name = name
            <span class="hljs-function">
              def speak(<span class="hljs-keyword">self</span>):
            </span>
            raise NotImplementedError(
            <span class="hljs-string">
              "Subclasses must implement this method"
            </span>
            )<span class="hljs-class">class Dog(Animal):</span>
            <span class="hljs-function">
              def speak(<span class="hljs-keyword">self</span>):
            </span>
            <span class="hljs-keyword">return</span> f
            <span class="hljs-string">
              '&#123; "&#123;self.name&#125; says Woof!" &#125;'
            </span>
            <span class="hljs-class">class Cat(Animal):</span>
            <span class="hljs-function">
              def speak(<span class="hljs-keyword">self</span>):
            </span>
            <span class="hljs-keyword">return</span> f
            <span class="hljs-string">
              '&#123; "&#123;self.name&#125; says Meow!" &#125;'
            </span>
            my_dog = Dog("Buddy") my_cat = Cat("Whiskers") print(my_dog.speak())
            Output: Buddy says Woof! print(my_cat.speak()) Output: Whiskers says
            Meow!
          </code>
        </pre> */}
        <pre>
          <code>
            {`class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError(
            "Subclasses must implement this method"
        )

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

my_dog = Dog("Buddy")
my_cat = Cat("Whiskers")

print(my_dog.speak())
print(my_cat.speak())   `}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Fourtythree43} alt="output43" className="img-cls" />
        </p>

        {/* <!-- 44 --> */}

        <h4 id="44-write-a-python-factorial-program-">
          44. Write a Python factorial program?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            <span class="hljs-built_in">num</span> = int(input(
            <span class="hljs-string">"Enter a number: "</span>))
            <span class="hljs-built_in">factorial</span> ={" "}
            <span class="hljs-number">1</span>
            <span class="hljs-keyword">if</span>{" "}
            <span class="hljs-built_in">num</span> &lt;{" "}
            <span class="hljs-number">0</span>:
            <span class="hljs-built_in">print</span>(
            <span class="hljs-string">
              "Sorry, factorial does not exist for negative numbers"
            </span>
            ) elif <span class="hljs-built_in">num</span> =={" "}
            <span class="hljs-number">0</span>:
            <span class="hljs-built_in">print</span>(
            <span class="hljs-string">"The factorial of 0 is 1"</span>)
            <span class="hljs-keyword">else</span>:
            <span class="hljs-keyword">for</span> i{" "}
            <span class="hljs-keyword">in</span>{" "}
            <span class="hljs-built_in">range</span>(
            <span class="hljs-number">1</span>,
            <span class="hljs-built_in">num</span> +{" "}
            <span class="hljs-number">1</span>):
            <span class="hljs-built_in">factorial</span> ={" "}
            <span class="hljs-built_in">factorial</span>*i
            <span class="hljs-built_in">print</span>(
            <span class="hljs-string">"The factorial of"</span>,
            <span class="hljs-built_in">num</span>,
            <span class="hljs-string">"is"</span>,
            <span class="hljs-built_in">factorial</span>)
          </code>
        </pre> */}

        <pre>
          <code>
            {`num = int(input("Enter a number: "))
factorial = 1

if num < 0:
    print("Sorry,  factorial does not exist for negative numbers")
elif num == 0:
    print("The factorial of 0 is 1")
else:
    for i in range(1, num + 1):
        factorial = factorial * i
    print("The factorial of", num, "is", factorial)`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Fourtyfour44} alt="output44" className="img-cls" />
        </p>

        {/* <!-- 45 --> */}

        <h4 id="45-write-a-python-program-to-print-the-fibonacci-series-">
          45. Write a python program to print the Fibonacci series?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            a=-<span class="hljs-number">1</span>
            b=<span class="hljs-number">1</span>
            n=int(input(<span class="hljs-string">"Enter the number"</span>))
            <span class="hljs-keyword">for</span>{" "}
            <span class="hljs-selector-tag">i</span>{" "}
            <span class="hljs-keyword">in</span> range(
            <span class="hljs-number">1</span>,n+
            <span class="hljs-number">1</span>): c=a+
            <span class="hljs-selector-tag">b</span>
            a=<span class="hljs-selector-tag">b</span>
            b=c
            <span class="hljs-function">
              <span class="hljs-title">print</span>
              <span class="hljs-params">(c)</span>
            </span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`a = -1
b = 1
n = int(input("Enter the number"))

for i in range(1, n + 1):
    c = a + b
    a = b
    b = c
    print(c)`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Fourtyfive45} alt="output45" className="img-cls" />
        </p>

        {/* <!-- 46 --> */}

        <h4 id="46-write-a-python-program-to-check-whether-the-string-is-palindrome-or-not-">
          46. Write a python program to check whether the string is palindrome
          or Not?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            <span class="hljs-built_in">string</span>=input(
            <span class="hljs-string">"enter the string:"</span>) newString=''
            <span class="hljs-built_in">length</span>=len(
            <span class="hljs-built_in">string</span>)-
            <span class="hljs-number">1</span>
            <span class="hljs-keyword">for</span> i{" "}
            <span class="hljs-keyword">in</span>{" "}
            <span class="hljs-built_in">range</span> (
            <span class="hljs-built_in">length</span>,-
            <span class="hljs-number">1</span>,-
            <span class="hljs-number">1</span>): newString+=
            <span class="hljs-built_in">string</span>[i]
            <span class="hljs-keyword">if</span>(newString==
            <span class="hljs-built_in">string</span>):
            <span class="hljs-built_in">print</span>(
            <span class="hljs-string">"palindrome"</span>)
            <span class="hljs-keyword">else</span>:
            <span class="hljs-built_in">print</span>(
            <span class="hljs-string">"not palindrome"</span>)
          </code>
        </pre> */}
        <pre>
          <code>
            {`string = input("enter the string:")
newString = ""
length = len(string) - 1
for i in range(length, -1, -1):
    newString += string[i]
if newString == string:
    print("palindrome")
else:
    print("not palindrome")`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Fourtysix46} alt="output46" className="img-cls" />
        </p>

        {/* <!-- 47 --> */}

        <h4 id="47-write-a-program-to-print-all-the-characters-in-the-string-">
          47. Write a Program to print all the characters in the string?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            <span class="hljs-keyword">str</span> ={" "}
            <span class="hljs-string">"OCEAN"</span>i ={" "}
            <span class="hljs-number">0</span>
            <span class="hljs-keyword">while</span>(i&lt;len(
            <span class="hljs-keyword">str</span>)):
            <span class="hljs-keyword">print</span>(
            <span class="hljs-keyword">str</span>[i]) i+=
            <span class="hljs-number">1</span>
          </code>
        </pre> */}

        <pre>
          <code>
            {`str = "OCEAN"
i = 0
while i < len(str):
    print(str[i])
    i += 1`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Fourtyseven47} alt="output47" className="img-cls" />
        </p>

        {/* <!-- 48 --> */}

        <h4 id="48-to-find-the-length-of-the-given-string-without-using-a-built-in-function-">
          48. To find the length of the given string without using a built-in
          function?
        </h4>
        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code ngNonBindable>
            def mystring(name): count = 0 for i in name: count += 1
            print("length of the string:", count) mystring("Hiocean")
          </code>
        </pre> */}
        <pre>
          <code>
            {`def mystring(name):
    count = 0
    for i in name:
        count += 1
    print("length of the string:", count)

mystring("Hiocean")`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Fourtyeight48} alt="output48" className="img-cls" />
        </p>

        {/* <!-- 49 --> */}

        <h4 id="49-print-the-below-pattern-">49. Print the below pattern.</h4>
        {/* <pre>
          <code>
            <span class="hljs-bullet">*</span>
            <span class="hljs-bullet">* </span>*
            <span class="hljs-bullet">* </span>
            <span class="hljs-bullet">* *</span>
            <span class="hljs-bullet">* </span>
            <span class="hljs-bullet">* *</span> *
          </code>
        </pre> */}
        <pre>
          <code>
            {`*
*         *       
*         *         *
*         *         *        *`}
          </code>
        </pre>

        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            <span class="hljs-keyword">for</span> i{" "}
            <span class="hljs-keyword">in</span>{" "}
            <span class="hljs-built_in">range</span>(
            <span class="hljs-number">1</span>,
            <span class="hljs-number">5</span>):
            <span class="hljs-keyword">for</span> j{" "}
            <span class="hljs-keyword">in</span>{" "}
            <span class="hljs-built_in">range</span>(
            <span class="hljs-number">1</span>,i+
            <span class="hljs-number">1</span>):
            <span class="hljs-built_in">print</span>(
            <span class="hljs-string">"* "</span>,end=
            <span class="hljs-string">""</span>)
            <span class="hljs-built_in">print</span>()
          </code>
        </pre> */}

        <pre>
          <code>
            {`for i in range(1, 5):
    for j in range(1, i + 1):
        print("* ", end="")
    print()`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Fourtynine49} alt="output49" className="img-cls" />
        </p>

        {/* <!-- 50 --> */}

        <h4 id="50-print-the-below-pattern">50. Print the below pattern</h4>
        {/* <pre>
          <code>
            <span class="hljs-symbol">1 </span>
            <span class="hljs-symbol">2 </span>
            <span class="hljs-number">2</span>
            <span class="hljs-symbol">3 </span>
            <span class="hljs-number">3</span>{" "}
            <span class="hljs-number">3</span>
            <span class="hljs-symbol">4 </span>
            <span class="hljs-number">4</span>{" "}
            <span class="hljs-number">4</span>{" "}
            <span class="hljs-number">4</span>
            <span class="hljs-symbol">5 </span>
            <span class="hljs-number">5</span>{" "}
            <span class="hljs-number">5</span>{" "}
            <span class="hljs-number">5</span>{" "}
            <span class="hljs-number">5</span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`1
2 2
3 3 3
4 4 4 4
5 5 5 5 5`}
          </code>
        </pre>

        <h6 id="program-">Program:</h6>
        {/* <pre>
          <code>
            rows = <span class="hljs-number">6</span>
            <span class="hljs-keyword">for</span>{" "}
            <span class="hljs-built_in">num</span>{" "}
            <span class="hljs-keyword">in</span>{" "}
            <span class="hljs-built_in">range</span>(
            <span class="hljs-number">1</span>,rows):
            <span class="hljs-keyword">for</span> i{" "}
            <span class="hljs-keyword">in</span>{" "}
            <span class="hljs-built_in">range</span>(
            <span class="hljs-number">1</span>,
            <span class="hljs-built_in">num</span>+
            <span class="hljs-number">1</span>):
            <span class="hljs-built_in">print</span>(
            <span class="hljs-built_in">num</span>, end=
            <span class="hljs-string">" "</span>)
            <span class="hljs-built_in">print</span>(
            <span class="hljs-string">" "</span>)
          </code>
        </pre> */}

        <pre>
          <code>
            {`rows = 6
for num in range(1, rows):
    for i in range(1, num + 1):
        print(num, end=" ")
    print()`}
          </code>
        </pre>

        <h6 id="output-">Output:</h6>
        <p>
          <img src={images.Fivfty50} alt="output50" className="img-cls" />
        </p>
      </div>
    </div>
  );
};
