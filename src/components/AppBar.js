

import React from "react";
import ShellIcon from "../assets/Shell";
import '../styles/appBar.css'
import SocialLinks from "./SocialLinks";
import { Link } from 'react-router-dom'
import DropMenu from "../assets/DropMenu";
import { motion } from "framer-motion"
import Close from "../assets/Close";




class AppBar extends React.Component {

	constructor(props){
		super(props)
		this.tabs = [{
				title:'Home',
				origin:'/home/'
			},{
				title:'About',
				origin:'/about/'
			},{
				title:'Projects',
				origin:'/projects/'
			}]

		this.state = { 
			index:0,
			isShowResponsiveMenu:false
		}
	}


	onClick = (data) => {
		this.setState({ index:data.k })
	}


	componentDidMount(){
		this.onBack()
		this.changeCursor()
	}


	changeCursor = () => {
		this.tabs.map((x,k) => {
			if(x.origin  === window.location.pathname){
				this.setState({ index:k })
			}
		})
	}


	onBack = () => {
		window.addEventListener('popstate',(e) => {
			this.changeCursor()
		})
	}

	showResponsiveMenu = ( ) => {
		this.setState({ isShowResponsiveMenu:true })
	}


	clickItem = (e) => {
		this.setState({ isShowResponsiveMenu:false })
	}


	render(){

		var responsiveMenu = null
		var options = this.tabs.map((x,k) => {

			const INDICATOR = <div className={'indicator'}></div>
			var dotIndicator = k === this.state.index ? INDICATOR:null

			return(
				<div
					key={k}
					className={'tab-item'}
				>
					<Link
					  to={x.origin}
						onClick={() => { this.onClick({ k:k }) }} 
						title={x.title}
					>
						<div className={'tab-item-container'}>
							<div><span>{x.title}</span></div>
						</div>
						<div className={'indicator-container'}>{ dotIndicator }</div>
					</Link>
				</div>
			)
		})

		if(this.state.isShowResponsiveMenu){
			responsiveMenu = (
				<div className={'responsive-menu'}>
					<div className={'close'}>
						<div></div>
						<div 
							onClick={this.clickItem}
							className={'close-icon-container'}
						>
							<Close/>
						</div>
					</div>
					<div>
						<div className={'menu-item'}>
							<div><Link to={'/home/'} onClick={this.clickItem}>Home</Link></div>
						</div>
						<div className={'menu-item'}>
							<div><Link to={'/about/'} onClick={this.clickItem}>About</Link></div>
						</div>
						<div className={'menu-item'}>
							<div><Link to={'/projects/'} onClick={this.clickItem}>Projects</Link></div>
						</div>
					</div>
				</div>
			)
		}


		return(
			<div className={'bar-container'}>

				<div className={'tab-title'}>
					<ShellIcon/>
					<strong className={'bar-title'}>riuz</strong>
				</div>

				<div className={'tab-container'}>
				  <div className={'item-container'}>{ options }</div>
				</div>
				<div className={'drop-menu'} onClick={this.showResponsiveMenu}>
					<DropMenu/>
				</div>

				<div className={'links'}> <SocialLinks/> </div>
				{ responsiveMenu }
				
			</div>
		)
	}
}




export default AppBar



