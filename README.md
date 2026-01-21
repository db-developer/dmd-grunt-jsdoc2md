# dmd-grunt-jsdoc2md

A **dmd template extension** for **grunt-jsdoc2md** that generates a global, navigable API index across multiple Markdown files produced from JSDoc.

This package does **not** generate documentation by itself. Instead, it extends the dmd render phase with additional helpers and Handlebars partials that operate on the complete JSDoc symbol model.

[![npm version](https://img.shields.io/npm/v/dmd-grunt-jsdoc2md?color=blue)](https://www.npmjs.com/package/dmd-grunt-jsdoc2md)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![jsdoc](https://img.shields.io/static/v1?label=jsdoc&message=%20api%20&color=blue)](https://jsdoc.app/)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)
[![dependencies](https://img.shields.io/librariesio/release/npm/dmd-grunt-jsdoc2md)](https://libraries.io/)
![Build & Test](https://github.com/db-developer/dmd-grunt-jsdoc2md/actions/workflows/ci.yml/badge.svg)
[![codecov](https://codecov.io/gh/db-developer/dmd-grunt-jsdoc2md/branch/master/graph/badge.svg)](https://codecov.io/gh/db-developer/dmd-grunt-jsdoc2md)


## Contents

- [Getting started](#getting-started)
- [Concept and scope](#concept-and-scope)
- [Usage](#usage)
- [What this package does not do](#what-this-package-does-not-do)

See also: [Changelog](CHANGELOG.md)

## Getting started

This guide assumes familiarity with npm, Grunt, and JSDoc-based documentation workflows.

Install the package as a development dependency:

```
npm install dmd-grunt-jsdoc2md --save-dev
```

This package is designed to be used together with `grunt-jsdoc2md`, which must already be part of your build setup.

## Concept and scope

When using `grunt-jsdoc2md`, it is common to generate **one Markdown file per source file**. While this scales well for larger codebases, it leaves the generated documentation without a single, global entry point.

`dmd-grunt-jsdoc2md` addresses this gap by providing:

- additional **dmd helpers**
- a set of **Handlebars partials**

that are executed during the dmd render phase. These templates have access to the **entire JSDoc symbol model** and can therefore generate a **global API index** that links all generated Markdown files together.

The index is symbol-based (modules and their members), not file-based, and relies entirely on the metadata and link targets already provided by dmd and jsdoc-to-markdown.

## Usage

`dmd-grunt-jsdoc2md` is used implicitly by `grunt-jsdoc2md` when configured to generate an index file.

Example source structure:

```
--+ src
  + file1.js
  + file2.js
  + subdir1
  |  + subdir1file1.js
  |
  + subdir2
     + subdir2file1.js
```

Corresponding `grunt-jsdoc2md` configuration (excerpt from `Gruntfile.js`):

```json
{
  "jsdoc2md": {
    "target0": {
      "src": "src/**/*.js",
      "dest": "docs/apidir/",
      "options": {
        "index": {
          "dest": "docs/api.md"
        }
      }
    }
  }
}
```

This configuration results in:

```
--+ docs
  + api.md          <= global API index
  |
  + apidir          <= per-file API documentation
    + file1.md
    + file2.md
    + subdir1
    |  + subdir1file1.md
    |
    + subdir2
       + subdir2file1.md
```

During the render process:

1. `grunt-jsdoc2md` builds the complete JSDoc symbol model.
2. Per-file Markdown documents are rendered.
3. dmd renders an additional index template provided by this package.
4. The resulting `api.md` links to all documented modules and their members.

The index can be rendered in different formats (grouped, list-based, or tabular), depending on the configured dmd options.

## What this package does not do

To avoid misunderstandings, this package intentionally does **not**:

- parse source code
- collect or aggregate JSDoc metadata itself
- generate or post-process Markdown files
- manage file paths or links manually

All links, anchors, and symbol relationships are derived directly from dmd and jsdoc-to-markdown.

---

In short, `dmd-grunt-jsdoc2md` is a focused dmd extension that leverages the global render context to provide a single, navigable API index for multi-file JSDoc-based documentation.
