// import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import Map from './components/Map';

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a
          href='https://vitejs.dev'
          target='_blank'
        >
          <img
            src={viteLogo}
            className='logo'
            alt='Vite logo'
          />
        </a>
      </div>
      <h1>Mug Map</h1>
      <div className='card'>
        <Map />
      </div>
    </>
  );
};

export default App;
