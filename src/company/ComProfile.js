import React, { useState } from 'react';
import CompanyDashboard from '../components/CompanyDashboard';

const ComProfile = () => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
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
    <div style={{alignContents: "center"}}>
      <CompanyDashboard>
      <div style={navbarStye}> <h4>University of Sri Jayewardenepura</h4> </div> <br/> <br/>

      <div style={{ display: 'flex', marginLeft: '320px', textAlign:'center' }}>
        <div style={{ marginRight: '20px' }}>
          {image ? (
            <img
              src={image}
              alt="Company Profile"
              style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            />
          ) : (
            <div>
              
            </div>
          )}

        </div>

        <div style={{margingLeft: "100px"}}>
          <h1 style={{ marginBottom: '100px' }}>Company Profile</h1>
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
                Registration Number:
              </label>
              <input
                type="text"
                name="regnum"
                value={details.address}
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
                name="university"
                value={details.university}
                onChange={handleInputChange}
                style={{ fontSize: '22px', textAlign: 'center', width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: '10px', textAlign: 'center' }}>
              <label style={{ fontSize: '22px' }}>
                Email:
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
                User Name:
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
              <button type="submit" style={{ width: '100%', padding: '10px', marginTop: '15px',background: '#f8d43c', color: 'black', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', }}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      </CompanyDashboard>
    </div>
  );
};

export default ComProfile;

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
