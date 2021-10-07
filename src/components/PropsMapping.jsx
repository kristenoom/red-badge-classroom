import React from "react";

class PropsMapping extends React.Component {
    render() {
        const { title } = this.props;
        const places = () => this.props.visitedPlaces.map((visitedPlace) => <li>{visitedPlace}</li>);
        return (
            <div>
                <h2>{title}</h2>
                <ul>
                    {places()}
                </ul>
            </div>
        )
    }
}

export default PropsMapping;