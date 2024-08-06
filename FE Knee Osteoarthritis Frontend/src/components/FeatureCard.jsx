import React from "react";
import { Link } from "react-router-dom";
import FeatureImage from "./FeatureImage";
import FeatureDesc from "./FeatureDesc";

function FeatureCard(props) {
  let endpoint = "";

  if (props.type === "visualize") {
    endpoint = "/knee-3D-model";
  } else if (props.type === "segment") {
    endpoint = "/segment";
  } else if (props.type === "classify") {
    endpoint = "/classify";
  }

  return (
    <Link to={endpoint} className="feature-card" style={{ textDecoration: 'none' }}>
      <div className="center-of-parent">
        <FeatureImage type={props.type} />
        <FeatureDesc type={props.type} />
      </div>
    </Link>
  );
}

export default FeatureCard;

