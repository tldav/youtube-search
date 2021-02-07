import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: "" }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onTermSubmit(this.state.term)
    }

    render() { 
        return (
            <div className="search-bar ui segment">
                <form action="" className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="">Search Videos</label>
                        <input type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;