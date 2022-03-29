


import React from 'react';
import '../styles/home.css'
import Button from '../components/Button'
import Modal from '../components/Modal';
import Typewriter from 'typewriter-effect';
import svgIcon from '../assets/images/Illustation.png'




class Home extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			show:false
		}
	}


	onClick = () => {
		this.setState({ show:true })
	}


	render(){
		document.title = 'Riuz web'

		return(
			<div className={'home-container'}>
				
				<div>
					<div className={'messege-container'}>
						<div><strong id='hi'>Hi</strong></div>
						<div className='interactive-text'>
							<div><strong>I am <br/></strong></div>
							<div>
								<Typewriter
									options={{
										strings: [
											'<strong/>Mateo .</strong>',
											'<strong/>SrRiuz .</strong>',
											'<strong/>Software dev.</strong>',
											'<strong/>Back-End dev.</strong>',
											'<strong/>Front-End dev.</strong>',
											'<strong/>Full-Stack dev.</strong>',
										],
										autoStart: true,
										loop: true,
									}}
								/>
							</div>
						</div>
					</div>

					<div className='home-text-container'><p id="home-text">I am a <strong>software engineer</strong> , passionate about new challenges and creating software</p></div>

					<div className={'button-grup'}>
						<Button text={'Contact me'} onClick={this.onClick}/>
						<Button mode={'git-button'}/>
					</div>
				</div>

				<div>
					<div
						className={'illistration'}
						style={{
							backgroundImage:`url(${svgIcon})`,
							backgroundRepeat:'no-repeat',
							backgroundPosition:'center'
						}}
					/>
				</div>

				<Modal
				  show={this.state.show}
					oncloseModal={( ) => { this.setState({ show:false }) }}
				/>

			</div>
		)
	}
	
}



export default Home


