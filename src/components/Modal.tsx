import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({isOpen, onClose, children}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white relative shadow-lg p-6 md:rounded-xl md:max-w-md w-full h-full md:h-max"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-4 text-gray-600 hover:text-gray-800 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className={'h-full justify-center items-start flex flex-col w-full'}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
