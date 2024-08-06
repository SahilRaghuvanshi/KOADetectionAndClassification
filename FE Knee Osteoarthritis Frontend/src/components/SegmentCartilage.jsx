import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import ProjectMembers from "./ProjectMembers";
import { variables } from "./Variables";

function SegmentCartilage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [segmentedImageUrl, setSegmentedImageUrl] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    // Convert selected file to URL
    setUploadedImageUrl(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await axios.post(
          variables.API_URL + "kneepatients/upload",
          formData
        );

        if (response.status === 200) {
          console.log("Image uploaded successfully");
          setSegmentedImageUrl(variables.PHOTO_URL + response.data.segmented_image);
        } else {
          console.error("Error uploading image");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("No image selected");
    }
  };

  return (
    <div>
      <Header headerContent="Segmentation Of Knee Cartilage" />
      <div style={{ paddingLeft: "200px", paddingRight: "200px" }}>
        <h1 className="heading-h1">|||||||||</h1>
        <div style={{ display: "flex" }}>
          <div className="segment-card">
            <img
              className="classify-image-css element-with-background"
              src={uploadedImageUrl || "segment-original-transparent.png"} // Display uploaded image
              alt=""
              style={{ width: "80%", height: "80%" }}
            />
          </div>
          <div className="segment-card">
            <img
              className="classify-image-css element-with-background"
              src={segmentedImageUrl || "segmented-image-transparent.png"}
              alt=""
              style={{ width: "80%", height: "80%" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input
              type="file"
              id="file"
              name="file"
              accept=".jpg, .jpeg, .png"
              onChange={handleFileChange}
              className="purple-button"
            />
            <button className="purple-button" type="submit">
              Upload Image & Segment It
            </button>
          </form>
        </div>
      </div>
      <ProjectMembers />
    </div>
  );
}

export default SegmentCartilage;
