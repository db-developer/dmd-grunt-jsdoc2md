/**
 *  lib/helpers/helpers.js: dmd-grunt-jsdoc2md
 * 
 *  Collection of custom Handlebars helper functions used by the
 *  dmd-grunt-jsdoc2md template during documentation rendering.
 *
 *  This module provides small, stateless utility helpers intended
 *  for use inside Handlebars partials (e.g. comparisons, sorting).
 *  It does not perform data aggregation, rendering control, or I/O
 *  operations and contains no dmd or Grunt integration logic itself.
 * 
 *  @module dmd-grunt-jsdoc2md/helpers/helpers
 *
 *//*
 *  © 2020, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

/**
 *  Compares two values for strict equality.
 *
 *  This helper is intended for use in Handlebars templates during the
 *  dmd-grunt-jsdoc2md render process. It returns a boolean indicating
 *  whether the two provided contexts are strictly equal (`===`).
 *
 *  @function equals
 *  @memberof module:dmd-grunt-jsdoc2md/helpers/helpers
 *  @param {*} context1 - The first value to compare.
 *  @param {*} context2 - The second value to compare.
 *  @param {Object} options - Handlebars options object.
 *  @param {Function} options.fn - Block function provided by Handlebars.
 *  @returns {boolean} True if `context1` and `context2` are strictly equal, otherwise false.
 */
module.exports.equals = function equals ( context1, context2, options ) {
  return context1 === context2;
}

/**
 *  Sorts an array of objects by a specified property and passes the result
 *  to the Handlebars block function.
 *
 *  This helper is intended for use in Handlebars templates during the
 *  dmd-grunt-jsdoc2md render process. If the `by` property is provided in
 *  `options.hash`, the array is sorted by that property; otherwise, the
 *  original array is passed through.
 *
 *  @function sort
 *  @memberof module:dmd-grunt-jsdoc2md/helpers/helpers
 *  @param {Array<Object>} context - The array of objects to sort.
 *  @param {Object} options - Handlebars options object.
 *  @param {Object} options.hash - Hash of named parameters.
 *  @param {string} [options.hash.by] - Property name to sort by (optional).
 *  @param {Function} options.fn - Handlebars block function to call with the sorted array.
 *  @returns {*} The result of calling `options.fn` with the sorted (or original) array.
 */
module.exports.sort = function sort( context, options ) {
  if ( options.hash.by ) {
       const  property = options.hash.by;
       const sorted    = [ ...context ].sort(( first, second ) => {
                try {
                  let result = undefined;
                  if ( first[ property ] < second[ property]) { result = -1; }
                  else if ( first[ property ] > second[ property]) { result = 1; }
                  else result = 0;
                  return result;
                }
                catch( error ) { console.log( error ); return 0; }
              });
       return options.fn( sorted );
  }
  else return options.fn( context );
}
