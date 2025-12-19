import "../globalStyle.css";
import "./React.css";
import images from "../../../assets/React/index";

export const React = () => {
  return (
    <div className="main-container-interview-questions">
      <div>
        <p className="main-heading-q-a">
          Reactjs Interview Questions and Answers
        </p>
        <div className="main-heading-interview-questions-answers">
          <img className="img-class-language-logo" src={images.Reactlogo} />
          <p>
            React.js is a popular JavaScript library for building user
            interfaces, renowned for its efficiency and flexibility. It
            simplifies the process of creating interactive web applications by
            allowing developers to break down complex UIs into reusable
            components. At its core, React utilizes a virtual DOM (Document
            Object Model) to efficiently update the UI when changes occur,
            resulting in better performance compared to traditional approaches.
            Its declarative nature enables developers to describe how the UI
            should look at any given point, rather than imperatively defining
            each step of the rendering process.
            <br />
            React also offers JSX (JavaScript XML), a syntax extension that
            allows you to write HTML-like code within JavaScript, making it
            intuitive to define UI components and their structure. Furthermore,
            React provides a unidirectional data flow, where data flows downward
            from parent to child components, simplifying the management of
            application state. This ensures that changes in one part of the
            application do not inadvertently affect other parts, leading to more
            predictable behavior and easier debugging. Another advantage of
            React is its vibrant ecosystem, with a vast array of libraries,
            tools, and community-driven resources available to streamline
            development.
          </p>
        </div>
      </div>

      <div className="question-answer">
        <h4 id="1-what-is-react-">1. What is React?</h4>
        <p>
          React(aka React.js or ReactJS) is an{" "}
          <strong>open-source front-end JavaScript library</strong> that is used
          for building composable user interfaces, especially for single-page
          applications. It is used for handling view layer for web and mobile
          apps based on components in a declarative approach.
        </p>
        <p>
          React was created by{" "}
          <a href="https://github.com/jordwalke">Jordan Walke</a>, a software
          engineer working for Facebook. React was first deployed on
          Facebook&#39;s News Feed in 2011 and on Instagram in 2012.
        </p>

        {/* <!-- 2 --> */}
        <h4 id="2-what-is-the-history-behind-react-evolution-">
          2. What is the history behind React evolution?
        </h4>
        <p>
          The history of ReactJS started in 2010 with the creation of{" "}
          <strong>XHP</strong>. XHP is a PHP extension which improved the syntax
          of the language such that XML document fragments become valid PHP
          expressions and the primary purpose was used to create custom and
          reusable HTML elements.
        </p>
        <p>
          The main principle of this extension was to make front-end code easier
          to understand and to help avoid cross-site scripting attacks. The
          project was successful to prevent the malicious content submitted by
          the scrubbing user.
        </p>
        <p>
          But there was a different problem with XHP in which dynamic web
          applications require many roundtrips to the server, and XHP did not
          solve this problem. Also, the whole UI was re-rendered for small
          change in the application. Later, the initial prototype of React is
          created with the name <strong>FaxJ</strong> by Jordan inspired from
          XHP. Finally after sometime React has been introduced as a new library
          into JavaScript world.
        </p>
        <p>
          <strong>Note:</strong> JSX comes from the idea of XHP
        </p>

        {/* <!-- 3 --> */}
        <h4 id="3-what-are-the-major-features-of-react-">
          3. What are the major features of React?
        </h4>
        <p>The major features of React are:</p>
        <ul>
          <li>
            Uses <strong>JSX</strong> syntax, a syntax extension of JS that
            allows developers to write HTML in their JS code.
          </li>
          <li>
            It uses <strong>Virtual DOM</strong> instead of Real DOM considering
            that Real DOM manipulations are expensive.
          </li>
          <li>
            Supports <strong>server-side rendering</strong> which is useful for
            Search Engine Optimizations(SEO).
          </li>
          <li>
            Follows <strong>Unidirectional or one-way</strong> data flow or data
            binding.
          </li>
          <li>
            Uses <strong>reusable/composable</strong> UI components to develop
            the view.
          </li>
        </ul>

        {/* <!-- 4 --> */}
        <h4 id="3-what-is-jsx-">4. What is JSX?</h4>
        <p>
          <em>JSX</em> stands for <em>JavaScript XML</em> and it is an XML-like
          syntax extension to ECMAScript. Basically it just provides the
          syntactic sugar for the{" "}
          <code>React.createElement(type, props, ...children)</code>
          function, giving us expressiveness of JavaScript along with HTML like
          template syntax.
        </p>
        <p>
          In the example below, the text inside <code>&lt;h1&gt;</code> tag is
          returned as JavaScript function to the render function.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">export</span>{" "}
            <span className="hljs-keyword">default</span>{" "}
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">App</span>(
              <span className="hljs-params"></span>){" "}
            </span>
            &#123;
            <span className="hljs-keyword">return</span> (
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">h1</span>{" "}
                <span className="hljs-attr">className</span>=
                <span className="hljs-string">"greeting"</span>&gt;
              </span>
              &#123;"Hello, this is a JSX Code!"&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">h1</span>&gt;
              </span>
            </span>
            ); &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`export default function App() {
    return (
    <h1 className="greeting">{"Hello, this is a JSX Code!"}</h1>
  );
}`}
          </code>
        </pre>
        <p>
          If you don&#39;t use JSX syntax then the respective JavaScript code
          should be written as below,
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">import</span> &#123; createElement
            &#125; <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">'react'</span>;
            <span className="hljs-keyword">export</span>{" "}
            <span className="hljs-keyword">default</span>{" "}
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">App</span>(
              <span className="hljs-params"></span>){" "}
            </span>
            &#123;
            <span className="hljs-keyword">return</span> createElement(
            <span className="hljs-string">'h1'</span>, &#123;{" "}
            <span className="hljs-attr">className</span>:{" "}
            <span className="hljs-string">'greeting'</span> &#125;,
            <span className="hljs-string">'Hello, this is a JSX Code!'</span>
            ); &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`import { createElement } from 'react';
        
    export default function App() {
    return createElement(
    'h1',
    { className: 'greeting' },
    'Hello, this is a JSX Code!'
  );
}`}
          </code>
        </pre>

        {/* <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">App</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">React</span>.
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; render() &#123;
            <span className="hljs-keyword">return</span> ( &lt;h1 className=
            <span className="hljs-string">"greeting"</span>&gt;&#123;
            <span className="hljs-string">"Hello, this is a JSX Code!"</span>
            &#125;&lt;/h1&gt; ); &#125; &#125;
          </code>
        </pre> */}
        <br/>
        <pre>
          <code>
            {`class App extends React.Component {
    render() {
    return (
    <h1 className="greeting">{"Hello, this is a JSX Code!"}</h1>
    );
  }
}`}
          </code>
        </pre>

        {/* <!-- 5 --> */}

        <h4 id="4-what-is-the-difference-between-element-and-component-">
          5. What is the difference between Element and Component?
        </h4>
        <p>
          An <em>Element</em> is a plain object describing what you want to
          appear on the screen in terms of the DOM nodes or other components.{" "}
          <em>Elements</em> can contain other <em>Elements</em> in their props.
          Creating a React element is cheap. Once an element is created, it
          cannot be mutated.
        </p>
        <p>
          The JavaScript representation(Without JSX) of React Element would be
          as follows:
        </p>
        <pre>
          <code>
            <span className="hljs-attribute">const element</span> =
            React.createElement(<span className="hljs-string">"div"</span>,
            &#123; id: <span className="hljs-string">"login-btn"</span> &#125;,{" "}
            <span className="hljs-string">"Login"</span>);
          </code>
        </pre>
        <p>and this element can be simiplified using JSX</p>
        <pre>
          <code>
            &lt;<span className="hljs-keyword">div</span>{" "}
            <span className="hljs-built_in">id</span>=
            <span className="hljs-string">"login-btn"</span>&gt;Login&lt;/
            <span className="hljs-keyword">div</span>&gt;
          </code>
        </pre>
        <p>
          The above <code>React.createElement()</code> function returns an
          object as below:
        </p>
        {/* <pre>
          <code>
            &#123;
            <span className="hljs-attribute">type</span>:{" "}
            <span className="hljs-string">'div'</span>, props: &#123; children:{" "}
            <span className="hljs-string">'Login'</span>, id:{" "}
            <span className="hljs-string">'login-btn'</span>
            &#125; &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`{
    type: 'div',
    props: {
    children: 'Login',
    id: 'login-btn'
    }
}`}
          </code>
        </pre>
        <p>
          Finally, this element renders to the DOM using{" "}
          <code>ReactDOM.render()</code>.
        </p>
        <p>
          Whereas a <strong>component</strong> can be declared in several
          different ways. It can be a class with a<code>render()</code> method
          or it can be defined as a function. In either case, it takes props as
          an input, and returns a JSX tree as the output:
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">const</span> Button ={" "}
            <span className="hljs-function">
              (<span className="hljs-params">&#123; handleLogin &#125;</span>)
              =&gt;
            </span>{" "}
            (
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">div</span>{" "}
                <span className="hljs-attr">id</span>=
                <span className="hljs-string">&#123;</span>"
                <span className="hljs-attr">login-btn</span>"&#125;{" "}
                <span className="hljs-attr">onClick</span>=
                <span className="hljs-string">&#123;handleLogin&#125;</span>&gt;
              </span>
              Login
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">div</span>&gt;
              </span>
            </span>
            );
          </code>
        </pre> */}
        <pre>
          <code>
            {`const Button = ({ handleLogin }) => (
  <div id={"login-btn"} onClick={handleLogin}>Login</div>
  );`}
          </code>
        </pre>
        <p>
          Then JSX gets transpiled to a <code>React.createElement()</code>{" "}
          function tree:
        </p>
        {/* <pre>
          <code>
            const Button ={" "}
            <span className="hljs-function">
              <span className="hljs-params">(&#123; handleLogin &#125;)</span>{" "}
              =&gt;
            </span>
            React.createElement(
            <span className="hljs-string">"div"</span>, &#123; id:{" "}
            <span className="hljs-string">"login-btn"</span>, onClick:
            handleLogin &#125;,
            <span className="hljs-string">"Login"</span>
            );
          </code>
        </pre> */}
        <pre>
          <code>
            {`const Button = ({ handleLogin }) =>
    React.createElement(
    "div",
    { id: "login-btn", onClick: handleLogin },
    "Login"
  );`}
          </code>
        </pre>

        {/* <!-- 6 --> */}
        <h4 id="5-how-to-create-components-in-react-">
          6. How to create components in React?
        </h4>
        <p>
          Components are the building blocks of creating User Interfaces(UI) in
          React. There are two possible ways to create a component.
        </p>
        <ol>
          <li>
            <strong>Function Components:</strong> This is the simplest way to
            create a component. Those are pure JavaScript functions that accept
            props object as the first parameter and return React elements to
            render the output:
          </li>
        </ol>
        <pre>
          <code>
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">Greeting</span>(
              <span className="hljs-params">&#123; message &#125;</span>){" "}
            </span>
            &#123; <br/>
            <span>{"        "}</span><span className="hljs-keyword">return</span>{" "}
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">h1</span>&gt;
              </span>
              &#123;`Hello, $&#123;message&#125;`&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">h1</span>&gt;
              </span>
            </span>
            ; <br/>  &#125;
          </code>
        </pre>
        <ol>
          <li>
            <strong>Class Components:</strong> You can also use ES6 class to
            define a component. The above function component can be written as a
            class component:
          </li>
        </ol>
        <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">Greeting</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">React</span>.
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123;<br/> render() &#123; <br/>
            <span className="hljs-keyword">return</span> &lt;h1&gt;&#123;`
            <span className="hljs-type">Hello</span>, $&#123;
            <span className="hljs-keyword">this</span>
            .props.message&#125;`&#125;&lt;/h1&gt;; <br/> &#125; <br/> &#125;
          </code>
        </pre>

        {/* <!-- 7 --> */}
        <h4 id="6-when-to-use-a-class-component-over-a-function-component-">
          7. When to use a Class Component over a Function Component?
        </h4>
        <p>
          After the addition of Hooks(i.e. React 16.8 onwards) it is always
          recommended to use Function components over Class components in React.
          Because you could use state, lifecycle methods and other features that
          were only available in class component present in function component
          too.
        </p>
        <p>
          But even there are two reasons to use Class components over Function
          components.
        </p>
        <ol>
          <li>
            If you need a React functionality whose Function component
            equivalent is not present yet, like Error Boundaries.
          </li>
          <li>
            In older versions, If the component needs{" "}
            <em>state or lifecycle methods</em> then you need to use class
            component.
          </li>
        </ol>
        <p>
          <strong>Note:</strong> You can also use reusable{" "}
          <a href="https://github.com/bvaughn/react-error-boundary">
            react error boundary
          </a>{" "}
          third-party component without writing any class. i.e, No need to use
          class components for Error boundaries.
        </p>
        <p>
          The usage of Error boundaries from the above library is quite straight
          forward.
        </p>
        <blockquote>
          <p>
            <strong>
              <em>Note when using react-error-boundary:</em>
            </strong>{" "}
            ErrorBoundary is a client component. You can only pass props to it
            that are serializeable or use it in files that have a
            <code>&quot;use client&quot;;</code>
            directive.
          </p>
        </blockquote>
        {/* <pre>
          <code>
            <span className="hljs-string">"use client"</span>;
            <span className="hljs-keyword">import</span> &#123; ErrorBoundary
            &#125; <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">"react-error-boundary"</span>;
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">ErrorBoundary</span>{" "}
                <span className="hljs-attr">fallback</span>=
                <span className="hljs-string">&#123;</span>&lt;
                <span className="hljs-attr">div</span>&gt;
              </span>
              Something went wrong
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">div</span>&gt;
              </span>
              &#125;&gt;
              <span className="hljs-tag">
                &lt;<span className="hljs-name">ExampleApplication</span> /&gt;
              </span>
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">ErrorBoundary</span>&gt;
              </span>
            </span>
          </code>
        </pre> */}

        <pre>
          <code>
            {`"use client";
        
import { ErrorBoundary } from "react-error-boundary";
        
<ErrorBoundary fallback={<div>Something went wrong</div>}>
<ExampleApplication />
</ErrorBoundary>`}
          </code>
        </pre>

        {/* <!-- 8 --> */}
        <h4 id="7-what-are-pure-components-">8. What are Pure Components?</h4>
        <p>
          Pure components are the components which render the same output for
          the same state and props. In function components, you can achieve
          these pure components through memoized <code>React.memo()</code> API
          wrapping around the component. This API prevents unnecessary
          re-renders by comparing the previous props and new props using shallow
          comparison. So it will be helpful for performance optimizations.
        </p>
        <p>
          But at the same time, it won&#39;t compare the previous state with the
          current state because function component itself prevents the
          unnecessary rendering by default when you set the same state again.
        </p>
        <p>
          The syntactic representation of memoized components looks like below,
        </p>
        <pre>
          <code>
            <span className="hljs-attribute">const MemoizedComponent</span> =
            memo(SomeComponent, arePropsEqual?);
          </code>
        </pre>
        <p>
          Below is the example of how child component(i.e., EmployeeProfile)
          prevents re-renders for the same props passed by parent
          component(i.e.,EmployeeRegForm).
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">import</span> &#123; memo, useState
            &#125; from <span className="hljs-string">'react'</span>; const
            EmployeeProfile = memo(
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>
            </span>{" "}
            EmployeeProfile(&#123; <span className="hljs-keyword">name</span>,
            email &#125;) &#123;
            <span className="hljs-keyword">return</span> (&lt;&gt; &lt;p&gt;
            <span className="hljs-keyword">Name</span>:&#123;
            <span className="hljs-keyword">name</span>&#125;&lt;/p&gt;
            &lt;p&gt;Email: &#123;email&#125;&lt;/p&gt; &lt;/&gt;); &#125;);
            export <span className="hljs-keyword">default</span>{" "}
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>
            </span>{" "}
            EmployeeRegForm() &#123; const [
            <span className="hljs-keyword">name</span>, setName] = useState(
            <span className="hljs-string">''</span>); const [email, setEmail] =
            useState(<span className="hljs-string">''</span>);
            <span className="hljs-keyword">return</span> ( &lt;&gt;
            &lt;label&gt;
            <span className="hljs-keyword">Name</span>: &lt;input{" "}
            <span className="hljs-keyword">value</span>=&#123;
            <span className="hljs-keyword">name</span>&#125; onChange=&#123;e
            =&gt; setName(e.<span className="hljs-keyword">target</span>.
            <span className="hljs-keyword">value</span>)&#125; /&gt;
            &lt;/label&gt; &lt;label&gt; Email: &lt;input{" "}
            <span className="hljs-keyword">value</span>=&#123;email&#125;
            onChange=&#123;e =&gt; setEmail(e.
            <span className="hljs-keyword">target</span>.
            <span className="hljs-keyword">value</span>)&#125; /&gt;
            &lt;/label&gt; &lt;hr/&gt; &lt;EmployeeProfile{" "}
            <span className="hljs-keyword">name</span>=&#123;
            <span className="hljs-keyword">name</span>&#125;/&gt; &lt;/&gt; );
            &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`import { memo, useState } from 'react';
        
const EmployeeProfile = memo(function EmployeeProfile({ name, email }) {
  return (<>
      <p>Name:{name}</p>
      <p>Email: {email}</p>
      </>);
    });
  export default function EmployeeRegForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
  <>
  <label>
  Name: <input value={name} onChange={e => setName(e.target.value)} />
  </label>
  <label>
  Email: <input value={email} onChange={e => setEmail(e.target.value)} />
  </label>
  <hr/>
  <EmployeeProfile name={name}/>
  </>
  );
}`}
          </code>
        </pre>
        <p>
          In the above code, the email prop has not been passed to child
          component. So there won&#39;t be any re-renders for email prop change.
        </p>
        <p>
          In class components, the components extending{" "}
          <em>
            <code>React.PureComponent</code>
          </em>{" "}
          instead of
          <em>
            <code>React.Component</code>
          </em>{" "}
          become the pure components. When props or state changes,
          <em>PureComponent</em> will do a shallow comparison on both props and
          state by invoking
          <code>shouldComponentUpdate()</code> lifecycle method.
        </p>
        <p>
          <strong>Note: </strong> <code>React.memo()</code> is a higher-order
          component.
        </p>

        {/* <!-- 9 --> */}
        <h4 id="8-what-is-state-in-react-">9. What is state in React?</h4>
        <p>
          <em>State</em> of a component is an object that holds some information
          that may change over the lifetime of the component. The important
          point is whenever the state object changes, the component re-renders.
          It is always recommended to make our state as simple as possible and
          minimize the number of stateful components.
        </p>
        <p>
          <img src={images.state} alt="state" className="img-cls" />
        </p>
        <p>
          Let&#39;s take an example of <strong>User</strong> component with
          message state. Here,
          <strong>useState</strong> hook has been used to add state to the User
          component and it returns an array with current state and function to
          update it.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">import</span> React, &#123; useState
            &#125; <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">"react"</span>;
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">User</span>(
              <span className="hljs-params"></span>){" "}
            </span>
            &#123;
            <span className="hljs-keyword">const</span> [message, setMessage] =
            useState(
            <span className="hljs-string">"Welcome to React world"</span>);
            <span className="hljs-keyword">return</span> (
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">div</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">h1</span>&gt;
              </span>
              &#123;message&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">h1</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">div</span>&gt;
              </span>
            </span>
            ); &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`import React, { useState } from "react";
        
      function User() {
      const [message, setMessage] = useState("Welcome to React world");
        
      return (
        <div>
           <h1>{message}</h1>
        </div>
      );
  }`}
          </code>
        </pre>
        <details>
          <summary>
            <b>See Class</b>
          </summary>
          <p>
            <code>
              import React from &#39;react&#39;; class User extends
              React.Component &#123; constructor(props) &#123; super(props);
              this.state = &#123; message: &quot;Welcome to React world&quot;,
              &#125;; &#125; render() &#123; return ( &lt;div&gt;
              &lt;h1&gt;&#123;this.state.message&#125;&lt;/h1&gt; &lt;/div&gt;
              ); &#125; &#125;
            </code>
          </p>
        </details>

        <p>
          State is similar to props, but it is private and fully controlled by
          the component ,i.e., it is not accessible to any other component till
          the owner component decides to pass it.
        </p>

        {/* <!-- 10 --> */}
        <h4 id="9-what-are-props-in-react-">10. What are props in React?</h4>
        <p>
          <em>Props</em> are inputs to components. They are single values or
          objects containing a set of values that are passed to components on
          creation similar to HTML-tag attributes. Here, the data is passed down
          from a parent component to a child component.
        </p>
        <p>
          The primary purpose of props in React is to provide following
          component functionality:
        </p>
        <ol>
          <li>Pass custom data to your component.</li>
          <li>Trigger state changes.</li>
          <li>
            Use via <code>this.props.reactProp</code> inside component&#39;s{" "}
            <code>render()</code> method.
          </li>
        </ol>
        <p>
          For example, let us create an element with <code>reactProp</code>{" "}
          property:
        </p>
        <pre>
          <code>
            <span className="hljs-tag">
              &lt;<span className="hljs-name">Element</span>{" "}
              <span className="hljs-attr">reactProp</span>=
              <span className="hljs-string">&#123;</span>"
              <span className="hljs-attr">1</span>"&#125; /&gt;
            </span>
          </code>
        </pre>
        <p>
          This <code>reactProp</code> (or whatever you came up with) attribute
          name then becomes a property attached to React&#39;s native props
          object which originally already exists on all components created using
          React library.
        </p>
        <pre>
          <code>
            <span className="hljs-selector-tag">props</span>
            <span className="hljs-selector-class">.reactProp</span>
          </code>
        </pre>
        <p>
          For example, the usage of props in function component looks like
          below:
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">import</span> React{" "}
            <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">"react"</span>;
            <span className="hljs-keyword">import</span> ReactDOM{" "}
            <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">"react-dom"</span>;
            <span className="hljs-keyword">const</span> ChildComponent ={" "}
            <span className="hljs-function">
              (<span className="hljs-params">props</span>) =&gt;
            </span>{" "}
            &#123;
            <span className="hljs-keyword">return</span> (
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">div</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">p</span>&gt;
              </span>
              &#123;props.name&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">p</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">p</span>&gt;
              </span>
              &#123;props.age&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">p</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">div</span>&gt;
              </span>
            </span>
            ); &#125;;
            <span className="hljs-keyword">const</span> ParentComponent ={" "}
            <span className="hljs-function">
              <span className="hljs-params">()</span> =&gt;
            </span>{" "}
            &#123;
            <span className="hljs-keyword">return</span> ( &lt;div&gt;
            &lt;ChildComponent name="John" age="30" /&gt; &lt;ChildComponent
            name="Mary" age="25" /&gt; &lt;/div&gt; ); &#125;;
          </code>
        </pre> */}
        <pre>
          <code>
            {`import React from "react";
  import ReactDOM from "react-dom";
        
    const ChildComponent = (props) => {
        return (
            <div>
                <p>{props.name}</p>
                <p>{props.age}</p>
            </div>
        );
    };
        
    const ParentComponent = () => {
        return (
           <div>
             <ChildComponent name="John" age="30" />
             <ChildComponent name="Mary" age="25" />
           </div>
        );
    };`}
          </code>
        </pre>
        <p>
          The properties from props object can be accessed directly using
          destructing feature from ES6 (ECMAScript 2015). The above child
          component can be simplified like below.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">const</span> ChildComponent ={" "}
            <span className="hljs-function">
              (<span className="hljs-params">&#123;name, age&#125;</span>) =&gt;
            </span>{" "}
            &#123;
            <span className="hljs-keyword">return</span> (
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">div</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">p</span>&gt;
              </span>
              &#123;name&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">p</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">p</span>&gt;
              </span>
              &#123;age&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">p</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">div</span>&gt;
              </span>
            </span>
            ); &#125;;
          </code>
        </pre> */}
        <pre>
          <code>
            {`const ChildComponent = ({name, age}) => {
      return (
          <div>
          <p>{name}</p>
          <p>{age}</p>
          </div>
      );
  };`}
          </code>
        </pre>
        <details>
          <summary>
            <b>See Class</b>
          </summary>
          The Props accessed in Class Based Component as below
          <code>
            import React from &quot;react&quot;; import ReactDOM from
            &quot;react-dom&quot;; class ChildComponent extends React.Component
            &#123; render() &#123; return ( &lt;div&gt;
            &lt;p&gt;&#123;this.props.name&#125;&lt;/p&gt;
            &lt;p&gt;&#123;this.props.age&#125;&lt;/p&gt; &lt;/div&gt; ); &#125;
            &#125; class ParentComponent extends React.Component &#123; render()
            &#123; return ( &lt;div&gt; &lt;ChildComponent name=&quot;John&quot;
            age=&quot;30&quot; /&gt; &lt;ChildComponent name=&quot;Mary&quot;
            age=&quot;25&quot; /&gt; &lt;/div&gt; ); &#125; &#125;
          </code>
        </details>

        {/* <!-- 11 --> */}
        <h4 id="10-what-is-the-difference-between-state-and-props-">
          11. What is the difference between state and props?
        </h4>
        <p>
          In React, both <code>state</code> and <code>props</code> are plain
          JavaScript objects and used to manage the data of a component, but
          they are used in different ways and have different characteristics.
          <code>state</code> is managed by the component itself and can be
          updated using the <code>setState()</code>
          function. Unlike props, state can be modified by the component and is
          used to manage the internal state of the component. Changes in the
          state trigger a re-render of the component and its children.
          <code>props</code> (short for &quot;properties&quot;) are passed to a
          component by its parent component and are
          <code>read-only</code>, meaning that they cannot be modified by the
          component itself. props can be used to configure the behavior of a
          component and to pass data between components.
        </p>

        {/* <!-- 12 --> */}
        <h4 id="11-why-should-we-not-update-the-state-directly-">
          12. Why should we not update the state directly?
        </h4>
        <p>
          If you try to update the state directly then it won&#39;t re-render
          the component.
        </p>
        {/* <pre>
          <code>
            //Wrong this.<span className="hljs-keyword">state</span>.message ={" "}
            <span className="hljs-string">"Hello world"</span>;
          </code>
        </pre> */}
        <pre>
          <code>
            {`//Wrong
  this.state.message = "Hello world";`}
          </code>
        </pre>
        <p>
          Instead use <code>setState()</code> method. It schedules an update to
          a component&#39;s state object. When state changes, the component
          responds by re-rendering.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-comment">//Correct</span>
            <span className="hljs-keyword">this</span>.setState(&#123;{" "}
            <span className="hljs-string">message:</span>{" "}
            <span className="hljs-string">"Hello World"</span> &#125;);
          </code>
        </pre> */}
        <pre>
          <code>
            {`//Correct
  this.setState({ message: "Hello World" });`}
          </code>
        </pre>
        <p>
          <strong>Note:</strong> You can directly assign to the state object
          either in <em>constructor</em> or using latest javascript&#39;s class
          field declaration syntax.
        </p>

        {/* <!-- 12 --> */}

        <h4 id="12-what-is-the-purpose-of-callback-function-as-an-argument-of-setstate-">
          13. What is the purpose of callback function as an argument of{" "}
          <code>setState()</code>?
        </h4>
        <p>
          The callback function is invoked when setState finished and the
          component gets rendered. Since
          <code>setState()</code> is <strong>asynchronous</strong> the callback
          function is used for any post action.
        </p>
        <p>
          <strong>Note:</strong> It is recommended to use lifecycle method
          rather than this callback function.
        </p>
        {/* <pre>
          <code>
            setState(&#123; name: <span className="hljs-string">"John"</span>{" "}
            &#125;,{" "}
            <span className="hljs-function">
              <span className="hljs-params">()</span> =&gt;
            </span>
            <span className="hljs-built_in">console</span>.log(
            <span className="hljs-string">
              "The name has updated and component re-rendered"
            </span>
            ) );
          </code>
        </pre> */}
        <pre>
          <code>
            {`setState({ name: "John" }, () =>
      console.log("The name has updated and component re-rendered")
  );`}
          </code>
        </pre>

        {/* <!-- 13 --> */}
        <h4 id="13-what-is-the-difference-between-html-and-react-event-handling-">
          14. What is the difference between HTML and React event handling?
        </h4>
        <p>
          Below are some of the main differences between HTML and React event
          handling,
        </p>
        <ol>
          <li>
            In HTML, the event name usually represents in <em>lowercase</em> as
            a convention:
          </li>
        </ol>
        <pre>
          <code>
            &lt;<span className="hljs-keyword">button</span>{" "}
            <span className="hljs-keyword">onclick</span>=
            <span className="hljs-string">"activateLasers()"</span>&gt;&lt;/
            <span className="hljs-keyword">button</span>&gt;
          </code>
        </pre>
        <br/>
        <pre>
          <code>
            Whereas <span className="hljs-keyword">in</span> React{" "}
            <span className="hljs-keyword">it</span> follows _camelCase_
            convention:
          </code>
        </pre>
        <br/>
        <pre>
          <code>
            <span className="hljs-tag">
              &lt;<span className="hljs-name">button</span>{" "}
              <span className="hljs-attr">onClick</span>=
              <span className="hljs-string">&#123;activateLasers&#125;</span>
              &gt;
            </span>
          </code>
        </pre>
        <ol>
          <li>
            In HTML, you can return <code>false</code> to prevent default
            behavior:
          </li>
        </ol>
        <pre>
          <code>
            &lt;a href=<span className="hljs-string">"#"</span> onclick=
            <span className="hljs-symbol">'console.log</span>(
            <span className="hljs-string">"The link was clicked."</span>);{" "}
            <span className="hljs-keyword">return</span>{" "}
            <span className="hljs-literal">false</span>;'/&gt;
          </code>
        </pre>
        <p>
          Whereas in React you must call <code>preventDefault()</code>{" "}
          explicitly:
        </p>
        {/* <pre>
          <code>
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">handleClick</span>(
              <span className="hljs-params">event</span>){" "}
            </span>
            &#123; event.preventDefault();
            <span className="hljs-built_in">console</span>.log(
            <span className="hljs-string">"The link was clicked."</span>);
            &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`function handleClick(event) {
      event.preventDefault();
      console.log("The link was clicked.");
  }`}
          </code>
        </pre>
        <ol>
          <li>
            In HTML, you need to invoke the function by appending{" "}
            <code>()</code>
            Whereas in react you should not append <code>()</code> with the
            function name. (refer &quot;activateLasers&quot; function in the
            first point for example)
          </li>
        </ol>

        {/* <!-- 14 --> */}

        <h4 id="14-how-to-bind-methods-or-event-handlers-in-jsx-callbacks-">
          14. How to bind methods or event handlers in JSX callbacks?
        </h4>
        <p>There are 3 possible ways to achieve this in class components:</p>
        <ol>
          <li>
            <strong>Binding in Constructor:</strong> In JavaScript classes, the
            methods are not bound by default. The same rule applies for React
            event handlers defined as class methods. Normally we bind them in
            constructor.
          </li>
        </ol>
        {/* <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">User</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; constructor(props) &#123;
            <span className="hljs-keyword">super</span>(props);
            <span className="hljs-keyword">this</span>.handleClick ={" "}
            <span className="hljs-keyword">this</span>.handleClick.bind(
            <span className="hljs-keyword">this</span>); &#125; handleClick()
            &#123; console.log(
            <span className="hljs-string">"SingOut triggered"</span>); &#125;
            render() &#123;
            <span className="hljs-keyword">return</span> &lt;button
            onClick=&#123;
            <span className="hljs-keyword">this</span>.handleClick&#125;&gt;
            <span className="hljs-type">SingOut</span>&lt;/button&gt;; &#125;
            &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`class User extends Component {
    constructor(props) {
       super(props);
       this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      console.log("SingOut triggered");
    }
    render() {
       return <button onClick={this.handleClick}>SingOut</button>;
    }
  }`}
          </code>
        </pre>
        <ol>
          <li>
            <strong>Public class fields syntax:</strong> If you don&#39;t like
            to use bind approach then <em>public class fields syntax</em> can be
            used to correctly bind callbacks. The Create React App enables this
            syntax by default.
          </li>
        </ol>
        {/* <pre>
          <code>
            <span className="hljs-function">
              <span className="hljs-title">handleClick</span> ={" "}
              <span className="hljs-params">()</span> =&gt;
            </span>{" "}
            &#123;
            <span className="hljs-built_in">console</span>.log(
            <span className="hljs-string">"SingOut triggered"</span>,{" "}
            <span className="hljs-keyword">this</span>); &#125;;
          </code>
        </pre> */}
        <pre>
          <code>
            {`handleClick = () => {
      console.log("SingOut triggered", this);
    };`}
          </code>
        </pre>
        <br/>
        <pre>
          <code>
            <span className="hljs-tag">
              &lt;<span className="hljs-name">button</span>{" "}
              <span className="hljs-attr">onClick</span>=
              <span className="hljs-string">&#123;this.handleClick&#125;</span>
              &gt;
            </span>
            SingOut
            <span className="hljs-tag">
              &lt;/<span className="hljs-name">button</span>&gt;
            </span>
          </code>
        </pre>
        <ol>
          <li>
            <strong>Arrow functions in callbacks:</strong> It is possible to use{" "}
            <em>arrow functions</em> directly in the callbacks.
          </li>
        </ol>
        {/* <pre>
          <code>
            handleClick() &#123;
            <span className="hljs-built_in">console</span>.log(
            <span className="hljs-string">'SingOut triggered'</span>); &#125;
            render() &#123;
            <span className="hljs-keyword">return</span>{" "}
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">button</span>{" "}
                <span className="hljs-attr">onClick</span>=
                <span className="hljs-string">&#123;()</span> =&gt;
              </span>{" "}
              this.handleClick()&#125;&gt;SignOut
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">button</span>&gt;
              </span>
            </span>
            ; &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`handleClick() {
    console.log('SingOut triggered');
  }
    render() {
        return <button onClick={() => this.handleClick()}>SignOut</button>;
    }`}
          </code>
        </pre>
        <p>
          <strong>Note:</strong> If the callback is passed as prop to child
          components, those components might do an extra re-rendering. In those
          cases, it is preferred to go with <code>.bind()</code> or{" "}
          <em>public class fields syntax</em>
          approach considering performance.
        </p>

        {/* <!-- 15 --> */}

        <h4 id="15-how-to-pass-a-parameter-to-an-event-handler-or-callback-">
          15. How to pass a parameter to an event handler or callback?
        </h4>
        <p>
          You can use an <em>arrow function</em> to wrap around an{" "}
          <em>event handler</em> and pass parameters:
        </p>
        <pre>
          <code>
            <span className="hljs-tag">
              &lt;<span className="hljs-name">button</span>{" "}
              <span className="hljs-attr">onClick</span>=
              <span className="hljs-string">&#123;()</span> =&gt;
            </span>{" "}
            this.handleClick(id)&#125; /&gt;
          </code>
        </pre>
        <p>
          This is an equivalent to calling <code>.bind</code>:
        </p>
        <pre>
          <code>
            &lt;<span className="hljs-selector-tag">button</span>{" "}
            onClick=&#123;this
            <span className="hljs-selector-class">.handleClick</span>
            <span className="hljs-selector-class">.bind</span>(this, id)&#125;
            /&gt;
          </code>
        </pre>
        <p>
          Apart from these two approaches, you can also pass arguments to a
          function which is defined as arrow function
        </p>
        {/* <pre>
          <code>
            &lt;button onClick=&#123;<span className="hljs-keyword">this</span>
            .handleClick(id)&#125; /&gt;;
            <span className="hljs-function">
              <span className="hljs-title">handleClick</span> ={" "}
              <span className="hljs-params">(id)</span> =&gt;
            </span>{" "}
            () =&gt; &#123;
            <span className="hljs-built_in">console</span>.log(
            <span className="hljs-string">"Hello, your ticket number is"</span>,
            id); &#125;;
          </code>
        </pre> */}
        <pre>
          <code>
            {`<button onClick={this.handleClick(id)} />;
      handleClick = (id) => () => {
      console.log("Hello, your ticket number is", id);
  };`}
          </code>
        </pre>

        {/* <!-- 16 --> */}
        <h4 id="16-what-are-synthetic-events-in-react-">
          16. What are synthetic events in React?
        </h4>
        <p>
          <code>SyntheticEvent</code> is a cross-browser wrapper around the
          browser&#39;s native event. Its API is same as the browser&#39;s
          native event, including <code>stopPropagation()</code> and{" "}
          <code>preventDefault()</code>, except the events work identically
          across all browsers. The native events can be accessed directly from
          synthetic events using
          <code>nativeEvent</code> attribute.
        </p>
        <p>
          Let&#39;s take an example of BookStore title search component with the
          ability to get all native event properties
        </p>
        {/* <pre>
          <code>
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">BookStore</span>(
              <span className="hljs-params"></span>){" "}
            </span>
            &#123; handleTitleChange(e) &#123;
            <span className="hljs-built_in">console</span>.log(
            <span className="hljs-string">'The new title is:'</span>,
            e.target.value);
            <span className="hljs-comment">
              // 'e' represents synthetic event
            </span>
            <span className="hljs-keyword">const</span> nativeEvent =
            e.nativeEvent;
            <span className="hljs-built_in">console</span>.log(nativeEvent);
            e.stopPropogation(); e.preventDefault(); &#125;
            <span className="hljs-keyword">return</span>{" "}
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">input</span>{" "}
                <span className="hljs-attr">name</span>=
                <span className="hljs-string">"title"</span>{" "}
                <span className="hljs-attr">onChange</span>=
                <span className="hljs-string">
                  &#123;handleTitleChange&#125;
                </span>{" "}
                /&gt;
              </span>
              &#125;
            </span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`function BookStore() {
    handleTitleChange(e) {
        console.log('The new title is:', e.target.value);
        // 'e' represents synthetic event
        const nativeEvent = e.nativeEvent;
        console.log(nativeEvent);
        e.stopPropogation();
        e.preventDefault();
      }
        
      return <input name="title" onChange={handleTitleChange} />
}`}
          </code>
        </pre>

        {/* <!-- 17 --> */}
        <h4 id="17-what-are-inline-conditional-expressions-">
          17. What are inline conditional expressions?
        </h4>
        <p>
          You can use either <em>if statements</em> or{" "}
          <em>ternary expressions</em> which are available from JS to
          conditionally render expressions. Apart from these approaches, you can
          also embed any expressions in JSX by wrapping them in curly braces and
          then followed by JS logical operator <code>&amp;&amp;</code>.
        </p>
        {/* <pre>
          <code>
            &lt;h1&gt;Hello!
            <span className="xml">
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">h1</span>&gt;
              </span>
            </span>
            ; &#123; messages.length &gt; <span className="hljs-number">0</span>{" "}
            &amp;&amp; !isLogin ? (
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">h2</span>&gt;
              </span>
              You have &#123;messages.length&#125; unread messages.
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">h2</span>&gt;
              </span>
            </span>
            ) : (
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">h2</span>&gt;
              </span>
              You don't have unread messages.
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">h2</span>&gt;
              </span>
            </span>
            ); &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`<h1>Hello!</h1>;
  {
    messages.length > 0 && !isLogin ? (
    <h2>You have {messages.length} unread messages.</h2>
    ) : (
    <h2>You don't have unread messages.</h2>
  );
}`}
          </code>
        </pre>

        {/* <!-- 18 --> */}
        <h4 id="18-what-is-key-prop-and-what-is-the-benefit-of-using-it-in-arrays-of-elements-">
          18. What is &quot;key&quot; prop and what is the benefit of using it
          in arrays of elements?
        </h4>
        <p>
          A <code>key</code> is a special attribute you <strong>should</strong>{" "}
          include when mapping over arrays to render data. <em>Key</em> prop
          helps React identify which items have changed, are added, or are
          removed.
        </p>
        <p>
          Keys should be unique among its siblings. Most often we use ID from
          our data as <em>key</em>:
        </p>
        <pre>
          <code>
            <span className="xml">
              const todoItems = todos.map((todo) =&gt;{" "}
              <span className="hljs-tag">
                &lt;<span className="hljs-name">li</span>{" "}
                <span className="hljs-attr">key</span>=
              </span>
            </span>
            <span className="hljs-template-variable">&#123;todo.id&#125;</span>
            <span className="xml">
              <span className="hljs-tag">&gt;</span>
            </span>
            <span className="hljs-template-variable">
              &#123;todo.text&#125;
            </span>
            <span className="xml">
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">li</span>&gt;
              </span>
              );
            </span>
          </code>
        </pre>
        <p>
          When you don&#39;t have stable IDs for rendered items, you may use the
          item <em>index</em> as a <em>key</em>
          as a last resort:
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">const</span> todoItems = todos.map(
            <span className="hljs-function">
              (<span className="hljs-params">todo, index</span>) =&gt;
            </span>{" "}
            (
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">li</span>{" "}
                <span className="hljs-attr">key</span>=
                <span className="hljs-string">&#123;index&#125;</span>&gt;
              </span>
              &#123;todo.text&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">li</span>&gt;
              </span>
            </span>
            ));
          </code>
        </pre> */}
        <pre>
          <code>
            {`const todoItems = todos.map((todo, index) => (
      <li key={index}>{todo.text}</li>
  ));`}
          </code>
        </pre>
        <p>
          <strong>Note:</strong>
        </p>
        <ol>
          <li>
            Using <em>indexes</em> for <em>keys</em> is{" "}
            <strong>not recommended</strong> if the order of items may change.
            This can negatively impact performance and may cause issues with
            component state.
          </li>
          <li>
            If you extract list item as separate component then apply{" "}
            <em>keys</em> on list component instead of
            <code>li</code> tag.
          </li>
          <li>
            There will be a warning message in the console if the{" "}
            <code>key</code> prop is not present on list items.
          </li>
          <li>
            The key attribute accepts either string or number and internally
            convert it as string type.
          </li>
        </ol>

        {/* <!-- 19 --> */}
        <h4 id="19-what-is-the-use-of-refs-">19. What is the use of refs?</h4>
        <p>
          The <em>ref</em> is used to return a reference to the element. They{" "}
          <em>should be avoided</em> in most cases, however, they can be useful
          when you need a direct access to the DOM element or an instance of a
          component.
        </p>

        {/* <!-- 20 --> */}
        <h4 id="20-how-to-create-refs-">20. How to create refs?</h4>
        <p>There are two approaches</p>
        <ol>
          <li>
            This is a recently added approach. <em>Refs</em> are created using{" "}
            <code>React.createRef()</code> method and attached to React elements
            via the <code>ref</code> attribute. In order to use <em>refs</em>{" "}
            throughout the component, just assign the <em>ref</em> to the
            instance property within constructor.
          </li>
        </ol>
        {/* <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">MyComponent</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">React</span>.
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; constructor(props) &#123;
            <span className="hljs-keyword">super</span>(props);
            <span className="hljs-keyword">this</span>.myRef ={" "}
            <span className="hljs-type">React</span>.createRef(); &#125;
            render() &#123;
            <span className="hljs-keyword">return</span> &lt;div ref=&#123;
            <span className="hljs-keyword">this</span>.myRef&#125; /&gt;; &#125;
            &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
   }
}`}
          </code>
        </pre>
        <ol>
          <li>
            You can also use ref callbacks approach regardless of React version.
            For example, the search bar component&#39;s input element is
            accessed as follows,
          </li>
        </ol>
        {/* <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">SearchBar</span>{" "}
              <span className="hljs-title">extends</span>{" "}
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123;
            <span className="hljs-keyword">constructor</span>(props) &#123;
            <span className="hljs-keyword">super</span>(props);
            <span className="hljs-keyword">this</span>.txtSearch ={" "}
            <span className="hljs-literal">null</span>;
            <span className="hljs-keyword">this</span>.state = &#123; term:{" "}
            <span className="hljs-string">""</span> &#125;;
            <span className="hljs-keyword">this</span>.setInputSearchRef = (e)
            =&gt; &#123;
            <span className="hljs-keyword">this</span>.txtSearch = e; &#125;;
            &#125; onInputChange(event) &#123;
            <span className="hljs-keyword">this</span>.setState(&#123; term:{" "}
            <span className="hljs-keyword">this</span>.txtSearch.value &#125;);
            &#125; render() &#123;
            <span className="hljs-keyword">return</span> ( &lt;input
            value=&#123;
            <span className="hljs-keyword">this</span>.state.term&#125;
            onChange=&#123;<span className="hljs-keyword">this</span>
            .onInputChange.bind(<span className="hljs-keyword">this</span>
            )&#125; ref=&#123;<span className="hljs-keyword">this</span>
            .setInputSearchRef&#125; /&gt; ); &#125; &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`class SearchBar extends Component {
  constructor(props) {
      super(props);
      this.txtSearch = null;
      this.state = { term: "" };
      this.setInputSearchRef = (e) => {
      this.txtSearch = e;
    };
  }
  onInputChange(event) {
      this.setState({ term: this.txtSearch.value });
  }
  render() {
    return (
        <input
        value={this.state.term}
        onChange={this.onInputChange.bind(this)}
        ref={this.setInputSearchRef}
        />
    );
  }
}`}
          </code>
        </pre>
        <p>
          You can also use <em>refs</em> in function components using{" "}
          <strong>closures</strong>.<strong>Note</strong>: You can also use
          inline ref callbacks even though it is not a recommended approach.
        </p>
        <h4 id="21-what-are-forward-refs-">21. What are forward refs?</h4>
        <p>
          <em>Ref forwarding</em> is a feature that lets some components take a{" "}
          <em>ref</em> they receive, and pass it further down to a child.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">const</span> ButtonElement =
            React.forwardRef(
            <span className="hljs-function">
              (<span className="hljs-params">props, ref</span>) =&gt;
            </span>{" "}
            (
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">button</span>{" "}
                <span className="hljs-attr">ref</span>=
                <span className="hljs-string">&#123;ref&#125;</span>{" "}
                <span className="hljs-attr">className</span>=
                <span className="hljs-string">"CustomButton"</span>&gt;
              </span>
              &#123;props.children&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">button</span>&gt;
              </span>
            </span>
            ));
            <span className="hljs-comment">
              // Create ref to the DOM button:
            </span>
            <span className="hljs-keyword">const</span> ref = React.createRef();
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">ButtonElement</span>{" "}
                <span className="hljs-attr">ref</span>=
                <span className="hljs-string">&#123;ref&#125;</span>&gt;
              </span>
              &#123;"Forward Ref"&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">ButtonElement</span>&gt;
              </span>
            </span>
            ;
          </code>
        </pre> */}
        <pre>
          <code>
            {`const ButtonElement = React.forwardRef((props, ref) => (
  <button ref={ref} className="CustomButton">
      {props.children}
  </button>
));
        
  // Create ref to the DOM button:
  const ref = React.createRef();
  <ButtonElement ref={ref}>{"Forward Ref"}</ButtonElement>;`}
          </code>
        </pre>

        {/* <!-- 22 --> */}

        <h4 id="22-which-is-preferred-option-with-in-callback-refs-and-finddomnode-">
          22. Which is preferred option with in callback refs and findDOMNode()?
        </h4>
        <p>
          It is preferred to use <em>callback refs</em> over{" "}
          <code>findDOMNode()</code> API. Because
          <code>findDOMNode()</code>
          prevents certain improvements in React in the future.
        </p>
        <p>
          The <strong>legacy</strong> approach of using <code>findDOMNode</code>
          :
        </p>
        {/* <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">MyComponent</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; componentDidMount() &#123; findDOMNode(
            <span className="hljs-keyword">this</span>).scrollIntoView(); &#125;
            render() &#123;
            <span className="hljs-keyword">return</span> &lt;div /&gt;; &#125;
            &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`class MyComponent extends Component {
    componentDidMount() {
        findDOMNode(this).scrollIntoView();
    }
        
    render() {
      return <div />;
    }
  }`}
          </code>

        </pre>
        <p>The recommended approach is:</p>
        {/* <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">MyComponent</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; constructor(props) &#123;
            <span className="hljs-keyword">super</span>(props);
            <span className="hljs-keyword">this</span>.node = createRef();
            &#125; componentDidMount() &#123;
            <span className="hljs-keyword">this</span>
            .node.current.scrollIntoView(); &#125; render() &#123;
            <span className="hljs-keyword">return</span> &lt;div ref=&#123;
            <span className="hljs-keyword">this</span>.node&#125; /&gt;; &#125;
            &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.node = createRef();
     }
    componentDidMount() {
        this.node.current.scrollIntoView();
    }
        
    render() {
      return <div ref={this.node} />;
    }
  }`}
          </code>
        </pre>

        {/* <!-- 23 --> */}

        {/* <!-- 24 --> */}
        <h4 id="24-what-is-virtual-dom-">23. What is Virtual DOM?</h4>
        <p>
          The <em>Virtual DOM</em> (VDOM) is an in-memory representation of{" "}
          <em>Real DOM</em>. The representation of a UI is kept in memory and
          synced with the &quot;real&quot; DOM. It&#39;s a step that happens
          between the render function being called and the displaying of
          elements on the screen. This entire process is called
          <em>reconciliation</em>.
        </p>

        {/* <!-- 25 --> */}
        <h4 id="25-how-virtual-dom-works-">24. How Virtual DOM works?</h4>
        <p>
          The <em>Virtual DOM</em> works in three simple steps.
        </p>
        <ol>
          <li>
            Whenever any underlying data changes, the entire UI is re-rendered
            in Virtual DOM representation.
          </li>
        </ol>
        <p>
          <img src={images.Vdom1} alt="vdom" className="img-cls" />
        </p>
        <ol>
          <li>
            Then the difference between the previous DOM representation and the
            new one is calculated.
          </li>
        </ol>
        <p>
          <img src={images.Vdom2} alt="vdom2" className="img-cls" />
        </p>
        <ol>
          <li>
            Once the calculations are done, the real DOM will be updated with
            only the things that have actually changed.
          </li>
        </ol>
        <p>
          <img src={images.Vdom3} alt="vdom3" className="img-cls second-img" />
        </p>

        {/* <!-- 26 --> */}
        <h4 id="26-what-is-the-difference-between-shadow-dom-and-virtual-dom-">
          25. What is the difference between Shadow DOM and Virtual DOM?
        </h4>
        <p>
          The <em>Shadow DOM</em> is a browser technology designed primarily for
          scoping variables and CSS in <em>web components</em>. The{" "}
          <em>Virtual DOM</em> is a concept implemented by libraries in
          JavaScript on top of browser APIs.
        </p>

        {/* <!-- 27 --> */}
        <h4 id="27-what-is-react-fiber-">26. What is React Fiber?</h4>
        <p>
          Fiber is the new <em>reconciliation</em> engine or reimplementation of
          core algorithm in React v16. The goal of React Fiber is to increase
          its suitability for areas like animation, layout, gestures, ability to
          pause, abort, or reuse work and assign priority to different types of
          updates; and new concurrency primitives.
        </p>

        {/* <!-- 28 --> */}
        <h4 id="28-what-is-the-main-goal-of-react-fiber-">
          27. What is the main goal of React Fiber?
        </h4>
        <p>
          The goal of <em>React Fiber</em> is to increase its suitability for
          areas like animation, layout, and gestures. Its headline feature is{" "}
          <strong>incremental rendering</strong>: the ability to split rendering
          work into chunks and spread it out over multiple frames.
        </p>
        <p>
          <em>from documentation</em>
        </p>
        <p>Its main goals are:</p>
        <ol>
          <li>Ability to split interruptible work in chunks.</li>
          <li>Ability to prioritize, rebase and reuse work in progress.</li>
          <li>
            Ability to yield back and forth between parents and children to
            support layout in React.
          </li>
          <li>Ability to return multiple elements from render().</li>
          <li>Better support for error boundaries.</li>
        </ol>

        {/* <!-- 29 --> */}
        <h4 id="29-what-are-controlled-components-">
          28. What are controlled components?
        </h4>
        <p>
          A component that controls the input elements within the forms on
          subsequent user input is called
          <strong>Controlled Component</strong>, i.e, every state mutation will
          have an associated handler function.
        </p>
        <p>
          For example, to write all the names in uppercase letters, we use
          handleChange as below,
        </p>
        {/* <pre>
          <code>
            <span className="hljs-function">
              <span className="hljs-title">handleChange</span>
              <span className="hljs-params">(event)</span>
            </span>{" "}
            &#123; this.setState(&#123;value: event
            <span className="hljs-selector-class">.target</span>
            <span className="hljs-selector-class">.value</span>
            <span className="hljs-selector-class">.toUpperCase</span>()&#125;)
            &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`handleChange(event) {
     this.setState({value: event.target.value.toUpperCase()})
  }`}
          </code>
        </pre>

        {/* <!-- 30 --> */}
        <h4 id="30-what-are-uncontrolled-components-">
          29. What are uncontrolled components?
        </h4>
        <p>
          The <strong>Uncontrolled Components</strong> are the ones that store
          their own state internally, and you query the DOM using a ref to find
          its current value when you need it. This is a bit more like
          traditional HTML.
        </p>
        <p>
          In the below UserProfile component, the <code>name</code> input is
          accessed using ref.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">UserProfile</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">React</span>.
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; constructor(props) &#123;
            <span className="hljs-keyword">super</span>(props);
            <span className="hljs-keyword">this</span>.handleSubmit ={" "}
            <span className="hljs-keyword">this</span>.handleSubmit.bind(
            <span className="hljs-keyword">this</span>);
            <span className="hljs-keyword">this</span>.input ={" "}
            <span className="hljs-type">React</span>.createRef(); &#125;
            handleSubmit(event) &#123; alert(
            <span className="hljs-string">"A name was submitted: "</span> +{" "}
            <span className="hljs-keyword">this</span>.input.current.value);
            event.preventDefault(); &#125; render() &#123;
            <span className="hljs-keyword">return</span> ( &lt;form
            onSubmit=&#123;
            <span className="hljs-keyword">this</span>.handleSubmit&#125;&gt;
            &lt;label&gt; &#123;<span className="hljs-string">"Name:"</span>
            &#125; &lt;input{" "}
            <span className="hljs-class">
              <span className="hljs-keyword">type</span>
            </span>
            =<span className="hljs-string">"text"</span> ref=&#123;
            <span className="hljs-keyword">this</span>.input&#125; /&gt;
            &lt;/label&gt; &lt;input{" "}
            <span className="hljs-class">
              <span className="hljs-keyword">type</span>
            </span>
            =<span className="hljs-string">"submit"</span> value=
            <span className="hljs-string">"Submit"</span> /&gt; &lt;/form&gt; );
            &#125; &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`class UserProfile extends React.Component {
      constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
      }
      handleSubmit(event) {
        alert("A name was submitted: " + this.input.current.value);
        event.preventDefault();
      }
      render() {
        return (
        <form onSubmit={this.handleSubmit}>
        <label>
        {"Name:"}
        <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
        </form>
        );
    }
  }`}
          </code>

        </pre>
        <p>
          In most cases, it&#39;s recommend to use controlled components to
          implement forms. In a controlled component, form data is handled by a
          React component. The alternative is uncontrolled components, where
          form data is handled by the DOM itself.
        </p>

        {/* <!-- 31 --> */}
        <h4 id="31-what-is-the-difference-between-createelement-and-cloneelement-">
          30. What is the difference between createElement and cloneElement?
        </h4>
        <p>
          JSX elements will be transpiled to <code>React.createElement()</code>{" "}
          functions to create React elements which are going to be used for the
          object representation of UI. Whereas <code>cloneElement</code> is used
          to clone an element and pass it new props.
        </p>

        {/* <!-- 32 --> */}
        <h4 id="32-what-is-lifting-state-up-in-react-">
          31. What is Lifting State Up in React?
        </h4>
        <p>
          When several components need to share the same changing data then it
          is recommended to <em>lift the shared state up</em> to their closest
          common ancestor. That means if two child components share the same
          data from its parent, then move the state to parent instead of
          maintaining local state in both of the child components.
        </p>

        {/* <!-- 33 --> */}
        <h4 id="33-what-are-the-different-phases-of-component-lifecycle-">
          32. What are the different phases of component lifecycle?
        </h4>
        <p>The component lifecycle has three distinct lifecycle phases:</p>
        <ol>
          <li>
            <p>
              <strong>Mounting:</strong> The component is ready to mount in the
              browser DOM. This phase covers initialization from{" "}
              <code>constructor()</code>,{" "}
              <code>getDerivedStateFromProps()</code>,<code>render()</code>, and{" "}
              <code>componentDidMount()</code> lifecycle methods.
            </p>
          </li>
          <li>
            <p>
              <strong>Updating:</strong> In this phase, the component gets
              updated in two ways, sending the new props and updating the state
              either from <code>setState()</code> or <code>forceUpdate()</code>.
              This phase covers
              <code>getDerivedStateFromProps()</code>,{" "}
              <code>shouldComponentUpdate()</code>,<code>render()</code>,
              <code>getSnapshotBeforeUpdate()</code> and{" "}
              <code>componentDidUpdate()</code> lifecycle methods.
            </p>
          </li>
          <li>
            <p>
              <strong>Unmounting:</strong> In this last phase, the component is
              not needed and gets unmounted from the browser DOM. This phase
              includes <code>componentWillUnmount()</code> lifecycle method.
            </p>
          </li>
        </ol>
        <p>
          It&#39;s worth mentioning that React internally has a concept of
          phases when applying changes to the DOM. They are separated as follows
        </p>
        <ol>
          <li>
            <p>
              <strong>Render</strong> The component will render without any side
              effects. This applies to Pure components and in this phase, React
              can pause, abort, or restart the render.
            </p>
          </li>
          <li>
            <p>
              <strong>Pre-commit</strong> Before the component actually applies
              the changes to the DOM, there is a moment that allows React to
              read from the DOM through the{" "}
              <code>getSnapshotBeforeUpdate()</code>.
            </p>
          </li>
          <li>
            <p>
              <strong>Commit</strong> React works with the DOM and executes the
              final lifecycles respectively
              <code>componentDidMount()</code> for mounting,{" "}
              <code>componentDidUpdate()</code> for updating, and
              <code>componentWillUnmount()</code> for unmounting.
            </p>
          </li>
        </ol>
        <p>
          React 16.3+ Phases (or an{" "}
          <a href="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">
            interactive version
          </a>
          )
        </p>
        <p>
          <img src={images.Phases16} alt="phases 16.4+" width="90%" />
        </p>
        <p>Before React 16.3</p>
        <p>
          <img src={images.Phases} alt="phases 16.2" width="90%" />
        </p>
        <h4 id="34-what-are-the-lifecycle-methods-of-react-">
          33. What are the lifecycle methods of React?
        </h4>
        <p>Before React 16.3</p>
        <ul>
          <li>
            <strong>componentWillMount:</strong> Executed before rendering and
            is used for App level configuration in your root component.
          </li>
          <li>
            <strong>componentDidMount:</strong> Executed after first rendering
            and here all AJAX requests, DOM or state updates, and set up event
            listeners should occur.
          </li>
          <li>
            <strong>componentWillReceiveProps:</strong> Executed when particular
            prop updates to trigger state transitions.
          </li>
          <li>
            <strong>shouldComponentUpdate:</strong> Determines if the component
            will be updated or not. By default it returns <code>true</code>. If
            you are sure that the component doesn&#39;t need to render after
            state or props are updated, you can return false value. It is a
            great place to improve performance as it allows you to prevent a
            re-render if component receives new prop.
          </li>
          <li>
            <strong>componentWillUpdate:</strong> Executed before re-rendering
            the component when there are props &amp; state changes confirmed by{" "}
            <code>shouldComponentUpdate()</code> which returns true.
          </li>
          <li>
            <strong>componentDidUpdate:</strong> Mostly it is used to update the
            DOM in response to prop or state changes.
          </li>
          <li>
            <strong>componentWillUnmount:</strong> It will be used to cancel any
            outgoing network requests, or remove all event listeners associated
            with the component.
          </li>
        </ul>
        <p>React 16.3+</p>
        <ul>
          <li>
            <strong>getDerivedStateFromProps:</strong> Invoked right before
            calling <code>render()</code> and is invoked on
            <em>every</em> render. This exists for rare use cases where you need
            a derived state. Worth reading{" "}
            <a href="https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html">
              if you need derived state
            </a>
            .
          </li>
          <li>
            <strong>componentDidMount:</strong> Executed after first rendering
            and where all AJAX requests, DOM or state updates, and set up event
            listeners should occur.
          </li>
          <li>
            <strong>shouldComponentUpdate:</strong> Determines if the component
            will be updated or not. By default, it returns <code>true</code>. If
            you are sure that the component doesn&#39;t need to render after the
            state or props are updated, you can return a false value. It is a
            great place to improve performance as it allows you to prevent a
            re-render if component receives a new prop.
          </li>
          <li>
            <strong>getSnapshotBeforeUpdate:</strong> Executed right before
            rendered output is committed to the DOM. Any value returned by this
            will be passed into <code>componentDidUpdate()</code>. This is
            useful to capture information from the DOM i.e. scroll position.
          </li>
          <li>
            <strong>componentDidUpdate:</strong> Mostly it is used to update the
            DOM in response to prop or state changes. This will not fire if{" "}
            <code>shouldComponentUpdate()</code> returns <code>false</code>.
          </li>
          <li>
            <strong>componentWillUnmount</strong> It will be used to cancel any
            outgoing network requests, or remove all event listeners associated
            with the component.
          </li>
        </ul>

        {/* <!-- 35 --> */}
        <h4 id="35-what-are-higher-order-components-">
          34. What are Higher-Order Components?
        </h4>
        <p>
          A <em>higher-order component</em> (<em>HOC</em>) is a function that
          takes a component and returns a new component. Basically, it&#39;s a
          pattern that is derived from React&#39;s compositional nature.
        </p>
        <p>
          We call them <strong>pure components</strong> because they can accept
          any dynamically provided child component but they won&#39;t modify or
          copy any behavior from their input components.
        </p>
        <pre>
          <code>
            <span className="hljs-attribute">const EnhancedComponent</span> =
            higherOrderComponent(WrappedComponent);
          </code>
        </pre>
        <p>HOC can be used for many use cases:</p>
        <ol>
          <li>Code reuse, logic and bootstrap abstraction.</li>
          <li>Render hijacking.</li>
          <li>State abstraction and manipulation.</li>
          <li>Props manipulation.</li>
        </ol>

        {/* <!-- 36 --> */}
        <h4 id="36-how-to-create-props-proxy-for-hoc-component-">
          35. How to create props proxy for HOC component?
        </h4>
        <p>
          You can add/edit props passed to the component using{" "}
          <em>props proxy</em> pattern like this:
        </p>
        {/* <pre>
          <code>
            function <span className="hljs-type">HOC</span>(
            <span className="hljs-type">WrappedComponent</span>) &#123;
            <span className="hljs-keyword">return</span>{" "}
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">Test</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; render() &#123; const newProps = &#123; title:{" "}
            <span className="hljs-string">"New Header"</span>, footer:{" "}
            <span className="hljs-literal">false</span>, showFeatureX:{" "}
            <span className="hljs-literal">false</span>, showFeatureY:{" "}
            <span className="hljs-literal">true</span>, &#125;;
            <span className="hljs-keyword">return</span> &lt;
            <span className="hljs-type">WrappedComponent</span> &#123;...
            <span className="hljs-keyword">this</span>.props&#125;
            &#123;...newProps&#125; /&gt;; &#125; &#125;; &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`function HOC(WrappedComponent) {
      return class Test extends Component {
        render() {
          const newProps = {
            title: "New Header",
            footer: false,
            showFeatureX: false,
            showFeatureY: true,
          };
        return <WrappedComponent {...this.props} {...newProps} />;
        }
     };
  }`}
          </code>
        </pre>

        {/* <!-- 37 --> */}
        <h4 id="37-what-is-context-">36. What is context?</h4>
        <p>
          <em>Context</em> provides a way to pass data through the component
          tree without having to pass props down manually at every level.
        </p>
        <p>
          For example, authenticated users, locale preferences, UI themes need
          to be accessed in the application by many components.
        </p>
        <pre>
          <code>
            <span className="hljs-keyword">const</span> &#123; Provider,
            Consumer &#125; = React.createContext(defaultValue);
          </code>
        </pre>

        {/* <!-- 38 --> */}
        <h4 id="38-what-is-children-prop-">37. What is children prop?</h4>
        <p>
          <em>Children</em> is a prop (<code>this.props.children</code>) that
          allows you to pass components as data to other components, just like
          any other prop you use. Component tree put between component&#39;s
          opening and closing tag will be passed to that component as{" "}
          <code>children</code> prop.
        </p>
        <p>
          There are several methods available in the React API to work with this
          prop. These include
          <code>React.Children.map</code>, <code>React.Children.forEach</code>,{" "}
          <code>React.Children.count</code>,<code>React.Children.only</code>,{" "}
          <code>React.Children.toArray</code>.
        </p>
        <p>A simple usage of children prop looks as below,</p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">const</span> MyDiv =
            React.createClass(&#123;
            <span className="hljs-attr">render</span>:{" "}
            <span className="hljs-function">
              <span className="hljs-keyword">function</span> (
              <span className="hljs-params"></span>){" "}
            </span>
            &#123;
            <span className="hljs-keyword">return</span>{" "}
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">div</span>&gt;
              </span>
              &#123;this.props.children&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">div</span>&gt;
              </span>
            </span>
            ; &#125;, &#125;); ReactDOM.render(
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">MyDiv</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">span</span>&gt;
              </span>
              &#123;"Hello"&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">span</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">span</span>&gt;
              </span>
              &#123;"World"&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">span</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">MyDiv</span>&gt;
              </span>
            </span>
            , node );
          </code>
        </pre> */}
        <pre>
          <code>
            {`const MyDiv = React.createClass({
    render: function () {
        return <div>{this.props.children}</div>;
        },
  });
    ReactDOM.render(
    <MyDiv>
    <span>{"Hello"}</span>
    <span>{"World"}</span>
    </MyDiv>,
    node
    );`}
          </code>
        </pre>

        {/* <!-- 39 --> */}
        <h4 id="39-how-to-write-comments-in-react-">
          38. How to write comments in React?
        </h4>
        <p>
          The comments in React/JSX are similar to JavaScript Multiline comments
          but are wrapped in curly braces.
        </p>
        <p>
          <strong>Single-line comments:</strong>
        </p>
        <pre>
          <code>
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">div</span>&gt;
              </span> <br/>
            </span>
            <span className="hljs-template-tag"><span>{"       "}</span>
              &#123;/* <span className="hljs-name">Single-line</span>{" "}
              comments(In vanilla JavaScript, the single-line comments are
              represented by double slash(//)) &#125;
            </span>
            <span className="xml"></span> <br/><span>{"       "}</span>
            <span className="hljs-template-variable">
              &#123;`Welcome $&#123;user&#125;
            </span>
            <span className="xml">
              , let's play React`&#125; <br/>
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">div</span>&gt;
              </span>
            </span>
          </code>
        </pre>
        
        <p>
          <strong>Multi-line comments:</strong>
        </p>
        <pre>
          <code>
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">div</span>&gt;
              </span> <br/>
            </span>
            <span>{"        "}</span>
            <span className="hljs-template-tag">
              &#123;/* <span className="hljs-name">Multi-line</span> comments
              for more than <br/> one line */&#125; <br/>
            </span>
            <span className="xml"></span>
            <span className="hljs-template-variable">
              &#123;`Welcome $&#123;user&#125;
            </span>
            <span className="xml">
              , let's play React`&#125;
              <span className="hljs-tag">
                 <br/>&lt;/ <span className="hljs-name">div</span>&gt;
              </span>
            </span>
          </code>
        </pre>

        {/* <!-- 40 --> */}
        <h4 id="40-what-is-the-purpose-of-using-super-constructor-with-props-argument-">
          39. What is the purpose of using super constructor with props
          argument?
        </h4>
        <p>
          A child class constructor cannot make use of <code>this</code>{" "}
          reference until the <code>super()</code>
          method has been called. The same applies to ES6 sub-classes as well.
          The main reason for passing props parameter to
          <code>super()</code> call is to access <code>this.props</code> in your
          child constructors.
        </p>
        <p>
          <strong>Passing props:</strong>
        </p>
        {/* <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">MyComponent</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">React</span>.
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; constructor(props) &#123;
            <span className="hljs-keyword">super</span>(props); .log(
            <span className="hljs-keyword">this</span>.props);{" "}
            <span className="hljs-comment">
              // prints &#123; name: 'John', age: 42 &#125;
            </span>
            &#125; &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`class MyComponent extends React.Component {
        constructor(props) {
          super(props);
          .log(this.props); // prints { name: 'John', age: 42 }
        }
  }`}
          </code>
        </pre>
        <p>
          <strong>Not passing props:</strong>
        </p>
        {/* <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">MyComponent</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">React</span>.
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; constructor(props) &#123;
            <span className="hljs-keyword">super</span>(); console.log(
            <span className="hljs-keyword">this</span>.props);{" "}
            <span className="hljs-comment">// prints undefined</span>
            <span className="hljs-comment">
              // but props parameter is still available
            </span>
            console.log(props);{" "}
            <span className="hljs-comment">
              // prints &#123; name: 'John', age: 42 &#125;
            </span>
            &#125; render() &#123;
            <span className="hljs-comment">
              // no difference outside constructor
            </span>
            console.log(<span className="hljs-keyword">this</span>.props);{" "}
            <span className="hljs-comment">
              // prints &#123; name: 'John', age: 42 &#125;
            </span>
            &#125; &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`class MyComponent extends React.Component {
      constructor(props) {
        super();
        console.log(this.props); // prints undefined
        // but props parameter is still available
        console.log(props); // prints { name: 'John', age: 42 }
      }
      render() {
        // no difference outside constructor
        console.log(this.props); // prints { name: 'John', age: 42 }
      }
  }`}
          </code>
        </pre>
        <p>
          The above code snippets reveals that <code>this.props</code> is
          different only within the constructor. It would be the same outside
          the constructor.
        </p>

        {/* <!-- 41 --> */}
        <h4 id="41-what-is-reconciliation-">40. What is reconciliation?</h4>
        <p>
          <code>Reconciliation</code> is the process through which React updates
          the Browser DOM and makes React work faster. React use a{" "}
          <code>diffing algorithm</code> so that component updates are
          predictable and faster. React would first calculate the difference
          between the <code>real DOM</code> and the copy of DOM{" "}
          <code>(Virtual DOM)</code>
          when there&#39;s an update of components. React stores a copy of
          Browser DOM which is called <code>Virtual DOM</code>. When we make
          changes or add data, React creates a new Virtual DOM and compares it
          with the previous one. This comparison is done by
          <code>Diffing Algorithm</code>. Now React compares the Virtual DOM
          with Real DOM. It finds out the changed nodes and updates only the
          changed nodes in Real DOM leaving the rest nodes as it is. This
          process is called <em>Reconciliation</em>.
        </p>

        {/* <!-- 42 --> */}
        <h4 id="42-how-to-set-state-with-a-dynamic-key-name-">
          41. How to set state with a dynamic key name?
        </h4>
        <p>
          If you are using ES6 or the Babel transpiler to transform your JSX
          code then you can accomplish this with
          <em>computed property names</em>.
        </p>
        {/* <pre>
          <code>
            handleInputChange(event) &#123; this.setState(&#123; [event
            <span className="hljs-selector-class">.target</span>
            <span className="hljs-selector-class">.id</span>]: event
            <span className="hljs-selector-class">.target</span>
            <span className="hljs-selector-class">.value</span> &#125;) &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`handleInputChange(event) {
      this.setState({ [event.target.id]: event.target.value })
  }`}
          </code>
        </pre>

        {/* <!-- 43 --> */}
        <h4 id="43-what-would-be-the-common-mistake-of-function-being-called-every-time-the-component-renders-">
          42. What would be the common mistake of function being called every
          time the component renders?
        </h4>
        <p>
          You need to make sure that function is not being called while passing
          the function as a parameter.
        </p>
        {/* <pre>
          <code>
            render() &#123;
            <span className="hljs-comment">
              // Wrong: handleClick is called instead of passed as a reference!
            </span>
            <span className="hljs-keyword">return</span> &lt;
            <span className="hljs-keyword">button</span>{" "}
            <span className="hljs-keyword">onClick</span>
            =&#123;this.handleClick()&#125;&gt;&#123;
            <span className="hljs-string">'Click Me'</span>&#125;&lt;/
            <span className="hljs-keyword">button</span>&gt; &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`render() {
    // Wrong: handleClick is called instead of passed as a reference!
    return <button onClick={this.handleClick()}>{'Click Me'}</button>
}`}
          </code>
        </pre>
        <p>Instead, pass the function itself without parenthesis:</p>
        {/* <pre>
          <code>
            render() &#123;
            <span className="hljs-comment">
              // Correct: handleClick is passed as a reference!
            </span>
            <span className="hljs-keyword">return</span> &lt;
            <span className="hljs-keyword">button</span>{" "}
            <span className="hljs-keyword">onClick</span>
            =&#123;this.handleClick&#125;&gt;&#123;
            <span className="hljs-string">'Click Me'</span>&#125;&lt;/
            <span className="hljs-keyword">button</span>&gt; &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`render() {
    // Correct: handleClick is passed as a reference!
    return <button onClick={this.handleClick}>{'Click Me'}</button>
}`}
          </code>
        </pre>

        {/* <!-- 44 --> */}
        <h4 id="44-is-lazy-function-supports-named-exports-">
          43. Is lazy function supports named exports?
        </h4>
        <p>
          No, currently <code>React.lazy</code> function supports default
          exports only. If you would like to import modules which are named
          exports, you can create an intermediate module that reexports it as
          the default. It also ensures that tree shaking keeps working and don’t
          pull unused components. Let&#39;s take a component file which exports
          multiple named components,
        </p>
        {/* <pre>
          <code>
            <span className="hljs-comment">// MoreComponents.js</span>
            <span className="hljs-keyword">export</span>{" "}
            <span className="hljs-keyword">const</span> SomeComponent ={" "}
            <span className="hljs-comment">/* ... </span>;
            <span className="hljs-keyword">export</span>{" "}
            <span className="hljs-keyword">const</span> UnusedComponent ={" "}
            <span className="hljs-comment">/* ... </span>;
          </code>
        </pre> */}
        <pre>
          <code>
            {`// MoreComponents.js
      export const SomeComponent = /* ... */;
      export const UnusedComponent = /* ... */;`}
          </code>
        </pre>
        <br/>
        <pre>
          <code>
            and reexport `MoreComponents.js` components{" "}
            <span className="hljs-keyword">in</span> an intermediate file
            `IntermediateComponent.js`
          </code>
        </pre>
        <br/>
        {/* <pre>
          <code>
            <span className="hljs-comment">// IntermediateComponent.js</span>
            <span className="hljs-keyword">export</span> &#123; SomeComponent{" "}
            <span className="hljs-keyword">as</span>{" "}
            <span className="hljs-keyword">default</span> &#125;{" "}
            <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">"./MoreComponents.js"</span>;
          </code>
        </pre> */}
        <pre>
          <code>
            {`// IntermediateComponent.js
    export { SomeComponent as default } from "./MoreComponents.js";`}
          </code>
        </pre>
        <br/>
        <pre>
          <code>
            Now you can <span className="hljs-keyword">import</span> the{" "}
            <span className="hljs-keyword">module</span> using{" "}
            <span className="hljs-keyword">lazy</span>{" "}
            <span className="hljs-built_in">function</span> as below,
          </code>
        </pre>
        <br/>
        {/* <pre>
          <code>
            {" "}
            <span className="hljs-keyword">import</span> React, &#123; lazy
            &#125; <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">"react"</span>;
            <span className="hljs-keyword">const</span> SomeComponent = lazy(
            <span className="hljs-function">
              <span className="hljs-params">()</span> =&gt;
            </span>{" "}
            <span className="hljs-keyword">import</span>(
            <span className="hljs-string">"./IntermediateComponent.js"</span>));
          </code>
        </pre> */}
        <pre>
          <code>
            {`import React, { lazy } from "react";
 const SomeComponent = lazy(() => import("./IntermediateComponent.js"));`}
          </code>
        </pre>

        {/* <!-- 45 --> */}
        <h4 id="45-why-react-uses-classname-over-class-attribute-">
          44. Why React uses <code>className</code> over
          <code>class</code> attribute?
        </h4>
        <p>
          The attribute <code>class</code> is a keyword in JavaScript, and JSX
          is an extension of JavaScript. That&#39;s the principle reason why
          React uses <code>className</code> instead of <code>class</code>. Pass
          a string as the
          <code>className</code> prop.
        </p>
        {/* <pre>
          <code>
            render() &#123;
            <span className="hljs-keyword">return</span>{" "}
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">span</span>{" "}
                <span className="hljs-attr">className</span>=
                <span className="hljs-string">&#123;</span>'
                <span className="hljs-attr">menu</span>{" "}
                <span className="hljs-attr">navigation-menu</span>'&#125;&gt;
              </span>
              &#123;'Menu'&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">span</span>&gt;
              </span>
            </span>
            &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`render() {
    return <span className={'menu navigation-menu'}>{'Menu'}</span>
  }`}
          </code>
        </pre>

        {/* <!-- 46 --> */}
        <h4 id="46-what-are-fragments-">45. What are fragments?</h4>
        <p>
          It&#39;s a common pattern or practice in React for a component to
          return multiple elements.
          <em>Fragments</em> let you group a list of children without adding
          extra nodes to the DOM. You need to use either{" "}
          <strong>&#60;Fragment&#62;</strong> or a shorter syntax having empty
          tag (<strong>&lt;&gt;&lt;/&gt;</strong>).
        </p>
        <p>
          Below is the example of how to use fragment inside <em>Story</em>{" "}
          component.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">Story</span>(
              <span className="hljs-params">
                &#123;title, description, date&#125;
              </span>
              ){" "}
            </span>
            &#123;
            <span className="hljs-keyword">return</span> (
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">Fragment</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">h2</span>&gt;
              </span>
              &#123;title&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">h2</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">p</span>&gt;
              </span>
              &#123;description&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">p</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">p</span>&gt;
              </span>
              &#123;date&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">p</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">Fragment</span>&gt;
              </span>
            </span>
            ); &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`function Story({title, description, date}) {
    return (
    <Fragment>
    <h2>{title}</h2>
    <p>{description}</p>
    <p>{date}</p>
    </Fragment>
    );
  }`}
          </code>
        </pre>
        <p>
          It is also possible to render list of fragments inside a loop with the
          mandatory <strong>key</strong>
          attribute supplied.
        </p>
        {/* <pre>
          <code>
            <span className="xml">function StoryBook() </span>
            <span className="hljs-template-variable">
              &#123; return stories.map(story =&gt; &lt;Fragment key=&#123;
              story.id&#125;
            </span>
            <span className="xml">
              &gt;
              <span className="hljs-tag">
                &lt;<span className="hljs-name">h2</span>&gt;
              </span>
            </span>
            <span className="hljs-template-variable">
              &#123;story.title&#125;
            </span>
            <span className="xml">
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">h2</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">p</span>&gt;
              </span>
            </span>
            <span className="hljs-template-variable">
              &#123;story.description&#125;
            </span>
            <span className="xml">
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">p</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">p</span>&gt;
              </span>
            </span>
            <span className="hljs-template-variable">
              &#123;story.date&#125;
            </span>
            <span className="xml">
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">p</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">Fragment</span>&gt;
              </span>
              ); &#125;
            </span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`function StoryBook() {
    return stories.map(story =>
    <Fragment key={ story.id}>
    <h2>{story.title}</h2>
    <p>{story.description}</p>
    <p>{story.date}</p>
    </Fragment>
    );
}`}
          </code>
        </pre>
        <p>
          Usually, you don&#39;t need to use <strong>&#60;Fragment&#62;</strong>{" "}
          until unless there is a need of <em>key</em> attribute. The usage of
          shorter syntax looks like below.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">Story</span>(
              <span className="hljs-params">
                &#123;title, description, date&#125;
              </span>
              ){" "}
            </span>
            &#123;
            <span className="hljs-keyword">return</span> (
            <span className="xml">
              <span className="hljs-tag">&lt;&gt;</span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">h2</span>&gt;
              </span>
              &#123;title&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">h2</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">p</span>&gt;
              </span>
              &#123;description&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">p</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">p</span>&gt;
              </span>
              &#123;date&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">p</span>&gt;
              </span>
              <span className="hljs-tag">&lt;/&gt;</span>
              ); &#125;
            </span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`function Story({title, description, date}) {
      return (
      <>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{date}</p>
      </>
      );
  }`}
          </code>
        </pre>

        {/* <!-- 47 --> */}
        <h4 id="47-why-fragments-are-better-than-container-divs-">
          46. Why fragments are better than container divs?
        </h4>
        <p>
          Below are the list of reasons to prefer fragments over container DOM
          elements,
        </p>
        <ol>
          <li>
            Fragments are a bit faster and use less memory by not creating an
            extra DOM node. This only has a real benefit on very large and deep
            trees.
          </li>
          <li>
            Some CSS mechanisms like <em>Flexbox</em> and <em>CSS Grid</em> have
            a special parent-child relationships, and adding divs in the middle
            makes it hard to keep the desired layout.
          </li>
          <li>The DOM Inspector is less cluttered.</li>
        </ol>

        {/* <!-- 48 --> */}
        <h4 id="48-what-are-portals-in-react-">
          47. What are portals in React?
        </h4>
        <p>
          <em>Portal</em> is a recommended way to render children into a DOM
          node that exists outside the DOM hierarchy of the parent component.
        </p>
        <pre>
          <code>
            ReactDOM.createPortal(child,{" "}
            <span className="hljs-keyword">container</span>);
          </code>
        </pre>
        <p>
          The first argument is any render-able React child, such as an element,
          string, or fragment. The second argument is a DOM element.
        </p>

        {/* <!-- 49 --> */}
        <h4 id="49-what-are-stateless-components-">
          48. What are stateless components?
        </h4>
        <p>
          If the behaviour of a component is independent of its state then it
          can be a stateless component. You can use either a function or a class
          for creating stateless components. But unless you need to use a
          lifecycle hook in your components, you should go for function
          components. There are a lot of benefits if you decide to use function
          components here; they are easy to write, understand, and test, a
          little faster, and you can avoid the
          <code>this</code> keyword altogether.
        </p>

        {/* <!-- 50 --> */}
        <h4 id="50-what-are-stateful-components-">
          49. What are stateful components?
        </h4>
        <p>
          If the behaviour of a component is dependent on the <em>state</em> of
          the component then it can be termed as stateful component. These{" "}
          <em>stateful components</em> are either function components with hooks
          or <em>class components</em>.
        </p>
        <p>
          Let&#39;s take an example of function stateful component which update
          the state based on click event,
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">import</span> React,
            &#123;useState&#125; <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">'react'</span>;
            <span className="hljs-keyword">const</span> App ={" "}
            <span className="hljs-function">
              (<span className="hljs-params">props</span>) =&gt;
            </span>{" "}
            &#123;
            <span className="hljs-keyword">const</span> [count, setCount] =
            useState(<span className="hljs-number">0</span>); handleIncrement()
            &#123; setCount(count+<span className="hljs-number">1</span>);
            &#125;
            <span className="hljs-keyword">return</span> (
            <span className="xml">
              <span className="hljs-tag">&lt;&gt;</span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">button</span>{" "}
                <span className="hljs-attr">onClick</span>=
                <span className="hljs-string">&#123;handleIncrement&#125;</span>
                &gt;
              </span>
              Increment
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">button</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">span</span>&gt;
              </span>
              Counter: &#123;count&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">span</span>&gt;
              </span>
              <span className="hljs-tag">&lt;/&gt;</span>) &#125;
            </span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`import React, {useState} from 'react';
    const App = (props) => {
    const [count, setCount] = useState(0);
    handleIncrement() {
    setCount(count+1);
    }
    return (
    <>
    <button onClick={handleIncrement}>Increment</button>
    <span>Counter: {count}</span>
    </>
    )
  }`}
          </code>
        </pre>
        <details>
          <summary>
            <b>See Class</b>
          </summary>
          <p>
            The equivalent class stateful component with a state that gets
            initialized in the
            <code>constructor</code>.
            <code>
              class App extends Component &#123; constructor(props) &#123;
              super(props); this.state = &#123; count: 0 &#125;; &#125;
              handleIncrement() &#123; setState(&#123;count: this.state.count +
              1&#125;) &#125; render() &#123; &lt;&gt; &lt;button
              onClick=&#123;() =&gt;
              this.handleIncrement&#125;&gt;Increment&lt;/button&gt;
              &lt;span&gt;Count: &#123;count&#125;&lt;/span&gt; &lt;/&gt; &#125;
              &#125;
            </code>
          </p>
        </details>

        {/* <!--  --> */}

        <h4 id="51-how-to-apply-validation-on-props-in-react-">
          50. How to apply validation on props in React?
        </h4>
        <p>
          When the application is running in <em>development mode</em>, React
          will automatically check all props that we set on components to make
          sure they have <em>correct type</em>. If the type is incorrect, React
          will generate warning messages in the console. It&#39;s disabled in{" "}
          <em>production mode</em> due to performance impact. The mandatory
          props are defined with <code>isRequired</code>.
        </p>
        <p>The set of predefined prop types:</p>
        <ol>
          <li>
            <code>PropTypes.number</code>
          </li>
          <li>
            <code>PropTypes.string</code>
          </li>
          <li>
            <code>PropTypes.array</code>
          </li>
          <li>
            <code>PropTypes.object</code>
          </li>
          <li>
            <code>PropTypes.func</code>
          </li>
          <li>
            <code>PropTypes.node</code>
          </li>
          <li>
            <code>PropTypes.element</code>
          </li>
          <li>
            <code>PropTypes.bool</code>
          </li>
          <li>
            <code>PropTypes.symbol</code>
          </li>
          <li>
            <code>PropTypes.any</code>
          </li>
        </ol>
        <p>
          We can define <code>propTypes</code> for <code>User</code> component
          as below:
        </p>
        <pre>
          <code>
            <span className="hljs-keyword">import</span>{" "}
            <span className="hljs-type">React</span> from{" "}
            <span className="hljs-string">"react"</span>; <br/>
            <span className="hljs-keyword">import</span>{" "}
            <span className="hljs-type">PropTypes</span> from{" "}
            <span className="hljs-string">"prop-types"</span>; <br/>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">User</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">React</span>.
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; <br /> static propTypes = &#123; <br /> name:{" "}
            <span className="hljs-type">PropTypes</span>.string.isRequired, <br /> age:{" "}
            <span className="hljs-type">PropTypes</span>.number.isRequired, <br/>
            &#125;; <br /> render() &#123; <br />
            <span className="hljs-keyword">return</span> ( <br /> &lt;&gt; <br/>
            &lt;h1&gt;&#123;`<span className="hljs-type">Welcome</span>, $&#123;
            <span className="hljs-keyword">this</span>
            .props.name&#125;`&#125;&lt;/h1&gt;<br/> &lt;h2&gt;&#123;`
            <span className="hljs-type">Age</span>, $&#123;
            <span className="hljs-keyword">this</span>
            .props.age&#125;`&#125;&lt;/h2&gt; &lt;/&gt; <br /> ); <br /> &#125; <br/> &#125;
          </code>
        </pre>
        <p>
          <strong>Note:</strong> In React v15.5 <em>PropTypes</em> were moved
          from <code>React.PropTypes</code> to
          <code>prop-types</code> library.
        </p>
        <p>
          <em>The Equivalent Functional Component</em>
        </p>
        <pre>
          <code>
            <span className="hljs-keyword">import</span> React{" "}
            <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">"react"</span>; <br/>
            <span className="hljs-keyword">import</span> PropTypes{" "}
            <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">"prop-types"</span>; <br />
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">User</span>(
              <span className="hljs-params">&#123; name, age &#125;</span>){" "}
            </span>
            &#123; <br/>
            <span className="hljs-keyword">return</span> ( <br />
            <span className="xml">
              <span className="hljs-tag">&lt;&gt;</span> <br/>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">h1</span>&gt;
              </span>
              &#123;`Welcome, $&#123;name&#125;`&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">h1</span>&gt;
              </span> <br />
              <span className="hljs-tag">
                &lt;<span className="hljs-name">h2</span>&gt;
              </span>
              &#123;`Age, $&#123;age&#125;`&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">h2</span>&gt;
              </span> <br />
              <span className="hljs-tag">&lt;/&gt;</span> <br />
              ); <br/> &#125; <br/> User.propTypes = &#123; <br /> name:
              PropTypes.string.isRequired,<br/> age: PropTypes.number.isRequired, <br/>
              &#125;;
            </span>
          </code>
        </pre>
        <h4 id="52-what-are-the-advantages-of-react-">
          51. What are the advantages of React?
        </h4>
        <p>Below are the list of main advantages of React,</p>
        <ol>
          <li>
            Increases the application&#39;s performance with{" "}
            <em>Virtual DOM</em>.
          </li>
          <li>JSX makes code easy to read and write.</li>
          <li>
            It renders both on client and server side (<em>SSR</em>).
          </li>
          <li>
            Easy to integrate with frameworks (Angular, Backbone) since it is
            only a view library.
          </li>
          <li>
            Easy to write unit and integration tests with tools such as Jest.
          </li>
        </ol>
        <h4 id="53-what-are-the-limitations-of-react-">
          52. What are the limitations of React?
        </h4>
        <p>
          Apart from the advantages, there are few limitations of React too,
        </p>
        <ol>
          <li>React is just a view library, not a full framework.</li>
          <li>
            There is a learning curve for beginners who are new to web
            development.
          </li>
          <li>
            Integrating React into a traditional MVC framework requires some
            additional configuration.
          </li>
          <li>The code complexity increases with inline templating and JSX.</li>
          <li>
            Too many smaller components leading to over engineering or
            boilerplate.
          </li>
        </ol>
        <h4 id="54-what-are-error-boundaries-in-react-v16-">
          53. What are error boundaries in React v16?
        </h4>
        <p>
          <em>Error boundaries</em> are components that catch JavaScript errors
          anywhere in their child component tree, log those errors, and display
          a fallback UI instead of the component tree that crashed.
        </p>
        <p>
          A class component becomes an error boundary if it defines a new
          lifecycle method called
          <code>componentDidCatch(error, info)</code> or{" "}
          <code>static getDerivedStateFromError()</code>:
        </p>
        {/* <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">ErrorBoundary</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">React</span>.
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; constructor(props) &#123;
            <span className="hljs-keyword">super</span>(props);
            <span className="hljs-keyword">this</span>.state = &#123; hasError:{" "}
            <span className="hljs-literal">false</span> &#125;; &#125;
            componentDidCatch(error, info) &#123;
            <span className="hljs-comment">
              // You can also log the error to an error reporting service
            </span>
            logErrorToMyService(error, info); &#125; static
            getDerivedStateFromError(error) &#123;
            <span className="hljs-comment">
              // Update state so the next render will show the fallback UI.
            </span>
            <span className="hljs-keyword">return</span> &#123; hasError:{" "}
            <span className="hljs-literal">true</span> &#125;; &#125; render()
            &#123;
            <span className="hljs-keyword">if</span> (
            <span className="hljs-keyword">this</span>.state.hasError) &#123;
            <span className="hljs-comment">
              // You can render any custom fallback UI
            </span>
            <span className="hljs-keyword">return</span> &lt;h1&gt;&#123;
            <span className="hljs-string">"Something went wrong."</span>
            &#125;&lt;/h1&gt;; &#125;
            <span className="hljs-keyword">return</span>{" "}
            <span className="hljs-keyword">this</span>.props.children; &#125;
            &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, info);
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>{"Something went wrong."}</h1>;
      }
        return this.props.children;
    }
}`}
          </code>
        </pre>
        <br />
        {/* <pre>
          <code>
            <span className="hljs-section">&lt;ErrorBoundary&gt;</span>
            <span className="hljs-section">&lt;MyWidget /&gt;</span>
            <span className="hljs-section">&lt;/ErrorBoundary&gt;</span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`<ErrorBoundary>
<MyWidget />
</ErrorBoundary>`}
          </code>
        </pre>

        <h4 id="55-how-are-error-boundaries-handled-in-react-v15-">
          54. How are error boundaries handled in React v15?
        </h4>
        <p>
          React v15 provided very basic support for <em>error boundaries</em>{" "}
          using <code>unstable_handleError</code>
          method. It has been renamed to <code>componentDidCatch</code> in React
          v16.
        </p>
        <h4 id="56-what-are-the-recommended-ways-for-static-type-checking-">
          55. What are the recommended ways for static type checking?
        </h4>
        <p>
          Normally we use <em>PropTypes library</em> (
          <code>React.PropTypes</code> moved to a <code>prop-types</code>
          package since React v15.5) for <em>type checking</em> in the React
          applications. For large code bases, it is recommended to use{" "}
          <em>static type checkers</em> such as Flow or TypeScript, that perform
          type checking at compile time and provide auto-completion features.
        </p>
        <h4 id="57-what-is-the-use-of-react-dom-package-">
          56. What is the use of <code>react-dom</code> package?
        </h4>
        <p>
          The <code>react-dom</code> package provides{" "}
          <em>DOM-specific methods</em> that can be used at the top level of
          your app. Most of the components are not required to use this module.
          Some of the methods of this package are:
        </p>
        <ol>
          <li>
            <code>render()</code>
          </li>
          <li>
            <code>hydrate()</code>
          </li>
          <li>
            <code>unmountComponentAtNode()</code>
          </li>
          <li>
            <code>findDOMNode()</code>
          </li>
          <li>
            <code>createPortal()</code>
          </li>
        </ol>
        <h4 id="58-what-is-the-purpose-of-render-method-of-react-dom-">
          57. What is the purpose of render method of
          <code>react-dom</code>?
        </h4>
        <p>
          This method is used to render a React element into the DOM in the
          supplied container and return a reference to the component. If the
          React element was previously rendered into container, it will perform
          an update on it and only mutate the DOM as necessary to reflect the
          latest changes.
        </p>
        <pre>
          <code>
            <span className="hljs-selector-tag">ReactDOM</span>
            <span className="hljs-selector-class">.render</span>(
            <span className="hljs-selector-tag">element</span>,{" "}
            <span className="hljs-selector-tag">container</span>,{" "}
            <span className="hljs-selector-attr">[callback]</span>)
          </code>
        </pre>
        <p>
          If the optional callback is provided, it will be executed after the
          component is rendered or updated.
        </p>
        <h4 id="59-what-is-reactdomserver-">58. What is ReactDOMServer?</h4>
        <p>
          The <code>ReactDOMServer</code> object enables you to render
          components to static markup (typically used on node server). This
          object is mainly used for <em>server-side rendering</em> (SSR). The
          following methods can be used in both the server and browser
          environments:
        </p>
        <ol>
          <li>
            <code>renderToString()</code>
          </li>
          <li>
            <code>renderToStaticMarkup()</code>
          </li>
        </ol>
        <p>
          For example, you generally run a Node-based web server like Express,
          Hapi, or Koa, and you call
          <code>renderToString</code> to render your root component to a string,
          which you then send as response.
        </p>
        {/* <pre>
          <code>
            // using Express import &#123; renderToString &#125; from
            "react-dom/server"; import MyPage from "./MyPage"; app.get("/",
            (req, res) =&gt; &#123; res.write( "
            <span className="hljs-meta">&lt;!DOCTYPE html&gt;</span>
            <span className="hljs-tag">
              &lt;<span className="hljs-name">html</span>&gt;
            </span>
            <span className="hljs-tag">
              &lt;<span className="hljs-name">head</span>&gt;
            </span>
            <span className="hljs-tag">
              &lt;<span className="hljs-name">title</span>&gt;
            </span>
            My Page
            <span className="hljs-tag">
              &lt;/<span className="hljs-name">title</span>&gt;
            </span>
            <span className="hljs-tag">
              &lt;/<span className="hljs-name">head</span>&gt;
            </span>
            <span className="hljs-tag">
              &lt;<span className="hljs-name">body</span>&gt;
            </span>
            " ); res.write('
            <span className="hljs-tag">
              &lt;<span className="hljs-name">div</span>{" "}
              <span className="hljs-attr">id</span>=
              <span className="hljs-string">"content"</span>&gt;
            </span>
            '); res.write(renderToString(
            <span className="hljs-tag">
              &lt;<span className="hljs-name">MyPage</span> /&gt;
            </span>
            )); res.write("
            <span className="hljs-tag">
              &lt;/<span className="hljs-name">div</span>&gt;
            </span>
            <span className="hljs-tag">
              &lt;/<span className="hljs-name">body</span>&gt;
            </span>
            <span className="hljs-tag">
              &lt;/<span className="hljs-name">html</span>&gt;
            </span>
            "); res.end(); &#125;);
          </code>
        </pre> */}
        <pre>
          <code>
            {`// using Express
  import { renderToString } from "react-dom/server";
  import MyPage from "./MyPage";
  app.get("/", (req, res) => {
      res.write(
      "<!DOCTYPE html><html><head><title>My Page</title></head><body>"
      );
      res.write('<div id="content">');
      res.write(renderToString(<MyPage />));
      res.write("</div></body></html>");
      res.end();
  });`}
          </code>
        </pre>
        <h4 id="60-how-to-use-innerhtml-in-react-">
          59. How to use innerHTML in React?
        </h4>
        <p>
          The <code>dangerouslySetInnerHTML</code> attribute is React&#39;s
          replacement for using <code>innerHTML</code>
          in the browser DOM. Just like <code>innerHTML</code>, it is risky to
          use this attribute considering cross-site scripting (XSS) attacks. You
          just need to pass a <code>__html</code> object as key and HTML text as
          value.
        </p>
        <p>
          In this example MyComponent uses <code>dangerouslySetInnerHTML</code>{" "}
          attribute for setting HTML markup:
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">function</span>{" "}
            <span className="hljs-title">createMarkup</span>() &#123;
            <span className="hljs-keyword">return</span>{" "}
            <span className="hljs-type">&#123;</span> __html:{" "}
            <span className="hljs-string">"First &amp;middot; Second"</span>{" "}
            &#125;; &#125;
            <span className="hljs-keyword">function</span>{" "}
            <span className="hljs-title">MyComponent</span>() &#123;
            <span className="hljs-keyword">return</span>{" "}
            <span className="hljs-type">&lt;div</span>{" "}
            dangerouslySetInnerHTML=&#123;createMarkup()&#125; /&gt;; &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`function createMarkup() {
     return { __html: "First &middot; Second" };
    }
function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
    }`}
          </code>
        </pre>
        <h4 id="61-how-to-use-styles-in-react-">
          60. How to use styles in React?
        </h4>
        <p>
          The <code>style</code> attribute accepts a JavaScript object with
          camelCased properties rather than a CSS string. This is consistent
          with the DOM style JavaScript property, is more efficient, and
          prevents XSS security holes.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">const</span> divStyle = &#123;
            <span className="hljs-attr">color</span>:{" "}
            <span className="hljs-string">"blue"</span>,
            <span className="hljs-attr">backgroundImage</span>:{" "}
            <span className="hljs-string">"url("</span> + imgUrl +{" "}
            <span className="hljs-string">")"</span>, &#125;;
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">HelloWorldComponent</span>(
              <span className="hljs-params"></span>){" "}
            </span>
            &#123;
            <span className="hljs-keyword">return</span>{" "}
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">div</span>{" "}
                <span className="hljs-attr">style</span>=
                <span className="hljs-string">&#123;divStyle&#125;</span>&gt;
              </span>
              Hello World!
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">div</span>&gt;
              </span>
            </span>
            ; &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`const divStyle = {
      color: "blue",
      backgroundImage: "url(" + imgUrl + ")",
    };
    function HelloWorldComponent() {
       return <div style={divStyle}>Hello World!</div>;
    }`}
          </code>
        </pre>
        <p>
          Style keys are camelCased in order to be consistent with accessing the
          properties on DOM nodes in JavaScript (e.g.
          <code>node.style.backgroundImage</code>).
        </p>
        <h4 id="62-how-events-are-different-in-react-">
          61. How events are different in React?
        </h4>
        <p>Handling events in React elements has some syntactic differences:</p>
        <ol>
          <li>
            React event handlers are named using camelCase, rather than
            lowercase.
          </li>
          <li>
            With JSX you pass a function as the event handler, rather than a
            string.
          </li>
        </ol>
        <h4 id="63-what-will-happen-if-you-use-setstate-in-constructor-">
          62. What will happen if you use
          <code>setState()</code>
          in constructor?
        </h4>
        <p>
          When you use <code>setState()</code>, then apart from assigning to the
          object state React also re-renders the component and all its children.
          You would get error like this:{" "}
          <em>Can only update a mounted or mounting component.</em> So we need
          to use <code>this.state</code> to initialize variables inside
          constructor.
        </p>

        <h4 id="64-what-is-the-impact-of-indexes-as-keys-">
          63. What is the impact of indexes as keys?
        </h4>
        <p>
          Keys should be stable, predictable, and unique so that React can keep
          track of elements.
        </p>
        <p>
          In the below code snippet each element&#39;s key will be based on
          ordering, rather than tied to the data that is being represented. This
          limits the optimizations that React can do.
        </p>
        {/* <pre>
          <code>
            &#123; todos.map((<span className="hljs-name">todo</span>, index)
            =&gt; &lt;Todo &#123;...todo&#125; key=&#123;index&#125; /&gt;)
            <span className="hljs-comment">;</span>
            &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`{
  todos.map((todo, index) => <Todo {...todo} key={index} />);
}`}
          </code>
        </pre>
        <p>
          If you use element data for unique key, assuming todo.id is unique to
          this list and stable, React would be able to reorder elements without
          needing to reevaluate them as much.
        </p>
        {/* <pre>
          <code>
            &#123; todos.map((<span className="hljs-name">todo</span>) =&gt;
            &lt;Todo &#123;...todo&#125; key=&#123;todo.id&#125; /&gt;)
            <span className="hljs-comment">;</span>
            &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`{
 todos.map((todo) => <Todo {...todo} key={todo.id} />);
}`}
          </code>
        </pre>

        <h4 id="65-is-it-good-to-use-setstate-in-componentwillmount-method-">
          64. Is it good to use <code>setState()</code>
          in
          <code>componentWillMount()</code> method?
        </h4>
        <pre>
          <code>
            componentDidMount() &#123; <br/> axios.get(`
            <span className="javascript">api/todos</span>`) <br/> .
            <span className="hljs-keyword">then</span>(
            <span className="hljs-function">
              <span className="hljs-params">(result)</span> =&gt; 
            </span>{" "}
            &#123;<br/>
            <span className="hljs-keyword">this</span>.setState(&#123; <br/> messages:
            [...result.data]  <br/> &#125;) <br/> &#125;) <br/> &#125;
          </code>
        </pre>
        <br />
        <pre>
          <code>
            Yes, it is safe to <span className="hljs-keyword">use</span>{" "}
            <span className="hljs-string">`setState()`</span> inside{" "}
            <span className="hljs-string">`componentWillMount()`</span> method.
            But <span className="hljs-keyword">at</span> the same it{" "}
            <span className="hljs-keyword">is</span> recommended{" "}
            <span className="hljs-keyword">to</span> avoid async initialization{" "}
            <span className="hljs-keyword">in</span>{" "}
            <span className="hljs-string">`componentWillMount()`</span>{" "}
            lifecycle method.{" "}
            <span className="hljs-string">`componentWillMount()`</span>{" "}
            <span className="hljs-keyword">is</span> invoked immediately{" "}
            <span className="hljs-keyword">before</span> mounting occurs. It{" "}
            <span className="hljs-keyword">is</span> called{" "}
            <span className="hljs-keyword">before</span>{" "}
            <span className="hljs-string">`render()`</span>, therefore setting
            state <span className="hljs-keyword">in</span> this method will{" "}
            <span className="hljs-keyword">not</span>{" "}
            <span className="hljs-keyword">trigger</span> a re-render. Avoid
            introducing <span className="hljs-keyword">any</span> side-effects{" "}
            <span className="hljs-keyword">or</span> subscriptions{" "}
            <span className="hljs-keyword">in</span> this method. We need{" "}
            <span className="hljs-keyword">to</span> make sure async calls{" "}
            <span className="hljs-keyword">for</span> component initialization
            happened <span className="hljs-keyword">in</span>{" "}
            <span className="hljs-string">`componentDidMount()`</span> instead{" "}
            <span className="hljs-keyword">of</span>{" "}
            <span className="hljs-string">`componentWillMount()`</span>.
          </code>
        </pre>

        <h4 id="66-what-will-happen-if-you-use-props-in-initial-state-">
          65. What will happen if you use props in initial state?
        </h4>
        <p>
          If the props on the component are changed without the component being
          refreshed, the new prop value will never be displayed because the
          constructor function will never update the current state of the
          component. The initialization of state from props only runs when the
          component is first created.
        </p>
        <p>The below component won&#39;t display the updated input value:</p>
        {/* <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">MyComponent</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">React</span>.
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; constructor(props) &#123;
            <span className="hljs-keyword">super</span>(props);
            <span className="hljs-keyword">this</span>.state = &#123; records:
            [], inputValue: <span className="hljs-keyword">this</span>
            .props.inputValue, &#125;; &#125; render() &#123;
            <span className="hljs-keyword">return</span> &lt;div&gt;&#123;
            <span className="hljs-keyword">this</span>
            .state.inputValue&#125;&lt;/div&gt;; &#125; &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        records: [],
        inputValue: this.props.inputValue,
        };
    }
    render() {
      return <div>{this.state.inputValue}</div>;
    }
}`}
          </code>
        </pre>
        <p>Using props inside render method will update the value:</p>
        {/* <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">MyComponent</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">React</span>.
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; constructor(props) &#123;
            <span className="hljs-keyword">super</span>(props);
            <span className="hljs-keyword">this</span>.state = &#123; record:
            [], &#125; &#125; render() &#123;
            <span className="hljs-keyword">return</span> &lt;div&gt;&#123;
            <span className="hljs-keyword">this</span>
            .props.inputValue&#125;&lt;/div&gt;; &#125; &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`class MyComponent extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
          record: [],
        }
    }
    render() {
      return <div>{this.props.inputValue}</div>;
    }`}
          </code>
        </pre>

        <h4 id="67-how-do-you-conditionally-render-components-">
          66. How do you conditionally render components?
        </h4>
        <p>
          In some cases you want to render different components depending on
          some state. JSX does not render
          <code>false</code>
          or <code>undefined</code>, so you can use conditional{" "}
          <em>short-circuiting</em> to render a given part of your component
          only if a certain condition is true.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">const</span> MyComponent ={" "}
            <span className="hljs-function">
              (<span className="hljs-params">&#123; name, address &#125;</span>)
              =&gt;
            </span>{" "}
            (
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">div</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">h2</span>&gt;
              </span>
              &#123;name&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">h2</span>&gt;
              </span>
              &#123;address &amp;&amp;{" "}
              <span className="hljs-tag">
                &lt;<span className="hljs-name">p</span>&gt;
              </span>
              &#123;address&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">p</span>&gt;
              </span>
              &#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">div</span>&gt;
              </span>
            </span>
            );
          </code>
        </pre> */}
        <pre>
          <code>
            {`const MyComponent = ({ name, address }) => (
    <div>
      <h2>{name}</h2>
      {address && <p>{address}</p>}
    </div>
  );`}
          </code>
        </pre>
        <p>
          If you need an <code>if-else</code> condition then use{" "}
          <em>ternary operator</em>.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">const</span> MyComponent ={" "}
            <span className="hljs-function">
              (<span className="hljs-params">&#123; name, address &#125;</span>)
              =&gt;
            </span>{" "}
            (
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">div</span>&gt;
              </span>
              <span className="hljs-tag">
                &lt;<span className="hljs-name">h2</span>&gt;
              </span>
              &#123;name&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">h2</span>&gt;
              </span>
              &#123;address ?{" "}
              <span className="hljs-tag">
                &lt;<span className="hljs-name">p</span>&gt;
              </span>
              &#123;address&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">p</span>&gt;
              </span>{" "}
              :{" "}
              <span className="hljs-tag">
                &lt;<span className="hljs-name">p</span>&gt;
              </span>
              &#123;"Address is not available"&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">p</span>&gt;
              </span>
              &#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">div</span>&gt;
              </span>
            </span>
            );
          </code>
        </pre> */}
        <pre>
          <code>
            {`const MyComponent = ({ name, address }) => (
    <div>
      <h2>{name}</h2>
      {address ? <p>{address}</p> : <p>{"Address is not available"}</p>}
    </div>
  );`}
          </code>
        </pre>

        <h4 id="68-why-we-need-to-be-careful-when-spreading-props-on-dom-elements-">
          67. Why we need to be careful when spreading props on DOM elements?
        </h4>
        <p>
          When we <em>spread props</em> we run into the risk of adding unknown
          HTML attributes, which is a bad practice. Instead we can use prop
          destructuring with <code>...rest</code> operator, so it will add only
          required props.
        </p>
        <p>For example,</p>
        {/* <pre>
          <code>
            const ComponentA ={" "}
            <span className="hljs-function">
              <span className="hljs-params">()</span> =&gt;
            </span>{" "}
            ( &lt;ComponentB isDisplay=&#123;
            <span className="hljs-literal">true</span>&#125; className=&#123;
            <span className="hljs-string">"componentStyle"</span>&#125; /&gt; );
            const ComponentB ={" "}
            <span className="hljs-function">
              <span className="hljs-params">
                (&#123; isDisplay, ...domProps &#125;)
              </span>{" "}
              =&gt;
            </span>{" "}
            ( &lt;div &#123;...domProps&#125;&gt;&#123;
            <span className="hljs-string">"ComponentB"</span>&#125;&lt;/div&gt;
            );
          </code>
        </pre> */}
        <pre>
          <code>
            {`const ComponentA = () => (
    <ComponentB isDisplay={true} className={"componentStyle"} />
    );
const ComponentB = ({ isDisplay, ...domProps }) => (
    <div {...domProps}>{"ComponentB"}</div>
);`}
          </code>
        </pre>

        <h4 id="69-how-you-use-decorators-in-react-">
          68. How you use decorators in React?
        </h4>
        <p>
          You can <em>decorate</em> your <em>class</em> components, which is the
          same as passing the component into a function.
          <strong>Decorators</strong> are flexible and readable way of modifying
          component functionality.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-meta">@setTitle</span>(
            <span className="hljs-string">"Profile"</span>)
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">Profile</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">React</span>.
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123;
            <span className="hljs-comment">//....</span>
            &#125;
            <span className="hljs-comment">
              /* title is a string that will be set as a document title
              WrappedComponent is what our decorator will receive when put
              directly above a component className as seen in the example above
              
            </span>
            const setTitle = (title) =&gt; (
            <span className="hljs-type">WrappedComponent</span>) =&gt; &#123;
            <span className="hljs-keyword">return</span>{" "}
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">React</span>.
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; componentDidMount() &#123; document.title = title; &#125;
            render() &#123;
            <span className="hljs-keyword">return</span> &lt;
            <span className="hljs-type">WrappedComponent</span> &#123;...
            <span className="hljs-keyword">this</span>.props&#125; /&gt;; &#125;
            &#125;; &#125;;
          </code>
        </pre> */}
        <pre>
          <code>
            {`@setTitle("Profile")
    class Profile extends React.Component {
    //....
    }
    /*
      title is a string that will be set as a document title
      WrappedComponent is what our decorator will receive when
      put directly above a component class as seen in the example above
    */
    const setTitle = (title) => (WrappedComponent) => {
      return class extends React.Component {
        componentDidMount() {
          document.title = title;
        }
        render() {
          return <WrappedComponent {...this.props} />;
        }
      };
    };`}
          </code>
        </pre>
        <p>
          <strong>Note:</strong> Decorators are a feature that didn&#39;t make
          it into ES7, but are currently a <em>stage 2 proposal</em>.
        </p>

        <h4 id="70-how-do-you-memoize-a-component-">
          69. How do you memoize a component?
        </h4>
        <p>
          There are memoize libraries available which can be used on function
          components.
        </p>
        <p>
          For example <code>moize</code> library can memoize the component in
          another component.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">import</span> moize{" "}
            <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">"moize"</span>;
            <span className="hljs-keyword">import</span> Component{" "}
            <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">"./components/Component"</span>;{" "}
            <span className="hljs-comment">
              // this module exports a non-memoized component
            </span>
            <span className="hljs-keyword">const</span> MemoizedFoo =
            moize.react(Component);
            <span className="hljs-keyword">const</span> Consumer ={" "}
            <span className="hljs-function">
              <span className="hljs-params">()</span> =&gt;
            </span>{" "}
            &#123; &lt;div&gt; &#123;
            <span className="hljs-string">
              "I will memoize the following entry:"
            </span>
            &#125; &lt;MemoizedFoo /&gt;
            <span className="xml">
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">div</span>&gt;
              </span>
            </span>
            ; &#125;;
          </code>
        </pre> */}
        <pre>
          <code>
            {`import moize from "moize";
import Component from "./components/Component"; // this module exports a non-memoized component
    const MemoizedFoo = moize.react(Component);
    const Consumer = () => {
      <div>
        {"I will memoize the following entry:"}
        <MemoizedFoo />
      </div>;
    };`}
          </code>
        </pre>
        <p>
          <strong>Update:</strong> Since React v16.6.0, we have a{" "}
          <code>React.memo</code>. It provides a higher order component which
          memoizes component unless the props change. To use it, simply wrap the
          component using React.memo before you use it.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">const</span> MemoComponent =
            React.memo(
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">MemoComponent</span>
              <span className="hljs-params">(props)</span>{" "}
              <span className="hljs-comment">
                &#123; /* render using props  &#125;
              </span>
              );
            </span>
            <span className="hljs-keyword">OR</span>;
            <span className="hljs-keyword">export</span>{" "}
            <span className="hljs-keyword">default</span>{" "}
            React.memo(MyFunctionComponent);
          </code>
        </pre> */}
        <pre>
          <code>
            {`const MemoComponent = React.memo(function MemoComponent(props) {
      /* render using props */
    });
    OR;
    export default React.memo(MyFunctionComponent);`}
          </code>
        </pre>

        <h4 id="71-how-you-implement-server-side-rendering-or-ssr-">
          70. How you implement Server Side Rendering or SSR?
        </h4>
        <p>
          React is already equipped to handle rendering on Node servers. A
          special version of the DOM renderer is available, which follows the
          same pattern as on the client side.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">import</span> ReactDOMServer{" "}
            <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">"react-dom/server"</span>;
            <span className="hljs-keyword">import</span> App{" "}
            <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">"./App"</span>;
            ReactDOMServer.renderToString(
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">App</span> /&gt;
              </span>
              );
            </span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`import ReactDOMServer from "react-dom/server";
import App from "./App";
ReactDOMServer.renderToString(<App />);`}
          </code>
        </pre>
        <p>
          This method will output the regular HTML as a string, which can be
          then placed inside a page body as part of the server response. On the
          client side, React detects the pre-rendered content and seamlessly
          picks up where it left off.
        </p>

        <h4 id="72-how-to-enable-production-mode-in-react-">
          71. How to enable production mode in React?
        </h4>
        <p>
          You should use Webpack&#39;s <code>DefinePlugin</code> method to set{" "}
          <code>NODE_ENV</code> to
          <code>production</code>, by which it strip out things like propType
          validation and extra warnings. Apart from this, if you minify the
          code, for example, Uglify&#39;s dead-code elimination to strip out
          development only code and comments, it will drastically reduce the
          size of your bundle.
        </p>
        <h4 id="73-what-is-cra-and-its-benefits-">
          72. What is CRA and its benefits?
        </h4>
        <p>
          The <code>create-react-app</code> CLI tool allows you to quickly
          create &amp; run React applications with no configuration step.
        </p>
        <p>
          Let&#39;s create Todo App using <em>CRA</em>:
        </p>
        {/* <pre>
          <code>
            <span className="hljs-comment"># Installation</span>${" "}
            <span className="hljs-string">npm </span>
            <span className="hljs-string">install </span>-g{" "}
            <span className="hljs-built_in">create-react-app</span>
            <span className="hljs-comment"># Create new project</span>${" "}
            <span className="hljs-built_in">create-react-app</span>{" "}
            <span className="hljs-string">todo-app</span>${" "}
            <span className="hljs-string">cd </span>
            <span className="hljs-string">todo-app</span>
            <span className="hljs-comment"># Build, test and run</span>${" "}
            <span className="hljs-string">npm </span>
            <span className="hljs-string">run </span>
            <span className="hljs-string">build</span>${" "}
            <span className="hljs-string">npm </span>
            <span className="hljs-string">run </span>
            <span className="hljs-string">test</span>${" "}
            <span className="hljs-string">npm </span>
            <span className="hljs-string">start</span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`# Installation
$ npm install -g create-react-app
# Create new project
$ create-react-app todo-app
$ cd todo-app
# Build, test and run
$ npm run build
$ npm run test
$ npm start`}
          </code>
        </pre>
        <p>It includes everything we need to build a React app:</p>
        <ol>
          <li>React, JSX, ES6, and Flow syntax support.</li>
          <li>Language extras beyond ES6 like the object spread operator.</li>
          <li>
            Autoprefixed CSS, so you don’t need -webkit- or other prefixes.
          </li>
          <li>
            A fast interactive unit test runner with built-in support for
            coverage reporting.
          </li>
          <li>A live development server that warns about common mistakes.</li>
          <li>
            A build script to bundle JS, CSS, and images for production, with
            hashes and sourcemaps.
          </li>
        </ol>

        <h4 id="74-what-is-the-lifecycle-methods-order-in-mounting-">
          73. What is the lifecycle methods order in mounting?
        </h4>
        <p>
          The lifecycle methods are called in the following order when an
          instance of a component is being created and inserted into the DOM.
        </p>
        <ol>
          <li>
            <code>constructor()</code>
          </li>
          <li>
            <code>static getDerivedStateFromProps()</code>
          </li>
          <li>
            <code>render()</code>
          </li>
          <li>
            <code>componentDidMount()</code>
          </li>
        </ol>

        <h4 id="75-what-are-the-lifecycle-methods-going-to-be-deprecated-in-react-v16-">
          74. What are the lifecycle methods going to be deprecated in React
          v16?
        </h4>
        <p>
          The following lifecycle methods going to be unsafe coding practices
          and will be more problematic with async rendering.
        </p>
        <ol>
          <li>
            <code>componentWillMount()</code>
          </li>
          <li>
            <code>componentWillReceiveProps()</code>
          </li>
          <li>
            <code>componentWillUpdate()</code>
          </li>
        </ol>
        <p>
          Starting with React v16.3 these methods are aliased with{" "}
          <code>UNSAFE_</code> prefix, and the unprefixed version will be
          removed in React v17.
        </p>

        <h4 id="76-what-is-the-purpose-of-getderivedstatefromprops-lifecycle-method-">
          75. What is the purpose of
          <code>getDerivedStateFromProps()</code> lifecycle method?
        </h4>
        <p>
          The new static <code>getDerivedStateFromProps()</code> lifecycle
          method is invoked after a component is instantiated as well as before
          it is re-rendered. It can return an object to update state, or{" "}
          <code>null</code> to indicate that the new props do not require any
          state updates.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">MyComponent</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">React</span>.
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; static getDerivedStateFromProps(props, state) &#123;
            <span className="hljs-comment">// ...</span>
            &#125; &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`class MyComponent extends React.Component {
    static getDerivedStateFromProps(props, state) {
      // ...
    }
  }`}
          </code>
        </pre>
        <p>
          This lifecycle method along with <code>componentDidUpdate()</code>{" "}
          covers all the use cases of
          <code>componentWillReceiveProps()</code>.
        </p>

        <h4 id="77-what-is-the-purpose-of-getsnapshotbeforeupdate-lifecycle-method-">
          76. What is the purpose of
          <code>getSnapshotBeforeUpdate()</code> lifecycle method?
        </h4>
        <p>
          The new <code>getSnapshotBeforeUpdate()</code> lifecycle method is
          called right before DOM updates. The return value from this method
          will be passed as the third parameter to{" "}
          <code>componentDidUpdate()</code>.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">MyComponent</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">React</span>.
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; getSnapshotBeforeUpdate(prevProps, prevState) &#123;
            <span className="hljs-comment">// ...</span>
            &#125; &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`class MyComponent extends React.Component {
    getSnapshotBeforeUpdate(prevProps, prevState) {
      // ...
    }
  }`}
          </code>
        </pre>
        <p>
          This lifecycle method along with <code>componentDidUpdate()</code>{" "}
          covers all the use cases of
          <code>componentWillUpdate()</code>.
        </p>
        <h4 id="78-do-hooks-replace-render-props-and-higher-order-components-">
          77. Do Hooks replace render props and higher order components?
        </h4>
        <p>
          Both render props and higher-order components render only a single
          child but in most of the cases Hooks are a simpler way to serve this
          by reducing nesting in your tree.
        </p>

        <h4 id="79-what-is-the-recommended-way-for-naming-components-">
          78. What is the recommended way for naming components?
        </h4>
        <p>
          It is recommended to name the component by reference instead of using{" "}
          <code>displayName</code>.
        </p>
        <p>
          Using <code>displayName</code> for naming component:
        </p>
        {/* <pre>
          <code>
            <span className="hljs-selector-tag">export</span>{" "}
            <span className="hljs-selector-tag">default</span>{" "}
            <span className="hljs-selector-tag">React</span>
            <span className="hljs-selector-class">.createClass</span>(&#123;
            <span className="hljs-attribute">displayName</span>:{" "}
            <span className="hljs-string">"TodoApp"</span>, // ... &#125;);
          </code>
        </pre> */}
        <pre>
          <code>
            {`export default React.createClass({
    displayName: "TodoApp",
    // ...
  });`}
          </code>
        </pre>
        <p>
          The <strong>recommended</strong> approach:
        </p>
        {/* <pre>
          <code>
            export <span className="hljs-keyword">default</span>{" "}
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">TodoApp</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">React</span>.
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123;
            <span className="hljs-comment">// ...</span>
            &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`export default class TodoApp extends React.Component {
     // ...
  }`}
          </code>
        </pre>
        <p>also</p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">const</span> TodoApp ={" "}
            <span className="hljs-function">
              <span className="hljs-params">()</span> =&gt;
            </span>{" "}
            &#123;
            <span className="hljs-comment">//...</span>
            &#125;;
            <span className="hljs-keyword">export</span>{" "}
            <span className="hljs-keyword">default</span> TodoApp;
          </code>
        </pre> */}
        <pre>
          <code>
            {`const TodoApp = () => {
    //...
    };
    export default TodoApp;`}
          </code>
        </pre>

        <h4 id="80-what-is-the-recommended-ordering-of-methods-in-component-class-">
          79. What is the recommended ordering of methods in component class?
        </h4>
        <p>
          <em>Recommended</em> ordering of methods from <em>mounting</em> to{" "}
          <em>render stage</em>:
        </p>
        <ol>
          <li>
            <code>static</code> methods
          </li>
          <li>
            <code>constructor()</code>
          </li>
          <li>
            <code>getChildContext()</code>
          </li>
          <li>
            <code>componentWillMount()</code>
          </li>
          <li>
            <code>componentDidMount()</code>
          </li>
          <li>
            <code>componentWillReceiveProps()</code>
          </li>
          <li>
            <code>shouldComponentUpdate()</code>
          </li>
          <li>
            <code>componentWillUpdate()</code>
          </li>
          <li>
            <code>componentDidUpdate()</code>
          </li>
          <li>
            <code>componentWillUnmount()</code>
          </li>
          <li>
            click handlers or event handlers like <code>onClickSubmit()</code>{" "}
            or <code>onChangeDescription()</code>
          </li>
          <li>
            getter methods for render like <code>getSelectReason()</code> or{" "}
            <code>getFooterContent()</code>
          </li>
          <li>
            optional render methods like <code>renderNavigation()</code> or{" "}
            <code>renderProfilePicture()</code>
          </li>
          <li>
            <code>render()</code>
          </li>
        </ol>

        <h4 id="81-what-is-a-switching-component-">
          80. What is a switching component?
        </h4>
        <p>
          A <em>switching component</em> is a component that renders one of many
          components. We need to use object to map prop values to components.
        </p>
        <p>
          For example, a switching component to display different pages based on{" "}
          <code>page</code> prop:
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">import</span> HomePage{" "}
            <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">"./HomePage"</span>;
            <span className="hljs-keyword">import</span> AboutPage{" "}
            <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">"./AboutPage"</span>;
            <span className="hljs-keyword">import</span> ServicesPage{" "}
            <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">"./ServicesPage"</span>;
            <span className="hljs-keyword">import</span> ContactPage{" "}
            <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">"./ContactPage"</span>;
            <span className="hljs-keyword">const</span> PAGES = &#123;
            <span className="hljs-attr">home</span>: HomePage,
            <span className="hljs-attr">about</span>: AboutPage,
            <span className="hljs-attr">services</span>: ServicesPage,
            <span className="hljs-attr">contact</span>: ContactPage, &#125;;
            <span className="hljs-keyword">const</span> Page ={" "}
            <span className="hljs-function">
              (<span className="hljs-params">props</span>) =&gt;
            </span>{" "}
            &#123;
            <span className="hljs-keyword">const</span> Handler =
            PAGES[props.page] || ContactPage;
            <span className="hljs-keyword">return</span>{" "}
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">Handler</span> &#123;
                <span className="hljs-attr">...props</span>&#125; /&gt;
              </span>
              ; &#125;; // The keys of the PAGES object can be used in the prop
              types to catch dev-time errors. Page.propTypes = &#123; page:
              PropTypes.oneOf(Object.keys(PAGES)).isRequired, &#125;;
            </span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import ContactPage from "./ContactPage";
     const PAGES = {
        home: HomePage,
        about: AboutPage,
        services: ServicesPage,
        contact: ContactPage,
      };
     const Page = (props) => {
        const Handler = PAGES[props.page] || ContactPage;
        return <Handler {...props} />;
      };
      // The keys of the PAGES object can be used in the prop types to catch dev-time errors.
      Page.propTypes = {
         page: PropTypes.oneOf(Object.keys(PAGES)).isRequired,
      };`}
          </code>
        </pre>

        <h4 id="82-why-we-need-to-pass-a-function-to-setstate-">
          81. Why we need to pass a function to setState()?
        </h4>
        <p>
          The reason behind for this is that <code>setState()</code> is an
          asynchronous operation. React batches state changes for performance
          reasons, so the state may not change immediately after{" "}
          <code>setState()</code> is called. That means you should not rely on
          the current state when calling <code>setState()</code> since you
          can&#39;t be sure what that state will be. The solution is to pass a
          function to <code>setState()</code>, with the previous state as an
          argument. By doing this you can avoid issues with the user getting the
          old state value on access due to the asynchronous nature of{" "}
          <code>setState()</code>.
        </p>
        <p>
          Let&#39;s say the initial count value is zero. After three consecutive
          increment operations, the value is going to be incremented only by
          one.
        </p>
        {/* <pre>
          <code>
            // assuming this.<span className="hljs-keyword">state</span>.count
            === <span className="hljs-number">0</span>
            bthis.<span className="hljs-built_in">set</span>State(&#123; count:
            this.<span className="hljs-keyword">state</span>.count +{" "}
            <span className="hljs-number">1</span> &#125;); bthis.
            <span className="hljs-built_in">set</span>State(&#123; count: this.
            <span className="hljs-keyword">state</span>.count +{" "}
            <span className="hljs-number">1</span> &#125;); bthis.
            <span className="hljs-built_in">set</span>State(&#123; count: this.
            <span className="hljs-keyword">state</span>.count +{" "}
            <span className="hljs-number">1</span> &#125;); b// this.
            <span className="hljs-keyword">state</span>.count ==={" "}
            <span className="hljs-number">1</span>, not{" "}
            <span className="hljs-number">3</span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`// assuming this.state.count === 0
    bthis.setState({ count: this.state.count + 1 });
    bthis.setState({ count: this.state.count + 1 });
    bthis.setState({ count: this.state.count + 1 });
    b// this.state.count === 1, not 3`}
          </code>
        </pre>
        <p>
          If we pass a function to <code>setState()</code>, the count gets
          incremented correctly.
        </p>
        {/* <pre>
          <code>
            this.<span className="hljs-built_in">set</span>State((prevState,
            props) =&gt; (&#123; count: prevState.count + props.increment,
            &#125;)); // this.<span className="hljs-keyword">state</span>.count
            === <span className="hljs-number">3</span> as expected
          </code>
        </pre> */}
        <pre>
          <code>
            {`this.setState((prevState, props) => ({
    count: prevState.count + props.increment,
    }));
    // this.state.count === 3 as expected`}
          </code>
        </pre>
        <p>
          <strong>(OR)</strong>
        </p>
        <h4 id="why-function-is-preferred-over-object-for-setstate-">
          Why function is preferred over object for
          <code>setState()</code>?
        </h4>
        <p>
          React may batch multiple <code>setState()</code> calls into a single
          update for performance. Because
          <code>this.props</code> and <code>this.state</code> may be updated
          asynchronously, you should not rely on their values for calculating
          the next state.
        </p>
        <p>This counter example will fail to update as expected:</p>
        {/* <pre>
          <code>
            <span className="hljs-comment">// Wrong</span>
            <span className="hljs-keyword">this</span>.setState(&#123; counter:{" "}
            <span className="hljs-keyword">this</span>.state.counter +{" "}
            <span className="hljs-keyword">this</span>.props.increment, &#125;);
          </code>
        </pre> */}
        <pre>
          <code>
            {`// Wrong
  this.setState({
      counter: this.state.counter + this.props.increment,
  });`}
          </code>
        </pre>
        <p>
          The preferred approach is to call <code>setState()</code> with
          function rather than object. That function will receive the previous
          state as the first argument, and the props at the time the update is
          applied as the second argument.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-regexp">//</span> Correct
            <span className="hljs-keyword">this</span>.setState(
            <span className="hljs-function">
              <span className="hljs-params">(prevState, props)</span> =&gt;
            </span>{" "}
            (&#123; counter: prevState.counter + props.increment, &#125;));
          </code>
        </pre> */}
        <pre>
          <code>
            {`// Correct
  this.setState((prevState, props) => ({
    counter: prevState.counter + props.increment,
  }));`}
          </code>
        </pre>

        <h4 id="84-what-are-react-mixins-">82. What are React Mixins?</h4>
        <p>
          <em>Mixins</em> are a way to totally separate components to have a
          common functionality. Mixins <strong>should not be used</strong> and
          can be replaced with <em>higher-order components</em> or{" "}
          <em>decorators</em>.
        </p>
        <p>
          One of the most commonly used mixins is <code>PureRenderMixin</code>.
          You might be using it in some components to prevent unnecessary
          re-renders when the props and state are shallowly equal to the
          previous props and state:
        </p>
        {/* <pre>
          <code>
            <span className="hljs-attribute">const PureRenderMixin</span> =
            require(
            <span className="hljs-string">
              "react-addons-pure-render-mixin"
            </span>
            );
            <span className="hljs-attribute">const Button</span> =
            React.createClass(&#123; mixins: [PureRenderMixin], // ... &#125;);
          </code>
        </pre> */}
        <pre>
          <code>
            {`const PureRenderMixin = require("react-addons-pure-render-mixin");
   const Button = React.createClass({
      mixins: [PureRenderMixin],
      // ...
    });`}
          </code>
        </pre>

        <h4 id="85-why-is-ismounted-an-anti-pattern-and-what-is-the-proper-solution-">
          83. Why is <code>isMounted()</code>
          an anti-pattern and what is the proper solution?
        </h4>
        <p>
          The primary use case for <code>isMounted()</code> is to avoid calling{" "}
          <code>setState()</code> after a component has been unmounted, because
          it will emit a warning.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">if</span> (this.isMounted()) &#123;
            this.setState(<span className="hljs-meta">&#123;...&#125;</span>)
            &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`if (this.isMounted()) {
  this.setState({...})
  }`}
          </code>
        </pre>
        <p>
          Checking <code>isMounted()</code> before calling{" "}
          <code>setState()</code> does eliminate the warning, but it also
          defeats the purpose of the warning. Using <code>isMounted()</code> is
          a code smell because the only reason you would check is because you
          think you might be holding a reference after the component has
          unmounted.
        </p>
        <p>
          An optimal solution would be to find places where{" "}
          <code>setState()</code> might be called after a component has
          unmounted, and fix them. Such situations most commonly occur due to
          callbacks, when a component is waiting for some data and gets
          unmounted before the data arrives. Ideally, any callbacks should be
          canceled in
          <code>componentWillUnmount()</code>, prior to unmounting.
        </p>

        <h4 id="86-what-are-the-pointer-events-supported-in-react-">
          84. What are the Pointer Events supported in React?
        </h4>
        <p>
          <em>Pointer Events</em> provide a unified way of handling all input
          events. In the old days we had a mouse and respective event listeners
          to handle them but nowadays we have many devices which don&#39;t
          correlate to having a mouse, like phones with touch surface or pens.
          We need to remember that these events will only work in browsers that
          support the <em>Pointer Events</em> specification.
        </p>
        <p>
          The following event types are now available in <em>React DOM</em>:
        </p>
        <ol>
          <li>
            <code>onPointerDown</code>
          </li>
          <li>
            <code>onPointerMove</code>
          </li>
          <li>
            <code>onPointerUp</code>
          </li>
          <li>
            <code>onPointerCancel</code>
          </li>
          <li>
            <code>onGotPointerCapture</code>
          </li>
          <li>
            <code>onLostPointerCapture</code>
          </li>
          <li>
            <code>onPointerEnter</code>
          </li>
          <li>
            <code>onPointerLeave</code>
          </li>
          <li>
            <code>onPointerOver</code>
          </li>
          <li>
            <code>onPointerOut</code>
          </li>
        </ol>
        <h4 id="87-why-should-component-names-start-with-capital-letter-">
          85. Why should component names start with capital letter?
        </h4>
        <p>
          If you are rendering your component using JSX, the name of that
          component has to begin with a capital letter otherwise React will
          throw an error as an unrecognized tag. This convention is because only
          HTML elements and SVG tags can begin with a lowercase letter.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">SomeComponent</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123;
            <span className="hljs-comment">// Code goes here</span>
            &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`class SomeComponent extends Component {
  // Code goes here
  }`}
          </code>
        </pre>

        <p>
          You can define component class which name starts with lowercase
          letter, but when it&#39;s imported it should have capital letter. Here
          lowercase is fine:
        </p>
        {/* <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">myComponent</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; render() &#123;
            <span className="hljs-keyword">return</span> &lt;div /&gt;; &#125;
            &#125; export <span className="hljs-keyword">default</span>{" "}
            myComponent;
          </code>
        </pre> */}
        <pre>
          <code>
            {`class myComponent extends Component {
    render() {
      return <div />;
    }
  }
  export default myComponent;`}
          </code>
        </pre>
        <p>
          While when imported in another file it should start with capital
          letter:
        </p>
        <pre>
          <code>
            <span className="hljs-keyword">import</span> MyComponent{" "}
            <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">"./myComponent"</span>;
          </code>
        </pre>

        <h3 id="what-are-the-exceptions-on-react-component-naming-">
          What are the exceptions on React component naming?
        </h3>
        <p>
          The component names should start with an uppercase letter but there
          are few exceptions to this convention. The lowercase tag names with a
          dot (property accessors) are still considered as valid component
          names. For example, the below tag can be compiled to a valid
          component,
        </p>
        <pre>
          <code>
            render() &#123; <br/>
            <span className="hljs-keyword">return</span> ( <br />
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">obj.component</span>/&gt;
              </span>
            </span>{" "}
            <span className="hljs-comment">
              // `React.createElement(obj.component)` <br/>
            </span>
            ) <br/> &#125;
          </code>
        </pre>

        <h4 id="88-are-custom-dom-attributes-supported-in-react-v16-">
          86. Are custom DOM attributes supported in React v16?
        </h4>
        <p>
          Yes. In the past, React used to ignore unknown DOM attributes. If you
          wrote JSX with an attribute that React doesn&#39;t recognize, React
          would just skip it.
        </p>
        <p>For example, let&#39;s take a look at the below attribute:</p>
        <pre>
          <code>
            &lt;<span className="hljs-selector-tag">div</span>{" "}
            mycustomattribute=&#123;
            <span className="hljs-string">"something"</span>
            &#125; /&gt;
          </code>
        </pre>
        <p>Would render an empty div to the DOM with React v15:</p>
        <pre>
          <code>
            &lt;<span className="hljs-selector-tag">div</span> /&gt;
          </code>
        </pre>
        <p>In React v16 any unknown attributes will end up in the DOM:</p>
        <pre>
          <code>
            &lt;<span className="hljs-selector-tag">div</span>{" "}
            mycustomattribute=
            <span className="hljs-string">"something"</span> /&gt;
          </code>
        </pre>
        <p>
          This is useful for supplying browser-specific non-standard attributes,
          trying new DOM APIs, and integrating with opinionated third-party
          libraries.
        </p>

        <h4 id="89-what-is-the-difference-between-constructor-and-getinitialstate-">
          87. What is the difference between constructor and getInitialState?
        </h4>
        <p>
          You should initialize state in the constructor when using ES6 class,
          and <code>getInitialState()</code>
          method when using <code>React.createClass()</code>.
        </p>
        <p>
          <strong>Using ES6 classes:</strong>
        </p>
        {/* <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">MyComponent</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">React</span>.
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; constructor(props) &#123;
            <span className="hljs-keyword">super</span>(props);
            <span className="hljs-keyword">this</span>.state = &#123;
            <span className="hljs-comment">/* initial state </span>
            &#125;; &#125; &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         /* initial state */
      };
    }
  }`}
          </code>
        </pre>
        <p>
          <strong>
            Using <code>React.createClass()</code>:
          </strong>
        </p>
        {/* <pre>
          <code>
            const MyComponent = React.createClass(&#123; getInitialState()
            &#123; return &#123; /* initial{" "}
            <span className="hljs-keyword">state</span>  &#125;; &#125;,
            &#125;);
          </code>
        </pre> */}
        <pre>
          <code>
            {`const MyComponent = React.createClass({
    getInitialState() {
      return {
        /* initial state */
      };
    },
  });`}
          </code>
        </pre>
        <p>
          <strong>Note:</strong> <code>React.createClass()</code> is deprecated
          and removed in React v16. Use plain JavaScript classes instead.
        </p>

        <h4 id="90-can-you-force-a-component-to-re-render-without-calling-setstate-">
          88. Can you force a component to re-render without calling setState?
        </h4>
        <p>
          By default, when your component&#39;s state or props change, your
          component will re-render. If your
          <code>render()</code> method depends on some other data, you can tell
          React that the component needs re-rendering by calling{" "}
          <code>forceUpdate()</code>.
        </p>
        <pre>
          <code>
            component.forceUpdate(callback)
            <span className="hljs-comment">;</span>
          </code>
        </pre>
        <p>
          It is recommended to avoid all uses of <code>forceUpdate()</code> and
          only read from <code>this.props</code>
          and
          <code>this.state</code> in <code>render()</code>.
        </p>

        <h4 id="91-what-is-the-difference-between-super-and-super-props-in-react-using-es6-classes-">
          89. What is the difference between <code>super()</code> and{" "}
          <code>super(props)</code> in React using ES6 classes?
        </h4>
        <p>
          When you want to access <code>this.props</code> in{" "}
          <code>constructor()</code> then you should pass props to
          <code>super()</code> method.
        </p>
        <p>
          <strong>
            Using <code>super(props)</code>:
          </strong>
        </p>
        {/* <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">MyComponent</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">React</span>.
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; constructor(props) &#123;
            <span className="hljs-keyword">super</span>(props); console.log(
            <span className="hljs-keyword">this</span>.props);{" "}
            <span className="hljs-comment">
              // &#123; name: 'John', ... &#125;
            </span>
            &#125; &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      console.log(this.props); // { name: 'John', ... }
    }
  }`}
          </code>
        </pre>
        <p>
          <strong>
            Using <code>super()</code>:
          </strong>
        </p>
        {/* <pre>
          <code>
            <span className="hljs-class">
              <span className="hljs-keyword">class</span>{" "}
              <span className="hljs-title">MyComponent</span>{" "}
              <span className="hljs-keyword">extends</span>{" "}
              <span className="hljs-title">React</span>.
              <span className="hljs-title">Component</span>{" "}
            </span>
            &#123; constructor(props) &#123;
            <span className="hljs-keyword">super</span>(); console.log(
            <span className="hljs-keyword">this</span>.props);{" "}
            <span className="hljs-comment">// undefined</span>
            &#125; &#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`class MyComponent extends React.Component {
    constructor(props) {
      super();
      console.log(this.props); // undefined
    }
  }`}
          </code>
        </pre>
        <p>
          Outside <code>constructor()</code> both will display same value for{" "}
          <code>this.props</code>.
        </p>

        <h4 id="92-how-to-loop-inside-jsx-">90. How to loop inside JSX?</h4>
        <p>
          You can simply use <code>Array.prototype.map</code> with ES6{" "}
          <em>arrow function</em> syntax.
        </p>
        <p>
          For example, the <code>items</code> array of objects is mapped into an
          array of components:
        </p>
        {/* <pre>
          <code>
            &lt;tbody&gt; &#123;items.map(
            <span className="hljs-function">
              (<span className="hljs-params">item</span>) =&gt;
            </span>{" "}
            (
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">SomeComponent</span>{" "}
                <span className="hljs-attr">key</span>=
                <span className="hljs-string">&#123;item.id&#125;</span>{" "}
                <span className="hljs-attr">name</span>=
                <span className="hljs-string">&#123;item.name&#125;</span> /&gt;
              </span>
              ))&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">tbody</span>&gt;
              </span>
            </span>
          </code>
        </pre> */}
        <pre>
          <code>
            {`<tbody>
    {items.map((item) => (
      <SomeComponent key={item.id} name={item.name} />
    ))}
</tbody>`}
          </code>
        </pre>
        <p>
          But you can&#39;t iterate using <code>for</code> loop:
        </p>
        {/* <pre>
          <code>
            &lt;tbody&gt;
            <span className="hljs-keyword">for</span> (let i ={" "}
            <span className="hljs-number">0</span>; i &lt;{" "}
            <span className="hljs-built_in">items</span>.length; i++) &#123;
            &lt;SomeComponent key=&#123;
            <span className="hljs-built_in">items</span>
            [i].id&#125; <span className="hljs-built_in">name</span>=&#123;
            <span className="hljs-built_in">items</span>[i].
            <span className="hljs-built_in">name</span>&#125; /&gt; &#125;
            &lt;/tbody&gt;
          </code>
        </pre> */}
        <pre>
          <code>
            {`<tbody>
    for (let i = 0; i < items.length; i++) {
      <SomeComponent key={items[i].id} name={items[i].name} />
    }
</tbody>`}
          </code>
        </pre>
        <p>
          This is because JSX tags are transpiled into <em>function calls</em>,
          and you can&#39;t use statements inside expressions. This may change
          thanks to <code>do</code> expressions which are{" "}
          <em>stage 1 proposal</em>.
        </p>

        <h4 id="93-how-do-you-access-props-in-attribute-quotes-">
          91. How do you access props in attribute quotes?
        </h4>
        <p>
          React (or JSX) doesn&#39;t support variable interpolation inside an
          attribute value. The below representation won&#39;t work:
        </p>
        <pre>
          <code>
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">img</span>{" "}
                <span className="hljs-attr">class</span>=
                <span className="hljs-string">"image"</span>{" "}
                <span className="hljs-attr">src</span>=
                <span className="hljs-string">"images/</span>
              </span>
            </span>
            <span className="hljs-template-variable">
              &#123;this.props.image&#125;
            </span>
            <span className="xml">
              <span className="hljs-tag">
                <span className="hljs-string">"</span> /&gt;
              </span>
            </span>
          </code>
        </pre>
        <p>
          But you can put any JS expression inside curly braces as the entire
          attribute value. So the below expression works:
        </p>
        <pre>
          <code>
            &lt;<span className="hljs-selector-tag">img</span> className=
            <span className="hljs-string">"image"</span> src=&#123;
            <span className="hljs-string">"images/"</span> + this
            <span className="hljs-selector-class">.props</span>
            <span className="hljs-selector-class">.image</span>&#125; /&gt;
          </code>
        </pre>
        <p>
          Using <em>template strings</em> will also work:
        </p>
        <pre>
          <code>
            &lt;<span className="hljs-selector-tag">img</span> className=
            <span className="hljs-string">"image"</span>{" "}
            src=&#123;`images/$&#123;this
            <span className="hljs-selector-class">.props</span>
            <span className="hljs-selector-class">.image</span>&#125;`&#125;
            /&gt;
          </code>
        </pre>

        <h4 id="94-what-is-react-proptype-array-with-shape-">
          92. What is React proptype array with shape?
        </h4>
        <p>
          If you want to pass an array of objects to a component with a
          particular shape then use
          <code>React.PropTypes.shape()</code> as an argument to{" "}
          <code>React.PropTypes.arrayOf()</code>.
        </p>
        {/* <pre>
          <code>
            ReactComponent.propTypes = &#123;
            <span className="hljs-symbol">arrayWithShape:</span>{" "}
            React.PropTypes.arrayOf( React.PropTypes.shape(&#123;
            <span className="hljs-symbol">color:</span>{" "}
            React.PropTypes.string.isRequired,
            <span className="hljs-symbol">fontSize:</span>{" "}
            React.PropTypes.number.isRequired, &#125;) ).isRequired, &#125;;
          </code>
        </pre> */}
        <pre>
          <code>
            {`ReactComponent.propTypes = {
  arrayWithShape: React.PropTypes.arrayOf(
  React.PropTypes.shape({
    color: React.PropTypes.string.isRequired,
    fontSize: React.PropTypes.number.isRequired,
  })
  ).isRequired,
};`}
          </code>
        </pre>

        <h4 id="95-how-to-conditionally-apply-class-attributes-">
          93. How to conditionally apply class attributes?
        </h4>
        <p>
          You shouldn&#39;t use curly braces inside quotes because it is going
          to be evaluated as a string.
        </p>
        <pre>
          <code>
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">div</span>{" "}
                <span className="hljs-attr">className</span>=
                <span className="hljs-string">"btn-panel </span>
              </span>
            </span>
            <span className="hljs-template-variable">
              &#123;this.props.visible ? 'show' : 'hidden'&#125;
            </span>
            <span className="xml">
              <span className="hljs-tag">
                <span className="hljs-string">"</span>&gt;
              </span>
            </span>
          </code>
        </pre>
        <p>
          Instead you need to move curly braces outside (don&#39;t forget to
          include spaces between class names):
        </p>
        <pre>
          <code>
            &lt;<span className="hljs-keyword">div</span> className=&#123;
            <span className="hljs-string">'btn-panel '</span> + (
            <span className="hljs-keyword">this</span>.props.visible ?{" "}
            <span className="hljs-string">'show'</span> :{" "}
            <span className="hljs-string">'hidden'</span>)&#125;&gt;
          </code>
        </pre>
        <p>
          <em>Template strings</em> will also work:
        </p>
        <pre>
          <code>
            &lt;div className=&#123;
            <span className="hljs-string">
              `btn-panel{" "}
              <span className="hljs-subst">
                $&#123;<span className="hljs-keyword">this</span>.props.visible
                ? <span className="hljs-string">'show'</span> :{" "}
                <span className="hljs-string">'hidden'</span>&#125;
              </span>
              `
            </span>
            &#125;&gt;
          </code>
        </pre>

        <h4 id="96-what-is-the-difference-between-react-and-reactdom-">
          94. What is the difference between React and ReactDOM?
        </h4>
        <p>
          The <code>react</code> package contains{" "}
          <code>React.createElement()</code>, <code>React.Component</code>,
          <code>React.Children</code>, and other helpers related to elements and
          component classes. You can think of these as the isomorphic or
          universal helpers that you need to build components. The{" "}
          <code>react-dom</code> package contains
          <code>ReactDOM.render()</code>, and in <code>react-dom/server</code>{" "}
          we have <em>server-side rendering</em>
          support with <code>ReactDOMServer.renderToString()</code> and{" "}
          <code>ReactDOMServer.renderToStaticMarkup()</code>.
        </p>

        <h4 id="97-why-reactdom-is-separated-from-react-">
          95. Why ReactDOM is separated from React?
        </h4>
        <p>
          The React team worked on extracting all DOM-related features into a
          separate library called <em>ReactDOM</em>. React v0.14 is the first
          release in which the libraries are split. By looking at some of the
          packages,
          <code>react-native</code>, <code>react-art</code>,{" "}
          <code>react-canvas</code>, and <code>react-three</code>, it has become
          clear that the beauty and essence of React has nothing to do with
          browsers or the DOM.
        </p>
        <p>
          To build more environments that React can render to, React team
          planned to split the main React package into two:
          <code>react</code> and <code>react-dom</code>. This paves the way to
          writing components that can be shared between the web version of React
          and React Native.
        </p>

        <h4 id="98-how-to-use-react-label-element-">
          96. How to use React label element?
        </h4>
        <p>
          If you try to render a <code>&lt;label&gt;</code> element bound to a
          text input using the standard
          <code>for</code>
          attribute, then it produces HTML missing that attribute and prints a
          warning to the console.
        </p>
        {/* <pre>
          <code>
            &lt;<span className="hljs-selector-tag">label</span>{" "}
            <span className="hljs-keyword">for</span>=&#123;
            <span className="hljs-string">'user'</span>&#125;&gt;&#123;
            <span className="hljs-string">'User'</span>&#125;&lt;/label&gt; &lt;
            <span className="hljs-selector-tag">input</span> type=&#123;
            <span className="hljs-string">'text'</span>&#125; id=&#123;
            <span className="hljs-string">'user'</span>&#125; /&gt;
          </code>
        </pre> */}
        <pre>
          <code>
            {`<label for={'user'}>{'User'}</label>
<input type={'text'} id={'user'} />`}
          </code>
        </pre>
        <p>
          Since <code>for</code> is a reserved keyword in JavaScript, use{" "}
          <code>htmlFor</code> instead.
        </p>
        {/* <pre>
          <code>
            &lt;<span className="hljs-selector-tag">label</span> htmlFor=&#123;
            <span className="hljs-string">'user'</span>&#125;&gt;&#123;
            <span className="hljs-string">'User'</span>&#125;&lt;/label&gt; &lt;
            <span className="hljs-selector-tag">input</span> type=&#123;
            <span className="hljs-string">'text'</span>&#125; id=&#123;
            <span className="hljs-string">'user'</span>&#125; /&gt;
          </code>
        </pre> */}
        <pre>
          <code>
            {`<label htmlFor={'user'}>{'User'}</label>
<input type={'text'} id={'user'} />`}
          </code>
        </pre>

        {/* <!-- 99 --> */}

        <h4 id="99-how-to-combine-multiple-inline-style-objects-">
          97. How to combine multiple inline style objects?
        </h4>
        <p>
          You can use <em>spread operator</em> in regular React:
        </p>
        {/* <pre>
          <code>
            &lt;<span className="hljs-selector-tag">button</span> style=&#123;
            ..
            <span className="hljs-selector-class">.styles</span>
            <span className="hljs-selector-class">.panel</span>
            <span className="hljs-selector-class">.button</span>, ..
            <span className="hljs-selector-class">.styles</span>
            <span className="hljs-selector-class">.panel</span>
            <span className="hljs-selector-class">.submitButton</span>{" "}
            &#125;&gt; &#123;<span className="hljs-string">"Submit"</span>&#125;
            &lt;/button&gt;
          </code>
        </pre> */}
        <pre>
          <code>
            {` <button style={ ...styles.panel.button, ...styles.panel.submitButton }>
    {"Submit"}
</button>`}
          </code>
        </pre>
        <p>
          If you&#39;re using React Native then you can use the array notation:
        </p>
        {/* <pre>
          <code>
            &lt;<span className="hljs-selector-tag">button</span>{" "}
            style=&#123;[styles
            <span className="hljs-selector-class">.panel</span>
            <span className="hljs-selector-class">.button</span>, styles
            <span className="hljs-selector-class">.panel</span>
            <span className="hljs-selector-class">.submitButton</span>
            ]&#125;&gt; &#123;<span className="hljs-string">"Submit"</span>
            &#125; &lt;/button&gt;
          </code>
        </pre> */}
        <pre>
          <code>
            {`<button style={[styles.panel.button, styles.panel.submitButton]}>
    {"Submit"}
</button>`}
          </code>
        </pre>

        {/* <!-- 100 --> */}

        <h4 id="100-how-to-re-render-the-view-when-the-browser-is-resized-">
          98. How to re-render the view when the browser is resized?
        </h4>
        <p>
          You can use the <code>useState</code> hook to manage the width and
          height state variables, and the
          <code>useEffect</code> hook to add and remove the <code>resize</code>{" "}
          event listener. The <code>[]</code>
          dependency array passed to useEffect ensures that the effect only runs
          once (on mount) and not on every re-render.
        </p>
        {/* <pre>
          <code>
            <span className="hljs-keyword">import</span> React, &#123; useState,
            useEffect &#125; <span className="hljs-keyword">from</span>{" "}
            <span className="hljs-string">"react"</span>;
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">WindowDimensions</span>(
              <span className="hljs-params"></span>){" "}
            </span>
            &#123;
            <span className="hljs-keyword">const</span> [dimensions,
            setDimensions] = useState(&#123;
            <span className="hljs-attr">width</span>:{" "}
            <span className="hljs-built_in">window</span>.innerWidth,
            <span className="hljs-attr">height</span>:{" "}
            <span className="hljs-built_in">window</span>.innerHeight, &#125;);
            useEffect(
            <span className="hljs-function">
              <span className="hljs-params">()</span> =&gt;
            </span>{" "}
            &#123;
            <span className="hljs-function">
              <span className="hljs-keyword">function</span>{" "}
              <span className="hljs-title">handleResize</span>(
              <span className="hljs-params"></span>){" "}
            </span>
            &#123; setDimensions(&#123;
            <span className="hljs-attr">width</span>:{" "}
            <span className="hljs-built_in">window</span>.innerWidth,
            <span className="hljs-attr">height</span>:{" "}
            <span className="hljs-built_in">window</span>.innerHeight, &#125;);
            &#125;
            <span className="hljs-built_in">window</span>.addEventListener(
            <span className="hljs-string">"resize"</span>, handleResize);
            <span className="hljs-keyword">return</span>{" "}
            <span className="hljs-function">
              <span className="hljs-params">()</span> =&gt;
            </span>{" "}
            <span className="hljs-built_in">window</span>.removeEventListener(
            <span className="hljs-string">"resize"</span>, handleResize);
            &#125;, []);
            <span className="hljs-keyword">return</span> (
            <span className="xml">
              <span className="hljs-tag">
                &lt;<span className="hljs-name">span</span>&gt;
              </span>
              &#123;dimensions.width&#125; x &#123;dimensions.height&#125;
              <span className="hljs-tag">
                &lt;/<span className="hljs-name">span</span>&gt;
              </span>
            </span>
            );&#125;
          </code>
        </pre> */}
        <pre>
          <code>
            {`import React, { useState, useEffect } from "react";
function WindowDimensions() {
  const [dimensions, setDimensions] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
   useEffect(() => {
       function handleResize() {
          setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);
   return (
   <span>
   {dimensions.width} x {dimensions.height}
   </span>
   );}`}
          </code>
        </pre>
      </div>
    </div>
  );
};
