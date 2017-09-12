```js
import React from 'react';
import ReactDOM from 'react-dom';

import Select from "imoney-react-ui/src/select"
import "imoney-react-ui/src/select/style.css"
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
    render() {
        return (<Select options={this.state.CouponOptions}/>);

    }
};
```



