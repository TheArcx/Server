import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux'; // connecting react to redux
import * as actions from '../actions';


import Header from './Header'
import Landing from './Landing'


const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {

    // lifecycle method - runs on startup once call getUser action creator
    componentDidMount() {
        this.props.getUser();
    }

    render(){
        return(
            <div className = "container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path = "/" component={Landing} />
                        <Route exact path = "/surveys" component={Dashboard} />
                        <Route path = "/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);