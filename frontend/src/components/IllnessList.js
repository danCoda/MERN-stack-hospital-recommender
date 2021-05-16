import React from 'react';
import { connect } from 'react-redux';
import { fetchIllnesses } from '../actions';

class IllnessList extends React.Component {
    componentDidMount() {
        console.log("Mounted.");
        this.props.fetchIllnesses();
    }

    renderList() {
        if (!this.props.illnesses) return;

        const illnesses = this.props.illnesses._embedded.illnesses;
        console.log("Ill: ", illnesses);
        return illnesses.map(illness => {
            return (
                <div key={illness.id}>
                    <h3>{illness.illness.name}</h3>
                    <a href={illness._links.illness}>Info</a>
                </div>
            );
        });
    };

    render() {
        console.log(this.props.illnesses);
        return (
            <div>
                <h1>Illnesses</h1>
                <div>
                    {this.renderList()}
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    console.log("State: ", state);

    return {
        illnesses: state.illnesses
    };
};

export default connect(mapStateToProps, { fetchIllnesses })(IllnessList);