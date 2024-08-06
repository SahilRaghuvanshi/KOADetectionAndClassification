import React from "react";
import { Link } from "react-router-dom";

function KOAInfo() {
  
  return (
    <div className="koa-info-container">
        <div className="koa-info-card">
        <img className="KOAImage" src="NormalImage.png" alt="" />
         <div>
            <h1 className="KneeOAHeading"><span style={{fontSize : "40px"}}>K</span>nee <span style={{fontSize : "40px"}}>O</span>steoarthritis</h1>
            <p className="KneeOADEscription">Knee osteoarthritis is a prevalent degenerative joint condition characterized by the gradual breakdown of cartilage in the knee joint. This breakdown leads to pain, stiffness, swelling, and reduced range of motion, impacting daily activities. Risk factors include aging, obesity, previous joint injuries, and genetics. While there is no cure, management focuses on relieving symptoms and improving function. Treatments may include pain medications, physical therapy, weight management, assistive devices, and injections (e.g., corticosteroids or hyaluronic acid). In severe cases, surgery such as knee replacement may be necessary to restore mobility and alleviate pain, improving quality of life. Regular exercise can also help maintain joint health.</p>
            <Link to="/knee-osteoarthritis-info">
            <button className="learn-more-btn">Learn More related to Knee Osteoarthritis</button>
          </Link>
         </div>
            <img className="KOAImage" src="BasicKOAImage.png" alt="" />
        </div>
    </div>
  );
}

export default KOAInfo;