# imoney-react-ui

<img src="https://raw.githubusercontent.com/imoney-team/imoney-react-ui/master/test/components.png" width="528">

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';

import Switch from "imoney-react-ui/src/all/switch"
import "imoney-react-ui/src/all/switch/style.css"
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

<table>
	<tr>
		<td>desktop</td>
		<td>mobile</td>
		<td>all</td>
	</tr>
	<tr>
		<td>
        dialog ✔<br />
        gallery ✔<br />
        tab ✔<br />
        wait<br />
        dropDown<br />
        datePicker<br />
        pagination<br />
        table<br />
        list<br />
        </td>
		<td>
        notice ✔<br />
        select ✔<br />
        progress-countDown ✔<br />
        tab ✔<br />
        bridge ✔<br />
		</td>
		<td>
        buttonGroup ✔<br />
        nav ✔<br />
        switch ✔<br />
        progress ✔<br />
        countUp ✔<br />
        countDown ✔<br />
        clipboard ✔<br />
        search ✔<br />
		</td>
	</tr>
</table>

## Demo
<del>http://imoney.w3cmm.com/demo.html</del>

## Browser support
* IE 9+
* Chrome 11+
* Firefox 4+
* Safari 5.1+
* Opera 11.5+
