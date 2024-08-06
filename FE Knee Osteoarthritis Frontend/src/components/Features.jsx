import React from "react";
import FeatureCard from "./FeatureCard";

function Features() {
  
  return (
    <div className="features">
      <FeatureCard type="segment"/>
      <FeatureCard type="classify"/>
      <FeatureCard type="visualize"/>
    </div>
  );
}

export default Features;
