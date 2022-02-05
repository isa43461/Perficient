'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positive = 0;
    let negative = 0;
    let zeros = 0;
    let n = arr.length;
    
    for(let i = 0; i < n; i++){
        let num = Math.sign(arr[i]);
        if(num == 1){
            positive += 1
        }
        else if(num == -1){
            negative += 1
        }
        else{
            zeros += 1
        }
    }
    
    positive = positive/n;
    console.log(positive.toFixed(6));   
    
    negative = negative/n;
    console.log(negative.toFixed(6));  
    
    zeros = zeros/n;
    console.log(zeros.toFixed(6));   

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
