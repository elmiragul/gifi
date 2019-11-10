import React, { Component } from "react";
import Gif from "../Gif/Gif";

import { observer } from "mobx-react";
import store from './Store'


if (typeof window != 'undefined') window.store = store;


class Gifs extends Component {
    componentWillMount() {
        store.handleClick()
    }
    handleSearchChanged(value) {
        store.setInputValue(value)
    }

    handleClick(e) {
        e.preventDefault()
        store.handleClick()
    }

    render() {
        return (
            <div className="gifs__wrapper">
                <div>

                    <div className="gifs__input"> <input className="gifs__input_line" value={store.inputValue} type="search" id="site-search" name="q"
                        onChange={(event) => { this.handleSearchChanged(event.currentTarget.value) }} /></div>

                    <div className="gifs__button"><button onClick={this.handleClick} className="gifs__input_search">Search</button></div>
                </div>
                <div className="gifs__grid-container">
                    {store.gifs.map((gif, i) => (
                        <div key={i} className="gifs__grid-item"><Gif src={gif.images.fixed_height_small_still.url} /></div>
                    ))}

                </div>
            </div>
        )
    }


}

export default observer(Gifs);





