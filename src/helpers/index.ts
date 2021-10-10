import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export const returnRandomData = (delayInms = 1500): Observable<string> => {
    return of(Math.random() * 100 > 50 ? 'Success' : 'Failed').pipe(
        delay(delayInms),
    );
};
