import React, { Component } from 'react';

class SearchBar extends Component {
    state = {  }
    render() { 
        return (
            <div className="search-bar ui segment">
                <form action="" className="ui form">
                    <div className="field">
                        <label htmlFor=""></label>
                        <input type="text"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;