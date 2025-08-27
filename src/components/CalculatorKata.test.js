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
    it('should return sum on custom single-character delimiter using //[delimiter]\\n syntax', () => {
      expect(addString('//;\n1;2')).toBe(3);
    });
    it('to throws exception error when a negative number is passed', () => {
      expect(() => addString('1,-2')).toThrow('negatives not allowed: -2');
    });
    it('ignores numbers greater than 1000', () => {
      expect(addString('2,1001')).toBe(2);
    });
  })