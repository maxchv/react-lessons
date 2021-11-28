import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString("uk-UA")
        }
        this.updateTime = this.updateTime.bind(this);
    }

    componentDidMount() {
        console.log("Component did mount");
        this.intervalId = setInterval(() => {
            this.updateTime();
        }, 1000);
    }

    componentWillUnmount() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    updateTime() {
        console.log("Need update time");
        this.setState({
            time: new Date().toLocaleTimeString("uk-UA")
        });
    }

    render() {
        const { time } = this.state;
        return (<>
            <h2>Current time: {time}</h2>
            <button onClick={this.updateTime}>Update time</button>
        </>);
    }
}

export default Clock;


