import React, { useState } from 'react';
import { Download } from 'lucide-react';

const DownloadModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center px-6 py-3 bg-gold-400 text-white text-lg rounded-full hover:text-green-400 transition-colors shadow-lg hover:shadow-xl"
      >
        <Download className="w-5 h-5 mr-2" />
        <span className="font-semibold">Download App</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 transform transition-all duration-300 animate-slideIn">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold mb-2">
                Coming Soon! 🚀
              </h2>
              
              <div className="animate-bounce mx-auto w-16 h-16 bg-gold-400/30 rounded-full flex items-center justify-center">
                <Download className="w-8 h-8 text-green-600" />
              </div>
              
              <p className="text-lg text-gray-700">
                We're working hard to bring you something amazing!
              </p>
              
              <p className="text-gray-500">
                Our application is currently under development. Check back soon for updates!
              </p>
              
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 text-sm text-green-600 hover:text-green-800 transition-colors duration-200"
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(-10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default DownloadModal;