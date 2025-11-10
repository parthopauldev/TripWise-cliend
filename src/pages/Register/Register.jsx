import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {

    const {createUser} = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                console.log( result.user);
                
            }).catch(err => {
            console.log(err.message);
            
        })
}
  
    return (

        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <div className="card-body">
                <form onSubmit={handleRegister}>

                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                </form>
        
            </div>
        </div>
    );
};

export default Register; 