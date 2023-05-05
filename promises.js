//punto 1

let p1 = Promise.resolve(3);
let p2 = Promise.resolve(1337);
let p3 = new Promise((resolve, reject) => {
  reject("reject");
});
function allPromise(prom){
    return new Promise((resolve, reject) => {
        let A = [];
        let rej = [];
        if(prom.length === 0){
            return resolve(prom)
        }
        else{
            for(let i = 0; i < prom.length; i++){
                prom[i].then((value) => A.push(value)).catch((err) => rej.push(err)).finally(() => {
                    if(i === prom.length - 1){
                        if(rej.length != 0){
                            reject(new Error("fallo"))
                        } else {
                            resolve(A)
                        }
                    }
                });
            }
        }
    })
}

allPromise([p1,p2]).then((ej) => console.log(ej)).catch((ej) => console.log(ej))

//punto 2

let p1 = Promise.resolve(33);
let p2 = new Promise((resolve) => setTimeout(() => resolve(66), 0));
let p3 = new Promise((resolve, reject) => {
  reject("reject");
});
let p4 =  99;

function allSettlePromise(prom){
    return new Promise(async (resolve, reject) => {
        let A = [];
        if(prom.length === 0){
            return resolve(prom)
        }
        else{
            for(let i = 0; i < prom.length; i++){
                if(typeof(prom[i]) === 'object'){
                    try{
                       const val = await prom[i];
                       A.push({status: 'fulfilled', value: val});
                    }
                    catch(err){
                        A.push({status: 'rejected', value: err});
                    }
                } else{
                    A.push({status: 'fulfilled', value: prom[i]});
                }
            }
            resolve(A)
        }
    })
}

allSettlePromise([p1, p2, p4, p3]).then((ej) => console.log(ej));
