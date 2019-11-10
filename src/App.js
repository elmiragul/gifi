import React from 'react';
import Home from './components/Home/Home';
import Gifs from './components/Gifs/Gifs';
import {BrowserRouter, Route} from 'react-router-dom';
import About from './components/about/About'


function App() {
  return (
    
     <BrowserRouter>
     <Home />
     <Route path="/gifs" component={Gifs}/>
     <Route path="/about" component={About}/>
     </BrowserRouter>

  );
}

export default App;
