import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component{

    renderContent(){
        switch(this.props.auth){
            case null: // Do not know
                return;
            case false: // Not logged in
                return (
                    <li><a href="/auth/google">Sign-in With Google</a></li>
                );
            default: // Logged in
                return (
                    <li><a href="/api/logout">Logout</a></li>
                );
        }
    }

    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to = { this.props.auth ? '/surveys' : '/'} 
                        className="left brand-logo"
                    >
                        Emailer
                    </Link>
                    <ul className="right">
                       {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps( { auth }){
    return { auth };
}

export default connect(mapStateToProps)(Header);