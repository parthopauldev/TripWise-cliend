import React from 'react';
import { Link } from 'react-router';

const LatestProduct = ({ product }) => {
   
    
    const {vehicleName,_id}=product
    return (
        <div>

            <p>{vehicleName}</p>
            <Link to={`/productDetails/${_id}`}>Details</Link>
        </div>
    );
};

export default LatestProduct;