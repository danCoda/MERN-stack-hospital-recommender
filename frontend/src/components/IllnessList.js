import React from 'react';
import { connect } from 'react-redux';
import { fetchIllnesses } from '../actions';

class IllnessList extends React.Component {
    componentDidMount() {
        console.log("Mounted.");
        this.props.fetchIllnesses();
    }

    renderList() {
        if (!this.props.illnesses?._embedded) return;
        console.log(this.props);

        const illnessList = this.props.illnesses._embedded.illnesses;
        console.log("illnessList: ", illnessList);

        return illnessList.map(data => {
            return (
                <div key={data.illness.id}>
                    ADD NEW USER
                    <h3>{data.illness.name}</h3>
                    <a href={data._links.illnesses}>Info</a>
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

    return {
        illnesses: state.illnesses
    };
};

export default connect(mapStateToProps, { fetchIllnesses })(IllnessList);