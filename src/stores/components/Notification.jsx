// Notification.js

import React from 'react';

const Notification = ({ itemTitle, closeModal }) => {
  return (
    <div className="modal">
      <p>Item "{itemTitle}" added to cart!</p>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default Notification;
