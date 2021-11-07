import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {actions,netflixOriginals} from './urls'
import "./App.css"
import Banner from './Components/Banner/Banner'
import RowPosts from './Components/RowPosts/RowPosts'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPosts url={netflixOriginals} title='Netflix Originals'/>
      <RowPosts url={actions} title='Action' isSmall />
    </div>
  );
}

export default App;
