

import React from 'react';
import '../styles/project.css'
import StackGrid from "react-stack-grid";
import Button from '../components/Button'
import PROJECT_DATA from '../data'


class Project extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			hover:false
		}
	}

	onMouseEnter = (e,index) => {
		this.setState({ hover:true,index:index })
	}

	onMouseLeave = (e) => {
		this.setState({ hover:true,index:null })
	}

	render(){

		document.title = 'Riuz web | Projects'

		var projectItems = PROJECT_DATA.PROJECT_DATA.map((x,k) => {
			var hoverMode = null
			if(this.state.index === k){
				hoverMode = (
					<div className={'hover-view'}>
						<div className={'project-data-container'}>
							<div style={{ width:'100%',paddingLeft:'70px' }}><strong id={'project-title'}>{x.title}</strong></div>
							<div style={{ width:'100%',paddingLeft:'70px' }}><p>{x.description}</p></div>
							<div style={{ width:'100%',marginBottom:'30px',paddingLeft:'70px' }}><strong style={{ fontWeight:'300',fontSize:'11px',color:'#909090' }}>More than 1k downloads</strong></div>
							<div>
								<Button
								    width={'20px'}
									text='View in the Google play'
									fontSize={'14px'}
									onClick={() => {
										window.open(x.self)
									}}
								/>
							</div>
						</div>
					</div>
				)
			}

			return (
				<div
				  index={k}
					key={k}
					className={'project-card'}
					onMouseEnter={(e) => {this.onMouseEnter(e,k)}}
					onMouseLeave={this.onMouseLeave}
				>
					<div 
						className={'app-icon'}
						style={{ backgroundImage:`url('${x.icon}')` }}
					></div>
					{ hoverMode }
				</div>
			)
		})

		return(
			<div className={'project-screen'}>
				<StackGrid
				  columnWidth={385}
					gutterHeight={40}
				>
					{ projectItems }
				</StackGrid>
			</div>
		)
	}

}


export default Project