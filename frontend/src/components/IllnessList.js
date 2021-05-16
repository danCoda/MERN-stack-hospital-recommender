import React from 'react';
import { connect } from 'react-redux';
import { fetchIllnesses } from '../actions';

class IllnessList extends React.Component {
    componentDidMount() {
        console.log("Mounted.");
        this.props.fetchIllnesses();
    }

    render() {
        console.log(this.props.illnesses);
        return (
            <h1>Illnesses</h1>
        );
    };
};

const mapStateToProps = state => {
    return {
        illnesses: state.illnesses
    };
};

export default connect(mapStateToProps, { fetchIllnesses })(IllnessList);