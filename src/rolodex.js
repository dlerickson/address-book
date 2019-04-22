import React, { Component } from 'react';

class Rolodex extends Component{
	render(){
		
		const{contact, onClickFunction} = this.props;
		
		return(
			<button className="preview-button" onClick={() => onClickFunction(contact)}>
				<p>{contact.firstName}</p>
				<p>{contact.lastName}</p>
				<p>{contact.addressLineOne}</p>
			</button>
		)	
	}
}

export default Rolodex;
