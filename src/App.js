// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
// import {Button} from "@mui/material";

function App() {
  return (
    <>
   <Navbar title="25-Bucks" aboutText="About"/>

   <div className='container my-5'>
      <Form />
   </div>
  
    </>
  );
}

export default App;

