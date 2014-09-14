# refpath

Search objects by fragment identifiers commonly used as `$ref` values in JSON schema.

### Usage

```javascript
var refpath = require('refpath');

var obj = {
    'p1': {
        'p1a': 'v1a'
    },
    'p2': [
        0,
        1,
        2
    ]
};

//Get

refpath.get(obj, '#/p1/p1a'); // 'v1a'
refpath.get(obj, '#/p2/0'); // 0

//Set

refpath.set(obj, '#/p1/p1b', 'v1b');

refpath.get(obj, '#/p1/p1b'); // 'v1b'
```
