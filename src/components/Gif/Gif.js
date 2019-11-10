import React, { Component } from "react";



export default class Gif extends Component {
  
    render() {
        return (

        <div style={{boxSizing:'border-box'}}>
            <img alt ="" className="gif__img" src={this.props.src} />
        </div>
        )
    
    

    }
}



