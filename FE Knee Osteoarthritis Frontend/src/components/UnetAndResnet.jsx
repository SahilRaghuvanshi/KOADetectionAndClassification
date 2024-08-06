import React from "react";
import { Link } from "react-router-dom";

function UnetAndResnet() {
  
  return (
    <div className="unet-resnet-container">
        <div className="unet-info-card">
            <h1 className="KneeOAHeading">Segmentation using Unet Model</h1>
            <img className="Model-Image" src="unet-simplified-model.png" alt=""/>
            <Link to="/unet-model">
            <button className="learn-more-unet">Learn More About Unet Model</button>
            </Link>
        </div>
        <div className="resnet-info-card">
        <h1 className="KneeOAHeading">Classification using Resnet Model</h1>
        <img className="Model-Image" src="resnet-simplified-model.png" alt=""/>
        <Link to="/resnet-model">
        <button className="learn-more-resnet">Learn More About Resnet Model</button>
        </Link>
        </div>
    </div>
  );
}

export default UnetAndResnet;