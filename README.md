# refpath

### usage

```javascript
var refpath = require('refpath');

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

refpath.get(json, '#/p1/p1a'); // 'v1a'
refpath.get(json, '#/p2/0'); // 0

refpath.set(json, '#/p1/p1a', 'v1b');
refpath.get(json, '#/p1/p1a'); // 'v1b'
```
