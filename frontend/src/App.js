import React, { useState } from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import PredictPrice from "./Pages/PredictionPage/PredictPrice";
import HistoryPage from "./Pages/HistoryPage/HistoryPage";
import Property from "./Pages/PropertyDescriptionPage/Property";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Theme } from "@radix-ui/themes";

function App() {
  const [pricePredictionHistory, setPricePredictionHistory] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Theme accentColor="gray" scaling="110%" appearance="dark">
              <LandingPage />
            </Theme>
          }
        />
        <Route
          path="/predict-price"
          element={
            <Theme accentColor="jade" scaling="110%">
              <PredictPrice
                setPricePredictionHistory={setPricePredictionHistory}
              />
            </Theme>
          }
        />
        <Route
          path="/history"
          element={
            <HistoryPage
              pricePredictionHistory={pricePredictionHistory}
              setPricePredictionHistory={setPricePredictionHistory}
            />
          }
        />
        <Route path="/property/:id" element={<Property />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
