

export class BitArray {
	private size: number;
	private data: number[];

	constructor(size: number) {
		if(Number.isInteger(size) === false) {
			throw new Error("Size must be an integer.")
		}

		if(size < 1) {
			throw new Error("Size must be bigger then 0.")
		}

		this.size = size;

		// We divide here by 32, since bit operations in javascript can only be done on 32 bit numbers (because reasons).
		let arraySize: number = Math.ceil(size / 32);

		this.data = new Array<number>(arraySize);
	}

	public getSize() : number {
		return this.size;
	}

	/**
	 * Set the specific bit on the given position to the given value. The data can be 0 or 1.
	 *
	 * @param position s
	 * @param data
	 */
	public set(position: number, data: number) {

		if(position >= this.size) {
			throw new Error("Position is outside of bounds.")
		}

		let arrayPosition = Math.floor(position / 32);

		let number = this.data[arrayPosition];

		number |= 1 << position;

		this.data[arrayPosition] = number;
	}

	public isBitSet(position: number) : boolean {
		if(position >= this.size) {
			throw new Error("Position is outside of bounds.")
		}

		let arrayPosiition = Math.floor(position / 32);

		let arrayPosition = Math.floor(position / 32);

		let number = this.data[arrayPosition];

		return (number & (1 << position)) != 0;
	}

	/**
	 * Returns the memory usage in bytes of the underlying data array;
	 *
	 * @return {number}
	 */
	public getMemorySize() {
		return this.data.length * 8;
	}
}