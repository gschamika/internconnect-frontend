import React, { Component } from 'react'
import lecturerService from '../services/lecturerService';


class CreateLecturerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            lec_id: '',
            name: '',
            lec_email: '',
            lec_phone: '',
            username: '',
            password: ''
        }

        this.saveLecturer = this.saveLecturer.bind(this);
    }

    saveLecturer = (e) => {
        e.preventDefault();
        let lecturer = {lec_id: this.state.lec_id, name: this.state.name, lec_email: this.state.lec_email, lec_phone: this.state.lec_phone,username: this.state.username, password: this.state.password};
        console.log('lecturer => ' + JSON.stringify(lecturer));

        lecturerService.createLecturer(lecturer).then(res =>{
            //this.props.history.push('/employees');
        });

        
    }

    changeIdHandler= (event) => {
        this.setState({lec_id: event.target.value});
    }
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({lec_email: event.target.value});
    }
    changePhnHandler= (event) => {
        this.setState({lec_phone: event.target.value});
    }
    changeUserNameHandler= (event) => {
        this.setState({username: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    

    render(){
        return(
            <div>
                <div style={navbarStyel}> <h4>University of Sri Jayewardenepura</h4> </div>
            
            <div className="d-flex justify-content-center align-items-center bg-#afafaf vh-250">
                <div className="bg-white  rounded w-25">
                    <div className='lecturer'>
                    <br></br> <h2> <center>Lecturer Registration</center></h2> <br/> <br/>
                    </div>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="id">
                                <strong>Lecturer ID</strong>
                            </label>
                            <input
                            type="text"
                            placeholder="Enter your ID"
                            autoComplete="off"
                            name="id"
                            className="form-control rounded-0"
                            onChange={this.changeIdHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="name">
                                <strong>Lecturer_Name</strong>
                            </label>
                            <input
                            type="text"
                            placeholder="Enter your name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            onChange={this.changeNameHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Lecturer Email</strong>
                            </label>
                            <input
                            type="text"
                            placeholder="Enter your email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={this.changeEmailHandler}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="number">
                                <strong>Phone Number</strong>
                            </label>
                            <input
                            type="text"
                            placeholder="Enter your phone number"
                            autoComplete="off"
                            name="number"
                            className="form-control rounded-0"
                            onChange={this.changePhnHandler}
                            />
                        </div>

                        <div className="mb-3">
                        <label htmlFor="name">
                            <strong>User Name</strong>
                            </label>
                            <input
                            type="text"
                            placeholder="Enter your user name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            onChange={this.changeUserNameHandler}
                            />
                        </div>

                        <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                            </label>
                            <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            onChange={this.changePasswordHandler}
                            />
                        </div>
                        <br/>
                        <a href='/LecDashboard'>
                        <button type="button" class="btn btn-primary w-100 rounded-0" onClick={this.saveLecturer} style={{background: '#f8d43c', color: 'black',padding: '10px',border: 'none',borderRadius: '4px',cursor: 'pointer',}}>
                            Register
                        </button>
                        </a>
                        <br /><br />
                        <p><b>Already Have an Account <a href="./login"> Login</a></b></p>

                    </form>
                </div>      
            </div>     
            <div style={navbarStyel}> </div>
            </div>
        )
    }
}

export default CreateLecturerComponent

const navbarStyel = {
    background: "#880404",
    color: "#fff",
    padding: '10px',
    margin: '0px',
    width: '100%',
    height: '60px',
    textAlign: 'center'
  }