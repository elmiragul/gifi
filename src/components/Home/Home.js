import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            toggler: false
        }
    }
    // componentWillMount(){
    //     store.handleClick()
    // }
    // handleSearchChanged(value) {
    //     store.setInputValue(value)
    // }

    // handleClick(e) {
    //     e.preventDefault()
    //     store.handleClick()
    // }

    toggle(){
        this.setState({
            toggler: !this.state.toggler
        })
    }

    render() {
        return (

            <div>
                <a  onClick={this.toggle.bind(this)>Show Menu</a>
                <div className={`gifs__header_menu ${this.state.toggler ? 'gifs__header_menu--hide' : ''}`}>
                    <div className="gifs__toggler"><a onClick={this.toggle.bind(this)}>X</a></div>
                    <div className="gifs__header_menu_item"><NavLink to="/gifs" className="gifs__header_menu_link">Gifs</NavLink></div>
                    <div  className="gifs__header_menu_item"><NavLink to="/about"  className="gifs__header_menu_link">About</NavLink></div>
                    <div className="gifs__header_menu_item"><NavLink to="/info"  className="gifs__header_menu_link">Info</NavLink></div>
                    <div className="gifs__header_menu_item"><NavLink to="/contact"  className="gifs__header_menu_link">Contact</NavLink></div>
                </div>
            </div>
        )
    }


}
export default Home
