import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
    //   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    //   frameBorder="0"
    //   webkitallowfullscreen="true"
    //   mozallowfullscreen="true"
    //   allowFullScreen
    //   ratio='1.77'
    //   width="498"
    //   height="280"
    />
  </div>
)

export default Video