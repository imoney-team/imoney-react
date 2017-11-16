import React, {Component} from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {options} = this.props;
        let name = ["ui-nav"];
        if (options.className) {
            name.push(options.className);
        }
        const body = options.data.map((item, index) =>
            <li key={index} className={item.active?"ui-nav-item active":"ui-nav-item"}>
                <a href={item.href}>{item.name}</a>
            </li>
        );

        return (
            <ul className={name.join(" ")}>
                {body}
            </ul>
        );

    }
};
