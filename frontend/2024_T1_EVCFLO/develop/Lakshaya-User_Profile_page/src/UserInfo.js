import React from 'react';

const UserInfo = ({ userInfo }) => {
  return (
    <div className="user-info">
      <h2>User Information</h2>
      <p>Name: {userInfo.name}</p>
      <p>Vehicle ID: {userInfo.vehicleId}</p>
      <p>Car Model: {userInfo.carModel}</p>
    </div>
  );
};

export default UserInfo;

