import React, {
	Component
} from 'react';
import {
	addresses
} from './addresses';
import Rolodex from './rolodex';
import RolodexFull from './rolodexFull';
import './styles.css';

class App extends Component {

	setCurrentRolodex = (contact) => {
		this.setState({
			currentRolodex: contact
		})
	};

	constructor(props) {
		super(props);

		this.changeCurrentRolodex = this.setCurrentRolodex.bind(this);

		this.state = {

			currentRolodex: null

		};

	}

	render() {

		console.log(this.state.currentRolodex);

		return ( <
			div className = "App" >
			<
			div className = "rolo-mini-col" >
			<
			ul > {
				addresses.map((address) => {
					return ( <
						li key = {
							address.firstName
						} >
						<
						Rolodex contact = {
							address
						}
						onClickFunction = {
							this.changeCurrentRolodex
						}
						/> < /
						li >


					);
				})

			} < /ul> </div > {
				/* below is what map() is doing above... also block comments need curly braces because it's javascript!!!
											<li>
												<Rolodex
													contact={addresses[0]}
												/>
											</li>
											<li>
												<Rolodex
													contact={addresses[1]}
												/>
											</li>
											<li>
												<Rolodex
													contact={addresses[2]}
												/>
											</li>
											<li>
												<Rolodex
													contact={addresses[3]}
												/>
											</li>
											<li>
												<Rolodex
													contact={addresses[4]}
												/>
											</li>
								*/
			} <
			div className = "rolo-full-contact" > {
				this.state.currentRolodex ?

				<
				RolodexFull
				currentRolodex = {
					this.state.currentRolodex
				}
				/>

				:

					<
					div className = "select-contact" >

					<
					p > Welcome to the Dunderdex. < /p>  < /
					div >


			}

			<
			/div>   </div >
		);
	}
}




export default App;
