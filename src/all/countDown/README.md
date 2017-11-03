```js
import React from 'react';

import CountDown from "imoney-react-ui/src/all/countDown"
```

```js
<div>
    <p>
        <CountDown className="countDown" options={{
            date: "June 7, 2087 15:03:25"
        }}/>
    </p>
    <p>
        <CountDown className="countDown" options={{
            date: +(new Date) + 1000 * 60 * 60 * 24,
            render: function (data) {
                this.el.textContent = `${this.leadingZeros(data.hours, 2)}小时${this.leadingZeros(data.min, 2)}分${this.leadingZeros(data.sec, 2)}秒`
            }
        }}/>
    </p>
    <p>
        <CountDown className="countDown" options={{
            date: +(new Date) + 10000,
            render: function (data) {
                this.el.textContent = this.leadingZeros(data.sec, 2) + " 秒"
            },
            onEnd: function () {
                console.log("ended")
            }
        }}/>
    </p>
</div>
```
