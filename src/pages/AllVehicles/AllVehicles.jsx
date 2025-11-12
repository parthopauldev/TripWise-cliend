import React, { useState, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import LatestProduct from "../../components/LatestProduct/LatestProduct";
import LoadingPage from "./../LoadingPage/LoadingPage";

const AllVehicles = () => {
  const axiosInstance = useAxios();
  const [originalProducts, setOriginalProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("none");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get("/products").then((data) => {
      setOriginalProducts(data.data);
      setDisplayedProducts(data.data);
      setLoading(false);
    });
  }, [axiosInstance]);

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);

    let sortableProducts = [...originalProducts];

    if (option === "price_asc") {
      sortableProducts.sort((a, b) => {
        const priceA = parseFloat(a.pricePerDay);
        const priceB = parseFloat(b.pricePerDay);
        return priceA - priceB;
      });
    } else if (option === "price_desc") {
      sortableProducts.sort((a, b) => {
        const priceA = parseFloat(a.pricePerDay);
        const priceB = parseFloat(b.pricePerDay);
        return priceB - priceA;
      });
    } else if (option === "category") {
      sortableProducts.sort((a, b) => a.category.localeCompare(b.category));

    } else if (option === "location") {
      sortableProducts.sort((a, b) => a.location.localeCompare(b.location));
      
    } else if (option === "none") {
      sortableProducts = [...originalProducts];
    }

    setDisplayedProducts(sortableProducts);
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="my-[30px]">
      <div className="flex flex-col sm:flex-row justify-between mb-4 items-center gap-2">
        <h1 className="text-primary text-2xl font-semibold">All Vehicles</h1>
        <div className="text-primary">
          <label className="font-medium">Sort By: </label>
          <select
            className="border border-gray-300 p-2 rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="none">Default</option>
            <option value="price_asc">Price (Low → High)</option>
            <option value="price_desc">Price (High → Low)</option>
            <option value="category">Category (A → Z)</option>
            <option value="location">Location (A → Z)</option>
          </select>
        </div>
      </div>

      {displayedProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.map((product) => (
            <LatestProduct key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500 text-lg">
          No vehicles found.
        </div>
      )}
    </div>
  );
};

export default AllVehicles;
