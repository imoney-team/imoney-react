# imoney-react

## Browser support

IE9+

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';

import Switch from "imoney-react/src/switch"
import "imoney-react/src/switch/style.css"```

```

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