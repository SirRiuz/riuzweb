

import React from "react";
import '../styles/cursor.css'



class Cursor extends React.Component {

	constructor(props){
		super(props)
	}


	componentDidMount(){
		window.addEventListener('mousemove',(e) => {
			document.getElementById('cursor-container').style.visibility = 'visible'
			document.getElementById('pointer').style.visibility = 'visible'
			document.getElementById('cursor-container').style.transform = `translate(${e.x - 15 }px,${e.y - 140}px)`
			document.getElementById('pointer').style.transform = `translate(${e.x }px,${e.y - 124 }px)`

		})
	}



	render(){
		return(
			<div>
				<div id={'cursor-container'}></div>
				<div id={'pointer'}/>
			</div>
		)
	}

}


export default Cursor



