import createCalculator from './calculator';
import add from './add';
import subtract from './subtract';
import multiply from './multiply';
import divide from './divide';

test('calculator object add method works', () => {
    expect(createCalculator().add(2,3)).toBe(5);
})

test('calculator object subtract method works', () => {
    expect(createCalculator().subtract(5,2)).toBe(3);
})

test('calculator object multiply method works', () => {
    expect(createCalculator().multiply(3,2)).toBe(6);
})

test('calculator object multiply method works', () => {
    expect(createCalculator().divide(6,2)).toBe(3);
})