import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
        </Routes>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}

export default App;
