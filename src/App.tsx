import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Rocket from './components/rocket/rocket';
import Header from './components/Header/Heder';

function App() {

  return (
    <Fragment>
   
      <Header />
      <Rocket />

    </Fragment>
  );
}

export default App;
