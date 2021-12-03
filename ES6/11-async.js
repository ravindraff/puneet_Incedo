

// function sync(){
//     console.log('sync function called');
//     return "success"
// }


// function async(callback){
//     setTimeout(()=>{
//         console.log('async function called');
//         callback("success");
//         // return "success"
//     },2000)
// }

function async(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('async function called');
            resolve("success");
            // reject("failure")
        },2000)
    })
}


console.log('starting.... ')


// let result = async();
// console.log(result);

//callbacks
// async(function(result){
//     console.log(result)
// })

async()  //-> ajax
.then(res=> {
    console.log(res)
    return "1"
})
.then(data=> console.log(data))
.catch(err=> console.log(err))

console.log('finishing.... ')