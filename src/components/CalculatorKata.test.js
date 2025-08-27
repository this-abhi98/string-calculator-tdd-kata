import { addString } from './calculator-kata/CalculatorKata';

describe('String Calculator kata', () => {
    it('returns 0 for an empty string', () => {
      expect(addString('')).toBe(0);
    });
  })