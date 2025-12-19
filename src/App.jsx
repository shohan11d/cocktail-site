import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './App.css';

function App() {
  const boxRef = useRef(null);

  useEffect(() => {
    // Basic GSAP animation
    gsap.to(boxRef.current, {
      x: 200,
      rotation: 360,
      duration: 2,
      repeat: -1, // Infinite repeat
      yoyo: true, // Go back and forth
      ease: 'power1.inOut'
    });
  }, []);

  return (
    <div className="app">
      <h1>GSAP Practice</h1>
      <div ref={boxRef} className="box">
        Box
      </div>
    </div>
  )
}

export default App
