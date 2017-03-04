# Kolekto

Collections and datastructures library for Typescript ( and javascript).

## Index

- [Installation](#installation)
- [API documentation](http://blog.chronos-technology.nl/kolekto/)
- [Collections](#collections)
  - [BitArray](#bitset)
  - [BloomFilter](#bloomfilter)

## Installation

```
npm install kolekto 
```

Import the parts you want.

```typescript
import {BloomFilter} from "kolekto"

let filter = new BloomFilter<string>(10000, 0.03);
```

## Collections

### BitArray

### BloomFilter
A Bloom filter is a space-efficient probabilistic data structure that is used to test whether an element is a member
of a set.

False positives are possible but false negatives not. In laymen's terms this means that an element maybe be in the set
or definitely not in the set. The underlying hash function is the [Google's FarmHash](https://github.com/google/farmhash)
family of hash functions. By using the the C implementation of farmhash a high insertion can be achieved.

The interface is modeled after the BloomFilter in the Google Guava library.

Example:
```typescript
import {BloomFilter} from "kolekto"

// Create a bloomfilter with 10000 expected insertions and false positive probability of 3%
let filter = new BloomFilter<string>(10000, 0.03);

// Put item in bloomfilter
filter.put("test");

// Check if item is in bloom filter, return true if it might contain element
let result = filter.mightContain("test"); 
```