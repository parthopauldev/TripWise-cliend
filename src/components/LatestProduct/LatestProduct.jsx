import React from 'react';

const LatestProduct = ({ product}) => {
    const {vehicleName}=product
    return (
        <div>
            <p>{vehicleName}</p>
        </div>
    );
};

export default LatestProduct;