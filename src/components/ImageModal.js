import React, { useEffect } from 'react';
import './ImageModal.css';

const ImageModal = ({ src, alt, onClose }) => {
  // Effect to handle Escape key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose(); // Call the onClose function passed via props
      }
    };
    window.addEventListener('keydown', handleEsc);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]); // Re-run effect if onClose function changes

  // Prevent modal from closing if clicking inside the image content
  const handleContentClick = (e) => {
    e.stopPropagation();
  };


  // If no src is provided, don't render anything
  if (!src) {
    return null;
  }

  return (
    // Backdrop overlay - clicking this closes the modal
    <div className="image-modal-backdrop" onClick={onClose}>
      {/* Close button */}
      <button className="image-modal-close-button" onClick={onClose}>
        &times; {/* HTML entity for multiplication sign (X) */}
      </button>
      {/* Modal content area */}
      <div className="image-modal-content" onClick={handleContentClick}>
        <img src={src} alt={alt} className="image-modal-image" />
        {/* Optional: Display alt text as caption */}
        {alt && <p className="image-modal-caption">{alt}</p>}
      </div>
    </div>
  );
};

export default ImageModal;