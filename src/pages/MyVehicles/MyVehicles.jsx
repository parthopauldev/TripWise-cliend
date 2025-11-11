import React, { use, useEffect, useRef, useState } from "react";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
const MyVehicles = () => {
        const updateProductModalRef = useRef(null);

  const axiosSecure = useAxiosSecure();
    const { user } = use(AuthContext);
    const axiosInstance = useAxios();
    const [products, setProducts] = useState([])

    useEffect(() => {
      
        axiosSecure.get(`/userProducts?email=${user.email}`)
            .then(data => {
                setProducts(data.data);

        })
    }, [user, axiosSecure]);
     const handleDeleteProduct = (_id) => {
        
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
    
                    axiosInstance.delete(`/products/${_id}`)
                        .then(data => {
                            if (data.data.deletedCount) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your bid has been deleted.",
                                    icon: "success"
                                });
    
                                // 
                                const remainingProducts = products.filter(bid => bid._id !== _id);
                                setProducts(remainingProducts)
                            }
                        })
    
    
                }
            });
    }
      const handleProductModalOpen = () => {
        updateProductModalRef.current.showModal();
    }
    return <div>
        {
            products.map(product => (
              <div className='border'>
            <p>{product.vehicleName}</p> 
            <p>{product.userEmail}</p>
            <button onClick={handleProductModalOpen} className='btn'>update</button>
          
            <button onClick={()=>handleDeleteProduct(product._id)} className='btn'>Delete</button>
        </div>
            ))
        }
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<dialog ref={updateProductModalRef} id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
  </div>;
};

export default MyVehicles;
