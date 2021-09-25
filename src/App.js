import React, { useEffect } from 'react';
import Main from './components/Main';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Aos from "aos";
import 'aos/dist/aos.css';
const store = configureStore();

function App() {

  useEffect(() => {
    Aos.init({
        duration: 1000
    });
}, []);

  console.log(store.getState());

  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}

export default App;
