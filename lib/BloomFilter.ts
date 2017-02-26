

import {BitArray} from "./collections/BitArray";
export class BloomFilter<T> {
	private _fpp: number;
	private data: BitArray;

	private expectedInsertions;

	constructor(expectedInsertions: number, fpp?: number) {
		this.expectedInsertions = expectedInsertions;

		if(fpp == undefined) {
			fpp = 0.03;

			this.initialize(expectedInsertions, fpp);
		}
		else {
			this.initialize(expectedInsertions, fpp);
		}

	}

	public expectedFpp() : number {
		return this.calculateErrorRate(this.expectedInsertions, this.data.getSize());
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

		this.data = new BitArray(numberOfBits);
	}

	/**
	 * Calculate the expected probability of false positives.
	 *
	 * See for more information: https://en.wikipedia.org/wiki/Bloom_filter#Probability_of_false_positives
	 *
	 * p = e^(-(m / n) * (ln(2)^2))
	 *
	 * @param expectedInsertions
	 * @param numberOfBits
	 * @param numberOfHashes
	 */
	private calculateErrorRate(expectedInsertions: number, numberOfBits: number) {
		return Math.pow(Math.E, (-(numberOfBits / expectedInsertions) * Math.pow(Math.log(2), 2)));
	}

	/**
	 * Calculate the optimal number of bits
	 *
	 * m = -n*ln(p) / (ln(2)^2)
	 *
	 * where m is the number of bits.
	 *
	 * @param expectedInsertions
	 * @param fpp
	 * @return {number}
	 */
	private calculateNumberOfBits(expectedInsertions: number, fpp: number) : number {
		return Math.ceil((-1* expectedInsertions * Math.log(fpp)) / Math.pow(Math.log(2), 2));
	}

	/**
	 * Calculate optimal number of hash functions.
	 *
	 * k = m/n * ln(2)
	 *
	 * where k is the number of hash functions.
	 *
	 * @param numberOfBits
	 * @param expectedInsertions
	 */
	private calculateOptimalNumberHashFunctions(numberOfBits: number, expectedInsertions: number) : number {
		return Math.ceil((numberOfBits / expectedInsertions) * Math.log(2));
	}
}