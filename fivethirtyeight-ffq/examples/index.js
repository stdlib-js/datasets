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

var bifurcateBy = require( '@stdlib/utils/bifurcate-by' );
var inmap = require( '@stdlib/utils/inmap' );
var ttest2 = require( '@stdlib/stats/ttest2' );
var dataset = require( './../lib' );

function predicate( v ) {
	return ( v.diabetes === 1 );
}

function createAccessor( field ) {
	return accessor;

	function accessor( v ) {
		return v[ field ];
	}
}

// Retrieve the data:
var data = dataset();

// Split the data into two groups based on whether a respondent has diabetes:
var groups = bifurcateBy( data, predicate );

// For each group, extract the frequency of green salad consumption:
var mapFcn = createAccessor( 'greensaladfreq' );
var g1 = inmap( groups[ 0 ].slice(), mapFcn );
var g2 = inmap( groups[ 1 ].slice(), mapFcn );

// Perform a two-sample two-sided Student's t-test to determine if green salad consumption is different between the two groups:
var results = ttest2( g1, g2 );
console.log( results.print() );
