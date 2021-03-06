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

# Female First Names

> A [list][@ward:2002a] of common female first names in English speaking countries.

<section class="usage">

## Usage

```javascript
var names = require( '@stdlib/datasets/female-first-names-en' );
```

#### names()

Returns a [list][@ward:2002a] of common female first names (also known as [given][given-name] or personal names) in English speaking countries.

```javascript
var data = names();
/* returns
    [
        'Aaren',
        'Aarika',
        'Abagael',
        'Abagail',
        'Abbe',
        'Abbey',
        'Abbi',
        'Abbie',
        'Abby',
        ...
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
var names = require( '@stdlib/datasets/female-first-names-en' );

var data = names();
var len = data.length;
var idx;
var i;

// Select random names from the list...
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
Usage: female-first-names-en [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ female-first-names-en
Aaren
Aarika
Abagael
Abagail
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

* * *

<section class="references">

## References

-   Ward, Grady. 2002. "Moby Word II." <http://www.gutenberg.org/files/3201/3201.txt>.

</section>

<!-- /.references -->

<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/datasets/male-first-names-en`][@stdlib/datasets/male-first-names-en]</span><span class="delimiter">: </span><span class="description">A list of common male first names in English speaking countries.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

[given-name]: https://en.wikipedia.org/wiki/Given_name

[@ward:2002a]: http://www.gutenberg.org/files/3201/3201.txt

<!-- <related-links> -->

[@stdlib/datasets/male-first-names-en]: https://github.com/stdlib-js/datasets/tree/main/male-first-names-en

<!-- </related-links> -->

</section>

<!-- /.links -->
