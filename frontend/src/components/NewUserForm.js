import React from 'react';
import { connect } from 'react-redux';
import { addUserData, saveUserName, fetchIllnesses, saveUserIllness, saveUserPainLevel } from '../actions';

class NewUserForm extends React.Component {
    componentDidMount() {
        this.props.fetchIllnesses();
    }

    saveUserName () {
        let userName = document.querySelector('#name').value;
        if (!userName) return;
        // Capitalise first letter.
        userName = userName.charAt(0).toUpperCase() + userName.slice(1)
        this.props.saveUserName(userName);
    };

    renderIllnessList() {
        return this.props.illnesses.map(data => {
            return (
                <tr key={data.illness.id}>
                    <td>{data.illness.name}</td>
                    <td>
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
            <div>
                <div onClick={() => this.savePainLevel(0)}>0 meh</div>
                <div onClick={() => this.savePainLevel(1)}>1</div>
                <div onClick={() => this.savePainLevel(2)}>2</div>
                <div onClick={() => this.savePainLevel(3)}>3</div>
                <div onClick={() => this.savePainLevel(4)}>4 owwww</div>
            </div>
        )
    }

    render() {
        console.warn("this.props: ", this.props);

        if (this.props.userName && this.props.userIllness && this.props.userPainLevel) {
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
                <div>
                    <h4>Let's start with your name.</h4>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Name" id="name" />
                        <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button"
                                onClick={() => this.saveUserName()}>
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            );  
        };
        
        if (!this.props.userIllness) {
            // Select illness.
            return (
                <div>
                    <h4>What's your illness, {this.props.userName}?</h4>
                    <table class="table table-striped">
                        <tbody>
                            {this.renderIllnessList()}
                        </tbody>
                    </table>
                </div>
            );
        };

        if (!this.props.userPainLevel) {
            // Select pain level.
            return (
                <div>
                    <h4>You are suffering from {this.props.userIllness.illness.name}</h4>
                    <p>How much pain are you in?</p>
                    {this.renderPainScale()}
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