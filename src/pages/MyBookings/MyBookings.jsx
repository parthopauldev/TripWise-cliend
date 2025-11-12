import React, { use, useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../contexts/AuthContext";

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

    return <div>
        {
        products.map(product => (
          <p>{ product.vehicleName}</p>
           ))
      }
  </div>;
};

export default MyBookings;
