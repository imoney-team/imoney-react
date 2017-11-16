import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        //this.keyDown = this.keyDown.bind(this);
    }

    toggle(e, index) {
        this.props.onChange(index);
    }

    render() {
        let name = ["ui-buttonGroup-bd"];
        let {options} = this.props;
        if (options.className) {
            name.push(options.className);
        }
        let className = name.join(" ");
        let body = []
        options.data.forEach((item, index, array) => {
            if (item.disabled) {
                body.push(<i key={index} className={"ui-buttonGroup-item disabled"}>{item.name}</i>)
            } else {
                body.push(<i key={index} className={item.active ? "ui-buttonGroup-item active" : "ui-buttonGroup-item"}
                             onClick={(e) => {
                                 this.toggle(e, index)
                             }}>{item.name}</i>)
            }

        });
        return (
            <div className="ui-buttonGroup">
                {/*<span className={className} onClick={this.props.disable?function(){}:this.toggle}></span>*/}
                <div className={className}>
                    {body}
                </div>
            </div>
        )
    }
}
