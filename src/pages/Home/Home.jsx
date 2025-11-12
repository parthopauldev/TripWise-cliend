import { useState } from "react";
import LatestProduct from "../../components/LatestProduct/LatestProduct";
import useAxios from "../../hooks/useAxios";
import Carousel from "../../components/Carousel/Carousel";
import LoadingPage from "../LoadingPage/LoadingPage";
import Destination from "../../components/Destination/Destination";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  const axiosInstance = useAxios();
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  axiosInstance.get("/products").then((data) => {
    const products = data.data;
    const latestProducts = products.slice(-6);
   
   const sortProducts=latestProducts.sort((a, b) => b.createdAt - a.createdAt); 
    setLatestProducts(sortProducts); 
    setLoading(false);
    console.log(latestProducts);
  });
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  return (
    <div className="space-y-10">
      {/* section 1  */}
      <section className="mt-[40px]">
        <Carousel></Carousel>
      </section>

      {/* section 1 */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {latestProducts.map((product) => (
          <LatestProduct key={product._id} product={product}></LatestProduct>
        ))}
      </section>
      {/* section 3  */}
      <section>
        <Destination></Destination>
      </section>
      {/* section 4  */}
      <section>
        <WhyChooseUs></WhyChooseUs>
      </section>
    </div>
  );
};

export default Home;
