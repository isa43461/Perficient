let p1 = Promise.resolve(33);
let p2 = new Promise((resolve) => setTimeout(() => resolve(66), 0));
let p3 = new Promise((resolve, reject) => {
  reject("reject");
});
let p4 =  99; 
let p5;

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
