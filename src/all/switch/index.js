import React from 'react';
import ReactDOM from 'react-dom';
class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        //this.keyDown = this.keyDown.bind(this);
    }
    toggle(e){
        var checked = !this.props.checked;
        this.setChecked(e,checked);
    }
    setChecked(e,checked){
        var index = this.props.index;
        this.props.onChange(e,checked,index)
    }
    // keyDown(e){
    //     if (e.keyCode === 37) {
    //         this.setChecked(false);
    //     }
    //     if (e.keyCode === 39) {
    //         this.setChecked(true);
    //     }
    // }
    render(){
        var classNames =["ui-switch"];
        if (this.props.checked) {
            classNames.push("checked")
        }
        if (this.props.disable) {
            classNames.push("disable")
        }
        var className = classNames.join(" ");
        return (
            <span className={className} onClick={this.toggle}></span>
        )
    }
}
export default Switch;