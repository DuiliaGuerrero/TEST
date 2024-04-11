import { calcular, obtenerLongitud } from "./index";

describe('Función calcular', () => {
    it('Realiza la suma correctamente', () => {
        expect(calcular('+', 5, 3)).toBe(8);
    });

    it('Realiza la resta correctamente', () => {
        expect(calcular('-', 10, 2)).toBe(8);
    });

    it('Realiza la multiplicación correctamente', () => {
        expect(calcular('*', 4, 6)).toBe(24);
    });

    it('Realiza la división correctamente (denominador distinto de cero)', () => {
        expect(calcular('/', 12, 3)).toBe(4);
    });

    it('Lanza un error por división por cero', () => {
        expect(() => calcular('/', 10, 0)).toThrow(); // Using toThrow()
    });

    it('Lanza un error por operaciones inválidas', () => {
        expect(() => calcular('%', 7, 2)).toThrow(); // Using toThrow()
    });
});


describe('Función obtenerLongitud', () => {
    it('debería obtener la longitud de una cadena', () => {
        const texto = 'hola mundo';
        const longitudEsperada = 10;
        expect(obtenerLongitud(texto)).toBe(longitudEsperada);
    });

    it('debería devolver 0 para una cadena vacía', () => {
        const texto = '';
        expect(obtenerLongitud(texto)).toBe(0);
    });
});


