import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import {Actions,orginals,Comedy,Horror,Romance,Documentaries} from './urls'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={orginals} title='Netflix Orginals'/>
        <RowPost url={Actions} title='Action Movies' isSmall/>
        <RowPost url={Horror} title='Horror Movies' isSmall/>
        <RowPost url={Romance} title='Romance Movies' isSmall/>
        <RowPost url={Comedy} title='Comedy Movies' isSmall/>
        <RowPost url={Documentaries} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;