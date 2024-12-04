import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Component/Cars.css';



import HyundaiCreta from './img/HyundaiCreta.jpg';
import MahindraThar from './img/MahindraThar.jpg';
import TataPunch from './img/TataPunch.jpg';
import MarutiBrezza from './img/Mar.jpeg';
import RenaultKWID from './img/RenaultKWID.jpeg';
import HyundaiVenue from './img/HyundaiVenue.jpeg';
import MarutiCelerio from './img/MarutiCelerio.jpeg';
import Ertiga from './img/Ertiga.jpeg';
import Land from './img/Land.jpeg';
import XUV700 from './img/XUV700.jpeg';
import Nexon from './img/Nexon.jpeg';
import Baleno from './img/Baleno.jpeg'

import Benz from './img/benz.jpeg';
import Rar from './img/rar.jpeg';
import Lan from './img/lan.jpeg';
import Citroen from './img/Citroen.jpeg';
import Defender from './img/Defender.jpeg';
import Porsche from './img/Porsche.jpeg';
import eC3 from './img/eC3.jpeg';
import GLS from './img/GLS.jpeg';
import RollsRoyce  from './img/Rolls-Royce.jpeg';


const car = [
    {
        "id": 1,
        "image" : HyundaiCreta,
        "company" : "Hyundai",
        "model": "Hyundai Creta",
        "price": "₹ 11 - 20.15 Lakh*",
      },
      {
        "id": 2,
        "image" : MahindraThar,
        "company" : "Mahindra",
        "model": "Mahindra Thar",
        "price": "₹ 11.25 - 17.20 Lakh*",
    },
    {
        "id": 3,
        "image" : TataPunch,
        "company" : "Tata",
        "model": "Tata Punch",
        "price": "₹ 6 - 10.10 Lakh*",
    },
    {
        "id": 4,
        "image" : MarutiBrezza,
        "company" : "Maruti Suzuki",
        "model": "Maruti Brezza",
        "price": "₹ 8.34 - 14.14 Lakh*",
        
    },
    {
        "id": 5,
        "image" : RenaultKWID,
        "company" : "Renault",
        "model": "Renault KWID 1.0 ",
        "price": "₹ 4.85 Lakh*",
    },
    {
        "id": 6,
        "image" : HyundaiVenue,
        "company" : "Hyundai",
        "model": "Hyundai Venue",
        "price": "₹ 7.94 - 13.48 Lakh*",
    },
    {
        "id": 7,
        "image" : MarutiCelerio,
        "company" : "Maruti Suzuki",
        "model": "Maruti Celerio VXI",
        "price": "₹ 4.75 Lakh*",
    },
    {
        "id": 8,
        "image" : Ertiga,
        "company" : "Maruti Suzuki",
        "model": "Ertiga",
        "price": "₹ 4.10 Lakh*",
    },
    {
        "id": 9,
        "image" : Land,
        "company" : "Range Rover",
        "model": "Land Rover Evoque",
        "price": "₹ 67.90 Lakh*",
        
    },
    {
        "id": 10,
        "image" : XUV700,
        "company" : "Mahindra XUV700",
        "model": "Mahindra XUV700",
        "price": "₹ 14.03 - 26.57 Lakh*", 
    },
    {
        "id": 11,
        "image" : Nexon,
        "company" : "Tata Nexon",
        "model": "Tata Nexon",
        "price": "₹ 8.10 - 15.50 Lakh*", 
    },
    {
        "id": 12,
        "image" : Baleno ,
        "company" : "Maruti Suzuki",
        "model": "Maruti Baleno",
        "price": "₹ 6.61 - 9.88 Lakh*", 
    },
]

const latest = [
    {
        "id": 1,
        "image" : Benz ,
        "company" : "Mercedes-Benz GLA",
        "price": "₹ 50.50 - 56.90 Lakh*",
    },
    {
        "id": 2,
        "image" : Rar ,
        "company" : "Range Rover Evoque",
        "price": "₹ 77.90 Lakh*",
    },
    {
        "id": 3,
        "image" :  Lan,
        "company" : "Land Rover Range Rover",
        "price": "₹ 2.39 - 4.17 Cr*",
    },
    {
        "id": 4,
        "image" : Citroen,
        "company" : "Citroen C3 Aircross",
        "price": "₹ 9.99 - 13.85 Lakh*",
    },
    {
        "id": 5,
        "image" : Defender ,
        "company" : "Land Rover Defender",
        "price": "₹ 93.55 Lakh - 2.35 Cr*",
    },
    {
        "id": 6,
        "image" : eC3,
        "company" : "Citroen eC3",
        "price": "₹ 11.61 - 13.35 Lakh*",
    },
    {
        "id": 7,
        "image" : Porsche,
        "company" : "Porsche Macan EV",
        "price": "₹ 1.65 Cr*",
    },
    {
        "id": 8,
        "image" :RollsRoyce ,
        "company" : "Rolls-Royce Spectre",
        "price": "₹ 7.50 Cr*",
    },
    {
        "id": 9,
        "image" : GLS,
        "company" : "Mercedes-Benz GLS",
        "price": "₹ 1.32 - 3.56 Cr*",
    },
]



const Cars = () => {
    const [search, setSearchTerm] = useState('');
  return (
    <div>
        <Link to='/'></Link>
        <div className='Nav1'>
            <div className='sec1'>
                <p className='ca' >Cargarage⚒️</p>
            </div>

            <div className='sec2'>
                <input type='text' placeholder='Search' onChange={(e) => setSearchTerm(e.target.value)}  className='inp' />
            </div>

            {/* <div>
                <input id='searchInput' type='text' placeholder='Search here....'
                onChange={(e) => {setSearchTerm(e.target.value);
                }}
                  />
            </div> */}
            
            <div className='sec3'>
                <Link to='/home' style={{textDecoration:"none",color:"black"}}> <i class="fa-solid fa-user"></i>Login / Register</Link>
                
            </div>
        </div>
    
        <div className='Nav2'>

            <div className='Seco1'>
                <ul className='lis'>
                    <li>NEW CARS</li>
                    <li>BUY & SELL USED CARS</li>
                    <li>NEWS,REVIEWS & VIDEOS</li>
                    <li>CAR SERVICE</li>
                </ul>
            </div>

        </div>

        <div className='section'>

            <div className='sect1'>
                <br />  
                <p>Your Dream Car</p>
                <p>Just One Click</p>
                <p>Away!</p>
            </div>

            <div className='sect2'>
            <br />
                <p>Schedule a test drive from the wide range</p>
                <p>of our car collection</p>
            </div>

            <div className='sect3'>
                <br />  <br />
                <button className='mb'>See Used Cars</button>
            </div>
        </div>

            

        {/* <div className='section1'>
            <p className='hed'>The most searched cars</p>
            <br />
            <div className='secti'>
                <div>
                    <img src={HyundaiCreta} className='imcar' ></img>
                    <p className='namecar'>Hyundai Creta</p>
                    <p className='carprice'>₹ 11 - 20.15 Lakh*</p>
                    <button className='butin'>Check For Offers</button>
                </div>
                <div>
                    <img src={MahindraThar}  className='imcar' ></img>
                    <p className='namecar' >Mahindra Thar</p>
                    <p className='carprice'>₹ 11.25 - 17.20 Lakh*</p>
                    <button className='butin'>Check For Offers</button>
                </div>
                <div>
                    <img src={TataPunch} className='imcar'  ></img>
                    <p className='namecar' >Tata Punch</p>
                    <p className='carprice'>₹ 6 - 10.10 Lakh* </p>
                    <button className='butin'>Check For Offers</button>
                </div>
                <div>
                    <img src={MarutiBrezza} className='imcar' ></img>
                    <p className='namecar'>Maruti Brezza</p>
                    <p className='carprice'>₹ 8.34 - 14.14 Lakh*</p>
                    <button className='butin'>Check For Offers</button>
                </div>
            </div>
        </div> */}
        
<br /> 

        <div>   
        <p className='lat'>The most searched cars</p>
        <br /> <br /> 
            

            <div className='cars_container'>   
            
            {car
            .filter((val) => {
                if(search === "") {
                    return val;
                } else if (
                    val.model.toLowerCase().includes(search.toLowerCase())
                ){
                    return val;
                }
            })
            .map((val) => {
                return(
                    <div key={val.id} className='main_temp'>
                        <img src={val.image} className='imgout'></img>
                        <p className='textmodel'>{val.model}</p>
                        <p className='textprice'>{val.price}</p>
                    </div>  
                )
            })}
            </div>
        </div>
<br /> <br /> 



        <div>
            <p className='lat'>Latest Cars</p>
            <br /> <br /> 
            
            <div className='lat_temp'>
            {latest
            .filter((val) => {
                if(search === "") {
                    return val;
                } else if (
                    val.company.toLowerCase().includes(search.toLowerCase())
                ){
                    return val;
                }
            })
            .map((val) => {
                return(
                    <div key={val.id} className='main_temp1'>
                        <img src={val.image} className='imgout'></img>
                        <p className='textmodel'>{val.company}</p>
                        <p className='textprice'>{val.price}</p>
                    </div>  
                )
            })}
            </div>
            <br /> <br/>
        </div>
        
        
        {/* <table>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Model</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {car
                .filter((item) =>{
                    return search.toLowerCase() === '' ? item : item.company.toLowerCase().includes(search);
                } )
                .map((item)=>
                    <tr key={item.id}>
                        <td>{item.company}</td>
                        <td>{item.model}</td>
                        <td>{item.price}</td>
                    </tr>
                )}  
            </tbody>
        </table> */}

        

    </div>
  )
}

export default Cars ;