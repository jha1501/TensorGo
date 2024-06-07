import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RequestsList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get('http://localhost:5000/requests', { withCredentials: true });
        setRequests(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRequests();
  }, []);

  return (
    <div>
      <h2>Customer Service Requests</h2>
      <ul>
        {requests.map((request) => (
          <li key={request._id}>
            <strong>{request.category}:</strong> {request.comments}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequestsList;
