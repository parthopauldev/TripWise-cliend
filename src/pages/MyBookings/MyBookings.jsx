import React, { use, useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../contexts/AuthContext";
import MyBookingProductDetails from "../../components/MyBookingProductDetails/MyBookingProductDetails";

const MyBookings = () => {
  const { user } = use(AuthContext);


  const axiosSecure = useAxiosSecure();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axiosSecure.get(`/userProducts?email=${user.email}`).then((data) => {
      setProducts(data.data);
    console.log(data.data);
    
      
    });
  }, [user,axiosSecure]);
console.log(products);

    return <div className=" space-y-4">
        {
        products.map(product => (
          <MyBookingProductDetails product={product}></MyBookingProductDetails>
           ))
      }
  </div>;
};

export default MyBookings;
