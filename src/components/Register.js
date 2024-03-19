import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import img1 from '../images/student.png';
import img2 from '../images/lecturer.png';
import img3 from '../images/company.png';

console.log(img1);
console.log(img2);
console.log(img3);

function Register() {
  return (
    <div className="p-3 mb-2 bg-light ">
        <div class="register">
            <br/><h2>Select Your Role</h2> 
        </div> 

        <div className="d-flex flex-row bd-highlight mb-3 text-dark justify-content-center">
        <Card style={{ width: '20rem', height: '25rem', margin: '5rem', background:'#880404', color: 'white' }}> <br/>
        <center><Card.Img variant="top" src={img1} style={{width: '200px', height: '200px'}} /> </center>
            <Card.Body>
                <Card.Title><center><h2>Student</h2></center></Card.Title>
                <Card.Text> </Card.Text> <br/>
                <a href="StudentRegister"  className="btn btn-primary  h-300 w-100   rounded-3 " style={{background: '#f8d43c', color: 'black',padding: '10px',border: 'none',borderRadius: '4px',cursor: 'pointer',}}>
                    Register 
                </a>
            </Card.Body>
        </Card>
        <Card style={{ width: '20rem', height: '25rem', margin: '5rem', background:'#880404', color: 'white'}}> <br/>
        <center><Card.Img variant="top" src={img2} style={{width: '200px', height: '200px'}} /> </center>
            <Card.Body>
                <Card.Title><center><h2>Lecturer</h2></center></Card.Title>
                <Card.Text> </Card.Text> <br/>
                <a href="LecturerRegister"  className="btn btn-primary  h-300 w-100   rounded-3 " style={{background: '#f8d43c', color: 'black',padding: '10px',border: 'none',borderRadius: '4px',cursor: 'pointer',}}>
                    Register 
                </a>
            </Card.Body>
        </Card>

        <Card style={{ width: '20rem', height: '25rem', margin: '5rem',background:'#880404', color: 'white'  }}> <br/>
        <center><Card.Img variant="top" src={img3} style={{width: '200px', height: '200px'}} /> </center>
            <Card.Body>
                <Card.Title><center><h2>Company</h2></center></Card.Title>
                <Card.Text> </Card.Text> <br/>
                <a href="CompanyRegister"  className="btn btn-primary  h-300 w-100   rounded-3 " style={{background: '#f8d43c', color: 'black',padding: '10px',border: 'none',borderRadius: '4px',cursor: 'pointer',}}>
                    Register 
                </a>
            </Card.Body>
        </Card>

        </div>
        
        
        
    </div>

    
  )
}

export default Register