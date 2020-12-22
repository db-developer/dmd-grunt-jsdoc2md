/**
 *	index.js: dmd-grunt-jsdoc2md
 *
 *  © 2020, slashlib.org.
 *
 *  index.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty  of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

const _STRINGS = { EXPORTS: "exports" }

function index() {
  return {
    partial: __dirname + "/../partials/*.hbs",
    helper:  __dirname + "/../helpers/*.js"
  };
}

/* eslint-disable */
// Module exports:
Object.defineProperty( module, _STRINGS.EXPORTS, {
       value:    index,
       writable: false, enumerable: true, configurable: false });
/* eslint-enable */
