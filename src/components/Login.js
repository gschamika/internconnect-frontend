import React from 'react'
import background from '../images/cover.jpg'

function Login() {
  return (
    <div>
        <div style={navbarStyel}> <h4>University of Sri Jayewardenepura</h4> </div>
    
    <div className="d-flex justify-content-center align-items-center bg-white vh-100" >
        <div  style={{ backgroundImage: `url(${background})`}}/>
            <div className="bg-white p-3 rounded  w-25 ">
                <div className='login'>
                <h2>Login</h2> <br></br>
                </div> 
                <form>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>User Name</strong>
                        </label>
                        <input
                        type="text"
                        placeholder="Enter user name"
                        autoComplete="off"
                        name="name"
                        className="form-control rounded-0"
                        />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                        </label>
                        <input
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        className="form-control rounded-0"
                        />
                    </div>

                    <button type="submit" className="btn btn-success w-100 rounded-0" style={{background: '#f8d43c', color: 'black',padding: '10px',border: 'none',borderRadius: '4px',cursor: 'pointer',}}>
                        Login
                    </button>
                    <br/> <br />
                    <p>Dont have an account <a href="./Register"> Register</a></p>

                </form>

            </div>
            
        </div>
    <div style={navbarStyel}> </div>
    </div>
  )
}

export default Login

const navbarStyel = {
    background: "#880404",
    color: "#fff",
    padding: '10px',
    margin: '0px',
    width: '100%',
    height: '60px',
    textAlign: 'center'
  }