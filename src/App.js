
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  return (
    <>
    
    <Navbar title = "textutils" about = "about Txtutils"/>
    <div className= "container my-3">
    <TextForm handling="Enter text to analyse"/>
    </div>
    </>
  );
}

export default App;
