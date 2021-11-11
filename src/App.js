import React from 'react';
import Navbar from './components/Navbar';
import routes from './routes';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              {/*{routes.map(route => {*/}
              {/*  return (*/}
              {/*      <Route*/}
              {/*          key={route.path}*/}
              {/*          path={route.path}*/}
              {/*          exact*/}
              {/*      >*/}
              {/*        <route.component />*/}
              {/*      </Route>*/}
              {/*  )*/}
              {/*})}*/}
                {routes.map((route, id) => {
                return (
                    <Route
                        key={id} //이렇게 하셔도 됩니다.
                        path={route.path}
                        exact
                    >
                      <route.component />
                    </Route>
                )
              })}
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
