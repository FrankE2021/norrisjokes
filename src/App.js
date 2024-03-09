import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [chiste, setChiste] = useState("")
  const otro=()=>{
    const url= "https://api.chucknorris.io/jokes/random"
    const peticion=fetch(url);
    peticion
    .then(datos => datos.json())
    .then(lectura => setChiste(lectura.value))
    .catch(console.log)
  }
  useEffect(()=> {
    otro()
  },[])

  
  return (
  <>
  <div className='contenedor'>
  <h2>
    {chiste}
  </h2>  
  <p>
    <button className='but' onClick={otro}>Otro chiste</button>
  </p> 
  </div> 
  </>
  );
}

export default App;
