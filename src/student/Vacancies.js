import React from 'react';
import Vacanci1 from '../vacancies/1.jpg';
import Vacanci2 from '../vacancies/2.png';
import Vacanci3 from '../vacancies/3.png';
import Vacanci4 from '../vacancies/4.png';
import Vacanci5 from '../vacancies/5.png';
import Vacanci6 from '../vacancies/6.png';
import Vacanci7 from '../vacancies/13.png';
import Vacanci8 from '../vacancies/8.jpg';
import Vacanci9 from '../vacancies/9.png';
import Vacanci10 from '../vacancies/10.png';
import Vacanci11 from '../vacancies/11.png';
import Vacanci12 from '../vacancies/12.png';
import Vacanci13 from '../vacancies/13.png';
import Vacanci14 from '../vacancies/14.png';
import Vacanci15 from '../vacancies/15.jpg';
import StudentDashboard from '../components/StudentDashboard';

const Vacancies = () => {
  // Replace these with the actual URLs or paths of your images
  const imageUrls = [
    Vacanci1,
    Vacanci2,
    Vacanci3,
    Vacanci4,
    Vacanci5,
    Vacanci6,
    Vacanci7,
    Vacanci8,
    Vacanci9,
    Vacanci10,
    Vacanci11,
    Vacanci12,
    Vacanci13,
    Vacanci14,
    Vacanci15
  ];

  const jobDetails = [
    { title: 'Junior Executive Graphic Designing', company: 'Konnect Net Pvt Ltd', place: 'Nugegoda' },
    { title: 'Senior Functional Consultant', company: 'Epic Technology Group', place: 'Battaramulla' },
    { title: 'Software Engineer - Flutter', company: 'Epic Technology Group', place: 'Battaramulla' }, 
    { title: 'Senior Quantity Assurance Engineer', company: 'Evicio (Pvt) Ltd', place: 'Colombo' },
    { title: 'IT Department - Software Engineer', company: 'Merchant Bank of Sri Lanka & Finance (MBSL)', place: 'Colombo 3' },
    { title: 'Technical Support Engineer', company: 'Ateam Software', place: 'Colombo' },
    { title: 'IBM Mainframe Developer', company: 'Softcodeit Solutions (Pvt) Ltd', place: 'Gampaha' },
    { title: 'Software Engineer - Java EE', company: 'Genesiis Software Pvt Ltd', place: 'Colombo 3' },
    { title: 'Senior QA Engineer - Manual & Automation', company: 'Epic Technology Group', place: 'Colombo' },
    { title: 'Java Full Stack / Spring Boot', company: 'VitalHub (Pvt) Ltd', place: 'Colombo' },
    { title: 'UI/UX Designer', company: 'Strategic Partnership Solutions', place: 'Nugegoda' },
    { title: 'Full Stack Developer', company: 'Stalione Lanka', place: 'Colombo' },
    { title: 'Support Engineer', company: 'Bileeta (Private) Limited', place: 'Maharagama' },
    { title: 'Developer Designer (US Shift)', company: 'H Connect International (Pvt) Ltd', place: 'Gampaha' },
    { title: 'Senior Specialist - Application Support', company: 'DPMC Assetline Holdings', place: 'Colombo' }
  ];

  const cardStyle = {
    width: '250px', // Increased card width
    height: '600px', // Increased card height
    border: '1px solid transparent', // Transparent border initially
    borderRadius: '8px',
    margin: '10px',
    padding: '10px',
    textAlign: 'left', // Align text to the left
    display: 'flex',
    background: '#305468',
    color: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Box shadow for a lifted effect
    transition: 'border 0.5s', // Smooth transition for the border color
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    maxHeight: '80%', // Adjust the max height as needed
    borderRadius: '8px',
    objectFit: 'cover', // Ensure the entire image is visible within the container
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
    
  };

  return (
    <div>
      <StudentDashboard>
      <div style={navbarStyel}> <h4>University of Sri Jayewardenepura</h4> </div> <br/>
    
    <div style={containerStyle}>
      <br/><h1>Job Vacancies</h1> <br/>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            style={{
              ...cardStyle
              
            }}
          >
            <center><h3>{`Vacancy ${index + 1}`}</h3></center>
            <img src={imageUrl} alt={`Image for Card ${index + 1}`} style={imageStyle} />
            <p>
              <strong>Job Title:</strong> {jobDetails[index].title} <br/>
              <strong>Company:</strong> {jobDetails[index].company} <br/>
              <strong>Place:</strong> {jobDetails[index].place}
            </p>
          </div>
        ))}
      </div>
    </div>
    </StudentDashboard>
    </div>
  );
};

export default Vacancies;

const navbarStyel = {
  background: "#880404",
  color: "#fff",
  padding: '10px',
  margin: '-20px',
  width: '117%',
  height: '60px',
  textAlign: 'center'
}