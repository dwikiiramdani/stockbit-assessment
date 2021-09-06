import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Home.css';

function Home() {
  const [keyWord, setKeyWord] = useState('')
  return (
    <div className="Home">
      <header className="Home-header">
        <h2>
          Stockbit React Dev Test
        </h2>
        <div>
          <input
            className="Home-textbox"
            aria-label="Set increment amount"
            value={keyWord}
            onChange={(val) => setKeyWord(val.target.value)}
          />
          <button
            className="Home-button"
            onClick={() => {}}
          >
            Find Movie
          </button>
        </div>
        
      </header>
    </div>
  );
}

export default Home;
