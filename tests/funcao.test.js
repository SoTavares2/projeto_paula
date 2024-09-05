const quadrado = require('../src/funcao');

test('calcula o quadrado de um número inteiro', () => {
    expect(quadrado(2)).toBe(4);
});

test('calcula o quadrado de um número decimal', () => {
    expect(quadrado(2.5)).toBeCloseTo(6.25);
});

test('calcula o quadrado de zero', () => {
    expect(quadrado(0)).toBe(0);
});

test('calcula o quadrado de um número negativo', () => {
    expect(quadrado(-3)).toBe(9);
});