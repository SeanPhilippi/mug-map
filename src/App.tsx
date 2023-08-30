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
      <div style={{ fontSize: '32px', padding: '1rem' }}>Mug Map</div>
      <Map />
    </>
  );
};

export default App;
