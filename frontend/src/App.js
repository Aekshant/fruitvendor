import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { LandingPage } from "./componets/LandingPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HomePage from './componets/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <LandingPage/> } />
          <Route path='/home' element={ <HomePage/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
