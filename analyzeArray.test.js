import analyzeArray from './analyzeArray'

test('Function averages correctly', () => {
    expect(analyzeArray([2, 4, 6]).average).toBe(4)
}) 

test('Function computes minimum', () => {
    expect(analyzeArray([2, 4, 6]).min).toBe(2)
})

test('Function computes maximum', () => {
    expect(analyzeArray([2, 4, 6]).max).toBe(6)
})

test('Function computes length', () => {
    expect(analyzeArray([2, 4, 6]).length).toBe(3)
})