import React from 'react';

const HospitalResults = props => {
    const getHospitalWaitTime = (painLevel, hospital) => {
        return hospital.waitingList[painLevel].patientCount * hospital.waitingList[painLevel].averageProcessTime;
    };

    const sortHospitalByWaitingTime = () => {
        props.hospitals.sort((a, b) => {
            const waitingTimeA = getHospitalWaitTime(userPainLevel, a);
            const waitingTimeB = getHospitalWaitTime(userPainLevel, b);
            
            if (waitingTimeA > waitingTimeB) return 1;
            if (waitingTimeA < waitingTimeB) return -1;
            return 0;
        });    
    };
    
    const userPainLevel = props.userData.painLevel;
    sortHospitalByWaitingTime();

    const renderHospitalList = () => {
        return props.hospitals.map(h => {
            return (
                <tr scope="row" key={h.id}>
                    <td>{h.name}</td>
                    <td className="text-center">{getHospitalWaitTime(userPainLevel, h)}</td>
                </tr>
            );
        });
    };

    const getUserIllness = () => {
        const illness = props.illnesses.find(ill => ill.illness.id === props.userData.diagnosisId).illness;
        return illness.name;
    }
    return (
        <div className="custom-container container">
            <div className="card">
                <div className="card-body">
                    <h3>Suggested Hospitals for you, {props.userData.name}</h3>
                    <p>... for you illness <em>{getUserIllness()}</em></p>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center align-middle">Hospital name</th>
                                <th scope="col" className="text-center">Average wait time (minutes)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderHospitalList()}
                        </tbody>
                    </table>
                </div>    
            </div>
            <div className="alert alert-warning" role="alert">
                Thank you. Take me back to the <a href="" className="alert-link" onClick={() => window.location.reload()}>homepage</a>.
            </div>
        </div>
    );
};

export default HospitalResults;
