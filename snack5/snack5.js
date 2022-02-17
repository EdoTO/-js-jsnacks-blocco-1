const numbers =[]

for(let i = 0; i < 6; i++) {
    const number = prompt('Metti un numero');
    console.log(number)

    if(number % 2 === 1) {
        numbers.push(number)
    }
}