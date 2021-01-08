# dmd-grunt-jsdoc2md
Plugin for dmd and grunt-jsdoc2md which provides an api index and more readable docs.  

[![npm version](https://img.shields.io/npm/v/dmd-grunt-jsdoc2md?color=blue)](https://www.npmjs.com/package/dmd-grunt-jsdoc2md)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)

## content ##

* [Getting started guide](#getting-started)
* [Usage](#usage)

## getting started ##

This guide assumes, you are familiar with the use of [npm](https://npmjs.com "Homepage of npm").

<code>npm install dmd-grunt-jsdoc2md --save-dev</code>

The grunt plugin <code>grunt-jsdoc2md</code> is a dependant of this dmd plugin.

## usage ##

<code>dmd-grunt-jsdoc2md</code> is used, if <code>grunt-jsdoc2md</code> is configured to
generate one markdownfile for each sourcefile found within a directory tree.  
After all markdowns have been written, all jsdoc metadata of all sourcefiles is enriched,
aggregated and passed to <code>dmd-grunt-jsdoc2md</code> for writing an indexfile, which
will link (glue) all markdownfiles together.  

Imagine the following directory structure for your source files:  

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

Being glued together by a <code>grunt-jsdoc2md</code> configuration like:  
(Extract from gruntfile.js)

```json
  "jsdoc2md": {
    "target0": {
      "src":      "src/**/*.js",
      "dest":     "docs/apidir/",
      "options": {
        "index":  {
          "dest": "docs/api.md"
        }
      }
    }
  }
```

Which will produce the following output:

```
--+ docs
  + api.md         <= this is the index file (s.a.: "docs/api.md")
  |
  + apidir         <= the api markdown root  (s.a.: "docs/apidir")
    + file1.md
    + file2.md
    + subdir1
    |  + subdir1file1.md
    |
    + subdir2
       + subdir2file1.md
```

The file api.md will hold a listing of all modules listed above.
The modules are correctly linked, so you can navigate from the index file
to each of the submodules.
