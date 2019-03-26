import React, { Component } from 'react';
import { Header } from './common/header/Header'
import { RentalCard } from './components/rental/RentalCard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='container'>
          <section id='rentalListing'>
            <h1 class='page-title'>Your Home All Around the World</h1>
            <div class='row'>
              <RentalCard />
              <RentalCard />
              <RentalCard />
            </div>
          </section>
        </div>
    </div>
    );
  }
}

export default App;
