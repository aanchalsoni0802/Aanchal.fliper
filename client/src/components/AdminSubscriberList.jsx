import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminSubscriberList = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/subscribers');
        setSubscribers(response.data);
      } catch (error) {
        console.error('Error fetching subscribers:', error);
      }
    };

    fetchSubscribers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Subscribed Email Addresses</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Email Address</th>
            <th className="px-4 py-2 border">Subscribed At</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((subscriber) => (
            <tr key={subscriber._id}>
              <td className="px-4 py-2 border">{subscriber.email}</td>
              <td className="px-4 py-2 border">{new Date(subscriber.subscribedAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminSubscriberList;
