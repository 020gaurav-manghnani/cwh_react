// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';
// import {Button} from "@mui/material";

function App() {
  return (
    <>
   <Navbar title="25-Bucks" aboutText="About"/>

   <div className='container my-5'>
      {/* <Form /> */}
      <About />
   </div>
   
  
    </>
  );
}

export default App;

