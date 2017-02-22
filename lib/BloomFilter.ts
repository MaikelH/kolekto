

export class BloomFilter<T> {
	private _fpp: number;

	constructor(expectedInsertions: number);

	constructor(private expectedInsertions: number, fpp?: number) {
		if(fpp == undefined) {
			fpp = 0.03;

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
}