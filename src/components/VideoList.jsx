import React from 'react';
import VideoItem from "./VideoItem"

const VideoList = ({videos, onVideoSelect}) => {
    
    const renderedVideoList = videos.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video} />
    })
    
    return (
        <div className="ui relaxed divided list">{renderedVideoList}</div>
    );
}

export default VideoList;