let number;

do {
    number = prompt('Inserisci un numero con 4 cifre');

} while (number.length !== 4 || isNaN(num)){}

console.log('numero scelto:', number)

const dividedNumber = number.split('');

console.log('Ecco ogni cifra presa singolarmente:', dividedNumber);

let sum = 0;

for ( let i = 0; i < dividedNumber.length; i++) {

    number = dividedNumber[i];

    sum += number
}

console.log(sum)