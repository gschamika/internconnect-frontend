import React, { Component } from 'react'
import UserService from '../services/UserService'

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            name: '',
            age: '',
            address: '',
            email: ''
        }

        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {name: this.state.name, age: this.state.age, address: this.state.address, email: this.state.email};
        console.log('user => ' + JSON.stringify(user));

        UserService.createUser(user).then(res =>{
            //this.props.history.push('/employees');
        });
       
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }
    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    

    render(){
        return(
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>User Register</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
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
                        <label htmlFor="age">
                            <strong>Age</strong>
                        </label>
                        <input
                        type="text"
                        placeholder="Enter your age"
                        autoComplete="off"
                        name="age"
                        className="form-control rounded-0"
                        onChange={this.changeAgeHandler}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address">
                            <strong>Address</strong>
                        </label>
                        <input
                        type="text"
                        placeholder="Enter your address"
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
                        placeholder="Enter your email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={this.changeEmailHandler}
                        />
                    </div>
                </form>
                <button type="button" className="btn btn-success w-100 rounded-0" onClick={this.saveUser}>
                        Register
                </button>
                <br /><br />
                <p>Already Have an Account <a href="./login"> Login</a></p>            
            </div>
        </div>
        )
    }
}

export default CreateUserComponent