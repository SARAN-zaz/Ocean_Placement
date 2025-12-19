import "./CSS.css";
import "../globalStyle.css";
import images from "../../../assets/CSS/index";

export const CSS = () => {
  return (
    <div class="main-container-interview-questions">
      <div>
        <p class="main-heading-q-a">CSS Interview Questions and Answers</p>
        <div class="main-heading-interview-questions-answers">
          <img class="img-class-language-logo" src={images.CSS_logo} />
          <p>
            CSS, or Cascading Style Sheets, is a fundamental component of web
            development, playing a pivotal role in shaping the visual
            presentation of web pages. It serves as a language used to define
            the appearance and layout of HTML documents, allowing developers to
            control various aspects such as colors, fonts, spacing, and
            positioning. With CSS, designers can create visually appealing and
            consistent designs across multiple web pages with ease. One of the
            key features of CSS is its cascading nature, which enables
            developers to create style rules that apply to different elements on
            a web page.
            <br /> CSS utilizes selectors to target specific HTML elements and
            apply styling rules to them. Selectors can target elements based on
            their tag name, class, ID, attributes, or even their relationship
            with other elements in the document structure. This flexibility
            allows developers to precisely control the styling of individual
            elements or groups of elements on a web page. Furthermore, CSS
            provides a wide range of properties and values that can be used to
            style elements. Properties such as color, font-size, margin,
            padding, and background allow developers to customize the appearance
            of elements according to their design requirements.
          </p>
        </div>
        <div className="question-answer">
          {/* <!--  --> */}
          <h4 id="1-what-is-css-">1. What is CSS?</h4>
          <p>
            CSS stands for Cascading Style Sheets. It is a style sheet language
            used to describe the presentation of a document written in HTML or
            XML.
          </p>
          <h4 id="2-what-are-the-different-ways-to-include-css-in-a-webpage-">
            2. What are the different ways to include CSS in a webpage?
          </h4>
          <p>
            CSS can be included in a webpage using inline styles, internal
            stylesheets, and external stylesheets.
          </p>
          <h4 id="3-what-is-the-difference-between-padding-and-margin-">
            3. What is the difference between padding and margin?
          </h4>
          <p>
            Padding is the space between the content and the border of an
            element, while margin is the space outside the border of an element.
          </p>
          <h4 id="4-explain-the-descendant-selector-">
            4. Explain the descendant selector?
          </h4>
          <p>
            The descendant selector selects all elements that are descendants of
            a specified element.
          </p>
          {/* <pre>
            <code class="lang-html">
              &lt;<span class="hljs-keyword">div</span>{" "}
              <span class="hljs-built_in">class</span>=
              <span class="hljs-string">"container"</span>&gt; &lt;p&gt;This{" "}
              <span class="hljs-built_in">paragraph</span>{" "}
              <span class="hljs-keyword">is</span> inside{" "}
              <span class="hljs-keyword">the</span> container{" "}
              <span class="hljs-keyword">div</span>.&lt;/p&gt; &lt;
              <span class="hljs-keyword">div</span>&gt; &lt;p&gt;This{" "}
              <span class="hljs-built_in">paragraph</span>{" "}
              <span class="hljs-keyword">is</span> nested inside a{" "}
              <span class="hljs-keyword">div</span> inside{" "}
              <span class="hljs-keyword">the</span> container.&lt;/p&gt; &lt;/
              <span class="hljs-keyword">div</span>&gt; &lt;/
              <span class="hljs-keyword">div</span>&gt; &lt;p&gt;This{" "}
              <span class="hljs-built_in">paragraph</span>{" "}
              <span class="hljs-keyword">is</span> outside{" "}
              <span class="hljs-keyword">the</span> container.&lt;/p&gt;
            </code>
          </pre> */}
          <pre>
            <code>
              {`<div class="container">
    <p>This paragraph is inside the container div.</p>
        <div>
          <p>This paragraph is nested inside a div inside the container.</p>
        </div>
</div>
 <p>This paragraph is outside the container.</p>`}
            </code>
          </pre>
          <br />
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-comment">/* Descendant Selector </span>
              <span class="hljs-selector-class">.container</span>{" "}
              <span class="hljs-selector-tag">p</span> &#123;
              <span class="hljs-attribute">color</span>: blue; &#125;
            </code>
          </pre> */}
          <pre>
            <code>
              {`/* Descendant Selector */
    .container p {
      color: blue;
    }`}
            </code>
          </pre>

          <h4 id="5-what-is-the-difference-between-the-class-selector-and-id-selector-">
            5. What is the difference between the class selector and ID
            selector?
          </h4>
          <p>
            Class selectors can be applied to multiple elements, while ID
            selectors are unique and can only be applied to a single element.
          </p>
          {/* <pre>
            <code class="lang-html">
              <span class="hljs-comment">&lt;!-- Class Selector --&gt;</span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">div</span>{" "}
                <span class="hljs-attr">class</span>=
                <span class="hljs-string">"box"</span>&gt;
              </span>
              This is a box with class selector.
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">div</span>&gt;
              </span>
              <span class="hljs-comment">&lt;!-- ID Selector --&gt;</span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">div</span>{" "}
                <span class="hljs-attr">id</span>=
                <span class="hljs-string">"specialBox"</span>&gt;
              </span>
              This is a box with ID selector.
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">div</span>&gt;
              </span>
            </code>
          </pre> */}
          <pre>
            <code>
              {`<!-- Class Selector -->
    <div class="box">This is a box with class selector.</div>
            
    <!-- ID Selector -->
    <div id="specialBox">This is a box with ID selector.</div>`}
            </code>
          </pre> <br />
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-comment">/* Class Selector </span>
              <span class="hljs-selector-class">.box</span> &#123;
              <span class="hljs-attribute">width</span>:{" "}
              <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">height</span>:{" "}
              <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">background-color</span>: red; &#125;
              <span class="hljs-comment">/* ID Selector </span>
              <span class="hljs-selector-id">#specialBox</span> &#123;
              <span class="hljs-attribute">background-color</span>: blue; &#125;
            </code>
          </pre> */}

          <pre>
            <code>
              {`/* Class Selector */
    .box {
       width: 100px;
       height: 100px;
       background-color: red;
    }
/* ID Selector */
    #specialBox {
        background-color: blue;
    }`}
            </code>
          </pre>

          <h4 id="6-explain-the-difference-between-the-child-selector-and-descendant-selector-">
            6. Explain the difference between the child selector and descendant
            selector?
          </h4>
          <p>
            The child selector selects direct children of a specified element,
            while the descendant selector selects all descendants, regardless of
            their level of nesting.
          </p>
          {/* <pre>
            <code class="lang-html">
              &lt;<span class="hljs-keyword">div</span> class=
              <span class="hljs-string">"container"</span>&gt; &lt;p&gt;This is{" "}
              <span class="hljs-keyword">a</span>{" "}
              <span class="hljs-keyword">paragraph</span> directly inside{" "}
              <span class="hljs-keyword">the</span> container.&lt;/p&gt; &lt;
              <span class="hljs-keyword">div</span>&gt; &lt;p&gt;This is{" "}
              <span class="hljs-keyword">a</span>{" "}
              <span class="hljs-keyword">paragraph</span> nested inside{" "}
              <span class="hljs-keyword">a</span>{" "}
              <span class="hljs-keyword">div</span> inside{" "}
              <span class="hljs-keyword">the</span> container.&lt;/p&gt; &lt;/
              <span class="hljs-keyword">div</span>&gt; &lt;/
              <span class="hljs-keyword">div</span>&gt;
            </code>
          </pre> */}
          <pre>
            <code>
              {`<div class="container">
    <p>This is a paragraph directly inside the container.</p>
    <div>
       <p>This is a paragraph nested inside a div inside the container.</p>
    </div>
</div>`}
            </code>
          </pre>
          <br />
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-comment">/* Child Selector </span>
              <span class="hljs-selector-class">.container</span> &gt;{" "}
              <span class="hljs-selector-tag">p</span> &#123;
              <span class="hljs-attribute">color</span>: red; &#125;
              <span class="hljs-comment">/* Descendant Selector </span>
              <span class="hljs-selector-class">.container</span>{" "}
              <span class="hljs-selector-tag">p</span> &#123;
              <span class="hljs-attribute">font-style</span>: italic; &#125;
            </code>
          </pre> */}
          <pre>
            <code>
              {`/* Child Selector */
  .container > p {
    color: red;
  }
            
/* Descendant Selector */
    .container p {
        font-style: italic;
    }`}
            </code>
          </pre>

          <h4 id="7-what-is-the-css-box-model-">
            7. What is the CSS box model?
          </h4>
          <p>
            The CSS box model describes the rectangular boxes that are generated
            for elements in the document tree.
          </p>
          <h4 id="8-explain-the-content-padding-border-and-margin-areas-of-the-box-model-">
            8. Explain the content, padding, border, and margin areas of the box
            model?
          </h4>
          <p>
            Content: The actual content of the element. Padding: The space
            between the content and the border. Border: The border surrounding
            the padding. Margin: The space outside the border.
          </p>
          <h4 id="9-how-can-you-change-the-box-sizing-property-in-css-">
            9. How can you change the box-sizing property in CSS?
          </h4>
          <p>
            The box-sizing property can be set to either{" "}
            <code>content-box</code> (default) or
            <code>border-box</code> to change how the width and height of
            elements are calculated.
          </p>
          <h4 id="10-what-are-the-different-display-values-in-css-">
            10. What are the different display values in CSS?
          </h4>
          <p>
            The display property specifies the type of box used for an element.
            Common values include
            <code>block</code>,<code>inline</code>, <code>inline-block</code>,{" "}
            <code>flex</code>, <code>grid</code>, and
            <code>none</code>.
          </p>
          <h4 id="11-explain-the-difference-between-inline-and-block-elements-">
            11. Explain the difference between
            <code>inline</code> and <code>block</code> elements?
          </h4>
          <p>
            <code>Block</code> elements take up the full width available and
            start on a new line, while
            <code>inline</code>
            elements only take up as much width as necessary and do not start on
            a new line.
          </p>
          {/* <pre>
            <code class="lang-html">
              &lt;<span class="hljs-keyword">div</span>{" "}
              <span class="hljs-built_in">class</span>=
              <span class="hljs-string">"inline"</span>&gt;Inline Element{" "}
              <span class="hljs-number">1</span>&lt;/
              <span class="hljs-keyword">div</span>&gt; &lt;
              <span class="hljs-keyword">div</span>{" "}
              <span class="hljs-built_in">class</span>=
              <span class="hljs-string">"block"</span>&gt;Block Element{" "}
              <span class="hljs-number">1</span>&lt;/
              <span class="hljs-keyword">div</span>&gt;
            </code>
          </pre> */}
          <pre>
            <code>
              {`<div class="inline">Inline Element 1</div>
<div class="block">Block Element 1</div>`}
            </code>
          </pre>
          <br />
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-selector-class">.inline</span> &#123;
              <span class="hljs-attribute">display</span>: inline;
              <span class="hljs-attribute">background-color</span>: lightblue;
              <span class="hljs-attribute">padding</span>:{" "}
              <span class="hljs-number">5px</span>;
              <span class="hljs-attribute">margin</span>:{" "}
              <span class="hljs-number">5px</span>; &#125;
              <span class="hljs-selector-class">.block</span> &#123;
              <span class="hljs-attribute">display</span>: block;
              <span class="hljs-attribute">background-color</span>: lightgreen;
              <span class="hljs-attribute">padding</span>:{" "}
              <span class="hljs-number">5px</span>;
              <span class="hljs-attribute">margin</span>:{" "}
              <span class="hljs-number">5px</span>; &#125;
            </code>
          </pre> */}
          <pre>
            <code>
              {`.inline {
    display: inline;
    background-color: lightblue;
    padding: 5px;
    margin: 5px;
}
.block {
    display: block;
    background-color: lightgreen;
    padding: 5px;
    margin: 5px;
}`}
            </code>
          </pre>

          <h4 id="12-what-is-a-clearfix-">12. What is a clearfix?</h4>
          <p>
            A clearfix is a CSS technique used to contain floats within a parent
            element. It prevents the parent element from collapsing in height
            when its child elements are floated.
          </p>
          {/* <pre>
            <code class="lang-html">
              &lt;div{" "}
              <span class="hljs-class">
                <span class="hljs-keyword">class</span>
              </span>
              =<span class="hljs-string">"clearfix"</span>&gt;
              <span class="xml">
                <span class="hljs-comment">
                  &lt;!-- Floated elements go here --&gt;
                </span>
                <span class="hljs-tag">
                  &lt;/<span class="hljs-name">div</span>&gt;
                </span>
              </span>
            </code>
          </pre> */}
          <pre>
            <code>
              {`<div class="clearfix">
    <!-- Floated elements go here -->
</div>`}
            </code>
          </pre>
          <br />
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-selector-class">.clearfix</span>
              <span class="hljs-selector-pseudo">::after</span> &#123;
              <span class="hljs-attribute">content</span>:{" "}
              <span class="hljs-string">""</span>;
              <span class="hljs-attribute">display</span>: table;
              <span class="hljs-attribute">clear</span>: both; &#125;
            </code>
          </pre> */}
          <pre>
            <code>
              {`.clearfix::after {
    content: "";
    display: table;
    clear: both;
}`}
            </code>
          </pre>
          <h4 id="13-explain-the-difference-between-relative-absolute-and-fixed-positioning-">
            13. Explain the difference between
            <code>relative</code>, <code>absolute</code>, and <code>fixed</code>{" "}
            positioning?
          </h4>
          <ul>
            <li>
              <code>Relative</code> positioning positions an element relative to
              its normal position.
            </li>
            <li>
              <code>Absolute</code> positioning positions an element relative to
              its closest positioned ancestor.
            </li>
            <li>
              <code>Fixed</code> positioning positions an element relative to
              the browser window.
            </li>
          </ul>
          <h4 id="14-what-is-z-index-in-css-">14. What is z-index in CSS?</h4>
          <p>
            The z-index property specifies the stacking order of positioned
            elements. An element with a higher z-index value will appear above
            elements with lower z-index values.
          </p>
          <img
            src="https://miro.medium.com/v2/resize:fit:1358/1*hiXZAGipN0hKKaqIwvxjdQ.gif"
            alt="zindex img"
            class="imag-class-css"
          />
          <h4 id="15-how-do-you-center-an-element-horizontally-and-vertically-in-css-">
            15. How do you center an element horizontally and vertically in CSS?
          </h4>
          <p>
            To center an element horizontally, you can set its{" "}
            <code>margin</code> property to <code>auto</code>. To center it
            vertically, you can use a combination of{" "}
            <code>position: absolute</code> and <code>top: 50%</code> along with
            a negative <code>margin-top</code> equal to half of the
            element&#39;s height.
          </p>
          <h4 id="16-what-is-flexbox-">16. What is Flexbox?</h4>
          <p>
            Flexbox is a layout model in CSS that allows for the alignment and
            distribution of space among elements in a container even when their
            size is unknown or dynamic.
          </p>
          <h4 id="17-what-are-the-main-properties-of-flexbox-">
            17. What are the main properties of Flexbox?
          </h4>
          <p>
            Some main properties of Flexbox include <code>display: flex</code>,{" "}
            <code>flex-direction</code>,<code>justify-content</code>,{" "}
            <code>align-items</code>, and <code>flex-grow</code>.
          </p>
          <h4 id="18-how-do-you-create-a-responsive-layout-using-flexbox-">
            18. How do you create a responsive layout using Flexbox?
          </h4>
          <p>
            By setting appropriate values for Flexbox properties like{" "}
            <code>flex-grow</code>,<code>flex-shrink</code>,
            <code>flex-basis</code>, and using media queries, you can create
            layouts that adjust dynamically based on screen size.
          </p>
          <h4 id="19-what-is-css-grid-">19. What is CSS Grid?</h4>
          <p>
            CSS Grid is a two-dimensional layout system for the web that allows
            you to create complex grid-based layouts with rows and columns.
          </p>
          <h4 id="20-how-do-you-define-a-grid-in-css-">
            20. How do you define a grid in CSS?
          </h4>
          <p>
            You can define a grid container by setting its display property to{" "}
            <code>grid</code> or
            <code>inline-grid</code>. Then, you can define rows and columns
            using the <code>grid-template-rows</code> and
            <code>grid-template-columns</code> properties.
          </p>
          <h4 id="21-what-are-some-advantages-of-using-css-grid-">
            21. What are some advantages of using CSS Grid?
          </h4>
          <p>
            CSS Grid offers more control over layout compared to other layout
            methods like Flexbox. It allows for precise placement of elements in
            both rows and columns.
          </p>
          <h4 id="22-what-is-responsive-web-design-">
            22. What is responsive web design?
          </h4>
          <p>
            Responsive web design is an approach to web design that makes web
            pages render well on a variety of devices and window or screen
            sizes.
            <img
              src="https://public-images.interaction-design.org/literature/articles/heros/article_130515_hero_636e39613117f1.68703759.jpg"
              alt="css img"
              class="imag-class-css"
            />
          </p>
          <h4 id="23-how-do-you-create-a-responsive-design-in-css-">
            23. How do you create a responsive design in CSS?
          </h4>
          <p>
            You can create a responsive design using techniques like media
            queries, fluid grids, and flexible images.
          </p>
          <h4 id="24-what-are-media-queries-">24. What are media queries?</h4>
          <p>
            Media queries are a feature of CSS that allow you to apply different
            styles based on the characteristics of the device, such as its
            screen width, height, and orientation.
          </p>
          {/* <pre>
            <code class="lang-css">
              @<span class="hljs-keyword">media</span> screen and (max-width:{" "}
              <span class="hljs-number">600px</span>) &#123;
              <span class="hljs-selector-tag">body</span> &#123;
              <span class="hljs-attribute">font-size</span>:{" "}
              <span class="hljs-number">14px</span>; &#125; &#125;
              <span class="hljs-comment">
                /* Media query for larger screens 
              </span>
              @<span class="hljs-keyword">media</span> screen and (min-width:{" "}
              <span class="hljs-number">1024px</span>) &#123;
              <span class="hljs-selector-tag">body</span> &#123;
              <span class="hljs-attribute">font-size</span>:{" "}
              <span class="hljs-number">18px</span>; &#125; &#125;
            </code>
          </pre> */}

          <pre>
            <code>
              {`@media screen and (max-width: 600px) {
    body {
      font-size: 14px;
    }
}
/* Media query for larger screens */
@media screen and (min-width: 1024px) {
    body {
      font-size: 18px;
    }
}`}
            </code>
          </pre>
          <h4 id="25-what-is-specificity-in-css-">
            25. What is specificity in CSS?
          </h4>
          <p>
            Specificity is the means by which browsers decide which CSS property
            values are the most relevant to an element and, therefore, will be
            applied.
          </p>
          <h4 id="26-explain-the-importance-of-the-cascade-in-css-">
            26. Explain the importance of the Cascade in CSS?
          </h4>
          <p>
            The Cascade is the algorithm used to determine which styles apply to
            an element when multiple conflicting styles are defined. It helps
            maintain consistency and order in styling.
          </p>
          <h4 id="27-how-can-you-increase-the-specificity-of-a-css-selector-">
            27. How can you increase the specificity of a CSS selector?
          </h4>
          <p>
            You can increase the specificity of a CSS selector by adding more
            specific selectors, using inline styles, or using
            <code>!important</code>.
          </p>
          <h4 id="28-how-do-you-specify-fonts-in-css-">
            28. How do you specify fonts in CSS?
          </h4>
          <p>
            Fonts can be specified using the <code>font-family</code> property
            in CSS. You can specify multiple fonts in case the first choice is
            not available.
          </p>
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-selector-tag">body</span> &#123;
              <span class="hljs-attribute">font-family</span>: Arial,
              sans-serif; &#125;
              <span class="hljs-selector-tag">h1</span> &#123;
              <span class="hljs-attribute">font-family</span>:{" "}
              <span class="hljs-string">"Times New Roman"</span>, serif; &#125;
              <span class="hljs-selector-tag">p</span> &#123;
              <span class="hljs-attribute">font-family</span>: Georgia, serif;
              &#125;
            </code>
          </pre> */}
          <pre>
            <code>
              {`body {
  font-family: Arial, sans-serif;
}
h1 {
  font-family: "Times New Roman", serif;
}
p {
  font-family: Georgia, serif;
}`}
            </code>
          </pre>
          <h4 id="29-what-is-the-difference-between-em-and-rem-units-in-css-">
            29. What is the difference between
            <code>em</code>
            and <code>rem</code> units in CSS?
          </h4>
          <p>
            <code>em</code> units are relative to the font size of the parent
            element, while <code>rem</code> units are relative to the font size
            of the root element (usually the <code>html</code> element).
          </p>
          <h4 id="30-how-do-you-vertically-align-text-in-css-">
            30. How do you vertically align text in CSS?
          </h4>
          <p>
            Text can be vertically aligned using the <code>line-height</code>,{" "}
            <code>vertical-align</code>, or
            <code>flexbox</code> properties, depending on the context.
          </p>
          <h4 id="31-what-are-css-transitions-">
            31. What are CSS transitions?
          </h4>
          <p>
            CSS transitions allow you to change property values smoothly over a
            specified duration.
          </p>
          <img
            src="https://miro.medium.com/v2/resize:fit:600/format:webp/1*PfsLnn8N1MthRRIausqplA.gif"
            alt="transition img"
          />
          <h4 id="32-how-do-you-create-a-css-animation-">
            32. How do you create a CSS animation?
          </h4>
          <p>
            CSS animations are created using the <code>@keyframes</code> rule,
            which defines a set of keyframes representing the stages of the
          </p>
          <h4 id="33-explain-the-concept-of-css-transitions-provide-an-example-">
            33. Explain the concept of CSS Transitions. Provide an example?
          </h4>
          <p>
            CSS Transitions allow you to smoothly change the property values of
            an element over a specified duration.
          </p>
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-comment">/* Example of CSS Transition </span>
              <span class="hljs-selector-class">.box</span> &#123;
              <span class="hljs-attribute">width</span>:{" "}
              <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">height</span>:{" "}
              <span class="hljs-number">100px</span>;
              <span class="hljs-attribute">background-color</span>: blue;
              <span class="hljs-attribute">transition</span>: width{" "}
              <span class="hljs-number">0.5s</span> ease-in-out; &#125;
              <span class="hljs-selector-class">.box</span>
              <span class="hljs-selector-pseudo">:hover</span> &#123;
              <span class="hljs-attribute">width</span>:{" "}
              <span class="hljs-number">200px</span>; &#125;
            </code>
          </pre> */}

          <pre>
            <code>
              {`/* Example of CSS Transition */
    .box {
        width: 100px;
        height: 100px;
        background-color: blue;
        transition: width 0.5s ease-in-out;
    }
    .box:hover {
        width: 200px;
    }`}
            </code>
          </pre>
          <h4 id="34-how-can-you-create-a-fade-in-effect-using-css-">
            34. How can you create a fade-in effect using CSS?
          </h4>
          <p>
            You can create a fade-in effect by initially setting the opacity of
            the element to 0 and gradually increasing it using a CSS transition.
          </p>
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-comment">/* Example of fade-in effect </span>
              <span class="hljs-selector-class">.fade-in</span> &#123;
              <span class="hljs-attribute">opacity</span>:{" "}
              <span class="hljs-number">0</span>;
              <span class="hljs-attribute">transition</span>: opacity{" "}
              <span class="hljs-number">1s</span> ease-in-out; &#125;
              <span class="hljs-selector-class">.fade-in</span>
              <span class="hljs-selector-pseudo">:hover</span> &#123;
              <span class="hljs-attribute">opacity</span>:{" "}
              <span class="hljs-number">1</span>; &#125;
            </code>
          </pre> */}
          <pre>
            <code>
              {`/* Example of fade-in effect */
    .fade-in {
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }
    .fade-in:hover {
        opacity: 1;
    }`}
            </code>
          </pre>
          <h4 id="35-what-is-the-transform-property-used-for-in-css-">
            35. What is the <code>transform</code> property used for in CSS?
          </h4>
          <p>
            The <code>transform</code> property allows you to apply
            transformations to an element, such as rotation, scaling, skewing,
            or translating (moving) it in 2D or 3D space.
          </p>
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-comment">
                /* Example of transform property 
              </span>
              <span class="hljs-selector-class">.element</span> &#123;
              <span class="hljs-attribute">transform</span>:{" "}
              <span class="hljs-built_in">rotate</span>(45deg){" "}
              <span class="hljs-built_in">scale</span>(1.5); &#125;
            </code>
          </pre> */}

          <pre>
            <code>
              {`/* Example of transform property */
    .element {
       transform: rotate(45deg) scale(1.5);
    }`}
            </code>
          </pre>
          <h4 id="36-how-do-you-create-a-drop-shadow-effect-in-css-">
            36. How do you create a drop shadow effect in CSS?
          </h4>
          <p>
            You can create a drop shadow effect using the{" "}
            <code>box-shadow</code> property, which allows you to add shadow
            effects around an element&#39;s frame.
          </p>
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-comment">
                /* Example of drop shadow effect 
              </span>
              <span class="hljs-selector-class">.element</span> &#123;
              <span class="hljs-attribute">box-shadow</span>:{" "}
              <span class="hljs-number">2px</span>{" "}
              <span class="hljs-number">2px</span>{" "}
              <span class="hljs-number">4px</span>{" "}
              <span class="hljs-built_in">rgba</span>(0, 0, 0, 0.5); &#125;
            </code>
          </pre> */}

          <pre>
            <code>
              {`/* Example of drop shadow effect */
    .element {
       box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }`}
            </code>
          </pre>
          <h4 id="37-explain-the-concept-of-css-flexbox-provide-an-example-">
            37. Explain the concept of CSS Flexbox. Provide an example?
          </h4>
          <p>
            CSS Flexbox is a layout model that allows you to create flexible and
            responsive layouts. It consists of flex containers and flex items.
          </p>
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-comment">/* Example of Flexbox </span>
              <span class="hljs-selector-class">.container</span> &#123;
              <span class="hljs-attribute">display</span>: flex;
              <span class="hljs-attribute">justify-content</span>:
              space-between; &#125;
              <span class="hljs-selector-class">.item</span> &#123;
              <span class="hljs-attribute">flex</span>:{" "}
              <span class="hljs-number">1</span>; &#125;
            </code>
          </pre> */}
          <pre>
            <code>
              {`/* Example of Flexbox */
    .container {
        display: flex;
        justify-content: space-between;
    }
    .item {
        flex: 1;
    }`}
            </code>
          </pre>
          <h4 id="38-what-is-the-purpose-of-the-box-sizing-property-in-css-">
            38. What is the purpose of the
            <code>box-sizing</code> property in CSS?
          </h4>
          <p>
            The <code>box-sizing</code> property allows you to control how the
            width and height of an element are calculated, including its padding
            and border.
          </p>
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-comment">
                /* Example of box-sizing property 
              </span>
              <span class="hljs-selector-class">.element</span> &#123;
              <span class="hljs-attribute">box-sizing</span>: border-box; &#125;
            </code>
          </pre> */}

          <pre>
            <code>
              {`/* Example of box-sizing property */
    .element {
       box-sizing: border-box;
    }`}
            </code>
          </pre>
          <h4 id="39-how-can-you-create-a-responsive-navbar-using-css-">
            39. How can you create a responsive navbar using CSS?
          </h4>
          <p>
            You can create a responsive navbar by using Flexbox or CSS Grid for
            layout, media queries for responsiveness, and proper sizing and
            positioning of navbar elements.
          </p>
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-comment">
                /* Example of responsive navbar 
              </span>
              <span class="hljs-selector-class">.navbar</span> &#123;
              <span class="hljs-attribute">display</span>: flex;
              <span class="hljs-attribute">justify-content</span>:
              space-between;
              <span class="hljs-attribute">align-items</span>: center; &#125; @
              <span class="hljs-keyword">media</span> (max-width:{" "}
              <span class="hljs-number">768px</span>) &#123;
              <span class="hljs-selector-class">.navbar</span> &#123;
              <span class="hljs-attribute">flex-direction</span>: column; &#125;
              &#125;
            </code>
          </pre> */}
          <pre>
            <code>
              {`/* Example of responsive navbar */
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @media (max-width: 768px) {
        .navbar {
            flex-direction: column;
        }
    }`}
            </code>
          </pre>
          <h4 id="40-explain-the-concept-of-css-grid-provide-an-example-">
            40. Explain the concept of CSS Grid. Provide an example?
          </h4>
          <p>
            CSS Grid is a two-dimensional layout system that allows you to
            create complex grid-based layouts with rows and columns.
          </p>
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-comment">/* Example of CSS Grid </span>
              <span class="hljs-selector-class">.container</span> &#123;
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-columns</span>:{" "}
              <span class="hljs-number">1</span>fr{" "}
              <span class="hljs-number">1</span>fr{" "}
              <span class="hljs-number">1</span>fr;
              <span class="hljs-attribute">grid-gap</span>:{" "}
              <span class="hljs-number">10px</span>; &#125;
              <span class="hljs-selector-class">.item</span> &#123;
              <span class="hljs-attribute">background-color</span>: lightgray;
              <span class="hljs-attribute">padding</span>:{" "}
              <span class="hljs-number">20px</span>; &#125;
            </code>
          </pre> */}

          <pre>
            <code>
              {`/* Example of CSS Grid */
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
    }
    .item {
        background-color: lightgray;
        padding: 20px;
    }`}
            </code>
          </pre>
          <h4 id="41-what-are-css-variables-how-do-you-use-them-">
            41. What are CSS Variables? How do you use them?
          </h4>
          <p>
            CSS Variables, also known as Custom Properties, allow you to define
            reusable values in CSS. They are declared using the <code>--</code>{" "}
            prefix and accessed using the <code>var()</code> function.
          </p>
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-comment">
                /* Example usage of CSS Variables 
              </span>
              <span class="hljs-selector-pseudo">:root</span> &#123;
              <span class="hljs-attribute">primary-color</span>:{" "}
              <span class="hljs-number">#3498db</span>; &#125;
              <span class="hljs-selector-class">.element</span> &#123;
              <span class="hljs-attribute">color</span>:{" "}
              <span class="hljs-built_in">var</span>(--primary-color); &#125;
            </code>
          </pre> */}
          <pre>
            <code>
              {`/* Example usage of CSS Variables */
    :root {
        primary-color: #3498db;
    }
    .element {
        color: var(--primary-color);
    }`}
            </code>
          </pre>
          <h4 id="42-how-can-you-vertically-center-an-element-in-css-">
            42. How can you vertically center an element in CSS?
          </h4>
          <p>
            You can vertically center an element by using Flexbox or CSS Grid,
            setting its parent container&#39;s
            <code>display</code> property to <code>flex</code> or{" "}
            <code>grid</code>, and using alignment properties such as
            <code>align-items</code> or <code>justify-content</code>.
          </p>
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-comment">
                /* Example of vertical centering using Flexbox 
              </span>
              <span class="hljs-selector-class">.container</span> &#123;
              <span class="hljs-attribute">display</span>: flex;
              <span class="hljs-attribute">align-items</span>: center; &#125;
            </code>
          </pre> */}
          <pre>
            <code>
              {`/* Example of vertical centering using Flexbox */
    .container {
        display: flex;
        align-items: center;
    }`}
            </code>
          </pre>
          <h4 id="43-what-is-the-purpose-of-the-float-property-in-css-">
            43. What is the purpose of the
            <code>float</code> property in CSS?
          </h4>
          <p>
            The <code>float</code> property is used to specify whether an
            element should float to the left, right, or none. It is commonly
            used for layout purposes, such as creating columns.
          </p>
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-comment">/* Example of float property </span>
              <span class="hljs-selector-class">.element</span> &#123;
              <span class="hljs-attribute">float</span>: left; &#125;
            </code>
          </pre> */}
          <pre>
            <code>
              {`/* Example of float property */
    .element {
       float: left;
    }`}
            </code>
          </pre>
          <h4 id="44-explain-the-concept-of-css-specificity-">
            44. Explain the concept of CSS Specificity.
          </h4>
          <p>
            CSS Specificity is a set of rules used by browsers to determine
            which styles should be applied to an element when multiple
            conflicting styles exist. It is based on the selector&#39;s type,
            class, ID, and inline styles.
          </p>
          <h4 id="45-how-do-you-create-a-responsive-image-gallery-in-css-">
            45. How do you create a responsive image gallery in CSS?
          </h4>
          <p>
            You can create a responsive image gallery by using CSS Grid or
            Flexbox for layout, media queries for responsiveness, and proper
            sizing and positioning of gallery items.
          </p>
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-comment">
                /* Example of responsive image gallery using CSS Grid 
              </span>
              <span class="hljs-selector-class">.gallery</span> &#123;
              <span class="hljs-attribute">display</span>: grid;
              <span class="hljs-attribute">grid-template-columns</span>:{" "}
              <span class="hljs-built_in">repeat</span>(auto-fit, minmax(200px,
              1fr));
              <span class="hljs-attribute">grid-gap</span>:{" "}
              <span class="hljs-number">10px</span>; &#125;
              <span class="hljs-selector-class">.gallery</span>{" "}
              <span class="hljs-selector-tag">img</span> &#123;
              <span class="hljs-attribute">width</span>:{" "}
              <span class="hljs-number">100%</span>;
              <span class="hljs-attribute">height</span>: auto; &#125;
            </code>
          </pre> */}

          <pre>
            <code>
              {`/* Example of responsive image gallery using CSS Grid */
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 10px;
    }
    .gallery img {
        width: 100%;
        height: auto;
    }`}
            </code>
          </pre>
          <h4 id="46-explain-the-concept-of-css-pseudo-elements-">
            46. Explain the concept of CSS Pseudo-Elements?
          </h4>
          <p>
            CSS Pseudo-Elements are used to style certain parts of an element,
            such as the first letter or line of text, without adding extra HTML
            markup. They are denoted by a double colon <code>(::)</code> before
            their name.
          </p>
          <h4 id="47-what-is-the-purpose-of-the-overflow-property-in-css-">
            47. What is the purpose of the
            <code>overflow</code>
            property in CSS?
          </h4>
          <p>
            The <code>overflow</code> property is used to control what happens
            to content that overflows its container&#39;s bounds. It can be set
            to <code>visible</code>, <code>hidden</code>, <code>scroll</code>,
            or
            <code>auto</code>, among other values.
          </p>
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-comment">
                /* Example of overflow property 
              </span>
              <span class="hljs-selector-class">.container</span> &#123;
              <span class="hljs-attribute">overflow</span>: hidden; &#125;
            </code>
          </pre> */}
          <pre>
            <code>
              {`/* Example of overflow property */
    .container {
       overflow: hidden;
    }`}
            </code>
          </pre>
          <h4 id="48-how-can-you-create-a-css-only-slider-">
            48. How can you create a CSS-only slider?
          </h4>
          <p>
            You can create a CSS-only slider by using radio buttons or
            checkboxes as navigation controls, and leveraging the
            <code>:checked</code> pseudo-class to determine which slide to
            display.
          </p>
          {/* <pre>
            <code class="lang-css">
              <span class="hljs-comment">
                /* Example of overflow property 
              </span>
              <span class="hljs-selector-class">.slide</span> &#123;
              <span class="hljs-attribute">display</span>: none; &#125;
              <span class="hljs-selector-class">.slide</span> &#123;
              <span class="hljs-attribute">position</span>: relative;
              <span class="hljs-attribute">width</span>:{" "}
              <span class="hljs-number">300px</span>;{" "}
              <span class="hljs-comment">/* Adjust width as needed </span>
              <span class="hljs-attribute">height</span>:{" "}
              <span class="hljs-number">200px</span>;{" "}
              <span class="hljs-comment">/* Adjust height as needed </span>
              <span class="hljs-attribute">overflow</span>: hidden; &#125;
            </code>
          </pre> */}
          <pre>
            <code>
              {`/* Example of overflow property */
    .slide {
        display: none;
    }
    .slide {
        position: relative;
        width: 300px; /* Adjust width as needed */
        height: 200px; /* Adjust height as needed */
        overflow: hidden;
    }`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};
