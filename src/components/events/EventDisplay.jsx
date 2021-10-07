import React from 'react';
import Event from './Event';

class EventDisplay extends React.Component {
    render() {
        const { eventType, entertainment, venue, music } = this.props;
        return (
            <div>
                <p>
                    This {eventType} will be held at the {venue.nameOfVenue} with a maximum capacity of {venue.capacity} people.{" "}
                </p>
                <p>
                   Featured Entertainment: {entertainment}
                </p>
                <p>
                    Featured Song:                     {music}
                </p>
            </div>
        )
    }
}

export default EventDisplay;