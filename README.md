## Angular Intro, Controllers, and Directives

- Describe the benefits of using a front end framework
- Differentiate between other frontend frameworks
- Differentiate between directives, modules, and controllers in Angular
- Render and bind controller data in the view.
- Explain what an Angular directive is and how we use them
- Use `ng-repeat` to iterate over data.
- Use `ng-hide`/`ng-show` to hide and show elements.
- Use `ng-model` to bind user input to model data
- Use `ng-click` to respond to user events

## Framing

Today we are transitioning into a new unit, as we begin to focus on building out bigger and bigger applications. As our applications grows in size and complexity, it can become increasingly difficult to manage all of our data, rendering logic, and view code from a code maintainability perspective without some sort of structure or guidelines. Luckily, the field of web development is evolving to rapidly produce solutions to this problem, and today we will look at one particular solution - Angular.js

## Intro - What is AngularJS and Why Should You Learn it? (20 mins)


Angular is an open source JS framework maintained by Google. It was created nearly 6 years ago, and its longevity is a testament to its capability and usefulness.  AngularJS is one of the most widely adopted MVC JS frameworks in use today and is a valuable job skill to put on your resume. Further, it was built upon jqLite, so it goes hand-in-hand with jQuery!

AngularJS provides the following benefits when used to develop web apps:

- Enables us to organize and structure Single Page Apps using the popular MVC design pattern
- Makes us more productive when developing web apps because it provides features, such as data binding, that requires less code from the developer
- Was designed with testing in mind

## The Components of AngularJS

![angular_components](https://cloud.githubusercontent.com/assets/25366/8970275/a1ab2ee2-35fd-11e5-8b23-65f4159ff7d6.jpg)

#### Modules

Modules are containers for related code.  The concept of *modules* is prevalent throughout programming, and here, we can consider it essentially a container for our app.

This is essentially Object Oriented Programming. The functionality of the MVC pattern has been divided out in a module with the following:

#### Config & Routes

Each AngularJS module has a *config* method that allows us to provide code that runs when a module is loaded.  The *config* method is used most commonly to setup routing.

#### Controller

Controllers in AngularJS serve two primary purposes:

- Initialize the data used for the view they are attached to
- Contain the primary code to respond to user events, such as when a user clicks on a button or AJAX calls

A controller is a JS constructor function that is instantiated by the _ng-controller_ directive.

#### Services & Factories

Services provide a way to organize related code and data that can be shared by controllers and even other services. Unlike controllers, which are instantiated and destroyed as the views they are attached to come into and out of view, services are created once (singletons) and persist for the life of the application.

Services should be used to hold the bulk of your application's logic and data, thus keeping controllers focused on what they are responsible for. Often, you can consider a service or factory something like a model or Ruby class.

#### Directives

Directives are "markers" in HTML - most commonly as attributes and custom element tags. When processed by AngularJS's HTML compiler, they attach behavior to DOM elements or even transform them and/or their children.


#### Filters

Filters are used to transform data. They are very flexible and can be used for formatting text in a view, such as making it all uppercase, or used to filter and sort an array of items.


#### The AngularJS Mindset

Programming a web app with AngularJS requires a different mindset. To use AngularJS effectively, it helps to think of your application being driven by data (and AJAX calls) - you change data and the app responds. We naturally think more procedurally when coding, we attach an event handler and write code to respond.

Let's look at an example of the different approaches.  Say we want an edit form to show when a button is clicked:

- Procedurally, we would attach an event handler to the button.  The handler code would select the element and set its display property to something besides "none".
- Using AngularJS, we declare a click handler on the Button element.  The handler could set a variable named editMode equal to true, and the view would respond automatically.
- Remember, drive your application using data - your data model is the single source of truth!

### SPA Architecture

Single Page Applications (SPA) are all the rage today. A misconception is that a SPA has only a single view - this is far from the truth!  The single page aspect of a SPA refers to a single page coming from the server, such as our _index.html_ page.  Once loaded, the SPA changes views by using _client-side_ routing, which loads partial HTML snippets called templates.

![spa_architecture](https://cloud.githubusercontent.com/assets/25366/8970635/896c4cce-35ff-11e5-96b2-ef7e62784764.png)

Client-side routing requires something known as a _router_.  A router in AngularJS, at a minimum, is used to define our routes, specify the template for that route, and specify which controller to attach to that view. You'll get to see routers in action in a later lesson.

## Other Frontend Frameworks

Angular is not the only Frontend JavaScript Framework.

Ember.JS, BackBone.JS, Meteor.JS, and React.JS are just to name a few.

One reason for Angulars use over these other frameworks is size. With full MVC capabilities, Angular is compact. Meaning it is going to load faster in the Browser than other frameworks.

We will be learning React.JS as well, but one thing to note about React is that it is only the 'VIEW' portion of the MVC pattern, so it is not a full frontend framework. React does not do AJAX calls, Routing, Filters, Services, etc. Think of it as just the Directive part of Angular.

<details>
<summary>**Q**: What is a Front End Framework?</summary>

- a library that attempts to move some or all application logic to the browser, while providing a simple interface for keeping the front-end in sync with the back-end
- applications can run completely in the browser, minimizing server load since the server is only accessed when the front end needs to synchronize data with the backend
- server sends over the app in the initial request (HTML/CSS/JS) then JS makes all subsequent requests with AJAX
- provides more fluid user experience
- loads everything from the database on page load (data and templates) then renders/updates the page content based on user interaction.

</details>

<details>
<summary>**Q**: What is Angular?</summary>

- its a structural front end framework for dynamic web apps
- uses `HTML` as your template language and lets you extend `HTML`'s syntax to express your application's functionality
- allows you to utilize `HTML` attributes to add behavior through JS. (directives)
- utilizes two-way data binding so that changes are reflected in various areas and persisted immediately without page refresh
- Angular is different and blurs a lot of the lines of traditional front-end dev
  - there'll be a lot of logic in the `DOM`
</details>

## I Do: Building a Angular App

Angular excels at providing a powerful framework to build apps that **dynamically render data** in the browser. In order to get oriented to some of the new conventions and features of working with Angular, we are going to build a simple todo application.

### Setup

To start working with Angular, all we need is an `html` file, a `js` file, and a link to the Angular CDN.

Let's hop into our terminal and create those files…

```bash
$ mkdir angularTodos
$ cd angularTodos
$ touch index.html todos.module.js
```

Great, now let's fill our `index.html` with some boilerplate and the necessary script tags.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>Angular Todos</title>

 <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
 <script src="todos.module.js"></script>
</head>
<body>

</body>
</html>
```

> **Note**: make sure to link to the Angular CDN **before** your custom JS file

### Bootstrapping Angular

Building an Angular app is a lot like playing with Legos, in that we will mostly just be putting together a bunch of special pieces to construct a complex structure.

Since we already have loaded Angular into our app, we now have access to the global `angular` object, which we will use to define our app's [module](https://docs.angularjs.org/api/ng/function/angular.module),.

```js
// todos.module.js
(function(){
  angular.module("todoApp", []);
})();

```

> **Note**: here we are defining a new [module](https://docs.angularjs.org/api/ng/function/angular.module), `angular.module`, with **two** arguments. The first argument is the **name** of the Angular module. The second argument is an **array of dependencies**, or other modules on which the current module will depend.

Now that we have our app's module defined, we need to tell Angular to actually use it. To do this, we will need to use one of Angular's many built in directives.

## [Directives](https://docs.angularjs.org/guide/directive)

Directives are markers on a DOM element (tags and attributes) that tell AngularJS's HTML compiler to attach a specified behavior to that DOM element.

Directives are Angular's way of letting you add behavior to elements and attributes. DOM elements already have behavior we would want for displaying and linking documents, the original utility of the web. Angular directives add behaviors we would want for building applications.

### [`ng-app`](https://docs.angularjs.org/api/ng/directive/ngApp).
Let's add our very first directive. In the `index.html`:

```html
<html lang='en' ng-app='todoApp'>
```

> `ng-app` designates the entry point of our application and is usually place near the root element of the page (i.e. the `<html>` or `<body>` tags). The argument to `ngApp` should correspond with the **name** of your app module. In this case, we're adding it to the `<html>`. The domain of the directive begins and ends with the opening and closing tags of the html element on which the directive is defined.

In essence, linking `ng-app` with our module tell Angular that this `html` file is now an Angular app, and anything inside those tags can use Angular's features / syntax.

## [Angular Expressions](https://docs.angularjs.org/guide/expression)

Now that we have successfully bootstrapped our Angular app, let's begin to focus on displaying our todos in the browser.

In order to display dynamic data, Angular uses its own templating syntax that we can use in our `html` files, much like how we used `erb` files in Ruby.

In Angular, any Javascript that we want to execute and print to the screen can be placed in an **expression**. Expressions are denoted with double curly brackets `{{ }}`, and will evaluate anything placed between.

For example, adding `{{5 + 5}} ` to the `body` of our `index.html` file, would print `10` to the screen.

## You Do: Setup Toto Application (5 mins)

To start:
- Create a directory called `angularTodos`
- Inside that directory, create two files - a `html` file, and a `js` file
- Add some boilerplate `html` and make sure to link to your `js` file and the **Angular CDN**
- Define your application's initial module and use a directive to bootstrap your Angular application
- Use Angular Expressions to get the product of `5 x 5` to display in the browser

## [Angular Controllers](https://docs.angularjs.org/guide/controller) (10/80)

Great, so we now have a way to write javascript in our `html`, now we just have to figure out how to render those todos we defined earlier!

In order to pass data into the view, in Angular we need a **controller**. Controllers are the go-between for views (our HTML) and our data.

Let's add a new controller definition to `todos-controller.js`:

```bash
$ mkdir controllers
$ touch controllers/todos.controller.js
```

```js
// todos.controller.js
(function(){
  angular
  .module("todoApp")
  .controller("todosCtrl", todoController)

  function todoController () {
    
  }
})();
```

Next we need to include our controller file in our `index.html` head below to intialize module:

```html
<!-- index.html -->
<head>
 <meta charset="UTF-8">
 <title>Angular Todos</title>

 <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
 <script src="todos.module.js"></script>
 <script src="/controllers/todos.controller.js"></script>
</head>
```

> Here we've instantiated a new controller for our app. This is where all the logic and CRUD functionality will be contained.

> **Note** In our controller definition, the first argument is the **name** of the controller. The second argument is the **function** for the controller that encloses all the functionality of the controller. Below it, we then define that function as hoisted function.

### The Data

Let's represent some important goals from WDI as todos in our application.

```js
// todos-controller.js
function todoController () {
  this.todos = [
    { name: 'Build an app with Rails', completed: true },
    { name: 'Project 2', completed: true },
    { name: 'Build an app with Angular', completed: false },
    { name: 'Project 3', completed: false },
    { name: 'Build an app with Express', completed: false },
    { name: 'Build an app with Mongo', completed: false },
    { name: 'Build an app with React', completed: false },
    { name: 'Project 4', completed: false },
    { name: 'Become a Rockstar', completed: true }
  ];
}
```

> For now, we'll just keep it simple as we'll store our data as an array of hard-coded JS objects - with each `todo` having a `name` and `completed` property.

Great, now that we have some data to play with, let's begin to work on rendering it meaningfully in the browser.

 As in Rails, the controller is an interface between our data and our view. Just like how in Rails, to make data show up in a view, we'd make it an instance variable, as in `@variable = "Some data"`. To do the same in Angular, we attach it to `this`, as in `this.variable = "Some data"`. Here we are attaching all of our hard-coded todo objects as a property on our controller called `todos`

### Initializing the View Model

Now that we have defined our controller, we need to actually tell Angular where we want to use it.
We can invoke our controller by using another Angular directive, `ng-controller`.

In `index.html`, let's add this directive to our `body` element:

```html
<body ng-controller='todosCtrl as vm'>

</body>
```

> We used the [`ng-controller` directive](https://docs.angularjs.org/api/ng/directive/ngController) here in order to instantiate our controller in the DOM. In the same way that `ng-app` established the domain of the js functionality in the html element, the `ng-controller` establishes the domain in this div.

> `vm` is an instance of our controller. `ng-controller` gives the whole div access to all the values and methods defined in that controller. This instance of a controller is called a "ViewModel".

The `todosCtrl as vm` syntax is important here. In essence, we are creating a new instance of our controller that we defined earlier, and are saving it to a variable we are calling `vm`. This is significant because now, any property that we defined in our controller, is available in the view as a property on our instance.

Therefore, we now have all the pieces necessary to print a todo to the page...

Let's add some code inside the `body` to display a single todo:

```html
<body ng-controller='todosCtrl as vm'>
  <p>First todo: {{vm.todos[0]}}</p>
</body>
```

Now, when we open our `index.html` file in the browser, we can see our data rendered in the browser!

## `ng-repeat`

Where we left off, we could only render one todo at a time. We could continue this pattern and hard code each todo out, but as you might have guessed, there is a better way that will allow us to iterate over every todo in our data to generate duplicative UI.

This is a great opportunity to take advantage of Angular's `ng-repeat` directive...

In `index.html`:

```html
<body ng-controller='todosCtrl as vm'>
  <h2>Todos</h2>
  <div ng-repeat="todo in vm.todos">
    <p>{{$index + 1}}. {{todo.name}} - {{todo.completed}}</p>
  </div>
</body>
```

> All we've done here, is print each todo with it corresponding index value + 1. It is important to note that `$index` is the index value for each iteration of the `ng-repeat`

Now, when we refresh in the browser we see each of our todos with their respective data and markup displaying.

## `ng-repeat` - You Do - Todos (10 mins)

- Define a new controller attached to your app's module
- Attach a property to your controller called `todos` which is equal to all of your hard-coded data
- In the view, initialize an instance of your controller as the view model
- Use a directive to display all of the information for each `todo`

---
## Break (10 mins)
---

## User Input and Data Binding

Up until this point we have focused on displaying data, or the R of CRUD for a todo. Let's continue to dive deeper into Angular, by looking at how to respond to user events and capture user input, two fundamentals for front-end web development.

Let's continue building out our app's functionality, by adding the ability to add a new todo.

First we need to add some UI to allow a user to enter a new todo.

For now, a simple input and button will do...

In `index.html`:

```html
<body ng-controller='todosCtrl as vm'>
  <h2>Todos</h2>
  <div ng-repeat="todo in vm.todos | filter: {completed: false}">
    <p>{{$index + 1}}. {{todo.name}} - {{todo.completed}}</p>
  </div>
  <div>
    <input type="text">
    <button>Add Todo</button>
  </div>
</body>
```

Ok, now that we have that piece of UI, let's focus on just wiring up some JS to run whenever that button is clicked.

### [`ng-click`](https://docs.angularjs.org/api/ng/directive/ngClick)

If we want to hook into Angular's custom event system, we need to utilize its built-in directives.

In this case, we can add a `ng-click` directive to an element so that whenever its clicked, we can fire a specified function defined in our controller.

Let's add that `ng-click` to our button so that it will fire a method `addTodo()` that we will define later on in the controller...

In `index.html`:

```html
<div>
  <input type="text">
  <button ng-click="vm.addTodo()">Add Todo</button>
</div>
```

> **Note**:  The value of what's passed to `ng-click` is a method on `vm`, and the method is invoked!

Now, in the controller we can go write the function definition for the `addTodo()` method we just referenced.

To start off and make sure that everything is wired up correctly, let's just log something to console to test that its working...

In `app.js`:

```js
function todoController () {
  this.todos = todoData
  this.addTodo = function() {
    console.log("clicked!")
  }
}
```
> Here we can just define a method on our controller, which will be the same function called whenever a user clicks the button.

When we refresh the page in the browser, we should be able to click and see the message logged to the console.

Next up, let's focus on capturing whatever the user entered, and then adding that to our collection of todos.

### [`ng-model`](https://docs.angularjs.org/api/ng/directive/ngModel)

Now, our goal is to access whatever the user entered into the form in our controller. To start, we need a way of talking about the data that the user entered. Angular allows us to bind the data entered into the input as a variable.

The cool thing about this, is that this variable will update on every change of input - in real time! This is one of Angular's core selling points, and is known as **two-way data binding**.

Let's see what happens when we track the user's input to a variable, and then display that variable.

In `index.html`:

```html
<div>
  <input type="text" ng-model="vm.newTodo">
  <button ng-click="vm.addTodo()">Add Todo</button>
  <p>User input: {{vm.newTodo}}</p>
</div>
```
> Here we added an `ng-model` to our input tag with a value of a `newTodo` property we are attaching to our `vm`.

Now, when we refresh in the browser, we can see the data we enter into the input displayed in realtime.

Furthermore, in this example we bound the user's input to a property we are calling `newTodo` on our the `vm`. Why this is important is that because of Angular's two-way data binding, any property attached to the VM in the view, is also available as a property inside the controller. This means that we are now all set up and ready to complete our `addTodo` method in the controller.

Moving back to our `addTodo` method in the controller, we need to grab the user input, and create a new todo from that data.

Let's look at the code that makes this a reality:

```js
this.addTodo = function(){
  let todo = {name: this.newTodo, completed: false }
  this.todos.push(todo)
};
```

Here we have access to the todo the user entered via a property on a controller of the same name that we used in the view (`this.newTodo`), we use that data to create a new todo, then add it to our collection.

## You Do: Add a New Todo

- Create some UI for the user to enter in information about a new Todo
- Wire up your form's button to a method defined in controller
- Bind each input to a property attached on the view model
- When the user clicks submit, inside your method in the controller - use the user data to create a new `todo` and add it to your collection of `todos`.

## Bonus: Conditional Rendering

Since Angular is so coupled to the view, you will often times run into situations were you want to conditionally render a single / group of element/s. Angular provides several different options to quickly embed logic into your templating.

Let's take a look at an example, by adding a new feature to our app. So far our todo list application is coming along nicely, but it would be really great if we could only show the todos that are not yet completed.

### [`ng-show`](https://docs.angularjs.org/api/ng/directive/ngShow)

In order to display only the todos that have a `completed` value of `true`, we can take advantage of the Angular directive `ng-show`:

Let's add it to our view in `index.html`:

```html
<body ng-controller='todosCtrl as vm'>
  <h2>Todos</h2>
  <div ng-repeat="todo in vm.todos">
    <p ng-show="todo.completed">{{$index + 1}}. {{todo.name}} - {{todo.completed}}</p>
  </div>
</body>
```

> `ng-show` takes any truthy or falsey value as an argument, and if it evaluates to true - the element will be displayed, otherwise the element is set as display:none.

> **Note**: To offer a semantic opposite, there is also the equivalent directive [ng-hide](https://docs.angularjs.org/api/ng/directive/ngHide) which hides an element if the passed in value is true.

### [Filters](https://docs.angularjs.org/api/ng/filter/filter)

Another very useful feature of Angular is its built in filtering functionality. Anywhere we are using `ng-repeat`, we can add a filter to modify the collection it is iterating over.

Let's look at another way of only showing the todos that have not yet been completed...

In `index.html`:
```html
<body ng-controller='todosCtrl as vm'>
  <h2>Todos</h2>
  <div ng-repeat="todo in vm.todos | filter: {completed: false}">
    <p>{{$index + 1}}. {{todo.name}} - {{todo.completed}}</p>
  </div>
</body>
```
> **Note**: the `|` operator starts a filter - which needs a key value pair of how to filter/sort. Note, here we are passing an object as the value specifying that we want to filter by the `completed` property of a `todo` as `false`

### You Do: Filters in Todos

Implement a search functionality for your Grumblr application so that a user can enter in some input, and your collection of `todos` is filtered based on user input

## Conclusion (5 mins)
- How do we define a new module when starting an application?
- When you create an example controller from scratch, what type of JS function is this?
- How do we render data in the view? What does the templating look like in Angular?
