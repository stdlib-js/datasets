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

# AFINN-111

> A [list][afinn] of English words rated for [valence][valence].

<section class="usage">

## Usage

```javascript
var afinn111 = require( '@stdlib/datasets/afinn-111' );
```

#### afinn111()

Returns a [list][afinn] of `2477` English words (and phrases) rated for [valence][valence]. Negative words have a negative [valence][valence] (`[-5,0)`). Positive words have a positive [valence][valence] (`(0,5]`). Neutral words have a [valence][valence] of `0`.

```javascript
var words = afinn111();
/* returns
    [
        ['abandon',-2],
        ['abandoned',-2],
        ['abandons',-2],
        ['abducted',-2],
        ['abduction',-2],
        ['abductions',-2],
        ['abhor',-3],
        ['abhorred',-3],
        ['abhorrent',-3],
        ...
    ]
*/
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The list includes misspelled words. Their presence is intentional, as such misspellings frequently occur in social media content.
-   All words are lowercase.
-   Words may contain numbers; e.g., `n00b`.
-   Some "words" are phrases; e.g., `cool stuff`, `not good`.
-   Words may contain apostrophes; e.g., `can't stand`.
-   Words may contain diaeresis; e.g., `naïve`.
-   Words may contain dashes; e.g., `self-deluded`, `self-confident`. 

</section>

<!-- /.notes -->

<section class="examples">

<!-- TODO: more creative example; possibly counting the number of negative words per sentence in two pieces of text. -->

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var afinn111 = require( '@stdlib/datasets/afinn-111' );

var words;
var dict;
var len;
var i;

words = afinn111();

// Convert to a dictionary...
len = words.length;
dict = {};
for ( i = 0; i < len; i++ ) {
    dict[ words[i][0] ] = words[i][1];
}
console.dir( dict );
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: afinn-111 [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --format fmt          Output format: 'csv' or 'ndjson'.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   The CLI supports two output formats: comma-separated values ([CSV][csv]) and newline-delimited JSON ([NDJSON][ndjson]). The default output format is [CSV][csv].

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ afinn-111
word,valence
abandon,-2
abandoned,-2
abandons,-2
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

* * *

<section class="references">

## References

-   Nielsen, Finn Årup. 2011. "A new ANEW: Evaluation of a word list for sentiment analysis in microblogs." In _Proceedings of the ESWC2011 Workshop on 'Making Sense of Microposts': Big Things Come in Small Packages._, 718:93–98. CEUR Workshop Proceedings. <http://ceur-ws.org/Vol-718/paper_16.pdf>.
-   Hansen, Lars Kai, Adam Arvidsson, Finn Årup Nielsen, Elanor Colleoni, and Michael Etter. 2011. "Good Friends, Bad News - Affect and Virality in Twitter." In _Future Information Technology: 6th International Conference, FutureTech 2011, Loutraki, Greece, June 28-30, 2011, Proceedings, Part II_, edited by James J. Park, Laurence T. Yang, and Changhoon Lee, 34–43. Berlin, Heidelberg: Springer Berlin Heidelberg. doi:[10.1007/978-3-642-22309-9_5][@hansen:2011a].

</section>

<!-- /.references -->

<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Attribution 1.0 License][odc-by-1.0] and their contents are licensed under a [Creative Commons Attribution 4.0 International Public License][cc-by-4.0]. The original dataset is attributed to Finn Årup Nielsen and can be found [here][afinn]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/datasets/afinn-96`][@stdlib/datasets/afinn-96]</span><span class="delimiter">: </span><span class="description">A list of English words rated for valence.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[afinn]: http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010

[@hansen:2011a]: https://doi.org/10.1007/978-3-642-22309-9_5

[valence]: https://en.wikipedia.org/wiki/Valence_%28psychology%29

[csv]: https://tools.ietf.org/html/rfc4180

[ndjson]: http://specs.frictionlessdata.io/ndjson/

[odc-by-1.0]: http://opendatacommons.org/licenses/by/1.0/

[cc-by-4.0]: http://creativecommons.org/licenses/by/4.0/

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

<!-- <related-links> -->

[@stdlib/datasets/afinn-96]: https://github.com/stdlib-js/datasets/tree/main/afinn-96

<!-- </related-links> -->

</section>

<!-- /.links -->
