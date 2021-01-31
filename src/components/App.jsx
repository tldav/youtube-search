import React, { Component } from 'react';
import SearchBar from "./SearchBar"
import VideoList from "./VideoList"
import api from "../api/api"

class App extends Component {
    state = { videos: [] }

    onTermSubmit = async (term) => {
        
        const response = await api.get("/search", {
            params: {
                q: term
            }
        })
        
        this.setState({videos: response.data.items})
    }

    render() { 
        return ( 
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos}/> 
            </div>
        );
    }
}

export default App;