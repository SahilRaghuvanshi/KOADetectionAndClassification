import React from "react";
import Header from "./Header";
import Features from "./Features";
import Poster from "./Poster";
import Partition from "./Partition";
import KOAInfo from "./KOAInfo";
import UnetAndResnet from "./UnetAndResnet";
import VideoWrapper from "./VideoWrapper";
import ProjectMembers from "./ProjectMembers";
import KOAInfoPage from "./KOAInfoPage";

function Home() {
  return (
    <div>
      <Header headerContent="OsteoScope"/>
      <Poster/>
      <Features />
      <Partition/>
      <KOAInfo />
      <Partition/>
      <UnetAndResnet />
      <Partition/>
      <VideoWrapper column={4} videoIndices={[0,1,2,3,4,5,6,7,8,9,10,11]}/>
      <ProjectMembers/>
    </div>
  );
}

export default Home;