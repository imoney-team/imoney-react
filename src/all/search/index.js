import React, {Component} from 'react';
import "./style.css";

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.handleChange = ::this.handleChange;
        this.handleEmpty = ::this.handleEmpty;
        this.handleSearch = ::this.handleSearch;
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleEmpty(e) {
        this.setState({
            value: ""
        })
        this.props.empty(e)
    }

    handleSearch(e) {
        e.preventDefault()
        this.props.search(e)
    }

    render() {
        let name = ["ui-search"];
        if (this.props.className) {
            name.push(this.props.className);
        }

        return (
            <div className={name.join(" ")}>
                <form className="ui-search-form" onSubmit={this.handleSearch}>
                    <div className="ui-search-bd">
                        <input onChange={this.handleChange} value={this.state.value} type="text" className="ui-search-input"
                               placeholder="输入后回车搜索"/>
                        {this.state.value &&
                        <span onClick={this.handleEmpty} className="ui-search-delete">&#215;</span>}
                    </div>
                </form>
            </div>
        );

    }
};
