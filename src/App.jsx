import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';

import Layout from './components/layout/Layout';
import Home from './components/pages/Home';

function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <Switch>

          <Route path="/">
            <Layout>
              
              <Home />

            </Layout>
          </Route>

        </Switch>

      </div>

    </BrowserRouter>
  );
}

export default App;