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

# Locomotion

> Forty-eight views of a nude male moving in place.

<section class="intro">

[Image][@muybridge:1887b] of Eadweard J. Muybridge's collotype of a nude male moving in place.

<!-- <image align="center" src="./data/image.jpg" alt="Nude male moving place"> -->

<div class="image" align="center">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@691d650497d47530efa650b2ad6bd6e48cf360fe/lib/node_modules/@stdlib/datasets/img-locomotion-nude-male/data/image.jpg" alt="Nude male moving in place">
    <br>
</div>

<!-- </image> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var image = require( '@stdlib/datasets/img-locomotion-nude-male' );
```

#### image()

Returns a [buffer][@stdlib/buffer/ctor] containing image data.

```javascript
var img = image();
// returns <Buffer>
```

</section>

<!-- /.usage -->

<section class="examples">

<!-- TODO: more creative example. -->

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var image = require( '@stdlib/datasets/img-locomotion-nude-male' );

var img = image();
console.log( img );
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: img-locomotion-nude-male [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ img-locomotion-nude-male | <image_viewer>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- <license> -->

## License

Digital image courtesy of the Getty's [Open Content Program][getty-open-content]. The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under a [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/datasets/img-locomotion-house-cat`][@stdlib/datasets/img-locomotion-house-cat]</span><span class="delimiter">: </span><span class="description">twenty-four views of a house cat.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[getty-open-content]: http://www.getty.edu/about/opencontent.html

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

[@muybridge:1887b]: http://www.getty.edu/art/collection/objects/40907/eadweard-j-muybridge-animal-locomotion-american-1887/

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer-ctor

<!-- <related-links> -->

[@stdlib/datasets/img-locomotion-house-cat]: https://github.com/stdlib-js/datasets/tree/main/img-locomotion-house-cat

<!-- </related-links> -->

</section>

<!-- /.links -->
