

import React from "react";
import '../styles/modal.css'
import ContectForm from "./ContactForm";



class Modal extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			onclose:false,
		}
	}


	onClick = () => {
		if(this.props.oncloseModal != undefined) {
			this.props.oncloseModal()
		}
	}


	render(){
		
		if(this.props.show) {
			return(
				<div className={'modal-container'}>
					<div className={'modal-screen'} onClick={this.onClick}/>
					<div className={'modal'}>
						<ContectForm
						  onError={() => {
							  this.onClick()
						  }}
						  onSend={() => {
							  this.onClick()
						  }}
						/>
					</div>
				</div>
			)
		}

		return null
	}

}





export default Modal

