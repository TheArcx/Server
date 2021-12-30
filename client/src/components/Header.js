import React, { Component } from "react";

class Header extends Component{
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Emailer
                    </a>
                    <ul className="right">
                        <li>
                           <a>Google Sign-in</a> 
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;