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
                <div key={h.id}>
                    <h3>{h.name}</h3>
                    <div>Waiting time: {getHospitalWaitTime(userPainLevel, h)} minutes</div>
                </div>
            );
        });
    };

    const getUserIllness = () => {
        const illness = props.illnesses.find(ill => ill.illness.id === props.userData.diagnosisId).illness;
        return illness.name;
    }
    return (
        <div>
            <h3>Available Hospitals </h3>
            <p>Illness: {getUserIllness()}</p>
            {renderHospitalList()}
        </div>
    );
};

export default HospitalResults;
