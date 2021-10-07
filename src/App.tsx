import React from "react";
import PropsExample from "./components/PropsExample";
import PropsMapping from './components/PropsMapping';

function App() {
    const visitedPlaces = ["California", "Connecticut", "Florida", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Michigan", "Minnesota", "Missouri", "Nevada", "North Carolina", "North Dakota", "Ohio", "Pennsylvania", "South Dakota", "Tennessee", "Texas", "West Virginia", "Wisconsin" ];
    return (
        <div>
            <PropsExample name={"Tom"} businessName={"MySpace"} />
            <PropsExample name={"Mark"} businessName={"Facebook"} />
            
            <PropsMapping title={"Places I visited"} visitedPlaces={visitedPlaces}/>
        </div>
    );
}

export default App;