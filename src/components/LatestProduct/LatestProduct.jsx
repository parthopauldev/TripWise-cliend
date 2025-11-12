import React from "react";
import { Link } from "react-router";

const LatestProduct = ({ product }) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="card w-96 bg-base-200 rounded-2xl ">
         
            <img
              src={product.coverImage}
              alt={product.vehicleName}
              className="h-56 w-full object-cover"
            />
         

          <div className="card-body">
            <h2 className="card-title text-lg font-bold text-[#016B61]">
              {product.vehicleName}
            </h2>

            <p className="text-sm text-gray-600">{product.description}</p>

            <div className="mt-3">
              <p className="text-sm">
                <span className="font-semibold">Owner:</span> {product.owner}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Location:</span>{" "}
                {product.location}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Category:</span>{" "}
                {product.categories}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Created</span>{" "}
                {product.createdAt}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Availability:</span>{" "}
                {product.availability}
              </p>
            </div>

            <div className="mt-4 flex  justify-between items-center">
              <p className="text-[#016B61] font-semibold text-lg">
                ${product.pricePerDay}/day
              </p>

              <Link
                className=" btn-custom"
                to={`/productDetails/${product._id}`}
              >
                Veiw Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
