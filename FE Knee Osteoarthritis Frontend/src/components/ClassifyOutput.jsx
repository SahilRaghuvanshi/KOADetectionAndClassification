import React from "react";
import FeatureCard from "./FeatureCard";
import { variables } from "./Variables"; // Import the variables object

function ClassifyOutput({ uploadedImage, segmentedImage, outputClass}) {
  const { PHOTO_URL } = variables; // Destructure PHOTO_URL from the variables object

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
        <div className="features"  style={{marginTop:"-10px"}}>
            <div className="feature-card center-of-parent" style={{width:"300px"}}> 
            <img
            className="classify-image-css element-with-background"
            src={uploadedImage ? URL.createObjectURL(uploadedImage) : "transparent_square.png"}
            alt=""
            />
            <div className="feature-heading" style={{color:"white",fontSize:"30px"}}>Uploaded Image</div>
            </div>
            <img className="arrowname" src="arrow.png" alt="" />
            <div className="feature-card center-of-parent" style={{width:"300px", marginRight:"-20px"}}> 
            <img
            className="classify-image-css element-with-background"
            src={segmentedImage ? PHOTO_URL + segmentedImage : "transparent_square.png"}
            alt=""
            />
            <div className="feature-heading" style={{color:"white",fontSize:"30px"}}>Segmented Image</div>
            </div>
            
        </div>
        <div className="classification-result"style={{marginLeft:"20px"}}>
        <h1 className="heading-h1">Result : {outputClass}</h1>
        </div>
    </div>
  );
}

export default ClassifyOutput;
