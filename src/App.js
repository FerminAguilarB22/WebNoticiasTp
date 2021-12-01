import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Titulo from './components/common/Titulo';
import Buscador from './components/common/Buscador';
import Apple from './components/pages/Apple';



function App() {
  return (
    <Router>
      <Titulo/>
      <Buscador/>
      <Routes>
        
      </Routes>
    </Router>

  );
}

export default App;
