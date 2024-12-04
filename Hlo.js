import '../Component/Hlo.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Hlo = () => {

    const [ formData , SetFormData] = useState({
        firstname :"" ,
        lastname :"" ,
        dateofbirth :"",
        email :"" ,
        mobilenumber :"",
        address :"" ,
        language :"" ,
        gender :"",
    });


    const handleinput = (e) => {
        SetFormData({ ...formData,[e.target.name]:e.target.value })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Form Data submitted :" , formData);
    }
    
  return (
    <div className='main'>
        

        <div className='container1'>
             <Link to='/hlo'> <h1 className='header1' >Registation Form</h1> </Link>
            <form  onSubmit={handleSubmit} >
                <div className='inputs1'>
                <div className='input1'>
                    <label className='text1'>Name:</label>
                    <input type='text1' name='firstname' value={formData.firstname} onChange={handleinput} placeholder='First name' ></input> 
                    <input type='text1' name='lastname' value={formData.lastname} onChange={handleinput} placeholder='Last name'></input>
                </div> <br></br>
                <div className='input1'>
                    <label className='text1'>Date of Birth:</label>
                    <input type='date' name='dateofbirth' value={formData.dateofbirth} onChange={handleinput}></input> <br></br>
                </div>
                <br></br>
                <div className='input1'>
                    <label className='text1' >Email:</label>
                    <input type='email' id='email' name='email' value={formData.email} onChange={handleinput} placeholder='Enter your Email' ></input><br></br>
                </div>
                <br></br>
                <div className='input1'>
                    <label className='text1'>Mobile:</label>
                    <input type='tel' name='mobilenumber' value={formData.mobilenumber} onChange={handleinput} placeholder='Enter number'></input> <br></br>
                </div>
                <br></br>
                <div className='input2'>
                    <label className='text1'>Gender:</label>
                    <input type='radio' name='gender' id='dot-1' value="Male" onChange={handleinput} 
                    checked ={formData.gender === "Male"} ></input>
                    <label className='text1'>Male</label>
                    <input type='radio' name='gender' id='dot-2' value="Female" onChange={handleinput} 
                    checked ={formData.gender === "Female"}></input>
                    <label className='text1'>Female</label> <br></br>
                </div>
                <br></br>
                <div className='input1'>
                    <label className='text1'>Address:</label>
                    <textarea cols="30" rows="2" name='address' value={formData.address} onChange={handleinput}></textarea> <br></br>
                </div>
                <br></br>
                <div className='input1'>
                    <label className='text1'>Language:</label>
                    <select name="language" id="" value={formData.language} onChange={handleinput}>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Kannada</option>
                        <option>Tamil</option>
                        <option>Telugu</option>
                    </select> <br></br>
                </div>
                <br></br>
                {/* <div className='input1'>
                    <label className='text'>Insert-File:</label>
                    <input type="file"></input><br></br>
                </div> */}
                <div className='input2'>
                    <input type='checkbox' name='checkbox'></input> 
                    <label className='text1'>agree terms & conditions</label> <br></br>
                </div>
                <br></br>
                <button className='submit1'>submit</button>
                </div>
                
            </form>

        </div>

        

        {/* <div className='container'>
            <div className='header'>
                <div className='text'>Sign Up</div>
                <div className='underline'></div>
            </div>    
            <div className='inputs'>
                <div className='input'>
                    <i class="fa-solid fa-user"></i>
                    <input type='text' placeholder='Name'></input>
                </div>
                
                <div className='input'>
                    <i  class="fa-solid fa-envelope"></i>
                    <input type='email'placeholder='Email Id' ></input>
                </div>
                <div className='input'>
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" placeholder='Password'></input>
                </div>
            </div>
            <div className='forgot-password'>Forgot password? <span>Click Here</span></div>
            
            <div className='submit-container'>
                <div className='submit'>Sign Up</div>
                <div className='submit'>Login</div>
            </div>
        </div> */}
       
    
    </div>
  )
}

export default Hlo;