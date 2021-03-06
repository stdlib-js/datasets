<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# US State Names and Capitals

> US state names and capitals.

<section class="usage">

## Usage

```javascript
var table = require( '@stdlib/datasets/us-states-names-capitals' );
```

#### table()

Returns an object mapping US state names to state capitals.

```javascript
var t = table();
/* returns
    {
        'Alabama': 'Montgomery',
        'Alaska': 'Juneau',
        'Arizona': 'Phoenix',
        'Arkansas': 'Little Rock',
        'California': 'Sacramento',
        'Colorado': 'Denver',
        'Connecticut': 'Hartford',
        'Delaware': 'Dover',
        'Florida': 'Tallahassee',
        'Georgia': 'Atlanta',
        'Hawaii': 'Honolulu',
        'Idaho': 'Boise',
        'Illinois': 'Springfield',
        'Indiana': 'Indianapolis',
        'Iowa': 'Des Moines',
        'Kansas': 'Topeka',
        'Kentucky': 'Frankfort',
        'Louisiana': 'Baton Rouge',
        'Maine': 'Augusta',
        'Maryland': 'Annapolis',
        'Massachusetts': 'Boston',
        'Michigan': 'Lansing',
        'Minnesota': 'Saint Paul',
        'Mississippi': 'Jackson',
        'Missouri': 'Jefferson City',
        'Montana': 'Helena',
        'Nebraska': 'Lincoln',
        'Nevada': 'Carson City',
        'New Hampshire': 'Concord',
        'New Jersey': 'Trenton',
        'New Mexico': 'Santa Fe',
        'New York': 'Albany',
        'North Carolina': 'Raleigh',
        'North Dakota': 'Bismarck',
        'Ohio': 'Columbus',
        'Oklahoma': 'Oklahoma City',
        'Oregon': 'Salem',
        'Pennsylvania': 'Harrisburg',
        'Rhode Island': 'Providence',
        'South Carolina': 'Columbia',
        'South Dakota': 'Pierre',
        'Tennessee': 'Nashville',
        'Texas': 'Austin',
        'Utah': 'Salt Lake City',
        'Vermont': 'Montpelier',
        'Virginia': 'Richmond',
        'Washington': 'Olympia',
        'West Virginia': 'Charleston',
        'Wisconsin': 'Madison',
        'Wyoming': 'Cheyenne'
    }
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var capitalize = require( '@stdlib/string/capitalize' );
var table = require( '@stdlib/datasets/us-states-names-capitals' );

var tbl = table();

function getCapital( state ) {
    var capital;
    var parts;
    var i;

    // Ensure the first letter of each word comprising a state name is capitalized...
    parts = state.split( ' ' );
    for ( i = 0; i < parts.length; i++ ) {
        parts[ i ] = capitalize( parts[ i ] );
    }
    // Get the state capital:
    capital = tbl[ parts.join( ' ' ) ];

    // Ensure a valid state name was provided...
    if ( capital === void 0 ) {
        throw new Error( 'unrecognized state name. Value: `' + state + '`.' );
    }
    return capital;
}

console.log( getCapital( 'Missouri' ) );
// => 'Jefferson City'

console.log( getCapital( 'New Jersey' ) );
// => 'Trenton'

console.log( getCapital( 'California' ) );
// => 'Sacramento'
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: us-states-names-capitals [options]

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
$ us-states-names-capitals
state,capital
Alabama,Montgomery
Alaska,Juneau
Arizona,Phoenix
...
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

-   <span class="package-name">[`@stdlib/datasets/us-states-capitals`][@stdlib/datasets/us-states-capitals]</span><span class="delimiter">: </span><span class="description">A list of US state capitals in alphabetical order according to state name.</span>
-   <span class="package-name">[`@stdlib/datasets/us-states-names`][@stdlib/datasets/us-states-names]</span><span class="delimiter">: </span><span class="description">A list of US state names in alphabetical order.</span>
-   <span class="package-name">[`@stdlib/datasets/us-states-names-capitals`][@stdlib/datasets/us-states-names-capitals]</span><span class="delimiter">: </span><span class="description">US state names and capitals.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

[csv]: https://tools.ietf.org/html/rfc4180

<!-- <related-links> -->

[@stdlib/datasets/us-states-capitals]: https://github.com/stdlib-js/datasets/tree/main/us-states-capitals

[@stdlib/datasets/us-states-names]: https://github.com/stdlib-js/datasets/tree/main/us-states-names

[@stdlib/datasets/us-states-names-capitals]: https://github.com/stdlib-js/datasets/tree/main/us-states-names-capitals

<!-- </related-links> -->

</section>

<!-- /.links -->
