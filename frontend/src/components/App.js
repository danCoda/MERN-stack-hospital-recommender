import React from 'react';
import { connect } from 'react-redux';
import { fetchIllnesses } from '../actions';

import NewUserForm from './NewUserForm';
import IllnessList from './IllnessList';

class App extends React.Component {
    /* componentDidMount() {
        this.props.fetchIllnesses();
    } */

    render() {
        console.log("App rerendered.");
        if (!this.props.user) {
            return (
                <div>
                    <h1>New Patient Form</h1>
                    <NewUserForm />
                </div>
            )
        }

        return (
            <div>
                My app
            </div>
        );    
    }
}


const mapStateToProps = state => {
    return {
        illnesses: state.illnesses,
        user: state.user
    };
};

export default connect(mapStateToProps)(App);