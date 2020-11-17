import React, { Component } from 'react';

import Title from '../../components/Title/Title';
import MainGame from '../../components/MainGame/MainGame';
import Button from '../../components/UI/Button/Button';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Title />
          <div className='Test'></div>
          <Button title='Test' transparent={true}/>
          <Button title='Test' white={true}/>
          <MainGame />
        </main>
      </div>
    );
  }
}

export default App;
