import React, { Component } from 'react';
// import logo from './logo.svg';

import List from './components/lists/contactList'
import './App.css';



class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state= {
  //     contacts: contacts.slice(0,5),
  //     remaining: contacts.slice(5),
  //   }
  // }
  
  // addRandomContact = () => {
  //     let shownClone = [...this.state.contacts]
  //     let remainingClone =  [...this.state.remaining]
  //     let ranNum =Math.floor(Math.random() * remainingClone.length)
  //     let ranContact =  remainingClone.splice(ranNum, 1)

  //     shownClone.push(ranContact[0]);
  //     console.log(shownClone);
  //     this.setState({contacts: shownClone}) 
  // }

  // sortByName = () => {
  //   let shownClone = [...this.state.contacts]
  //   shownClone.sort((a,b) => (a.name > b.name) ? 1 : -1)
  //   this.setState({contacts: shownClone}) 
  // }
  // sortByPopularity = () => {
  //   let shownClone = [...this.state.contacts]
  //   shownClone.sort((a,b) => (a.popularity> b.popularity) ? 1 : -1)
  //   this.setState({contacts: shownClone}) 
  // }

  
    render() {
      return(
        <div>
          <h1>IronContacts</h1>
          <List/>
        </div>
      )
  }
}

export default App;
