import React, { Component } from 'react';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = props
    }

    render() { 
        return (
            <div>
                <h2>BODY</h2>
            </div>
        );
    }
}
 
export default Body;