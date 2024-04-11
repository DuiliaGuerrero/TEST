//Probar una calculadora
export const calcular: (operacion: string, num1: number, num2: number) => number = (operacion, num1, num2) => {
    switch (operacion) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                throw new Error("División por cero");
            }
            return num1 / num2;
        default:
            throw new Error("Operación no válida");
    }
};

//Obtener la longitud de una cadena:
export function obtenerLongitud(texto: string): number {
    return texto.length;
}

//Probar un objeto 
export interface Objeto {
    propiedad1: string;
    propiedad2: number;
}

export function modificarObjeto(objeto: Objeto): void {
    objeto.propiedad1 = "valor modificado";
    objeto.propiedad2 = 10;
}

//Convertir una cadena a mayúsculas
function aMayusculas(texto: string): string {
    return texto.toUpperCase();
}

//Probar una función con una excepción
export function funcionExcepcion(): void {
    throw new Error("Error intencionado");
}