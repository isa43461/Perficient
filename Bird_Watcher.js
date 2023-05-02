birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
birdsPerDay2 = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1,3,4,5,7,8,9,0];
birdsPerDay3 = [2, 5, 0, 7, 4, 1];

function totalBirdCount(birdsPerDay){
    let ans = 0;
    for(i of birdsPerDay){
        ans += i
    }
    return ans
}

function birdsInWeek(A, num){
    let ans = 0;
    let weeks = 0;
    let flag = true;
    let n = A.length;
    for(let i = 0; i < n; i++){
        if(weeks <= num){
            if(i % 7 === 0){
                weeks += 1;
                if(weeks <= num){
                    ans = A[i];
                }
            } else {
                ans += A[i];
            }
        }
    }
    return ans
}

function fixBirdCountLog(birdsPerDay){
    let n = birdsPerDay.length;
    for(let i = 0; i < n; i++){
        if(i % 2 === 0){
            birdsPerDay[i] += 1 
        }
    }
    return birdsPerDay
}

console.log(totalBirdCount(birdsPerDay));
console.log(birdsInWeek(birdsPerDay2, 2));
console.log(fixBirdCountLog(birdsPerDay3))
//https://exercism.org/tracks/javascript/exercises/bird-watcher
