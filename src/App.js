
import './App.module.css';
import BusinessList from './BusinessList/BusinessList';
import SearchBar from './SearchBar/SearchBar';
function App() {
  return (
    <div>
      <head>
        <title>Ravenous Home Page</title>
      </head>
      <body>
        <header >
          <h1 className='styles.title-style' >Ravenous</h1>
          <SearchBar />
        </header>
        <main>
          <BusinessList />
        </main>
        <footer>
          
        </footer>
      </body>
    </div>
  );
}

export default App;
