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

# Positive Opinion Words

> A [list][sentiment-lexicon] of positive opinion words.

<section class="usage">

## Usage

```javascript
var words = require( '@stdlib/datasets/liu-positive-opinion-words-en' );
```

#### words()

Returns a [list][sentiment-lexicon] of positive opinion words.

```javascript
var list = words();
/* returns
    [
        'a+',
        'abound',
        'abounds',
        'abundance',
        'abundant',
        'accessable',
        'accessible',
        'acclaim',
        'acclaimed',
        'acclamation',
        'accolade',
        'accolades',
        ...
    ]
*/
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A word's appearance in a sentence does **not** necessarily imply a positive or negative opinion. See [Liu (2010)](#references).
-   The list includes misspelled words. Their presence is intentional, as such misspellings frequently occur in social media content.

</section>

<!-- /.notes -->

<section class="examples">

<!-- TODO: more creative example; possibly counting the number of positive words per sentence in two pieces of text. -->

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var floor = require( '@stdlib/math/base/special/floor' );
var randu = require( '@stdlib/random/base/randu' );
var words = require( '@stdlib/datasets/liu-positive-opinion-words-en' );

var list = words();
var len = list.length;
var idx;
var i;

// Select random words from the list...
for ( i = 0; i < 100; i++ ) {
    idx = floor( randu()*len );
    console.log( list[ idx ] );
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
Usage: liu-positive-opinion-words-en [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ liu-positive-opinion-words-en
a+
abound
abounds
abundance
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

* * *

<section class="references">

## References

-   Hu, Minqing, and Bing Liu. 2004. "Mining and Summarizing Customer Reviews." In _Proceedings of the Tenth Acm Sigkdd International Conference on Knowledge Discovery and Data Mining_, 168–77. KDD '04. New York, NY, USA: ACM. doi:[10.1145/1014052.1014073][@hu:2004a].
-   Liu, Bing, Minqing Hu, and Junsheng Cheng. 2005. "Opinion Observer: Analyzing and Comparing Opinions on the Web." In _Proceedings of the 14th International Conference on World Wide Web_, 342–51. WWW '05. New York, NY, USA: ACM. doi:[10.1145/1060745.1060797][@liu:2005a].
-   Liu, Bing. 2010. "Sentiment Analysis and Subjectivity." In _Handbook of Natural Language Processing_, edited by Nitin Indurkhya and Fred J. Damerau, 2nd ed., 627–66. Chapman & Hall/CRC. <https://www.crcpress.com/Handbook-of-Natural-Language-Processing-Second-Edition/Indurkhya-Damerau/p/book/9781420085921>.

</section>

<!-- /.references -->

<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Attribution 1.0 License][odc-by-1.0] and their contents are licensed under a [Creative Commons Attribution 4.0 International Public License][cc-by-4.0]. The original dataset is attributed to Bing Liu and Minqing Hu and can be found [here][sentiment-lexicon]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/datasets/liu-negative-opinion-words-en`][@stdlib/datasets/liu-negative-opinion-words-en]</span><span class="delimiter">: </span><span class="description">A list of negative opinion words.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[sentiment-lexicon]: http://www.cs.uic.edu/~liub/FBS/sentiment-analysis.html#lexicon

[odc-by-1.0]: http://opendatacommons.org/licenses/by/1.0/

[cc-by-4.0]: http://creativecommons.org/licenses/by/4.0/

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

[@hu:2004a]: https://doi.org/10.1145/1014052.1014073

[@liu:2005a]: https://doi.org/10.1145/1060745.1060797

<!-- <related-links> -->

[@stdlib/datasets/liu-negative-opinion-words-en]: https://github.com/stdlib-js/datasets/tree/main/liu-negative-opinion-words-en

<!-- </related-links> -->

</section>

<!-- /.links -->
