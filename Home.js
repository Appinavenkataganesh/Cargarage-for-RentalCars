import { Link } from "react-router-dom";
import '../Component/Home.css';
import Back from './img/bg1.jpg';




const Home = () => {
  return (
    <div>
      
      <Link to='/home'></Link>
        {/* <p className="text"> Login & Registation Forms</p> */}

        <div className="bak">
          <div>
            <img src={Back} className="heee"></img>
          </div>
        <div className="but">
            <Link to='/login'  className="submit3">Login</Link>
            <Link to='/register'  className="submit3">Registation</Link>
        </div>

        </div>
        


      


        
    </div>
  )
}

export default Home;