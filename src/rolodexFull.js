import React, {Component} from 'react';

class RolodexFull extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			addresses: [],
			selectedIndex: 0
		}
		this._onNext = this._onNext.bind(this);
	}
	
	_onNext() {
		if (this.state.selectedIndex === this.state.addresses.length - 1)
			return;
		
		this.setState(prevState => ({
			selectedIndex: prevState.selectedIndex + 1}))
	}	
		
	
	
    render() {
        const {addresses, currentRolodex} = this.props;
        return (
            <div className="rolodexFull">
                <div>
                    <img
                        alt={currentRolodex.lastName}
                        className="face"
                        src={currentRolodex.officeURL}
                        width={300}
                    />
                </div> 
                <div className="rolo-info">                   
                    <p>First Name: {currentRolodex.firstName}</p>
                    <p>Last Name: {currentRolodex.lastName}</p>
                    <p>Address: {currentRolodex.addressLineOne}</p>
					<p>Address: {currentRolodex.addressLineTwo}</p>
                    <p>City: {currentRolodex.city}</p>
                    <p>State: {currentRolodex.state}/10</p>
					<p>Zip: {currentRolodex.zipCode}</p>
					<p>Country: {currentRolodex.country}</p>
				{//	<button onClick={this._onNext}>Next</button>
				}
                </div>
            </div>
        );
    }
}

export default RolodexFull;
