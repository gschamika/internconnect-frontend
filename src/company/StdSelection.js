import React, { useState } from 'react';
import CompanyDashboard from '../components/CompanyDashboard';

const StdSelection = () => {
    const [formData, setFormData] = useState({
        studentId: '',
        studentName: '',
        jobName: '',
        participation: '',
        result: '',
        comment: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleParticipationChange = (e) => {
        setFormData({ ...formData, participation: e.target.value });
    };

    const handleResultChange = (e) => {
        setFormData({ ...formData, result: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission ( send data to a server)
        console.log(formData);
    };

    return (
        <div>
            <CompanyDashboard>
            <div style={navbarStye}> <h4>University of Sri Jayewardenepura</h4> </div> <br/> 
            <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}>
                <h1>Student Selection</h1> <br/>
                <form onSubmit={handleSubmit} style={{ width: '300px', margin: 'auto' }}>
                    <label style={{ display: 'block', marginBottom: '15px', marginTop: '10px' }}>
                        Student ID:
                        <input
                            type="text"
                            name="studentId"
                            value={formData.studentId}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '8px' }}
                        />
                    </label>
                    <label style={{ display: 'block', marginBottom: '15px', marginTop: '10px' }}>
                        Student Name:
                        <input
                            type="text"
                            name="studentName"
                            value={formData.studentName}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '8px' }}
                        />
                    </label>
                    <label style={{ display: 'block', marginBottom: '15px', marginTop: '10px' }}>
                        Job Name:
                        <input
                            type="text"
                            name="jobName"
                            value={formData.jobName}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '8px' }}
                        />
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', marginTop: '10px' }}>
                        Participation:
                        <div style={{ marginLeft: '10px' }}>
                            <label style={{ marginRight: '50px' }}>
                                <input
                                    type="radio"
                                    name="participation"
                                    value="yes"
                                    checked={formData.participation === 'yes'}
                                    onChange={handleParticipationChange}
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="participation"
                                    value="no"
                                    checked={formData.participation === 'no'}
                                    onChange={handleParticipationChange}
                                />
                                No
                            </label>
                        </div>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', marginTop: '10px' }}>
                        Results:
                        <div style={{ marginLeft: '45px' }}>
                            <label style={{ marginRight: '20px' }}>
                                <input
                                    type="radio"
                                    name="result"
                                    value="selected"
                                    checked={formData.result === 'selected'}
                                    onChange={handleResultChange}
                                />
                                Selected
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="result"
                                    value="notSelected"
                                    checked={formData.result === 'notSelected'}
                                    onChange={handleResultChange}
                                />
                                Not Selected
                            </label>
                        </div>
                    </label>
                    <label style={{ display: 'block', marginBottom: '15px', marginTop: '10px' }}>
                        Comment:
                        <textarea
                            name="comment"
                            value={formData.comment}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '8px' }}
                        />
                    </label>
                    <br />
                    <button type="submit" style={{ width: '100%', padding: '10px', marginTop: '15px',background: '#f8d43c', color: 'black', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', }}>
                        Submit
                    </button>
                </form>
            </div>
            </CompanyDashboard>
        </div>
    );
};

export default StdSelection;

const navbarStye = {
    background: "#880404",
    color: "#fff",
    padding: '10px',
    margin: '-20px',
    width: '117%',
    height: '60px',
    textAlign: 'center'
  }

const buttonStyles = {
    background: '#f8d43c',
    color: 'black',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};
