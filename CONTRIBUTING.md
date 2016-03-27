# Contributing

The purpose of the demos is to make the [RiotJS Style Guide](https://github.com/voorhoede/riotjs-style-guide) more understandable by providing practical examples.


## Guidelines

For new additions or changes to the demos, create a branch and submit a Pull Request.
Only add/change 1 demo per Pull Request.

Each demo must have the following structure:

```
src/
└── my-demo/
    ├── my-demo.tag.html
    ├── my-demo.demo.html
    ├── my-demo.css (optional)
    └── README.md
```

And naturally the demo must be in [RiotJS Style Guide](https://github.com/voorhoede/riotjs-style-guide) format.


## Scripts

Development requires [Node.js](http://nodejs.org/) and [npm](https://npmjs.org/).

After installing dependencies using `npm install` the following scripts are available:

`npm run ...` | Description
---|---
`build` | Compile, bundle and minify all tag files.
`build:tags` | Compile and bundle all tag files to `dist/tags.js`.
`build:min` | Minify tags bundle to `dist/tags.min.js` plus sourcemap.
`start` | Starts a server on `http://localhost:33667` ("demos" in T9).