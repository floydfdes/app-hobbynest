import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Appnavbar from './components/Layout/Appnavbar';
import UniversalLoading from './components/UniversalLoading/UniversalLoading';
import checkTokenExpiry from './utills/checkTokenExpiry';

function App() {
  checkTokenExpiry();
  return (
    <BrowserRouter>
      <Appnavbar />
      <Home />
      <UniversalLoading />
    </BrowserRouter>
  );
}

export default App;
