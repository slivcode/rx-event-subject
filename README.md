# rx-event-subject

mostly a react-helper for binding subject to element event

- next is binded to the stream
- no need to call the asObservable
- the typing should be correct 

```typescript jsx
import {EventSubject} from 'rx-event-subject'
class Cmp {
  click$ = EventSubject<MouseEvent>();
  componentDidMount() {
    click$.map(e => e.target).subscribe(console.log)
  }
  render() {
    const {click$} = this;
    return <div onClick={click$.next}>click</div>
  }
}
```