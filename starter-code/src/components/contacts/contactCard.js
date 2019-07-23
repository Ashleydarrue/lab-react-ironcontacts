
import React, {Component} from 'react';

 
 export default class Contact extends Component {
     constructor(props){
       super(props);
       this.state = {
         name: this.props.name,
         pictureUrl: this.props.pictureUrl,
         popularity: this.props.popularity,
         deleteContact: this.props.deleteContact.bind(this)
       }
     }
   render() {
     return (
       <div>
            <img src={this.props.pictureUrl} />
          <h4> {this.props.name} </h4>
          <p>{this.props.popularity}</p>  
          <button onClick ={this.state.deleteContact}>Delete</button>
       </div>
     )
   }
 }
 


