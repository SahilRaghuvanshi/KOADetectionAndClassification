import React, { useState, useEffect } from "react";

function FeatureDesc(props) {
  let FeatureHeading;

  switch (props.type) {
    case "segment":
        FeatureHeading = "Segment Cartilage";
      break;
    case "classify":
        FeatureHeading = "Classifly Osteoarthritis"
          break;
    case "visualize":
        FeatureHeading = "View 3D Model"
          break;
    default:
          FeatureHeading = null;
  }
  return <div className="feature-heading">{FeatureHeading}</div>;
}

export default FeatureDesc;