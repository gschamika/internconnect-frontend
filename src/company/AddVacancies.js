import React, { useState } from 'react';
import CompanyDashboard from '../components/CompanyDashboard';

const AddVacancies = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        jobVacancyName: '',
        vacanciesAvailable: 0,
        jobDescription: '',
        posterImage: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, posterImage: file });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission (e.g., send data to a server)
        console.log(formData);
    };

    return (
        <div>
            <CompanyDashboard>
            <div style={navbarStye}> <h4>University of Sri Jayewardenepura</h4> </div> <br/> 
            <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}>
                <h1 style={{ marginBottom: '40px' }}>Add Vacancies</h1>
                <form onSubmit={handleSubmit} style={{ width: '300px', margin: 'auto' }}>
                    <label style={{ display: 'block', marginBottom: '10px' }}>
                        Company Name:
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '8px' }}
                        />
                    </label>
                    <label style={{ display: 'block', marginBottom: '10px' }}>
                        Job Vacancy Name:
                        <input
                            type="text"
                            name="jobVacancyName"
                            value={formData.jobVacancyName}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '8px' }}
                        />
                    </label>
                    <label style={{ display: 'block', marginBottom: '10px' }}>
                        Vacancies Available:
                        <input
                            type="number"
                            name="vacanciesAvailable"
                            value={formData.vacanciesAvailable}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '8px' }}
                        />
                    </label>
                    {/* Add Job Vacancy Description */}
                    <label style={{ display: 'block', marginBottom: '10px' }}>
                        Job Vacancy Description:
                        <textarea
                            name="jobDescription"
                            value={formData.jobDescription}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '8px' }}
                        />
                    </label>
                    <label style={{ display: 'block', marginBottom: '10px' }}>
                        Poster Image:
                        <input
                            type="file"
                            accept="image/*"
                            name="posterImage"
                            onChange={handleFileChange}
                            style={{ width: '100%', padding: '8px' }}
                        />
                    </label>
                    <br />
                    <button type="submit" style={{ width: '100%', padding: '10px', marginTop: '15px',background: '#f8d43c', color: 'black', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', }}>Submit</button>
                </form>
            </div>
            </CompanyDashboard>
        </div>
    );
};

export default AddVacancies;

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
