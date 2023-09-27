import React from "react";

const Toast = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-indigo-500 text-white px-4 py-2 rounded-md shadow-md">
      {message}
      <button
        className="ml-2 text-white hover:text-red-500 focus:outline-none"
        onClick={onClose}
      >
        X
      </button>
    </div>
  );
};

export default Toast;
