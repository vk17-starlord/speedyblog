import  { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={`modal z-50 ${isOpen ? 'flex w-full fixed h-screen bg-black/30 top-0 left-0  justify-center items-center' : 'hidden'}`}>
      <div className="modal-content rounded-md px-10 py-5 shadow-md w-6/12 bg-white" ref={modalRef}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
