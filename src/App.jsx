import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import "./App.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

function App() {
  const boxRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Box animation
    gsap.fromTo(
      boxRef.current,
      { 
        opacity: 0,
        y: 100,
        scale: 0.5
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Text animation
    gsap.to(textRef.current, {
      text: "This text is animated with GSAP TextPlugin! Watch it type out smoothly. You can put any text here and it will animate beautifully.",
      duration: 3,
      delay: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 70%"
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="app">
      <div style={{ 
        height: "100vh", 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center",
        background: "#f0f0f0",
        padding: "20px",
        textAlign: "center"
      }}>
        <h1>Scroll down to see the animations</h1>
      </div>
      
      <div 
        ref={boxRef} 
        className="box"
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "#4CAF50",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "18px",
          margin: "100px auto",
          borderRadius: "8px",
          opacity: 0
        }}
      >
        Animated Box
      </div>

      <div 
        ref={textRef}
        style={{
          maxWidth: "600px",
          margin: "0 auto 100px",
          padding: "20px",
          fontSize: "24px",
          lineHeight: "1.6",
          opacity: 0.9
        }}
      >
        {/* Text will be injected here by GSAP */}
      </div>

      <div style={{ height: "100vh" }}></div>
    </div>
  );
}

export default App;