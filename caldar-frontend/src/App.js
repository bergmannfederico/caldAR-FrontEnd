import React, { Component } from 'react';
import MainLayout from './components/MainLayout/MainLayout'
import './App.css';

class App extends Component{
  render() {
      return(
        <MainLayout>
          <p>
            This text is in app.js
          </p>
        </MainLayout>
      );
  }
}

export default App;
