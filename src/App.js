//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import TextForms from './components/TextForms.js'


function App() {
  return ( // this fucntion can return only one tag(container tag) <></> this is shorthand of reactFragment used to return mulitple elements in a single container 
    <>
      <Navbar title= "Main Text Utils"/>
      <TextForms heading= "Enter text   "/>
    </>
  );
}

export default App;
