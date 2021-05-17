import React from 'react';
import { connect } from 'react-redux';
import { addUserData, saveUserName, fetchIllnesses, saveUserIllness, saveUserPainLevel } from '../actions';

class NewUserForm extends React.Component {
    componentDidMount() {
        this.props.fetchIllnesses();
    }

    saveUserName () {
        // Saves to the database.
        let userName = document.querySelector('#name').value;
        if (!userName) return;
        // Capitalise first letter.
        userName = userName.charAt(0).toUpperCase() + userName.slice(1)
        this.props.saveUserName(userName);
    };

    renderIllnessList() {
        return this.props.illnesses.map((data, i) => {
            return (
                <tr key={data.illness.id}>
                    <td>
                        {data.illness.name}
                    </td>
                    <td className="d-flex justify-content-around">
                        <button 
                            onClick={() => this.props.saveUserIllness(data)}
                            className="btn btn-primary btn-sm"
                        >
                            Select
                        </button>
                    </td>
                </tr>
            );
        });
    };

    savePainLevel(level) {
        this.props.saveUserPainLevel(level);
    }

    renderPainScale() {
        return (
            <div id="painScale">
                <div onClick={() => this.savePainLevel(0)}>
                    <i className="far fa-lg fa-meh"></i>
                    <span>1. "Not sure"</span>
                </div>
                <div onClick={() => this.savePainLevel(1)}>
                    <i className="far fa-lg fa-grimace"></i>
                    <span>2. "Uncomfortable"</span>
                </div>
                <div onClick={() => this.savePainLevel(2)}>
                    <i className="far fa-lg fa-frown"></i>
                    <span>3. "Rather concerning"</span>
                </div>
                <div onClick={() => this.savePainLevel(3)}>
                    <i className="far fa-lg fa-sad-tear"></i>
                    <span>4. "Severe"</span>
                </div>
                <div onClick={() => this.savePainLevel(4)}>
                    <i className="far fa-lg fa-sad-cry"></i>
                    <span>5. "OMG HAALP"</span>
                </div>
            </div>
        )
    }

    render() {
        if (this.props.userName && this.props.userIllness && this.props.userPainLevel !== null) {
            // We have all the needed user data. Save to database to trigger new view.
            this.props.addUserData({
                name: this.props.userName,
                diagnosisId: this.props.userIllness.illness.id,
                painLevel: this.props.userPainLevel
            });
            return <div>Loading...</div>;
        };
        
        if (!this.props.userName) {
            // Get username.
            return (
                <div className="custom-container container">
                    <div className="card">
                        <div className="card-body">
                            <p>Step 1/3</p>
                            <h5>Let's start with your name</h5>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Name" id="name" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button"
                                        onClick={() => this.saveUserName()}>
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );  
        };
        
        if (!this.props.userIllness) {
            // Select illness.
            return (
                <div className="custom-container container">
                    <div className="card">
                        <div className="card-body">
                            <p>Step 2/3</p>
                            <h4>What's your illness, {this.props.userName}?</h4>
                            <table className="table table-striped">
                                <tbody>
                                    {this.renderIllnessList()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        };

        if (!this.props.userPainLevel) {
            // Select pain level.
            return (
                <div className="custom-container container">
                    <div className="card">
                        <div className="card-body">
                            <p className="lead">You are suffering from <em>{this.props.userIllness.illness.name}</em>.</p>
                            <p>Step 3/3</p>
                            <h4>How much pain are you in?</h4>
                            {this.renderPainScale()}
                        </div>
                    </div>
                </div>
            );
        };

        return <div>Shouldn't get here...</div>;
    }
}

const mapStateToProps = state => {
    return {
        fetchIllnesses,
        saveUserName,
        saveUserIllness,
        saveUserPainLevel,
        addUserData,
        userName: state.userName,
        illnesses: state.illnesses,
        userIllness: state.userIllness,
        userPainLevel: state.userPainLevel,
        userData: {...state.userData}
    }
}

export default connect(mapStateToProps, { addUserData, saveUserName, fetchIllnesses, saveUserIllness, saveUserPainLevel })(NewUserForm);