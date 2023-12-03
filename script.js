let edad = 26;
let peso = 80;
let altura = 175;
let factorActividad = 1.55;
let sexo = -161;
let mb = (10 * peso) + (6.25 * altura)- (5 * edad) + sexo;
let resultado = Math.round(mb * 1.55);
alert(resultado);