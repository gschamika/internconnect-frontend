import React from 'react'

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-white vh-100">
            <div className="bg-light p-3 rounded  w-25 ">
                <div className='login'>
                <br></br><h2>Login</h2> <br></br><br></br>
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

                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                    <br/> <br />
                    <p>Dont have an account <a href="./Register"> Register</a></p>

                </form>

            </div>

        </div>
  )
}

export default Login