import React, {Component, Element} from 'react';
import Count from './countDown.js';


export default class CountDown extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        new Count(this.refs.body, this.props.options)
    }

    componentDidUpdate() {
        //startAnimation(this);
    }


    render() {
        const {
            className,
            style
        } = this.props;

        return (
            <span className={className} style={style} ref="body"></span>
        );
    }
}