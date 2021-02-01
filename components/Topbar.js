import React, {Component} from 'react';

class Topbar extends Component {
    render() {
        return (
            <div className="topbar-one">
                <div className="container">
                    <div className="topbar-one__left">
                        <a href="http://climatehacks.devpost.com/">Sign up for ClimateHacks climatehacks.devpost.com</a>

                    </div>
                    <div className="topbar-one__right">
                        <a href="#">Volunteer</a>
                        <a href="http://climatehacks.devpost.com/">Register</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;