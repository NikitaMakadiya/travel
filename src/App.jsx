import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Mainnavbarandfooter/Navbar";

function App() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
