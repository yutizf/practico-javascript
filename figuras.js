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

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.groupEnd();

//Circulo
console.group("Círculos");

function diametroCirculo(radio){
    return radio * 2;
}
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
} 

function areaCirculo(radio){
    return (radio * radio) * Math.PI;
} 

console.groupEnd();


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    hablar("El perímetro del cuadrado es de " + perimetro + "cm");
    //alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    hablar("El área del cuadrado es " + area + "cm2");
    //alert(area);
}

function hablar(texto){
    var utterance = new SpeechSynthesisUtterance(texto);
    window.speechSynthesis.speak(utterance);

}