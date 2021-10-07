//PROMPT:
//Pass eventType, entertainment, venue, and music as props to a class component that you will create called EventDisplay.jsx. Display the values in EventDisplay with p tags saying: 
// Event Details
// This charity event will be held at the Met Gala with a maximum capacity of 1000 people.
// Featured Entertainment: Billie Eilish!
// Featured Song: Therefore I Am!

import React from 'react';
import EventDisplay from './EventDisplay';

class Event extends React.Component {
    render() {
        const {eventType, entertainment, venue, music} = this.props;
        return (
            <div>
                <EventDisplay eventType={"charity"} entertainment={"Billie Eilish"} venue={{ nameOfVenue: "Met Gala", capacity: 1000 }} music={"Therefore I Am!"} />
            </div>
        )
    }
}

export default Event;