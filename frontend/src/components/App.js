import React from 'react';
import { connect } from 'react-redux';

import NewUserForm from './NewUserForm';

class App extends React.Component {
    /* componentDidMount() {
        this.props.fetchIllnesses();
    } */

    render() {
        console.log("App rerendered.");
        if (!this.props.userData) {
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
    console.log("Staaate: ", state);
    return {
        illnesses: state.illnesses,
        user: state.user,
        userData: state.userData
    };
};

export default connect(mapStateToProps)(App);