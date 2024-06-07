import React from 'react';
import CustomerServiceForm from '../components/CustomerServiceForm';
import RequestsList from '../components/RequestsList';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <CustomerServiceForm />
      <RequestsList />
    </div>
  );
};

export default Dashboard;
