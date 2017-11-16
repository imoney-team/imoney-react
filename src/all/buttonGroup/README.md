```js
import React from 'react';
import ReactDOM from 'react-dom';

import Switch from "imoney-react-ui/src/all/buttonGroup"
import "imoney-react-ui/src/all/buttonGroup/style.css"
```

```js
let child = {};
const runState = {
    data: [{
        name: "关闭",
        active: child.status != 2 && child.status != 4 ? true : false
    }, {
        name: "开启",
        active: child.status == 2 ? true : false
    }, {
        name: "上线",
        active: child.status == 4 ? true : false,
        disabled: child.status != 2 && child.status != 4 ? true : false
    }]
};
let App = React.createClass({
    changeState(index, indexChild, i){
        e.stopPropagation();
    },
    render () {
        return (
            <div>
                <ButtonGroup onChange={(i) => {
                    this.changeState(index, indexChild, i)
                }} options={runState}/>
            </div>
        )
    }
});
ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```
