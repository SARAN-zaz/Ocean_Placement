import "./Django.css";
import "../globalStyle.css";
import images from "../../../assets/Django/index";

export const Django = () => {
  return (
    <div class="main-container-interview-questions">
      <div>
        <p class="main-heading-q-a">
          Bootstrap Interview Questions and Answers
        </p>
        <div class="main-heading-interview-questions-answers">
          <img class="img-class-language-logo" src={images.Django} />
          <p>
            Django is a high-level, open-source web framework written in Python
            and designed to accelerate the process of developing web
            applications. Built with the philosophy of "Don't Repeat Yourself"
            (DRY), it emphasizes code reusability and modular design, enabling
            developers to create maintainable and efficient codebases. Django
            offers a range of built-in features, such as an Object-Relational
            Mapping (ORM) system, which bridges Python code and databases
            seamlessly, making complex database operations straightforward. One
            of Django's standout components is its built-in admin interface,
            which automatically generates a backend interface for managing app
            data without writing additional code. This feature is customizable
            and can be tailored to fit specific needs, significantly speeding up
            the development process. Additionally, Django's templating engine
            allows developers to dynamically render HTML with data, promoting
            the development of clean, organized views. Django also prioritizes
            security, providing default protections against common
            vulnerabilities like SQL injection, cross-site scripting (XSS),
            cross-site request forgery (CSRF), and clickjacking. The framework’s
            comprehensive authentication system includes tools for user
            management, permissions, and secure password handling, which
            streamlines the development of user-centric applications. Designed
            for scalability, Django powers both small projects and large-scale,
            high-traffic platforms, ensuring performance stability and
            flexibility. Its modular structure allows developers to add or
            modify components as needed, making it suitable for projects of
            varying complexity. Overall, Django’s extensive documentation,
            active community, and rich ecosystem of third-party packages make it
            an excellent choice for developers aiming for rapid, secure, and
            efficient web development.
          </p>
        </div>
      </div>
      <div className="question-answer">
        <h4 id="1-what-is-django-">
          1. <strong>What is Django?</strong>
        </h4>
        <p>
          Django is a high-level Python web framework that encourages rapid
          development and clean, pragmatic design. It’s designed to help
          developers build scalable, secure, and maintainable web applications.
        </p>

        <h4 id="2-how-do-you-create-a-new-django-project-">
          2. <strong>How do you create a new Django project?</strong>
        </h4>
        <p>
          Use the command <code>django-admin startproject projectname</code> to
          create a new Django project.
        </p>

        <h4 id="3-how-do-you-create-a-new-django-app-">
          3. <strong>How do you create a new Django app?</strong>
        </h4>
        <p>
          Use the command <code>python manage.py startapp appname</code> to
          create a new app within your Django project.
        </p>

        <h4 id="4-what-is-an-app-in-django-">
          4. <strong>What is an app in Django?</strong>
        </h4>
        <p>
          An app in Django is a web application that does something, such as a
          blog system, user authentication, or polls. Apps are modules that can
          be reused across different Django projects.
        </p>

        <h4 id="5-what-is-the-purpose-of-settings-py-in-django-">
          5.{" "}
          <strong>
            What is the purpose of
            <code>settings.py</code> in Django?
          </strong>
        </h4>
        <p>
          <code>settings.py</code> contains all the configuration settings for a
          Django project, including database connections, allowed hosts,
          installed apps, and middleware.
        </p>

        <h4 id="6-what-are-migrations-in-django-">
          6. <strong>What are migrations in Django?</strong>
        </h4>
        <p>
          Migrations are Django’s way of propagating changes to models (such as
          adding a field or deleting a model) into the database schema.
        </p>

        <h4 id="7-how-do-you-create-and-apply-migrations-in-django-">
          7. <strong>How do you create and apply migrations in Django?</strong>
        </h4>
        <p>
          Use <code>python manage.py makemigrations</code> to create migrations
          and
          <code>python manage.py migrate</code> to apply them to the database.
        </p>

        <h4 id="8-what-is-a-model-in-django-">
          8. <strong>What is a model in Django?</strong>
        </h4>
        <p>
          A model in Django is a Python class that defines the structure of the
          database, including fields and behaviors.
        </p>

        <h4 id="9-what-is-the-orm-in-django-">
          9. <strong>What is the ORM in Django?</strong>
        </h4>
        <p>
          ORM (Object-Relational Mapping) allows Django to interact with the
          database by using Python code instead of SQL queries.
        </p>

        <h4 id="10-how-do-you-define-a-model-field-in-django-">
          10. <strong>How do you define a model field in Django?</strong>
        </h4>
        <p>
          In a Django model, fields are defined as class attributes using field
          classes, like <code>CharField</code>,<code>IntegerField</code>,{" "}
          <code>DateField</code>, etc.
        </p>

        <h4 id="11-what-are-views-in-django-">
          11. <strong>What are views in Django?</strong>
        </h4>
        <p>
          Views are Python functions or classes in Django that take web requests
          and return web responses.
        </p>

        <h4 id="12-what-is-the-difference-between-function-based-views-and-class-based-views-">
          12.{" "}
          <strong>
            What is the difference between function-based views and class-based
            views?
          </strong>
        </h4>
        <p>
          Function-based views (FBVs) use Python functions, while class-based
          views (CBVs) use classes, offering more modularity and flexibility
          with built-in methods like <code>get</code>, <code>post</code>, etc.
        </p>

        <h4 id="13-how-do-you-define-a-url-pattern-in-django-">
          13. <strong>How do you define a URL pattern in Django?</strong>
        </h4>
        <p>
          URL patterns are defined in the <code>urls.py</code> file using the{" "}
          <code>path()</code> or
          <code>re_path()</code> functions, mapping URLs to views.
        </p>

        <h4 id="14-what-is-a-template-in-django-">
          14. <strong>What is a template in Django?</strong>
        </h4>
        <p>
          A template is an HTML file with placeholders for dynamic content, used
          to render the final HTML page.
        </p>

        <h4 id="15-how-do-you-render-a-template-in-django-">
          15. <strong>How do you render a template in Django?</strong>
        </h4>
        <p>
          Use <code>render(request, &#39;template.html&#39;, context)</code> to
          render a template with context data.
        </p>

        <h4 id="16-what-is-context-in-django-templates-">
          16. <strong>What is context in Django templates?</strong>
        </h4>
        <p>
          Context is a dictionary of variables passed to the template to be
          rendered dynamically in HTML.
        </p>
        <h4 id="16-what-is-context-in-django-templates-">
          16. <strong>What is context in Django templates?</strong>
        </h4>
        <p>
          Context is a dictionary of variables passed to the template to be
          rendered dynamically in HTML.
        </p>
        <h4 id="17-how-do-you-include-a-template-in-another-template-in-django-">
          <strong>
            17. How do you include a template in another template in Django?
          </strong>
        </h4>
        <p>Use below code to include a template within another template.</p>
        <pre class="sql-code">
          <code>{'{% include "template_name.html" %}'}</code>
        </pre>

        <h4 id="18-what-is-the-purpose-of-urls-py-">
          18.{" "}
          <strong>
            What is the purpose of <code>urls.py</code>?
          </strong>
        </h4>
        <p>
          <code>urls.py</code> is used to define URL patterns for routing HTTP
          requests to appropriate views in a Django app.
        </p>
        <h4 id="19-how-does-django-handle-form-validation-">
          19. <strong>How does Django handle form validation?</strong>
        </h4>
        <p>
          Django validates forms automatically with methods like{" "}
          <code>is_valid()</code> and custom field validations through{" "}
          <code>clean()</code> methods.
        </p>
        <h4 id="20-how-do-you-handle-file-uploads-in-django-">
          20. <strong>How do you handle file uploads in Django?</strong>
        </h4>
        <p>
          Add a <code>FileField</code> or <code>ImageField</code> to the model,
          configure media settings in
          <code>settings.py</code>, and use <code>request.FILES</code> to handle
          the uploaded files.
        </p>
        <h4 id="21-how-do-you-create-a-custom-user-model-in-django-">
          21. <strong>How do you create a custom user model in Django?</strong>
        </h4>
        <p>
          Extend <code>AbstractUser</code> or <code>AbstractBaseUser</code> in
          your custom user model and specify it in
          <code>settings.py</code> with <code>AUTH_USER_MODEL</code>.
        </p>

        <h4 id="23-what-is-middleware-in-django-">
          23. <strong>What is middleware in Django?</strong>
        </h4>
        <p>
          Middleware is a framework of hooks that processes requests and
          responses globally before reaching the view or after leaving the view.
        </p>
        <h4 id="24-how-do-you-set-up-a-static-files-directory-in-django-">
          24.{" "}
          <strong>How do you set up a static files directory in Django?</strong>
        </h4>
        <p>
          Define <code>STATIC_URL</code> and <code>STATICFILES_DIRS</code> in{" "}
          <code>settings.py</code> to serve static files like CSS, JS, and
          images.
        </p>
        <h4 id="25-what-is-the-purpose-of-the-manage-py-file-in-django-">
          25.{" "}
          <strong>
            What is the purpose of the
            <code>manage.py</code> file in Django?
          </strong>
        </h4>
        <p>
          <code>manage.py</code> is a command-line utility that lets you
          interact with your Django project, such as running a server, applying
          migrations, and managing apps.
        </p>
        <h4 id="26-what-is-django-s-admin-interface-">
          26. <strong>What is Django’s admin interface?</strong>
        </h4>
        <p>
          Django’s admin interface provides a built-in, customizable web-based
          interface to manage data.
        </p>
        <h4 id="27-how-do-you-register-a-model-in-django-admin-">
          27. <strong>How do you register a model in Django admin?</strong>
        </h4>
        <p>
          Use <code>admin.site.register(ModelName)</code> in{" "}
          <code>admin.py</code> to make a model visible in the Django admin
          interface.
        </p>
        <h4 id="28-what-is-the-purpose-of-__str__-in-django-models-">
          28.{" "}
          <strong>
            What is the purpose of
            <code>__str__()</code> in Django models?
          </strong>
        </h4>
        <p>
          <code>__str__()</code> defines the human-readable string
          representation of the model instance in Django admin and query
          results.
        </p>
        <h4 id="29-what-is-the-get_absolute_url-method-in-django-models-">
          29.{" "}
          <strong>
            What is the
            <code>get_absolute_url()</code> method in Django models?
          </strong>
        </h4>
        <p>
          <code>get_absolute_url()</code> returns the canonical URL for a model
          instance, often used in templates to link to an object’s detail view.
        </p>
        <h4 id="30-how-do-you-handle-user-authentication-in-django-">
          30. <strong>How do you handle user authentication in Django?</strong>
        </h4>
        <p>
          Django provides a built-in <code>auth</code> app that includes models,
          views, and forms for handling user authentication, such as login and
          logout.
        </p>
        <h4 id="31-how-do-you-use-django-s-built-in-login-view-">
          31. <strong>How do you use Django’s built-in login view?</strong>
        </h4>
        <p>
          Use Django’s <code>LoginView</code> class and configure it in{" "}
          <code>urls.py</code> with the
          <code>
            path(&#39;login/&#39;, LoginView.as_view(), name=&#39;login&#39;)
          </code>
          .
        </p>
        <h4 id="32-what-are-foreignkey-manytomanyfield-and-onetoonefield-in-django-models-">
          32.{" "}
          <strong>
            What are
            <code>ForeignKey</code>, <code>ManyToManyField</code>, and{" "}
            <code>OneToOneField</code> in Django models?
          </strong>
        </h4>
        <p>
          These are relational fields in Django models: <code>ForeignKey</code>{" "}
          defines a many-to-one relationship,
          <code>ManyToManyField</code> defines a many-to-many relationship, and{" "}
          <code>OneToOneField</code> defines a one-to-one relationship.
        </p>
        <h4 id="33-how-do-you-perform-a-database-query-in-django-">
          33. <strong>How do you perform a database query in Django?</strong>
        </h4>
        <p>
          Use Django’s ORM methods, like <code>objects.all()</code>,{" "}
          <code>objects.filter()</code>, and
          <code>objects.get()</code> to perform database queries.
        </p>
        <h4 id="34-what-is-a-queryset-in-django-">
          34. <strong>What is a queryset in Django?</strong>
        </h4>
        <p>
          A queryset is a collection of database queries representing a subset
          of data, which can be filtered and manipulated further.
        </p>
        <h4 id="35-how-do-you-paginate-query-results-in-django-">
          35. <strong>How do you paginate query results in Django?</strong>
        </h4>
        <p>
          Use Django’s <code>Paginator</code> class to divide large querysets
          into pages and handle navigation.
        </p>
        <h4 id="36-what-is-django-rest-framework-drf-">
          36. <strong>What is Django REST Framework (DRF)?</strong>
        </h4>
        <p>
          DRF is a powerful toolkit for building Web APIs in Django, with
          features for serialization, authentication, permissions, and viewsets.
        </p>
        <h4 id="37-how-do-you-create-a-serializer-in-django-rest-framework-">
          37.{" "}
          <strong>
            How do you create a serializer in Django REST Framework?
          </strong>
        </h4>
        <p>
          Define a serializer by creating a class that inherits from{" "}
          <code>serializers.ModelSerializer</code> or
          <code>serializers.Serializer</code> and specify the fields to
          serialize.
        </p>
        <h4 id="38-what-is-a-viewset-in-django-rest-framework-">
          38. <strong>What is a viewset in Django REST Framework?</strong>
        </h4>
        <p>
          A viewset is a class that combines logic for handling multiple HTTP
          methods in a single class, simplifying API development.
        </p>
        <h4 id="39-how-do-you-create-a-django-rest-api-endpoint-">
          39. <strong>How do you create a Django REST API endpoint?</strong>
        </h4>
        <p>
          Define a view or viewset and map it to a URL in <code>urls.py</code>{" "}
          to create an API endpoint.
        </p>
        <h4 id="40-what-are-django-permissions-">
          40. <strong>What are Django permissions?</strong>
        </h4>
        <p>
          Permissions control user access to resources and views. Django has
          built-in permissions like
          <code>IsAuthenticated</code>, <code>IsAdminUser</code>, and custom
          permissions.
        </p>
        <h4 id="41-how-do-you-set-up-django-s-caching-framework-">
          41. <strong>How do you set up Django’s caching framework?</strong>
        </h4>
        <p>
          Configure caching in <code>settings.py</code> by choosing a cache
          backend, like <code>memcached</code>,<code>redis</code>, or{" "}
          <code>file-based</code>, and set up cache middleware if needed.
        </p>
        <h4 id="42-what-is-django-s-selectrelated-and-prefetchrelated-">
          42.{" "}
          <strong>
            What is Django’s
            <code>SelectRelated</code> and <code>PrefetchRelated</code>?
          </strong>
        </h4>
        <p>
          <code>select_related</code> and <code>prefetch_related</code> optimize
          queries by reducing database hits on foreign key and many-to-many
          fields.
        </p>
        <h4 id="43-how-do-you-secure-a-django-project-">
          43. <strong>How do you secure a Django project?</strong>
        </h4>
        <p>
          Configure security settings like <code>ALLOWED_HOSTS</code>,{" "}
          <code>CSRF</code>,<code>X-Content-Type-Options</code>,{" "}
          <code>HSTS</code>, and use Django’s built-in <code>auth</code> system
          for user security.
        </p>
        <h4 id="44-how-do-you-create-custom-middleware-in-django-">
          44. <strong>How do you create custom middleware in Django?</strong>
        </h4>
        <p>
          Create a class that inherits from <code>MiddlewareMixin</code>,
          implement <code>process_request</code> or
          <code>process_response</code> methods, and add it to{" "}
          <code>MIDDLEWARE</code> in <code>settings.py</code>.
        </p>
        <h4 id="45-what-is-the-difference-between-null-true-and-blank-true-in-django-models-">
          45.{" "}
          <strong>
            What is the difference between <code>null=True</code> and{" "}
            <code>blank=True</code> in Django models?
          </strong>
        </h4>
        <p>
          <code>null=True</code> allows database columns to store{" "}
          <code>NULL</code> values, while
          <code>blank=True</code> allows the field to be empty in forms.
        </p>
        <h4 id="46-how-do-you-run-tests-in-django-">
          46. <strong>How do you run tests in Django?</strong>
        </h4>
        <p>
          Use <code>python manage.py test</code> to run tests defined in{" "}
          <code>tests.py</code> files across Django apps.
        </p>
        <h4 id="47-how-do-you-use-django-s-jsonresponse-">
          47.{" "}
          <strong>
            How do you use Django’s
            <code>JsonResponse</code>?
          </strong>
        </h4>
        <p>
          Use <code>JsonResponse(data)</code> to return JSON-encoded data as an
          HTTP response in a view.
        </p>
        <h4 id="48-what-is-django-s-session-framework-">
          48.{" "}
          <strong>
            What is Django’s <code>session</code>
            framework?
          </strong>
        </h4>
        <p>
          Django’s session framework allows you to store and retrieve data on a
          per-site-visitor basis using cookies or database storage.
        </p>
        <h4 id="49-how-do-you-implement-custom-error-pages-in-django-">
          49.{" "}
          <strong>How do you implement custom error pages in Django?</strong>
        </h4>
        <p>
          Define custom views for error codes like <code>404</code>,{" "}
          <code>403</code>, and <code>500</code> in
          <code>views.py</code>, and configure them in <code>urls.py</code>.
        </p>
        <h4 id="50-how-do-you-deploy-a-django-project-">
          50. <strong>How do you deploy a Django project?</strong>
        </h4>
        <p>
          To deploy a Django project, configure a production web server (like
          Apache, Nginx, or Gunicorn), set
          <code>DEBUG = False</code>, configure allowed hosts, and ensure static
          files are collected.
        </p>
      </div>
    </div>
  );
};
