import {assert as Assert} from "chai";
import {BloomFilter} from "../lib/BloomFilter";

describe("BloomFilter", () => {
	describe('Construction', () => {
		it('Should create bloomfilter with fpp of 0.03 when initialized', () => {
			let filter = new BloomFilter<Number>(10000);

			Assert.isTrue(isEqualFloat(filter.expectedFpp(), 0.03, 0.0001))
		})
	});

	function isEqualFloat(actual: number, expected: number, epsilon: number) : boolean{
		if(actual <= expected + epsilon && actual >= expected - epsilon) {
			return true;
		}

		return false;
	}
});