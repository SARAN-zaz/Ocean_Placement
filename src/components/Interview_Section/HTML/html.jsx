import "./html.css";
import "../globalStyle.css";
import images from "../../../assets/HTML/index";

export const HTML = () => {
  return (
    <div class="main-container-interview-questions">
      <div>
        <p class="main-heading-q-a">HTML Interview Questions and Answers</p>
        <div class="main-heading-interview-questions-answers">
          <img class="img-class-language-logo" src={images.HTML} />
          <p>
            HTML, or Hypertext Markup Language, is the standard language used to
            create and design web pages. It provides a structured means to
            define the content and layout of a webpage using a system of tags
            and attributes. Each HTML document consists of a series of elements,
            which can include headings, paragraphs, images, links, forms, and
            more. The structure of an HTML document typically begins with a
            &#60;!DOCTYPE html&#62; declaration followed by an &#60;html&#62;
            element that encapsulates the entire content. Within the
            &#60;html&#62; element, there are two main sections: the
            &#60;head&#62; and &#60;body&#62;. The &#60;head&#62; section
            contains meta-information about the document such as its title,
            character encoding, and links to external resources like stylesheets
            and scripts. The &#60;body&#62; section contains the actual content
            visible to the user, including text, images, and other media.
            Elements are defined using tags enclosed in angle brackets, such as
            &#60;p&#62; for paragraphs, &#60;h1&#62; for headings, &#60;img&#62;
            for images, and &#60;a&#62; for links. Tags can also have attributes
            that provide additional information or modify their behavior, such
            as the src attribute in an &#60;img&#62; tag to specify the image
            source or the href attribute in an &#60;a&#62; tag to specify the
            destination URL. HTML is a foundational technology for web
            development, often used in conjunction with CSS (Cascading Style
            Sheets) for styling and JavaScript for interactivity to create
            dynamic and visually appealing web experiences.
          </p>
        </div>
        <div className="question-answer">
          <h4 id="1-what-is-html-">1. What is HTML?</h4>
          <p>
            HTML stands for HyperText Markup Language. It is the standard markup
            language used for creating web pages.
          </p>
          <h4 id="2-what-are-the-basic-components-of-an-html-document-">
            2. What are the basic components of an HTML document?
          </h4>
          <p>
            The basic components include the <code>&lt;!DOCTYPE&gt;</code>{" "}
            declaration, <code>&lt;html&gt;</code>,<code>&lt;head&gt;</code>,
            and <code>&lt;body&gt;</code> elements.
          </p>
          <h4 id="3-what-is-the-purpose-of-the-doctype-declaration-">
            3. What is the purpose of the
            <code>&lt;!DOCTYPE&gt;</code>
            declaration?
          </h4>
          <p>
            The <code>&lt;!DOCTYPE&gt;</code> declaration specifies the document
            type and version of HTML being used in the document to ensure proper
            rendering by web browsers.
          </p>
          <h4 id="4-what-are-tags-in-html-">4. What are tags in HTML?</h4>
          <p>
            Tags are the fundamental building blocks of HTML. They define
            different elements such as headings, paragraphs, links, etc., and
            are enclosed in angle brackets.
          </p>
          <h4 id="5-what-is-the-structure-of-an-html-tag-">
            5. What is the structure of an HTML tag?
          </h4>
          <p>
            An HTML tag consists of an opening tag, content, and a closing tag.
            For example,
            <code>&lt;p&gt;Content&lt;/p&gt;</code>.
          </p>
          {/* <pre>
            <code class="lang-html">
              <span class="hljs-tag">
                &lt;<span class="hljs-name">tagname</span>{" "}
                <span class="hljs-attr">attribute1</span>=
                <span class="hljs-string">"value1"</span>{" "}
                <span class="hljs-attr">attribute2</span>=
                <span class="hljs-string">"value2"</span>&gt;
              </span>
              Content goes here
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">tagname</span>&gt;
              </span>
            </code>
          </pre> */}
          <pre>
            <code>
              {`<tagname attribute1="value1" attribute2="value2">Content goes here</tagname>`}
            </code>
          </pre>
          <h4 id="6-explain-the-difference-between-html-elements-and-tags-">
            6. Explain the difference between HTML elements and tags.
          </h4>
          <p>
            HTML elements refer to the complete set of tags and content within
            them, while tags are used to define the beginning and end of an
            element.
          </p>
          <h4 id="7-what-is-the-purpose-of-attributes-in-html-tags-">
            7. What is the purpose of attributes in HTML tags?
          </h4>
          <p>
            Attributes provide additional information about HTML elements and
            are used to modify the behavior or appearance of the element.
          </p>
          <h4 id="8-give-an-example-of-an-html-attribute-">
            8. Give an example of an HTML attribute.
          </h4>
          <p>
            <code>
              &lt;a href=&quot;https://example.com&quot;&gt;Link&lt;/a&gt;
            </code>{" "}
            Here, <code>href</code> is an attribute of the{" "}
            <code>&lt;a&gt;</code> (anchor) tag used to specify the URL the link
            points to.
          </p>
          <h4 id="9-explain-the-use-of-the-head-element-in-html-">
            9. Explain the use of the <code>&lt;head&gt;</code>
            element in HTML.
          </h4>
          <p>
            The <code>&lt;head&gt;</code> element contains meta-information
            about the HTML document, such as the title, character set,
            stylesheets, and scripts.
          </p>
          <h4 id="10-what-is-the-purpose-of-the-title-element-">
            10. What is the purpose of the
            <code>&lt;title&gt;</code> element?
          </h4>
          <p>
            The <code>&lt;title&gt;</code> element defines the title of the HTML
            document, which appears in the browser&#39;s title bar or tab.
          </p>
          <h4 id="11-how-do-you-create-a-hyperlink-in-html-">
            11. How do you create a hyperlink in HTML?
          </h4>
          <p>
            Hyperlinks are created using the <code>&lt;a&gt;</code> (anchor)
            element. Example:
            <code>
              &lt;a href=&quot;https://example.com&quot;&gt;Link&lt;/a&gt;
            </code>
            .
          </p>
          <h4 id="12-explain-the-significance-of-the-img-element-in-html-">
            12. Explain the significance of the
            <code>&lt;img&gt;</code> element in HTML.
          </h4>
          <p>
            The <code>&lt;img&gt;</code> element is used to embed images in an
            HTML document by specifying the image source (<code>src</code>) and
            optional attributes like <code>alt</code> for alternative text.
          </p>
          <h4 id="13-what-does-the-alt-attribute-in-the-img-tag-do-">
            13. What does the <code>alt</code> attribute in the
            <code>&lt;img&gt;</code> tag do?
          </h4>
          <p>
            The <code>alt</code> attribute provides alternative text for an
            image, which is displayed if the image fails to load or for
            accessibility purposes.
          </p>
          <h4 id="14-how-do-you-create-a-numbered-list-in-html-">
            14. How do you create a numbered list in HTML?
          </h4>
          <p>
            Numbered lists are created using the <code>&lt;ol&gt;</code>{" "}
            (ordered list) element, and each list item is represented by the{" "}
            <code>&lt;li&gt;</code> (list item) element.
          </p>
          {/* <pre>
            <code class="lang-html">
              <span class="hljs-tag">
                &lt;<span class="hljs-name">ol</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">li</span>&gt;
              </span>
              First item
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">li</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">li</span>&gt;
              </span>
              Second item
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">li</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">li</span>&gt;
              </span>
              Third item
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">li</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">ol</span>&gt;
              </span>
            </code>
          </pre> */}
          <pre>
            <code>
              {`<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>`}
            </code>
          </pre>
          <h4 id="15-what-is-the-purpose-of-the-table-element-in-html-">
            15. What is the purpose of the
            <code>&lt;table&gt;</code>
            element in HTML?
          </h4>
          <p>
            The <code>&lt;table&gt;</code> element is used to create tabular
            data, with rows defined by
            <code>&lt;tr&gt;</code>
            (table row) and cells within each row defined by{" "}
            <code>&lt;td&gt;</code> (table data) or
            <code>&lt;th&gt;</code>
            (table header) elements.
          </p>
          <h4 id="16-explain-the-difference-between-td-and-th-elements-">
            16. Explain the difference between
            <code>&lt;td&gt;</code> and <code>&lt;th&gt;</code> elements.
          </h4>
          <p>
            <code>&lt;td&gt;</code> elements represent standard table cells,
            while <code>&lt;th&gt;</code> elements represent header cells in a
            table.
          </p>
          <h4 id="17-how-do-you-create-a-form-in-html-">
            17. How do you create a form in HTML?
          </h4>
          <p>
            Forms are created using the <code>&lt;form&gt;</code> element, which
            contains input fields, buttons, and other form elements.
          </p>
          <h4 id="18-what-is-the-purpose-of-the-method-attribute-in-a-form-">
            18. What is the purpose of the
            <code>method</code>
            attribute in a form?
          </h4>
          <p>
            The <code>method</code> attribute specifies the HTTP method (e.g.,
            GET or POST) used to submit form data to the server.
          </p>
          {/* <pre>
            <code class="lang-html">
              <span class="hljs-tag">
                &lt;<span class="hljs-name">form</span>{" "}
                <span class="hljs-attr">action</span>=
                <span class="hljs-string">"/submit_form.php"</span>{" "}
                <span class="hljs-attr">method</span>=
                <span class="hljs-string">"POST"</span>&gt;
              </span>
              <span class="hljs-comment">
                &lt;!-- form fields go here --&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">input</span>{" "}
                <span class="hljs-attr">type</span>=
                <span class="hljs-string">"text"</span>{" "}
                <span class="hljs-attr">name</span>=
                <span class="hljs-string">"username"</span>{" "}
                <span class="hljs-attr">placeholder</span>=
                <span class="hljs-string">"Enter your username"</span> /&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">br</span> /&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">input</span>
                <span class="hljs-attr">type</span>=
                <span class="hljs-string">"password"</span>
                <span class="hljs-attr">name</span>=
                <span class="hljs-string">"password"</span>
                <span class="hljs-attr">placeholder</span>=
                <span class="hljs-string">"Enter your password"</span>/&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">br</span> /&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">button</span>{" "}
                <span class="hljs-attr">type</span>=
                <span class="hljs-string">"submit"</span>&gt;
              </span>
              Submit
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">button</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">form</span>&gt;
              </span>
            </code>
          </pre> */}
          <pre>
            <code>
              {`<form action="/submit_form.php" method="POST">
    <!-- form fields go here -->
        <input type="text" name="username" placeholder="Enter your username" /><br />
        <input
        type="password"
        name="password"
        placeholder="Enter your password"/><br />
        <button type="submit">Submit</button>
</form>`}
            </code>
          </pre>
          <h4 id="19-explain-the-difference-between-the-get-and-post-methods-in-form-submission-">
            19. Explain the difference between the GET and POST methods in form
            submission.
          </h4>
          <p>
            GET method appends form data to the URL in the form of query
            parameters, while POST method sends form data within the request
            body, making it suitable for sensitive or large data.
          </p>
          <p>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/getpostRequest.png"
              alt="post and get"
            />
          </p>
          <h4 id="20-how-do-you-create-a-text-input-field-in-html-">
            20. How do you create a text input field in HTML?
          </h4>
          <p>
            Text input fields are created using the <code>&lt;input&gt;</code>{" "}
            element with the
            <code>type=&quot;text&quot;</code> attribute.
          </p>
          <h4 id="21-what-is-the-purpose-of-the-div-element-in-html-">
            21. What is the purpose of the
            <code>&lt;div&gt;</code>
            element in HTML?
          </h4>
          <p>
            The <code>&lt;div&gt;</code> element is a generic container used to
            group and style content together. It is commonly used for layout
            purposes.
          </p>
          <h4 id="22-explain-the-difference-between-div-and-span-elements-">
            22. Explain the difference between
            <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> elements.
          </h4>
          <p>
            <code>&lt;div&gt;</code> is a block-level element used for grouping
            larger sections of content, while
            <code>&lt;span&gt;</code> is an inline element used for styling
            smaller sections of text or content.
          </p>
          <h4 id="23-what-is-semantic-html-">23. What is semantic HTML?</h4>
          <p>
            Semantic HTML refers to the practice of using HTML elements that
            convey meaning to both the browser and the developer, making the
            structure and purpose of content clearer.
          </p>
          <h4 id="24-give-examples-of-semantic-html-elements-">
            24. Give examples of semantic HTML elements.
          </h4>
          <p>
            Examples include <code>&lt;header&gt;</code>,{" "}
            <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>,
            <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>,{" "}
            <code>&lt;aside&gt;</code>,<code>&lt;footer&gt;</code>, etc.
          </p>
          <h4 id="25-how-do-you-create-a-hyperlink-that-opens-in-a-new-tab-">
            25. How do you create a hyperlink that opens in a new tab?
          </h4>
          <p>
            You can add the <code>target=&quot;_blank&quot;</code> attribute to
            the <code>&lt;a&gt;</code> element. Example:
            <code>
              &lt;a href=&quot;https://example.com&quot;
              target=&quot;_blank&quot;&gt;Link&lt;/a&gt;
            </code>
            .
          </p>
          <h4 id="26-explain-the-purpose-of-the-iframe-element-">
            26. Explain the purpose of the
            <code>&lt;iframe&gt;</code>
            element.
          </h4>
          <p>
            The <code>&lt;iframe&gt;</code> element is used to embed another
            HTML document within the current document, often used for embedding
            videos, maps, or other external content.
          </p>
          <h4 id="27-what-is-the-purpose-of-the-audio-and-video-elements-">
            27. What is the purpose of the
            <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> elements?
          </h4>
          <p>
            The <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code>{" "}
            elements are used to embed audio and video content, respectively, in
            an HTML document.
          </p>
          <h4 id="28-how-do-you-create-a-comment-in-html-">
            28. How do you create a comment in HTML?
          </h4>
          <p>
            Comments in HTML are created using the <code>&lt;!-- --&gt;</code>{" "}
            syntax. Anything between
            <code>&lt;!--</code> and
            <code>--&gt;</code> will be treated as a comment and ignored by the
            browser.
          </p>
          {/* <pre>
            <code class="lang-html">
              <span class="hljs-comment">&lt;!-- This is a comment --&gt;</span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">h1</span>&gt;
              </span>
              Welcome to my website
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">h1</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">p</span>&gt;
              </span>
              This is a paragraph.
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">p</span>&gt;
              </span>
              <span class="hljs-comment">
                &lt;!-- &lt;p&gt;This paragraph is commented out.&lt;/p&gt;
                &lt;p&gt;This paragraph is also commented out.&lt;/p&gt; --&gt;
              </span>
            </code>
          </pre> */}
          <pre>
            <code>
              {`<!-- This is a comment -->
    <h1>Welcome to my website</h1>
    <p>This is a paragraph.</p>
    <!--
       <p>This paragraph is commented out.</p>
       <p>This paragraph is also commented out.</p>
    -->`}
            </code>
          </pre>
          <h4 id="29-what-is-the-purpose-of-the-meta-element-in-html-">
            29. What is the purpose of the
            <code>&lt;meta&gt;</code>
            element in HTML?
          </h4>
          <p>
            The <code>&lt;meta&gt;</code> element provides metadata about the
            HTML document, such as character set, author, description, keywords,
            etc.
          </p>
          <h4 id="30-how-do-you-create-a-horizontal-line-in-html-">
            30. How do you create a horizontal line in HTML?
          </h4>
          <p>
            Horizontal lines are created using the <code>&lt;hr&gt;</code>{" "}
            (horizontal rule) element.
          </p>
          <h4 id="31-what-is-the-purpose-of-the-abbr-element-">
            31. What is the purpose of the
            <code>&lt;abbr&gt;</code> element?
          </h4>
          <p>
            The <code>&lt;abbr&gt;</code> element is used to define an
            abbreviation or acronym, optionally providing the full version of
            the term using the <code>title</code> attribute.
          </p>
          <h4 id="32-how-do-you-create-a-dropdown-list-in-html-">
            32. How do you create a dropdown list in HTML?
          </h4>
          <p>
            Dropdown lists are created using the <code>&lt;select&gt;</code>{" "}
            element along with nested
            <code>&lt;option&gt;</code> elements.
          </p>
          {/* <pre>
            <code class="lang-html">
              &lt;select name=<span class="hljs-string">"cars"</span>&gt; &lt;
              <span class="hljs-keyword">option</span>{" "}
              <span class="hljs-keyword">value</span>=
              <span class="hljs-string">"volvo"</span>&gt;Volvo&lt;/
              <span class="hljs-keyword">option</span>&gt; &lt;
              <span class="hljs-keyword">option</span>{" "}
              <span class="hljs-keyword">value</span>=
              <span class="hljs-string">"saab"</span>&gt;Saab&lt;/
              <span class="hljs-keyword">option</span>&gt; &lt;
              <span class="hljs-keyword">option</span>{" "}
              <span class="hljs-keyword">value</span>=
              <span class="hljs-string">"opel"</span>&gt;Opel&lt;/
              <span class="hljs-keyword">option</span>&gt; &lt;
              <span class="hljs-keyword">option</span>{" "}
              <span class="hljs-keyword">value</span>=
              <span class="hljs-string">"audi"</span>&gt;Audi&lt;/
              <span class="hljs-keyword">option</span>&gt; &lt;/select&gt;
            </code>
          </pre> */}
          <pre>
            <code>
              {`select name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
</select>`}
            </code>
          </pre>
          <h4 id="33-explain-the-purpose-of-the-required-attribute-in-form-elements-">
            33. Explain the purpose of the
            <code>required</code> attribute in form elements.
          </h4>
          <p>
            The <code>required</code> attribute specifies that an input field
            must be filled out before submitting the form, helping enforce data
            validation.
          </p>
          <h4 id="34-how-do-you-add-a-background-image-to-an-html-element-">
            34. How do you add a background image to an HTML element?
          </h4>
          <pre>
            <code>
              <span class="hljs-keyword">Background </span>images are{" "}
              <span class="hljs-keyword">added </span>using CSS
            </code>
          </pre>
          <ul>
            <li>
              You can add a background image to an HTML element using CSS by
              specifying the
              <code>background-image</code>
              property. For example:
              {/* <pre class="lang-css">
                <code class="lang-css">
                  <span class="hljs-selector-class">.example</span>&#123;
                  <span class="hljs-attribute">background-image</span>:{" "}
                  <span class="hljs-built_in">url</span>(
                  <span class="hljs-string">"image.jpg"</span>); &#125;
                </code>
              </pre> */}
              <pre>
                <code>
                  {`.example{
   background-image: url("image.jpg");
}`}
                </code>
              </pre>
              This sets the background image of the element with class{" "}
              <code>example</code> to
              <code>image.jpg</code>.
            </li>
          </ul>
          <h4 id="35-what-is-the-purpose-of-the-fieldset-element-in-html-">
            35. What is the purpose of the
            <code>&lt;fieldset&gt;</code> element in HTML?
          </h4>
          <p>
            The <code>&lt;fieldset&gt;</code> element is used to group related
            form elements together and is often accompanied by a{" "}
            <code>&lt;legend&gt;</code> element to provide a caption for the
            group.
          </p>
          <h4 id="36-how-do-you-create-a-checkbox-in-html-">
            36. How do you create a checkbox in HTML?
          </h4>
          <p>
            Checkboxes are created using the <code>&lt;input&gt;</code> element
            with
            <code>type=&quot;checkbox&quot;</code>
            attribute.
          </p>
          <h4 id="37-explain-the-purpose-of-the-label-element-in-html-forms-">
            37. Explain the purpose of the
            <code>&lt;label&gt;</code> element in HTML forms.
          </h4>
          <p>
            The <code>&lt;label&gt;</code> element associates a text label with
            a form control, improving accessibility and user experience by
            providing a clickable label for the associated input.
          </p>
          <h4 id="38-what-is-the-purpose-of-the-for-attribute-in-the-label-element-">
            38. What is the purpose of the
            <code>for</code> attribute in the <code>&lt;label&gt;</code>{" "}
            element?
          </h4>
          <p>
            The <code>for</code> attribute in the <code>&lt;label&gt;</code>{" "}
            element specifies which form element it is associated with by
            referencing the <code>id</code> attribute of the corresponding input
            element.
          </p>
          <h4 id="39-how-do-you-create-a-radio-button-in-html-">
            39. How do you create a radio button in HTML?
          </h4>
          <p>
            Radio buttons are created using the <code>&lt;input&gt;</code>{" "}
            element with
            <code>type=&quot;radio&quot;</code>
            attribute. Each radio button within a group should have the same{" "}
            <code>name</code> attribute.
          </p>
          {/* <pre>
            <code class="lang-html">
              &lt;<span class="hljs-keyword">form</span>&gt; &lt;
              <span class="hljs-keyword">input</span>{" "}
              <span class="hljs-keyword">type</span>=
              <span class="hljs-string">"radio"</span> id=
              <span class="hljs-string">"male"</span> name=
              <span class="hljs-string">"gender"</span> value=
              <span class="hljs-string">"male"</span> /&gt; &lt;
              <span class="hljs-keyword">label</span>{" "}
              <span class="hljs-keyword">for</span>=
              <span class="hljs-string">"male"</span>&gt;Male&lt;/
              <span class="hljs-keyword">label</span>&gt;&lt;
              <span class="hljs-keyword">br</span> /&gt; &lt;
              <span class="hljs-keyword">input</span>{" "}
              <span class="hljs-keyword">type</span>=
              <span class="hljs-string">"radio"</span> id=
              <span class="hljs-string">"female"</span> name=
              <span class="hljs-string">"gender"</span> value=
              <span class="hljs-string">"female"</span> /&gt; &lt;
              <span class="hljs-keyword">label</span>{" "}
              <span class="hljs-keyword">for</span>=
              <span class="hljs-string">"female"</span>&gt;Female&lt;/
              <span class="hljs-keyword">label</span>&gt;&lt;
              <span class="hljs-keyword">br</span> /&gt; &lt;/
              <span class="hljs-keyword">form</span>&gt;
            </code>
          </pre> */}
          <pre>
            <code>
              {`<form>
    <input type="radio" id="male" name="gender" value="male" />
    <label for="male">Male</label><br />
    <input type="radio" id="female" name="gender" value="female" />
    <label for="female">Female</label><br />
</form>`}
            </code>
          </pre>
          <h4 id="40-explain-the-purpose-of-the-textarea-element-in-html-">
            40. Explain the purpose of the
            <code>&lt;textarea&gt;</code> element in HTML.
          </h4>
          <p>
            The <code>&lt;textarea&gt;</code> element is used to create a
            multi-line text input field, typically for longer text inputs such
            as comments or messages.
          </p>
          {/* <pre>
            <code class="lang-html">
              &lt;label <span class="hljs-keyword">for</span>=
              <span class="hljs-string">"message"</span>&gt;Message:
              <span class="xml">
                <span class="hljs-tag">
                  &lt;/<span class="hljs-name">label</span>&gt;
                </span>
              </span>
              <span class="xml">
                <span class="hljs-tag">
                  &lt;<span class="hljs-name">br</span> /&gt;
                </span>
                <span class="hljs-tag">
                  &lt;<span class="hljs-name">textarea</span>{" "}
                  <span class="hljs-attr">id</span>=
                  <span class="hljs-string">"message"</span>{" "}
                  <span class="hljs-attr">name</span>=
                  <span class="hljs-string">"message"</span>{" "}
                  <span class="hljs-attr">rows</span>=
                  <span class="hljs-string">"4"</span>{" "}
                  <span class="hljs-attr">cols</span>=
                  <span class="hljs-string">"50"</span>&gt;
                </span>
                Enter your message here...
                <span class="hljs-tag">
                  &lt;/<span class="hljs-name">textarea</span>&gt;
                </span>
              </span>
            </code>
          </pre> */}
          <pre>
            <code>
              {`<label for="message">Message:</label><br />
    <textarea id="message" name="message" rows="4" cols="50">
        Enter your message here...
    </textarea>`}
            </code>
          </pre>
          <h4 id="41-what-is-the-purpose-of-the-cols-and-rows-attributes-in-the-textarea-element-">
            41. What is the purpose of the
            <code>cols</code> and <code>rows</code> attributes in the{" "}
            <code>&lt;textarea&gt;</code> element?
          </h4>
          <p>
            The <code>cols</code> attribute specifies the visible width of the{" "}
            <code>&lt;textarea&gt;</code> in characters, while the{" "}
            <code>rows</code> attribute specifies the visible height in lines.
          </p>
          <h4 id="42-how-do-you-create-a-submit-button-in-html-forms-">
            42. How do you create a submit button in HTML forms?
          </h4>
          <p>
            Submit buttons are created using the <code>&lt;input&gt;</code>{" "}
            element with
            <code>type=&quot;submit&quot;</code>
            attribute or <code>&lt;button&gt;</code> element with{" "}
            <code>type=&quot;submit&quot;</code> attribute.
          </p>
          <h4 id="43-explain-the-purpose-of-the-aside-element-in-html5-">
            43. Explain the purpose of the
            <code>&lt;aside&gt;</code>
            element in HTML5.
          </h4>
          <p>
            The <code>&lt;aside&gt;</code> element is used to mark content that
            is tangentially related to the content around it, often used for
            sidebars, pull quotes, or related content.
          </p>
          {/* <pre>
            <code class="lang-html">
              <span class="hljs-tag">
                &lt;<span class="hljs-name">aside</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">h2</span>&gt;
              </span>
              Related Links
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">h2</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">ul</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">li</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">a</span>{" "}
                <span class="hljs-attr">href</span>=
                <span class="hljs-string">"#"</span>&gt;
              </span>
              Link 1
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">a</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">li</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">li</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">a</span>{" "}
                <span class="hljs-attr">href</span>=
                <span class="hljs-string">"#"</span>&gt;
              </span>
              Link 2
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">a</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">li</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">li</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">a</span>{" "}
                <span class="hljs-attr">href</span>=
                <span class="hljs-string">"#"</span>&gt;
              </span>
              Link 3
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">a</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">li</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">ul</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">aside</span>&gt;
              </span>
            </code>
          </pre> */}
          <pre>
            <code>
              {`<aside>
    <h2>Related Links</h2>
    <ul>
       <li><a href="#">Link 1</a></li>
       <li><a href="#">Link 2</a></li>
       <li><a href="#">Link 3</a></li>
    </ul>
</aside>`}
            </code>
          </pre>
          <h4 id="44-what-is-the-purpose-of-the-nav-element-in-html5-">
            44. What is the purpose of the
            <code>&lt;nav&gt;</code>
            element in HTML5?
          </h4>
          <p>
            The <code>&lt;nav&gt;</code> element is used to define a section of
            navigation links, typically for primary or secondary site navigation
            menus.
          </p>
          <h4 id="45-how-do-you-create-an-unordered-list-in-html-">
            45. How do you create an unordered list in HTML?
          </h4>
          <p>
            Unordered lists are created using the <code>&lt;ul&gt;</code>{" "}
            element, and each list item is represented by the
            <code>&lt;li&gt;</code> element.
          </p>
          {/* <pre>
            <code class="lang-html">
              <span class="hljs-tag">
                &lt;<span class="hljs-name">h2</span>&gt;
              </span>
              Shopping List
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">h2</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">ul</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">li</span>&gt;
              </span>
              Apples
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">li</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">li</span>&gt;
              </span>
              Bananas
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">li</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">li</span>&gt;
              </span>
              Oranges
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">li</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">ul</span>&gt;
              </span>
            </code>
          </pre> */}
          <pre>
            <code>
              {`<h2>Shopping List</h2>
    <ul>
       <li>Apples</li>
       <li>Bananas</li>
       <li>Oranges</li>
    </ul>`}
            </code>
          </pre>
          <h4 id="46-explain-the-purpose-of-the-download-attribute-in-html-">
            46. Explain the purpose of the
            <code>download</code>
            attribute in HTML.
          </h4>
          <p>
            The <code>download</code> attribute, when added to an anchor (
            <code>&lt;a&gt;</code>) element, specifies that the target will be
            downloaded when a user clicks on the hyperlink. It is used for
            downloadable resources like files or images.
          </p>
          <h4 id="47-what-is-the-purpose-of-the-meter-element-in-html-">
            47. What is the purpose of the
            <code>&lt;meter&gt;</code>
            element in HTML?
          </h4>
          <p>
            The <code>&lt;meter&gt;</code> element represents a scalar
            measurement within a known range, such as disk usage, completion
            percentage, etc., and is typically displayed as a horizontal bar.
          </p>
          <h4 id="48-how-do-you-create-a-hyperlink-that-sends-an-email-">
            48. How do you create a hyperlink that sends an email?
          </h4>
          <p>
            Hyperlinks that send emails are created using the{" "}
            <code>&lt;a&gt;</code> element with the
            <code>href=&quot;mailto:email@example.com&quot;</code> attribute.
          </p>
          {/* <pre>
            <code class="lang-html">
              <span class="hljs-tag">
                &lt;<span class="hljs-name">p</span>&gt;
              </span>
              To contact us via email, click{" "}
              <span class="hljs-tag">
                &lt;<span class="hljs-name">a</span>{" "}
                <span class="hljs-attr">href</span>=
                <span class="hljs-string">"mailto:info@example.com"</span>&gt;
              </span>
              here
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">a</span>&gt;
              </span>
              .
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">p</span>&gt;
              </span>
            </code>
          </pre> */}
          <pre>
            <code>
              {`<p>
  To contact us via email, click <a href="mailto:info@example.com">here</a>.
</p>`}
            </code>
          </pre>
          <h4 id="49-explain-the-purpose-of-the-autocomplete-attribute-in-html-forms-">
            49. Explain the purpose of the
            <code>autocomplete</code> attribute in HTML forms.
          </h4>
          <p>
            The <code>autocomplete</code> attribute, when set to <code>on</code>
            , enables browser autofill features for form inputs, helping users
            fill out forms more quickly.
          </p>
          {/* <pre>
            <code class="lang-html">
              &lt;<span class="hljs-keyword">form</span>&gt; &lt;
              <span class="hljs-keyword">label</span>{" "}
              <span class="hljs-keyword">for</span>=
              <span class="hljs-string">"username"</span>&gt;Username:&lt;/
              <span class="hljs-keyword">label</span>&gt;&lt;
              <span class="hljs-keyword">br</span> /&gt; &lt;
              <span class="hljs-keyword">input</span>
              <span class="hljs-keyword">type</span>=
              <span class="hljs-string">"text"</span>
              id=<span class="hljs-string">"username"</span>
              name=<span class="hljs-string">"username"</span>
              autocomplete=<span class="hljs-string">"username"</span>
              /&gt;&lt;<span class="hljs-keyword">br</span> /&gt;&lt;
              <span class="hljs-keyword">br</span> /&gt; &lt;
              <span class="hljs-keyword">label</span>{" "}
              <span class="hljs-keyword">for</span>=
              <span class="hljs-string">"password"</span>&gt;Password:&lt;/
              <span class="hljs-keyword">label</span>&gt;&lt;
              <span class="hljs-keyword">br</span> /&gt; &lt;
              <span class="hljs-keyword">input</span>
              <span class="hljs-keyword">type</span>=
              <span class="hljs-string">"password"</span>
              id=<span class="hljs-string">"password"</span>
              name=<span class="hljs-string">"password"</span>
              autocomplete=<span class="hljs-string">"current-password"</span>
              /&gt;&lt;<span class="hljs-keyword">br</span> /&gt;&lt;
              <span class="hljs-keyword">br</span> /&gt; &lt;
              <span class="hljs-keyword">input</span>{" "}
              <span class="hljs-keyword">type</span>=
              <span class="hljs-string">"submit"</span> value=
              <span class="hljs-string">"Submit"</span> /&gt; &lt;/
              <span class="hljs-keyword">form</span>&gt;
            </code>
          </pre> */}
          <pre>
            <code>
              {`<form>
    <label for="username">Username:</label><br />
    <input
       type="text"
       id="username"
       name="username"
       autocomplete="username"
    /><br /><br />
    <label for="password">Password:</label><br />
    <input
       type="password"
       id="password"
       name="password"
       autocomplete="current-password"
    /><br /><br />
    <input type="submit" value="Submit" />
</form>`}
            </code>
          </pre>
          <h4 id="50-what-is-the-purpose-of-the-target-attribute-in-html-links-">
            50. What is the purpose of the
            <code>target</code> attribute in HTML links?
          </h4>
          <p>
            The <code>target</code> attribute specifies where to open the linked
            document when the user clicks on the hyperlink. It can be set to{" "}
            <code>_blank</code> to open in a new window or tab,{" "}
            <code>_self</code> to open in the same frame or window, etc.
          </p>
          {/* <pre>
            <code class="lang-html">
              <span class="hljs-comment">
                &lt;!-- Link with target="_self" --&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">a</span>{" "}
                <span class="hljs-attr">href</span>=
                <span class="hljs-string">
                  "https://example.com/page1.html"
                </span>{" "}
                <span class="hljs-attr">target</span>=
                <span class="hljs-string">"_self"</span>&gt;
              </span>
              Open in the same window
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">a</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">br</span> /&gt;
              </span>
              <span class="hljs-comment">
                &lt;!-- Link with target="_blank" --&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">a</span>{" "}
                <span class="hljs-attr">href</span>=
                <span class="hljs-string">
                  "https://example.com/page2.html"
                </span>{" "}
                <span class="hljs-attr">target</span>=
                <span class="hljs-string">"_blank"</span>&gt;
              </span>
              Open in a new window
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">a</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">br</span> /&gt;
              </span>
              <span class="hljs-comment">
                &lt;!-- Link with target="_parent" --&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">a</span>{" "}
                <span class="hljs-attr">href</span>=
                <span class="hljs-string">
                  "https://example.com/page3.html"
                </span>{" "}
                <span class="hljs-attr">target</span>=
                <span class="hljs-string">"_parent"</span>&gt;
              </span>
              Open in the parent frame (if available)
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">a</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">br</span> /&gt;
              </span>
              <span class="hljs-comment">
                &lt;!-- Link with target="_top" --&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">a</span>{" "}
                <span class="hljs-attr">href</span>=
                <span class="hljs-string">
                  "https://example.com/page4.html"
                </span>{" "}
                <span class="hljs-attr">target</span>=
                <span class="hljs-string">"_top"</span>&gt;
              </span>
              Open in the top-level browsing context
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">a</span>&gt;
              </span>
              <span class="hljs-tag">
                &lt;<span class="hljs-name">br</span> /&gt;
              </span>
            </code>
          </pre> */}

          <pre>
            <code>
              {`<!-- Link with target="_self" -->
    <a href="https://example.com/page1.html" target="_self">
     Open in the same window</a><br />

<!-- Link with target="_blank" -->
    <a href="https://example.com/page2.html" target="_blank">Open in a new window</a><br />

<!-- Link with target="_parent" -->
    <a href="https://example.com/page3.html" target="_parent">
      Open in the parent frame (if available)</a><br />

<!-- Link with target="_top" -->
    <a href="https://example.com/page4.html" target="_top">
      Open in the top-level browsing context</a><br />`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};
