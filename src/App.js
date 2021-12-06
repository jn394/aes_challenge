import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Pages from './Pages/Pages';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Pages.HomePage} />
          <Route exact path='/Tests' component={Pages.TestsPage} />
          <Route exact path='/QA' component={Pages.QA_Prod_Page} />
          <Route exact path='/Prod' component={Pages.QA_Prod_Page} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;