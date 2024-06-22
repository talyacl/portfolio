import React from 'react';
import StarsBackground from './components/StarsBackground';
import Portfolio from './components/Portfolio';
import './App.css';
import './index.css';

const App = () => {
    return (
        <div className="relative w-full h-full">
            <StarsBackground />
            <Portfolio />
        </div>
    );
};

export default App;

