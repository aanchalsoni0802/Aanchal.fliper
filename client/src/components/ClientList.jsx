import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/clients');
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClients();
  }, []);

  // Duplicate the clients array for infinite scrolling
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="client-list bg-gray-100">
  <h2 className="text-2xl text-blue-600 font-bold text-center my-8">Happy Clients</h2>
  <div className="overflow-hidden">
    {/* Horizontal scrolling container with animation */}
    <div className="flex animate-scroll space-x-6 px-4 py-4">
      {duplicatedClients.map((client) => (
        <div
          key={client._id}
          className="flex-shrink-0 w-60 border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl bg-white"
        >
          {/* Image Section with Circle */}
          <div className="w-full h-40 flex justify-center items-center bg-gray-200">
            {client.image ? (
              <img
                src={`data:image/jpeg;base64,${client.image}`}
                alt={client.name}
                className="w-20 h-20 object-cover rounded-full" // Circle image
              />
            ) : (
              <div className="w-20 h-20 bg-gray-300 rounded-full"></div> // Fallback circle
            )}
          </div>

          {/* Client Details */}
          <div className="p-4 bg-white">
            <p className="text-sm text-gray-600 mt-2">{client.description}</p>
            <h3 className="text-lg font-semibold text-blue-600">{client.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{client.designation}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default ClientList;
