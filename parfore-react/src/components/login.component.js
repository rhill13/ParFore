import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div>
                
                <div className='jumbotron mt-4 p-3'> 
                    <h2 className='display-4'>Welcome to Parfore...</h2>
                </div>

                <div className='mb-3'>
                    <h2>Member Log In</h2>
                </div>

                <div className='container'>
                    <div className='row d-flex justify-content-around'>
                        <form className='text-left col-lg-6 border border-success rounded'>
                            <div className='form-group mt-4 mb-4'>
                                <label for='inputEmail'>Email Address</label>
                                <input type='email' placeholder='Enter your email address' className='form-control'
                                    id='inputEmail' aria-describedby='emailHelp'></input><br></br>
                                <label for='inputPassword'>Password</label>
                                <input type='password' placeholder='Password...' className='form-control'
                                    id='inputPassword' aria-describedby='passwordHelp'></input><br></br>
                                <input type='submit' className='btn btn-success btn-block' value='Login'></input><br></br>
                                <input type='submit' className='btn btn-outline-success btn-block' value='Register'></input>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        );
    }
}