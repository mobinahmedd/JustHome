import React, { useState } from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import PredictPrice from "./Pages/PredictionPage/PredictPrice";
import HistoryPage from "./Pages/HistoryPage/HistoryPage";
import Property from "./Pages/PropertyDescriptionPage/Property";
import ChatBotPage from "./Pages/ChatBotPage/ChatBotPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import chatBotIcon from "./Assets/Icons/chat-bot-icon.png";
function App() {
  const [pricePredictionHistory, setPricePredictionHistory] = useState([]);
  const [propertyData, setPropertyData] = useState({
    area_type: "",
    availability: "",
    bath: "",
    bhk: "",
    id: "",
    location: "",
    price: "",
    sqft: "",
  });

  console.log("Jawad : ", propertyData);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Theme accentColor="gray" scaling="110%" appearance="dark">
                <LandingPage setPropertyData={setPropertyData} />
              </Theme>
            }
          />
          <Route
            path="/predict-price"
            element={
              <Theme accentColor="jade" scaling="110%">
                <PredictPrice
                  setPricePredictionHistory={setPricePredictionHistory}
                  setPropertyData={setPropertyData}
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
          <Route
            path="/property/:id"
            element={
              <Property
                property={propertyData}
                setPropertyData={setPropertyData}
              />
            }
          />

          <Route path="/chatbot" element={<ChatBotPage />} />
        </Routes>
      </BrowserRouter>
      <img
        style={{
          position: "fixed",
          bottom: 10,
          right: 40,
          height: "100px",
          width: "100px",
          cursor: "pointer",
        }}
        src={chatBotIcon}
        onClick={() => {
          window.location.href = "/chatbot";
        }}
      />
    </>
  );
}

export default App;
