const {Subject} = require('rxjs');

const subject = new Subject();


subject.subscribe({
    next: (v) => console.log(`component 1 : ${v}`) 
})

subject.subscribe({
    next: (v) => console.log(`component 2 : ${v}`) 
})

subject.subscribe({
    next: (v) => console.log(`component 3 : ${v}`) 
})

subject.next("success");
