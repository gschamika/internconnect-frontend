import React, { useState } from 'react';
import LecturerDashboard from '../components/LecturerDashboard';

const LecProfile = () => {
  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [details, setDetails] = useState({
    name: '',
    address: '',
    university: '',
    department: '',
    phoneNumber: '',
    emailAddress: '',
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePdfUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPdf(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  /* 
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'uploaded_pdf.pdf';
    link.click();
  };
  */

  return (
    <div>
      <LecturerDashboard>
      <div style={navbarStye}> <h4>University of Sri Jayewardenepura</h4> </div> <br/> <br/> 

      <div style={{ display: 'flex', marginRight: '20px' }}>
        <div style={{ marginRight: '20px' }}>
          {image ? (
            <img
              src={image}
              alt="Student Profile"
              style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            />
          ) : (
            <div>
              <h3>Profile Picture</h3>
            </div>
          )}
          <input type="file" onChange={handleImageUpload} accept="image/*" />
        </div>

        <div>
          <h1 style={{ marginBottom: '100px' }}>Lecturer Profile</h1>
          <form style={{ maxWidth: '400px' }}>
            <div style={{ marginBottom: '10px', textAlign: 'center' }}>
              <label style={{ fontSize: '22px', marginRight: '10px' }}>
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={details.name}
                onChange={handleInputChange}
                style={{ fontSize: '22px', textAlign: 'center', width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: '10px', textAlign: 'center' }}>
              <label style={{ fontSize: '22px' }}>
                Address:
              </label>
              <input
                type="text"
                name="address"
                value={details.address}
                onChange={handleInputChange}
                style={{ fontSize: '22px', textAlign: 'center', width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: '10px', textAlign: 'center' }}>
              <label style={{ fontSize: '22px' }}>
                University:
              </label>
              <input
                type="text"
                name="university"
                value={details.university}
                onChange={handleInputChange}
                style={{ fontSize: '22px', textAlign: 'center', width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: '10px', textAlign: 'center' }}>
              <label style={{ fontSize: '22px' }}>
                Department:
              </label>
              <input
                type="text"
                name="department"
                value={details.department}
                onChange={handleInputChange}
                style={{ fontSize: '22px', textAlign: 'center', width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: '10px', textAlign: 'center' }}>
              <label style={{ fontSize: '22px' }}>
                Phone Number:
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={details.phoneNumber}
                onChange={handleInputChange}
                style={{ fontSize: '22px', textAlign: 'center', width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: '10px', textAlign: 'center' }}>
              <label style={{ fontSize: '22px' }}>
                Email Address:
              </label>
              <input
                type="text"
                name="emailAddress"
                value={details.emailAddress}
                onChange={handleInputChange}
                style={{ fontSize: '22px', textAlign: 'center', width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: '50px', textAlign: 'center' }}>
              <button type="submit" style={{ fontSize: '22px', background: '#f8d43c', color: 'black', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Update
              </button>
            </div>

            {/*
            <div style={{
              marginBottom: '20px',
              textAlign: 'center',
              background: 'linear-gradient(to right, #ff4e50, #fc913a)',
              padding: '10px',
              borderRadius: '5px',
              color: 'white',
              fontWeight: 'bold',
            }}>
              Upload Your CV Here
            </div>

            <div>
              {pdf && (
                <div>
                  <h3 style={{ marginBottom: '10px' }}>Upload Your CV</h3>
                  <iframe
                    title="PDF Preview"
                    src={pdf}
                    width="200"
                    height="200"
                    frameBorder="0"
                  ></iframe>
                  <button
                    onClick={downloadPdf}
                    style={{
                      fontSize: '16px',
                      padding: '8px 16px',
                      backgroundColor: '#e74c3c',
                      color: 'white',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      border: 'none',
                      marginTop: '10px',
                    }}
                  >
                    Download Your CV
                  </button>
                </div>
              )}

              <input type="file" onChange={handlePdfUpload} accept=".pdf" style={{ marginTop: '10px' }} />
            </div>
            */}

          </form>
        </div>
      </div>
      </LecturerDashboard>
    </div>
  );
};

export default LecProfile;

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
  background: '#8d0707',
  color: '#fff',
  padding: '10px 0',
  width: '100%',
  textAlign: 'center',
};
