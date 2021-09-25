import React, { useEffect } from 'react';
import Main from './components/Main';
import Aos from "aos";
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
        duration: 1000
    });
}, []);
  return (
    <div>
      <Main/>
    </div>
  );
}

export default App;
