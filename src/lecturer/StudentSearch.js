import React, { useState } from 'react';
import LecturerDashboard from '../components/LecturerDashboard';

const StudentSearch = () => {
  const [studentId, setStudentId] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = () => {
    // Add logic for handling the search with the studentId
    // For now, let's assume searchResults is an array of student objects
    const mockSearchResults = [
      {
        id: '12345',
        name: 'Student 1',
        focusArea: 'Computer Science',
        emailAddress: 'std@example.com',
        phoneNumber: '07785461'
      },
      // Add more student objects as needed
    ];

    setSearchResults(mockSearchResults);
  };

  return (
    <div>
      <LecturerDashboard>
      <div style={navbarStye}> <h4>University of Sri Jayewardenepura</h4> </div> <br/> 

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ marginBottom: '100px' }}>Search the student</h1>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '100px' }}>
          <label htmlFor="studentId" style={{ marginRight: '10px', fontSize: '25px' }}>
            Search Student Using ID:
          </label>
          <input
            type="text"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="Enter Student ID"
            style={{ fontSize: '16px', padding: '8px' }}
          />
          <button onClick={handleSearch} style={{ fontSize: '16px', padding: '8px', margingLeft: '', background: '#f8d43c', color: 'black', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>
            Search
          </button>
        </div>

        

{searchResults && searchResults.length > 0 && (
  <div style={{ maxWidth: '800px', margin: 'auto' }}>
    <div
      style={{
        border: '2px solid transparent',
        backgroundClip: 'padding-box',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
      }}
    >
      <h2>Search Results</h2>
      <table border="1" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Focus Area</th>
            <th>Email Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.focusArea}</td>
              <td>{student.emailAddress}</td>
              <td>{student.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}




        {searchResults && searchResults.length === 0 && (
          <p>No results found for the given Student ID.</p>
        )}
      </div>
      </LecturerDashboard>
    </div>
  );
};

export default StudentSearch;

const navbarStye = {
  background: "#880404",
  color: "#fff",
  padding: '10px',
  margin: '-20px',
  width: '117%',
  height: '60px',
  textAlign: 'center'
}

const bottomNavbarStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  background: '#8d0707',  // Updated color
  color: '#fff',
  padding: '10px 0',
  width: '100%',
  textAlign: 'center',
};
