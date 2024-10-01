import React from 'react';
import './App.css';
import Recommendations from './components/Recommendations.js';
import TopRated from './components/TopRated.js';
import RecentReleases from './components/RecentReleases.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Document Prime</h1>
      </header>
      <main>
        <Recommendations />
        <TopRated />
        <RecentReleases />
      </main>
    </div>
  );
}

export default App;

