import React, { Component } from 'react';
import SearchBar from "./SearchBar"
import VideoList from "./VideoList"
import api from "../api/api"
import VideoDetail from "./VideoDetail"

class App extends Component {
    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        this.onTermSubmit("Monster Hunter")
    }

    onTermSubmit = async (term) => {
        
        const response = await api.get("/search", {
            params: {
                q: term
            }
        })
        
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
        console.log(this.state.selectedVideo);
    }

    render() { 
        return ( 
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;