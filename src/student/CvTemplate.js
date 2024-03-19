import React from 'react';
import image1 from '../template/image1.jpg';
import image3 from '../template/image3.jpg';
import image4 from '../template/image4.jpg';
import image5 from '../template/image5.jpg';
import image6 from '../template/image6.jpg';
import image7 from '../template/image7.jpg';
import image8 from '../template/image8.jpg';
import image9 from '../template/image9.jpg';
import StudentDashboard from '../components/StudentDashboard';

// Reusable Card Component
const Card = ({ title, imageUrl }) => {
  const cardSectionStyles = {
    width: '300px',
    padding: '20px',
    margin: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    background: '#305468',
    color: 'white'
  };

  const imageStyles = {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
    borderRadius: '8px',
  };

  const buttonStyles = {
    background: '#f8d43c',
    color: 'black',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const handleDownload = () => {
    // Handle download logic here
    alert(`Download ${title}`);
  };

  return (
    <div style={cardSectionStyles}>
      <h2>{title}</h2>
      <img src={imageUrl} alt={`Image for ${title}`} style={imageStyles}/>
      <p></p>
      <center><button style={buttonStyles} onClick={handleDownload}>
        Download
      </button> </center>
    </div>
  );
};

const CvTemplate = () => {
  // Replace these with the actual URLs or paths of your images
  const imageUrls = [image1, image3, image4, image5, image6, image7, image8, image9];

  return (
    <div>
      <StudentDashboard>
      <div style={navbarStyel}> <h4>University of Sri Jayewardenepura</h4> </div> <br/> 
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}>
        <h1>CV Templates</h1> <br/>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[...Array(12)].map((_, index) => (
            <center><Card key={index} title={`Template ${index + 1}`} imageUrl={imageUrls[index % imageUrls.length]} /></center>
          ))}
        </div>
      </div>
      </StudentDashboard>
    </div>
  );
};

export default CvTemplate;

const navbarStyel = {
  background: "#880404",
  color: "#fff",
  padding: '10px',
  margin: '-20px',
  width: '117%',
  height: '60px',
  textAlign: 'center'
}
