import { Observable } from 'rxjs';

const observable$ = new Observable<number>((subscriber) => {
  let counter = 1;

  const intervalID = setInterval(() => {
    console.log('Emitted', counter);
    subscriber.next(counter++);
  }, 2000);

  return () => {
    clearInterval(intervalID);
  };
});

const subscription = observable$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Subscription Complete'),
});

setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 7000);
