import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/HomePage'
import Navbar from './components/navbar';
import Footer from './components/footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AbacusPage from './pages/AbacusPage';
import Module1 from './pages/Module1';
import Module2 from './pages/Module2'
import Module3 from './pages/Module3'
import Login from './pages/Login'
import Register from './pages/Register'
import Partners from './pages/Partners';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/abacus" component={AbacusPage} />
          <Route path="/module1" component={Module1} />
          <Route path="/module2" component={Module2} />
          <Route path="/module3" component={Module3} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/partners" component={Partners} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
