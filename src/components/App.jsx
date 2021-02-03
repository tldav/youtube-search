import React, { Component } from 'react';
import SearchBar from "./SearchBar"
import VideoList from "./VideoList"
import api from "../api/api"
import VideoDetail from "./VideoDetail"

class App extends Component {
    state = { videos: [], selectedVideo: null }

    onTermSubmit = async (term) => {
        
        const response = await api.get("/search", {
            params: {
                q: term
            }
        })
        
        this.setState({videos: response.data.items, selectedVideo: null})
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
        console.log(this.state.selectedVideo);
    }

    render() { 
        return ( 
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo} />

                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/> 
            </div>
        );
    }
}

export default App;