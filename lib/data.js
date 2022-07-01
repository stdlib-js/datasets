/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Namespace.
*
* @private
* @namespace datasets
*/
var datasets = {};

/**
* @private
* @name AFINN_96
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/afinn-96}
*/
setReadOnly( datasets, 'AFINN_96', require( './../afinn-96' ) );

/**
* @private
* @name AFINN_111
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/afinn-111}
*/
setReadOnly( datasets, 'AFINN_111', require( './../afinn-111' ) );

/**
* @private
* @name ANSCOMBES_QUARTET
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/anscombes-quartet}
*/
setReadOnly( datasets, 'ANSCOMBES_QUARTET', require( './../anscombes-quartet' ) );

/**
* @private
* @name BERNDT_CPS_WAGES_1985
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/berndt-cps-wages-1985}
*/
setReadOnly( datasets, 'BERNDT_CPS_WAGES_1985', require( './../berndt-cps-wages-1985' ) );

/**
* @private
* @name CDC_NCHS_US_BIRTHS_1969_1988
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/cdc-nchs-us-births-1969-1988}
*/
setReadOnly( datasets, 'CDC_NCHS_US_BIRTHS_1969_1988', require( './../cdc-nchs-us-births-1969-1988' ) );

/**
* @private
* @name CDC_NCHS_US_BIRTHS_1994_2003
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/cdc-nchs-us-births-1994-2003}
*/
setReadOnly( datasets, 'CDC_NCHS_US_BIRTHS_1994_2003', require( './../cdc-nchs-us-births-1994-2003' ) );

/**
* @private
* @name CDC_NCHS_US_INFANT_MORTALITY_BW_1915_2013
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/cdc-nchs-us-infant-mortality-bw-1915-2013}
*/
setReadOnly( datasets, 'CDC_NCHS_US_INFANT_MORTALITY_BW_1915_2013', require( './../cdc-nchs-us-infant-mortality-bw-1915-2013' ) );

/**
* @private
* @name CMUDICT
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/cmudict}
*/
setReadOnly( datasets, 'CMUDICT', require( './../cmudict' ) );

/**
* @private
* @name DALE_CHALL_NEW
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/dale-chall-new}
*/
setReadOnly( datasets, 'DALE_CHALL_NEW', require( './../dale-chall-new' ) );

/**
* @private
* @name EMOJI
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/emoji}
*/
setReadOnly( datasets, 'EMOJI', require( './../emoji' ) );

/**
* @private
* @name EMOJI_CODE_PICTO
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/emoji-code-picto}
*/
setReadOnly( datasets, 'EMOJI_CODE_PICTO', require( './../emoji-code-picto' ) );

/**
* @private
* @name EMOJI_PICTO_CODE
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/emoji-picto-code}
*/
setReadOnly( datasets, 'EMOJI_PICTO_CODE', require( './../emoji-picto-code' ) );

/**
* @private
* @name FEMALE_FIRST_NAMES_EN
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/female-first-names-en}
*/
setReadOnly( datasets, 'FEMALE_FIRST_NAMES_EN', require( './../female-first-names-en' ) );

/**
* @private
* @name FIVETHIRTYEIGHT_FFQ
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/fivethirtyeight-ffq}
*/
setReadOnly( datasets, 'FIVETHIRTYEIGHT_FFQ', require( './../fivethirtyeight-ffq' ) );

/**
* @private
* @name FRB_SF_WAGE_RIGIDITY
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/frb-sf-wage-rigidity}
*/
setReadOnly( datasets, 'FRB_SF_WAGE_RIGIDITY', require( './../frb-sf-wage-rigidity' ) );

/**
* @private
* @name HARRISON_BOSTON_HOUSE_PRICES
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/harrison-boston-house-prices}
*/
setReadOnly( datasets, 'HARRISON_BOSTON_HOUSE_PRICES', require( './../harrison-boston-house-prices' ) );

/**
* @private
* @name HARRISON_BOSTON_HOUSE_PRICES_CORRECTED
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/harrison-boston-house-prices-corrected}
*/
setReadOnly( datasets, 'HARRISON_BOSTON_HOUSE_PRICES_CORRECTED', require( './../harrison-boston-house-prices-corrected' ) );

/**
* @private
* @name HERNDON_VENUS_SEMIDIAMETERS
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/herndon-venus-semidiameters}
*/
setReadOnly( datasets, 'HERNDON_VENUS_SEMIDIAMETERS', require( './../herndon-venus-semidiameters' ) );

/**
* @private
* @name IMG_ACANTHUS_MOLLIS
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/img-acanthus-mollis}
*/
setReadOnly( datasets, 'IMG_ACANTHUS_MOLLIS', require( './../img-acanthus-mollis' ) );

/**
* @private
* @name IMG_AIRPLANE_FROM_ABOVE
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/img-airplane-from-above}
*/
setReadOnly( datasets, 'IMG_AIRPLANE_FROM_ABOVE', require( './../img-airplane-from-above' ) );

/**
* @private
* @name IMG_ALLIUM_OREOPHILUM
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/img-allium-oreophilum}
*/
setReadOnly( datasets, 'IMG_ALLIUM_OREOPHILUM', require( './../img-allium-oreophilum' ) );

/**
* @private
* @name IMG_BLACK_CANYON
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/img-black-canyon}
*/
setReadOnly( datasets, 'IMG_BLACK_CANYON', require( './../img-black-canyon' ) );

/**
* @private
* @name IMG_DUST_BOWL_HOME
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/img-dust-bowl-home}
*/
setReadOnly( datasets, 'IMG_DUST_BOWL_HOME', require( './../img-dust-bowl-home' ) );

/**
* @private
* @name IMG_FRENCH_ALPINE_LANDSCAPE
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/img-french-alpine-landscape}
*/
setReadOnly( datasets, 'IMG_FRENCH_ALPINE_LANDSCAPE', require( './../img-french-alpine-landscape' ) );

/**
* @private
* @name IMG_LOCOMOTION_HOUSE_CAT
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/img-locomotion-house-cat}
*/
setReadOnly( datasets, 'IMG_LOCOMOTION_HOUSE_CAT', require( './../img-locomotion-house-cat' ) );

/**
* @private
* @name IMG_LOCOMOTION_NUDE_MALE
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/img-locomotion-nude-male}
*/
setReadOnly( datasets, 'IMG_LOCOMOTION_NUDE_MALE', require( './../img-locomotion-nude-male' ) );

/**
* @private
* @name IMG_MARCH_PASTORAL
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/img-march-pastoral}
*/
setReadOnly( datasets, 'IMG_MARCH_PASTORAL', require( './../img-march-pastoral' ) );

/**
* @private
* @name IMG_NAGASAKI_BOATS
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/img-nagasaki-boats}
*/
setReadOnly( datasets, 'IMG_NAGASAKI_BOATS', require( './../img-nagasaki-boats' ) );

/**
* @private
* @name LIU_NEGATIVE_OPINION_WORDS
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/liu-negative-opinion-words-en}
*/
setReadOnly( datasets, 'LIU_NEGATIVE_OPINION_WORDS_EN', require( './../liu-negative-opinion-words-en' ) );

/**
* @private
* @name LIU_POSITIVE_OPINION_WORDS
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/liu-positive-opinion-words-en}
*/
setReadOnly( datasets, 'LIU_POSITIVE_OPINION_WORDS_EN', require( './../liu-positive-opinion-words-en' ) );

/**
* @private
* @name MALE_FIRST_NAMES_EN
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/male-first-names-en}
*/
setReadOnly( datasets, 'MALE_FIRST_NAMES_EN', require( './../male-first-names-en' ) );

/**
* @private
* @name MINARD_NAPOLEONS_MARCH
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/minard-napoleons-march}
*/
setReadOnly( datasets, 'MINARD_NAPOLEONS_MARCH', require( './../minard-napoleons-march' ) );

/**
* @private
* @name MOBY_DICK
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/moby-dick}
*/
setReadOnly( datasets, 'MOBY_DICK', require( './../moby-dick' ) );

/**
* @private
* @name MONTH_NAMES_EN
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/month-names-en}
*/
setReadOnly( datasets, 'MONTH_NAMES_EN', require( './../month-names-en' ) );

/**
* @private
* @name NIGHTINGALES_ROSE
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/nightingales-rose}
*/
setReadOnly( datasets, 'NIGHTINGALES_ROSE', require( './../nightingales-rose' ) );

/**
* @private
* @name PACE_BOSTON_HOUSE_PRICES
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/pace-boston-house-prices}
*/
setReadOnly( datasets, 'PACE_BOSTON_HOUSE_PRICES', require( './../pace-boston-house-prices' ) );

/**
* @private
* @name PRIMES_100K
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/primes-100k}
*/
setReadOnly( datasets, 'PRIMES_100K', require( './../primes-100k' ) );

/**
* @private
* @name SAVOY_STOPWORDS_FIN
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/savoy-stopwords-fin}
*/
setReadOnly( datasets, 'SAVOY_STOPWORDS_FIN', require( './../savoy-stopwords-fin' ) );

/**
* @private
* @name SAVOY_STOPWORDS_FR
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/savoy-stopwords-fr}
*/
setReadOnly( datasets, 'SAVOY_STOPWORDS_FR', require( './../savoy-stopwords-fr' ) );

/**
* @private
* @name SAVOY_STOPWORDS_GER
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/savoy-stopwords-ger}
*/
setReadOnly( datasets, 'SAVOY_STOPWORDS_GER', require( './../savoy-stopwords-ger' ) );

/**
* @private
* @name SAVOY_STOPWORDS_IT
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/savoy-stopwords-it}
*/
setReadOnly( datasets, 'SAVOY_STOPWORDS_IT', require( './../savoy-stopwords-it' ) );

/**
* @private
* @name SAVOY_STOPWORDS_POR
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/savoy-stopwords-por}
*/
setReadOnly( datasets, 'SAVOY_STOPWORDS_POR', require( './../savoy-stopwords-por' ) );

/**
* @private
* @name SAVOY_STOPWORDS_SP
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/savoy-stopwords-sp}
*/
setReadOnly( datasets, 'SAVOY_STOPWORDS_SP', require( './../savoy-stopwords-sp' ) );

/**
* @private
* @name SAVOY_STOPWORDS_SWE
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/savoy-stopwords-swe}
*/
setReadOnly( datasets, 'SAVOY_STOPWORDS_SWE', require( './../savoy-stopwords-swe' ) );

/**
* @private
* @name SOTU
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/sotu}
*/
setReadOnly( datasets, 'SOTU', require( './../sotu' ) );

/**
* @private
* @name SPACHE_REVISED
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/spache-revised}
*/
setReadOnly( datasets, 'SPACHE_REVISED', require( './../spache-revised' ) );

/**
* @private
* @name SPAM_ASSASSIN
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/spam-assassin}
*/
setReadOnly( datasets, 'SPAM_ASSASSIN', require( './../spam-assassin' ) );

/**
* @private
* @name SSA_US_BIRTHS_2000_2014
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/ssa-us-births-2000-2014}
*/
setReadOnly( datasets, 'SSA_US_BIRTHS_2000_2014', require( './../ssa-us-births-2000-2014' ) );

/**
* @private
* @name STANDARD_CARD_DECK
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/standard-card-deck}
*/
setReadOnly( datasets, 'STANDARD_CARD_DECK', require( './../standard-card-deck' ) );

/**
* @private
* @name STOPWORDS_EN
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/stopwords-en}
*/
setReadOnly( datasets, 'STOPWORDS_EN', require( './../stopwords-en' ) );

/**
* @private
* @name SUTHAHARAN_MULTI_HOP_SENSOR_NETWORK
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/suthaharan-multi-hop-sensor-network}
*/
setReadOnly( datasets, 'SUTHAHARAN_MULTI_HOP_SENSOR_NETWORK', require( './../suthaharan-multi-hop-sensor-network' ) );

/**
* @private
* @name SUTHAHARAN_SINGLE_HOP_SENSOR_NETWORK
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/suthaharan-single-hop-sensor-network}
*/
setReadOnly( datasets, 'SUTHAHARAN_SINGLE_HOP_SENSOR_NETWORK', require( './../suthaharan-single-hop-sensor-network' ) );

/**
* @private
* @name US_STATES_ABBR
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/us-states-abbr}
*/
setReadOnly( datasets, 'US_STATES_ABBR', require( './../us-states-abbr' ) );

/**
* @private
* @name US_STATES_CAPITALS
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/us-states-capitals}
*/
setReadOnly( datasets, 'US_STATES_CAPITALS', require( './../us-states-capitals' ) );

/**
* @private
* @name US_STATES_CAPITALS_NAMES
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/us-states-capitals-names}
*/
setReadOnly( datasets, 'US_STATES_CAPITALS_NAMES', require( './../us-states-capitals-names' ) );

/**
* @private
* @name US_STATES_NAMES
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/us-states-names}
*/
setReadOnly( datasets, 'US_STATES_NAMES', require( './../us-states-names' ) );

/**
* @private
* @name US_STATES_NAMES_CAPITALS
* @memberof datasets
* @readonly
* @constant
* @type {Function}
* @see {@link module:@stdlib/datasets/us-states-names-capitals}
*/
setReadOnly( datasets, 'US_STATES_NAMES_CAPITALS', require( './../us-states-names-capitals' ) );


// EXPORTS //

module.exports = datasets;
