import React from 'react';

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    };

    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        },1000)
    };
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        return (
            <div>
                <h1>
                    <p>现在的时间是</p>
                    {this.state.date.toLocaleString()}
                </h1>
            </div>
        )
    }
}

export default Clock;