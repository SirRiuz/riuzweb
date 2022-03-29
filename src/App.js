


import React from 'react';
import AppBar from './components/AppBar';
import './styles/app.css'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Home from './screens/Home';
import Curriculum from './screens/Curriculum';
import Cursor from './components/Cursor';
import Project from './screens/Projects';




class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {}
  }


  render(){ 
    return(
      <div className={'app'}>
        <BrowserRouter>
          <AppBar/>
          <Cursor></Cursor>

          <Switch>
            {/* Home routes */}
            <Route exact path={'/index.html'} component={Home}/>
            <Route exact path={'/riuz-web/'} component={Home}/>
            <Route exact path={'/home/'} component={Home}/>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/index/'} component={Home}/>

            {/* curriculum routes */}
            <Route exact path={'/about/'} component={Curriculum} />

            {/* contact url */}
            <Route exact path={'/contact/'}> <h1>contact</h1> </Route>

            {/* projects urls */}
            <Route exact path={'/projects/'} component={Project}/>
            <Route exact path={'/p/'}component={Project}/>
            <Route component={Home}/>

          </Switch>
          
        </BrowserRouter>
      </div>
    )
  }
}


export default App;
