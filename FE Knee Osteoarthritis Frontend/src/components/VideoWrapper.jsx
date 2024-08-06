// import React from "react";
// import VideoCard from "./VideoCard";

// function VideoWrapper(props) {
  
//   return (
//     <div>
//     <h1 className="ExerciseHeading">Exercises For Healthy Joints And Flexibility</h1>
//     <div className={props.column === 4 ? "exercise-container-with-4" : "exercise-container-with-3"}>
//         <VideoCard videoName="video1.mp4" title="Relax Your Body" thumbnail="video1-thumbnail.png"/>
//         <VideoCard videoName="video2.mp4" title="Relax Your Palm" thumbnail="video2-thumbnail.png"/>
//         <VideoCard videoName="video3.mp4" title="Stretch Your Arms" thumbnail="video3-thumbnail.png"/>
//         <VideoCard videoName="video4.mp4" title="Stretch Your Right Body" thumbnail="video4-thumbnail.png"/>
//         <VideoCard videoName="video5.mp4" title="Stretch Your Left Body" thumbnail="video5-thumbnail.png"/>
//         <VideoCard videoName="video6.mp4" title="Upavistha Konasana" thumbnail="video6-thumbnail.png"/>
//         <VideoCard videoName="video7.mp4" title="Bidalasana" thumbnail="video7-thumbnail.png"/>
//         <VideoCard videoName="video8.mp4" title="Adho Mukha Shvanasana" thumbnail="video8-thumbnail.png"/>
//         <VideoCard videoName="video9.mp4" title="Anantasan -1" thumbnail="video9-thumbnail.png"/>
//         <VideoCard videoName="video10.mp4" title="Anantasan -2" thumbnail="video10-thumbnail.png"/>
//         <VideoCard videoName="video11.mp4" title="Ardha Bhujangasan" thumbnail="video11-thumbnail.png"/>
//         <VideoCard videoName="video12.mp4" title="Dhanurasana" thumbnail="video12-thumbnail.png"/>
//     </div>
//     </div>
//   );
// }

// export default VideoWrapper;
import React from "react";
import VideoCard from "./VideoCard";

function VideoWrapper({ column, videoIndices }) {
  const videos = [
    { videoName: "video1.mp4", title: "Relax Your Body", thumbnail: "video1-thumbnail.png" },
    { videoName: "video2.mp4", title: "Relax Your Palm", thumbnail: "video2-thumbnail.png" },
    { videoName: "video3.mp4", title: "Stretch Your Arms", thumbnail: "video3-thumbnail.png" },
    { videoName: "video4.mp4", title: "Stretch Your Right Body", thumbnail: "video4-thumbnail.png" },
    { videoName: "video5.mp4", title: "Stretch Your Left Body", thumbnail: "video5-thumbnail.png" },
    { videoName: "video6.mp4", title: "Upavistha Konasana", thumbnail: "video6-thumbnail.png" },
    { videoName: "video7.mp4", title: "Bidalasana", thumbnail: "video7-thumbnail.png" },
    { videoName: "video8.mp4", title: "Adho Mukha Shvanasana", thumbnail: "video8-thumbnail.png" },
    { videoName: "video9.mp4", title: "Anantasan -1", thumbnail: "video9-thumbnail.png" },
    { videoName: "video10.mp4", title: "Anantasan -2", thumbnail: "video10-thumbnail.png" },
    { videoName: "video11.mp4", title: "Ardha Bhujangasan", thumbnail: "video11-thumbnail.png" },
    { videoName: "video12.mp4", title: "Dhanurasana", thumbnail: "video12-thumbnail.png" }
  ];
  

  return (
    <div>
      <h1 className="ExerciseHeading">Exercises For Healthy Joints And Flexibility</h1>
      <div className={column === 4 ? "exercise-container-with-4" : "exercise-container-with-3"}>
        {videoIndices.map((index) => (
          <VideoCard
            key={index}
            videoName={videos[index].videoName}
            title={videos[index].title}
            thumbnail={videos[index].thumbnail}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoWrapper;

