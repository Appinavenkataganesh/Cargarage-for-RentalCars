import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Cars from './Component/Cars'
import Home from './Component/Home';
import Layout from "./Component/Layout";
import Hlo from "./Component/Hlo";


function App() {
  return (

    <div >

     <Router>
      <Routes>
        <Route path='/' element={<Cars />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Layout />}></Route>
        <Route path='/register' element={<Hlo />}></Route>  

      </Routes>
     </Router> 
    </div>
  );
}

export default App;
