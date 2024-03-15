import { useState } from 'react';
import './App.css';
import Slider from './components/slider/slider';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Slider min={-85} max={85} />
    </>
  );
}

export default App;
