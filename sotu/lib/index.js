/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* State of the Union addresses by U.S. presidents.
*
* @module @stdlib/datasets/sotu
*
* @example
* var sotu = require( '@stdlib/datasets/sotu' );
*
* var speeches = sotu();
* // returns <ObjectArray>
*
* @example
* var sotu = require( '@stdlib/datasets/sotu' );
*
* var speeches = sotu({
*     'name': [
*         'Franklin D Roosevelt',
*         'William J Clinton'
*      ]
* });
* // returns <ObjectArray>
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
