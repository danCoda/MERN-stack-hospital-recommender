import React from 'react';
import { connect } from 'react-redux';
import { addUserData, saveUserName, fetchIllnesses, saveUserIllness, saveUserPainLevel } from '../actions';


class NewUserForm extends React.Component {
    componentDidMount() {
        this.props.fetchIllnesses();
    }

    saveUserName () {
        const userName = document.querySelector('#name').value;
        if (!userName) return;
        this.props.saveUserName(userName);
    };

    renderIllnessList() {
/*         if (!this.props.illnesses?._embedded) return;

        const illnessList = this.props.illnesses._embedded.illnesses;
 */
        return this.props.illnesses.map(data => {
            return (
                <div key={data.illness.id}>
                    <h3>{data.illness.name}</h3>
                    <button onClick={() => this.props.saveUserIllness(data)}>Select</button>
                </div>
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
            this.props.addUserData({
                name: this.props.userName,
                diagnosisId: this.props.userIllness.illness.id,
                painLevel: this.props.userPainLevel
            });
            return <div>Heh</div>;
        }
        
        if (!this.props.userName) {
            // Get username.
            return (
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"></input>
                    <button onClick={() => this.saveUserName()}>Submit</button>
                </div>
            );  
        } 
        
        if (!this.props.userIllness) {
            // Get illness.
            return (
                <div>
                    <h3>What's your illness, {this.props.userName}</h3>
                    {this.renderIllnessList()}
                </div>
            );
        }

        if (!this.props.userPainLevel) {
            return (
                <div>
                    <h3>You are suffering from {this.props.userIllness.illness.name}</h3>
                    <p>How much pain are you in?</p>
                    {this.renderPainScale()}
                </div>
            );
        }

        return(
            <div>Well then, yo...</div>
        )
    }
}

const mapStateToProps = state => {
    console.log("State: ", state);
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