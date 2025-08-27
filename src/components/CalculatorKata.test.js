import { addString } from './calculator-kata/CalculatorKata';

describe('String Calculator kata', () => {
    it('returns 0 for an empty string', () => {
      expect(addString('')).toBe(0);
    });
    it('returns the number itself if only one number is provided', () => {
      expect(addString('1')).toBe(1);
    });
    it('returns the sum of all the comma-separated numbers', () => {
      expect(addString('1,2,3')).toBe(6);
    });
    it('returns the sum when newlines are used as delimiters as well', () => {
      expect(addString('1,2,3\n5,4')).toBe(15);
    });
  })