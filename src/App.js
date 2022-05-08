import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loging from './Component/Loging'
import Registration from './Component/Registration'
import Menu from './Component/Menu'
import Table from './Component/Table'
import Edit from './Component/Edit'
import AddUser from './Component/AddUser'
import Forgate from './Component/Forgate'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from './Component/Logout'

function App() {
  return (
    <div className="App">
      <Menu/>
      <Router>
        <Switch>
          <Route exact path='/' component={Loging}/>
          <Route  exact path='/reg' component={Registration}/>
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/forgate' component={Forgate}/>
          <Route exact path='/add' component={AddUser}/>
          <Route exact path='/table' component={Table}/>
          {/* <Route exact path='/:id' component={Update}/> */}
          <Route exact path='/:id' component={Edit}/>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
