```js
import React from 'react';

import CountUp, {startAnimation} from "imoney-react-ui/src/all/countUp";
```

```js
<div>
    <CountUp className="CountUp" start={0} end={100} duration={3} ref={(countUp) => {
        this.myCountUp = countUp;
    }}/>
    <br/>
    <button className="Button" onClick={(event) => {
        startAnimation(this.myCountUp);
    }}>Count me up!
    </button>
</div>
```
