

import React from "react";
import emailjs from '@emailjs/browser';
import '../styles/form.css'
import Button from '../components/Button'


class ContectForm extends React.Component {

	constructor(props){
		super(props)
		this.formRef = React.createRef()
		this.state = {
			isLoad:false
		}
	}


	onSubmit = ( e ) => {
		e.preventDefault()
		this.setState({ isLoad:true })

		emailjs.sendForm('service_q0dsc2c', 'template_x04uijs', this.formRef.current, 'mB1es2QUyY04fB0PB')
		  .then(res => {
			console.log(res)
			if(!res.status === 200){
				this.props.onError()
				this.setState({ isLoad:false })
			} else{ 
				this.props.onSend()
				this.setState({ isLoad:false })
			}
		  })
		  .catch(err => {
			this.props.onError()
		  })
	} 
	

	render(){

		if(this.state.isLoad){
			return (
				<div className={'load-container'}>
					<div>
						<svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
							<circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
						</svg>
					</div>
				</div>
			)
		}

		return(
			<div>
				<form ref={this.formRef} onSubmit={this.onSubmit}>
					<div className={'form'}>
						<div><input
							required
							className="mail-input"
							type="text"
							name="user_name"
							placeholder="Nombre"
						/></div>

						<div><input
							required
							className="mail-input"
							type="email"
							name="user_email"
							placeholder="Email"
						/></div>
 
						<div><textarea required name="message" className="text-input" placeholder="Mensaje"/></div>
						<div>
							<Button
							  borderRadius="10px"
							  type="submit"
							  text="Send email"
							/>
						</div>
					</div>
				</form>
			</div>
		)
	}

}


export default ContectForm




