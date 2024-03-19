import React, { Component } from 'react'
import companyService from '../services/companyService';


class CreateCompanyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            name: '',
            business_registration_no: '',
            com_address: '',
            com_email: '',
            com_phone: '',
            username: '',
            password: ''
        }

        this.saveCompany = this.saveCompany.bind(this);
    }

    saveCompany = (e) => {
        e.preventDefault();
        let company = {name: this.state.name, business_registration_no: this.state.business_registration_no, com_address: this.state.com_address, com_email: this.state.com_email, com_phone: this.state.com_phone, username: this.state.username, password: this.state.password};
        console.log('company => ' + JSON.stringify(company));

        companyService.createCompany(company).then(res =>{
            //this.props.history.push('/employees');
        });

        
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changeRegNoHandler= (event) => {
        this.setState({business_registration_no: event.target.value});
    }
    changeAddressHandler= (event) => {
        this.setState({com_address: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({com_email: event.target.value});
    }
    changePhnHandler= (event) => {
        this.setState({com_phone: event.target.value});
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
            <div className="bg-white p-3 rounded w-25">
                <div className='company'>
                    <br/><br/><br/><br/><br/><h2><center>Company Registration</center></h2> <br/> <br/>
                </div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Company Name</strong>
                        </label>
                        <input
                        type="text"
                        placeholder="Enter company name"
                        autoComplete="off"
                        name="name"
                        className="form-control rounded-0"
                        onChange={this.changeNameHandler}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="number">
                            <strong>Registration Number</strong>
                        </label>
                        <input
                        type="text"
                        placeholder="Enter registration number"
                        autoComplete="off"
                        name="number"
                        className="form-control rounded-0"
                        onChange={this.changeRegNoHandler}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address">
                            <strong>Address</strong>
                        </label>
                        <input
                        type="text"
                        placeholder="Enter company address"
                        autoComplete="off"
                        name="address"
                        className="form-control rounded-0"
                        onChange={this.changeAddressHandler}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                        type="text"
                        placeholder="Enter company email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={this.changeEmailHandler}
                        />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="number">
                        <strong>Contact Number</strong>
                        </label>
                        <input
                        type="text"
                        placeholder="Enter contact number"
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
                </form>
                <br/>
                <a href='/ComDashboard'>
                <button type="button" class="btn btn-primary w-100 rounded-0"  onClick={this.saveCompany} style={{background: '#f8d43c', color: 'black',padding: '10px',border: 'none',borderRadius: '4px',cursor: 'pointer',}}>
                        Register
                </button>
                </a>
                <br/><br/>
                <p><b>Already Have an Account <a href="./login"> Login</a></b></p>
            </div>
        </div>
        <div style={navbarStyel}>  </div>
        </div>
        )
    }
}
export default CreateCompanyComponent

const navbarStyel = {
    background: "#880404",
    color: "#fff",
    padding: '10px',
    margin: '0px',
    width: '100%',
    height: '60px',
    textAlign: 'center'
  }