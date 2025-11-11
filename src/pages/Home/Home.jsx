import { useState } from "react";
import LatestProduct from "../../components/LatestProduct/LatestProduct";
import useAxios from "../../hooks/useAxios";

const Home = () => {
    const axiosInstance = useAxios();
    const [latestProducts, setLatestProducts] = useState([]); 
  const [loading, setLoading] = useState(true);
   
  axiosInstance.get("/products").then((data) => {
    const products = data.data;
    const latestProducts = products.slice(-6);
    const reversedProducts = latestProducts.reverse();
      setLatestProducts(reversedProducts); // 4. Update the state
        setLoading(false);
    console.log(latestProducts);
  });
    if (loading) {
        return <div>loading ...</div>
    }
    return <div>
      
        {
        latestProducts.map(product => (
                <LatestProduct product={product}></LatestProduct>
            ))
        }
  </div>;
};

export default Home;
