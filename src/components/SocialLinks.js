

import React from "react";
import FacebookIcon from "../assets/Facebook";
import InstagramIcon from "../assets/Instagram";
import LinkedinIcon from "../assets/Linkedin";
import TwitterIcon from "../assets/Twitter";
import '../styles/socialLinks.css'



class SocialLinks extends React.Component {

	constructor(props){
		super(props)
		this.state = {}
		this.socialLinks = [
			{
				name:'Linkedin',
				url:'https://www.linkedin.com/in/mateo-jimenez-8b8643213/',
				svg:<LinkedinIcon/>
			},{
				name:'Facebook',
				url:'https://www.facebook.com/100061446661263/',
				svg:<FacebookIcon/>
			},{
				name:'Instagram',
				url:'https://www.instagram.com/srriuz_/',
				svg:<InstagramIcon/>
			},{
				name:'Twitter',
				url:'https://twitter.com/SrRiuz25',
				svg:<TwitterIcon/>
			}
		]
	}


	render(){
		var socialLinks = this.socialLinks.map((x,k) => (
			<div className={'social-item'} key={k}>
				<a href={x.url} target={'_blank'} title={x.name}>{ x.svg }</a>
			</div>
		))
		return(<div className={'social-links-container'}>{socialLinks}</div>)
	}

}



export default SocialLinks


