```js
import Progress from "imoney-react-ui/src/pc/tab"
import "imoney-react-ui/src/pc/tab/style.css"
```
```js
const options =  {
    data : [{
        name:"系统中心"
    },{
        name:"策略中心"
    },{
        name:"系统中心"
    }]
}
```
```js
<Tab options={options}>
    <div>
        <h3>1.命中规则</h3>
    </div>
    <div>
        <h3>1.表单管理</h3>
    </div>
    <div>
        <h3>1.个人信息</h3>
    </div>
</Tab>
```
