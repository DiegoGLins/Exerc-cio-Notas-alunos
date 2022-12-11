let nota1 = parseFloat(prompt('Digite a 1° nota do aluno'));
let nota2 = parseFloat(prompt('Digite a 2° nota do aluno'));
let nota3 = parseFloat(prompt('Digite a 3° nota do aluno'));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 9) {
  document.write('Aprovado com nota excelente');
} else if (media < 9 && media > 6) {
  document.write('Aprovado com uma boa nota');
} else {
  const recuperação = parseFloat(prompt('Digite a nota de recuperação'));
}
if (recuperação >= 7) {
  document.write('Aprovado com nota de recuperação');
} else {
  document.write('Nota de recuperação abaixo da média. Reprovado');
}
