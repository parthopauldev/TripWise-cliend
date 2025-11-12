import React from 'react';

const Destination = () => {
  const destinations = [
    { name: "San Francisco", image: "https://i.ibb.co.com/jvZjRZ5T/download-5.jpg" },
    { name: "New York City", image: "https://i.ibb.co.com/0pJSjzX1/download-6.jpg" },
    { name: "Miami Beach", image: "https://i.ibb.co.com/wh5DZc36/download-7.jpg" },
    { name: "Rocky Mountains", image: "https://i.ibb.co.com/jvgQjNRK/download-8.jpg" },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#016B61]">
          Explore Our Top Destinations
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Find the perfect ride for your next adventure in these popular spots.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div
        
              className="  overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1    "
            >
            
    
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-40 object-cover"
              />
              <div className=" inset-0 z-30 bg-opacity-30 flex items-end p-4">
                <h3 className="text-xl font-semibold text-black">
                  {dest.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

 export default Destination;
