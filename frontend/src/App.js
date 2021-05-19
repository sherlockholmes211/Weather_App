import React, { useState, useCallback } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';

import {AppContext} from './Context/ResponseContext'
import Content from './Components/Content/Content';



function App() {
  const [res, setres] = useState('');
  const changeRes = useCallback(
    (res) => {
      setres(res)
    },
    [],
  )
  return (
    <AppContext.Provider
      value={{
        res:res,
        changeRes:changeRes
      }}
      >
    <Router>
      <NavBar/>
      <Content/>

    </Router>
    </AppContext.Provider>
  );
}

export default App;
