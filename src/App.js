//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert.js';
import Navbar from './components/Navbar.js'
import TextForms from './components/TextForms.js'


function App() {

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type:type
    })
  }
  return ( // this fucntion can return only one tag(container tag) <></> this is shorthand of reactFragment used to return mulitple elements in a single container 
    <>
      <Navbar title= "Main Text Utils"/>
      <Alert alert={alert}/>
      <TextForms heading= "Enter text   "/>
    </>
  );
}

export default App;
