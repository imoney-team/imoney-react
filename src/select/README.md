```js
import React from 'react';
import ReactDOM from 'react-dom';

import Switch from "imoney-react-ui/src/select"
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
            name:"cash-config-coupon",
            placeholder:"select...",
            callback: function (index) {
                const value = coupons[index].value;
                if (value.length > 0) {
                    self.setState({
                        couponValue: coupons[index].money,
                        couponId: value
                    })
                } else {
                    self.setState({
                        couponValue: 0
                    })
                }
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



