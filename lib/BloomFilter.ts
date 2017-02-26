

export class BloomFilter<T> {
	private _fpp: number;

	constructor(expectedInsertions: number, fpp?: number) {
		if(fpp == undefined) {
			fpp = 0.03;

			this.initialize(expectedInsertions, fpp);
		}
		else {
			this.initialize(expectedInsertions, fpp);
		}

	}

	public expectedFpp() : number {
		return 0;
	}

	public isCompatible(that: BloomFilter<T>) {

	}

	public mightContain(object : T) {

	}

	public put(object: T) {

	}

	public putAll(that: BloomFilter<T>) {

	}

	private initialize(expectedInsertions: number, fpp: number) {
		let numberOfBits = this.calculateNumberOfBits(expectedInsertions, fpp);
		let hashFunctions = this.calculateOptimalNumberHashFunctions(numberOfBits, expectedInsertions);

		console.log(numberOfBits, hashFunctions);
	}

	/**
	 * Calculate the expected probability of false positives.
	 *
	 * See for more information: https://en.wikipedia.org/wiki/Bloom_filter#Probability_of_false_positives
	 *
	 * @param expectedInsertions
	 * @param numberOfBits
	 * @param numberOfHashes
	 */
	private calculateErrorRate(expectedInsertions: number, numberOfBits: number, numberOfHashes: number) {

	}

	private calculateNumberOfBits(expectedInsertions: number, fpp: number) : number {
		return Math.ceil((-1* expectedInsertions * Math.log(fpp)) / Math.pow(Math.log(2), 2));
	}

	/**
	 * Calculate optimal number of hash functions.
	 *
	 * @param numberOfBits
	 * @param expectedInsertions
	 */
	private calculateOptimalNumberHashFunctions(numberOfBits: number, expectedInsertions: number) : number {
		return Math.ceil((numberOfBits / expectedInsertions) * Math.log(2));
	}
}