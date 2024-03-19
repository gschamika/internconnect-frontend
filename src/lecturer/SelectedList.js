import React from 'react';
import LecturerDashboard from '../components/LecturerDashboard';

const SelectedList = () => {
  // Example data (replace with your actual data)
  const studentsData = [
    {
      id: 1,
      name: 'Student 1',
      email: 'std@example.com',
      idNumber: '123456',
      interviewAttempt: true, // Change to true if attempted
      interviewResult: 'Fail', // Change to 'Pass' if passed, 'Fail' if failed
      companyName: 'Company 1',
      jobName: 'Software Developer',
    },
    // Add more student data as needed
  ];

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px', // Adjust the top padding as needed
  };

  const navbarStyle = {
    background: '#8d0707',
    color: '#fff',
    padding: '10px 0',
    width: '100%',
    textAlign: 'center',
  };

  const bottomNavbarStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    background: '#8d0707',
    color: '#fff',
    padding: '10px 0',
    width: '100%',
    textAlign: 'center',
  };

  const tableStyle = {
    width: '100%', // Adjust the width as needed
    marginTop: '40px', 
    marginLeft: "50px"// Increase the top margin
  };

  return (
    <div>
      <LecturerDashboard>
      <div style={navbarStye}> <h4>University of Sri Jayewardenepura</h4> </div> <br/> 
      <div style={containerStyle}>
        <h1>Students Results</h1>
        <table border="2" style={tableStyle}>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Email </th>
              <th>ID </th>
              <th>Interview Attempt</th>
              <th>Interview Result</th>
              <th>Job Selected</th>
              <th>Company Name</th>
              <th>Job Name</th>
            </tr>
          </thead>
          <tbody>
            {studentsData.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.idNumber}</td>
                <td>{student.interviewAttempt ? 'Yes' : 'No'}</td>
                <td>{student.interviewAttempt ? student.interviewResult : 'Not Applicable'}</td>
                <td>
                  {student.interviewAttempt && student.interviewResult === 'Pass'
                    ? 'Yes'
                    : 'Not Selected'}
                </td>
                <td>
                  {student.interviewAttempt && student.interviewResult === 'Pass'
                    ? student.companyName
                    : 'Not Selected'}
                </td>
                <td>
                  {student.interviewAttempt && student.interviewResult === 'Pass'
                    ? student.jobName
                    : 'Not Selected'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </LecturerDashboard>
    </div>
  );
};

export default SelectedList;

const navbarStye = {
  background: "#880404",
  color: "#fff",
  padding: '10px',
  margin: '-20px',
  width: '117%',
  height: '60px',
  textAlign: 'center'
}