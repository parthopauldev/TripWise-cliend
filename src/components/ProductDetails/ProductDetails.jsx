import { useLoaderData } from "react-router";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { use, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useState } from "react";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";

const ProductDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(false);
  const product = useLoaderData();
  
console.log(product);

  
 
 

  const handleBooking = () => {
    axiosSecure.post("/bookProducts", { ...product,userEmail:user.email }).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Vehicle has been booked.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  if (loading) {
    return <LoadingPage></LoadingPage>;
    }
    const {
    vehicleName,
    categories,
    location,
    pricePerDay,
    coverImage,
    availability,
    description,
    owner,
  } = product;
  return (
      <div>
          <div className="max-w-[900px] mx-auto bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-primary">
            
          
            <div className="h-48 overflow-hidden">
                <img 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    src={coverImage} 
                    alt={vehicleName} 
                />
            </div>
            
            <div className="p-6">
                
               
                <div className="flex justify-between items-start mb-3">
                    <h2 className="text-xl font-extrabold text-gray-900 leading-tight">
                        {vehicleName}
                    </h2>
                    <span 
                        className={`px-3 py-1 text-xs font-semibold rounded-full uppercase ${
                            availability === "Available" 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                        }`}
                    >
                        {availability}
                    </span>
                </div>

                
                <p className="text-3xl font-bold text-primary mb-4">
                    ${pricePerDay}
                    <span className="text-base font-normal text-gray-500"> / Day</span>
                </p>

              
                <div className="space-y-2 text-sm text-gray-700">
                    <p className="flex items-center">
                        <strong>Location:</strong> {location}
                    </p>
                    <p className="flex items-center">
                        
                        <strong>Category:</strong> {categories}
                    </p>
                    <p className="flex items-center text-gray-500 italic pt-2">
                        Owner: {owner}
                    </p>
                </div>
                
                
                <p className="mt-4 text-gray-600 text-sm italic border-t pt-3">
                    {description}
                </p>
                
                
                <button onClick={handleBooking} 
                    className="mt-6 w-full bg-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                   Book Now
                </button>
            </div>
        </div>
     
    </div>
  );
};

export default ProductDetails;
