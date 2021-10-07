import React from 'react';

class PropsExample extends React.Component {
    //class object inside

    render() {
        const { name, businessName } = this.props;
        return (
            <div>
                {/* {this.props.name} is the founder of {this.props.businessName} */}
                {name} is the founder of {businessName}
            </div>
        )
    }
}

export default PropsExample;