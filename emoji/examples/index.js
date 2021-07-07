/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var dataset = require( './../lib' );

var data;
var len;
var idx;
var d;
var i;

data = dataset();
len = data.length;

// Select random emoji...
for ( i = 0; i < 100; i++ ) {
	idx = discreteUniform( 0, len-1 );
	d = data[ idx ];
	console.log( d.emoji + ' => ' + d.codes[ 0 ] );
}
