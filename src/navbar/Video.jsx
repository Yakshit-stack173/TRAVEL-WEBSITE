import React from 'react'
import demoVideo from "../images/video.mp4"

export default function Video() {
  return (
    <div className="flex items-center justify-center w-full bg-white overflow-hidden">
      <div className="w-full">
        <video 
          controls 
          autoPlay 
          className="w-full h-auto"
        >
          <source src={demoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
