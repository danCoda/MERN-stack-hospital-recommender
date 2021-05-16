import React from 'react';
import { connect } from 'react-redux';
import { setUserData, deleteUser } from '../actions';

class UsersList extends React.Component {
    
    renderList() {
        return this.props.users.map(user => {
            return (
                <div key={user._id}>
                    <span>{user.name}</span>
                    <button 
                        onClick={() => this.props.deleteUser(user._id)}
                    >
                        Delete
                    </button>
                </div>
            )
        });
    };

    render() {
        console.error(this.props);
        return (
            <div>
                <h1>Users:</h1>
                {this.renderList()}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        users: state.users,
        setUserData, 
        deleteUser
    }
}

export default connect(mapStateToProps, { setUserData, deleteUser })(UsersList);
