import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="My Website"/>

      {/* <Textform heading="Form convert texts"/> */}
      <About/>
    </>
  );
}

export default App;
