import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCR3I7sf6eTAcvOaPR8dpsrVlW-_IrQHno';
const App = () => {
    return (
      <div>
        <SearchBar />
      </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'));
