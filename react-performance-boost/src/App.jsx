// src/App.jsx
import { useState } from 'react';
import SlowHomepage from './components/SlowHomepage';
import LongListPage from './components/LongListPage';
import JankyAnimationPage from './components/JankyAnimationPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      <h1>React Performance-Boost Project</h1>
      <nav style={{ marginBottom: '20px', borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>
        <button onClick={() => setCurrentPage('home')} style={{ marginRight: '10px' }}>
          Slow Homepage
        </button>
        <button onClick={() => setCurrentPage('list')} style={{ marginRight: '10px' }}>
          Long List Page
        </button>
        <button onClick={() => setCurrentPage('animation')}>
          Janky Animation Page
        </button>
      </nav>

      <hr />

      {/* Conditionally render the component based on the state */}
      {currentPage === 'home' && <SlowHomepage />}
      {currentPage === 'list' && <LongListPage />}
      {currentPage === 'animation' && <JankyAnimationPage />}
    </div>
  );
}

export default App;