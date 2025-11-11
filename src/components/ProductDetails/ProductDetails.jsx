import { useLoaderData } from "react-router";
import useAxiosSecure from './../../hooks/useAxiosSecure';
import Swal from "sweetalert2";

const ProductDetails = () => {
           const axiosSecure = useAxiosSecure();

  const product = useLoaderData();
  
    const handleBooking = () => {
        axiosSecure.post('/bookProducts', product)
            .then(data => {
         console.log('after secure call',data.data);
 if (data.data.insertedId) {
                      Swal.fire({
                                            position: "top-end",
                                            icon: "success",
                                            title: "Your Vehicle has been booked.",
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                }
        })
    };
   

    return <div>
        <p> {product.vehicleName}</p>
        <button onClick={handleBooking}>Book Now</button>
       
    
    </div>;
    
};

export default ProductDetails;
