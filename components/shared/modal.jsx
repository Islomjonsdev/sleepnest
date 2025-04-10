import React from 'react';

const Modal = ({ children, close }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-right right-0 justify-end bg-[#00000096] bg-opacity-50"
      onClick={() => {
        document.body.style.overflowX = 'auto';
        close(false);
      }}
    >
      <div
        className="w-full shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
