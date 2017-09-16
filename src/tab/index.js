import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "./style.css";


var start, delta, ishorizontal;
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: {
                width: document.documentElement.getBoundingClientRect().width
            }
        }
        this.changeState = this.changeState.bind(this);
        this.touchStart = this.touchStart.bind(this);
        this.touchMove = this.touchMove.bind(this);
        this.touchEnd = this.touchEnd.bind(this);
        this._navigate = this._navigate.bind(this);
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.changeState(0);
        var self = this;
        window.addEventListener("resize", function (e) {
            self.setState({
                size: {width: document.documentElement.getBoundingClientRect().width}
            });
        }, false);

        this.length = this.props.options.data.length;
    }

    touchStart(e) {
        e.stopPropagation();
        let touches = e.touches[0];
        start = {
            x: touches.pageX,
            y: touches.pageY,
            time: +new Date
        };
        delta = {x: 0, y: 0};
        //self.element.removeClass("isanimation");
        ishorizontal = undefined;
    }

    touchMove(e) {
        //e.preventDefault();
        e.stopPropagation();
        let width = this.state.size.width;
        if (e.touches.length > 1 || e.scale && e.scale !== 1) return
        var touches = e.touches[0];
        delta = {
            x: touches.pageX - start.x,
            y: touches.pageY - start.y
        }
        if (typeof ishorizontal == 'undefined') {
            ishorizontal = !!(ishorizontal || Math.abs(delta.y) < Math.abs(delta.x));
        }
        if (ishorizontal) {
            this.refs.body.style.webkitTransform = `translate3d(${-(this.current) * width + delta.x}px, 0px, 0px)`
        }
    }

    touchEnd(e) {
        e.stopPropagation();
        let width = this.state.size.width;
        let duration = +new Date - start.time;
        //self.element.addClass("isanimation");
        let isValid = ((Number(duration) < 250 && Math.abs(delta.x) > width / 8) || Math.abs(delta.x) > width / 4);
        if (isValid) {
            this._navigate(delta.x < 0 ? 'next' : 'prev');
            return;
        }
        if (Math.abs(delta.x) <= width / 4) {
            this.refs.body.style.webkitTransform = `translate3d(${-(this.current) * width}px, 0px, 0px)`;
        }
    }

    _navigate(dir) {
        var self = this;
        if (dir === "next") {
            if (this.current >= this.length - 1) {
                this.current = this.length - 1;
            } else {
                this.current += 1;
            }
            if (this.current === 0) {
                this.props.options.onFirst && this.props.options.onFirst();
            }
            if (this.current === this.length - 1) {
                this.props.options.onLast && this.props.options.onLast();
            }
        } else if (dir === "prev") {
            if (this.current <= 0) {
                this.current = 0;
            } else {
                this.current -= 1;
            }
            if (this.current === this.length - 1) {
                this.props.options.onLast && this.props.options.onLast();
            }
            if (this.current === 0) {
                this.props.options.onFirst && this.props.options.onFirst();
            }
        }
        //this.$items.removeClass("current").eq(this.current-1).addClass("current");
        this.changeState(this.current)
    }

    changeState(i) {
        this.current = i;
        const target = document.querySelectorAll('.ui-tab-hd-list li')[i];
        const left = target.getBoundingClientRect().left;
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
        this.refs.body.style.webkitTransform = `translate3d(${-(i) * this.state.size.width}px, 0px, 0px)`
        this.props.options.onChange && this.props.options.onChange(i);

    }
    render() {
        let options = this.props.options || {data: []};
        let className = ["ui-tab"];
        if (options.className) {
            className.push(options.className);
        }
        let data = options.data;
        let body = options.data.map((item, i) => {
            if (item.data.length == 0) {
                return <div className="ui-tab-empty" key={i}>暂无相关数据</div>
            } else {
                return <ul className="ui-tab-list" key={i}>
                    {item.data.map((child, j) =>
                        <li className="ui-tab-list-item" key={j}>
                            <div className="ui-tab-list-item-name">{child.name}&nbsp;{child.nameSub}</div>
                            <div className="ui-tab-list-item-value">{child.value}</div>
                        </li>
                    )}
                </ul>
            }
        })

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
                <div className="ui-tab-bd" ref="body" onTouchStart={this.touchStart} onTouchMove={this.touchMove}
                     onTouchEnd={this.touchEnd} style={{width: data.length * this.state.size.width}}>

                    {body}

                </div>
            </div>
        );

    }
};
