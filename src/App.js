import React, { useEffect } from 'react';
import Main from './routers/Main';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Aos from "aos";
import 'aos/dist/aos.css';
const store = configureStore();

function App() {

  useEffect(() => {
    Aos.init({
        duration: 500
    });
  },[]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
