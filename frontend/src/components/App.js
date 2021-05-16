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
        if (!this.props.userData) {
            if (this.props.users.length) {
                return (
                    <div>
                        <NewUserForm />
                        <UsersList />
                    </div>
                );
            } else {
                return (
                    <div>
                        <h4>New Patient Form</h4>
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