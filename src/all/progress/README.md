```js
import React from 'react';

import Progress from "imoney-react-ui/src/all/progress"
import "imoney-react-ui/src/all/progress/style.css"
```
```js
Progress.start();
Progress.done();

```

## showSpinner
Turn off loading spinner by setting it to false. (default: true)
```js

Progress.configure({ showSpinner: false });
```
