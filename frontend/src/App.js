import LandingPage from "./Pages/LandingPage/LandingPage";
import PredictPrice from "./Pages/PredictionPage/PredictPrice";
import HistoryPage from "./Pages/HistoryPage/HistoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/predict-price" element={<PredictPrice />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
