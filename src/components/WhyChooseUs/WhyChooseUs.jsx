import React from 'react';

const WhyChooseUs = () => {
  const benefits = [
    { 
      title: "Seamless Booking", 
      description: "Book a trip in minutes with our easy-to-use mobile and web platform.",
      icon: "⚡" 
    },
    { 
      title: "24/7 Support", 
      description: "Get assistance anytime, day or night, from our dedicated support team.",
      icon: "📞" 
    },
    { 
      title: "Trusted Hosts", 
      description: "All owners and vehicles are rigorously vetted for safety and quality.",
      icon: "⭐" 
    },
    { 
      title: "Best Price Guarantee", 
      description: "We work hard to ensure you get the most competitive rates available.",
      icon: "💰" 
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#016B61]">
          Why Choose TravelEase?
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Experience the difference with a platform built for smooth, reliable travel.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title} 
              className="text-center p-6 border border-gray-100 rounded-lg shadow-sm"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

 export default WhyChooseUs; 