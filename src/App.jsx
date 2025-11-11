import React, { useEffect } from 'react'
import './App.css'
import { initTubes } from './componts/animacation.js';
import Landingpage from './componts/laningpage.jsx';
import Navbar from './componts/navebar.jsx';
import About from './componts/about.jsx';
import LenisScroll from "./LenisScroll.jsx";


const App = () => {
  useEffect(() => {
    let handle;
    const canvas = document.getElementById('canvas');
    // Only initialize in browser when canvas exists
    if (canvas) {
      initTubes(canvas).then(h => { handle = h; }).catch(err => {
        console.error('Failed to init tubes cursor', err);
      });
    }

    return () => {
      try {
        if (handle && handle.destroy) handle.destroy();
      } catch { void 0; }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* animation container: visually behind page content and non-interactive */}
      <div id="app" className="fixed inset-0 pointer-events-none z-0">
        <canvas id="canvas" className="absolute w-full h-full z-0"></canvas>
      </div>
      {/* main content: sits above the animation visually */}
      <div className="relative z-20 min-h-screen">
        <Landingpage/>
         <LenisScroll />
      </div>
    </div>
  )
}

export default App

