// import { Observable } from 'rxjs';

const {Observable} = require('rxjs');

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 3000);
});

observable.subscribe({
    next(x) { console.log(x )},
    error(err) { console.log(err)},
    complete() {console.log('finished....')}

})