```js
import React from 'react';
import ReactDOM from 'react-dom';

import Select from "imoney-react-ui/src/m/select"
import "imoney-react-ui/src/m/select/style.css"
```

```js
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount(){
    }
    componentDidMount(){
        let data = [{
            label: `option1`,
            value: `1`,
        },{
            label: `option2`,
            value: `2`,
        }];
        data = [{label:"none...",value:""}].concat(data)
        const CouponOptions = {
            data:data,
            name:"custom-class",
            placeholder:"select...",
            callback: function (index) {
                console.log(index)
            }
        }
        this.setState({
            CouponOptions
        });
    }
    callbackSelect(index) {
        console.log(index)
    }
    showSelect() {
        console.log("select");
    }
    render() {
        return (<Select options={this.state.CouponOptions} showSelect={this.showSelect} callback={this.callbackSelect}/>);

    }
};
```



