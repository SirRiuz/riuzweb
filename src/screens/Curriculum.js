

import React from 'react';
import Location from '../components/LocationIcon';
import Mail from '../components/Mail';
import Button from '../components/Button';
import Phone from '../assets/Phone'
import '../styles/curriculum.css'
import Skill from '../components/Skill';


class Curriculum extends React.Component {

	constructor(props){
		super(props)
		this.state = {}
	}

	render(){
		document.title = 'Riuz web | About'

		return(
			<div className={'curriculum-container'}>
				<div className={'curriculum-body'}>
					<div id={'about'}>
						<strong className={'title-body'}>Sobre mi</strong>
						<p>Mi nombre es Mateo Jimenez, tengo 18 años y me considero una persona muy creativa y autodidacta .  Cuando tenía 13 años comencé a estudiar programación por mi propia cuenta con el fin de crear un videojuego . </p>
						<p>Actualmente, tengo 3 años de experiencia personal  en el  área de front end y backend  utilizando tecnologías como python y javascript , mis tecnologías favoritas hasta el momento son : Python con Django (para el backend)   y React Js (para el front end)</p>
						<p>Mi objetivo como profesional es desarrollar soluciones tecnológicas que generen un gran impacto en la sociedad, aplicando mis conocimientos en tecnología y desarrollo software.</p>
					</div>
					<div id={'skills'}>
						<strong className={'title-body'}>Mis habilidades</strong>
						<p>Mis principales competencias son la arquitectura de proyectos y el desarrollo de software centrado , sobre todo, en aplicaciones Android , web y del lado del servidor.</p>

						<div style={{ marginTop:'40px' }}>
							<div className={'sckills-container'}>
								<Skill
									text={'Python'}
									url={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png'}
								/>
								<Skill
									text={'Javascript'}
									url={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'}
								/>
								<Skill
									text={'Django'}
									url={'https://server.neunapp.com/media/categoria_blog/django.jpg'}
								/>
								<Skill
									text={'Flask'}
									url={'https://cdn.iconscout.com/icon/free/png-256/flask-51-285137.png'}
								/>
							</div>

							<div className={'sckills-container'}>
								<Skill
									text={'Fastapi'}
									url={'https://cdn.worldvectorlogo.com/logos/fastapi.svg'}
								/>
								<Skill
									text={'React'}
									url={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'}
								/>
								<Skill
									text={'Next Js'}
									url={'https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png'}
								/>
								<Skill
									text={'Node Js'}
									url={'https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png'}
								/>
							</div>


							<div className={'sckills-container'}>
								<Skill
									text={'React native'}
									url={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'}
								/>
								<Skill
									text={'Git / Github'}
									url={'https://www.returngis.net/wp-content/uploads/2021/01/GitHub.png'}
								/>
								<Skill
									text={'Docker'}
									url={'https://www.returngis.net/wp-content/uploads/2021/01/GitHub.png'}
								/>
							</div>
						</div>

					</div>
				</div>

				<div className='data'>
					<div className={'data-container'}>
						<div><Mail/></div>
						<div>
							<a href='mailto: devapps.mateo@gmail.com'><span>devapps.mateo@gmail.com</span></a>
						</div>
					</div>
					<div className={'data-container'}>
						<div><Location/></div>
						<div><span>Colombia</span></div>
					</div>
					<div className={'data-container'}>
						<div><Phone/></div>
						<div><a href='tel:+57 3223438015'>+57 3223438015</a></div>
					</div>
				</div>
			</div>
		)
	}

}



export default Curriculum



