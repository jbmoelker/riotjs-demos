# Contributing

The purpose of the demos is to make the [RiotJS Style Guide](https://github.com/voorhoede/riotjs-style-guide) more understandable by providing practical examples.


## Guidelines

### Pull Requests

For new additions or changes to the demos, create a branch and submit a Pull Request.
Only add/change 1 demo per Pull Request.

### Directory structure

Each demo must have the following structure:

```
src/
└── my-module/
    ├── my-module.tag.html
    ├── my-module.demo.html
    ├── my-module.css (optional)
    └── README.md
```

### Tag file (`.tag.html`)

* Must be in [RiotJS Style Guide](https://github.com/voorhoede/riotjs-style-guide) format.
* Must be able to compile using [`npm run build`](#scripts).
* Must pass [`npm test`](#scripts). See [`src/.eslintrc`](src/.eslintrc) for linting settings.

### Demo file (`.demo.html`)

* Must work in isolation (stand-alone).
* Should illustrate different possible configurations of the tag.
* Should use `demo[aria-label]` format (`<demo aria-label="Demo title"> <my-module attr="value" /> </demo>`).

You can use the following template to get you started:

```html
<link rel="stylesheet" href="./my-module.css"> <!-- optional, only if demo needs additional styling -->
<script type="riot/tag" src="./my-module.tag.html"></script>

<demo aria-label="My module with ...">
    <my-module attr="value" />
</demo>

<script src="https://cdn.jsdelivr.net/riot/2.3.16/riot+compiler.min.js"></script>
<script>
    riot.tag('demo', '<yield/>');
    riot.mount('demo');
</script>
<style>
    /* add a grey bar with the `aria-label` as demo title */
    demo:before {
        content: "Demo: " attr(aria-label);
        display: block;
        background: #F3F5F5;
        padding: .5em;
        clear: both;
        margin: .5em 0;
    }
</style>
```
Obviously, replace `my-module`/"My module" with the actual name of your module.

See [Add a tag demo in RiotJS Style Guide](https://github.com/voorhoede/riotjs-style-guide#add-a-tag-demo) for more background.

### Readme file (`README.md`)

* Must have module name as title (`# My demo`)
* Must have description of functionality in non-tech terms.
* Must have instructions for usage including [tag API documentation](https://github.com/voorhoede/riotjs-style-guide#document-your-tag-api).

See existing demos for examples.

### Commit message format

Each commit message must have a *header* and optionally a *body*. The header has a special format that includes a type, a scope and a summary:

```
<type>(<scope>): <summary>
<BLANK LINE>
<body>
```

#### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

#### Scope
The scope could be anything specifying place of the commit change. The scope is optional.

In case of a feature or fix to a demo it would typically be the name of the module, e.g. `fix(todo-app):`.

#### Summary
The summary contains succinct description of the change. Keep it clear, but short. Put the rest in the body.

#### Body
The body should include the motivation for the change and contrast this with previous behavior.

Note: the commit message format guidelines are based on [Angular's Git Commit Guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines).


## Scripts

Development requires [Node.js](http://nodejs.org/) and [npm](https://npmjs.org/).

After installing dependencies (run `npm install`) the following scripts are available:

`npm run ...` | Description
---|---
`build` | Compile, bundle and minify all tag files.
`build:tags` | Compile and bundle all tag files to `dist/tags.js`.
`build:min` | Minify tags bundle to `dist/tags.min.js` plus sourcemap.
`start` | Starts a server on `http://localhost:33667` ("demos" in T9).
`test` | Run linter.
`test:eslint` | Check all tag files for format and syntax errors.