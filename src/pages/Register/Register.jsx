import React, { use, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";

const Register = () => {

  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");

  const { createUser, updateUser, user,loginWithGoogle } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    let name = form.name.value;
    let photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      return setPasswordError("Your password will be more than 6 Word");
    } else if (!/[A-Z]/.test(password)) {
      return setPasswordError(
        "Your password must contain at least one uppercase letter."
      );
    } else if (!/[a-z]/.test(password)) {
      return setPasswordError(
        "Your password must contain at least one lowercase letter."
      );
    } else {
      setPasswordError("");
    }
    createUser(email, password)
      .then((result) => {
        updateUser({ ...user, displayName: name, photoURL: photo });
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Account has been Created",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire(err.message);
      });
  };
let handleLoginWithGoogle = () => {
  
    loginWithGoogle()
      .then(result => {
      Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You are logged in",
          showConfirmButton: false,
          timer: 1500,
        });
     
      navigate('/')
    })
      .catch(err => {
     
       Swal.fire(err.message);
    })
  }
  return (
    <div className="card my-[30px] text-primary p-4 bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl text-center font-bold">Register now!</h1>
      <div className="card-body">
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* name  */}
            <label className="label text-primary">Name</label>
            <input
              type="text "
              name="name"
              className="input"
              placeholder="Name"
              required
            />

            {/* photo url  */}
            <label className="label text-primary">Photo URL</label>
            <input
              type="text "
              name="photo"
              className="input"
              placeholder="Photo URL"
              required
            />
            {/* email  */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
                      />
                       {
                    passwordError && <p className='text-error'>{ passwordError}</p>
                  }
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4 bg-primary">Register</button>
          </fieldset>
              </form>
                          <button  onClick={handleLoginWithGoogle} className="btn  btn-outline btn-primary">Login With Google</button>

                <p className="">
            Allready  Have An Account ?{' '}
            <Link className="text-secondary text-[17px]" to="/login">
             Login
                  </Link>
                  </p>
      </div>
    </div>
  );
};

export default Register;
