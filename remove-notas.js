const notas = [10, 6, 8, 5.5, 10];

//Removendo elementos dentro de um Array/Lista (Sempre removerá o último elemento)
notas.pop();

console.log(notas);


const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A média é ${media}`);
