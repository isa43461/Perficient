// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function translate2d(x, y){
    return (a, b) => [x + a, b + y]
}

function scale2d(x, y){
    return (a, b) => [x * a, y * b]
}

function composeTransformation(f, g){
    return (a, b) => {
        const [x, y] = f(a, b);
        return g(x, y)
    }
}

function memoizeTransform(f){
    let arr = [0, 0];
    let result;
    return (a, b) => {
        if(arr[0] === a && arr[1] === b){
            return result;
        } else{
            result = f(a, b);
            arr[0] = a;
            arr[1] = b;
            return result;
        }
        
    }
}

const moveCoordinatesRight2Px = translate2d(2, 0);
const result = moveCoordinatesRight2Px(4, 8);
console.log(result);

const doubleCoordinates = scale2d(2, 2);
const result2 = doubleCoordinates(6, -3);
console.log(result2);


const composedTransformations = composeTransformation(
  moveCoordinatesRight2Px,
  doubleCoordinates
);
const result3 = composedTransformations(0, 1);

console.log(result3);

const tripleScale = scale2d(3, 3);
const memoizedScale = memoizeTransform(tripleScale);
console.log(memoizedScale(4, 3));
console.log(memoizedScale(4, 3));

//https://exercism.org/tracks/javascript/exercises/coordinate-transformation
