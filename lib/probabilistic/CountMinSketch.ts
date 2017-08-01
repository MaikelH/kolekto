let farmhash = require("farmhash");

/**
 * The count–min sketch (CM sketch) is a probabilistic data structure that serves as a frequency table of events in
 * a stream of data.
 *
 * References:
 * - https://en.wikipedia.org/wiki/Count%E2%80%93min_sketch
 * - https://web.stanford.edu/class/cs168/l/l2.pdf
 */
export class CountMinSketch<T> {
	private width: number;
	private rows: number;

	private hashFunctions: { (data: string) : number } [] = [];
	private counters: number[][] = [];

	/**
	 * Create Count Min Sketch where error is in is within a factor of epsilon with probability delta
	 *
	 * @param epsilon factor
	 * @param delta Probability that the error is within a factor of epsilon
	 */
	constructor(epsilon: number, delta: number) {
		this.width = Math.ceil(Math.E / epsilon);
		this.rows = Math.ceil(Math.log(1/delta));

		this.hashFunctions = this.initializeHashFunctions(this.rows, this.width);
	}

	/**
	 * Add object to the counter.
	 * @param object
	 */
	public increment(object: T): void {

	}

	/**
	 * Get count for object.
	 *
	 * @param object
	 * @return {number}
	 */
	public count(object: T): number {
		return 0;
	}

	private initializeHashFunctions(hashFunctions: number, width: number) : { (data: string) : number } []{
		let functions: { (data: string) : number } [] = [];

		// By using double hashing we only need 2 hash functions to create an unlimited number of hash functions.
		let hashFunction1 = this.createHashFunction();
		let hashFunction2 = this.createHashFunction();

		// Create HashFunctions
		for (let i = 0; i < hashFunctions; i++) {
			functions[i] = (data: string) => {
				return (hashFunction1(data) + i * hashFunction2(data)) % width;
			}
		}

		return functions;
	}

	private createHashFunction(): (data: string) => number {
		let seed = Math.floor(Math.random() * 1000000);

		return function (data: string): number {
			let buffer = Buffer.from(data);

			return farmhash.hash32WithSeed(buffer, seed);
		}
	}
}
