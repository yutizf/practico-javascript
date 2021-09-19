//Cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado*lado;  
}

console.groupEnd();

//Triangulo
console.group("Triángulos");
const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTriangulo=4;
const alturaTriangulo=5.5;

console.log("Los lados del Triangulo miden: "
        + ladoTriangulo1
        + "cm, "
        + ladoTriangulo2
        + "cm, "
        + baseTriangulo
        + "cm"
    );

console.log("la altura del triángulo es: " + alturaTriangulo); 

const perimetroTriangulo1=ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El prímetro del Triangulo es: " + perimetroTriangulo1 + "cm");

const areaTriangulo1=(baseTriangulo * alturaTriangulo)/2;
console.log("El área del Triangulo es: " + areaTriangulo1 + "cm2");
console.groupEnd();

//Circulo
console.group("Círculos");

const radioCirculo=4;
const diametroCirculo= radioCirculo *2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log("El radio del Círculo es: " + radioCirculo + "cm");
console.log("El diámetro del Círculo es: " + diametroCirculo + "cm");
console.log("El perímetro del Círculo es: " + perimetroCirculo + "cm");
console.log("El área del Círculo es: " + areaCirculo + "cm2");


console.groupEnd();


