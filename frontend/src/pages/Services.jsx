import React, { useState, useEffect } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    fetch('http://localhost:3000/api/data/service')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <div className="flex flex-wrap -m-4">
        {services?.response?.length === 0 ? <p>Please wait!</p>
          :
          services?.response?.map(service => (
            <div key={service._id} className="p-4 w-full md:w-1/2 lg:w-1/3">
              <div className="border border-gray-200 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="mb-4">{service.description}</p>
                <p className="mb-4"><strong>Provided To:</strong> {service.providedTo}</p>
                <p className="italic text-gray-600">{service.shortMessage}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Services;
