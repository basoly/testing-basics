import caesarCipher from "./caesarCipher"

test('caesarCipher test 1', () => {
    expect(caesarCipher('xyz',3)).toBe('abc')
}) 

test('caesarCipher test 2', () => {
    expect(caesarCipher('HeLLo',3)).toBe('KhOOr')
})

test('caesarCipher test 3', () => {
    expect(caesarCipher('Hello, World!',3)).toBe('Khoor, Zruog!')
})

