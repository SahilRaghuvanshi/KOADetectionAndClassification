import React, { useState } from "react";
import Header from "./Header";
import ProjectMembers from "./ProjectMembers";
import Form from "./Form";
import ClassifyOutput from "./ClassifyOutput";
import Recommendation from "./Recommendation";
import Partition from "./Partition";

function ClassifyKOA() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [segmentedImage, setSegmentedImage] = useState(null);
  const [outputClass, setOutputClass] = useState(null);

  const handleImageUpload = (imageData) => {
    setUploadedImage(imageData);
    setSegmentedImage(null); // Clear segmented image when a new image is uploaded
  };

  const handleSegmentedImage = (imageData) => {
    setSegmentedImage(imageData);
  };

  const handleOutputClass = (classData) => {
    setOutputClass(classData);
  };

  return (
    <div>
      <Header headerContent="Classification Of Knee Osteoarthritis Severity" />
      <h1 className="heading-h1">|||||||||</h1>
      <div style={{ paddingLeft: "50px", paddingRight: "50px", display:"flex"}}>
        <Form onImageUpload={handleImageUpload} onSegmentedImage={handleSegmentedImage} onOutputClass={handleOutputClass} />
        <ClassifyOutput uploadedImage={uploadedImage} segmentedImage={segmentedImage} outputClass={outputClass}/>
      </div>
      <Partition/>
      <Recommendation outputClass={outputClass}/>
      <ProjectMembers />
    </div>
  );
}

export default ClassifyKOA;

