import { addString } from './calculator-kata/CalculatorKata';

describe('String Calculator kata', () => {
    it('returns 0 for an empty string', () => {
      expect(addString('')).toBe(0);
    });
    it('returns the number itself if only one number is provided', () => {
      expect(addString('1')).toBe(1);
    });
  })