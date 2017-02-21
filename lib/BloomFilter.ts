

export class BloomFilter<T> {
	constructor(expectedInsertions: number);

	constructor(expectedInsertions: number, fpp?: number) {

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
}