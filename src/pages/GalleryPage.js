import React from 'react';
import './GalleryPage.css';
// ** IMPORTANT: Make sure these images exist in src/assets/images/ **
import img1 from '../assets/images/closet-gallery-1.jpg';
import img2 from '../assets/images/closet-gallery-2.jpg';
import img3 from '../assets/images/closet-gallery-3.jpg';
// Add imports for more images as needed
// import img4 from '../assets/images/closet-gallery-4.jpg';
// import img5 from '../assets/images/closet-gallery-5.jpg';
// import img6 from '../assets/images/closet-gallery-6.jpg';

// Define your gallery images here
const galleryImages = [
  { id: 1, src: img1, alt: 'Elegant walk-in closet with dark wood finish and island' },
  { id: 2, src: img2, alt: 'Modern closet with sleek white cabinetry and LED lighting' },
  { id: 3, src: img3, alt: 'Spacious luxury closet featuring glass doors and organized shoe display' },
  // Add more image objects - make sure you import them above!
  // { id: 4, src: img4, alt: 'Description for image 4' },
  // { id: 5, src: img5, alt: 'Description for image 5' },
  // { id: 6, src: img6, alt: 'Description for image 6' },
];

// Simple component to display a message if no images are loaded
const EmptyGallery = () => (
    <div className="empty-gallery-message">
        <p>Our gallery is currently being updated. Please check back soon to see examples of our work!</p>
        <p>Make sure you have added images to <code>src/assets/images/</code> and updated the imports in <code>src/pages/GalleryPage.js</code>.</p>
    </div>
);


const GalleryPage = () => {
  // Check if galleryImages array has items and the first item's src is valid
  const hasImages = galleryImages.length > 0 && galleryImages[0].src;

  return (
    <div className="gallery-page page-section container">
      <div className="text-center">
        <h1>Our Work</h1>
        <p>Explore a selection of our custom closet designs in luxury Austin homes. Get inspired for your own space.</p>
      </div>

      {hasImages ? (
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.alt} loading="lazy" />
              {/* Optional: Add caption overlay on hover */}
              <div className="gallery-caption">{image.alt}</div>
            </div>
          ))}
        </div>
      ) : (
         <EmptyGallery />
      )}
    </div>
  );
};

export default GalleryPage;