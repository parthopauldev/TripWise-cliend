import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddVehicle = () => {
    const { user } = use(AuthContext)
    const axiosSecure=useAxiosSecure()
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const vehicleName = form.vehicleName.value;
        const owner = form.owner.value;
        const category = form.category.value;
        const pricePerDay = form.pricePerDay.value;
        const location = form.location.value;
        const availability = form.availability.value;
        const coverImage = form.coverImage.value;
        const userEmail = form.userEmail.value;
        const newProduct = { vehicleName, owner, category, pricePerDay, location, availability, coverImage, userEmail, }
        axiosSecure.post('/products', newProduct)
            .then(data => {
            if (data.data.insertedId) {
                      Swal.fire({
                                            position: "top-end",
                                            icon: "success",
                                            title: "Your product has been listed.",
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                }
        })
    }
    return (
//         Vehicle Name, Owner Name, Category, Price Per Day, Location, Availability, Description,
// Cover Image, User Email (auto from logged-in user).
        <div>
            <form onSubmit={handleSubmit} >
<h1>List Your Vehicle for Rent</h1>
                <fieldset className="fieldset">
                    <label className="label">Vehicle Name</label>
                    <input type="text" className="input" name='vehicleName' placeholder="vehicle Name" />
                    <label  className="label">Owner Name</label>
                    <input type="text" value={user.displayName} className="input" name='owner' placeholder="Owner Name" />
                    
                    <label className="label">Category</label>
                    <input type="text" className="input" name='category' placeholder="Category" />
                    <label className="label">Price Per Day</label>
                    <input type="text" className="input" name='pricePerDay' placeholder="Price Per Day" />
                    <label className="label">Location</label>
                    <input type="text" className="input" name='location' placeholder="Location" />
                    <label className="label">Availability</label>
                    <input type="text" className="input" name='availability' placeholder="Availability" />
                    <label className="label">Description</label>
                    <input type="text" className="input" name='description' placeholder="Description" />
                    <label className="label">Cover Image</label>
                    <input type="text" className="input" name='coverImage' placeholder="Cover Image" />
                    <label className="label">User Email</label>
                    <input type="text" value={user.email} className="input" name='userEmail' placeholder="User Email" />
                    
                        <button className="btn btn-neutral mt-4">Add</button>

                    </fieldset>
                </form>
        </div>
    //   
    );
};

export default AddVehicle;