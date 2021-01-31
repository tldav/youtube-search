import React, { Component } from 'react';
import SearchBar from "./SearchBar"
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
            </div>
        );
    }
}

export default App;