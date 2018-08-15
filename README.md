# HTML Highlighter

[![CircleCI](https://circleci.com/gh/dossier/html-highlighter.svg?style=svg)](https://circleci.com/gh/dossier/html-highlighter)
[![npm](https://img.shields.io/npm/v/html-highlighter.svg)](https://www.npmjs.com/package/html-highlighter)

The HTML Highlighter is a JavaScript module that solves these problems:

 1. Display colorful highlights on words in a live Web page that are
    determined by either or both of these sources:
    1. User `selections` identified by a user dragging their pointer
       over a portion of a page, possibly covering multiple tags in
       the DOM tree.
    1. Machine `selections` identified by a program, which might run
       in the browser or in a server-side environment that processes
       the HTML and text of a page to decide which portions of content
       should be marked.
 1. Provide these offsets to either JavaScript or backend tools.
    [StreamCorpus Pipeline](https:/github.com/trec-kba/streamcorpus-pipeline)
    is being extended to provide translation between the relative
    offsets generated by HTML Highlighter and the absolute character
    offsets used by many backend text processing tools.
 1. Provide objects isomorphic to JavaScript's `Range` object, which
    has [character offsets relative to DOM nodes identified by Xpaths](https://github.com/dossier/html-highlighter/blob/0.1.0/src/html_highlighter.js#L1067-L1076):
```javascript
{
    start: {
        xpath: <string> // unique address to DOM node
        offset: <int> // relative character offset
    },
    end: {
        xpath: <string> // unique address to DOM node
        offset: <int> // relative character offset
    }
}
```

The inline comments and class documentation are sufficient for a JavaScript
programmer to jump in and start using this.  To see an example, you can:

```bash
    $ git clone git://github.com/dossier/html-highlighter
    $ cd html-highlighter
    $ yarn install
    $ yarn start
    $ $BROWSER http://localhost:8080/examples/monolith/
```

Note the trailing slash in the URL fragment `examples/monolith/`.  Omitting
the slash will result in something loading but not quite running.

## Dependencies

The HTML Highlighter library relies on a number of dependencies that must be
installed before any other step is taken.  Installing dependencies can be done
as given below:

```sh
$ yarn install
```

## Building
### Development

When hacking on the HTML Highlighter, running the following command frees one
from having to manually compile the code with each iteration.  Bundles are
automatically generated as changes are made, making development a breeze.

Generated assets can be accessed on a browser via the URL
`http://localhost:8080`, however the port can be customized via the environment
variable `NODE_PORT`.

```sh
$ yarn start
```

An alternative dynamic build mode relies on webpack's watch method for building
bundles incrementally as changes are made.  Assets are placed in the directory
`dist`.

```sh
$ yarn start:watch
```

Finally, the command given below creates a **static** development build which is
composed of a minified bundle of the HTML Highlighter library with the suffix
`.min.js` added to distinguish it from the development build artifact.  All
artifacts are placed inside the `dist` directory and its existing contents are
left untouched.  Note that this command must be run each time changes are made
to the code.

```sh
$ yarn build:min
```

### Production

Creating a **production** build requires running a simple command and results in
*only* the HTML Highlighter library being built, fully optimized and minimized.
Everything else is omitted.

```sh
$ yarn prepublish
```

## Running tests

Running tests requires a standard terminal environment and can be accomplished
by executing the following command:

```sh
$ yarn test
```

Note that tests relying on the `document.createRange` function are skipped due
to the fact that jsdom, the virtual DOM environment used, does not provide an
implementation.

### Release process

To release this repository to NPM, we use the following command:

```sh
npm version <type>
```

Once that command has been run, execute the following command to push the
new commit and its tag.

```sh
git push --follow-tags
```

The automated build in CircleCI will then publish the package to NPM.
