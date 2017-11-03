import React, {Component} from 'react';
import "./style.css";

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current:0
        }
        this.changeState = this.changeState.bind(this);
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.changeState(0);
    }

    changeState(i) {
        this.setState({
            current:i
        });
        const target = document.querySelectorAll('.ui-tab-hd-list li')[i];
        const left = target.offsetLeft;
        const width = target.offsetWidth;
        const line = this.refs.parent.querySelector('.ui-tab-hd-line');
        line.style.left = `${left}px`;
        line.style.width = `${width}px`;
        target.classList.add("active");
        [...target.parentNode.children].filter((child) =>
            child !== target
        ).forEach((element, index, array) => {
            element.classList.remove("active");
        });
        this.props.options.onChange && this.props.options.onChange(i);
    }
    render() {
        let self = this;
        let options = this.props.options || {data: []};
        let className = ["ui-tab"];
        if (options.className) {
            className.push(options.className);
        }
        let data = options.data;
        const body = this.props.children.map((item, index) =>
            <div key={index} className={'ui-tab-panel ui-tab-panel'+ (index+1) + (self.state.current === index?" current":"") }>{item}</div>
        );

        return (
            <div className={className.join(" ")} ref="parent">
                <div className="ui-tab-hd">
                    <ul className="ui-tab-hd-list">
                        {data.map((item, i) =>
                            <li key={i} onClick={() => {
                                this.changeState(i)
                            }} className="ui-tab-hd-item">{item.name}</li>
                        )}
                    </ul>
                    <i className="ui-tab-hd-line"></i>
                </div>
                <div className="ui-tab-bd" ref="body">
                    {body}
                </div>
            </div>
        );

    }
};
