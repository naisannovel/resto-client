import React, { useEffect } from 'react';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Aos from "aos";
import 'aos/dist/aos.css';
import { auth } from './store/user';
const store = configureStore();

function App() {

  useEffect(() => {
    Aos.init({
        duration: 1000
    });
}, []);

store.dispatch(auth({name:'naisan',email:'h2@mail.com',password:'11111'}));

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
