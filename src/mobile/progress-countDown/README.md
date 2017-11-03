```js
import React from 'react';
import ReactDOM from 'react-dom';

import Switch from "imoney-react-ui/src/mobile/progress-countDown"
import "imoney-react-ui/src/mobile/progress-countDown/style.css"
```

```html
<svg className="ui-progress" id="progress" width="146 " height="146">
    <circle r="70" cx="73" cy="73" strokeWidth="6px" fill="transparent"></circle>
    <circle r="70" cx="73" cy="73" strokeWidth="6px" fill="transparent" id="progress-bar" className="ui-progress-bar" transform="rotate(-90 73 73)"></circle>
    <text x="50%" y="50%" dy="15" style={{fontSize:"34px"}} id="progress-text" className="ui-progress-text"></text>
</svg>
```

```js
var progress = new Progress(70,120,()=>{
    this.setState({
        progress:false
    });
    Bridge("rw://main");//返回首页
});
```
