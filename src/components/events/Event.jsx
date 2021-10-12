//PROMPT:
//Pass eventType, entertainment, venue, and music as props to a class component that you will create called EventDisplay.jsx. Display the values in EventDisplay with p tags saying: 
// Event Details
// This charity event will be held at the Met Gala with a maximum capacity of 1000 people.
// Featured Entertainment: Billie Eilish!
// Featured Song: Therefore I Am!

//import React from 'react';
// import EventDisplay from './EventDisplay';

// class Event extends React.Component {
//     render() {
//         const {eventType, entertainment, venue, music} = this.props;
//         return (
//             <div>
//                 <EventDisplay eventType={"charity"} entertainment={"Billie Eilish"} venue={{ nameOfVenue: "Met Gala", capacity: 1000 }} music={"Therefore I Am!"} />
//             </div>
//         )
//     }
// }

// export default Event;

//Convert Event.jsx into a class component using the methods and techniques you've learned today.

import React, {Component} from "react";
import EventDisplay from "./EventDisplay";

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventType: "charity",
            entertainment: "Billie Eilish",
            venue: {
                nameOfVenue: 'Met Gala',
                capacity: 1000
            },
            music: "Therefore I Am!"
        };
    };

    render() {
        const { eventType, entertainment, venue, music }

        return (
            <div>
                <EventDisplay
                    eventType={this.state.eventType}
                    entertainment={this.state.entertainment}
                    venue={this.state.venue}
                    music={this.state.music}
                />
            </div>
        );
    };
}

export default Event;