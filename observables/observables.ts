import axios from "axios";
import { of, from, map, Observable, interval, take, catchError, mergeMap, delay, concatMap, toArray, forkJoin, Subject, filter, Subscription } from "rxjs";

const numEmitter = of(1, 2, 3, 4);
const modulus = numEmitter.pipe(
    map((value: number) => {
        console.log(`received : ${value}`);
        return value % 2;
    }));
const stringMap = numEmitter.pipe(
    map((value: number) => { return value * 2 }),
    map((value: number) => { return `str_${value}` })
);
const emitter: Observable<any> = of(1, 2, "Nikos", { name: "test" }, new Date());
const emitterPipe = emitter.pipe(
    map((value: any) => {
        console.log(`value: ${value instanceof Object ? JSON.stringify(value) : value % 2}`);
        return value;
    }));
const emitArray: Observable<any> = from(["Margarita", { id: 12345 }, new Date(), 544]);
// Universities API
const API_URL = 'http://universities.hipolabs.com/search?country=' + 'Malta';
const emitUniversities = (api: string): Observable<any> => {
    return from(axios.get<any>(api));
}
const emitUniversitiesPiped = emitUniversities(API_URL).pipe(
    map((value: any) => {
        return value.data[0].country;
    }),
    catchError((error: unknown) => {
        console.log(`stream caught : ${error}`);
        return of(null);
    })
);

// numEmitter.subscribe((value: number) => {
//     console.log(`modulus : ${value}`);
// });

// modulus.subscribe((value: number) => {
//     console.log(`modulus : ${value}`);
// });

// stringMap.subscribe((value: string) => {
//     console.log(`stringMap emitted : ${value}`);
// });

// emitter.subscribe((value: any) => {
//     console.log(`value: ${value instanceof Object ? JSON.stringify(value) : value}`);
// });

// emitArray.subscribe((value: any) => {
//     console.log(`value: ${value instanceof Object ? JSON.stringify(value) : value}`);
// });

// emitterPipe.subscribe((value: any) => {
//     console.log(`emitterPipe: ${value instanceof Object ? JSON.stringify(value) : value}`);
// });

// emitUniversities(API_URL).subscribe({
//     next: (response) => console.log('Data:', response.data),
//     error: (error) => console.error('Error occurred:', error),
//     complete: () => console.info('complete')
// });
// emitUniversitiesPiped.subscribe((value: any) => {
//     console.log(value);
// });

// const sourceInterval = interval(1000);
// const fiveNumbers = sourceInterval.pipe(
//     take(5),
//     map((value: number) => {
//         console.log(`map received : ${value}`)
//         return `string_${value * 2}`;
//     })
// );
// fiveNumbers.subscribe((value: string) => {
//     console.log(`${new Date().toLocaleTimeString()} ${value}`);
// });

// Swallowing values
// const emitOneTwo = of(1, 2);
// const swallowedValues = emitOneTwo.pipe(
//     map((value: number) => {
//         console.log(`swallowing ${value}`);
//         // not returning a value;
//         // activate the next line to see the difference
//         // return value;
//     })
// );
// swallowedValues.subscribe((value: void) => {
//     console.log(`subscriber received value: ${value}`)
// });

// Time based observables
// const sourceInterval = interval(1000);
// const fiveNumbers = sourceInterval.pipe(
//     take(5),
//     map((value: number) => {
//         console.log(`map received : ${value}`)
//         return `string_${value * 2}`;
//     })
// );
// fiveNumbers.subscribe((value: string) => {
//     console.log(`${new Date().toLocaleTimeString()} ${value}`);
// });

// Observable error handling
// interface IValue {
//     value: number
// }
// interface INestedObj {
//     id?: IValue;
// }
// const objEmit: Observable<INestedObj> = of(
//     { id: { value: 1 } },
//     {},
//     { id: { value: 2 } }
// );
// const returnIdValue = objEmit.pipe(
//     map((value: INestedObj) => {
//         return value!.id!.value;
//     }),
//     catchError((error: unknown) => {
//         console.log(`stream caught : ${error}`);
//         return of(null);
//     })
// );
// // The following code is the latest proposed syntax for error handling
// returnIdValue.subscribe({
//     next: (value: number | null) => console.log(`received ${value} `),
//     error: (error: unknown) => console.log(`error : ${error}`),
//     complete: () => console.log('complete')
// });

/* 
    Observables returning Observables

    mergeMap, concatMap, forkJoin
*/

// interface IProductId {
//     id: number;
// }
// interface IProductDescription {
//     name: string;
//     description: string;
// }
// const productList = <Observable<IProductId>>from(
//     [{ id: 1 }, { id: 2 }, { id: 3 }]
// );
// function getProductName(id: number):
//     Observable<IProductDescription> {
//     return of(
//         {
//             id: id,
//             name: `Product_${id}`,
//             description: `Description_${id}`
//         }
//     );
// }
// MergeMap
/*
    The mergeMap operator is used to return a single value 
    from an Observable stream, so that we do not need to 
    subscribe to the inner Observable.
*/
// productList.pipe(
//     map((value: IProductId) => {
//         console.log(`Product id: ${value.id}`);
//         return getProductName(value.id);
//     })
// ).subscribe((value: Observable<IProductDescription>) => {
//     value.subscribe((value: IProductDescription) => {
//         console.log(`product name : ${value.name}`);
//         console.log(`product desc : ${value.description}`);
//     });
// });
// productList.pipe(
//     mergeMap((value: IProductId):
//         Observable<IProductDescription> => {
//         console.log(`Product id: ${value?.id}`);
//         return getProductName(value.id);
//     })
// ).subscribe((value: IProductDescription) => {
//     console.log(`product name : ${value.name}`)
//     console.log(`product desc : ${value.description}`)
// });

// mergeMap with delay
//const emitTreeTwoOne = of(3, 2, 1);
// const delayedEmit = emitTreeTwoOne.pipe(
//     mergeMap((value: number) => {
//         console.log(
//             `>> emit >> 
//             ${new Date().toLocaleTimeString()} 
//             value : ${value}, 
//             delaying : ${1000 * value} ms`
//         );
//         return of(value).pipe(delay(1000 * value))
//     })
// );
/* 
    concatMap

    If it is important to process the emitted values in order, 
    no matter when they arrived, we can use the concatMap function 
    instead of the mergeMap function. The concatMap function will only 
    subscribe to the next Observable when the previous one completes.
*/
// const delayedEmit = emitTreeTwoOne.pipe(
//     concatMap((value: number) => {
//         console.log(
//             `>> emit >> 
//              ${new Date().toLocaleTimeString()} 
//              value : ${value}, 
//              delaying : ${1000 * value} ms`
//         );
//         return of(value).pipe(delay(1000 * value))
//     })
// );
// delayedEmit.subscribe(value => {
//     console.log(`<< receive << 
//         ${new Date().toLocaleTimeString()} 
//         received value : ${value}`);
// });

// 
/*
    forkJoin

    When we have a number of Observable streams that need to all 
    complete before we do something, we can use the forkJoin function. 
    This situation occurs quite often when dealing with REST requests 
    at the start of a page load, where the page may need to load data 
    from a number of different REST APIs before displaying the page.
*/
// const onePerSecond = interval(1000);
// const threeNumbers: Observable<number[]> = onePerSecond.pipe(
//     take(3),
//     map((value: number) => {
//         console.log(`>> threeNumbers emitting : ${value}`);
//         return value;
//     }),
//     toArray()
// );
// const twoStrings: Observable<string[]> = onePerSecond.pipe(
//     take(2),
//     map((value: number) => {
//         console.log(`>> twoStrings emitting : value_${value}`);
//         return `value_${value}`;
//     }),
//     toArray()
// );
// forkJoin(
//     [threeNumbers,
//         twoStrings]
// ).subscribe((values) => {
//     console.log(`<< threeNumbers returned : ${values[0]}`);
//     console.log(`<< twoStrings returned : ${values[1]}`);
// });

/*
    Observable Subject

    If we want to keep an Observable stream open and register 
    one or more subscribers that will wait around until a new value is emitted,
    we can use a Subject.
    Think in terms of an event bus, where multiple subscribers register their 
    interest in a topic on an event bus, and then react as and when an event 
    is raised that they are interested in.
    A Subject maintains a list of listeners that have registered their interest.
    A Subject is also an Observable stream, and therefore listeners can subscribe 
    to the stream and use the same syntax and functions that are used for normal 
    Observable streams. 
    What makes a Subject interesting is that has the ability to multicast, which 
    means that it allows multiple subscribers to the same stream and will notify 
    all interested subscribers when an event happens.
*/
// enum EventKeys {
//     ALL = "all-events",
//     SINGLE = "single-event"
// }
// export interface IBroadcastEvent {
//     key: EventKeys;
//     data: string;
// }
// export class BroadcastService {
//     private _eventBus = new Subject<IBroadcastEvent>();
//     on(key: EventKeys): Observable<string> {
//         return this._eventBus.asObservable().pipe(
//             filter(
//                 event => event.key === key ||
//                     event.key === EventKeys.ALL),
//             map(event => event.data));
//     }
//     broadcast(key: EventKeys, data: string) {
//         this._eventBus.next({ key, data });
//     }
// }
// class Listener {
//     private eventSubscription: Subscription;
//     constructor(
//         broadCastService: BroadcastService,
//         eventKey: EventKeys,
//         private listenerName: string
//     ) {
//         _.bindAll(this, "reactToEvent");
//         this.eventSubscription =
//             broadCastService.on(eventKey)
//                 .subscribe(this.reactToEvent);
//     }
//     private reactToEvent(event: string) {
//         console.log(`Listener [${this.listenerName}]
//             received event : ${event}`);
//     }
//     public unregister() {
//         this.eventSubscription.unsubscribe();
//     }
// }
// const broadCastService = new BroadcastService();
// const listenOne = new Listener(
//     broadCastService,
//     EventKeys.ALL, "first");
// const listenTwo = new Listener(
//     broadCastService,
//     EventKeys.SINGLE, "second");

// listenOne.unregister();
// broadCastService.broadcast(
//     EventKeys.ALL, "final ALL event broadcast");

