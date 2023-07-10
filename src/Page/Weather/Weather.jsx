import { useState } from 'react';
import './Weather.css'
import { useEffect } from 'react';
const Weather = () => {
    const [weather , setWeather] = useState()

    useEffect(()=>{
        

    },[])
    return (
       <div>
       <div className="grid lg:grid-cols-1 sm:grid-cols-1">
            <div className="background-img p-0">



                <div className="text-center">
                    <input  type="text" placeholder="Type here" className="ok input input-bordered input-md w-[50%]  max-w-xs" />
                    <button   className="btn btn-primary">Search</button>
                    
                </div>
            



                <div className="text-center">
                    <img className="mx-auto" src="https://openweathermap.org/img/wn/02d@2x.png" alt="" />
                    <h1  className="text-5xl text-white font-semibold">Dhaka</h1>
                    <h2  className="mt-2 text-3xl text-white"> <span>28</span><sup>°C</sup></h2>
                    <h1  className="text-2xl text-white">Haze</h1>
                </div>



                
            <div>
                
            </div>
            
            
            
            
            
            
            
            
            
            
            </div>
        </div>
        
       </div>
    );
};

export default Weather;