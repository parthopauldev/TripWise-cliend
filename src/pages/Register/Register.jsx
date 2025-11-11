import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser,updateUser,user} = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();

      const form = e.target;
      let name = form.name.value;
    let photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
        .then((result) => {
          updateUser({ ...user, displayName: name, photoURL: photo })
        console.log(result.user);
       Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your Account has been Created",
  showConfirmButton: false,
  timer: 1500
});
      })
      .catch((err) => {
          console.log(err.message);
          Swal.fire(err.message);

      });
  };

  return (
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold">Register now!</h1>
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
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
