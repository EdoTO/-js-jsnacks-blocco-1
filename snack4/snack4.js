const guests = ["Luca", "Marco", "Edo", "Gianni", "Pippo"]

const myguest = prompt('Inserisci il nome')

console.log('Nome inserito:', myguest)
let find = false

for (let i= 0; i < guests.length; i++) {
    const name = guests[i];

    if ( myguest.toLowerCase() === guests.toLowerCase()) {
        console.log("Eccolo qua! Trovato.")
    }
    find= true
}

if( find === true ){
    console.log('Prego, entri pure')
} else {
    console.log('Se ne vada')
}