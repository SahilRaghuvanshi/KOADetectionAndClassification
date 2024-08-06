import React, { useState, useEffect } from "react";

function FeatureImage(props) {
    console.log("In Feature Image",props.type);
  const [currentBanner, setCurrentBanner] = useState(0);
  const Banners = ['Grade0.png', 'Grade1.png', 'Grade2.png', 'Grade3.png', 'Grade4.png'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % Banners.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const [source, setSource] = useState("x-ray-original.png");

  function handleMouseOver() {
    setSource("x-ray-segment.png");
  }

  function handleMouseOut() {
    setSource("x-ray-original.png");
  }
  let imageElement;

  switch (props.type) {
    case "segment":
      imageElement = (
        <img
          className="feature-image"
          src={source}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          alt=""
        />
      );
      break;
    case "classify":
        imageElement = (
            <img
              className="feature-image"
              src={Banners[currentBanner]}
              alt=""
            />
          );
          break;
    case "visualize":
    default:
        imageElement = (
            <img
              className="feature-image"
              src="visualize.png"
              alt=""
            />
          );
          break;
      imageElement = null;
  }
  return <div>{imageElement}</div>;
}

export default FeatureImage;
