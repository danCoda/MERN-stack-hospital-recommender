import React from 'react';
import { connect } from 'react-redux';
import { setUserData, deleteUser } from '../actions';

class UsersList extends React.Component {
    
    renderList() {
        return this.props.users.map(user => {
            return (
                <tr key={user._id}>
                    <td onClick={() => this.props.setUserData(user)}>{user.name}</td>
                    <td className="d-flex justify-content-around">
                        <button 
                            onClick={() => this.props.deleteUser(user._id)}
                            className="btn btn-danger btn-sm"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            );
        });
    };

    render() {
        console.error(this.props);
        return (
            <div className="custom-container container" id="previous-users">
                <div className="card">
                    <div className="card-body">
                        <h5>Previous users:</h5>
                        
                        <table className="table table-striped">
                            <tbody>
                                {this.renderList()}
                            </tbody>
                        </table>
                    </div>
                </div>
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
