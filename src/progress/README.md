```js
import React from 'react';
import ReactDOM from 'react-dom';

import Switch from "imoney-react-ui/src/progress"
import "imoney-react-ui/src/progress/style.css"
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