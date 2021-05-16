import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { addUserData, addUserName, fetchIllnesses } from '../actions';


class NewUserForm extends React.Component {
    componentDidMount() {
        this.props.fetchIllnesses();
    }

    saveUserName () {
        const userName = document.querySelector('#name').value;
        if (!userName) return;
        console.log("Rah", userName);
        this.props.addUserName(userName);
    }

    render() {
        console.error(this.props);
        if (!this.props.userName) {
            return (
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"></input>
                    <button onClick={() => this.saveUserName()}>Submit</button>
                </div>
            )    
        } else {
            return (
                <div>What's your illness, {this.props.userName}</div>
            )
        }
    }
}

const mapStateToProps = state => {
    console.log("Hey", state);
    return {
        addUserData,
        addUserName,
        userName: state.userName,
        illnesses: fetchIllnesses
    }
}

export default connect(mapStateToProps, { addUserData, addUserName, fetchIllnesses })(NewUserForm);