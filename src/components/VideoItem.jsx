import React from 'react';

const VideoItem = ({video}) => {
    return (
        <div className="item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            <div className="content">
                <div className="header">ID: {video.id.videoId}, title: {video.snippet.title}</div>
            </div>
        </div>
    );
}
export default VideoItem;