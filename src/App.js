import './App.css';
import Top from './Components/Top';
import Software from './Components/Software';
import MyWork from './Components/MyWork'
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Top />
      <Software />
      <MyWork />
      <Contact />

      <div className='thanks'>
        <p>made with ♥ by Aether!</p>
      </div>
    </div>
  );
}

export default App;
