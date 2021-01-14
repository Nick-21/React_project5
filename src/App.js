import React,{useState,useEffect} from 'react';
import "./App.css";
import Axios from 'axios';




function App() {

  const [url , setURL] = useState('');


  useEffect(() => {
    Axios.get("https://aws.random.cat/meow").then((url) =>{
      setURL(url.data["file"]);
  });
},[]);

return <div> className="App" > {url != "" && <img src={url}/>}</div>
    }
  
 




  

export default App;