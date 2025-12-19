import "./Bootstrap.css";
import "../globalStyle.css";
import images from "../../../assets/Bootstrap/index";

export const Bootstrap = () => {
  return (
    <div class="main-container-interview-questions">
      <div>
        <p class="main-heading-q-a">
          Bootstrap Interview Questions and Answers
        </p>
        <div class="main-heading-interview-questions-answers">
          <img class="img-class-language-logo" src={images.Bootstrap_logo} />
          <p>
            Bootstrap is a popular front-end framework designed to simplify the
            creation of responsive, mobile-first websites. It is widely used for
            building modern web applications quickly and efficiently. The
            framework offers a comprehensive set of CSS and JavaScript
            components, such as buttons, forms, navigation bars, modals, and
            alerts, which help developers implement robust UI designs with
            minimal custom code. One of Bootstrap's standout features is its
            responsive grid system, which enables developers to create fluid,
            flexible layouts that adapt seamlessly to various screen sizes and
            orientations. This system is crucial for ensuring that web
            applications are visually appealing and functional across devices,
            from desktops to smartphones. Additionally, Bootstrap comes with
            pre-designed UI components that save development time and promote
            consistency in design across an application. Its powerful set of
            utility classes allows for easy customization of elements without
            writing extensive CSS from scratch. This capability accelerates the
            development process and simplifies maintenance. The framework's
            built-in support for cross-browser compatibility helps ensure that
            applications look and perform consistently across different web
            browsers. Bootstrap also supports modern design practices, with
            features like responsive images, custom breakpoints, and components
            for dynamic interaction. Overall, Bootstrap’s comprehensive toolkit
            streamlines development, promotes consistent design practices, and
            reduces the need for custom styling, making it an indispensable
            asset for developers aiming for efficiency and high-quality results.
          </p>
        </div>
      </div>
      <div className="question-answer">
        <h4 id="1-what-is-bootstrap-">1. What is Bootstrap?</h4>
        <p>
          Bootstrap is a HTML, CSS, and JS framework for building the rich web
          applications with minimal effort. This framework emphasis more on
          building mobile web applications.
        </p>

        <h4 id="2-why-to-choose-bootstrap-for-building-the-websites-">
          2. Why to choose Bootstrap for building the websites?
        </h4>
        <p>
          There are few reason why we choose Bootstrap for building websites:
        </p>
        <p>
          <b>Mobile Support:</b> For mobile devices it provides full support in
          one single file rather than in separate file. It supports the
          responsive design including adjusting the CSS based on the different
          types of device, size of the screen etc. It reduces extra effort for
          developers. Easy to learn: Writing application in bootstrap is easy if
          you know CSS and HTML Browser Support: It supports all the popular
          browsers like Firefox, Opera, Safari, IE etc.
        </p>

        <h4 id="3-what-are-the-key-components-of-bootstrap-">
          3. What are the key components of Bootstrap?
        </h4>
        <p>The key components of Bootstrap are:</p>
        <p>
          <b>CSS</b> : It comes with plenty of CSS files
          <br />
          <b>Scaffolding</b> : It provides a basic structure with Grid system ,
          link styles and background
          <br />
          <b>Layout Components</b> : List of layout components
          <br />
          <b>JavaScript Plugins:</b> It contains many jQuery and JavaScript
          plugins
          <br />
          <b>Customize:</b> To get your own version of framework you can
          customize your components
        </p>

        <h4 id="4-what-are-class-loaders-in-bootstrap-">
          4. What are class loaders in Bootstrap?
        </h4>
        <p>
          Class loader is a part of JRE (Java Runtime Environment) which loads
          Java classes into Java virtual environment. Class loaders also does
          the process of converting a named class into its equivalent binary
          form.
        </p>

        <h4 id="5-what-are-the-types-of-layout-available-in-bootstrap-">
          5. What are the types of layout available in Bootstrap?
        </h4>
        <p>In Bootstrap there are two types of Layout available:</p>
        <p>
          <b>Fluid Layout:</b> Fluid layout is used when you want to create a
          app that is 100% wide and use up all the width of the screen
          <br />
          <b>Fixed Layout:</b> For a standard screen you will use fixed layout
          (940 px) option BootStrap
        </p>

        <h4 id="6-what-is-bootstrap-grid-system-">
          6. What is Bootstrap Grid System?
        </h4>
        <p>
          For creating page layout through a series of rows and columns that
          house your content Bootstrap Grid Sytem is used.
        </p>

        <h4 id="7-what-are-offset-columns-in-bootstrap-">
          7. What are offset columns in Bootstrap?
        </h4>
        <p>
          For more specialized layouts offsets are a useful feature. For more
          spacing they can be used by pushing column over.
          <br />
          <b>For example,</b> .col-xs=* classes do not support offset but they
          are easily replicated using an empty cell
        </p>

        <h4 id="8-what-is-column-ordering-in-bootstrap-">
          8. What is column ordering in Bootstrap?
        </h4>
        <p>
          Column ordering is one of the feature available in bootstrap and you
          can easily write columns in an order and show them in another one.
          With <code>.col-md-push-*</code> and <code>.col-md-pull-*</code>
          <br />
          the order of the column can be easily changed.
        </p>

        <h4 id="9-what-function-you-can-use-to-wrap-a-page-content-">
          9. What function you can use to wrap a page content?
        </h4>
        <p>
          To wrap a page content you can use .container and using that you can
          also center the content.
        </p>

        <h4 id="10-what-pagination-in-bootstrap-is-and-how-they-are-classified-">
          10. What pagination in bootstrap is and how they are classified?
        </h4>
        <p>
          Pagination is the handling of an unordered list by bootstrap. To
          handle pagination bootstrap provides following classes:
        </p>
        <p>
          <b>.pagination:</b> To get pagination on your page you have to add
          this class
          <br />
          <b>.disabled, .active:</b> Customize links by .disabled for
          unclickable links and .active to indicate the current page
          <br />
          <b>.pagination-Ig, .pagination-sm:</b> Use these classes to get
          different size item
        </p>

        <h4 id="11-what-is-the-difference-between-bootstrap-and-foundation-">
          11. What is the difference between Bootstrap and Foundation?
        </h4>
        <table>
          <thead>
            <tr>
              <th>Bootstrap</th>
              <th>Foundation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bootstrap offers unlimited number of UI elements</td>
              <td>
                In Foundation UI element options are very limited in numbers
              </td>
            </tr>
            <tr>
              <td>Bootstraps uses pixels</td>
              <td>Foundation use REMs</td>
            </tr>
            <tr>
              <td>
                Bootstrap encourages to design for both desktop and mobile.{" "}
              </td>
              <td>Foundation encourages to design mobile first</td>
            </tr>
            <tr>
              <td>Bootstrap support LESS as its preprocessor</td>
              <td>Foundation support Sass and Compass as its preprocessor</td>
            </tr>
          </tbody>
        </table>

        <h4 id="12-in-bootstrap-what-are-the-two-ways-you-can-display-the-code-">
          12. In Bootstrap what are the two ways you can display the code?
        </h4>
        <p>In bootstrap you can display code in two ways:</p>
        <p>
          <b>tag :</b> If you are going to display code inline, you should use{" "}
          <code>code</code> tag
          <br />
          <b>pre tag:</b> If you want to display the code as a standalone block
          element or it has multiple lines then you should use <code>pre</code>{" "}
          tag
        </p>

        <h4 id="13-what-are-the-steps-for-creating-basic-or-vertical-forms-">
          13. What are the steps for creating basic or vertical forms?
        </h4>
        <p>The steps for creating basic or vertical forms are:</p>
        <p>
          Add a role form to the parent <code>form</code> element Wrap labels
          and controls in a <code>div</code> with class{" "}
          <code>.form-group.</code> To achieve optimum spacing this is needed
          Add a class of <code>.form-control</code> to all texturl{" "}
          <code>input</code> , <code>textarea</code> , and
          <code>select</code> elements
        </p>

        <h4 id="14-what-is-modal-plugin-used-for-in-bootstrap-">
          14. What is Modal plugin used for in Bootstrap?
        </h4>
        <p>
          A modal is a child window that is layered over its parent window.
          Using a custom Jquery Plugin, Bootstrap Modal are created. To enrich
          user experience and to add functionality to users, modal windows are
          created with the help of Modal plugin.
        </p>

        <h4 id="15-what-is-bootstrap-container-">
          15. What is Bootstrap Container?
        </h4>
        <p>
          Bootstrap container is a class which is useful and creates a centred
          area within the page where our site content can be put within. The
          advantage of the bootstrap .container is that it is responsive and
          will place all our other HTML code.
        </p>

        <h4 id="16-what-is-bootstrap-collapsing-elements-">
          16. What is Bootstrap collapsing elements?
        </h4>
        <p>
          Bootstrap collapsing elements enables you to collapse any particular
          element without writing any JavaScript code or the accordion markup.
          In Bootstrap to apply collapsing elements you have to add data-toggle=
          “collapse&quot; to the controller element along with a data-target or
          href to automatically assign control of a collapsible element.
          Likewise, you can use .collapse (options), .collapse (‘show’) or
          .collapse (‘hide’)
        </p>

        <h4 id="17-what-is-list-group-in-bootstrap-and-what-is-the-use-of-it-">
          17. What is list group in Bootstrap and what is the use of it?
        </h4>
        <p>
          List groups are components to display both simple and complex element
          with custom content:
        </p>
        <p>
          <b>For example:</b> A simple list group is created using class
          .list-group to address the list, and class .list-group-item to address
          individual item.
        </p>

        <h4 id="18-how-you-can-add-badge-to-list-group-in-bootstrap-">
          18. How you can add badge to list group in Bootstrap?
        </h4>
        <p>
          To add badge to list group in Bootstrap you have to simply add{" "}
          <code>span class = &quot;badge&quot;</code> within the <code>li</code>{" "}
          element.
        </p>

        <h4 id="19-what-media-object-in-bootstrap-is-and-what-are-their-types-">
          19. What media object in Bootstrap is and what are their types?
        </h4>
        <p>
          Media objects in Bootstrap enables to put media object like image,
          video or audio to the left or right of the content blocks. Media
          element can be created using the class .media and the source is
          specified in using the class .media-object. Media-objects are of two
          types,
        </p>
        <p>They are of two types</p>
        <ul>
          <li>.media</li>
          <li>.media-list</li>
        </ul>

        <h4 id="20-what-is-the-use-of-bootstrap-carousel-plugin-">
          20. What is the use of Bootstrap Carousel plugin?
        </h4>
        <p>
          The Carousel plugin is used to add a slider to your site. It is useful
          in condition where you want to display huge amount of contents within
          a small space on the web pages. Some of the standard carousel
          includes:
        </p>
        <ul>
          <li>
            <code>.carousel (options)</code>
          </li>
          <li>
            <code>.carousel (&#39;cycle&#39;)</code>
          </li>
          <li>
            <code>.carousel (&#39;pause&#39;)</code>
          </li>
          <li>
            <code>.carousel (&#39;number&#39;)</code>
          </li>
          <li>
            <code>.carousel (&#39;prev&#39;)</code>
          </li>
          <li>
            <code>.carousel (&#39;next&#39;)</code>
          </li>
        </ul>
        <h4 id="21-what-is-a-progress-bar-in-bootstrap-">
          21. What is a progress bar in bootstrap?
        </h4>
        <p>
          Progress bar is used with HTML tag style in HTML element using{" "}
          <code>progress</code> keyword. In bootstrap we used html5{" "}
          <code>progress</code> with CSS classes that have special features in
          bootstrap, that is only made for the progress bar.
        </p>

        <h4 id="22-name-the-contextual-classes-that-are-used-with-the-progressive-bar-in-bootstrap-">
          22. Name the contextual classes that are used with the progressive bar
          in bootstrap?
        </h4>
        <p>The contextual classes used with progressive bar are as follows.</p>
        <ul>
          <li>
            <code>Progress-success</code>
          </li>
          <li>
            <code>Progress-info</code>
          </li>
          <li>
            <code>Progress-warning</code>
          </li>
          <li>
            <code>Progress-danger</code>
          </li>
        </ul>

        <h4 id="23-what-are-responsive-utility-classes-in-bootstrap-">
          23. What are responsive utility classes in Bootstrap?
        </h4>
        <p>
          Responsive utility classes in bootstrap are a set of classes which are
          used to conceal or exhibit the HTML elements based on screen
          resolution that discerns by media query in bootstrap.
        </p>
        <p>
          <b>Example:</b> <code> hidden-md-down</code>
        </p>

        <h4 id="24-what-are-the-different-button-styles-in-bootstrap-">
          24. What are the different button styles in Bootstrap?
        </h4>
        <p>
          In bootstrap there are seven styles which we can use with the
          bootstrap button.
        </p>
        <ul>
          <li>
            <code>.btn-default.</code>
          </li>
          <li>
            <code>.btn-primary</code>
          </li>
          <li>
            <code>.btn-success</code>
          </li>
          <li>
            <code>.btn-info</code>
          </li>
          <li>
            <code>.btn-warning.</code>
          </li>
          <li>
            <code>.btn-danger.</code>
          </li>
          <li>
            <code>.btn-link.</code>
          </li>
        </ul>

        <h4 id="25-what-are-bootstrap-alerts-">
          25. What are Bootstrap alerts?
        </h4>
        <p>
          This is used to create presume alert messages, which adds style to the
          messages to look more noticeable to the user. There are four classes
          in alerts i.e .alert-success, .alert-info, .alert-warning,
          .alert-danger.
        </p>

        <h4 id="26-define-bootstrap-thumbnails-">
          26. Define Bootstrap thumbnails?
        </h4>
        <p>
          It is a way to use the layout images, videos, text etc. in a grid
          system. We can create thumbnails by adding a tag with the class
          .thumbnails around the image.This will add four pixels of padding and
          a grey border.
        </p>

        <h4 id="27-explain-modal-plugin-in-bootstrap-">
          27. Explain Modal plugin in Bootstrap?
        </h4>
        <p>
          A model is an inherited window that is layered over its parent window.
          This is used to augment the user experience and adds different
          functionalities to the users.Model windows are created with the help
          of the modal plugin.
        </p>

        <h4 id="28-which-class-is-used-for-pagination-in-bootstrap-">
          28. Which class is used for pagination in Bootstrap?
        </h4>
        <p>
          To add pagination on the webpage we have to use the class .pagination.
        </p>
        <h4 id="29-what-is-bootstrap-collapsing-elements-">
          29. What is Bootstrap collapsing elements?
        </h4>
        <p>
          It allows you to collapse any particular element without using any
          JavaScript code. To use this feature in bootstrap you have to add
          data-toggle=&quot; collapse&quot; to the controller element along with
          a data target to automatically assign the control of a collapsible
          element. We can use this by writing .collapse(options) etc.
        </p>

        <h4 id="30-explain-the-uses-of-carousel-plugin-in-bootstrap-">
          30. Explain the uses of carousel plugin in Bootstrap?
        </h4>
        <p>
          Carousel plugin in bootstrap is used to make sliders in the web pages
          or your site. There are several carousel plugins that are used in
          bootstrap to display large contents within a small space by adding
          sliders.
        </p>
        <p>
          <b>Example:</b> <code> .carousel(options)</code>,{" "}
          <code>.carousel(&#39;pause&#39;)</code>,
          <code>.carousel(&#39;cycle&#39;)</code>,{" "}
          <code>.carousel(&#39;prev&#39;)</code>,
          <code>.carousel(&#39;next&#39;)</code>.
        </p>

        <h4 id="31-what-will-be-the-output-of-the-below-code-and-why-">
          31. What will be the output of the below code and why?
        </h4>
        {/* <pre>
        <code class="lang-html">
          &lt;<span class="hljs-keyword">div</span>{" "}
          <span class="hljs-built_in">class</span>=
          <span class="hljs-string">"progress"</span>&gt; &lt;
          <span class="hljs-keyword">div</span>{" "}
          <span class="hljs-built_in">class</span>=
          <span class="hljs-string">"progress-bar progress-bar-success"</span>{" "}
          style=<span class="hljs-string">"width: 65%"</span>&gt; &lt;span{" "}
          <span class="hljs-built_in">class</span>=
          <span class="hljs-string">"sr-only"</span>&gt;
          <span class="hljs-number">75</span>% successfully
          completed&lt;/span&gt; &lt;/<span class="hljs-keyword">div</span>&gt;
          &lt;<span class="hljs-keyword">div</span>{" "}
          <span class="hljs-built_in">class</span>=
          <span class="hljs-string">"progress-bar progress-bar-warning"</span>{" "}
          style=<span class="hljs-string">"width: 20%"</span>&gt; &lt;span{" "}
          <span class="hljs-built_in">class</span>=
          <span class="hljs-string">"sr-only"</span>&gt;
          <span class="hljs-number">30</span>% completed{" "}
          <span class="hljs-keyword">with</span> warnings&lt;/span&gt; &lt;/
          <span class="hljs-keyword">div</span>&gt; &lt;
          <span class="hljs-keyword">div</span>{" "}
          <span class="hljs-built_in">class</span>=
          <span class="hljs-string">"progress-bar progress-bar-danger"</span>{" "}
          style=<span class="hljs-string">"width: 15%"</span>&gt; &lt;span{" "}
          <span class="hljs-built_in">class</span>=
          <span class="hljs-string">"sr-only"</span>&gt;
          <span class="hljs-number">15</span>% did{" "}
          <span class="hljs-keyword">not</span> complete&lt;/span&gt; &lt;/
          <span class="hljs-keyword">div</span>&gt; &lt;/
          <span class="hljs-keyword">div</span>&gt;
        </code>
      </pre> */}
        <pre>
          <code className="lang-html">
            {`<div class="progress">
  <div class="progress-bar progress-bar-success" style="width: 65%">
    <span class="sr-only">75% successfully completed</span>
  </div>
  <div class="progress-bar progress-bar-warning" style="width: 20%">
    <span class="sr-only">30% completed with warnings</span>
  </div>
  <div class="progress-bar progress-bar-danger" style="width: 15%">
    <span class="sr-only">15% did not complete</span>
  </div>
</div>`}
          </code>
        </pre>

        <p>
          If we place multiple bars with the same .progress parent element,
          Bootstrap will pile them into one single progress bar. As we know, in
          bootstrap the sum of the progress bar is 100 %. So, the progress bar
          will give the result as full width and fully populated.
        </p>

        <h4 id="32-how-can-we-customize-links-of-pagination-in-bootstrap-">
          32. How can we customize links of pagination in Bootstrap?
        </h4>
        <p>
          We can customize the links by using .disabled for unclickable links
          and .active for indicating the current page.
        </p>
        <h4 id="33-explain-input-group-in-bootstrap-">
          33. Explain input group in Bootstrap?
        </h4>
        <p>
          Input group in bootstrap are put out from controls. By using an input
          group, we can easily add prepended and appended text or button to the
          text-based inputs. We can prepend and append elements to a
          .form-control by taking all the elements in a <code>div</code> under a
          class .input-group. After that, place your extra content inside a{" "}
          <code>span</code> in same <code>div</code> by using class
          .input-group-addon after this you can place the <code>span</code>{" "}
          element either before or after the input element.
        </p>

        <h4 id="34-write-the-ways-to-create-a-tabbed-navigation-menu-in-bootstrap-">
          34. Write the ways to create a tabbed navigation menu in Bootstrap?
        </h4>
        <p>
          We can create a tabbed navigation by making a basic unordered list
          with the base class of .nav and after this, we can add class
          .nav-tabs.
        </p>

        <h4 id="35-in-bootstrap-how-can-you-create-a-pills-navigation-menu-">
          35. In Bootstrap, how can you create a pills navigation menu?
        </h4>
        <p>
          Pills navigation menu in bootstrap is created by making an unordered
          list at first with the base class of .nav and after this add the class
          .nav-pills.
        </p>

        <h4 id="36-what-are-labels-in-bootstrap-">
          36. What are labels in Bootstrap?
        </h4>
        <p>
          Bootstrap labels are used for offering counts, tips or other things to
          provide markup on web pages. To use the label in Bootstrap we use the
          class .labels to indicate the labels.
        </p>

        <h4 id="37-what-are-badges-in-bootstrap-">
          37. What are badges in Bootstrap?
        </h4>
        <p>
          Badges are homogeneous to labels, the main difference between them is
          corners are more rounded. The main work of badges in the bootstrap is
          to highlight new or unread items. To use badges just add
          <code>span class=&quot;badge&quot;</code> to links and bootstrap navs.
        </p>

        <h4 id="38-how-can-we-make-image-responsive-in-bootstrap-">
          38. How can we make image responsive in Bootstrap?
        </h4>
        <p>
          After the updates in Bootstrap, currently the feature to make an image
          responsive has been added, we can do this by adding a class
          .img-responsive to the <code>img</code> tag. This class makes the
          width max-width =100%; and height=auto; to the image so that it
          matches nicely to the parent element.
        </p>

        <h4 id="39-what-do-you-mean-by-normalize-in-bootstrap-">
          39. What do you mean by normalize in Bootstrap?
        </h4>
        <p>
          Bootstrap normalize is a small CSS file which is used to make
          cross-browser consistency.
        </p>
        <h4 id="40-what-is-lead-body-copy-in-bootstrap-">
          40. What is lead body copy in Bootstrap?
        </h4>
        <p>
          It is used to add some ascent to the paragraph if we add
          class=&quot;lead&quot;. This will enlarge the font size and a taller
          line height.
        </p>

        <h4 id="41-what-are-panels-in-bootstrap-">
          41. What are panels in Bootstrap?
        </h4>
        <p>
          Panels are components that are used when you want to put your DOM
          component in a box. So, to retrieve a basic panel we just need to add
          class.panel to the <code>div</code> element. We can also add
          class.panel-default to this element.
        </p>

        <h4 id="42-how-will-you-create-a-bootstrap-panel-with-heading-">
          42. How will you create a Bootstrap panel with heading?
        </h4>
        <p>
          There are two ways by which we can add panel heading. First is, we can
          directly use .panel-heading class to add heading container in a panel
          and the second way is by using any heading tag like <code>h1</code> to{" "}
          <code>h6</code> with a .panel-title class to give more styles on the
          heading.
        </p>
        <h4 id="43-what-is-a-scrollspy-plugin-in-bootstrap-">
          43. What is a scrollspy plugin in Bootstrap?
        </h4>
        <p>
          It is an auto-updating nav plugin which allows in fetching section of
          the page based on the scroll position. This can be done by the .active
          class to the navbar based scroll position.
        </p>
        <h4 id="44-what-is-the-work-of-affix-plugin-in-bootstrap-">
          44. What is the work of affix plugin in Bootstrap?
        </h4>
        <p>
          This plugin allows a <code>div</code> to be attached to a location on
          the page. Use of the social icon in a page is an example for this in
          which we see that the icons will start in a location, but when the
          page hits on a certain mark it will block the <code>div</code> in
          place and will stop the scrolling for rest of the page.
        </p>
        <h4 id="45-what-is-grid-system-in-bootstrap-">
          45. What is grid system in Bootstrap?
        </h4>
        <p>
          By using the grid system, we can make up to 12 columns across a page.
          There are different classes which have been defined for this for the
          UI purpose.
        </p>
        <h4 id="46-what-are-grid-classes-in-the-bootstrap-">
          46. What are Grid classes in the Bootstrap?
        </h4>
        <p>There are four grid classes in Bootstrap. They are:</p>
        <ul>
          <li>xs (It is used for phone screens less than 786px wide).</li>
          <li>
            sm (It is used for the tablet screens which are greater than 786px
            wide).
          </li>
          <li>
            md (It is for small laptop screen of size equal to or greater than
            992px wide).
          </li>
          <li>
            LG ( It is for laptop and desktop screens which are equal to greater
            than 1200px wide).
          </li>
        </ul>

        <h4 id="47-what-are-global-styles-that-are-used-in-bootstrap-default-typography-">
          47. What are global styles that are used in Bootstrap Default
          Typography?
        </h4>
        <p>
          In Bootstrap the global default font-size is 14px and the line height
          is 1.428. The default font changes to Helvetica and Arial are with
          sans-serif fallback and all these styles are applicable for both body
          and all paragraphs.
        </p>

        <h4 id="48-what-will-be-the-output-of-the-below-code-">
          48. What will be the output of the below code?
        </h4>
        {/* <pre>
          <code class="lang-html">
            &lt;<span class="hljs-keyword">div</span>{" "}
            <span class="hljs-built_in">class</span>=
            <span class="hljs-string">"row"</span>&gt; &lt;
            <span class="hljs-keyword">div</span>{" "}
            <span class="hljs-built_in">class</span>=
            <span class="hljs-string">"col-xs-12 col-md-3"</span>&gt;.col-xs
            <span class="hljs-number">-12</span> .col-md
            <span class="hljs-number">-3</span>&lt;/
            <span class="hljs-keyword">div</span>&gt; &lt;/
            <span class="hljs-keyword">div</span>&gt;
          </code>
        </pre> */}
        <pre>
  <code className="lang-html">
    {`<div class="row">
  <div class="col-xs-12 col-md-3">.col-xs-12 .col-md-3</div>
</div>`}
  </code>
</pre>

        <p>
          The output of this will give the grids for extra small devices as we
          can see in the snippet col-xs-12 that has been used and it will also
          give the grids for desktop devices and above as the class col-md-3 has
          been used.
        </p>
        <h4 id="49-what-dependencies-does-bootstrap-require-to-work-properly-">
          49. What dependencies does Bootstrap require to work properly?
        </h4>
        <p>
          jQuery is the only dependency that bootstrap requires for working
          properly and this is only for JavaScript plugins in bootstrap.
        </p>
        <h4 id="50-what-the-below-code-will-do-">
          50. What the below code will do?
        </h4>
        <pre>
          <code class="lang-html">
            <span class="hljs-tag">
              &lt;<span class="hljs-name">a</span>{" "}
              <span class="hljs-attr">href</span>=
              <span class="hljs-string">"#"</span>&gt;
            </span>
            Home{" "}
            <span class="hljs-tag">
              &lt;<span class="hljs-name">span</span>{" "}
              <span class="hljs-attr">class</span>=
              <span class="hljs-string">"badge"</span>&gt;
            </span>
            36
            <span class="hljs-tag">
              &lt;/<span class="hljs-name">span</span>&gt;
            </span>
            <span class="hljs-tag">
              &lt;/<span class="hljs-name">a</span>&gt;
            </span>
          </code>
        </pre>
        <p>
          This code will produce a link with an inline badge which will give an
          important notification to the user like number received, message
          received or the number of requests etc.
        </p>
        <h4 id="51-what-is-a-transition-plugin-in-bootstrap-">
          51. What is a transition plugin in Bootstrap?
        </h4>
        <p>
          It provides simple transition effects like sliding or fading in
          modals.
        </p>
        <h4 id="52-explain-the-concept-of-creating-a-vertical-or-basic-form-in-bootstrap-">
          52. Explain the concept of creating a vertical or basic form in
          Bootstrap?
        </h4>
        <p>
          For this first we have to add a role form to the parent{" "}
          <code>form</code> element then we have to wrap labels and controls in
          a <code>div</code> with class.form-group and then we have to add a
          class of .form-control to all text url <code>input</code>,
          <code>textarea</code> and <code>select</code> elements.
        </p>
        <h4 id="53-explain-the-bootstrap-framework-structure-">
          53. Explain the Bootstrap framework structure?
        </h4>
        <p>
          Bootstrap is a responsive front-end mobile development framework.
          Sites can be effectively created with the grid system of the Bootstrap
          framework. its holds a highly responsive design and very much
          customizable, Mobile sites can be built on top of the Bootstrap
          framework using below programming entities,
        </p>
        <ul>
          <li>HTML5 markup</li>
          <li>CSS Styling</li>
          <li>Javascript</li>
          <li>Fonts</li>
        </ul>
        <p>
          Here on mobile measurements content can be divided into 12 columns,
          then it can further be reduced to 6,4,3, etc. Ease of style and making
          define the Bootstrap buttons with default classes available for images
          as well.
        </p>

        <h4 id="54-what-are-breadcrumbs-in-bootstrap-">
          54. What are Breadcrumbs in Bootstrap?
        </h4>
        <p>
          Breadcrumbs depict the navigational hierarchy of a site, separators in
          the hierarchy are automatically added by means of CSS. Bootstrap
          breadcrumb used for:
        </p>
        <ul>
          <li>Documentation page</li>
          <li>Magazine</li>
          <li>ERP system</li>
        </ul>
        <p>
          A breadcrumb in Bootstrap is simply an unordered list with a class of{" "}
          <code>.breadcrumb</code>.<br />
          <b>Example:</b>
        </p>
        {/* <pre><code class="lang-css">{{ '{.breadcrumb > li + li:before {
          color: #cccccc;
          content: "/ ";
          padding: 0 5px;
        }}' }}</code></pre> */}
        <pre>
  <code className="lang-css">
    {`{.breadcrumb > li + li:before {
                     color: #cccccc;
                     content: "/ ";
                     padding: 0 5px;
                  }}`}
  </code>
</pre>


        <h4 id="55-why-do-we-use-jumbotron-in-bootstrap-">
          55. Why do we use Jumbotron in Bootstrap?
        </h4>
        <p>
          Jumbotron is a user-attractive function of Bootstrap. it is a
          brilliant way to highlight the key contents of a page. the content
          could be a slogan or probably a headline or any other catchy element
          of the page. Jumbotron works by increasing the content of the landing
          page and also increasing the heading size of the content. In order to
          implement Jumbotron in a Bootstrap use:
        </p>
        <p>
          Create a container <code>div</code> with the class of .Jumbotron
        </p>
        <p>
          <b>Example:</b> The example shows wrapping up of heading contents
          inside a div class Jumbotron container.
        </p>
        {/* <pre>
          <code class="lang-html">
            <span class="hljs-tag">
              &lt;<span class="hljs-name">div</span>{" "}
              <span class="hljs-attr">class</span>=
              <span class="hljs-string">"jumbotron"</span>&gt;
            </span>
            <span class="hljs-tag">
              &lt;<span class="hljs-name">h1</span>&gt;
            </span>
            Learn to Create Websites
            <span class="hljs-tag">
              &lt;/<span class="hljs-name">h1</span>&gt;
            </span>
            <span class="hljs-tag">
              &lt;<span class="hljs-name">p</span>&gt;
            </span>
            In today's world internet is the most popular way…
            <span class="hljs-tag">
              &lt;/<span class="hljs-name">p</span>&gt;
            </span>
            <span class="hljs-tag">
              &lt;<span class="hljs-name">p</span>&gt;
            </span>
            <span class="hljs-tag">
              &lt;<span class="hljs-name">a</span>{" "}
              <span class="hljs-attr">href</span>=
              <span class="hljs-string">"#"</span>{" "}
              <span class="hljs-attr">class</span>=
              <span class="hljs-string">"btn btn-primary btn-lg"</span>&gt;
            </span>
            Learn more
            <span class="hljs-tag">
              &lt;/<span class="hljs-name">a</span>&gt;
            </span>
            <span class="hljs-tag">
              &lt;/<span class="hljs-name">p</span>&gt;
            </span>
            <span class="hljs-tag">
              &lt;/<span class="hljs-name">div</span>&gt;
            </span>
          </code>
        </pre> */}
        <pre>
  <code className="lang-html">
    {`<div class="jumbotron">
  <h1>Learn to Create Websites</h1>
  <p>In today's world internet is the most popular way…</p>
  <p><a href="#" class="btn btn-primary btn-lg">Learn more</a></p>
</div>`}
  </code>
</pre>


        <h4 id="56-explain-types-of-lists-supported-by-bootstrap-">
          56. Explain types of lists supported by Bootstrap?
        </h4>
        <p>
          Lists supported by Bootstrap are as following,
          <br />
          <b>Definition lists −</b> Evey list is by default introduced with a{" "}
          <code>dt</code> and <code>dd</code> tag element <code>dt</code> :
          definition term
          <code>dd</code> : corresponds to the definition of <code>dt</code>
          <br />
          <b>Ordered lists − </b>lies in a sequential order and prefixed by
          numerical values.
          <br />
          <b>Unordered lists − </b>styled traditionally, does not follow any
          specific order. bullets can be easily customized. class, list-inline
          can be used to hold all list items within a single line.
        </p>
        <h4 id="57-navigation-bar-in-bootstrap-">
          57. Navigation bar in Bootstrap?
        </h4>
        <p>
          This is the advanced Bootstrap Interview Questions which is asked in
          an interview. It resembles the navigation header in the top of the
          page, the navigation bar can be created with Nav tag. Navbars and
          their contents are fluid by default. The horizontal width can be
          scaled and controlled using Navigation containers. Navbars are
          concealed by default while printing.
        </p>
        <p>
          <b>Example:</b>
        </p>
        {/* <pre>
          <code class="lang-html">
            &lt;nav <span class="hljs-keyword">class</span>=
            <span class="hljs-string">
              "navbar navbar-expand-lg navbar-light bg-light"
            </span>
            &gt; &lt;div <span class="hljs-keyword">class</span>=
            <span class="hljs-string">"dropdown-menu"</span> aria-labelledby=
            <span class="hljs-string">"navbarDropdown"</span>&gt; &lt;a{" "}
            <span class="hljs-keyword">class</span>=
            <span class="hljs-string">"dropdown-item"</span> href=
            <span class="hljs-string">"#"</span>&gt;Action&lt;/a&gt; &lt;a{" "}
            <span class="hljs-keyword">class</span>=
            <span class="hljs-string">"dropdown-item"</span> href=
            <span class="hljs-string">"#"</span>&gt;Another action&lt;/a&gt;
            &lt;div <span class="hljs-keyword">class</span>=
            <span class="hljs-string">"dropdown-divider"</span>&gt;&lt;/div&gt;
            &lt;a <span class="hljs-keyword">class</span>=
            <span class="hljs-string">"dropdown-item"</span> href=
            <span class="hljs-string">"#"</span>&gt;Something{" "}
            <span class="hljs-keyword">else</span> here&lt;/a&gt; &lt;/div&gt;
            &lt;/nav&gt;
          </code>
        </pre> */}
        <pre>
  <code className="lang-html">
    {`<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</nav>`}
  </code>
</pre>

        <h4 id="58-would-you-tell-me-something-about-glyphicons-and-how-are-they-written-in-our-code-">
          58. Would you tell me something about Glyphicons and how are they
          written in our code?
        </h4>
        <p>
          Glyphicons are symbols or definitive icon fonts which provide easy
          orientation in your web projects. they are preferably addended in
          buttons, form inputs, toolbars and navigation components. Glyphicons
          Halflings are not free to use entities and requires licensing.
          Bootstrap includes more than 250 glyphs from the Glyphicons Halflings
          set.
        </p>
        <p>
          <b>Example:</b>
        </p>
        <pre>
          <code class="lang-html">
            &lt;p&gt;Search icon:{" "}
            <span class="xml">
              <span class="hljs-tag">
                &lt;<span class="hljs-name">span</span>{" "}
                <span class="hljs-attr">class</span>=
                <span class="hljs-string">"glyphicon glyphicon-search"</span>
                &gt;
              </span>
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">span</span>&gt;
              </span>
            </span>
            <span class="xml">
              <span class="hljs-tag">
                &lt;/<span class="hljs-name">p</span>&gt;
              </span>
            </span>
          </code>
        </pre>
        <h4 id="59-describe-a-bootstrap-panel-bootstrap-well-and-bootstrap-carousel-">
          59. Describe a Bootstrap panel Bootstrap well and Bootstrap carousel?
        </h4>
        <p>
          <strong>Bootstrap well:</strong> Adds a greyish rounded background
          around the content, it is a container class. The .well-sm class for
          small wells and .well-lg class for large wells allows alternate the
          size of the well. Default well size is normal.
        </p>
        <p>
          <b>Example:</b>
        </p>
        <pre>
          <code class="lang-html">
            &lt;<span class="hljs-keyword">div</span>{" "}
            <span class="hljs-built_in">class</span>=
            <span class="hljs-string">"well"</span>&gt;Basic Well&lt;/
            <span class="hljs-keyword">div</span>&gt;
          </code>
        </pre>
        <p>
          <strong>Bootstrap panel:</strong> There could be situations where some
          site contents need to be wrapped up in a box to enhance the visibility
          for the user. Bootstrap panels lock hands on these needs. They can be
          created with the .panel class and content inside the panel has a
          .panel-body class.
        </p>
        <p>
          <b>Example:</b>
        </p>
        {/* <pre>
          <code class="lang-html">
            &lt;<span class="hljs-keyword">div</span>{" "}
            <span class="hljs-built_in">class</span>=
            <span class="hljs-string">"panel panel-default"</span>&gt; &lt;
            <span class="hljs-keyword">div</span>{" "}
            <span class="hljs-built_in">class</span>=
            <span class="hljs-string">"panel-body"</span>&gt;Look, I'm{" "}
            <span class="hljs-keyword">in</span> a panel!&lt;/
            <span class="hljs-keyword">div</span>&gt; &lt;/
            <span class="hljs-keyword">div</span>&gt;
          </code>
        </pre> */}
        <pre>
  <code className="lang-html">
    {`<div class="panel panel-default">
  <div class="panel-body">Look, I'm in a panel!</div>
</div>`}
  </code>
</pre>

        <p>
          <strong>Bootstrap carousel:</strong> Adds a slider through which
          images, videos, and contents can be populated and sided for the users.
          It is a flexible, handy and responsive way to add a carousel to our
          site. Carousel plug-in is a component which is used for the same.
        </p>
        <h4 id="60-alternatives-to-bootstrap-">
          60. Alternatives to Bootstrap ?
        </h4>
        <ol>
          <li>
            <strong>Foundation</strong> - A responsive front-end framework with
            a modular structure and customizable components.
          </li>
          <li>
            <strong>Bulma</strong> - A modern CSS framework based on Flexbox,
            offering a clean design and easy-to-use classes.
          </li>
          <li>
            <strong>Materialize</strong> - A CSS framework based on Google&#39;s
            Material Design, providing a responsive grid system and pre-styled
            components.
          </li>
          <li>
            <strong>Material Design Lite</strong> - A lightweight version of
            Material Design that allows you to use Material Design components
            without the need for JavaScript.
          </li>
          <li>
            <strong>Skeleton</strong> - A simple and lightweight CSS framework
            focused on mobile-first responsive design.
          </li>
          <li>
            <strong>Pure CSS</strong> - A minimal CSS framework developed by
            Yahoo, emphasizing simplicity and modularity.
          </li>
          <li>
            <strong>Semantic UI</strong> - A framework that uses human-friendly
            HTML and offers a variety of UI components that are easy to use and
            customize.
          </li>
          <li>
            <strong>UIKit</strong> - A lightweight and modular front-end
            framework for developing fast and powerful web interfaces.
          </li>
        </ol>
      </div>
    </div>
  );
};
