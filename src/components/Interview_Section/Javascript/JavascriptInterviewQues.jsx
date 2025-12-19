import "./JavascriptInterviewQues.css";
import "../globalStyle.css";
import images from "../../../assets/Javascript/index";

export const JavascriptInterviewQues = () => {
  return (
    <div className="main-container-interview-questions">
      <div>
        <p className="main-heading-q-a">
          Javascript Interview Questions and Answers
        </p>
        <div className="main-heading-interview-questions-answers">
          <img
            className="img-class-language-logo"
            src={images.Javascript_logo}
          />
          <p>
            JavaScript is a versatile programming language renowned for its
            capability to enhance web pages with dynamic and interactive
            features. It was initially developed by Netscape as a client-side
            scripting language to make web pages more engaging. However, it has
            evolved significantly since its inception and is now widely used for
            both client-side and server-side development. At its core,
            JavaScript provides a lightweight, interpreted, and object-oriented
            environment for scripting within web browsers.
            <br /> With just a few lines of code, JavaScript allows developers
            to manipulate HTML elements, respond to user actions, and
            dynamically update content without reloading the entire page.One of
            the key strengths of JavaScript lies in its compatibility with
            various platforms and browsers. Moreover, JavaScript has a vast
            ecosystem supported by numerous libraries and frameworks like React,
            Angular, and Vue.js, which streamline development and provide
            solutions for complex tasks such as state management.
          </p>
        </div>
      </div>
      <div className="question-answer">
        {/* <!-- 1 --> */}
        <h4 id="1-what-are-the-possible-ways-to-create-objects-in-javascript">
          1. What are the possible ways to create objects in JavaScript?
        </h4>
        <p>
          There are many ways to create objects in javascript as mentioned
          below:
        </p>
        <ol>
          <li>
            <p>
              <strong>Object literal syntax:</strong>
            </p>
            <p>
              The object literal syntax (or object initializer), is a
              comma-separated set of name-value pairs wrapped in curly braces.
            </p>
            {/* <pre>
              <code className="lang-javascript">
                <span className="hljs-keyword">var</span>{" "}
                <span className="hljs-class">
                  <span className="hljs-keyword">object</span>{" "}
                </span>
                = &#123; name: <span className="hljs-string">"Sudheer"</span>, age:{" "}
                <span className="hljs-number">34</span>, &#125;;
              </code>
            </pre> */}
            <pre>
  <code className="lang-javascript">
    {`var object = {
    name: "Sudheer",
    age: 34
};`}
  </code>
</pre>

            <p>
              Object literal property values can be of any data type, including
              array, function, and nested object.
            </p>
            <p>
              <strong>Note:</strong> This is one of the easiest ways to create
              an object.
            </p>
          </li>
          <li>
            <p>
              <strong>Object constructor:</strong>
            </p>
            <p>
              The simplest way to create an empty object is using the{" "}
              <code>Object</code> constructor. Currently this approach is not
              recommended.
            </p>
            <pre>
              <code className="lang-javascript">
                <span className="hljs-keyword">var</span>{" "}
                <span className="hljs-class">
                  <span className="hljs-keyword">object</span>{" "}
                </span>
                = <span className="hljs-keyword">new</span>{" "}
                <span className="hljs-type">Object</span>();
              </code>
            </pre>
            <p>
              The <code>Object()</code> is a built-in constructor function so
              &quot;new&quot; keyword is not required. The above code snippet
              can be re-written as:
            </p>
            <pre>
              <code className="lang-javascript">
                <span className="hljs-keyword">var</span>{" "}
                <span className="hljs-keyword">object</span> ={" "}
                <span className="hljs-keyword">Object</span>();
              </code>
            </pre>
          </li>
          <li>
            <p>
              <strong>Object&#39;s create method:</strong>
            </p>
            <p>
              The <code>create</code> method of Object is used to create a new
              object by passing the specificied prototype object and properties
              as arguments, i.e., this pattern is helpful to create new objects
              based on existing objects. The second argument is optional and it
              is used to create properties on a newly created object.
            </p>
            <p>
              The following code creates a new empty object whose prototype is
              null.
            </p>
            <pre>
              <code className="lang-javascript">
                <span className="hljs-keyword">var</span>{" "}
                <span className="hljs-class">
                  <span className="hljs-keyword">object</span>{" "}
                </span>
                = <span className="hljs-type">Object</span>.create(
                <span className="hljs-literal">null</span>);
              </code>
            </pre>
            <p>
              The following example creates an object along with additional new
              properties.
            </p>
            {/* <pre>
              <code className="lang-javascript">
                let vehicle = &#123;
                <span className="hljs-symbol"> wheels:</span>{" "}
                <span className="hljs-string">"4"</span>,
                <span className="hljs-symbol"> fuelType:</span>{" "}
                <span className="hljs-string">"Gasoline"</span>,
                <span className="hljs-symbol"> color:</span>{" "}
                <span className="hljs-string">"Green"</span>, &#125;; let carProps =
                &#123;
                <span className="hljs-symbol"> type:</span> &#123;
                <span className="hljs-symbol"> value:</span>{" "}
                <span className="hljs-string">"Volkswagen"</span>, &#125;,
                <span className="hljs-symbol"> model:</span> &#123;
                <span className="hljs-symbol"> value:</span>{" "}
                <span className="hljs-string">"Golf"</span>, &#125;, &#125;; var car
                = Object.create(vehicle, carProps); console.log(car);
              </code>
            </pre> */}
            <pre>
  <code className="lang-javascript">
{`let vehicle = {
          wheels: "4",
          fuelType: "Gasoline",
          color: "Green",
        };
           let carProps = {
                type: { 
                  value: "Volkswagen"
                 },
                 model: { 
                    value: "Golf"
                   },
                 };

        var car = Object.create(vehicle, carProps);
        console.log(car);`}
  </code>
</pre>

          </li>
          <li>
            <p>
              <strong>Function constructor:</strong>
            </p>
            <p>
              In this approach, create any function and apply the new operator
              to create object instances.
            </p>
            {/* <pre>
              <code className="lang-javascript">
                <span className="hljs-function">
                  <span className="hljs-keyword">function</span>{" "}
                  <span className="hljs-title">Person</span>
                  <span className="hljs-params">(name)</span>{" "}
                </span>
                &#123;
                <span className="hljs-keyword">this</span>.name = name;
                <span className="hljs-keyword">this</span>.age ={" "}
                <span className="hljs-number">21</span>; &#125;
                <span className="hljs-keyword">var</span> object ={" "}
                <span className="hljs-keyword">new</span> Person(
                <span className="hljs-string">"Sudheer"</span>);
              </code>
            </pre> */}
            <pre>
  <code className="lang-javascript">
{`function Person(name) {
              this.name = name;
              this.age = 21;
            }

            var object = new Person("Sudheer");
`}
  </code>
</pre>

          </li>
          <li>
            <p>
              <strong>Function constructor with prototype:</strong>
            </p>
            <p>
              This is similar to function constructor but it uses prototype for
              their properties and methods,
            </p>
            {/* <pre>
              <code className="lang-javascript">
                <span className="hljs-function">
                  <span className="hljs-keyword">function</span>{" "}
                  <span className="hljs-title">Person</span>
                  <span className="hljs-params">()</span>{" "}
                </span>
                &#123;&#125; Person.prototype.name ={" "}
                <span className="hljs-string">"Sudheer"</span>;
                <span className="hljs-keyword">var</span> object ={" "}
                <span className="hljs-keyword">new</span> Person();
              </code>
            </pre> */}
            <pre>
  <code className="lang-javascript">
{`function Person() {}
                 Person.prototype.name = "Sudheer";
                 var object = new Person();
`}
  </code>
</pre>

            <p>
              This is equivalent to creating an instance with Object.create
              method with a function prototype and then calling that function
              with an instance and parameters as arguments.
            </p>
            {/* <pre>
              <code className="lang-javascript">
                function{" "}
                <span className="hljs-function">
                  <span className="hljs-keyword">func</span>
                  <span className="hljs-params">()</span> &#123;&#125;
                </span>
                new{" "}
                <span className="hljs-function">
                  <span className="hljs-keyword">func</span>
                  <span className="hljs-params">(x, y, z)</span>;
                </span>
              </code>
            </pre> */}
            <pre>
  <code className="lang-javascript">
{`function func() {}
                new func(x, y, z);`}
  </code>
</pre>

            <p>
              <strong>(OR)</strong>
            </p>
            {/* <pre>
              <code className="lang-javascript">
                // <span className="hljs-keyword">Create</span> a{" "}
                <span className="hljs-keyword">new</span>{" "}
                <span className="hljs-keyword">instance</span>{" "}
                <span className="hljs-keyword">using</span>{" "}
                <span className="hljs-keyword">function</span> prototype.
                <span className="hljs-keyword">var</span> newInstance =
                Object.create(func.prototype) //{" "}
                <span className="hljs-keyword">Call</span> the{" "}
                <span className="hljs-keyword">function</span>
                <span className="hljs-keyword">var</span>{" "}
                <span className="hljs-keyword">result</span> =
                func.call(newInstance, x, y, z), //{" "}
                <span className="hljs-keyword">If</span> the{" "}
                <span className="hljs-keyword">result</span>{" "}
                <span className="hljs-keyword">is</span> a non-
                <span className="hljs-literal">null</span>{" "}
                <span className="hljs-keyword">object</span>{" "}
                <span className="hljs-keyword">then</span>{" "}
                <span className="hljs-keyword">use</span> it otherwise just{" "}
                <span className="hljs-keyword">use</span> the{" "}
                <span className="hljs-keyword">new</span> instance. console.log(
                <span className="hljs-keyword">result</span> &amp;&amp; typeof{" "}
                <span className="hljs-keyword">result</span> ==={" "}
                <span className="hljs-string">'object'</span> ?{" "}
                <span className="hljs-keyword">result</span> : newInstance);
              </code>
            </pre> */}
            <pre>
  <code className="lang-javascript">
{`// Create a new instance using function prototype
var newInstance = Object.create(func.prototype);

// Call the function
var result = func.call(newInstance, x, y, z);

// If the result is a non-null object then use it; otherwise, use the new instance
console.log(result && typeof result === 'object' ? result : newInstance);`}
  </code>
</pre>

          </li>
          <li>
            <p>
              <strong>Object&#39;s assign method:</strong>
            </p>
            <p>
              The <code>Object.assign</code> method is used to copy all the
              properties from one or more source objects and stores them into a
              target object.
            </p>
            <p>
              The following code creates a new staff object by copying
              properties of his working company and the car he owns.
            </p>
            {/* <pre>
              <code className="lang-javascript">
                <span className="hljs-attribute">const orgObj</span> = &#123;
                company: <span className="hljs-string">"XYZ Corp"</span> &#125;;
                <span className="hljs-attribute">const carObj</span> = &#123; name:{" "}
                <span className="hljs-string">"Toyota"</span> &#125;;
                <span className="hljs-attribute">const staff</span> =
                Object.assign(&#123;&#125;, orgObject, carObject);
              </code>
            </pre> */}
            <pre>
  <code className="lang-javascript">
{`const orgObj = { company: "XYZ Corp" };
const carObj = { name: "Toyota" };
const staff = Object.assign({}, orgObject, carObject);`}
  </code>
</pre>

          </li>
          <li>
            <p>
              <strong>ES6 Class syntax:</strong>
            </p>
            <p>ES6 introduces class feature to create objects.</p>
            {/* <pre>
              <code className="lang-javascript">
                <span className="hljs-class">
                  <span className="hljs-keyword">class</span>{" "}
                  <span className="hljs-title">Person</span>{" "}
                </span>
                &#123;
                <span className="hljs-keyword">constructor</span>(name) &#123;
                <span className="hljs-keyword">this</span>.name = name; &#125;
                &#125;
                <span className="hljs-keyword">var</span> object ={" "}
                <span className="hljs-keyword">new</span> Person(
                <span className="hljs-string">"Sudheer"</span>);
              </code>
            </pre> */}
            <pre>
  <code className="lang-javascript">
{`class Person {
  constructor(name) {
    this.name = name;
  }
}

var object = new Person("Sudheer");`}
  </code>
</pre>

          </li>
          <li>
            <p>
              <strong>Singleton pattern:</strong>
            </p>
            <p>
              A Singleton is an object which can only be instantiated one time.
              Repeated calls to its constructor return the same instance. This
              way one can ensure that they don&#39;t accidentally create
              multiple instances.
            </p>
            {/* <pre>
              <code className="lang-javascript">
                <span className="hljs-keyword">var</span> object ={" "}
                <span className="hljs-keyword">new</span> (
                <span className="hljs-function">
                  <span className="hljs-keyword">function</span>{" "}
                  <span className="hljs-params">()</span>{" "}
                </span>
                &#123;
                <span className="hljs-keyword">this</span>.name ={" "}
                <span className="hljs-string">"Sudheer"</span>; &#125;)();
              </code>
            </pre> */}
            <pre>
  <code className="lang-javascript">
{`var object = new (function() {
  this.name = "Sudheer";
})();`}
  </code>
</pre>

          </li>
        </ol>

        {/* <!-- 2 --> */}

        <h4 id="2-what-is-a-prototype-chain">
          2. What is a prototype chaining?
        </h4>
        <p>
          <strong>Prototype chaining</strong> is used to build new types of
          objects based on existing ones. It is similar to inheritance in a
          class based language.
        </p>
        <p>
          The prototype on object instance is available through{" "}
          <strong>Object.getPrototypeOf(object)</strong> or
          <strong>__proto__</strong> property whereas prototype on constructors
          function is available through
          <strong>Object.prototype</strong>.
        </p>
        <p>
          <img
            className="img"
            src={images.Prototype}
            alt="Screenshot"
          />
        </p>
        <br />

        {/* <!-- 3 --> */}

        <h4 id="3-what-is-the-difference-between-call-apply-and-bind">
          3. What is the difference between Call, Apply and Bind?
        </h4>
        <p>
          The difference between Call, Apply and Bind can be explained with
          below examples,
        </p>
        <p>
          <strong>Call:</strong> The call() method invokes a function with a
          given <code>this</code> value and arguments provided one by one
        </p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-keyword">var</span> employee1 = &#123;{" "}
            <span className="hljs-attr">firstName</span>:{" "}
            <span className="hljs-string">"John"</span>,{" "}
            <span className="hljs-attr">lastName</span>:{" "}
            <span className="hljs-string">"Rodson"</span> &#125;;
            <span className="hljs-keyword">var</span> employee2 = &#123;{" "}
            <span className="hljs-attr">firstName</span>:{" "}
            <span className="hljs-string">"Jimmy"</span>,{" "}
            <span className="hljs-attr">lastName</span>:{" "}
            <span className="hljs-string">"Baily"</span> &#125;;
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">invite</span>(
              <span className="hljs-params">greeting1, greeting2</span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">console</span>.log( greeting1 +{" "}
            <span className="hljs-string">" "</span> +{" "}
            <span className="hljs-keyword">this</span>.firstName +{" "}
            <span className="hljs-string">" "</span> +{" "}
            <span className="hljs-keyword">this</span>.lastName +{" "}
            <span className="hljs-string">", "</span> + greeting2 ); &#125;
            invite.call(employee1, <span className="hljs-string">"Hello"</span>,{" "}
            <span className="hljs-string">"How are you?"</span>);{" "}
            <span className="hljs-comment">// Hello John Rodson, How are you?</span>
            invite.call(employee2, <span className="hljs-string">
              "Hello"
            </span>, <span className="hljs-string">"How are you?"</span>);{" "}
            <span className="hljs-comment">// Hello Jimmy Baily, How are you?</span>
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`var employee1 = { firstName: "John", lastName: "Rodson" };
                var employee2 = { firstName: "Jimmy", lastName: "Baily" };

                function invite(greeting1, greeting2) {
                   console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
                   );
                }

                  invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
                  invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?`}
  </code>
</pre>

        <p>
          <strong>Apply:</strong> Invokes the function with a given{" "}
          <code>this</code> value and allows you to pass in arguments as an
          array
        </p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-keyword">var</span> employee1 = &#123;{" "}
            <span className="hljs-attr">firstName</span>:{" "}
            <span className="hljs-string">"John"</span>,{" "}
            <span className="hljs-attr">lastName</span>:{" "}
            <span className="hljs-string">"Rodson"</span> &#125;;
            <span className="hljs-keyword">var</span> employee2 = &#123;{" "}
            <span className="hljs-attr">firstName</span>:{" "}
            <span className="hljs-string">"Jimmy"</span>,{" "}
            <span className="hljs-attr">lastName</span>:{" "}
            <span className="hljs-string">"Baily"</span> &#125;;
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">invite</span>(
              <span className="hljs-params">greeting1, greeting2</span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">console</span>.log( greeting1 +{" "}
            <span className="hljs-string">" "</span> +{" "}
            <span className="hljs-keyword">this</span>.firstName +{" "}
            <span className="hljs-string">" "</span> +{" "}
            <span className="hljs-keyword">this</span>.lastName +{" "}
            <span className="hljs-string">", "</span> + greeting2 ); &#125;
            invite.apply(employee1, [<span className="hljs-string">"Hello"</span>,{" "}
            <span className="hljs-string">"How are you?"</span>]);{" "}
            <span className="hljs-comment">// Hello John Rodson, How are you?</span>
            invite.apply(employee2, [<span className="hljs-string">
              "Hello"
            </span>, <span className="hljs-string">"How are you?"</span>]);{" "}
            <span className="hljs-comment">// Hello Jimmy Baily, How are you?</span>
          </code>
        </pre>
        <p>
          <strong>Bind:</strong> returns a new function, allowing you to pass
          any number of arguments
        </p>
        <pre>
          <code className="lang-javascript">
            <span className="hljs-keyword">var</span> employee1 = &#123;{" "}
            <span className="hljs-attr">firstName</span>:{" "}
            <span className="hljs-string">"John"</span>,{" "}
            <span className="hljs-attr">lastName</span>:{" "}
            <span className="hljs-string">"Rodson"</span> &#125;;
            <span className="hljs-keyword">var</span> employee2 = &#123;{" "}
            <span className="hljs-attr">firstName</span>:{" "}
            <span className="hljs-string">"Jimmy"</span>,{" "}
            <span className="hljs-attr">lastName</span>:{" "}
            <span className="hljs-string">"Baily"</span> &#125;;
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">invite</span>(
              <span className="hljs-params">greeting1, greeting2</span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">console</span>.log( greeting1 +{" "}
            <span className="hljs-string">" "</span> +{" "}
            <span className="hljs-keyword">this</span>.firstName +{" "}
            <span className="hljs-string">" "</span> +{" "}
            <span className="hljs-keyword">this</span>.lastName +{" "}
            <span className="hljs-string">", "</span> + greeting2 ); &#125;
            <span className="hljs-keyword">var</span> inviteEmployee1 =
            invite.bind(employee1);
            <span className="hljs-keyword">var</span> inviteEmployee2 =
            invite.bind(employee2); inviteEmployee1(
            <span className="hljs-string">"Hello"</span>,{" "}
            <span className="hljs-string">"How are you?"</span>);{" "}
            <span className="hljs-comment">// Hello John Rodson, How are you?</span>
            inviteEmployee2(<span className="hljs-string">"Hello"</span>,{" "}
            <span className="hljs-string">"How are you?"</span>);{" "}
            <span className="hljs-comment">// Hello Jimmy Baily, How are you?</span>
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?`}
  </code>
</pre>

        <p>
          Call and Apply are pretty much interchangeable. Both execute the
          current function immediately. You need to decide whether it’s easier
          to send in an array or a comma separated list of arguments. You can
          remember by treating Call is for <strong>comma</strong> (separated
          list) and Apply is for <strong>Array</strong>.
        </p>
        <p>
          Bind creates a new function that will have <code>this</code> set to
          the first parameter passed to bind().
        </p>

        {/* <!-- 4 --> */}

        <h4 id="4-what-is-json-and-its-common-operations">
          4. What is JSON and its common operations?
        </h4>
        <p>
          <strong>JSON</strong> is a text-based data format following JavaScript
          object syntax, which was popularized by
          <code>Douglas Crockford</code>. It is useful when you want to transmit
          data across a network. It is basically just a text file with an
          extension of .json, and a MIME type of application/json
        </p>
        <p>
          <strong>Parsing:</strong> Converting a string to a native object
        </p>
        <pre>
          <code className="lang-javascript">
            JSON.parse(text)<span className="hljs-comment">;</span>
          </code>
        </pre>
        <p>
          <strong>Stringification:</strong> Converting a native object to a
          string so that it can be transmitted across the network
        </p>
        <pre>
          <code className="lang-javascript">
            <span className="hljs-type">JSON</span>.stringify(
            <span className="hljs-class">
              <span className="hljs-keyword">object</span>)
            </span>
            ;
          </code>
        </pre>

        {/* <!-- 5 --> */}

        <h4 id="5-what-is-the-purpose-of-the-array-slice-method">
          5. What is the purpose of the array slice method?
        </h4>
        <p>
          The <strong>slice()</strong> method returns the selected elements in
          an array as a new array object. It selects the elements starting at
          the given start argument, and ends at the given optional end argument
          without including the last element. If you omit the second argument
          then it selects till the end of the array.
        </p>
        <p>Some of the examples of this method are,</p>
        {/* <pre>
          <code className="lang-javascript">
            let arrayIntegers = [<span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">2</span>,{" "}
            <span className="hljs-number">3</span>,{" "}
            <span className="hljs-number">4</span>,{" "}
            <span className="hljs-number">5</span>]; let arrayIntegers1 =
            arrayIntegers.slice(<span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">2</span>);{" "}
            <span className="hljs-comment">// returns [1,2]</span>
            let arrayIntegers2 = arrayIntegers.slice(
            <span className="hljs-number">2</span>,{" "}
            <span className="hljs-number">3</span>);{" "}
            <span className="hljs-comment">// returns [3]</span>
            let arrayIntegers3 = arrayIntegers.slice(
            <span className="hljs-number">4</span>);{" "}
            <span className="hljs-comment">//returns [5]</span>
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4);    // returns [5]`}
  </code>
</pre>

        <p>
          <strong>Note:</strong> Slice method doesn&#39;t mutate the original
          array but it returns the subset as a new array.
        </p>

        {/* <!-- 6 --> */}

        <h4 id="6-what-is-the-purpose-of-the-array-splice-method">
          6. What is the purpose of the array splice method?
        </h4>
        <p>
          The <strong>splice()</strong> method adds/removes items to/from an
          array, and then returns the removed item. The first argument specifies
          the array position/index for insertion or deletion whereas the
          optional second argument indicates the number of elements to be
          deleted. Each additional argument is added to the array.
        </p>
        <p>Some of the examples of this method are:</p>
        {/* <pre>
          <code className="lang-javascript">
            let arrayIntegersOriginal1 = [<span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">2</span>,{" "}
            <span className="hljs-number">3</span>,{" "}
            <span className="hljs-number">4</span>,{" "}
            <span className="hljs-number">5</span>]; let arrayIntegersOriginal2 = [
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">2</span>,{" "}
            <span className="hljs-number">3</span>,{" "}
            <span className="hljs-number">4</span>,{" "}
            <span className="hljs-number">5</span>]; let arrayIntegersOriginal3 = [
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">2</span>,{" "}
            <span className="hljs-number">3</span>,{" "}
            <span className="hljs-number">4</span>,{" "}
            <span className="hljs-number">5</span>]; let arrayIntegers1 =
            arrayIntegersOriginal1.splice(<span className="hljs-number">0</span>,{" "}
            <span className="hljs-number">2</span>);{" "}
            <span className="hljs-comment">
              // returns [1, 2]; original array: [3, 4, 5]
            </span>
            let arrayIntegers2 = arrayIntegersOriginal2.splice(
            <span className="hljs-number">3</span>);{" "}
            <span className="hljs-comment">
              // returns [4, 5]; original array: [1, 2, 3]
            </span>
            let arrayIntegers3 = arrayIntegersOriginal3.splice(
            <span className="hljs-number">3</span>,{" "}
            <span className="hljs-number">1</span>,{" "}
            <span className="hljs-string">"a"</span>,{" "}
            <span className="hljs-string">"b"</span>,{" "}
            <span className="hljs-string">"c"</span>);{" "}
            <span className="hljs-comment">
              //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
            </span>
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); // returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]`}
  </code>
</pre>

        <p>
          <strong>Note:</strong> Splice method modifies the original array and
          returns the deleted array.
        </p>

        {/* <!-- 7 --> */}

        <h4 id="7-what-is-the-difference-between-slice-and-splice">
          7. What is the difference between slice and splice?
        </h4>
        <p>Some of the major differences in a tabular form:</p>
        <table>
          <thead>
            <tr>
              <th>Slice</th>
              <th>Splice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Doesn&#39;t modify the original array(immutable)</td>
              <td>Modifies the original array(mutable)</td>
            </tr>
            <tr>
              <td>Returns the subset of original array</td>
              <td>Returns the deleted elements as array</td>
            </tr>
            <tr>
              <td>Used to pick the elements from array</td>
              <td>Used to insert/delete elements to/from array</td>
            </tr>
          </tbody>
        </table>
        <br />

        {/* <!-- 8 --> */}

        <h4 id="8-how-do-you-compare-object-and-map">
          8. How do you compare Object and Map?
        </h4>
        <p>
          <strong>Objects</strong> are similar to <strong>Maps</strong> in that
          both let you set keys to values, retrieve those values, delete keys,
          and detect whether something is stored at a key. Due to this reason,
          Objects have been used as Maps historically. But there are important
          differences that make using a Map preferable in certain cases:
        </p>
        <ol>
          <li>
            The keys of an Object can be Strings and Symbols, whereas they can
            be any value for a Map, including functions, objects, and any
            primitive.
          </li>
          <li>
            The keys in a Map are ordered while keys added to Object are not.
            Thus, when iterating over it, a Map object returns keys in the order
            of insertion.
          </li>
          <li>
            You can get the size of a Map easily with the size property, while
            the number of properties in an Object must be determined manually.
          </li>
          <li>
            A Map is an iterable and can thus be directly iterated, whereas
            iterating over an Object requires obtaining its keys in some fashion
            and iterating over them.
          </li>
          <li>
            An Object has a prototype, so there are default keys in an object
            that could collide with your keys if you&#39;re not careful. As of
            ES5 this can be bypassed by creating an object(which can be called a
            map) using
            <code>Object.create(null)</code>, but this practice is seldom done.
          </li>
          <li>
            A Map may perform better in scenarios involving frequent addition
            and removal of key pairs.
          </li>
        </ol>

        {/* <!-- 9 --> */}

        <h4 id="9-what-is-the-difference-between-and-operators">
          9. What is the difference between == and === operators?
        </h4>
        <p>
          JavaScript provides both strict(===, !==) and type-converting(==, !=)
          equality comparison. The strict operators take type of variable in
          consideration, while non-strict operators make type
          correction/conversion based upon values of variables. The strict
          operators follow the below conditions for different types,
        </p>
        <ol>
          <li>
            Two strings are strictly equal when they have the same sequence of
            characters, same length, and same characters in corresponding
            positions.
          </li>
          <li>
            Two numbers are strictly equal when they are numerically equal,
            i.e., having the same number value. There are two special cases in
            this,
            <ol>
              <li>NaN is not equal to anything, including NaN.</li>
              <li>Positive and negative zeros are equal to one another.</li>
            </ol>
          </li>
          <li>
            Two Boolean operands are strictly equal if both are true or both are
            false.
          </li>
          <li>
            Two objects are strictly equal if they refer to the same Object.
          </li>
          <li>
            Null and Undefined types are not equal with ===, but equal with == .
            i.e, <code>null===undefined --&gt; false</code>, but{" "}
            <code>null==undefined --&gt; true</code>
          </li>
        </ol>
        <p>Some of the example which covers the above cases:</p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-number">0</span> =={" "}
            <span className="hljs-literal">false</span>{" "}
            <span className="hljs-regexp">//</span>{" "}
            <span className="hljs-literal">true</span>
            <span className="hljs-number">0</span> ==={" "}
            <span className="hljs-literal">false</span>{" "}
            <span className="hljs-regexp">//</span>{" "}
            <span className="hljs-literal">false</span>
            <span className="hljs-number">1</span> =={" "}
            <span className="hljs-string">"1"</span>{" "}
            <span className="hljs-regexp">//</span>{" "}
            <span className="hljs-literal">true</span>
            <span className="hljs-number">1</span> ==={" "}
            <span className="hljs-string">"1"</span>{" "}
            <span className="hljs-regexp">//</span>{" "}
            <span className="hljs-literal">false</span>
            <span className="hljs-literal">null</span> =={" "}
            <span className="hljs-literal">undefined</span>{" "}
            <span className="hljs-regexp">//</span>{" "}
            <span className="hljs-literal">true</span>
            <span className="hljs-literal">null</span> ==={" "}
            <span className="hljs-literal">undefined</span>{" "}
            <span className="hljs-regexp">//</span>{" "}
            <span className="hljs-literal">false</span>
            <span className="hljs-string">'0'</span> =={" "}
            <span className="hljs-literal">false</span>{" "}
            <span className="hljs-regexp">//</span>{" "}
            <span className="hljs-literal">true</span>
            <span className="hljs-string">'0'</span> ==={" "}
            <span className="hljs-literal">false</span>{" "}
            <span className="hljs-regexp">//</span>{" "}
            <span className="hljs-literal">false</span>
            NaN == NaN <span className="hljs-keyword">or</span> NaN === NaN{" "}
            <span className="hljs-regexp">//</span>{" "}
            <span className="hljs-literal">false</span>
            []==[] <span className="hljs-keyword">or</span> []===[]{" "}
            <span className="hljs-regexp">//</span>
            <span className="hljs-literal">false</span>, refer different objects{" "}
            <span className="hljs-keyword">in</span> memory
            &#123;&#125;==&#123;&#125; <span className="hljs-keyword">or</span>{" "}
            &#123;&#125;===&#123;&#125; <span className="hljs-regexp">//</span>
            <span className="hljs-literal">false</span>, refer different objects{" "}
            <span className="hljs-keyword">in</span> memory
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`0 == false  // true
0 === false // false
1 == "1"    // true
1 === "1"   // false
null == undefined  // true
null === undefined // false
'0' == false  // true
'0' === false // false
NaN == NaN  || NaN === NaN  // false
[] == []    || [] === []     // false, refer different objects in memory
{} == {}    || {} === {}     // false, refer different objects in memory`}
  </code>
</pre>


        {/* <!-- 10 --> */}

        <h4>10. What are lambda expressions or arrow functions?</h4>
        <p>
          An arrow function is a shorter/concise syntax for a function
          expression and does not have its own **this, arguments, super, or
          new.target**. These functions are best suited for non-method
          functions, and they cannot be used as constructors. Some of the
          examples of arrow functions are listed as below,
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">const</span> arrowFunc1 ={" "}
            <span className="hljs-function">
              (<span className="hljs-params">a, b</span>) =&gt;
            </span>{" "}
            a + b; <span className="hljs-comment">// Multiple parameters</span>
            <span className="hljs-keyword">const</span> arrowFunc2 ={" "}
            <span className="hljs-function">
              <span className="hljs-params">a</span> =&gt;
            </span>{" "}
            a * <span className="hljs-number">10</span>;{" "}
            <span className="hljs-comment">// Single parameter</span>
            <span className="hljs-keyword">const</span> arrowFunc3 ={" "}
            <span className="hljs-function">
              <span className="hljs-params">()</span> =&gt;
            </span>{" "}
            &#123;&#125; <span className="hljs-comment">// no parameters</span>
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`const arrowFunc1 = (a, b) => a + b; // Multiple parameters
const arrowFunc2 = a => a * 10;     // Single parameter
const arrowFunc3 = () => {};        // No parameters`}
  </code>
</pre>


        {/* <!-- 11 --> */}

        <h4>11. What is a first class function?</h4>
        <p>
          In Javascript, functions are first class objects. First-class
          functions means when functions in that language are treated like any
          other variable. For example, in such a language, a function can be
          passed as an argument to other functions, can be returned by another
          function and can be assigned as a value to a variable. For example, in
          the below example, handler functions assigned to a listener
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">const</span> handler = () =&gt;
            console.log(
            <span className="hljs-string">"This is a click handler function"</span>
            ); document.addEventListener(
            <span className="hljs-string">"click"</span>, handler);
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`const handler = () => console.log("This is a click handler function");
document.addEventListener("click", handler);`}
  </code>
</pre>

        {/* <!-- 12 --> */}

        <h4> 12. What is a first order function?</h4>
        <p>
          A first-order function is a function that doesn’t accept another
          function as an argument and doesn’t return a function as its return
          value.
        </p>
        <pre>
          <code>
            const firstOrder = () =&gt; console.log(
            <span className="hljs-string">"I am a first order function!"</span>);
          </code>
        </pre>

        {/* <!-- 13 --> */}

        <h4>13. What is a higher order function?</h4>
        <p>
          A higher-order function is a function that accepts another function as
          an argument or returns a function as a return value or both.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">const</span> firstOrderFunc ={" "}
            <span className="hljs-function">
              <span className="hljs-params">()</span> =&gt;
            </span>
            <span className="hljs-built_in">console</span>.log(
            <span className="hljs-string">
              "Hello, I am a First order function"
            </span>
            );
            <span className="hljs-keyword">const</span> higherOrder ={" "}
            <span className="hljs-function">
              (<span className="hljs-params">ReturnFirstOrderFunc</span>) =&gt;
            </span>{" "}
            ReturnFirstOrderFunc(); higherOrder(firstOrderFunc);
            <span className="javascript"></span>
          </code>
        </pre> */}

        <pre>
  <code className="lang-javascript">
{`const firstOrderFunc = () => 
             console.log("Hello, I am a First order function");
             const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
             higherOrder(firstOrderFunc);`}
  </code>
</pre>

        {/* <!-- 14 --> */}

        <h4>14. What is a unary function?</h4>
        <p>
          A unary function (i.e. monadic) is a function that accepts exactly one
          argument. It stands for a single argument accepted by a function.
        </p>
        <pre>
          <code>
            <span className="hljs-keyword">const</span> unaryFunction ={" "}
            <span className="hljs-function">
              (<span className="hljs-params">a</span>) =&gt;
            </span>{" "}
            <span className="hljs-built_in">console</span>.log(a +{" "}
            <span className="hljs-number">10</span>);{" "}
            <span className="hljs-comment">
              // Add 10 to the given argument and display the value
            </span>
          </code>
        </pre>

        {/* <!-- 15 --> */}

        <h4>15. What is the currying function?</h4>
        <p>
          Currying is the process of taking a function with multiple arguments
          and turning it into a sequence of functions each with only a single
          argument. Currying is named after a mathematician **Haskell Curry**.
          By applying currying, an n-ary function turns into a unary function.
          Let's take an example of n-ary function and how it turns into a
          currying function,
        </p>
        {/* <pre>
          <code>
            const multiArgFunction = (a, b, c) =&gt; a + b + c;
            console.log(multiArgFunction(<span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">2</span>,{" "}
            <span className="hljs-number">3</span>)); //{" "}
            <span className="hljs-number">6</span>
            const curryUnaryFunction = (a) =&gt; (b) =&gt; (c) =&gt; a + b + c;
            curryUnaryFunction(<span className="hljs-number">1</span>); // returns a{" "}
            <span className="hljs-keyword">function</span>: b =&gt; c =&gt;{" "}
            <span className="hljs-number">1</span> + b + c curryUnaryFunction(
            <span className="hljs-number">1</span>)(
            <span className="hljs-number">2</span>); // returns a{" "}
            <span className="hljs-keyword">function</span>: c =&gt;{" "}
            <span className="hljs-number">3</span> + c curryUnaryFunction(
            <span className="hljs-number">1</span>)(
            <span className="hljs-number">2</span>)(
            <span className="hljs-number">3</span>); // returns the number{" "}
            <span className="hljs-number">6</span>
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`const multiArgFunction = (a, b, c) => a + b + c;
            console.log(multiArgFunction(1, 2, 3)); // 6
            const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
            curryUnaryFunction(1); // returns a function: b => c => 1 + b + c
            curryUnaryFunction(1)(2); // returns a function: c => 3 + c
            curryUnaryFunction(1)(2)(3); // returns 6`}
  </code>
</pre>

        {/* <!-- 16 --> */}

        <h4 id="16-what-is-a-pure-function">16. What is a pure function?</h4>
        <p>
          A <strong>Pure function</strong> is a function where the return value
          is only determined by its arguments without any side effects. i.e, If
          you call a function with the same arguments &#39;n&#39; number of
          times and &#39;n&#39; number of places in the application then it will
          always return the same value.
        </p>
        <p>
          Let&#39;s take an example to see the difference between pure and
          impure functions,
        </p>
        {/* <pre>
          <code>
            <span className="hljs-comment">//Impure</span>
            <span className="hljs-keyword">let</span> numberArray = [];
            <span className="hljs-keyword">const</span> impureAddNumber ={" "}
            <span className="hljs-function">
              (<span className="hljs-params">number</span>) =&gt;
            </span>{" "}
            numberArray.push(number);
            <span className="hljs-comment">//Pure</span>
            <span className="hljs-keyword">const</span> pureAddNumber ={" "}
            <span className="hljs-function">
              (<span className="hljs-params">number</span>) =&gt;
            </span>{" "}
            (argNumberArray) =&gt; argNumberArray.concat([number]);
            <span className="hljs-comment">//Display the results</span>
            <span className="hljs-built_in">console</span>.log(impureAddNumber(
            <span className="hljs-number">6</span>));{" "}
            <span className="hljs-comment">// returns 1</span>
            <span className="hljs-built_in">console</span>.log(numberArray);{" "}
            <span className="hljs-comment">// returns [6]</span>
            <span className="hljs-built_in">console</span>.log(pureAddNumber(
            <span className="hljs-number">7</span>)(numberArray));{" "}
            <span className="hljs-comment">// returns [6, 7]</span>
            <span className="hljs-built_in">console</span>.log(numberArray);{" "}
            <span className="hljs-comment">// returns [6]</span>
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`// Impure
            let numberArray = [];
            const impureAddNumber = (number) => numberArray.push(number);
            // Pure
            const pureAddNumber = (number) => (argNumberArray) => 
              argNumberArray.concat([number]);

            //Display the result
            console.log(impureAddNumber(6)); // returns 1
            console.log(numberArray); // returns [6]
            console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
            console.log(numberArray); // returns [6]`}
  </code>
</pre>
        <p>
          As per the above code snippets, the <strong>Push</strong> function is
          impure itself by altering the array and returning a push number index
          independent of the parameter value, whereas <strong>Concat</strong> on
          the other hand takes the array and concatenates it with the other
          array producing a whole new array without side effects. Also, the
          return value is a concatenation of the previous array.
        </p>
        <p>
          Remember that Pure functions are important as they simplify unit
          testing without any side effects and no need for dependency injection.
          They also avoid tight coupling and make it harder to break your
          application by not having any side effects. These principles are
          coming together with the <strong>Immutability</strong> concept of ES6:
          giving preference to <strong>const</strong> over <strong>let</strong>{" "}
          usage.
        </p>
        {/* <!-- 17 --> */}

        <h4 id="17-what-is-the-purpose-of-the-let-keyword">
          17. What is the purpose of the let keyword?
        </h4>
        <p>
          The <code>let</code> statement declares a{" "}
          <strong>block scope local variable</strong>. Hence the variables
          defined with let keyword are limited in scope to the block, statement,
          or expression on which it is used. Whereas variables declared with the{" "}
          <code>var</code> keyword used to define a variable globally, or
          locally to an entire function regardless of block scope.
        </p>
        <p>Let&#39;s take an example to demonstrate the usage,</p>
        {/* <pre>
          <code className="lang-javascript">
            {" "}
            <span className="hljs-keyword">let</span> counter ={" "}
            <span className="hljs-number">30</span>;
            <span className="hljs-keyword">if</span> (counter ==={" "}
            <span className="hljs-number">30</span>) &#123;
            <span className="hljs-keyword">let</span> counter ={" "}
            <span className="hljs-number">31</span>; console.
            <span className="hljs-built_in">log</span>(counter);{" "}
            <span className="hljs-comment">// 31</span>
            &#125; console.<span className="hljs-built_in">log</span>(counter);{" "}
            <span className="hljs-comment">
              // 30 (because the variable in if block won't exist here)
            </span>
          </code>
        </pre> */}

        <pre>
  <code className="lang-javascript">
{`    let counter = 30;
             if (counter === 30) {
               let counter = 31;
               console.log(counter); // 31
             }
             console.log(counter); // 30`}
  </code>
</pre>

        {/* <!-- 18 --> */}

        <h4 id="18-what-is-the-difference-between-let-and-var">
          18. What is the difference between let and var?
        </h4>
        <p>You can list out the differences in a tabular format</p>
        <table>
          <thead>
            <tr>
              <th>var</th>
              <th>let</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>It has been available from the beginning of JavaScript</td>
              <td>Introduced as part of ES6</td>
            </tr>
            <tr>
              <td>It has function scope</td>
              <td>It has block scope</td>
            </tr>
            <tr>
              <td>Variable declaration will be hoisted</td>
              <td>Hoisted but not initialized</td>
            </tr>
            <tr>
              <td>
                It is possible to re-declare the variable in the same scope
              </td>
              <td>It is not possible to re-declare the variable</td>
            </tr>
          </tbody>
        </table>
        <br />
        {/* <pre>
          <code className="lang-javascript">
            {" "}
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">userDetails</span>(
              <span className="hljs-params">username</span>){" "}
            </span>
            &#123;
            <span className="hljs-keyword">if</span> (username) &#123;
            <span className="hljs-built_in">console</span>.log(salary);{" "}
            <span className="hljs-comment">// undefined due to hoisting</span>
            <span className="hljs-built_in">console</span>.log(age);{" "}
            <span className="hljs-comment">
              // ReferenceError: Cannot access 'age' before initialization
            </span>
            <span className="hljs-keyword">let</span> age ={" "}
            <span className="hljs-number">30</span>;
            <span className="hljs-keyword">var</span> salary ={" "}
            <span className="hljs-number">10000</span>; &#125;
            <span className="hljs-built_in">console</span>.log(salary);{" "}
            <span className="hljs-comment">
              //10000 (accessible due to function scope)
            </span>
            <span className="hljs-built_in">console</span>.log(age);{" "}
            <span className="hljs-comment">
              //error: age is not defined(due to block scope)
            </span>
            &#125; userDetails(<span className="hljs-string">"John"</span>);
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`function userDetails(username) {
  if (username) {
    console.log(salary); // undefined due to hoisting
    console.log(age);    // ReferenceError: Cannot access 'age' before initialization
    let age = 30;
    var salary = 10000;
  }
  console.log(salary); // 10000 (accessible due to function scope)
  console.log(age);    // error: age is not defined (due to block scope)
}
userDetails("John");`}
  </code>
</pre>


        {/* <!-- 19 --> */}
        <h4 id="19-what-is-the-reason-to-choose-the-name-let-as-a-keyword">
          19. What is the reason to choose the name let as a keyword?
        </h4>
        <p>
          <code>let</code> is a mathematical statement that was adopted by early
          programming languages like
          <strong>Scheme</strong> and <strong>Basic</strong>. It has been
          borrowed from dozens of other languages that use
          <code>let</code> already as a traditional keyword as close to{" "}
          <code>var</code> as possible.
        </p>

        {/* <!-- 20 --> */}
        <h4 id="20-how-do-you-redeclare-variables-in-a-switch-block-without-an-error">
          20. How do you redeclare variables in a switch block without an error?
        </h4>
        <p>
          If you try to redeclare variables in a <code>switch block</code> then
          it will cause errors because there is only one block. For example, the
          below code block throws a syntax error as below,
        </p>
        {/* <pre>
          <code className="lang-javascript">
            {" "}
            <span className="hljs-keyword">let</span> counter ={" "}
            <span className="hljs-number">1</span>;
            <span className="hljs-keyword">switch</span> (x) &#123;
            <span className="hljs-keyword">case</span>{" "}
            <span className="hljs-number">0</span>:
            <span className="hljs-keyword">let</span> name;
            <span className="hljs-keyword">break</span>;
            <span className="hljs-keyword">case</span>{" "}
            <span className="hljs-number">1</span>:
            <span className="hljs-keyword">let</span> name;{" "}
            <span className="hljs-comment">// SyntaxError for redeclaration.</span>
            <span className="hljs-keyword">break</span>; &#125;
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`let counter = 1;

switch (x) {
  case 0:
    let name;
    break;

  case 1:
    let name; // SyntaxError for redeclaration
    break;
}`}
  </code>
</pre>

        <p>
          To avoid this error, you can create a nested block inside a case
          clause and create a new block scoped lexical environment.
        </p>
        {/* <pre>
          <code className="lang-javascript">
            {" "}
            <span className="hljs-keyword">let</span> counter ={" "}
            <span className="hljs-number">1</span>;
            <span className="hljs-keyword">switch</span> (x) &#123;
            <span className="hljs-keyword">case</span>{" "}
            <span className="hljs-number">0</span>: &#123;
            <span className="hljs-keyword">let</span> name;
            <span className="hljs-keyword">break</span>; &#125;
            <span className="hljs-keyword">case</span>{" "}
            <span className="hljs-number">1</span>: &#123;
            <span className="hljs-keyword">let</span> name;{" "}
            <span className="hljs-comment">
              // No SyntaxError for redeclaration.
            </span>
            <span className="hljs-keyword">break</span>; &#125; &#125;
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`let counter = 1;

switch (x) {
  case 0: {
    let name;
    break;
  }

  case 1: {
    let name; // No SyntaxError for redeclaration
    break;
  }
}`}
  </code>
</pre>


        {/* <!-- 21 --> */}
        <h4 id="21-what-is-the-temporal-dead-zone">
          21. What is the Temporal Dead Zone?
        </h4>
        <p>
          The Temporal Dead Zone is a behavior in JavaScript that occurs when
          declaring a variable with the let and const keywords, but not with
          var. In ECMAScript 6, accessing a <code>let</code> or{" "}
          <code>const</code> variable before its declaration (within its scope)
          causes a ReferenceError. The time span when that happens, between the
          creation of a variable’s binding and its declaration, is called the
          temporal dead zone.
        </p>
        <p>Let&#39;s see this behavior with an example,</p>
        {/* <pre>
          <code className="lang-javascript">
            {" "}
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">somemethod</span>(
              <span className="hljs-params"></span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">console</span>.log(counter1);{" "}
            <span className="hljs-comment">// undefined</span>
            <span className="hljs-built_in">console</span>.log(counter2);{" "}
            <span className="hljs-comment">// ReferenceError</span>
            <span className="hljs-keyword">var</span> counter1 ={" "}
            <span className="hljs-number">1</span>;
            <span className="hljs-keyword">let</span> counter2 ={" "}
            <span className="hljs-number">2</span>; &#125;
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`function somemethod() {
  console.log(counter1); // undefined
  console.log(counter2); // ReferenceError
  var counter1 = 1;
  let counter2 = 2;
}`}
  </code>
</pre>

        {/* <!-- 22 --> */}
        <h4 id="22-what-is-an-iife-immediately-invoked-function-expression-">
          22. What is an IIFE (Immediately Invoked Function Expression)?
        </h4>
        <p>
          IIFE (Immediately Invoked Function Expression) is a JavaScript
          function that runs as soon as it is defined. The signature of it would
          be as below,
        </p>
        {/* <pre>
          <code className="lang-javascript">
            (<span className="hljs-name">function</span> () &#123; // logic here
            &#125;)()<span className="hljs-comment">;</span>
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`(function () {
  // logic here
})();`}
  </code>
</pre>

        <p>
          The primary reason to use an IIFE is to obtain data privacy because
          any variables declared within the IIFE cannot be accessed by the
          outside world. i.e, If you try to access variables from the IIFE then
          it throws an error as below,
        </p>
        {/* <pre>
          <code className="lang-javascript">
            (
            <span className="hljs-function">
              <span className="hljs-keyword">function</span> (
              <span className="hljs-params"></span>){" "}
            </span>
            &#123;
            <span className="hljs-keyword">var</span> message ={" "}
            <span className="hljs-string">"IIFE"</span>;
            <span className="hljs-built_in">console</span>.log(message); &#125;)();
            <span className="hljs-built_in">console</span>.log(message);{" "}
            <span className="hljs-comment">//Error: message is not defined</span>
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`(function () {
  var message = "IIFE";
  console.log(message);
})();
console.log(message); // Error: message is not defined`}
  </code>
</pre>


        {/* <!-- 23 --> */}
        <h4 id="23-how-do-you-decode-or-encode-a-url-in-javascript-">
          23. How do you decode or encode a URL in JavaScript?
        </h4>
        <p>
          <code>encodeURI()</code> function is used to encode an URL. This
          function requires a URL string as a parameter and return that encoded
          string.
          <code>decodeURI()</code> function is used to decode an URL. This
          function requires an encoded URL string as parameter and return that
          decoded string.
        </p>
        <p>
          <strong>Note:</strong> If you want to encode characters such as{" "}
          <code>/ ? : @ &amp; = + $ #</code> then you need to use{" "}
          <code>encodeURIComponent()</code>.
        </p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-keyword">let</span>{" "}
            <span className="hljs-attr">uri</span> ={" "}
            <span className="hljs-string">
              "employeeDetails?name=john&amp;occupation=manager"
            </span>
            ;<span className="hljs-keyword">let</span>{" "}
            <span className="hljs-attr">encoded_uri</span> = encodeURI(uri);
            <span className="hljs-keyword">let</span>{" "}
            <span className="hljs-attr">decoded_uri</span> = decodeURI(encoded_uri);
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`let uri = "employeeDetails?name=john&occupation=manager";
let encoded_uri = encodeURI(uri);let decoded_uri = decodeURI(encoded_uri);`}
  </code>
</pre>


        {/* <!-- 24 --> */}
        <h4 id="24-what-is-memoization">24. What is memoization?</h4>
        <p>
          Memoization is a functional programming technique which attempts to
          increase a function’s performance by caching its previously computed
          results. Each time a memoized function is called, its parameters are
          used to index the cache. If the data is present, then it can be
          returned, without executing the entire function. Otherwise the
          function is executed and then the result is added to the cache.
          Let&#39;s take an example of adding function with memoization,
        </p>
        {/* <pre>
          <code className="lang-javascript">
            {" "}
            <span className="hljs-keyword">const</span> memoizAddition ={" "}
            <span className="hljs-function">
              <span className="hljs-params">()</span> =&gt;
            </span>{" "}
            &#123;
            <span className="hljs-keyword">let</span> cache = &#123;&#125;;
            <span className="hljs-keyword">return</span>{" "}
            <span className="hljs-function">
              (<span className="hljs-params">value</span>) =&gt;
            </span>{" "}
            &#123;
            <span className="hljs-keyword">if</span> (value{" "}
            <span className="hljs-keyword">in</span> cache) &#123;
            <span className="hljs-built_in">console</span>.log(
            <span className="hljs-string">"Fetching from cache"</span>);
            <span className="hljs-keyword">return</span> cache[value];{" "}
            <span className="hljs-comment">
              // Here, cache.value cannot be used as property name starts with
              the number which is not a valid JavaScript identifier. Hence, can
              only be accessed using the square bracket notation.
            </span>
            &#125; <span className="hljs-keyword">else</span> &#123;
            <span className="hljs-built_in">console</span>.log(
            <span className="hljs-string">"Calculating result"</span>);
            <span className="hljs-keyword">let</span> result = value +{" "}
            <span className="hljs-number">20</span>; cache[value] = result;
            <span className="hljs-keyword">return</span> result; &#125; &#125;;
            &#125;;
            <span className="hljs-comment">
              // returned function from memoizAddition
            </span>
            <span className="hljs-keyword">const</span> addition = memoizAddition();
            <span className="hljs-built_in">console</span>.log(addition(
            <span className="hljs-number">20</span>));{" "}
            <span className="hljs-comment">//output: 40 calculated</span>
            <span className="hljs-built_in">console</span>.log(addition(
            <span className="hljs-number">20</span>));{" "}
            <span className="hljs-comment">//output: 40 cached</span>
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`const memoizAddition = () => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log("Fetching from cache");
      return cache[value];
    } else {
      console.log("Calculating result");
      let result = value + 20;
      cache[value] = result;
      return result;
    }
  };
};
// returned function from memoizAddition
const addition = memoizAddition();
console.log(addition(20)); // output: 40 calculated
console.log(addition(20)); // output: 40 cached`}
  </code>
</pre>


        {/* <!-- 25 --> */}
        <h4 id="25-what-is-hoisting">25. What is Hoisting?</h4>
        <p>
          Hoisting is a JavaScript mechanism where variables, function
          declarations and class are moved to the top of their scope before
          code execution. Remember that JavaScript only hoists declarations, not
          initialisation. Let&#39;s take a simple example of variable hoisting,
        </p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-built_in">console</span>.log(message);{" "}
            <span className="hljs-comment">//output : undefined</span>
            <span className="hljs-keyword">var</span> message ={" "}
            <span className="hljs-string">"The variable Has been hoisted"</span>;
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`console.log(message); // output: undefined
var message = "The variable has been hoisted";`}
  </code>
</pre>

        <p> The above code looks like as below to the interpreter,</p>
        {/* <pre>
          <code className="lang-javascript">
            var message<span className="hljs-comment">;</span>
            console.log(message)<span className="hljs-comment">;</span>
            message ={" "}
            <span className="hljs-string">"The variable Has been hoisted"</span>
            <span className="hljs-comment">;</span>
          </code>
        </pre> */}
  <pre>
  <code className="lang-javascript">
{`var message;
console.log(message);
message = "The variable has been hoisted";`}
  </code>
</pre>


        <p> In the same fashion, function declarations are hoisted too</p>
        {/* <pre>
          <code className="lang-javascript">
            message(<span className="hljs-string">"Good morning"</span>);{" "}
            <span className="hljs-comment">//Good morning</span>
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">message</span>(
              <span className="hljs-params">name</span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">console</span>.log(name); &#125;
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`message("Good morning"); // Good morning

function message(name) {
  console.log(name);
}`}
  </code>
</pre>

        <p>
          This hoisting makes functions to be safely used in code before they
          are declared.
        </p>

        {/* <!-- 26 --> */}

        <h4 id="26-what-are-classes-in-es6">26. What are classes in ES6?</h4>
        <p>
          In ES6, Javascript classes are primarily syntactic sugar over
          JavaScript’s existing prototype-based inheritance. For example, the
          prototype based inheritance written in function expression as below,
        </p>
        {/* <pre>
          <code className="lang-javascript">
            {" "}
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">Bike</span>(
              <span className="hljs-params">model, color</span>){" "}
            </span>
            &#123;
            <span className="hljs-keyword">this</span>.model = model;
            <span className="hljs-keyword">this</span>.color ={" "}
            <span className="hljs-built_in">color</span>; &#125;
            Bike.prototype.getDetails ={" "}
            <span className="hljs-function">
              <span className="hljs-keyword">function</span> (
              <span className="hljs-params"></span>){" "}
            </span>
            &#123;
            <span className="hljs-keyword">return</span>{" "}
            <span className="hljs-keyword">this</span>.model +{" "}
            <span className="hljs-string">" bike has"</span> +{" "}
            <span className="hljs-keyword">this</span>.color +{" "}
            <span className="hljs-string">" color"</span>; &#125;;
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`function Bike(model, color) {
  this.model = model;
  this.color = color;
}

Bike.prototype.getDetails = function () {
  return this.model + " bike has " + this.color + " color";
};`}
  </code>
</pre>

        <p> Whereas ES6 class can be defined as an alternative</p>
        {/* <pre>
          <code className="lang-javascript">
            {" "}
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">Bike</span>{" "}
            </span>
            &#123;
            <span className="hljs-keyword">constructor</span>(color, model) &#123;
            <span className="hljs-keyword">this</span>.color = color;
            <span className="hljs-keyword">this</span>.model = model; &#125;
            getDetails() &#123;
            <span className="hljs-keyword">return</span>{" "}
            <span className="hljs-keyword">this</span>.model +{" "}
            <span className="hljs-string">" bike has"</span> +{" "}
            <span className="hljs-keyword">this</span>.color +{" "}
            <span className="hljs-string">" color"</span>; &#125; &#125;
          </code>
        </pre> */}
        <pre>
  <code className="lang-javascript">
{`class Bike {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }

  getDetails() {
    return this.model + " bike has " + this.color + " color";
  }
}`}
  </code>
</pre>


        {/* <!-- 27 --> */}
        <h4 id="27-what-are-closures">27. What are closures?</h4>
        <p>
          A closure is the combination of a function and the lexical environment
          within which that function was declared. i.e, It is an inner function
          that has access to the outer or enclosing function’s variables. The
          closure has three scope chains
        </p>
        {/* <pre>
          <code>
            <span className="hljs-number">1</span>. Own scope where variables
            defined <span className="hljs-keyword">between </span>
            <span className="hljs-keyword">its </span>curly{" "}
            <span className="hljs-keyword">brackets</span>
            <span className="hljs-number">2</span>. Outer{" "}
            <span className="hljs-meta">function</span>’s variables
            <span className="hljs-number">3</span>.{" "}
            <span className="hljs-meta">Global</span> variables
          </code>
        </pre> */}
        <pre>
  <code>
{`1. Own scope where variables are defined between its curly brackets
2. Outer function’s variables
3. Global variables`}
  </code>
</pre>

        <p> Let&#39;s take an example of closure concept,</p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">Welcome</span>(
              <span className="hljs-params">name</span>){" "}
            </span>
            &#123;
            <span className="hljs-keyword">var</span> greetingInfo ={" "}
            <span className="hljs-function">
              <span className="hljs-keyword">function</span> (
              <span className="hljs-params">message</span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">console</span>.log(message +{" "}
            <span className="hljs-string">" "</span> + name); &#125;;
            <span className="hljs-keyword">return</span> greetingInfo; &#125;
            <span className="hljs-keyword">var</span> myFunction = Welcome(
            <span className="hljs-string">"John"</span>); myFunction(
            <span className="hljs-string">"Welcome "</span>);{" "}
            <span className="hljs-comment">//Output: Welcome John</span>
            myFunction(<span className="hljs-string">"Hello Mr."</span>);{" "}
            <span className="hljs-comment">//output: Hello Mr. John</span>
          </code>
        </pre> */}
        <pre>
  <code>
{`function Welcome(name) {
  var greetingInfo = function (message) {
    console.log(message + " " + name);
  };
  return greetingInfo;
}

var myFunction = Welcome("John");
myFunction("Welcome ");   // Output: Welcome John
myFunction("Hello Mr.");  // Output: Hello Mr. John`}
  </code>
</pre>

        <p>
          As per the above code, the inner function(i.e, greetingInfo) has
          access to the variables in the outer function scope(i.e, Welcome) even
          after the outer function has returned.
        </p>

        {/* <!-- 28 --> */}

        <h4 id="28-what-are-modules">28. What are modules?</h4>
        <p>
          {" "}
          Modules refer to small units of independent, reusable code and also
          act as the foundation of many JavaScript design patterns. Most of the
          JavaScript modules export an object literal, a function, or a
          constructor
        </p>

        {/* <!-- 29 --> */}
        <h4 id="29-why-do-you-need-modules">29. Why do you need modules?</h4>
        <p>
          Below are the list of benefits using modules in javascript ecosystem
        </p>
        {/* <pre>
          <code>
            <span className="hljs-bullet">1. </span>Maintainability
            <span className="hljs-bullet">2. </span>Reusability
            <span className="hljs-bullet">3. </span>Namespacing
          </code>
        </pre> */}
        <pre>
  <code>
{`1. Maintainability
2. Reusability
3. Namespacing`}
  </code>
</pre>


        {/* <!-- 30 --> */}
        <h4 id="30-what-is-scope-in-javascript">
          30. What is scope in javascript?
        </h4>
        <p>
          Scope is the accessibility of variables, functions, and objects in
          some particular part of your code during runtime. In other words,
          scope determines the visibility of variables and other resources in
          areas of your code.
        </p>

        {/* <!-- 31 --> */}
        <h4 id="31-what-is-a-service-worker">31. What is a service worker?</h4>
        <p>
          A Service worker is basically a script (JavaScript file) that runs in
          the background, separate from a web page and provides features that
          don&#39;t need a web page or user interaction. Some of the major
          features of service workers are Rich offline experiences(offline first
          web application development), periodic background syncs, push
          notifications, intercept and handle network requests and
          programmatically managing a cache of responses.
        </p>

        {/* <!-- 32 --> */}
        <h4 id="32-how-do-you-manipulate-dom-using-a-service-worker">
          32. How do you manipulate DOM using a service worker?
        </h4>
        <p>
          Service worker can&#39;t access the DOM directly. But it can
          communicate with the pages it controls by responding to messages sent
          via the <code>postMessage</code> interface, and those pages can
          manipulate the DOM.
        </p>

        {/* <!-- 33 --> */}
        <h4 id="33-how-do-you-reuse-information-across-service-worker-restarts">
          33. How do you reuse information across service worker restarts?
        </h4>
        <p>
          The problem with service worker is that it gets terminated when not in
          use, and restarted when it&#39;s next needed, so you cannot rely on
          global state within a service worker&#39;s <code>onfetch</code> and{" "}
          <code>onmessage</code>
          handlers. In this case, service workers will have access to IndexedDB
          API in order to persist and reuse across restarts.
        </p>

        {/* <!-- 34 --> */}
        <h4 id="34-what-is-indexeddb">34. What is IndexedDB?</h4>
        <p>
          IndexedDB is a low-level API for client-side storage of larger amounts
          of structured data, including files/blobs. This API uses indexes to
          enable high-performance searches of this data.
        </p>

        {/* <!-- 35 --> */}
        <h4 id="35-what-is-web-storage">35. What is web storage?</h4>
        <p>
          Web storage is an API that provides a mechanism by which browsers can
          store key/value pairs locally within the user&#39;s browser, in a much
          more intuitive fashion than using cookies. The web storage provides
          two mechanisms for storing data on the client.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-number">1</span>. <b>Local storage:</b> It stores{" "}
            <span className="hljs-keyword">data</span>{" "}
            <span className="hljs-keyword">for</span> current origin{" "}
            <span className="hljs-keyword">with</span> no expiration date.
            <span className="hljs-number">2</span>. <b>Session storage:</b> It
            stores <span className="hljs-keyword">data</span>{" "}
            <span className="hljs-keyword">for</span> one session{" "}
            <span className="hljs-built_in">and</span> the{" "}
            <span className="hljs-keyword">data</span>{" "}
            <span className="hljs-keyword">is</span> lost{" "}
            <span className="hljs-keyword">when</span> the browser tab{" "}
            <span className="hljs-keyword">is</span> closed.
          </code>
        </pre> */}
        <pre>
  <code>
{`1. Local storage: It stores data for the current origin with no expiration date.
2. Session storage: It stores data for one session and the data is lost when the browser tab is closed.`}
  </code>
</pre>


        {/* <!-- 36 --> */}
        <h4 id="36-what-is-a-post-message">36. What is a post message?</h4>
        <p>
          Post message is a method that enables cross-origin communication
          between Window objects.(i.e, between a page and a pop-up that it
          spawned, or between a page and an iframe embedded within it).
          Generally, scripts on different pages are allowed to access each other
          if and only if the pages follow same-origin policy(i.e, pages share
          the same protocol, port number, and host).
        </p>

        {/* <!-- 37 --> */}
        <h4 id="37-what-is-a-cookie">37. What is a Cookie</h4>
        <p>
          A cookie is a piece of data that is stored on your computer to be
          accessed by your browser. Cookies are saved as key/value pairs. For
          example, you can create a cookie named username as below,
        </p>
        <pre>
          <code className="lang-javascript">
            document.cookie = <span className="hljs-string">"username=John"</span>
            <span className="hljs-comment">;</span>
          </code>
        </pre>
        <p>
          {" "}
          <img
            className="img"
            src={images.Cookies}
            alt="Screenshot"
          />
        </p>

        {/* <!-- 38 --> */}
        <h4 id="38-why-do-you-need-a-cookie">38. Why do you need a Cookie?</h4>
        <p>
          Cookies are used to remember information about the user profile(such
          as username). It basically involves two steps,
        </p>
        {/* <pre>
          <code>
            <span className="hljs-number">1</span>. When a{" "}
            <span className="hljs-keyword">user</span>{" "}
            <span className="hljs-title">visits</span> a web page, the{" "}
            <span className="hljs-keyword">user</span>{" "}
            <span className="hljs-title">profile</span> can be stored{" "}
            <span className="hljs-keyword">in</span> a cookie.
            <span className="hljs-number">2</span>. Next time the{" "}
            <span className="hljs-keyword">user</span>{" "}
            <span className="hljs-title">visits</span> the page, the cookie
            remembers the <span className="hljs-keyword">user</span>{" "}
            <span className="hljs-title">profile</span>.
          </code>
        </pre> */}
        <pre>
  <code>
{`1.When a user visits a web page, the user profile can be stored in a cookie.
2.Next time the user visits the page, the cookie remembers the user profile.`}
  </code>
</pre>

        {/* <!-- 39 --> */}
        <h4 id="39-what-are-the-options-in-a-cookie">
          39. What are the options in a cookie?
        </h4>
        <p>There are few below options available for a cookie,</p>
        <pre>
          <code>
            <span className="hljs-number">1.</span> By{" "}
            <span className="hljs-keyword">default</span>, the cookie{" "}
            <span className="hljs-keyword">is</span> deleted{" "}
            <span className="hljs-keyword">when</span> the browser{" "}
            <span className="hljs-keyword">is</span> closed but you can change{" "}
            <span className="hljs-keyword">this</span> behavior{" "}
            <span className="hljs-keyword">by</span> setting expiry date (
            <span className="hljs-keyword">in</span> UTC time
          </code>
        </pre>
        <br/>
        <pre>
          <code className="lang-javascript">
            document.cookie ={" "}
            <span className="hljs-string">
              "username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC"
            </span>
            <span className="hljs-comment">;</span>
          </code>
        </pre>
        <br/>
        <pre>
          <code>
            <span className="hljs-number">1.</span> By default,{" "}
            <span className="hljs-keyword">the</span> cookie belongs{" "}
            <span className="hljs-built_in">to</span>{" "}
            <span className="hljs-keyword">a</span> current page. But you can tell{" "}
            <span className="hljs-keyword">the</span> browser what path{" "}
            <span className="hljs-keyword">the</span> cookie belongs{" "}
            <span className="hljs-built_in">to</span>{" "}
            <span className="hljs-keyword">using</span>{" "}
            <span className="hljs-keyword">a</span> path parameter.
          </code>
        </pre>
        <br/>
        <pre>
          <code className="lang-javascript">
            document.cookie ={" "}
            <span className="hljs-string">"username=John; path=/services"</span>
            <span className="hljs-comment">;</span>
          </code>
        </pre>

        {/* <!-- 40 --> */}
        <h4 id="40-how-do-you-delete-a-cookie">
          40. How do you delete a cookie?
        </h4>
        <p>
          You can delete a cookie by setting the expiry date as a passed date.
          You don&#39;t need to specify a cookie value in this case. For
          example, you can delete a username cookie in the current page as
          below.
        </p>
        {/* <pre>
          <code className="lang-javascript">
            document.cookie =
            <span className="hljs-string">
              "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;"
            </span>
            <span className="hljs-comment">;</span>
          </code>
        </pre> */}
        <pre>
  <code>
    {`document.cookie = 
    "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";`}
  </code>
</pre>

        <p>
          {" "}
          <strong>Note:</strong> You should define the cookie path option to
          ensure that you delete the right cookie. Some browsers doesn&#39;t
          allow to delete a cookie unless you specify a path parameter.
        </p>

        {/* <!-- 41 --> */}
        <h4 id="41-what-are-the-differences-between-cookie-local-storage-and-session-storage">
          41. What are the differences between cookie, local storage and session
          storage?
        </h4>
        <p>
          Below are some of the differences between cookie, local storage and
          session storage,
        </p>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Cookie</th>
              <th>Local storage</th>
              <th>Session storage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Accessed on client or server side</td>
              <td>Both server-side &amp; client-side</td>
              <td>client-side only</td>
              <td>client-side only</td>
            </tr>
            <tr>
              <td>Lifetime</td>
              <td>As configured using Expires option</td>
              <td>until deleted</td>
              <td>until tab is closed</td>
            </tr>
            <tr>
              <td>SSL support</td>
              <td>Supported</td>
              <td>Not supported</td>
              <td>Not supported</td>
            </tr>
            <tr>
              <td>Maximum data size</td>
              <td>4KB</td>
              <td>5 MB</td>
              <td>5MB</td>
            </tr>
          </tbody>
        </table>
        <br />

        {/* <!--  --> */}

        {/* <!-- 42 --> */}

        <h4 id="42-what-is-the-main-difference-between-localstorage-and-sessionstorage">
          42. What is the main difference between localStorage and
          sessionStorage
        </h4>
        <p>
          LocalStorage is the same as SessionStorage but it persists the data
          even when the browser is closed and reopened(i.e it has no expiration
          time) whereas in sessionStorage data gets cleared when the page
          session ends.
        </p>
        <h4 id="43-how-do-you-access-web-storage">
          43. How do you access web storage
        </h4>
        <p>
          The Window object implements the <code>WindowLocalStorage</code> and{" "}
          <code>WindowSessionStorage</code> objects which has{" "}
          <code>localStorage</code>(window.localStorage) and{" "}
          <code>sessionStorage</code>(window.sessionStorage) properties
          respectively. These properties create an instance of the Storage
          object, through which data items can be set, retrieved and removed for
          a specific domain and storage type (session or local). For example,
          you can read and write on local storage objects as below
        </p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-built_in">local</span>Storage.setItem(
            <span className="hljs-string">"logo"</span>, document.getElementById(
            <span className="hljs-string">"logo"</span>).value);
            <span className="hljs-built_in">local</span>Storage.getItem(
            <span className="hljs-string">"logo"</span>);
          </code>
        </pre> */}
        <pre>
  <code>
    {`localStorage.setItem("logo", document.getElementById("logo").value);
localStorage.getItem("logo");`}
  </code>
</pre>


        {/* <!-- 44 --> */}
        <h4 id="44-what-are-the-methods-available-on-session-storage">
          44. What are the methods available on session storage?
        </h4>
        <p>
          The session storage provided methods for reading, writing and clearing
          the session data
        </p>
        {/* <pre>
          <code className="lang-javascript">
            {" "}
            // Save <span className="hljs-meta">data</span> to sessionStorage
            sessionStorage.setItem(<span className="hljs-string">"key"</span>,{" "}
            <span className="hljs-string">"value"</span>)
            <span className="hljs-comment">;</span>
            // <span className="hljs-meta">Get</span> saved{" "}
            <span className="hljs-meta">data</span> from sessionStorage let{" "}
            <span className="hljs-meta">data</span> = sessionStorage.getItem(
            <span className="hljs-string">"key"</span>)
            <span className="hljs-comment">;</span>
            // Remove saved <span className="hljs-meta">data</span> from
            sessionStorage sessionStorage.removeItem(
            <span className="hljs-string">"key"</span>)
            <span className="hljs-comment">;</span>
            // Remove all saved <span className="hljs-meta">data</span> from
            sessionStorage sessionStorage.clear()
            <span className="hljs-comment">;</span>
          </code>
        </pre> */}
        <pre>
  <code>
    {`// Save data to sessionStorage
sessionStorage.setItem("key", "value");

// Get saved data from sessionStorage
let data = sessionStorage.getItem("key");

// Remove saved data from sessionStorage
sessionStorage.removeItem("key");

// Remove all saved data from sessionStorage
sessionStorage.clear();`}
  </code>
</pre>


        {/* <!-- 45 --> */}
        <h4 id="45-what-is-a-storage-event-and-its-event-handler">
          45. What is a storage event and its event handler?
        </h4>
        <p>
          The StorageEvent is an event that fires when a storage area has been
          changed in the context of another document. Whereas onstorage property
          is an EventHandler for processing storage events. The syntax would be
          as below
        </p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-built_in">window</span>.onstorage ={" "}
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>
              <span className="hljs-title">Ref</span>
            </span>
            ;
          </code>
        </pre> */}
        <pre>
  <code>
    {`window.onstorage = function Ref()`}
  </code>
</pre>

        <p>
          Let&#39;s take the example usage of onstorage event handler which logs
          the storage key and it&#39;s values
        </p>
        {/* <pre>
          <code className="lang-javascript">
            {" "}
            <span className="hljs-built_in">window</span>.onstorage ={" "}
            <span className="hljs-function">
              <span className="hljs-keyword">function</span> (
              <span className="hljs-params">e</span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">console</span>.log(
            <span className="hljs-string">"The "</span> + e.key +
            <span className="hljs-string">" key has been changed from "</span> +
            e.oldValue +<span className="hljs-string">" to "</span> + e.newValue +
            <span className="hljs-string">"."</span>
            ); &#125;;
          </code>
        </pre> */}
        <pre>
  <code>
    {`window.onstorage = function (e) {
                     console.log(
                            "The " + 
                            e.key + 
                            " key has been changed from " + 
                            e.oldValue + 
                            " to " + 
                            e.newValue + 
                            "."
                   );
                };`}
  </code>
</pre>

        <h4 id="46-why-do-you-need-web-storage">
          46. Why do you need web storage
        </h4>
        <p>
          Web storage is more secure, and large amounts of data can be stored
          locally, without affecting website performance. Also, the information
          is never transferred to the server. Hence this is a more recommended
          approach than Cookies.
        </p>
        <h4 id="47-how-do-you-check-web-storage-browser-support">
          47. How do you check web storage browser support
        </h4>
        <p>
          You need to check browser support for localStorage and sessionStorage
          before using web storage,
        </p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-keyword">if</span> (typeof{" "}
            <span className="hljs-type">Storage</span> !== "undefined") &#123; //{" "}
            <span className="hljs-type">Code</span> for localStorage/sessionStorage.
            &#125; else &#123; // <span className="hljs-type">Sorry</span>!{" "}
            <span className="hljs-type">No</span> <span className="hljs-type">Web</span>{" "}
            <span className="hljs-type">Storage</span> support.. &#125;
          </code>
        </pre> */}

        <pre>
  <code>
    {`if (typeof Storage !== "undefined") {
  // Code for localStorage/sessionStorage.
} else {
  // Sorry! No Web Storage support.
}`}
  </code>
</pre>


        {/* <!-- 48 --> */}

        <h4 id="48-how-do-you-check-web-workers-browser-support">
          48. How do you check web workers browser support
        </h4>
        <p>You need to check browser support for web workers before using it</p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-keyword">if</span> (typeof{" "}
            <span className="hljs-type">Worker</span> !== "undefined") &#123; //
            code for <span className="hljs-type">Web</span> worker support. &#125;
            else &#123; // <span className="hljs-type">Sorry</span>!{" "}
            <span className="hljs-type">No</span> <span className="hljs-type">Web</span>{" "}
            <span className="hljs-type">Worker</span> support.. &#125;
          </code>
        </pre> */}
        <pre>
  <code>
    {`if (typeof Worker !== "undefined") {
  // code for Web worker support.
} else {
  // Sorry! No Web Worker support.
}`}
  </code>
</pre>


        {/* <!-- 49 --> */}

        <h4 id="49-give-an-example-of-a-web-worker">
          49. Give an example of a web worker
        </h4>
        <p>
          You need to follow below steps to start using web workers for counting
          example
        </p>
        <ol>
          <li>
            <p>
              Create a Web Worker File: You need to write a script to increment
              the count value. Let&#39;s name it as counter.js
            </p>
            {/* <pre>
              <code className="lang-javascript">
                let i = <span className="hljs-number">0</span>
                <span className="hljs-comment">;</span>
                function timedCount() &#123; i = i +{" "}
                <span className="hljs-number">1</span>
                <span className="hljs-comment">;</span>
                postMessage(i)<span className="hljs-comment">;</span>
                setTimeout(<span className="hljs-string">"timedCount()"</span>,{" "}
                <span className="hljs-number">500</span>)
                <span className="hljs-comment">;</span>
                &#125; timedCount()<span className="hljs-comment">;</span>
              </code>
            </pre> */}
            <pre>
  <code>
    {`let i = 0;
function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()", 500);
}
timedCount();`}
  </code>
</pre>
 
            <p>
              Here postMessage() method is used to post a message back to the
              HTML page
            </p>
          </li>
          <li>
            <p>
              Create a Web Worker Object: You can create a web worker object by
              checking for browser support. Let&#39;s name this file as
              web_worker_example.js
            </p>
            {/* <pre>
              <code className="lang-javascript">
                <span className="hljs-keyword">if</span> (
                <span className="hljs-keyword">typeof</span> w =={" "}
                <span className="hljs-string">"undefined"</span>) &#123; w ={" "}
                <span className="hljs-keyword">new</span> Worker(
                <span className="hljs-string">"counter.js"</span>); &#125;
              </code>
            </pre> */}
            <pre>
  <code>
    {`if (typeof w == "undefined") {
  w = new Worker("counter.js");
}`}
  </code>
</pre>

            <p>and we can receive messages from web worker</p>
            {/* <pre>
              <code className="lang-javascript">
                w.onmessage ={" "}
                <span className="hljs-function">
                  <span className="hljs-keyword">function</span> (
                  <span className="hljs-params">event</span>){" "}
                </span>
                &#123;
                <span className="hljs-built_in">document</span>.getElementById(
                <span className="hljs-string">"message"</span>).innerHTML =
                event.data; &#125;;
              </code>
            </pre> */}
            <pre>
  <code>
    {`w.onmessage = function(event) {
  document.getElementById("message").innerHTML = event.data;
};`}
  </code>
</pre>

          </li>
          <li>
            <p>
              Terminate a Web Worker: Web workers will continue to listen for
              messages (even after the external script is finished) until it is
              terminated. You can use the terminate() method to terminate
              listening to the messages.
            </p>
            <pre>
              <code className="lang-javascript">
                w.terminate()<span className="hljs-comment">;</span>
              </code>
            </pre>
          </li>
          <li>
            <p>
              Reuse the Web Worker: If you set the worker variable to undefined
              you can reuse the code
            </p>
            <pre>
              <code className="lang-javascript">
                <span className="hljs-attribute">w</span> = undefined
                <span className="hljs-comment">;</span>
              </code>
            </pre>
          </li>
        </ol>

        {/* <!-- 50 --> */}
        <h4 id="50-what-are-the-restrictions-of-web-workers-on-dom">
          50. What are the restrictions of web workers on DOM
        </h4>
        <p>
          WebWorkers don&#39;t have access to below javascript objects since
          they are defined in an external files
        </p>
        <ol>
          <li>Window object</li>
          <li>Document object</li>
          <li>Parent object</li>
        </ol>

        {/* <!-- 52 --> */}
        <h4 id="51-what-is-a-promise">51. What is a promise?</h4>
        <p>
          A promise is an object that may produce a single value some time in
          the future with either a resolved value or a reason that it’s not
          resolved(for example, network error). It will be in one of the 3
          possible states: fulfilled, rejected, or pending.
        </p>
        <p>The syntax of Promise creation looks like below,</p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-keyword">const</span> promise ={" "}
            <span className="hljs-keyword">new</span>{" "}
            <span className="hljs-built_in">Promise</span>(
            <span className="hljs-function">
              <span className="hljs-keyword">function</span> (
              <span className="hljs-params">resolve, reject</span>){" "}
            </span>
            &#123;
            <span className="hljs-comment">// promise description</span>
            &#125;);
          </code>
        </pre> */}
        <pre>
  <code>
    {`const promise = new Promise(function(resolve, reject) {
  // promise description
});`}
  </code>
</pre>

        <p> The usage of a promise would be as below,</p>
        {/* <pre>
          <code className="lang-javascript">
            const promise = <span className="hljs-keyword">new</span> Promise(
            <span className="hljs-function">
              <span className="hljs-params">(resolve)</span> =&gt;
            </span>{" "}
            &#123; setTimeout(
            <span className="hljs-function">
              <span className="hljs-params">()</span> =&gt;
            </span>{" "}
            &#123; resolve(<span className="hljs-string">"I'm a Promise!"</span>);
            &#125;, <span className="hljs-number">5000</span>); &#125;,
            <span className="hljs-function">
              <span className="hljs-params">(reject)</span> =&gt;
            </span>{" "}
            &#123;&#125; ); promise.<span className="hljs-keyword">then</span>(
            <span className="hljs-function">
              <span className="hljs-params">(value)</span> =&gt;
            </span>{" "}
            <span className="hljs-built_in">console</span>.log(value));
          </code>
        </pre> */}
        <pre>
  <code>
    {`const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("I'm a Promise!");
  }, 5000);
}, (reject) => {});

promise.then((value) => console.log(value));`}
  </code>
</pre>

        <p>The action flow of a promise will be as below,</p>
        <p>
          <img
            className="promise"
            src={images.Promise}
            alt="Screenshot"
          />
            {" "}
        
        </p>

        {/* <!-- 52 --> */}
        <h4 id="52-why-do-you-need-a-promise">
          52. Why do you need a promise?
        </h4>
        <p>
          Promises are used to handle asynchronous operations. They provide an
          alternative approach for callbacks by reducing the callback hell and
          writing the cleaner code.
        </p>

        {/* <!-- 53 --> */}
        <h4 id="53-what-are-the-three-states-of-promise">
          53. What are the three states of promise?
        </h4>
        <p>Promises have three states:</p>
        <ol>
          <li>
            <strong>Pending:</strong> This is an initial state of the Promise
            before an operation begins
          </li>
          <li>
            <strong>Fulfilled:</strong> This state indicates that the specified
            operation was completed.
          </li>
          <li>
            <strong>Rejected:</strong> This state indicates that the operation
            did not complete. In this case an error value will be thrown.
          </li>
        </ol>

        {/* <!-- 54 --> */}

        <h4 id="54-what-is-a-callback-function">
          54. What is a callback function?
        </h4>
        <p>
          A callback function is a function passed into another function as an
          argument. This function is invoked inside the outer function to
          complete an action. Let&#39;s take a simple example of how to use
          callback function
        </p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">callbackFunction</span>(
              <span className="hljs-params">name</span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">console</span>.log(
            <span className="hljs-string">"Hello "</span> + name); &#125;
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">outerFunction</span>(
              <span className="hljs-params">callback</span>){" "}
            </span>
            &#123;
            <span className="hljs-keyword">let</span> name = prompt(
            <span className="hljs-string">"Please enter your name."</span>);
            callback(name); &#125; outerFunction(callbackFunction);
          </code>
        </pre> */}

        <pre>
  <code>
    {`function callbackFunction(name) {
      console.log("Hello " + name);
    }
      
    function outerFunction(callback) {
      let name = prompt("Please enter your name.");
        callback(name);
      }
      
    outerFunction(callbackFunction);`}
  </code>
</pre>
        
        <h4 id="55-why-do-we-need-callbacks">55. Why do we need callbacks?</h4>
        <p>
          The callbacks are needed because javascript is an event driven
          language. That means instead of waiting for a response javascript will
          keep executing while listening for other events. Let&#39;s take an
          example with the first function invoking an API call(simulated by
          setTimeout) and the next function which logs the message.
        </p>
        {/* <pre>
          <code className="lang-javascript">
            {" "}
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">firstFunction</span>(
              <span className="hljs-params"></span>){" "}
            </span>
            &#123;
            <span className="hljs-comment">// Simulate a code delay</span>
            setTimeout(
            <span className="hljs-function">
              <span className="hljs-keyword">function</span> (
              <span className="hljs-params"></span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">console</span>.log(
            <span className="hljs-string">"First function called"</span>); &#125;,{" "}
            <span className="hljs-number">1000</span>); &#125;
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">secondFunction</span>(
              <span className="hljs-params"></span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">console</span>.log(
            <span className="hljs-string">"Second function called"</span>); &#125;
            firstFunction(); secondFunction(); Output;
            <span className="hljs-comment">// Second function called</span>
            <span className="hljs-comment">// First function called</span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`function firstFunction() {
            // Simulate a code delay
            setTimeout(function () {
              console.log("First function called");
            }, 1000);
          }
          function secondFunction() {
            console.log("Second function called");
          }
          firstFunction();
          secondFunction();
      
          Output;
          // Second function called
          // First function called`}
          </code>
        </pre>
        <p>
          As observed from the output, javascript didn&#39;t wait for the
          response of the first function and the remaining code block got
          executed. So callbacks are used in a way to make sure that certain
          code doesn’t execute until the other code finishes execution.
        </p>

        {/* <!-- 56 --> */}
        <h4 id="56-what-is-a-callback-hell">56. What is a callback hell?</h4>
        <p>
          Callback Hell is an anti-pattern with multiple nested callbacks which
          makes code hard to read and debug when dealing with asynchronous
          logic. The callback hell looks like below,
        </p>
        {/* <pre>
          <code className="lang-javascript">
            async1(
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>
              <span className="hljs-params">()</span>
            </span>
            &#123; async2(
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>
              <span className="hljs-params">()</span>
            </span>
            &#123; async3(
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>
              <span className="hljs-params">()</span>
            </span>
            &#123; async4(
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>
              <span className="hljs-params">()</span>
            </span>
            &#123; .... &#125;); &#125;); &#125;); &#125;);
          </code>
        </pre> */}

        <pre>
          <code>
            {`async1(function(){
        async2(function(){
        async3(function(){
        async4(function(){
              ....
            });
          });
        });
      });`}
          </code>
        </pre>

        {/* <!-- 57 --> */}
        <h4 id="57-what-are-server-sent-events">
          57. What are server-sent events?
        </h4>
        <p>
          Server-sent events (SSE) is a server push technology enabling a
          browser to receive automatic updates from a server via HTTP connection
          without resorting to polling. These are a one way communications
          channel - events flow from server to client only. This has been used
          in Facebook/Twitter updates, stock price updates, news feeds etc.
        </p>

        {/* <!-- 58 --> */}
        <h4 id="58-how-do-you-receive-server-sent-event-notifications">
          58. How do you receive server-sent event notifications?
        </h4>
        <p>
          The EventSource object is used to receive server-sent event
          notifications. For example, you can receive messages from server as
          below,
        </p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-keyword">if</span> (
            <span className="hljs-keyword">typeof</span> EventSource !=={" "}
            <span className="hljs-string">"undefined"</span>) &#123;
            <span className="hljs-keyword">var</span> source ={" "}
            <span className="hljs-keyword">new</span> EventSource(
            <span className="hljs-string">"sse_generator.js"</span>);
            source.onmessage ={" "}
            <span className="hljs-function">
              <span className="hljs-keyword">function</span> (
              <span className="hljs-params">event</span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">document</span>.getElementById(
            <span className="hljs-string">"output"</span>).innerHTML += event.data +{" "}
            <span className="hljs-string">"&lt;br&gt;"</span>; &#125;; &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`if (typeof EventSource !== "undefined") {
      var source = new EventSource("sse_generator.js");
      source.onmessage = function (event) {
      document.getElementById("output").innerHTML += event.data + "<br>";
     };
  }`}
          </code>
        </pre>

        {/* <!-- 59 --> */}
        <h4 id="59-how-do-you-check-browser-support-for-server-sent-events">
          59. How do you check browser support for server-sent events?
        </h4>
        <p>
          You can perform browser support for server-sent events before using it
          as below,
        </p>
        {/* <pre>
          <code className="lang-javascript">
            {" "}
            <span className="hljs-keyword">if</span> (typeof{" "}
            <span className="hljs-type">EventSource</span> !== "undefined") &#123;
            // <span className="hljs-type">Server</span>-sent events supported.{" "}
            <span className="hljs-type">Let</span>'s have some code here! &#125;
            else &#123; // <span className="hljs-type">No</span> server-sent events
            supported &#125;
          </code>
        </pre> */}

        <pre>
          <code>
            {` if (typeof EventSource !== "undefined") {
            // Server-sent events supported. Let's have some code here!
          } else {
            // No server-sent events supported
          }`}
          </code>
        </pre>

        {/* <!-- 61 --> */}

        <h4 id="61-what-are-the-main-rules-of-promise">
          61. What are the main rules of promise
        </h4>
        <p>A promise must follow a specific set of rules:</p>
        <ol>
          <li>
            A promise is an object that supplies a standard-compliant{" "}
            <code>.then()</code> method
          </li>
          <li>
            A pending promise may transition into either fulfilled or rejected
            state
          </li>
          <li>
            A fulfilled or rejected promise is settled and it must not
            transition into any other state.
          </li>
          <li>Once a promise is settled, the value must not change.</li>
        </ol>

        {/* <!-- 62 --> */}
        <h4 id="62-what-is-callback-in-callback">
          62. What is callback in callback?
        </h4>
        <p>
          You can nest one callback inside in another callback to execute the
          actions sequentially one by one. This is known as callbacks in
          callbacks.
        </p>
        {/* <pre>
          <code className="lang-javascript">
            {" "}
            loadScript(<span className="hljs-string">"/script1.js"</span>,{" "}
            <span className="hljs-function">
              <span className="hljs-keyword">function</span> (
              <span className="hljs-params">script</span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">console</span>.log(
            <span className="hljs-string">"first script is loaded"</span>);
            loadScript(<span className="hljs-string">"/script2.js"</span>,{" "}
            <span className="hljs-function">
              <span className="hljs-keyword">function</span> (
              <span className="hljs-params">script</span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">console</span>.log(
            <span className="hljs-string">"second script is loaded"</span>);
            loadScript(<span className="hljs-string">"/script3.js"</span>,{" "}
            <span className="hljs-function">
              <span className="hljs-keyword">function</span> (
              <span className="hljs-params">script</span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">console</span>.log(
            <span className="hljs-string">"third script is loaded"</span>);
            <span className="hljs-comment">// after all scripts are loaded</span>
            &#125;); &#125;); &#125;);
          </code>
        </pre> */}

        <pre>
          <code>
            {`loadScript("/script1.js", function (script) {
            console.log("first script is loaded");
      
            loadScript("/script2.js", function (script) {
              console.log("second script is loaded");
      
              loadScript("/script3.js", function (script) {
                console.log("third script is loaded");
                // after all scripts are loaded
              });
            });
          });`}
          </code>
        </pre>

        {/* <!-- 63 --> */}
        <h4 id="63-what-is-promise-chaining">63. What is promise chaining?</h4>
        <p>
          The process of executing a sequence of asynchronous tasks one after
          another using promises is known as Promise chaining. Let&#39;s take an
          example of promise chaining for calculating the final result,
        </p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-keyword">new</span>{" "}
            <span className="hljs-built_in">Promise</span>(
            <span className="hljs-function">
              <span className="hljs-keyword">function</span> (
              <span className="hljs-params">resolve, reject</span>){" "}
            </span>
            &#123; setTimeout(
            <span className="hljs-function">
              <span className="hljs-params">()</span> =&gt;
            </span>{" "}
            resolve(<span className="hljs-number">1</span>),{" "}
            <span className="hljs-number">1000</span>); &#125;) .then(
            <span className="hljs-function">
              <span className="hljs-keyword">function</span> (
              <span className="hljs-params">result</span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">console</span>.log(result);{" "}
            <span className="hljs-comment">// 1</span>
            <span className="hljs-keyword">return</span> result *{" "}
            <span className="hljs-number">2</span>; &#125;) .then(
            <span className="hljs-function">
              <span className="hljs-keyword">function</span> (
              <span className="hljs-params">result</span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">console</span>.log(result);{" "}
            <span className="hljs-comment">// 2</span>
            <span className="hljs-keyword">return</span> result *{" "}
            <span className="hljs-number">3</span>; &#125;) .then(
            <span className="hljs-function">
              <span className="hljs-keyword">function</span> (
              <span className="hljs-params">result</span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">console</span>.log(result);{" "}
            <span className="hljs-comment">// 6</span>
            <span className="hljs-keyword">return</span> result *{" "}
            <span className="hljs-number">4</span>; &#125;);
          </code>
        </pre> */}

        <pre>
          <code>
            {`new Promise(function (resolve, reject) {
            setTimeout(() => resolve(1), 1000);
          })
            .then(function (result) {
              console.log(result); // 1
              return result * 2;
            })
            .then(function (result) {
              console.log(result); // 2
              return result * 3;
            })
            .then(function (result) {
              console.log(result); // 6
              return result * 4;
            });`}
          </code>
        </pre>
        <p>
          {" "}
          In the above handlers, the result is passed to the chain of .then()
          handlers with the below work flow,
        </p>
        <ol>
          <li>The initial promise resolves in 1 second,</li>
          <li>
            After that <code>.then</code> handler is called by logging the
            result(1) and then return a promise with the value of result * 2.
          </li>
          <li>
            After that the value passed to the next <code>.then</code> handler
            by logging the result(2) and return a promise with result * 3.
          </li>
          <li>
            Finally the value passed to the last <code>.then</code> handler by
            logging the result(6) and return a promise with result * 4.
          </li>
        </ol>

        {/* <!-- 64 --> */}
        <h4 id="64-what-is-promise-all">64. What is promise.all</h4>
        <p>
          Promise.all is a promise that takes an array of promises as an input
          (an iterable), and it gets resolved when all the promises get resolved
          or any one of them gets rejected. For example, the syntax of
          promise.all method is below,
        </p>
        {/* <pre>
          <code className="lang-javascript">
            Promise.all([Promise1, Promise2, Promise3]) .
            <span className="hljs-keyword">then</span>(result) =&gt; &#123;{" "}
            <span className="hljs-built_in">console</span>.log(result) &#125;) .
            <span className="hljs-keyword">catch</span>(error =&gt;{" "}
            <span className="hljs-built_in">console</span>.log(`
            <span className="javascript">
              <span className="hljs-built_in">Error</span>{" "}
              <span className="hljs-keyword">in</span> promises $&#123;error&#125;
            </span>
            `))
          </code>
        </pre> */}

        <pre>
          <code>
            {`Promise.all([Promise1, Promise2, Promise3]) .then(result) => {   console.log(result) }) .catch(error => console.log("Error in promises {error}"))`}
          </code>
        </pre>

      
        <p>
          {" "}
          <strong>Note:</strong> Remember that the order of the promises(output
          the result) is maintained as per input order.
        </p>

        {/* <!-- 65 --> */}

        <h4 id="65-what-is-the-purpose-of-the-race-method-in-promise">
          65. What is the purpose of the race method in promise?
        </h4>
        <p>
          Promise.race() method will return the promise instance which is
          firstly resolved or rejected. Let&#39;s take an example of race()
          method where promise2 is resolved first
        </p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-keyword">var</span> promise1 ={" "}
            <span className="hljs-keyword">new</span>{" "}
            <span className="hljs-built_in">Promise</span>(
            <span className="hljs-function">
              <span className="hljs-keyword">function</span> (
              <span className="hljs-params">resolve, reject</span>){" "}
            </span>
            &#123; setTimeout(resolve, <span className="hljs-number">500</span>,{" "}
            <span className="hljs-string">"one"</span>); &#125;);
            <span className="hljs-keyword">var</span> promise2 ={" "}
            <span className="hljs-keyword">new</span>{" "}
            <span className="hljs-built_in">Promise</span>(
            <span className="hljs-function">
              <span className="hljs-keyword">function</span> (
              <span className="hljs-params">resolve, reject</span>){" "}
            </span>
            &#123; setTimeout(resolve, <span className="hljs-number">100</span>,{" "}
            <span className="hljs-string">"two"</span>); &#125;);
            <span className="hljs-built_in">Promise</span>.race([promise1,
            promise2]).then(
            <span className="hljs-function">
              <span className="hljs-keyword">function</span> (
              <span className="hljs-params">value</span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">console</span>.log(value);{" "}
            <span className="hljs-comment">
              // "two" // Both promises will resolve, but promise2 is faster
            </span>
            &#125;);
          </code>
        </pre> */}

        <pre>
          <code>
            {`var promise1 = new Promise(function (resolve, reject) {
     setTimeout(resolve, 500, "one");
    });
    var promise2 = new Promise(function (resolve, reject) {
      setTimeout(resolve, 100, "two");
    });
      
    Promise.race([promise1, promise2]).then(function (value) {
    console.log(value); // "two" // Both promises will resolve, but promise2 is faster
  });`}
          </code>
        </pre>

        {/* <!-- 66 --> */}
        <h4 id="66-what-is-a-strict-mode-in-javascript">
          66. What is a strict mode in javascript?
        </h4>
        <p>
          Strict Mode is a new feature in ECMAScript 5 that allows you to place
          a program, or a function, in a “strict” operating context. This way it
          prevents certain actions from being taken and throws more exceptions.
          The literal expression <code>&quot;use strict&quot;;</code> instructs
          the browser to use the javascript code in the Strict mode.
        </p>

        {/* <!-- 67 --> */}
        <h4 id="67-why-do-you-need-strict-mode">
          67. Why do you need strict mode
        </h4>
        <p>
          Strict mode is useful to write &quot;secure&quot; JavaScript by
          notifying &quot;bad syntax&quot; into real errors. For example, it
          eliminates accidentally creating a global variable by throwing an
          error and also throws an error for assignment to a non-writable
          property, a getter-only property, a non-existing property, a
          non-existing variable, or a non-existing object.
        </p>

        {/* <!-- 68 --> */}
        <h4 id="68-how-do-you-declare-strict-mode">
          68. How do you declare strict mode
        </h4>
        <p>
          The strict mode is declared by adding &quot;use strict&quot;; to the
          beginning of a script or a function. If declared at the beginning of a
          script, it has global scope.
        </p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-meta">"use strict"</span>; x ={" "}
            <span className="hljs-number">3.14</span>;{" "}
            <span className="hljs-comment">
              // This will cause an error because x is not declared
            </span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`"use strict";
x = 3.14; // This will cause an error because x is not declared`}
          </code>
        </pre>
        <p> and if you declare inside a function, it has local scope</p>
        {/* <pre>
          <code className="lang-javascript">
            x = <span className="hljs-number">3.14</span>;{" "}
            <span className="hljs-comment">// This will not cause an error.</span>
            myFunction();
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">myFunction</span>(
              <span className="hljs-params"></span>){" "}
            </span>
            &#123;
            <span className="hljs-meta"> "use strict"</span>; y ={" "}
            <span className="hljs-number">3.14</span>;{" "}
            <span className="hljs-comment">// This will cause an error</span>
            &#125;
          </code>
        </pre> */}

        <pre>
          <code>
            {`x = 3.14; // This will not cause an error.
      myFunction();
      
function myFunction() {
  "use strict";
   y = 3.14; // This will cause an error
}`}
          </code>
        </pre>

        {/* <!-- 69 --> */}
        <h4 id="69-what-is-the-purpose-of-double-exclamation">
          69. What is the purpose of double exclamation
        </h4>
        <p>
          The double exclamation or negation(!!) ensures the resulting type is a
          boolean. If it was falsey (e.g. 0, null, undefined, etc.), it will be
          false, otherwise, it will be true. For example, you can test IE
          version using this expression as below,
        </p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-keyword">let</span>{" "}
            <span className="hljs-attr">isIE8</span> ={" "}
            <span className="hljs-literal">false</span>;
            <span className="hljs-attr">isIE8</span> =
            !!navigator.userAgent.match(/MSIE{" "}
            <span className="hljs-number">8.0</span>/); console.log(isIE8); //
            returns <span className="hljs-literal">true</span>{" "}
            <span className="hljs-literal">or</span>{" "}
            <span className="hljs-literal">false</span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`let isIE8 = false;
isIE8 = !!navigator.userAgent.match(/MSIE 8.0/);
console.log(isIE8); // returns true or false`}
          </code>
        </pre>
        <p>
          {" "}
          If you don&#39;t use this expression then it returns the original
          value.
        </p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-built_in">console</span>
            .log(navigator.userAgent.match(
            <span className="hljs-regexp">/MSIE 8.0/</span>));{" "}
            <span className="hljs-regexp">//</span> returns either an Array{" "}
            <span className="hljs-keyword">or</span>{" "}
            <span className="hljs-literal">null</span>
          </code>
        </pre> */}

        <pre>
          <code>
            {`console.log(navigator.userAgent.match(/MSIE 8.0/)); // returns either an Array or null`}
          </code>
        </pre>

        <p>
          {" "}
          <strong>Note:</strong> The expression !! is not an operator, but it is
          just twice of ! operator.
        </p>

        {/* <!-- 70 --> */}
        <h4 id="70-what-is-the-purpose-of-the-delete-operator">
          70. What is the purpose of the delete operator
        </h4>
        <p>
          The delete operator is used to delete the property as well as its
          value.
        </p>
        {/* <pre>
          <code className="lang-javascript">
            var <span className="hljs-keyword">user</span> = &#123; firstName:{" "}
            <span className="hljs-string">"John"</span>, lastName:
            <span className="hljs-string">"Doe"</span>, age:{" "}
            <span className="hljs-number">20</span> &#125;; delete{" "}
            <span className="hljs-keyword">user</span>.age; console.
            <span className="hljs-keyword">log</span>(
            <span className="hljs-keyword">user</span>); // &#123;firstName:{" "}
            <span className="hljs-string">"John"</span>, lastName:
            <span className="hljs-string">"Doe"</span>&#125;
          </code>
        </pre> */}

        <pre>
          <code>
            {`var user = { firstName: "John", lastName:"Doe", age: 20 };
delete user.age;
      
console.log(user); // {firstName: "John", lastName:"Doe"}`}
          </code>
        </pre>

        {/* <!-- 71 --> */}
        <h4 id="71-what-is-typeof-operator">71. What is typeof operator</h4>
        <p>
          You can use the JavaScript typeof operator to find the type of a
          JavaScript variable. It returns the type of a variable or an
          expression.
        </p>
        {/* <pre>
          <code className="lang-javascript">
            typeof <span className="hljs-string">"John Abraham"</span>;{" "}
            <span className="hljs-comment">// Returns "string"</span>
            typeof (<span className="hljs-number">1</span> +{" "}
            <span className="hljs-number">2</span>);{" "}
            <span className="hljs-comment">// Returns "number"</span>
            typeof [<span className="hljs-number">1</span>,{" "}
            <span className="hljs-number">2</span>,{" "}
            <span className="hljs-number">3</span>];{" "}
            <span className="hljs-comment">
              // Returns "object" because all arrays are also objects
            </span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`typeof "John Abraham"; // Returns "string"
typeof (1 + 2); // Returns "number"
typeof [1, 2, 3]; // Returns "object" because all arrays are also objects`}
          </code>
        </pre>

        {/* <!-- 72 --> */}
        <h4 id="72-what-is-undefined-property">
          72. What is undefined property
        </h4>
        <p>
          The undefined property indicates that a variable has not been assigned
          a value, or declared but not initialized at all. The type of undefined
          value is undefined too.
        </p>
        {/* <pre>
          <code className="lang-javascript">
            var user; <span className="hljs-regexp">//</span> Value{" "}
            <span className="hljs-keyword">is</span>{" "}
            <span className="hljs-literal">undefined</span>, type{" "}
            <span className="hljs-keyword">is</span>{" "}
            <span className="hljs-literal">undefined</span>
            <span className="hljs-built_in">console</span>.log(
            <span className="hljs-keyword">typeof</span> user);{" "}
            <span className="hljs-regexp">//</span>
            <span className="hljs-literal">undefined</span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`var user; // Value is undefined, type is undefined
console.log(typeof user); //undefined`}
          </code>
        </pre>
        <p>Any variable can be emptied by setting the value to undefined.</p>
        <pre>
          <code className="lang-javascript">
            <span className="hljs-keyword">user</span>{" "}
            <span className="hljs-title">= undefined</span>;
          </code>
        </pre>

        {/* <!-- 73 --> */}
        <h4 id="73-what-is-null-value">73. What is null value?</h4>
        <p>
          The value null represents the intentional absence of any object value.
          It is one of JavaScript&#39;s primitive values. The type of null value
          is object. You can empty the variable by setting the value to null.
        </p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-keyword">var</span> user ={" "}
            <span className="hljs-literal">null</span>;
            <span className="hljs-built_in">console</span>.log(
            <span className="hljs-keyword">typeof</span> user);{" "}
            <span className="hljs-comment">//object</span>
          </code>
        </pre> */}
        {/* <!-- 74 --> */}
        <h4 id="74-what-is-the-difference-between-null-and-undefined">
          74. What is the difference between null and undefined
        </h4>
        <p>Below are the main differences between null and undefined,</p>
        <table>
          <thead>
            <tr>
              <th>Null</th>
              <th>Undefined</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                It is an assignment value which indicates that variable points
                to no object.
              </td>
              <td>
                It is not an assignment value where a variable has been declared
                but has not yet been assigned a value.
              </td>
            </tr>
            <tr>
              <td>Type of null is object</td>
              <td>Type of undefined is undefined</td>
            </tr>
            <tr>
              <td>
                The null value is a primitive value that represents the null,
                empty, or non-existent reference.
              </td>
              <td>
                The undefined value is a primitive value used when a variable
                has not been assigned a value.
              </td>
            </tr>
            <tr>
              <td>Indicates the absence of a value for a variable</td>
              <td>Indicates absence of variable itself</td>
            </tr>
            <tr>
              <td>
                Converted to zero (0) while performing primitive operations
              </td>
              <td>Converted to NaN while performing primitive operations</td>
            </tr>
          </tbody>
        </table>
        <br />
        {/* <!-- 75 --> */}
        <h4 id="75-what-is-eval">75. What is eval</h4>
        <p>
          The eval() function evaluates JavaScript code represented as a string.
          The string can be a JavaScript expression, variable, statement, or
          sequence of statements.
        </p>
        <pre>
          <code className="lang-javascript">
            <span className="hljs-built_in">console</span>.log(
            <span className="hljs-built_in">eval</span>(
            <span className="hljs-string">"1 + 2"</span>));{" "}
            <span className="hljs-comment">// 3</span>
          </code>
        </pre>

        {/* <!-- 76 --> */}
        <h4 id="76-what-is-the-difference-between-window-and-document">
          76. What is the difference between window and document
        </h4>
        <p>Below are the main differences between window and document,</p>
        <table>
          <thead>
            <tr>
              <th>Window</th>
              <th>Document</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>It is the root level element in any web page</td>
              <td>
                It is the direct child of the window object. This is also known
                as Document Object Model(DOM)
              </td>
            </tr>
            <tr>
              <td>
                By default window object is available implicitly in the page
              </td>
              <td>You can access it via window.document or document.</td>
            </tr>
            <tr>
              <td>
                It has methods like alert(), confirm() and properties like
                document, location
              </td>
              <td>
                It provides methods like getElementById, getElementsByTagName,
                createElement etc
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        {/* <!-- 77 --> */}
        <h4 id="77-how-do-you-access-history-in-javascript">
          77. How do you access history in javascript
        </h4>
        <p>
          The window.history object contains the browser&#39;s history. You can
          load previous and next URLs in the history using back() and next()
          methods.
        </p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">goBack</span>(
              <span className="hljs-params"></span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">window</span>.history.back(); &#125;
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">goForward</span>(
              <span className="hljs-params"></span>){" "}
            </span>
            &#123;
            <span className="hljs-built_in">window</span>.history.forward(); &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`function goBack() {
      window.history.back();
    }
function goForward() {
     window.history.forward();
  }`}
          </code>
        </pre>
        <p>
          {" "}
          <strong>Note:</strong> You can also access history without window
          prefix.
        </p>

        {/* <!-- 78 --> */}
        <h4 id="78-how-do-you-detect-caps-lock-key-turned-on-or-not">
          78. How do you detect caps lock key turned on or not
        </h4>
        <p>
          The <code>mouseEvent getModifierState()</code> is used to return a
          boolean value that indicates whether the specified modifier key is
          activated or not. The modifiers such as CapsLock, ScrollLock and
          NumLock are activated when they are clicked, and deactivated when they
          are clicked again.
        </p>
        <p>
          Let&#39;s take an input element to detect the CapsLock on/off behavior
          with an example,
        </p>
        {/* <pre>
          <code className="lang-html">
            <span className="hljs-tag">
              &lt;<span className="hljs-name">input</span>{" "}
              <span className="hljs-attr">type</span>=
              <span className="hljs-string">"password"</span>{" "}
              <span className="hljs-attr">onmousedown</span>=
              <span className="hljs-string">"enterInput(event)"</span> /&gt;
            </span>

            <span className="hljs-tag">
              &lt;<span className="hljs-name">p</span>{" "}
              <span className="hljs-attr">id</span>=
              <span className="hljs-string">"feedback"</span>&gt;
            </span>
            <span className="hljs-tag">
              &lt;/<span className="hljs-name">p</span>&gt;
            </span>

            <span className="hljs-tag">
              &lt;<span className="hljs-name">script</span>&gt;
            </span>
            <span className="javascript">
              <span className="hljs-function">
                <span className="hljs-keyword">function</span>{" "}
                <span className="hljs-title">enterInput</span>(
                <span className="hljs-params">e</span>){" "}
              </span>
              &#123;
              <span className="hljs-keyword">var</span> flag = e.getModifierState(
              <span className="hljs-string">"CapsLock"</span>);
              <span className="hljs-keyword">if</span> (flag) &#123;
              <span className="hljs-built_in">document</span>.getElementById(
              <span className="hljs-string">"feedback"</span>).innerHTML ={" "}
              <span className="hljs-string">"CapsLock activated"</span>; &#125;{" "}
              <span className="hljs-keyword">else</span> &#123;
              <span className="hljs-built_in">document</span>.getElementById(
              <span className="hljs-string">"feedback"</span>).innerHTML =
              <span className="hljs-string">"CapsLock not activated"</span>; &#125;
              &#125;
            </span>
            <span className="hljs-tag">
              &lt;/<span className="hljs-name">script</span>&gt;
            </span>
          </code>
        </pre> */}

        <pre>
          <code>
            {`<input type="password" onmousedown="enterInput(event)" />
      
      <p id="feedback"></p>
      
      <script>
        function enterInput(e) {
        var flag = e.getModifierState("CapsLock");
        if (flag) {
        document.getElementById("feedback").innerHTML = "CapsLock activated";
        } else {
        document.getElementById("feedback").innerHTML =
        "CapsLock not activated";
      }
    }
   </script>`}
          </code>
        </pre>

        {/* <!-- 79 --> */}
        <h4 id="79-what-is-isnan">79. What is isNaN</h4>
        <p>
          The isNaN() function is used to determine whether a value is an
          illegal number (Not-a-Number) or not. i.e, This function returns true
          if the value equates to NaN. Otherwise it returns false.
        </p>
        {/* <pre>
          <code className="lang-javascript">
            <span className="hljs-built_in">isNaN</span>(
            <span className="hljs-string">"Hello"</span>);{" "}
            <span className="hljs-comment">//true</span>
            <span className="hljs-built_in">isNaN</span>(
            <span className="hljs-string">"100"</span>);{" "}
            <span className="hljs-comment">//false</span>
          </code>
        </pre> */}

        <pre>
          <code>
            {`isNaN("Hello"); //true
isNaN("100"); //false`}
          </code>
        </pre>

        {/* <!-- 80 --> */}
        <h4 id="80-what-are-the-differences-between-undeclared-and-undefined-variables">
          80. What are the differences between undeclared and undefined
          variables
        </h4>
        <p>
          Below are the major differences between undeclared(not defined) and
          undefined variables,
        </p>
        <table>
          <thead>
            <tr>
              <th>undeclared</th>
              <th>undefined</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                These variables do not exist in a program and are not declared
              </td>
              <td>
                These variables declared in the program but have not assigned
                any value
              </td>
            </tr>
            <tr>
              <td>
                If you try to read the value of an undeclared variable, then a
                runtime error is encountered
              </td>
              <td>
                If you try to read the value of an undefined variable, an
                undefined value is returned.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
      </div>
    </div>
  );
};
