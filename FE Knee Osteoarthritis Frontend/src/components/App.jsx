import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KOAInfoPage from "./KOAInfoPage";
import Home from "./Home";
import UnetModelInfo from "./UnetModelInfo";
import ResnetModelInfo from "./ResnetModelInfo";
import Knee3DModel from "./Knee3DModel";
import ClassifyKOA from "./ClassifyKOA";
import SegmentCartilage from "./SegmentCartilage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/knee-osteoarthritis-info" element={<KOAInfoPage />} />
        <Route path="/unet-model" element={<UnetModelInfo />} />
        <Route path="/resnet-model" element={<ResnetModelInfo />} />
        <Route path="/knee-3D-model" element={<Knee3DModel />} />
        <Route path="/classify" element={<ClassifyKOA />} />
        <Route path="/segment" element={<SegmentCartilage/>} />
      </Routes>
    </Router>
  );
}

export default App;