import React, { Component } from 'react';

class Chapter extends Component {
    render(){
        return(
            <div className="chapter">
                <div>{this.props.title}</div>
            </div>
        )
    }
}

export default Chapter;