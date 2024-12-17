import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countdown from './component/Countdown';
import TebakTebakan from './component/TebakTebakan';
import KartuUcapan from './component/KartuUcapan';

const App = () => {
  const [currentMenu, setCurrentMenu] = useState("countdown");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <nav className="flex justify-center space-x-2 bg-gray-800 text-white py-4">
                <button
                  className={`px-4 py-2 rounded-lg ${currentMenu === "countdown" ? "bg-gray-600" : ""}`}
                  onClick={() => setCurrentMenu("countdown")}
                >
                  Hitungan Mundur
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${currentMenu === "tebak" ? "bg-gray-600" : ""}`}
                  onClick={() => setCurrentMenu("tebak")}
                >
                  Tebak-Tebakan
                </button>
              </nav>
              {currentMenu === "countdown" && <Countdown />}
              {currentMenu === "tebak" && <TebakTebakan />}
            </div>
          }
        />
        <Route path="/kartu-ucapan" element={<KartuUcapan />} />
      </Routes>
    </Router>
  );
};

export default App;