import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'
import Team from './components/form'
import About from './components/about';
function App() {
  return (
    
      
    <div className="App">
    <Router>
    <Header/>
    <Route exact path="/">
            <Home/>
            </Route>
            <Route exact path="/team">
            <Team/>
            </Route>
            <Route exact path="/about">
            <About/>
            </Route>
            <Footer/>
            </Router>
            
    </div>
    
  );
}

export default App;
