//import logo from './logo.svg';
import './App.css';
import Data from "./data.json";


function App() {
  return (
    <div className="App">
      <h1>Data From Json App One </h1>
    <div className="posts"> 
      {
        Data.map(post =>{
          return (
            <>
              <h4>ID number: { post.id }</h4>
              <p>Name: { post.name }</p>
              
              
            </>
          )
        })
      }


    </div>
    </div>
  );
}

export default App;
