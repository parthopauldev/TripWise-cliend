import React, { use } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
    const { logInUser,loginWithGoogle } = use(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const handleLogIn = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password)
            .then(result => {
                 Swal.fire({
  position: "top-end",
  icon: "success",
  title: "You Login Successfully",
  showConfirmButton: false,
  timer: 1500
});
 

                console.log(result.user);
                e.target.reset()
                navigate(location.state || '/' )
                
            }).catch(err => {
            Swal.fire(err.message);
            
        })
    }
    
    let handleLoginWithGoogle = () => {
  
    loginWithGoogle()
      .then(result => {
     
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "You Login Successfully",
  showConfirmButton: false,
  timer: 1500
});
      navigate(`${location.state?location.state:'/'}`)
    })
      .catch(err => {
      Swal.fire(err.message);
    
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
                </form>
          <button onClick={handleLoginWithGoogle} className="btn btn-outline btn-primary">Login With Google</button>
                    <p>Dont’t Have An Account ?<Link className='text-blue-400' to={'/register'}>Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;