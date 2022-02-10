function add1(n1: number, n2: number, showResult: boolean){
    const result = n1 + n2;
    if(showResult){
        console.log(result);
    }else{
        return n1 + n2;

    }
}

let number1 = 5;
const number2 = 2.8;
const printResult = true;

add1(number1,number2, printResult);

