import capitalize from './capitalize';

it('capitalizes word', () => {
    expect(capitalize('test')).toBe('Test')
})