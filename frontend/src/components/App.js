import React from 'react';
import { connect } from 'react-redux';

import NewUserForm from './NewUserForm';
import HospitalResults from './HospitalResults';
import UsersList from './UsersList';

import { fetchHospitals, fetchUsers } from '../actions';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchHospitals();
        this.props.fetchUsers();
    }

    render() {
        console.log("App rerendered.");

        if (!this.props.userData) {
            if (this.props.users.length) {
                return (
                    <UsersList />
                );
            } else {
                return (
                    <div>
                        <h1>New Patient Form</h1>
                        <NewUserForm />
                    </div>
                );
            }
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
        fetchUsers,
        illnesses: state.illnesses,
        hospitals: state.hospitals,
        users: state.users,
        user: state.user,
        userData: state.userData
    };
};

export default connect(mapStateToProps, { fetchHospitals, fetchUsers })(App);