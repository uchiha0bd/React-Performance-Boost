// src/components/SlowHomepage.jsx
import React from 'react';
// 1. Import the new, optimized image
import myOptimizedImage from '../assets/heavy-image.webp';

function SlowHomepage() {
  return (
    <div>
      <h2>Our <span style={{color: 'green'}}>Optimized</span> Homepage</h2>
      <p>This page now loads much faster! The image is compressed, and we use lazy loading.</p>
      {/* 2. Update the src and add loading="lazy" */}
      <img
        src={myOptimizedImage}
        alt="A large, high-resolution scenery"
        style={{ width: '800px', marginTop: '20px' }}
        loading="lazy" // This is the magic attribute!
        width="400" // It's also good practice to provide dimensions
        height="1000" // to prevent layout shift (adjust to your image)
      />
    </div>
  );
}

export default SlowHomepage;