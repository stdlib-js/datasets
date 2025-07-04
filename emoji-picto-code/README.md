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

# Emoji Pictographs and Codes

> Map emoji pictographs to codes.

<section class="usage">

## Usage

```javascript
var table = require( '@stdlib/datasets/emoji-picto-code' );
```

#### table()

Returns an object mapping emoji pictographs to codes.

```javascript
var t = table();
// returns {...}

var p = t[ '😄' ];
// returns [ ':smile:' ]

p = t[ '🦄' ];
// returns [ ':unicorn:' ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Some emoji pictographs may have **multiple** applicable codes.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var table = require( '@stdlib/datasets/emoji-picto-code' );

var picto;
var tbl;
var i;

// Get the data:
tbl = table();

// Get the emoji pictographs:
picto = objectKeys( tbl );

// Print out all the corresponding codes...
for ( i = 0; i < picto.length; i++ ) {
    console.log( picto[ i ] + ' => ' + tbl[ picto[ i ] ] );
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
Usage: emoji-picto-code [options]

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
$ emoji-picto-code
emoji,code
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

-   <span class="package-name">[`@stdlib/datasets/emoji`][@stdlib/datasets/emoji]</span><span class="delimiter">: </span><span class="description">emoji.</span>
-   <span class="package-name">[`@stdlib/datasets/emoji-code-picto`][@stdlib/datasets/emoji-code-picto]</span><span class="delimiter">: </span><span class="description">emoji codes and pictographs.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

[csv]: https://tools.ietf.org/html/rfc4180

<!-- <related-links> -->

[@stdlib/datasets/emoji]: https://github.com/stdlib-js/datasets/tree/main/emoji

[@stdlib/datasets/emoji-code-picto]: https://github.com/stdlib-js/datasets/tree/main/emoji-code-picto

<!-- </related-links> -->

</section>

<!-- /.links -->
