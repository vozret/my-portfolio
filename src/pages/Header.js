import React from 'react';


import Navbar from './Navbar';

class Header extends React.Component {
    render(){
        return(
            <header>
                <h1>This is the header</h1>
                <Navbar />
            </header>
        );
    };
}

export default Header;