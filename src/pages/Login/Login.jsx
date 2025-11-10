import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
const {logInUser} = use(AuthContext);
    const handleLogIn = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password)
            .then(result => {
                console.log( result.user);
                
            }).catch(err => {
            console.log(err.message);
            
        })
}
    return (
         <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="card-body">
                <form onSubmit={handleLogIn} >

                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p>Do not have any account  <Link className='text-blue-400' to={'/register'}>Register</Link> </p>
                </form>
        
            </div>
        </div>
    );
};

export default Login;