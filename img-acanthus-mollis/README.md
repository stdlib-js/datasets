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

# Acanthus mollis

> [_Acanthus mollis_][@blossfeldt:1928a].

<section class="intro">

Image of Karl Blossfeldt's gelatin silver print [_Acanthus mollis_][@blossfeldt:1928a].

<!-- <image align="center" src="./data/image.jpg" alt="Acanthus mollis"> -->

<div class="image" align="center">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@30236137d43c6a0dc458588e66527f6762e10634/lib/node_modules/%40stdlib/datasets/img-acanthus-mollis/data/image.jpg" alt="Acanthus mollis">
    <br>
</div>

<!-- </image> -->

[_Acanthus mollis_][@blossfeldt:1928a] is a plant with tall, straight stem and spiky, black tipped leaves.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var image = require( '@stdlib/datasets/img-acanthus-mollis' );
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
var image = require( '@stdlib/datasets/img-acanthus-mollis' );

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
Usage: img-acanthus-mollis [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ img-acanthus-mollis | <image_viewer>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- <license> -->

## License

Digital image courtesy of the Getty's [Open Content Program][getty-open-content]. The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/datasets/img-allium-oreophilum`][@stdlib/datasets/img-allium-oreophilum]</span><span class="delimiter">: </span><span class="description">allium oreophilum (pink lily leek).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[getty-open-content]: http://www.getty.edu/about/opencontent.html

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

[@blossfeldt:1928a]: http://www.getty.edu/art/collection/objects/35443/karl-blossfeldt-acanthus-mollis-german-1928/

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer-ctor

<!-- <related-links> -->

[@stdlib/datasets/img-allium-oreophilum]: https://github.com/stdlib-js/datasets/tree/main/img-allium-oreophilum

<!-- </related-links> -->

</section>

<!-- /.links -->
