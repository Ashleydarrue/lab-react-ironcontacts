  import React, {Component} from 'react';
import Contact from './../contacts/contactCard'
import contacts from './../../contacts.json';

export default class ContactList extends Component{
  
  constructor(props){
    super(props)
    this.state= {
      contacts: contacts.slice(0,5),
      remaining: contacts.slice(5),
    }
  }
  
  addRandomContact = () => {
      let shownClone = [...this.state.contacts]
      let remainingClone =  [...this.state.remaining]
      let ranNum =Math.floor(Math.random() * remainingClone.length)
      let ranContact =  remainingClone.splice(ranNum, 1)

      shownClone.push(ranContact[0]);
      console.log(shownClone);
      this.setState({contacts: shownClone}) 
  }

  sortByName = () => {
    let shownClone = [...this.state.contacts]
    shownClone.sort((a,b) => (a.name > b.name) ? 1 : -1)
    this.setState({contacts: shownClone}) 
  }
  sortByPopularity = () => {
    let shownClone = [...this.state.contacts]
    shownClone.sort((a,b) => (a.popularity> b.popularity) ? 1 : -1)
    this.setState({contacts: shownClone}) 
  }
  deleteContact = (i) => {
    
    let shownClone = [...this.state.contacts]
     shownClone.splice(i,1);
     this.setState({contacts: shownClone}) 
  }

  showContacts = () =>{
    return ( this.state.contacts.map((eachContact , i )=>{
      return(
        // <h1>{eachContact.name}</h1>
         <Contact
          key={i}
          name= {eachContact.name} 
          pictureUrl = {eachContact.pictureUrl}
          popularity = {eachContact.popularity} 
          deleteContact = {() =>{
             this.deleteContact(i)
          }
        }
          /> 
          );
        })
    );
  }
  render(){
    return (
       <div>
      <button onClick={() => {this.addRandomContact()}}>Add Random Contact</button>
          <button onClick={() => {this.sortByName()}}>Sort By Name</button>
          <button onClick={() => {this.sortByPopularity()}}>Sort By popularity</button>
         {this.showContacts()}
       </div>
     )
  }
}
