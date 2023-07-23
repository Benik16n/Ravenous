import React, { useState } from 'react';
import Yelp from '../../utils/Yelp';
import styles from './App.module.css';
import BusinessList from './BusinessList/BusinessList';
import SearchBar from './SearchBar/SearchBar';
function App() {
  const [businesses,setBusinesses] = useState([])
  const searchYelp = async (term, location, sortBy) => {
  const searchResult = await Yelp.search(term,location,sortBy);
  setBusinesses(searchResult);
  };
  return (
    <div>
      <head>
        <title>Ravenous Home Page</title>
      </head>
      <body>
        <header >
          <div className= {styles.titlestyle}>
            <h1>Ravenous</h1>
          </div>
          <SearchBar searchYelp = {searchYelp} />
        </header>
        <main>
          <BusinessList businesses = {businesses}/>
        </main>
        <footer>
          
        </footer>
      </body>
    </div>
  );
}

export default App;
