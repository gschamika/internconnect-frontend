import React, { Component } from 'react'
import studentService from '../services/studentService';


class CreateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            std_id: '',
            name: '',
            std_email: '',
            std_phone: '',
            university: '',
            focus_area: '',
            username: '',
            password: ''
        }

        this.saveStudent = this.saveStudent.bind(this);
    }

    saveStudent = (e) => {
        e.preventDefault();
        let students = {std_id: this.state.std_id, name: this.state.name, std_email: this.state.std_email, std_phone: this.state.std_phone, university: this.state.university, focus_area: this.state.focus_area,username: this.state.username, password: this.state.password};
        console.log('students => ' + JSON.stringify(students));

        studentService.createStudent(students).then(res =>{
            //this.props.history.push('/employees');
        });

        
    }

    changeIdHandler= (event) => {
        this.setState({std_id: event.target.value});
    }
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({std_email: event.target.value});
    }
    changePhnHandler= (event) => {
        this.setState({std_phone: event.target.value});
    }
    changeUniversityHandler= (event) => {
        this.setState({university: event.target.value});
    }
    changeFocusAreaHandler= (event) => {
        this.setState({focus_area: event.target.value});
    }
    changeUserNameHandler= (event) => {
        this.setState({username: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    

    render(){
        return(
            <div className="d-flex justify-content-center align-items-center bg-white vh-250">
            <div className="bg-white p-3 rounded w-25" >
                <div className='student'>
                <br></br><h2><center>Student Registration</center></h2> <br/> <br/>
                <form>
                    <div className="mb-3">
                        <label htmlFor="id">
                            <strong>Student ID</strong>
                        </label>
                        <input type="text" placeholder="Enter your ID" autoComplete="off" name="id"
                            className="form-control rounded-0" 
                            onChange={this.changeIdHandler}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="nic">
                            <strong>Student_Name</strong>
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
                            <strong>Student Email</strong>
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
                        <label htmlFor="email">
                            <strong>Phone Number</strong>
                        </label>
                        <input
                        type="text"
                        placeholder="Enter your phone number"
                        autoComplete="off"
                        name="phoneNumber"
                        className="form-control rounded-0"
                        onChange={this.changePhnHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>University</strong>
                        </label>
                        <select name="university" placeholder="Select your university" autoComplete="off" className="form-control rounded-0" onChange={this.changeUniversityHandler}>
                            <option disabled>Select your University</option>
                            <option value="University of Sri Jayewardenepura">University of Sri Jayewardenepura</option>
                            <option value="University of Colombo" >University of Colombo</option>
                            <option value="University of Kelaniya" >University of Kelaniya</option>
                            <option value="University of Moratuwa" >University of Moratuwa</option>
                            <option value="University of Peradeniya" >University of Peradeniya</option>
                            <option value="University of Jaffna" >University of Jaffna</option>
                            <option value="University of Ruhuna" >University of Ruhuna</option> 
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Focus Area</strong>
                        </label>
                        <select name="university" placeholder="Select your focus area" autoComplete="off" className="form-control rounded-0" onChange={this.changeFocusAreaHandler}>
                            <option disabled>Select your focus area</option>
                            <option value="Software Technology">Software Technology</option>
                            <option value="Network Technology">Network Technology</option>
                            <option value="Mulimedia Technology">Mulimedia Technology</option>
                            <option value="Mulimedia Technology">Mechatronics Technology</option>
                            <option value="Mulimedia Technology">Automobile Technology</option>
                            <option value="Mulimedia Technology">Polymer Processing Technology</option>
                            <option value="Mulimedia Technology">Energy and Environmental Technology</option>
                            <option value="Mulimedia Technology">Geotechnology</option>
                            <option value="Mulimedia Technology">Construction and Building Services Technology</option>
                        </select>
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
                </form>
                <br/>
                <button type="button" class="btn btn-primary w-100 rounded-0" onClick={this.saveStudent}>
                        Register
                    </button>
                <br /><br />
                <p><b>Already Have an Account <a href="./login"> Login</a></b></p>

                </div>
            </div> 
        </div>
        )
    }
}
export default CreateStudentComponent