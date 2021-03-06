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

# US State Capitals

> A list of US state capitals.

<section class="usage">

## Usage

```javascript
var capitals = require( '@stdlib/datasets/us-states-capitals' );
```

#### capitals()

Returns a list of US state capitals in alphabetical order according to state name.

```javascript
var data = capitals();
/* returns
    [
        'Montgomery',
        'Juneau',
        'Phoenix',
        'Little Rock',
        'Sacramento',
        'Denver',
        'Hartford',
        'Dover',
        'Tallahassee',
        'Atlanta',
        'Honolulu',
        'Boise',
        'Springfield',
        'Indianapolis',
        'Des Moines',
        'Topeka',
        'Frankfort',
        'Baton Rouge',
        'Augusta',
        'Annapolis',
        'Boston',
        'Lansing',
        'Saint Paul',
        'Jackson',
        'Jefferson City',
        'Helena',
        'Lincoln',
        'Carson City',
        'Concord',
        'Trenton',
        'Santa Fe',
        'Albany',
        'Raleigh',
        'Bismarck',
        'Columbus',
        'Oklahoma City',
        'Salem',
        'Harrisburg',
        'Providence',
        'Columbia',
        'Pierre',
        'Nashville',
        'Austin',
        'Salt Lake City',
        'Montpelier',
        'Richmond',
        'Olympia',
        'Charleston',
        'Madison',
        'Cheyenne'
    ]
*/
```

</section>

<!-- /.usage -->

<section class="examples">

<!-- TODO: more creative example. -->

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var floor = require( '@stdlib/math/base/special/floor' );
var randu = require( '@stdlib/random/base/randu' );
var capitals = require( '@stdlib/datasets/us-states-capitals' );

var data = capitals();
var len = data.length;
var idx;
var i;

// Select random capitals from the list...
for ( i = 0; i < 100; i++ ) {
    idx = floor( randu()*len );
    console.log( data[ idx ] );
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
Usage: us-states-capitals [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ us-states-capitals
Montgomery
Juneau
Phoenix
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

-   <span class="package-name">[`@stdlib/datasets/us-states-abbr`][@stdlib/datasets/us-states-abbr]</span><span class="delimiter">: </span><span class="description">A list of US state two-letter abbreviations in alphabetical order according to state name.</span>
-   <span class="package-name">[`@stdlib/datasets/us-states-capitals-names`][@stdlib/datasets/us-states-capitals-names]</span><span class="delimiter">: </span><span class="description">US state capitals and names.</span>
-   <span class="package-name">[`@stdlib/datasets/us-states-names`][@stdlib/datasets/us-states-names]</span><span class="delimiter">: </span><span class="description">A list of US state names in alphabetical order.</span>
-   <span class="package-name">[`@stdlib/datasets/us-states-names-capitals`][@stdlib/datasets/us-states-names-capitals]</span><span class="delimiter">: </span><span class="description">US state names and capitals.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

<!-- <related-links> -->

[@stdlib/datasets/us-states-abbr]: https://github.com/stdlib-js/datasets/tree/main/us-states-abbr

[@stdlib/datasets/us-states-capitals-names]: https://github.com/stdlib-js/datasets/tree/main/us-states-capitals-names

[@stdlib/datasets/us-states-names]: https://github.com/stdlib-js/datasets/tree/main/us-states-names

[@stdlib/datasets/us-states-names-capitals]: https://github.com/stdlib-js/datasets/tree/main/us-states-names-capitals

<!-- </related-links> -->

</section>

<!-- /.links -->
