import React, { useState } from "react";

function VideoCard(props) {
  const [showControls, setShowControls] = useState(false);

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  return (
    <div className="video-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <video controls={showControls} poster={props.thumbnail}>
        <source src={props.videoName} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-info">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default VideoCard;


