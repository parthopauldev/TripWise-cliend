import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';


const AddVehicle = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const vehicleName = form.vehicleName.value;
        const owner = form.owner.value;
        const category = form.category.value;
        const pricePerDay = form.pricePerDay.value;
        const location = form.location.value;
        const availability = form.availability.value;
        const description = form.description.value; 
        const coverImage = form.coverImage.value;
        const userEmail = form.userEmail.value;

        const newProduct = {
            vehicleName,
            owner,
            category,
            pricePerDay: parseFloat(pricePerDay), 
            location,
            availability,
            description, 
            coverImage,
            userEmail,
        };

        axiosSecure.post('/products', newProduct)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your vehicle has been successfully listed!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                   
                    form.reset();
                    navigate('/')
                }
               
            })
            .catch(error => {
                console.error("Error adding vehicle:", error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong while listing the vehicle.",
                });
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
                
                <h1 className="text-4xl font-extrabold text-center text-primary mb-8 border-b pb-4">
                    List Your Vehicle for Rent
                </h1>

                <form onSubmit={handleSubmit}>
                    
                   
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Vehicle Details</h2>
                            
                          
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Vehicle Name *</label>
                                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" name='vehicleName' placeholder="e.g., Tesla Model 3" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Category *</label>
                                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" name='category' placeholder="e.g., Sedan, SUV, Truck" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Price Per Day ($) *</label>
                                <input type="number" step="0.01" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" name='pricePerDay' placeholder="e.g., 85.00" required />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Location *</label>
                                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" name='location' placeholder="e.g., Dhaka, Gulshan" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Availability *</label>
                                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" name='availability' required>
                                    <option value="Available">Available</option>
                                    <option value="Unavailable">Unavailable</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Media & Owner</h2>

                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Owner Name</label>
                                <input 
                                    type="text" 
                                    value={user?.displayName || 'N/A'} 
                                    className="w-full p-3 border border-gray-300 bg-gray-50 rounded-lg cursor-not-allowed" 
                                    name='owner' 
                                    readOnly 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">User Email</label>
                                <input 
                                    type="email" 
                                    value={user?.email || 'N/A'} 
                                    className="w-full p-3 border border-gray-300 bg-gray-50 rounded-lg cursor-not-allowed" 
                                    name='userEmail' 
                                    readOnly 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Cover Image URL *</label>
                                <input type="url" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" name='coverImage' placeholder="Paste image URL here" required />
                            </div>
                            
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-600 mb-1">Description *</label>
                                <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" name='description' rows="4" placeholder="Briefly describe the vehicle (features, condition, mileage, etc.)" required />
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <button type="submit" className="w-full bg-primary text-white font-semibold py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50">
                             Add Vehicle to Listings
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVehicle;