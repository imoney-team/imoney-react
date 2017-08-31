```js
import React from 'react';
import { render } from 'react-dom';
import CountUp from 'react-countup';

render(
  <CountUp start={0} end={160526} />,
  document.getElementById('root')
);
```

```js
import React from 'react';
import { render } from 'react-dom';
import CountUp from 'react-countup';

const onComplete = () => {
  console.log('Completed! 👏');
};

const onStart = () => {
  console.log('Started! 💨');
};

render(
  <CountUp
    className="account-balance"
    start={160527.0127}
    end={-875.0319}
    duration={2.75}
    useEasing={true}
    useGrouping={true}
    separator=" "
    decimals={4}
    decimal=","
    prefix="EUR "
    suffix=" left"
    onComplete={onComplete}
    onStart={onStart}
  />,
  document.getElementById('root'),
);
```

##Manually start the animation

```js
import React, { Component } from 'react';
import CountUp, { startAnimation } from 'react-countup';

const MyComponent = () => (
  <div>
    <CountUp className="CountUp" start={0} end={100} duration={3} ref={(countUp) => {
      this.myCountUp = countUp;
    }} />
    <button className="Button" onClick={(event) => {
      startAnimation(this.myCountUp);
    }}>Count me up!</button>
  </div>
);

export default App;
```