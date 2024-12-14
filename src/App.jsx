import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Appnavbar from './Components/Layout/Appnavbar';
import UniversalLoading from './Components/UniversalLoading/UniversalLoading';
import checkTokenExpiry from './Utils/checkTokenExpiry';

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
