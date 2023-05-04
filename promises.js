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
