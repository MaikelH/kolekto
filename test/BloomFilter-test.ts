import * as sinon from "sinon";
import {assert as Assert} from "chai";
import {BloomFilter} from "../lib/BloomFilter";



describe("BloomFilter", () => {
	describe('Construction', () => {
		it('Should create bloomfilter with fpp of 0.03 when initialized', () => {
			let filter = new BloomFilter(216553,0.01);

			//Assert.equal(filter.expectedFpp(), 0.03);
		})
	});
});