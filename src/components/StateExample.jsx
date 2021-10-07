import React from 'react';

class StateExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentTemp: 71, cloudCoverage: "overcast" };

    }
    handleClick = () => {
        this.setState({ currentTemp: 48 })
    };

    render() {
        return (
            <div>
                <h1>Hello from State Example</h1>
                <p>The current temp is {this.state.currentTemp}</p>
                <p>The cloud coverage is {this.state.cloudCoverage}</p>
                <button onClick={this.handleClick}>Click to Change Temp</button>
            </div>
        )
    }
}

export default StateExample;