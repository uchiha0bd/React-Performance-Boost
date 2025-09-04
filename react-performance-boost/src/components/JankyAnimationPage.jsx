// src/components/JankyAnimationPage.jsx
import React from 'react';
import './Animation.css'; // 1. Import the CSS file

function JankyAnimationPage() {
  // 2. All the useState and useEffect hooks are gone!
  return (
    <div>
      <h2>Our <span style={{color: 'green'}}>Optimized</span> Animation Page</h2>
      <p>
        This animation is now perfectly smooth! We removed all JavaScript state updates
        and are using a hardware-accelerated CSS transform.
      </p>

      <div style={{
        position: 'relative',
        width: '400px',
        height: '100px',
        backgroundColor: '#eee',
        border: '1px solid #ccc',
        marginTop: '20px'
      }}>
        {/* 3. We just apply the CSS class and we're done! */}
        <div className="smooth-box" />
      </div>
    </div>
  );
}

export default JankyAnimationPage;