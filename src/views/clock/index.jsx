import React, { Component } from 'react';
import Clock from "../../components/Clock";
class Index extends Component {
    constructor() {
        super();
        this.handleShowOrHide = this.handleShowOrHide.bind(this);
        this.state = {
            isShowClock: true
        }
    };
    handleShowOrHide() {
        this.setState({
            isShowClock: !this.state.isShowClock
        })
    };


    render() {
        return (
            <div>
                {this.state.isShowClock ? <Clock /> : null}
                {/* <Clock /> */}
                <button onClick={this.handleShowOrHide}>显示或隐藏时钟</button>
            </div>
        );
    }
}


export default Index;
