import './App.css';
import Particle from './components/Particle';
import background from "./background/background.png"

const App = () => {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      height:'100vh',
      width: '100vw',
      backgroundSize:'cover',
      position:'relative',
      overflow:'hidden',
    }}>

      <Particle />
      <div>
        <h1>Welcome to our Website</h1>
        <p><span>Creating Opprotunities</span></p>
      </div>
    </div>
  );
}

export default App;