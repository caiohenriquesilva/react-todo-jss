import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = props
    }

    render() { 
        return (
            <div>
                <h1>HEADER</h1>
            </div>
        );
    }
}
 
export default Header;