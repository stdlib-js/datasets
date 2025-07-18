<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# US Birth Data (1969-1988)

> US birth data from 1969 to 1988, as provided by the Center for Disease Control and Prevention's National Center for Health Statistics.

<section class="usage">

## Usage

```javascript
var dataset = require( '@stdlib/datasets/cdc-nchs-us-births-1969-1988' );
```

#### dataset()

Returns US birth data from 1969 to 1988, as provided by the Center for Disease Control and Prevention's National Center for Health Statistics.

```javascript
var data = dataset();
// returns [ {...}, ... ]
```

Each element in the returned database has the following fields:

-   **year**: year.
-   **month**: month, where January is denoted by `1`.
-   **date_of_month**: day number of the month.
-   **day_of_week**: day of week, where Monday is `1` and Sunday is `7`.
-   **births**: number of births.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Data extracted from national vital statistics natality tape data.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var incrmean = require( '@stdlib/stats/incr/mean' );
var dataset = require( '@stdlib/datasets/cdc-nchs-us-births-1969-1988' );

function mean( a, b ) {
    return ( a + b ) / 2.0;
}

function reldiff( a, b ) {
    return 100.0 * ( (a-b)/a );
}

/*
* GOAL: determine whether people avoid giving birth on the 13th of each month.
*
* NOTE: for a more thorough analysis, we'd account for holidays.
*/

// Retrieve the data:
var data = dataset();

// Initialize arrays for storing births for particular day numbers:
var d6or20 = [ [], [], [], [], [], [], [] ];
var d13 = [ [], [], [], [], [], [], [] ];

// Extract the day number data...
var d;
var w;
var i;
for ( i = 0; i < data.length; i++ ) {
    d = data[ i ].date_of_month;
    w = data[ i ].day_of_week;
    if ( d === 6 ) {
        // Average of days 6 and 20 for the same month:
        d6or20[ w-1 ].push( mean( data[ i ].births, data[ i+14 ].births ) );
    } else if ( d === 13 ) {
        d13[ w-1 ].push( data[ i ].births );
    }
}

// Initialize accumulators for computing the average relative difference...
var means = [];
for ( i = 0; i < 7; i++ ) {
    means.push( incrmean() );
}

// Compute the average relative difference between days 6/20 with day 13...
var l1;
var l2;
var mu;
var j;
for ( i = 0; i < 7; i++ ) {
    l1 = d13[ i ];
    l2 = d6or20[ i ];
    mu = means[ i ];
    for ( j = 0; j < l1.length; j++ ) {
        mu( reldiff( l1[ j ], l2[ j ] ) );
    }
}

// Print the results...
for ( i = 0; i < 7; i++ ) {
    console.log( '%d: %d%', i+1, means[ i ]().toFixed( 3 ) );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: cdc-nchs-us-births-1969-1988 [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   Data is written to `stdout` as comma-separated values ([CSV][csv]), where the first line is a header line.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ cdc-nchs-us-births-1969-1988
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/datasets/cdc-nchs-us-births-1994-2003`][@stdlib/datasets/cdc-nchs-us-births-1994-2003]</span><span class="delimiter">: </span><span class="description">US birth data from 1994 to 2003, as provided by the Center for Disease Control and Prevention's National Center for Health Statistics.</span>
-   <span class="package-name">[`@stdlib/datasets/ssa-us-births-2000-2014`][@stdlib/datasets/ssa-us-births-2000-2014]</span><span class="delimiter">: </span><span class="description">US birth data from 2000 to 2014, as provided by the Social Security Administration.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

[csv]: https://tools.ietf.org/html/rfc4180

<!-- <related-links> -->

[@stdlib/datasets/cdc-nchs-us-births-1994-2003]: https://github.com/stdlib-js/datasets/tree/main/cdc-nchs-us-births-1994-2003

[@stdlib/datasets/ssa-us-births-2000-2014]: https://github.com/stdlib-js/datasets/tree/main/ssa-us-births-2000-2014

<!-- </related-links> -->

</section>

<!-- /.links -->
