# MutRef

Easy to debug and track mutable references in JavaScript

```js
const MutRef = require('mutref');

const ref = MutRef(1);

ref.modify(value => value + 5);
ref.modify(value => value - 3);

console.log(ref.inspect); // => 3
```
