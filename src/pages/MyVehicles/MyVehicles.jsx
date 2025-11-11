
import React, { useEffect, useRef, useState, useContext } from "react"; 
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";

const MyVehicles = () => {
    const updateProductModalRef = useRef(null);
    const [updatingProductId, setUpdatingProductId] = useState(null);
    
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext); 
    const axiosInstance = useAxios();
    const [products, setProducts] = useState([])

    useEffect(() => {
        
        axiosSecure.get(`/userProducts?email=${user.email}`)
            .then(data => {
                setProducts(data.data);
            })
    }, [user, axiosSecure]);

   
    console.log(products); 
    
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
                            const remainingProducts = products.filter(bid => bid._id !== _id);
                            setProducts(remainingProducts)
                        }
                    })
            }
        });
    }

    const handleProductModalOpen = (_id) => {
        setUpdatingProductId(_id);
        updateProductModalRef.current.showModal();
    }

    const handleUpdateProductsDetails = (e) => {
        e.preventDefault();
        const form = e.target;
        const vehicleName = form.vehicleName.value;
        const owner = form.owner.value;
        const updateProduct = { vehicleName, owner,updatingProductId }

        axiosInstance.patch(`/products/${updatingProductId}`, updateProduct)
            .then(data => {
               
                if (data.data.modifiedCount > 0) { 
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your product has been Updated.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                 const newProducts=   products.filter(product => product._id !== updateProduct.updatingProductId)
                
                   
                    updateProductModalRef.current.close(); 
                    setProducts([...newProducts,updateProduct])
                }
            })
    };

   
    return ( 
        <div>
            {
                products.map(product => (
                    <div key={product._id} className='border'> 
                       
                        <p>dcdve</p> 
                        <p>{product.vehicleName}</p>
                        <p>{product.userEmail}</p>
                        
                      
                        <button onClick={() => handleProductModalOpen(product._id)} className='btn'>update</button>
                        
                        <button onClick={() => handleDeleteProduct(product._id)} className='btn'>Delete</button>
                    </div>
                ))
            }
          
            <dialog ref={updateProductModalRef} id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Update Product Details</h3>
                    <form onSubmit={handleUpdateProductsDetails}>

                        <label className="label">Vehicle Name</label>
                        <input
                            type="text"
                            className="input"
                            name="vehicleName"
                            placeholder="Vehicle Name"
                        />
                        <label className="label">Owner</label>
                        <input
                            type="text"
                            className="input"
                            name="owner"
                            placeholder="owner"
                        />
                        <button className="btn">Update</button>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    ); 
}; 

export default MyVehicles;
