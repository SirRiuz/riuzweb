

import React from "react";
import GithubIcon from "../assets/Github";
import '../styles/button.css'


class Button extends React.Component {

	constructor(props){
		super(props)
		this.state = {}
	}


	onClick = () => {
		if(this.props.onClick != null){
			this.props.onClick()
		}
	}



	render(){

		if(this.props.mode === 'git-button'){
			return (
				<div className={'git-button-container'}>
					<a href={'https://github.com/SirRiuz/'} target={'_blank'}>
						<button className={'git-button'}>
							<GithubIcon/>
						</button>
					</a>
					<strong className={'git-text'}>Github</strong>
				</div>
			)
		}

		return(
			<button
				type={this.props.type}
				style={{
					borderRadius:this.props.borderRadius
				}}
			  	className={'button'}
			  	title={this.props.text}
				onClick={this.onClick}
			>
				<strong
				  style={{
					fontSize:this.props.fontSize,
					paddingLeft:this.props.width,
					paddingRight:this.props.width,
				  }}
				>
					{this.props.text}
				</strong>
			</button>
		)
	}

}



export default Button


