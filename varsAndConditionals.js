/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let kenobiAttack = 35
let skywalkerAttack = 35

if(kenobiAttack > skywalkerAttack) {
    console.log('Obiwan has a better attack');
} else if (skywalkerAttack > kenobiAttack) {
    console.log ('Anakin has a better attack');
} else {
    console.log('They have the same attack');
}

let kenobiHealth = 100;
let kneobiDefense = 0;

if(skywalkerAttack >= kenobiHealth) {
    console.log('Obiwan was slain');
} else {
    kenobiHealth -= skywalkerAttack;
    console.log("Obiwan's health is now " + kenobiHealth);
}

kneobiDefense += 30;

if(kenobiHealth + 50 >= 100) {
    kenobiHealth = 100;
} else {
    kenobiHealth += 50;
}

for (let i = 0; i < 5; i++) {
    kenobiHealth -= (skywalkerAttack - kneobiDefense);
    console.log(`Obiwan's health is now ${kenobiHealth}`);
}

while(kenobiHealth > 0) {
    kenobiHealth -= (skywalkerAttack - kneobiDefense);
    console.log(kenobiHealth);
    if(kenobiHealth <= 0) {
        console.log('Obiwan has been slain');
    }
}