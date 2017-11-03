import React, {Component,DOM} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames'
//http://lobos.github.io/react-ui/0.7/#/message?_k=3a5m4z
let uid = Date.now()
function nextUid () {
    return (uid++).toString(36)
}
function isEmpty (obj) {
    // null and undefined are "empty"
    if (obj === null || obj === undefined) {
        return true
    }
    if (typeof obj === 'number' && isNaN(obj)) {
        return true
    }

    if (obj.length !== undefined) {
        return obj.length === 0
    }

    if (obj instanceof Date) {
        return false
    }

    if (typeof obj === 'object') {
        return Object.keys(obj).length === 0
    }

    return false
}
class Alert extends Component {
    constructor (props) {
        super(props)

        this.state = { dismissed: false }
        this.handleClose = this.handleClose.bind(this)
        this.handleSure = this.handleSure.bind(this)
    }
    handleClose () {
        this.setState({ dismissed: true })
        setTimeout(() => {
            this.refs.element.style.display = 'none'
            this.props.onClose && this.props.onClose()
        }, 100)
    }
    handleSure () {
        this.setState({ dismissed: true })
        setTimeout(() => {
            this.refs.element.style.display = 'none'
            this.props.onClose && this.props.onClose()
            this.props.callback && this.props.callback()
        }, 100)
    }

    render () {
        const { children, className, onClose, type, ...others} = this.props
        const { dismissed } = this.state
        let buttons = null;
        return (
            <div ref="element" className={
                classnames(
                    "ui-dialog-"+type,
                    onClose && "ui-dialog-dismissible",
                    dismissed && "ui-dialog-dismissed",
                    className
                )}>
                {others.title&&<div className="ui-dialog-hd">{ others.title }</div>}
                <div className="ui-dialog-bd">{ children }</div>
                <div className="ui-dialog-ft">
                    {others.showSure&&<span className="ui-dialog-ft-item" onClick={this.handleSure}>确定</span>}
                    {others.showCancel&&<span className="ui-dialog-ft-item" onClick={this.handleClose}>取消</span>}
                </div>
                <a className={"ui-dialog-close"} onClick={this.handleClose} href="javascript:;">×</a>

            </div>
        )
    }
}

Alert.defaultProps = {
    type: 'info'
}

class Message extends Component {
    constructor (props) {
        super(props)
        this.state = {
            duration: props.duration
        }
        this.dismiss = this.dismiss.bind(this)
        this.handleMouseOver = this.handleMouseOver.bind(this)
    }

    componentDidMount () {
        const { duration } = this.props
        if (duration > 0) {
            this.timeout = setTimeout(this.dismiss, duration * 1000)
        }
    }

    dismiss () {
        this.props.onClose(this.props.id)
    }

    handleMouseOver () {
        clearTimeout(this.timeout)
        this.setState({ duration: 0 })
    }

    render () {
        const { content, ...props} = this.props
        const { duration } = this.state

        delete props.duration

        return (
            <Alert {...props}
                   onClose={duration <= 0 ? this.dismiss : undefined}
                   onMouseOver={this.handleMouseOver}
                   className={"ui-dialog"}>
                {content}
                { duration > 0 && <div style={{ animationDuration: `${duration}s` }} className={"ui-dialog-countdown"} /> }
            </Alert>
        )
    }
}
class Container extends Component {
    constructor (props) {
        super(props)

        this.state = {
            messages: {}
        }

        this.addMessage = this.addMessage.bind(this)
        this.removeMessage = this.removeMessage.bind(this)
    }

    addMessage (msg) {
        let messages = this.state.messages
        messages[msg.id] = msg
        this.setState({ messages })
    }

    removeMessage (id) {
        let messages = this.state.messages
        delete messages[id]
        this.setState({ messages })
    }

    render () {
        const messages = this.state.messages
        if (isEmpty(messages)) {
            return null;
        } else {
            return (
                <div className={"ui-mask"}>
                    {
                        Object.keys(messages).map((key) => {
                            return (
                                <Message key={key}
                                         {...messages[key]}
                                         onClose={this.removeMessage}
                                />
                            )
                        })
                    }
                </div>
            )
        }
    }
}
const div = document.createElement('div')
document.body.appendChild(div)
const container = ReactDOM.render(<Container />, div)
function create (type) {
    return (content, msg = {}) => {
        if (typeof msg === 'string') msg = { type: msg }
        if (type) msg.type = type

        msg.id = nextUid()
        msg.content = content
        msg.width = msg.width != undefined?msg.width:"300"
        msg.duration = msg.duration !== undefined
            ? msg.duration
            : (msg.type === 'info' || msg.type === 'error' || msg.type === 'danger') ? 0 : 5
        container.addMessage(msg)
    }
}

export default {
    show: create(),
    success: create('success'),
    info: create('info'),
    warning: create('warning'),
    error: create('error'),
    danger: create('danger')
}