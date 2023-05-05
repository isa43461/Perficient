let p1 = Promise.resolve(33);
let p2 = new Promise((resolve) => setTimeout(() => resolve(66), 0));
let p3 = new Promise((resolve, reject) => {
  reject("reject");
});
let p4 =  99; 
let p5 = new Promise((resolve, reject) => {
  reject("reject");
});;
let p6 = new Promise((resolve) => setTimeout(() => resolve(69), 6800));
let p7 = new Promise((resolve) => setTimeout(() => resolve(736), 1000));

function allPromise(prom){
    return new Promise(async (resolve, reject) => {
        let A = [];
        if(prom.length === 0){
            return resolve(prom)
        }
        else{
            for(let i = 0; i < prom.length; i++){
                try{
                   const value = await prom[i];
                   A.push(value);
                }
                catch(err){
                    reject(new Error('A promise has been rejected!'))
                }
            }
            resolve(A)
        }
    })
}

allPromise([p1, p2, p4]).then((ej) => console.log(ej)).catch((error) => console.log(error));

function allSettlePromise(prom){
    return new Promise(async (resolve, reject) => {
        let A = [];
        if(prom.length === 0){
            return resolve(prom)
        }
        else{
            for(let i = 0; i < prom.length; i++){
                try{
                   const val = await prom[i];
                   A.push({status: 'fulfilled', value: val});
                }
                catch(err){
                    A.push({status: 'rejected', value: err});
                }
            }
            resolve(A)
        }
    })
}

allSettlePromise([p1, p2, p4, p3]).then((ej) => console.log(ej));

function racePromise(prom){
    return new Promise((resolve, reject) => {
        if(prom.length === 0) return resolve(prom);
        else prom.forEach(item => item.then(vl => resolve(vl)));
    })
}

racePromise([p2, p7, p6]).then((e) => console.log(e));

function anyPromise(prom){
    return new Promise(async (resolve, reject) => {
        n = prom.length;
        j = 0;
        errors = [];
        if(n === 0){
            return resolve(prom)
        }
        else{
            for(let i = 0; i < n; i++){
                try{
                    const val = await prom[i];
                    resolve(val)
                } catch(error){
                    if(n !== j){
                        j += 1;
                        errors.push(error);
                    }
                }
            }
            if(n === j){
                reject(new AggregateError([new Error(errors)], ""));
            }
        }
    })
}
anyPromise([p3,p5, p2]).then((ej) => console.log(ej)).catch((error) => console.log(error));
