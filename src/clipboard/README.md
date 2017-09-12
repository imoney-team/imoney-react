```js
import React from 'react';
import ReactDOM from 'react-dom';

import Clipboard from "imoney-react-ui/src/clipboard"
import "imoney-react-ui/src/clipboard/style.css"
```

```js
<Clipboard text="test" handleText="copy" success={()=>{alert("success!")}}/>
```