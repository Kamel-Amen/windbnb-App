import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Stays from './components/Stays/Stays';
import './App.scss';
import Footer from './components/Common/Footer/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Stays />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;