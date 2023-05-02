//1. Get the first card

const deck = [5, 9, 7, 1, 8];

function getFirstCard(deck){
    const [first] = deck;
    return first;
}

console.log(getFirstCard(deck));

//2. Get the second card

const deck2 = [3, 2, 10, 6, 7];

function getSecondCard(deck){
    const [first, second] = deck;
    return second;
}

console.log(getSecondCard(deck2));

//3. Swap the first two cards

const deck3 = [10, 7, 3, 8, 5];

function swapTopTwoCards(deck){
    const first = deck[0];
    const second = deck[1];
    deck[1] = first;
    deck[0] = second;
    return deck
}

console.log(swapTopTwoCards(deck3));

// 4.. Discard the top card

const deck4 = [2, 5, 4, 9, 3];

function discardTopCard(deck){
    const [a, ...others] = deck4;
    return [a, others];
}
console.log(discardTopCard(deck4));

// 5. Insert face cards

const deck5 = [5, 4, 7, 10];

function insertFaceCards(deck){
    const cards = ['jack', 'queen', 'king'];
    const [a, ...others] = deck5;
    return [a, ...cards, ...others]
}
console.log(insertFaceCards(deck5));

//https://exercism.org/tracks/javascript/exercises/elyses-destructured-enchantments
