import { useLoaderData } from "react-router";

const ProductDetails = () => {
  const product = useLoaderData();
  
   console.log(product);
   

    return <div>{ product.vehicleName}</div>;
};

export default ProductDetails;
