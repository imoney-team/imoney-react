# imoney-react-ui

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';

import Switch from "imoney-react-ui/src/switch"
import "imoney-react-ui/src/switch/style.css"
```
```js
let App = React.createClass({
    changeState(e,checked){
        e.stopPropagation();
    },
    render () {
        return (
            <div>
                <Switch onChange={this.changeState} checked={true}/>
            </div>
        )
    }
});
ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

## Components

- [x] dialog
- [x] gallery
- [x] progress-countDown
- [x] select
- [x] switch
- [ ] countDown

## Browser support

IE9+
