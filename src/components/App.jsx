import React, { Component } from 'react';
import SearchBar from "./SearchBar"

class App extends Component {
    state = {  }

    onTermSubmit = (term) => {
        console.log(term);
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