/* import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./App.css";

function App() {
  const boxRef = useRef(null);

  const tl =gsap.timeline({repeat: 2, repeatDelay: 2})
  gsap.to("#box", {duration: 1, x: 100})
  gsap.to("#box", {duration: 1, x: 200, delay: 1})
  gsap.to("#box", {duration: 1, y: 100, opacity: 0})

tl.resume();
  return (
    <div className="app">
      <h1>GSAP Practice</h1>
    <button className="btn" onClick={tl.resume()}>Play/Pause</button>
      <div ref={boxRef} id="box" className="box">
        Box
      </div>
      <div className="dot">
        <div className="dot2"></div>
      </div>
    </div>
  );
}

export default App; */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./App.css";

function App() {
  const boxRef = useRef(null);
  const tl = useRef();

  useEffect(() => {
    // Create the timeline and store it in the ref
    tl.current = gsap.timeline({
      repeat: -1,
      repeatDelay: .5,
      paused: true, // Start paused so we can control it with the button
    });

    // Add animations to the timeline
    tl.current
      .to("#box", { duration: 1, x: 200, rotation: 360, borderRadius: "50%" })
      .to("#box", { duration: 1, y: 200, scale: 2 })
      .to("#box", { duration: 1, x: 300, opacity: 0 });

    // Start the animation

    // Cleanup function
    return () => {
      tl.current.kill();
    };
  }, []);

  const toggleAnimation = () => {
    if (tl.current) {
      tl.current.paused() ? tl.current.play() : tl.current.pause();
    }
  };

  return (
    <div className="app">
      <h1>GSAP Practice</h1>
      <button className="btn" onClick={toggleAnimation}>
        Play/Pause
      </button>
      <div ref={boxRef} id="box" className="box">
        Box
      </div>
      <div className="dot">
        <div className="dot2"></div>
      </div>
    </div>
  );
}

export default App;
