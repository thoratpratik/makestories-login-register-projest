import React, { Fragment } from 'react';
import { Route ,BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Alerts from './component/Alert';
import Desktop from './component/Desktop';
import EditProfile from './component/EditProfile';
import Login from './component/Login';
import Register from './component/Register';
import CreateProfile from './component/CreateProfile';
function App() {
  return (
    <Router>   
       <Fragment>
       <Alerts/> 
          <Route exact path='/' component={Login}/>   
         
      <Switch>
          <Route exact path='/register' component={Register}/>   
          <Route exact path='/desktop' component={Desktop} />
          <Route exact path='/edit-profile' component={EditProfile} />
          <Route  exact path='/create-profile' component={CreateProfile}/>
          
      </Switch>  
      </Fragment>
      
    </Router>

  );
}

export default App;
