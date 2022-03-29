

import React from 'react';
import '../styles/skills.css'



class Skill extends React.Component {


	constructor(props){
		super(props)
		this.state = {}
	}


	render(){
		return(
			<div className={'skill-container'}>
				<div><strong>{this.props.text}</strong></div>
			</div>
		)
	}

}





export default Skill



