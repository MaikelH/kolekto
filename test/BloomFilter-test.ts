import {assert as Assert} from "chai";
import {BloomFilter} from "../lib/BloomFilter";

describe("BloomFilter", () => {
	describe('Construction', () => {
		it('Should create bloomfilter with fpp of 0.03 when initialized', () => {
			let filter = new BloomFilter<Number>(10000);

			Assert.isTrue(isEqualFloat(filter.expectedFpp(), 0.03, 0.0001))
		})
	});

	describe('put', () => {
		it("Should correctly put item in bloom filter", () => {
			let filter  = new BloomFilter<string>(1000);

			Assert.equal(filter.getInsertedAmount(), 0);
			let name = "test";
			filter.put(name);

			Assert.isTrue(filter.mightContain(name));
			Assert.equal(filter.getInsertedAmount(), 1);

			Assert.isFalse(filter.mightContain("BlaBla"))
		});

		it("Should correctly deny that item is in set", () => {
			let filter  = new BloomFilter<string>(100);

			Assert.equal(filter.getInsertedAmount(), 0);
			Assert.isFalse(filter.mightContain("BlaBla"))
		});
	});

	function isEqualFloat(actual: number, expected: number, epsilon: number) : boolean{
		return actual <= expected + epsilon && actual >= expected - epsilon;
	}
});