import React from 'react';
import StudentDashboard from '../components/StudentDashboard';


const SelectedJobs = ({ selectedJobs }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px', // Adjust the padding as needed
    marginBottom: '20px', // Add margin between heading and table
  };

  const cardStyle = {
    width: '80%', // Adjust the width as needed
    borderRadius: '8px',
    padding: '20px',
    marginTop: '20px', // Adjust the margin as needed
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Optional: Add a shadow for better visibility
    position: 'relative', // Set position to relative for absolute positioning of the outline
  };

  const outlineStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    content: '""',
    borderRadius: '8px',
    zIndex: '-1',
    border: '4px solid linear-gradient(to right, #ff7e5f, #feb47b)', // Red gradient border
  };

  return (
    <div>
      <StudentDashboard>
    <div style={navbarStyel}> <h4>University of Sri Jayewardenepura</h4> </div> <br/>
    <div style={containerStyle}>
      <h1>Selected Jobs</h1>
      {selectedJobs.map((job, index) => (
        <div key={index} style={cardStyle}>
          <div style={outlineStyle}></div>
          <h2>Job Details</h2>
          <table border="1" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Job Name</th>
                <th>Company Name</th>
                <th>Selected</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{job.jobName}</td>
                <td>{job.company}</td>
                <td style={{ color: job.selected ? 'green' : 'red' }}>
                  {job.selected ? 'Selected' : 'Not Selected'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
    </StudentDashboard>
    </div>
    
  );
};

export default SelectedJobs;

const navbarStyel = {
  background: "#880404",
  color: "#fff",
  padding: '10px',
  margin: '-20px',
  width: '117%',
  height: '60px',
  textAlign: 'center'
}