import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export function EventSubject<T> () {
  const s = new Subject();
  return Object.assign(s.asObservable(), {
    next (t) {
      s.next(t);
    },
  }) as Observable<T> & { next: (t?) => void };
}