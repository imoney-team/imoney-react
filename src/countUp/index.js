import React, {Component, Element} from 'react';
import Count from './countup.js';


export const startAnimation = (component) => {
    if (!(component && component.spanElement)) {
        throw new Error(
            'You need to pass the CountUp component as an argument!\neg. this.myCountUp.startAnimation(this.myCountUp);',
        );
    }

    const {
        decimal,
        decimals,
        duration,
        easingFn,
        end,
        formattingFn,
        onComplete,
        onStart,
        prefix,
        separator,
        start,
        suffix,
        useEasing,
        useGrouping,
    } = component.props;
    const countupInstance = new Count(
        component.spanElement,
        start,
        end,
        decimals,
        duration,
        {
            decimal,
            easingFn,
            formattingFn,
            separator,
            prefix,
            suffix,
            useEasing,
            useGrouping,
        },
    );

    if (typeof onStart === 'function') {
        onStart();
    }

    countupInstance.start(onComplete);
};

export default class CountUp extends Component {
    constructor(props) {
        super(props)
        this.spanElement = null;
        this.refSpan = (span) => {
            this.spanElement = span;
        };
    }
    componentDidMount() {
        startAnimation(this);
    }

    shouldComponentUpdate(nextProps) {
        const hasCertainPropsChanged =
            this.props.duration !== nextProps.duration ||
            this.props.end !== nextProps.end ||
            this.props.start !== nextProps.start;

        return nextProps.redraw || hasCertainPropsChanged;
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
            <span className={className} style={style} ref={this.refSpan}></span>
        );
    }
}