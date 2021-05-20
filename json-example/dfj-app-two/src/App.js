//import logo from './logo.svg';
import './App.css';
import Data from "./data.json";


function App() {
  return (
    <div className="App">
      <h1>Data From Json Second App </h1>
    <div className="posts"> 
      {
        Data.map(post =>{
          return (
            <>
              <h4>ID number: { post.id }</h4>
              <p>Name: { post.name }</p>
              <p>ID Card: { post.idcard }</p>
              <p>Phone #: { post.phone }</p>
              <p>Address: { post.address }</p>
              <p>Gender: { post.gender }</p>
              <p>Place Of Birth: { post.placeofbirth }</p>
              <p>Content : { post.content }</p>
              
              
              
            </>
          )
        })
      }


    </div>
    </div>
  );
}

export default App;
