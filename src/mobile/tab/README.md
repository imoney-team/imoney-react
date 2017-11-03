```js
import React from 'react';
import ReactDOM from 'react-dom';

import Switch from "imoney-react-ui/src/mobile/tab"
import "imoney-react-ui/src/mobile/tab/style.css"
```

```js
let App = React.createClass({
    render () {
        var options = {
            data : [{
                name:"邀请的好友",
                data:[]
            },{
                name:"个人奖励",
                data:[]
            }],
            className:"name",
            callback:(i,update)=>{
                this.getTabData(i,update)
            }
        }
        return (
            <div>
                <Tab options={options}/>
            </div>
        )
    }
});
ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```
