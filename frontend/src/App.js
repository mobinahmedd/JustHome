import React, { useState } from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import PredictPrice from "./Pages/PredictionPage/PredictPrice";
import HistoryPage from "./Pages/HistoryPage/HistoryPage";
import Property from "./Pages/PropertyDescriptionPage/Property";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [pricePredictionHistory, setPricePredictionHistory] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/predict-price"
          element={
            <PredictPrice
              setPricePredictionHistory={setPricePredictionHistory}
            />
          }
        />
        <Route
          path="/history"
          element={
            <HistoryPage pricePredictionHistory={pricePredictionHistory} />
          }
        />
        <Route path="/property/:id" element={<Property />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
