import React, { useState } from "react";
import axios from "axios";
import { variables } from "./Variables";

function Form(props) {
  const [formData, setFormData] = useState({
    PatientName: "",
    Age: "",
    Gender: "",
    file: null,
    PreviousInjuries: false,
    Genetics: false,
    Height: "",
    Weight: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled and Age, Height, Weight are numeric
    if (
      formData.PatientName &&
      formData.Age &&
      formData.Gender &&
      formData.file &&
      formData.Height &&
      formData.Weight &&
      !isNaN(formData.Age) &&
      !isNaN(formData.Height) &&
      !isNaN(formData.Weight)
    ) {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      try {
        const response = await axios.post(
          variables.API_URL + "kneepatients/savefile",
          formDataToSend
        );
        console.log(response.data);
        props.onImageUpload(formData.file); // Pass uploaded image data to parent component
        if (response.data.segmented_image) {
          console.log("segmented image file path",response.data.segmented_image)
          props.onSegmentedImage(response.data.segmented_image);
          props.onOutputClass(response.data.output_class);
        }
      } catch (error) {
        console.error("Error occurred:", error);
      }
    } else {
      console.log("Please fill all required fields and ensure Age, Height, Weight are numeric.");
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <table style={{ borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td align="left">
              <label htmlFor="PatientName">Patient Name:</label>
            </td>
            <td align="left">
              <input
                type="text"
                id="PatientName"
                name="PatientName"
                value={formData.PatientName}
                onChange={handleChange}
                className="input-field"
                required
              />
            </td>
          </tr>
          <tr>
            <td align="left">
              <label htmlFor="Age">Age:</label>
            </td>
            <td align="left">
              <input
                type="number"
                id="Age"
                name="Age"
                value={formData.Age}
                onChange={handleChange}
                className="input-field"
                required
              />
            </td>
          </tr>
          <tr>
            <td align="left">
              <label htmlFor="Gender">Gender:</label>
            </td>
            <td align="left">
              <select
                id="Gender"
                name="Gender"
                value={formData.Gender}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="left">
              <label htmlFor="file">Upload Image:</label>
            </td>
            <td align="left">
              <input
                type="file"
                id="file"
                name="file"
                accept=".jpg, .jpeg, .png"
                onChange={handleFileChange}
                className="purple-file-button"
                required
              />
            </td>
          </tr>
          <tr>
            <td align="center">
              <div className="checkbox-wrapper-41">
                <input
                  type="checkbox"
                  id="PreviousInjuries"
                  name="PreviousInjuries"
                  checked={formData.PreviousInjuries}
                  onChange={handleChange}
                />
                <label htmlFor="PreviousInjuries" style={{ fontSize: "30px" }}>Previous Injuries</label>
              </div>
            </td>
            <td align="center">
              <div className="checkbox-wrapper-41">
                <input
                  type="checkbox"
                  id="Genetics"
                  name="Genetics"
                  checked={formData.Genetics}
                  onChange={handleChange}
                />
                <label htmlFor="Genetics" style={{ fontSize: "30px" }}>Genetics</label>
              </div>
            </td>
          </tr>
          <tr>
            <td align="left">
              <label htmlFor="Height">Height:</label>
            </td>
            <td align="left">
              <input
                type="number"
                id="Height"
                name="Height"
                value={formData.Height}
                onChange={handleChange}
                className="input-field"
                required
              />
            </td>
          </tr>
          <tr>
            <td align="left">
              <label htmlFor="Weight">Weight:</label>
            </td>
            <td align="left">
              <input
                type="number"
                id="Weight"
                name="Weight"
                value={formData.Weight}
                onChange={handleChange}
                className="input-field"
                required
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2" align="left">
              <button className="purple-submit-button" type="submit">Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default Form;

