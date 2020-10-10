//methods
//get all posts from database
//reset search

import React, { Component } from 'react';


export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
            myPost: true,
            posts: [],
            loading: true
        }
    }

    handleSearch = (val) => {
        this.setState({search: val})
    }

    render(){
        return(
            <div>
                <input
                    onChange={e => this.handleSearch(e.target.value)}
                    placeholder='Search by Title'
                ></input>
                <button>Search</button>
                <button>Reset</button>
                <input 
                    checked={this.state.myPosts} 
                    onChange={_ => this.setState({ myPosts: !this.state.myPosts }, this.grabPosts)} 
                    type='checkbox' />

            </div>
        )
    }
}