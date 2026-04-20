import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

const CustomModal: React.FC<ModalProps> = ({ isOpen, onClose, }) => {
  const modalRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle click outside of the modal content
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-md bg-[#F5F4DF] rounded-2xl shadow-2xl p-6 transform transition-all animate-in zoom-in-95 duration-200"
      >
        {/* Close Icon (Top Right) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className='flex flex-col text-center items-center justify-center gap-2'>
            <h2>You're early.</h2>
            <p className='text-[#333333E5]'>We’re opening SendIt in waves. Join now and be among the first to send packages or earn from trips you’re already making.</p>
            {/* Form */}
            <form 
                onSubmit={handleSubmit} 
                className="w-full mt-4 space-y-4"
            >
                {/* Top Row: First and Last Name */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full px-6 py-2 text-gray-700 bg-white border-none rounded-xl shadow-sm focus:ring-1 focus:ring-blue-400 outline-none placeholder:text-gray-300  transition-all"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full px-6 py-2 text-gray-700 bg-white border-none rounded-xl shadow-sm focus:ring-1 focus:ring-blue-400 outline-none placeholder:text-gray-300 transition-all"
                    required
                />
                </div>

                {/* Bottom Row: Email */}
                <div className="w-full">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-6 py-2 text-gray-700 bg-white border-none rounded-xl shadow-sm focus:ring-1 focus:ring-blue-400 outline-none placeholder:text-gray-300 transition-all"
                    required
                />
                </div>

                {/* Optional Submit Button to complete the form utility */}
                <div className="pt-2 flex flex-col gap-4 items-center justify-center">
                    <Button onClick={() => handleSubmit} title="Save my spot" className='!text-primaryAlt !w-fit !py-2 border-1 !bg-[#F0F3FE] border-primaryAlt ' />
                    <p className='text-[#333333]'>By joining, you’ll be first to know when SendIt goes live in your area.</p>
                </div>
            </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CustomModal;