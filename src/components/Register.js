import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function Register() {
  return (
    <div className="p-3 mb-2 bg-light ">
        <div class="register">
            <br/><h2>Select Your Role</h2> 
        </div> 

        <div className="d-flex flex-row bd-highlight mb-3 text-dark justify-content-center">
        <Card style={{ width: '20rem', height: '25rem', margin: '5rem', background:'lightgray' }}>
            <Card.Img variant="top" src="holder.js/100px250" />
            <Card.Body>
                <Image src="/company.png"/>
                <Card.Title><center><h2>Student</h2></center></Card.Title>
                <Card.Text> </Card.Text>
                <a href="StudentRegister"  className="btn btn-primary  h-300 w-100   rounded-3 ">
                    Register 
                </a>
            </Card.Body>
        </Card>
        <Card style={{ width: '20rem', height: '25rem', margin: '5rem', background:'lightgray'}}>
            <Card.Img variant="top" src="holder.js/100px250" />
            <Card.Body>
                <Card.Title><center><h2>Lecturer</h2></center></Card.Title>
                <Card.Text> </Card.Text>
                <a href="LecturerRegister"  className="btn btn-primary  h-300 w-100   rounded-3 ">
                    Register 
                </a>
            </Card.Body>
        </Card>

        <Card style={{ width: '20rem', height: '25rem', margin: '5rem',background:'lightgray'  }}>
            <Card.Img variant="top" src="holder.js/100px250" />
            <Card.Body>
                <Card.Title><center><h2>Company</h2></center></Card.Title>
                <Card.Text> </Card.Text>
                <a href="CompanyRegister"  className="btn btn-primary  h-300 w-100   rounded-3 ">
                    Register 
                </a>
            </Card.Body>
        </Card>

        </div>
        
        
        
    </div>

    
  )
}

export default Register