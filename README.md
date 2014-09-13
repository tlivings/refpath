# jsonref

```javascript
var jsonref = require('jsonref');

var json = {
    'p1': {
        'p1a': 'v1a'
    },
    'p2': [
        0,
        1,
        2
    ]
};

jsonref.get(json, '#/p1/p1a'); // 'v1a'
jsonref.get(json, '#/p2/0'); // 0

jsonref.set(json, '#/p1/p1a', 'v1b');
jsonref.get(json, '#/p1/p1a'); // 'v1b'
```
