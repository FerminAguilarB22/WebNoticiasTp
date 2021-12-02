import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes} from 'react-router-dom'
import Titulo from './components/common/Titulo';
import Buscador from './components/common/Buscador'



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
