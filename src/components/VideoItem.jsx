import React from 'react';
import "./VideoItem.css"

const VideoItem = ({video}) => {
    return (
        <div className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            <div className="content">
                <div className="header">ID: {video.id.videoId}, title: {video.snippet.title}</div>
            </div>
        </div>
    );
}
export default VideoItem;