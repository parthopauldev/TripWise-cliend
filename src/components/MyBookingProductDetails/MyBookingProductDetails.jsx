import React from 'react';

const MyBookingProductDetails = ({ product }) => {
    const {
        vehicleName,
        pricePerDay,
        category,
        location,
        coverImage,
       
    } = product;

  
    

    return (
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl h-[230px] shadow-2xl overflow-hidden 
                        transition-all duration-300 transform hover:scale-[1.01] hover:shadow-indigo-400/50 group border-2 border-transparent">
            
            <div className="flex h-full"> 
                
              
                <div className="w-2/5 h-full overflow-hidden relative">
                    <img 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        src={coverImage} 
                        alt={vehicleName} 
                    />
                    
                 
                    <div className="absolute top-0 left-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-br-lg shadow-md tracking-wider uppercase">
                        {category}
                    </div>
                </div>
                
                
                <div className="w-3/5 p-4 sm:p-5 flex flex-col justify-between">
                    <div>
                        
                       
                        <h3 className="text-xl font-extrabold text-gray-900 leading-tight mb-1 truncate">
                            {vehicleName}
                        </h3>
                        
                       
                        <p className="text-3xl font-black text-primary mb-2 flex items-baseline border-b pb-2">
                            {pricePerDay}
                            <span className="text-sm font-medium text-gray-500 ml-2"> / Day</span>
                        </p>

                       
                        <div className="space-y-1 text-gray-700 text-sm">
                            <p className="flex items-center font-medium">
                             
                                <strong>Location:</strong> <span className="ml-1 text-gray-600">{location}</span>
                            </p>
                           
                        
                        </div>
                    </div>
                    
                   
                    <div className="mt-4 pt-3 border-t border-gray-100">
                        <button className="w-full bg-primary text-white font-bold py-2.5 px-4 rounded-lg shadow-md
                                      ">
                        Delete Booking
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookingProductDetails;