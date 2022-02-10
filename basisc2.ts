type Combinable = number | string;


function combine(n1: Combinable, n2: Combinable ){
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number'){
        result = n1 + n2;
    }else{
        result = n1.toString() + n2.toString();
    }
    return result;
}

const combineAges = combine(30, 25);
console.log(combineAges);

const combineNames = combine('max', 'susy');
console.log(combineNames);


function add2(n1: number, n2: number){
    return n1 + n2;
}

function printRes(num: number): void{
    console.log('Result', num);
}

printRes(add2(5, 12));