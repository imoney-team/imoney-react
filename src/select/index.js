import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class Select extends Component {
    constructor (props) {
        super(props)

        this.state = {
            options: null
        }

        this.addSelect = this.addSelect.bind(this)
        this.removeSelect = this.removeSelect.bind(this)
        this.selectHandle = this.selectHandle.bind(this)
    }
    componentDidMount(){
    }
    componentWillUnmount(){
    }

    addSelect (msg) {
        document.body.classList.add("ui-noScroll");
        this.setState({ options:msg })
    }
    removeSelect (e) {
        e.preventDefault();
        this.state.options.callback(this.state.options.selectIndex);
        this.setState({ options:null });
        document.body.classList.remove("ui-noScroll");
    }
    selectHandle(e,index){
        let options = this.state.options;
        options.value = options.data[index].value;
        options.selectIndex = index;
        this.setState({ options })
    }
    render () {
        const options = this.state.options;
        const self = this;
        if (!options){
            return (null)
        }
        return (
            <div className={"ui-mask"}>
                <div className="ui-selectOptions">
                    <div className="ui-selectOptions-hd">
                        <a className="ui-selectOptions-save" href="javascript:;" onClick={this.removeSelect}>完成</a>
                    </div>
                    <div className="ui-selectOptions-bd">
                        <ul className="ui-selectOptions-list">
                            {
                                options.data.map((element, index, array) => {
                                    if (element.disable) {
                                        return (<li key={index} className="disable">{element.name}</li>)
                                    } else {
                                        return (<li key={index} onClick={(e)=>{this.selectHandle(e,index)}} className={element.value==options.value?"select":""}>{element.name}</li>)
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
const div = document.createElement('div');
document.body.appendChild(div);
const container = ReactDOM.render(<Select />, div);
function create () {

    return (data, msg = {}) => {
        msg.data = data
        container.addSelect(msg)
    }
}

let show = create();

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.showSelect = this.showSelect.bind(this);
    }
    componentWillMount(){
    }
    componentDidMount(){
    }
    showSelect(e){
        let self = this;
        let options = this.props.options;
        show(options.data, {
            value:self.state.value?self.state.value:options.value?options.value:"",
            selectIndex:self.state.selectIndex?self.state.selectIndex:0,
            callback: (index)=>{
                self.setState({
                    name:options.data[index].name||"",
                    value:options.data[index].value||"",
                    selectIndex:index
                });
                options.callback&&options.callback(index)
            }
        });
    }
    render() {
        let options = this.props.options;
        var className = ["ui-select"];
        if (options.className){
            className.push(options.className);
        }
        let name = this.state.name?this.state.name:this.props.options.placeholder;
        return (
            <div className={className.join(" ")} onClick={this.showSelect}>
                <div className="ui-select-value">{name}</div>
                <input name={options.name} type="hidden" defaultValue={this.state.value||""}/>
            </div>
        );

    }
};
