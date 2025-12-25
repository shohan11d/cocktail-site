import { useState } from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

function App() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero/>
      <div className="h-[2000px]"></div>
    </main>
  );
}

export default App;