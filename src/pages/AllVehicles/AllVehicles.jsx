import React, { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import LatestProduct from '../../components/LatestProduct/LatestProduct';

const AllVehicles = () => {
    const axiosInstance = useAxios();
    const [allProducts, setAllProducts] = useState([]); 
  const [loading, setLoading] = useState(true);
   
  axiosInstance.get("/products").then((data) => {
      const allProducts = data.data;
     console.log(allProducts);
     
      setAllProducts(allProducts); // 4. Update the state
        setLoading(false);
    
  });
    if (loading) {
        return <div>loading ...</div>
    }
     return <div>
      
        {
        allProducts.map(product => (
                <LatestProduct product={product}></LatestProduct>
            ))
        }
  </div>;
};

export default AllVehicles;