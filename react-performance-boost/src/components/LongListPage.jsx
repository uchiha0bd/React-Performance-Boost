// src/components/LongListPage.jsx
import React from 'react';
// 1. Import the hook from the new library
import { useVirtualizer } from '@tanstack/react-virtual';

// The data is the same as before
const listData = [];
for (let i = 1; i <= 10000; i++) {
  listData.push({ id: i, text: `Item number ${i}` });
}

function LongListPage() {
  const parentRef = React.useRef(null);

  // 2. Use the hook to create the virtualizer
  const rowVirtualizer = useVirtualizer({
    count: 10000, // Total number of items
    getScrollElement: () => parentRef.current, // The scrolling element
    estimateSize: () => 35, // Height of each item
  });

  return (
    <div>
      <h2>Our <span style={{color: 'green'}}>Optimized</span> "Long List" Page</h2>
      <p>This page now uses TanStack Virtual for instant loads and smooth scrolling!</p>

      {/* 3. This is the scrollable parent element. We MUST attach the ref here. */}
      <div
        ref={parentRef}
        style={{
          height: `500px`,
          width: `100%`,
          overflow: 'auto', // Allow scrolling
          border: '1px solid black', // For visual debugging
        }}
      >
        {/* 4. This inner div is given the total height of all items to create the scrollbar */}
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {/* 5. We map over the VIRTUAL items, not the original data array */}
          {rowVirtualizer.getVirtualItems().map((virtualItem) => (
            <div
              key={virtualItem.key}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`, // This positions the item
                borderBottom: '1px solid #ddd',
                padding: '8px',
                boxSizing: 'border-box' // Important for accurate sizing
              }}
            >
              {listData[virtualItem.index].text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LongListPage;