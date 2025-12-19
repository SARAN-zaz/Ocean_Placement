import images from "../../../assets/Angular/index";

export const AngularInterviewQues = () => {
  return (
    <div class="main-container-interview-questions">
      <div>
        <p className="main-heading-q-a">
          Angular Interview Questions and Answers
        </p>
        <div className="main-heading-interview-questions-answers">
          <img className="img-class-language-logo" src={images.AngularJS} />
          <p>
            Angular is a powerful front-end framework developed and maintained
            by Google. It facilitates the creation of dynamic, interactive web
            applications with ease. By utilizing TypeScript, a superset of
            JavaScript, Angular enables developers to write cleaner, more
            maintainable code by adding features like static typing and
            object-oriented programming concepts. One of Angular's key features
            is its component-based architecture, where the application is
            divided into reusable and encapsulated components. These components
            encapsulate both the HTML templates and the associated logic,
            promoting modularity and code reusability.
            <br />
            Angular also provides a robust dependency injection system, allowing
            for efficient management of app lication components and services.
            This enables better separation of concerns and promotes testability
            by facilitating the injection of mock dependencies during unit
            testing. Furthermore, Angular incorporates a powerful router module
            for managing navigation within the application, enabling developers
            to build single-page applications (SPAs) with ease.
          </p>
        </div>
      </div>
      <div className="question-answer">
        <h4 id="1-what-is-angular-">1. What is angular?</h4>
        <p>
          {" "}
          Angular is a TypeScript-based open-source front-end web application
          framework developed by Google for building dynamic, single-page
          applications (SPAs).
        </p>
        <h4 id="2-single-page-application-spa-">
          2. Single Page Application (SPA)?
        </h4>
        <p>
          {" "}
          A Single Page Application (SPA) is indeed a web application that is
          contained within a single HTML page. Instead of reloading the entire
          page when a user interacts with the application, SPAs dynamically
          update and render content, providing a more seamless and responsive
          user experience.{" "}
        </p>
        <h4 id="3-what-are-the-advantages-of-using-angular-">
          3. What are the advantages of using Angular?
        </h4>
        <ul>
          <li>Two-Way Data Binding.</li>
          <li>Dependency Injection.</li>
          <li>Component-Based Architecture.</li>
          <li>Client and server communication is facilitated.</li>
          <li>Has strong features like Event Handlers, Animation, etc.</li>
          <li>Built-In HTTP Client.</li>
          <li>Supports static template and Angular template.</li>
          <li>Validations.</li>
        </ul>

        <h4 id="4-differentiate-between-one-way-binding-and-two-way-data-binding-">
          4. Differentiate between one-way binding and two-way data binding?
        </h4>
        <p>
          One-way binding and two-way data binding are concepts in Angular
          related to how data is synchronized between the model (component) and
          the view (template).Here&#39;s a differentiation between one-way
          binding and two-way data binding:
        </p>
        <ul>
          <li>
            <p>
              <strong>One-way binding:</strong> Data flows in a single
              direction, from the component to the view (or vice versa).Uses the
              curly braces ( {"{{ }}"} ) for interpolation or square brackets
              ([]) for property binding.{" "}
            </p>
            <h6 id="example-">Example:</h6>
            <ul>
              <li>
                <strong>Interpolation</strong>:{" "}
                <code>&lt;p&gt; &lt;/p&gt;</code>
              </li>
              <li>
                <strong>Property binding:</strong>{" "}
                <code>&lt;img [src]=&quot;imageUrl&quot;&gt;</code>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>Two-Way Data Binding:</strong> Data flows in both
              directions, from the component to the view and from the view to
              the component.
            </p>
            <ul>
              <li>
                <strong>syntax</strong>:{" "}
                <code>&lt;input [(ngModel)]=&quot;name&quot;&gt;</code>
              </li>
            </ul>
          </li>
        </ul>

        {/* <!-- 5 --> */}

        <h4 id="5-what-are-directives-in-angular">
          5. What are directives in Angular?
        </h4>
        <p>
          Directives are classes that add additional behavior to elements in
          your Angular applications.
          <strong>Built-In Directives:</strong> Built-in directives are used to
          manage the elements like forms, lists, and styles of the application.
        </p>
        <ul>
          <li>
            <strong>Built-In Directives:</strong> Built-in directives are used
            to manage the elements like forms, lists, and styles of the
            application.
          </li>
        </ul>
        <ul>
          <li>
            <strong>Example:</strong>
            <ul>
              <li>
                <p>
                  <strong>ng-if</strong> -
                  <code>
                    &lt;div *ngIf=&quot;isTrue&quot;&gt;Content to show when
                    isTrue is true.&lt;/div&gt;
                  </code>
                </p>
              </li>
              <li>
                <p>
                  <strong>ng-for</strong> -
                  <code>
                    &lt;li *ngFor=&quot;let item of items&quot;&gt;&#123; &#123;
                    item &#125;&#125;&lt;/li&gt;
                  </code>
                </p>
              </li>
              <li>
                <p>
                  <strong>ng-class</strong> -
                  <code>
                    &lt;div [ngClass]=&quot;&#123;&#39;class1&#39;: condition,
                    &#39;class2&#39;: anotherCondition
                    &#125;&quot;&gt;Content&lt;/div&gt;
                  </code>
                </p>
              </li>
              <li>
                <p>
                  <strong>ng-style</strong> -
                  <code>
                    &lt;div [ngStyle]=&quot;&#123;&#39;color&#39;: isRed ?
                    &#39;red&#39; : &#39;blue&#39;, &#39;font-size&#39;:
                    &#39;14px&#39; &#125; &quot;&gt;Content&lt;/div&gt;
                  </code>
                </p>
              </li>
              <li>
                <p>
                  <strong>ng-bind</strong>
                </p>
              </li>
              <li>
                <p>
                  <strong>ng-switch</strong>{" "}
                </p>
                {/* <pre class="precode">
                  <code>
                    &lt;div [ngSwitch]=&quot;condition&quot;&gt; &lt;div
                    *ngSwitchCase=&quot;&#39;case1&#39;&quot;&gt;Content for
                    case 1&lt;/div&gt; &lt;div
                    *ngSwitchCase=&quot;&#39;case2&#39;&quot;&gt;Content for
                    case 2&lt;/div&gt; &lt;div *ngSwitchDefault&gt;Default
                    content&lt;/div&gt; &lt;/div&gt;
                  </code>
                </pre> */}
                <pre>
                    <code>
                        {`<div [ngSwitch]="condition">
    <div *ngSwitchCase="'case1'">Content for case 1</div>
    <div *ngSwitchCase="'case2'">Content for case 2</div>
    <div *ngSwitchDefault>Default content</div>
</div>`}
                    </code>
                </pre>
              </li>
              <li>
                <p>
                  <strong>ng-model</strong> -{" "}
                  <code>&lt;input [(ngModel)]=&quot;name&quot;&gt;</code>
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <strong>Custom Directives:</strong> Custom directives are
            user-defined directives that encapsulate behavior and can be reused
            across different parts of an application.
          </li>
          {/* <!-- <li><strong>Example:</strong></li> --> */}
        </ul>
        {/* <pre>
          <code>
            import &#123; Directive, ElementRef, HostListener &#125; from
            &#39;@angular/core&#39;; @Directive(&#123; selector:
            &#39;[appHighlight]&#39; &#125;) export class HighlightDirective
            &#123; constructor(private el: ElementRef) &#123; &#125;
            @HostListener(&#39;mouseenter&#39;) onMouseEnter() &#123;
            this.highlight(&#39;yellow&#39;); &#125;
            @HostListener(&#39;mouseleave&#39;) onMouseLeave() &#123;
            this.highlight(null); &#125; private highlight(color: string | null)
            &#123; this.el.nativeElement.style.backgroundColor = color; &#125;
            &#125;
          </code>
        </pre> */}
        <pre>
            <code>
                {`import { Directive, ElementRef, HostListener } from '@angular/core';
    
    @Directive({
      selector: '[appHighlight]'
    })
      export class HighlightDirective {
      constructor(private el: ElementRef) { }
      @HostListener('mouseenter') onMouseEnter() {
     this.highlight('yellow');
    }
      @HostListener('mouseleave') onMouseLeave() {
     this.highlight(null);
    }
      private highlight(color: string | null) {
     this.el.nativeElement.style.backgroundColor = color;
    }
}`}
            </code>
        </pre>
        <ul>
          <li>
            <strong>Example of usage:</strong>
            <code>
              &lt;p appHighlight&gt; Mouse over me to highlight &lt;/p&gt;
            </code>
          </li>
        </ul>

        {/* <!-- 6 --> */}
        <h4 id="6-what-is-angular-cli-and-why-is-it-used-">
          6.What is Angular CLI, and why is it used?
        </h4>
        <p>
          Angular CLI (Command Line Interface) is a command-line tool for
          initializing, developing, scaffolding, and maintaining Angular
          applications. It helps streamline the development process.
        </p>

        {/* <!-- 7 --> */}
        <h4 id="7-what-is-string-interpolation">
          7. What is string interpolation?
        </h4>
        <p>
          {" "}
          String Interpolation is a one-way data binding technique which is used
          to output the data from a TypeScript code to HTML template (view). It
          uses the template expression in double curly braces to display the
          data from the component to the view. String interpolation adds the
          value of a property from the component.
        </p>
        <ul>
          <li>
            <strong>syntax:</strong>{" "}
            <code> &#123; &#123; data &#125; &#125;</code>
          </li>
        </ul>
        <pre>
          <code>
            // app.component.ts <br/> import &#123; Component &#125; from
            &#39;@angular/core&#39;; <br/> <br/> @Component(&#123; <br/> selector:
            &#39;app-root&#39;, <br/> template: ` <br/> &lt;h1&gt;Hello, &#123; &#123; name
            &#125; &#125;!&lt;/h1&gt; <br/> &lt;p&gt;Your age is: &#123; &#123; age +
            5 &#125; &#125;&lt;/p&gt; <br/> `, <br /> &#125;) <br /> export class AppComponent
            &#123; <br /> name = &#39;John&#39;; <br /> age = 25; <br /> &#125;
          </code>
        </pre>

        {/* <!-- 8 --> */}

        <h4 id="8-explain-data-bindings-and-events">
          8. Explain Data bindings and events?
        </h4>
        <p>
          In Angular, you can bind properties and events to elements in your
          templates to create dynamic and interactive web applications. Binding
          allows you to connect your component&#39;s data and logic to your HTML
          template. There are two main types of bindings in Angular:
        </p>
        <ul>
          <li>
            <strong>Property Binding:</strong>
            Property binding allows you to set the value of an HTML element
            property to a component property&#39;s value. It&#39;s typically
            used to display data from your component in the template. Property
            binding is denoted by square brackets ([]) in your HTML template.
            <strong>Example:</strong>{" "}
            <code> &lt;img [src]=&quot;imageUrl&quot;&gt;</code>
          </li>
          <li>
            <strong>Event Binding:</strong>
            Event binding allows you to listen for and respond to events
            triggered by HTML elements, such as button clicks, mouse events,
            etc. You can bind an event to a method in your component, and when
            the event occurs, the method is executed. Event binding is denoted
            by parentheses (()) in your HTML template.
            <strong>Example:</strong>
            <code>
              {" "}
              &lt;button (click)=&quot;handleClick()&quot;&gt;Click
              me&lt;/button&gt;
            </code>
          </li>
        </ul>

        {/* <!-- 9 --> */}
        <h4 id="9-explain-the-angular-module">
          9. Explain the Angular Module?
        </h4>
        <p>
          An Angular Module is a mechanism to group components, directives,
          pipes, and services together. It is defined using the{" "}
          <code>@NgModule</code> decorator.
        </p>

        {/* <!-- 10 --> */}

        <h4 id="10-what-is-an-angular-component">
          10. What is an Angular Component?
        </h4>
        <p>
          An Angular component is a building block of the application,
          consisting of a TypeScript class, an HTML template, and styles. It
          encapsulates a part of the user interface.
        </p>

        {/* <!-- 11 --> */}
        <h4 id="11-what-is-dependency-injection-di-in-angular">
          11. What is Dependency Injection (DI) in Angular?
        </h4>
        <p>
          Dependency Injection is a design pattern in which the components
          receive their dependencies from an external source rather than
          creating them.
        </p>

        {/* <!-- 12 --> */}
        <h4 id="12-explain-angular-services">12. Explain Angular Services?</h4>
        <p>
          Services in Angular are singleton objects used to encapsulate and
          share functionality across components. They are commonly used for data
          fetching, sharing data, or handling business logic.
        </p>

        {/* <!-- 13 --> */}
        <h4 id="13-how-can-you-make-an-http-request-in-angular">
          13. How can you make an HTTP request in Angular?
        </h4>
        <p>
          Angular provides the HttpClient module to make HTTP requests. You can
          use methods like
          <code>get(), post(), put(), and delete()</code>.
        </p>

        {/* <!-- 14 --> */}
        <h4 id="14-explain-angular-router">14. Explain Angular Router?</h4>
        <p>
          Angular Router is a module that provides navigation among views and
          enables deep linking. It allows you to define routes, navigate between
          views, and load components on demand.
        </p>

        {/* <!-- 15 --> */}
        <h4 id="15-what-is-lazy-loading-in-angular">
          15. What is lazy loading in Angular?
        </h4>
        <p>
          Lazy loading is a technique in Angular where modules are loaded only
          when they are needed. It improves application performance by reducing
          initial loading time.
        </p>

        {/* <!-- 16 --> */}
        <h4 id="16-how-can-you-pass-data-between-components-using-angular-router">
          16. How can you pass data between components using Angular Router?
        </h4>
        <p>
          You can pass data between components using route parameters, query
          parameters, or by sharing a service between components.
        </p>

        {/* <!-- 17 --> */}
        <h4 id="17-what-is-the-angular-component-lifecycle">
          17. What is the Angular Component Lifecycle?
        </h4>
        <p>
          Angular creates it, renders it, creates and renders its children,
          checks it when its data-bound properties change, and destroys it
          before removing it from the DOM.
        </p>
        <ul>
          <li>
            <p>
              <strong>Example:</strong>
            </p>
            <ul>
              <li>ngOnInit</li>
              <li>ngOnChanges</li>
              <li>ngDoCheck</li>
              <li>ngAfterViewInit</li>
              <li>ngOnDestroy</li>
              <li>ngAfterContentInit()</li>
              <li>ngAfterContentChecked()</li>
              <li>ngAfterViewChecked()</li>
            </ul>
          </li>
        </ul>

        {/* <!-- 18 --> */}
        <h4 id="18-explain-ngoninit-and-when-it-is-called">
          18. Explain ngOnInit and when it is called?
        </h4>
        <p>
          This hook is particularly useful for initialization logic, such as
          fetching initial data from a server or setting up subscriptions. It is
          commonly used to perform tasks that should only occur once when the
          component is created.
        </p>
        {/* <pre>
          <code>
            import &#123; Component, OnInit &#125; from &#39;@angular/core&#39;;
            @Component(&#123; selector: &#39;app-example&#39;, template:
            &#39;&lt;p&gt;&#123;&#123; message &#125; &#125;&lt;/p&gt;&#39;,
            &#125;) export class ExampleComponent implements OnInit &#123;
            message: string; // ngOnInit is called after the component is
            initialized ngOnInit(): void&#123; this.message = &#39;Component
            initialized successfully!&#39;; // Additional initialization logic
            can be placed here &#125; &#125;
          </code>
        </pre> */}
        <pre>
            <code>
                {`import { Component, OnInit } from '@angular/core';
    
    @Component({
      selector: 'app-example',
      template: '<p>{{ message } }</p>',
    })
    export class ExampleComponent implements OnInit {
      message: string;
    
      // ngOnInit is called after the component is initialized
      ngOnInit(): void{
        this.message = 'Component initialized successfully!';
        // Additional initialization logic can be placed here
    }
}`}
            </code>
        </pre>

        {/* <!-- 19 --> */}
        <h4 id="19-what-is-angular-pipe-provide-examples">
          19. What is Angular Pipe? Provide examples.
        </h4>
        <p>
          Pipe is a feature that allows you to transform and format data in the
          template before displaying it. Pipes are used to apply common
          transformations to strings, numbers, dates, arrays, and other types of
          data. Angular provides a set of built-in pipes, and you can also
          create custom pipes to suit your specific needs.
        </p>
        <ul>
          <li>
            <strong>Built-in Angular Pipes:</strong>
            <ul>
              <li>
                <strong>DatePipe:</strong> Formats a date value according to the
                specified format.
                <code> {"{{ uploadedDate | date: }}"}</code>
              </li>
              <li>
                <strong>UpperCasePipe / LowerCasePipe:</strong> Converts a
                string to uppercase or lowercase.
                <code>{"{{ name | uppercase:  }}"}</code>
              </li>
              <li>
                <strong>CurrencyPipe</strong> Formats a number as currency.
                <code>{"{{ amount | currency: }}"}</code>
              </li>
              <li>
                <strong>PercentPipe:</strong> Formats a number as a percentage.
                <code>{"{{ successRate | percent: }}"}</code>
              </li>
              <li>
                <strong>AsyncPipe:</strong> Unwraps a value from an asynchronous
                operation.
                <code>{"{{ asyncData | async  }}"}</code>
              </li>
            </ul>
            <br />
            {/* <pre class="precode">
              <code>
                // Custom pipe implementation import &#123; Pipe, PipeTransform
                &#125; from &#39;@angular/core&#39;; @Pipe(&#123; name:
                &#39;customUppercase&#39; &#125;) export class
                CustomUppercasePipe implements PipeTransform &#123;
                transform(value: string): string &#123; if (value) &#123; return
                value.toUpperCase(); &#125; return &#39;&#39;; &#125; &#125;
              </code>
            </pre> */}
            <pre>
                <code>
                    {`// Custom pipe implementation
       import { Pipe, PipeTransform } from '@angular/core';
    
       @Pipe({
       name: 'customUppercase'
    })
       export class CustomUppercasePipe implements PipeTransform {
       transform(value: string): string {
       if (value) {
       return value.toUpperCase();
    }
     return '';
   }
}`}
                </code>
            </pre>
          </li>
        </ul>
        {/* <!-- 20 --> */}
        <h4 id="20-what-are-decorators-in-angular">
          20. What are decorators in Angular?
        </h4>
        <p>
          Decorators are functions that are applied to TypeScript declarations
          using the @ symbol followed by the decorator name. They play a crucial
          role in extending or modifying the behavior of various parts of an
          Angular application, such as components, services, and modules.
          Angular decorators include <code>@Component</code>,{" "}
          <code>@Injectable</code>, <code>@Directive</code>,<code>@Pipe</code>,{" "}
          <code>@NgModule</code>, and others.
        </p>
        {/* <!-- 21 --> */}
        <h4 id="21-what-is-interface-give-simple-example">
          21. what is interface? give simple example?
        </h4>
        <p>
          Interface is a specification that identifies a related set of
          properties and methods to be implemented by a class. So basically
          using interface you can set some basic rules for your properties and
          methods using class.
        </p>

        {/* <pre>
          <code>
            import &#123; Component &#125; from &#39;@angular/core&#39;;
            interface employe &#123; id: number; name: string; &#125;
            @Component(&#123; selector: &#39;my-app&#39;, templateUrl:
            &#39;./app.component.html&#39;, styleUrls: [
            &#39;./app.component.css&#39; ] &#125;) export class AppComponent
            &#123; name = &#39;Angular&#39;; students: employe[] = [ &#123;id:
            1, name: &quot;Hardik&quot;&#125;, &#123;id: 2, name:
            &quot;Paresh&quot;&#125;, &#123;id: 3, name:
            &quot;Rakesh&quot;&#125;, ] &#125;
          </code>
        </pre> */}
        <pre>
            <code>
                {`import { Component } from '@angular/core';
        
        interface employe {
        id: number;
        name: string;
    }
        
        @Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: [ './app.component.css' ]
     })
         export class AppComponent {
         name = 'Angular';
        
         students: employe[] = [
        {id: 1, name: "Hardik"},
        {id: 2, name: "Paresh"},
        {id: 3, name: "Rakesh"},
        ]
    }`}
            </code>
        </pre>

        {/* <!-- 22 --> */}
        <h4 id="22-what-is-typescript">22. What is typescript?</h4>
        <p>
          TypeScript is a superset of JavaScript that adds static typing and
          other features to the language. It is designed for large-scale
          application development, providing optional static typing and features
          from the latest versions of JavaScript. TypeScript is developed and
          maintained by Microsoft.
        </p>

        {/* <!-- 23 --> */}
        <h4 id="23-what-are-reactive-forms-in-angular">
          23. What are Reactive Forms in Angular?
        </h4>
        <p>
          Reactive Forms in Angular are a way to handle form inputs and
          validations using a reactive programming approach. They are built
          around reactive programming principles and are implemented using the{" "}
          <strong>FormGroup</strong>
          and
          <strong>FormControl</strong> classes.
        </p>

        {/* <!-- 24 --> */}
        <h4 id="24-how-are-reactive-forms-different-from-template-driven-forms">
          24. How are Reactive Forms different from Template-Driven Forms?
        </h4>
        <p>
          Reactive Forms are more programmatic and handle form control logic in
          the component class using TypeScript. Template-Driven Forms rely on
          directives within the HTML template and are more declarative.
        </p>

        {/* <!-- 25 --> */}
        <h4 id="25-explain-the-key-components-of-reactive-forms">
          25. Explain the key components of Reactive Forms?
        </h4>
        <p>Reactive Forms consist of three key components:</p>
        <ul>
          <li>
            <strong>FormGroup:</strong> Represents a group of form controls and
            tracks their values and validity.
          </li>
          <li>
            <strong>FormControl:</strong> Represents an individual form control,
            such as an input field, checkbox, or dropdown.
          </li>
          <li>
            <strong>FormBuilder:</strong> A service that provides a convenient
            way to create instances of
            <code>FormGroup</code> and <code>FormControl</code>.
          </li>
        </ul>

        {/* <!-- 26 --> */}
        <h4 id="26-how-do-you-create-a-form-using-reactive-forms">
          26. How do you create a form using Reactive Forms?
        </h4>
        {/* <pre>
          <code>
            import &#123; FormBuilder, FormGroup, Validators &#125; from
            &#39;@angular/forms&#39;; // ... this.myForm =
            this.formBuilder.group( &#123; name: [&#39;&#39;,
            [Validators.required, Validators.minLength(5)]], email: [&#39;&#39;,
            [Validators.required, Validators.email]], mobile: [&#39;&#39;,
            [Validators.required, Validators.minLength(10)]], // ... &#125; );{" "}
          </code>
        </pre> */}
        <pre>
            <code>
                {`import { FormBuilder, FormGroup, Validators } from '@angular/forms';
    
    // ...
    
    this.myForm = this.formBuilder.group( {
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.minLength(10)]],
    // ...
    } ); `}
            </code>
        </pre>

        {/* <!-- 27 --> */}
        <h4 id="27-how-can-you-handle-form-submissions-in-reactive-forms">
          27. How can you handle form submissions in Reactive Forms?
        </h4>
        <p>
          Form submissions are typically handled using the (ngSubmit) event in
          the form element. The form data can be accessed through the value
          property of the FormGroup instance.
        </p>

        {/* <!-- 28 --> */}
        <h4 id="28-explain-how-to-bind-a-form-control-to-an-input-field-in-the-template">
          28. Explain how to bind a form control to an input field in the
          template?
        </h4>
        <p>
          Form controls are bound to input fields in the template using the{" "}
          <code>formControlName</code> directive. For example:
        </p>
        <pre>
          <code>
            &lt;input type=&quot;text&quot;
            formControlName=&quot;username&quot;&gt;
          </code>
        </pre>

        {/* <!-- 29 --> */}
        <h4 id="29-what-are-nesting-components-">
          29. What are Nesting components?
        </h4>
        <p>
          Nesting components in Angular refers to the practice of placing one
          component within another component&#39;s template to create a
          hierarchical structure of components within your application.{" "}
        </p>

        {/* <!-- 30 --> */}
        <h4 id="30-what-is-the-purpose-of-ngmodule-in-angular-">
          30. What is the purpose of NgModule in Angular?
        </h4>
        <p>
          <code>NgModule</code> is used for organizing and configuring the
          compilation context for components. It declares which components,
          directives, and pipes belong to the module.
        </p>

        {/* <!-- 31 --> */}
        <h4 id="31-what-is-routing-in-angular-">
          31. What is Routing in Angular?
        </h4>
        <p>
          Routing is a mechanism in Angular that allows users to navigate
          between different components and views in a single-page application.
        </p>

        {/* <!-- 32 --> */}
        <h4 id="32-differentiate-between-ngif-and-ngfor-directives-">
          32. Differentiate between ngIf and ngFor directives.
        </h4>
        <p>
          <code>ngIf</code> is used for conditionally rendering elements, while{" "}
          <code>ngFor</code> is used for iterating over a list and rendering
          elements for each item.
        </p>

        {/* <!-- 33 --> */}
        <h4 id="33-explain-ngclass-and-ngstyle-in-angular-">
          33. Explain ngClass and ngStyle in Angular.
        </h4>
        <p>
          <code>ngClass</code> is used to dynamically set CSS classes based on
          expressions, and <code>ngStyle</code> is used to dynamically set
          inline styles based on expressions.
        </p>
        <p>
          <strong>Example for ngClass:</strong>
        </p>
        <p>
          Suppose you have a component with a boolean property isSpecial that
          determines whether an element should have a special style class or
          not. You can use ngClass to conditionally apply a CSS class based on
          the value of isSpecial.
        </p>
        {/* <pre>
          <code>
            <span class="hljs-comment">// app.component.ts</span>
            <span class="hljs-keyword">import</span> &#123; Component &#125;
            from <span class="hljs-string">'@angular/core'</span>;
            <span class="hljs-meta">@Component</span>(&#123; selector:{" "}
            <span class="hljs-string">'app-root'</span>, templateUrl:{" "}
            <span class="hljs-string">'./app.component.html'</span>, styleUrls:
            [<span class="hljs-string">'./app.component.css'</span>] &#125;)
            <span class="hljs-keyword">export</span>{" "}
            <span class="hljs-class">
              <span class="hljs-keyword">class</span>{" "}
              <span class="hljs-title">AppComponent</span>{" "}
            </span>
            &#123; isSpecial = <span class="hljs-keyword">true</span>; &#125;
          </code>
        </pre> */}
        <pre>
            <code>
                {`// app.component.ts
    
    import { Component } from '@angular/core';
    
    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent {
      isSpecial = true;
    }`}
            </code>
        </pre>
        <br />
        {/* <pre>
          <code>
            <span class="xml">
              <span class="hljs-comment">
                &lt;!-- app.component.html --&gt;
              </span>

              <span class="hljs-tag">
                &lt;<span class="hljs-name">div</span> [
                <span class="hljs-attr">ngClass</span>]=
                <span class="hljs-string">"</span>
              </span>
            </span>
            <span class="hljs-template-variable">
              &#123; 'special-class': isSpecial &#125;
            </span>
            <span class="xml">
              <span class="hljs-tag">
                <span class="hljs-string">"</span>&gt;
              </span>
              This element has a special class
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">div</span>&gt;
              </span>
            </span>
          </code>
        </pre> */}
        <pre>
            <code>
                {`<!-- app.component.html -->
    
        <div [ngClass]="{ 'special-class': isSpecial }">This element has a special class</div>`}
            </code>
        </pre>

        <p>
          <strong>Example for ngStyle:</strong>
        </p>
        <p>
          Suppose you want to dynamically set the background color of an element
          based on a property backgroundColor in your component. You can use{" "}
          <code>ngStyle</code> for this purpose.
        </p>
        {/* <pre>
          <code>
            <span class="hljs-comment">// app.component.ts</span>
            <span class="hljs-keyword">import</span> &#123; Component &#125;
            from <span class="hljs-string">'@angular/core'</span>;
            <span class="hljs-meta">@Component</span>(&#123; selector:{" "}
            <span class="hljs-string">'app-root'</span>, templateUrl:{" "}
            <span class="hljs-string">'./app.component.html'</span>, styleUrls:
            [<span class="hljs-string">'./app.component.css'</span>] &#125;)
            <span class="hljs-keyword">export</span>{" "}
            <span class="hljs-class">
              <span class="hljs-keyword">class</span>{" "}
              <span class="hljs-title">AppComponent</span>{" "}
            </span>
            &#123; backgroundColor = <span class="hljs-string">'red'</span>;
            &#125;
          </code>
        </pre> */}
        <pre>
            <code>
                {`// app.component.ts
    
    import { Component } from '@angular/core';
    
    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent {
      backgroundColor = 'red';
    }`}
            </code>
        </pre>
        <br />
        {/* <pre>
          <code>
            <span class="xml">
              <span class="hljs-comment">
                &lt;!-- app.component.html --&gt;
              </span>

              <span class="hljs-tag">
                &lt;<span class="hljs-name">div</span> [
                <span class="hljs-attr">ngStyle</span>]=
                <span class="hljs-string">"</span>
              </span>
            </span>
            <span class="hljs-template-variable">
              &#123; 'background-color': backgroundColor{" "}
            </span>
            <span class="xml">
              <span class="hljs-tag">
                <span class="hljs-string">"</span>&gt;
              </span>
              This element has a dynamic background color
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">div</span>&gt;
              </span>
            </span>
          </code>
        </pre> */}
        <pre>
            <code>
                {`<!-- app.component.html -->
    
        <div [ngStyle]="{ 'background-color': backgroundColor }">This element has a dynamic background color</div>`}
            </code>
        </pre>
      </div>
    </div>
  );
};
