// Declaração de Variáveis

const prompt = require('prompt-sync')();

const userName = prompt('Digite o seu nome: ');
const lastName = prompt('Digite o seu sobrenome: ');
const weight = prompt('Digite seu peso: ');
const height = prompt('Digite sua altura: ');
const hospitalizationDate = prompt('Digite a data da sua internação(modelo --/--/----): ');
const diabetic = prompt('Digite se você é diabético(a) ou não: ')
console.log(`Nome: ${userName}`);
console.log(`Sobrenome: ${lastName}`);
console.log(`Seu peso é: ${weight}`);
console.log(`Sua altura é: ${height}`);
console.log(`Data da internação: ${hospitalizationDate}`);
console.log(`Tem diabetes: ${diabetic}`);
