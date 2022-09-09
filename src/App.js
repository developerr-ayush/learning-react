import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Navbar title="My Website" />
      <Routes>
        <Route path='/' element={<Textform heading="Form convert texts" />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
