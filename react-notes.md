# React Course on Udemy
https://hyland.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595358#overview


## Section 1
* Stopping making requests to the server to give new views
* All about building modern interactive UIs in the browser
* Why do need react, instead of just React

https://github.com/academind/react-complete-guide-code/blob/01-getting-started/code/react-vs-vanilla-js-example/just-js/app.js

Just JS example - an imperative approach, taking care of all the nitty gritty details

React - makes it all easier, declarative component based approach

Build SPAs - Single Page Applications
* Can be used to control parts of a multi-page app, but usually a single page, one request, and react takes over

### Alternatives
React - a focus on components, lean UI library, uses 3rd party packages for other things
Angular - Complete UI Framework, with more features, more built in
Vue - In between the 2 extremes, includes core features like routing, but still need some other libraries

### Basics
* Components
* UI component builds
* Events
* Data
* Props
* State
* Styling
* React Hooks

### Advanced Concepts
* Side Effects
* Refs
* More React Hooks
* App Wide State Mgmt - React Context API & Redux
* Http Requests & Custom Hooks
* Routing, Deployment, and NextJS

### Summaries & Refreshers
* JS Refreshers
* ReactJS Summary

2 Options to taking the Course
* Standard Approach - step by step, then the summary module
* Summary Approach - 
** are you in a hurry - skip forward to the React Summary Module - do this first, then concise compressed way of learning react - 4 hrs!!!

## Section 2 - Javascript Refresher

### let & const

var is done, use let and const to define variables

### arrow functions

different syntax for creating functions

```
function myFunc () {
...
}
```
 vs 
```
const myFunc = () => {
...
}
```
Helps out with the `this` keyword scoping issues

### Exports and Imports

* Importing and exporting from files

### Javascript Classes

* Simply blueprints for objects
* instantiated with `new` keyoword
* constructor method
* `extends` for inheritance

ES7 syntax simplifies defining properties and methods

### Spread & Rest operators
`...`

Spread - split up array elements
* `const newArr = [...oldArr, 1,2 ]`

Rest - merge a list of function arguments into an array
* `function sortArgs(...args)`

### Destructuring
Extrtction array elements or object properties into vars

`[a, b] = [1,2,3,4];`

### Reference and Primitive Types Refresher
* Reference vs Primitive Type
* Copying values vs Reference the mem address
* Watch out for copying reference types, need to copy in immutable ways, ie using the spread operator.
* Objects and Arrays are reference types

### Array methods
* filter, sort, map, etc.

Particularly important in this course are:

* map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
* find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
* findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
* filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
* reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
* concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
* slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
* splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


## Section 3 - React Basics

Component Drive User Interfaces

React is a Javascript library for building user interfaces, making complex interfaces in an easier and reactive.

React is all about `Components`
* All UIs are made up of components
* Components all the way down
* Containers, buttons, inputs etc...

Why Components?
* Reusability - don't repeat yourself
* Separation of concerns - makes in manageable

How is a component built?
HTML, CSS, Javascript
* Combine all these into components
* This course isn't going to be a big focus in react

Uses a Declarative approach
* define a desired end state, and let the system determine the DOM instructions.

Create a new React Project
* create-react-app
* preconfigured folders, and configuration files, plus dev environment
* simplifies the dev process, and optimized
* need node.js for npx to run create-react-app

### React Code is just Javascript Code

### index.js is the first file to execute
What are we doing, we are importing ReactDOM, which is the key to getting React
React is defined in the react and react-dom packages

We use ReactDOM to create the root of the document, that is being placed.

public/index.html - single file that is being loaded by the browser, entry point to the react ui is injected.


## Section 4 - React State and Working with Events

Making Apps interactive and reactive

Handling Events - user events like clicks etc
And updating the UI and working with changing states

