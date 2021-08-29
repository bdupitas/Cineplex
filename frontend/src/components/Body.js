import React from "react";
import VideoPlayer from "./VideoPlayer";


const Body = () => {


  const videoJsOptions = { // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'testFiles/testMovie1.mp4',
      type: 'video/mp4'
    }]
  }

  return (
    <>
     <VideoPlayer options={videoJsOptions} />
    </>
  );
};

export default Body;
