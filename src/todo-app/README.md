# Todo app

## Functionality

Quickly add a todo to a list, and strike them off when you're done.

## Usage

`<todo-app>` supports the following custom tag attributes:

| attribute | type | description
| --- | --- | ---
| `title` | String | Name of the todo list.
| `items` | Array *optional* | List of todo items with `title` (String) and `done` state (Boolean). E.g. `[{ title:'Alpha' }, { title:'Beta', done:true }]`.

## Changes

This module is based on the [`<todo>` example in the RiotJS docs](http://riotjs.com/guide/#example). It's adapted to follow the RiotJS Style Guide rules, by making the following changes:

* Renamed to `todo-app` to be custom element spec compliant.
* Create `todo-app/` directory with `README.md`.
* Create `todo-app.tag.html` with code from [riotjs.com/guide/#example](http://riotjs.com/guide/#example).
* Create `todo-app.css` with styles for tag.
* Create `todo-app.demo.html` with variations of `todo-app`.
* Assign `this` to `tag`.
* Put tag props and methods on top (`tag.add = add;` etc.).
* Add `tag.text = ""` to explicitely show `text` is available on the tag.
* Remove "fake ES6 syntax" (`add(e) {}` -> `function add(e) {}`).
* Remove unused `this.disabled = true`.
* Default `this.items` to empty list (`[]`) to allow empty todo app.
* Put HTML attribute values between double quotes (`attr="value"`).
* Use `todo-app` as namespace for module styles in `todo-app.css`.