import React from 'react';
import { connect } from 'react-redux';

import NewUserForm from './NewUserForm';
import HospitalResults from './HospitalResults';
import { fetchHospitals } from '../actions';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchHospitals();
    }

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
                <HospitalResults userData={this.props.userData} illnesses={this.props.illnesses} hospitals={this.props.hospitals}/>
            </div>
        );    
    }
}


const mapStateToProps = state => {
    console.log("Staaate: ", state);
    return {
        fetchHospitals,
        illnesses: state.illnesses,
        hospitals: state.hospitals,
        user: state.user,
        userData: state.userData
    };
};

export default connect(mapStateToProps, { fetchHospitals })(App);