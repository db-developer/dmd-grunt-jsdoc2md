/**
 *  lib/index.js: dmd-grunt-jsdoc2md
 * 
 *  Entry module for the dmd-grunt-jsdoc2md template package.
 *
 *  This module serves as the integration point for dmd and exposes
 *  the template configuration required to register custom Handlebars
 *  partials and helpers used during API documentation rendering.
 *
 *  The module does not perform rendering or I/O operations itself.
 *  Its sole responsibility is to declare template assets to be
 *  consumed by the dmd render pipeline.
 * 
 *  @module dmd-grunt-jsdoc2md
 *
 *//*
 *  © 2020, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

/**
 *  Entry point for the dmd template extension.
 *
 *  This function is invoked by dmd when the package is loaded as a template.
 *  It returns the configuration object that registers additional Handlebars
 *  partials and helpers with the dmd render engine.
 *
 *  The returned paths are resolved by dmd and loaded before rendering begins,
 *  making the helpers and partials globally available to all templates during
 *  the render phase.
 *
 *  This function does not perform any rendering, aggregation, or I/O by itself.
 *  It solely declares template assets to be consumed by dmd.
 *
 *  @function index
 *  @memberof module:dmd-grunt-jsdoc2md.index
 *  @returns {Object} dmd template configuration
 *  @returns {string} returns.partial - Glob pattern pointing to Handlebars partials
 *  @returns {string} returns.helper  - Glob pattern pointing to Handlebars helpers
 */
module.exports = function index() {
  return {
    partial: __dirname + "/../partials/*.hbs",
    helper:  __dirname + "/../helpers/*.js"
  };
}
