import React from 'react';

const VideoItem = ({video}) => {
    return (
        <div>ID: {video.id.videoId}, title: {video.snippet.title}</div>
    );
}
export default VideoItem;