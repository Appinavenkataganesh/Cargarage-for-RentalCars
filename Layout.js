<script src="https://kit.fontawesome.com/b07099420a.js" crossorigin="anonymous"></script>
import { Link } from "react-router-dom" ;
import "./Layout.css" ;
import { useState } from "react";

const Layout = () => {
  const [ info , setInfo] = useState({
    email:"",
    password:"",
  });

  const { email, password } = info;
  const changeInput = (e) => {
    setInfo({...info,[e.target.name] : e.target.value});
  };

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(info);
    if(info.email === 'ganesh@39' && info.password === 'hello')
    {
      alert('Login Successful')
    }
    else
    {
      alert('Invalid credinatials')
    }
  }

    return (
      <div className="main">   

       <div className="container">

        <Link to='/layout'><h1 className='header'>Login</h1></Link> 
 
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <div className="input">
                   <i class="fa-solid fa-envelope"></i>
                   <input type="email" id='email' name='email' value={email} onChange={changeInput} placeholder="Email id"></input>
              </div>
              <div className="input" >
                   <i class="fa-solid fa-lock"></i>
                   <input type="password"  name='password' value={password} onChange={changeInput} placeholder="Password"></input>
              </div>
            </div>
               <div className='forgot-password'>Forgot password? <span>Click Here!</span></div> <br />  
               <div className="submitcontainer"> <button className="submit">Login</button></div>
          </form>
        
      </div>
        
      </div>
  )
} 


// const Layout = () => {
//   const [info, setInfo] = useState({
//     first_name: "",
//     password: "",
//   });
//   const { first_name, password } = info;
//   const changeHandler = (e) => {
//     setInfo({ ...info, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(info);
//   };
//   return (
    
//     <div className="text-center m-5-auto">
//       <Link to='/layout'>Login Page</Link> 
//       <h2>Sign in to us</h2>
//       <form onSubmit={handleSubmit}>
//         <p>
//           <label>Username</label>
//           <br />
//           <input
//             type="text"
//             name="first_name"
//             value={first_name}
//             onChange={changeHandler}
//             required
//           />
//         </p>
//         <p>
//           <label>Password</label>
//           <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
//           <br />
//           <input type="password" autoComplete="off" name="password" value={password} onChange={changeHandler} required/>
//         </p>
//         <p><button id="sub_btn" type="submit">Login </button></p>
//       </form>
//       <footer>
//         <p>
//           First time? <Link to="/register">Create an account</Link>.
//         </p>
//         <p>
//           <Link to="/">Back to Homepage</Link>.
//         </p>
//       </footer>
//     </div>
//   );
// };

export default Layout ;