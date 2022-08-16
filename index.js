// Code your solutions in this file

function writeCards(name) {
    let cardNames = []
    for (let index = 0; index < name.length; index++) {
        cardNames.push(`Thank you, ${name[index]}, for the wonderful surprise gift!`);
        } 
    return cardNames;   
}

function countDown(number) {
    while (number>=0) {
        console.log(number); number--;
    }
}