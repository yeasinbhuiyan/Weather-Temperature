import { useState } from 'react';
import './Weather.css'
import { useEffect } from 'react';
const Weather = () => {
    const [weather, setWeather] = useState({})
    const [searchValue, SetSearchValue] = useState("london")

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=56a94bcd21be43668e0110744231007 &q=${searchValue}&days=3&aqi=no&alerts=no`)
            .then(res => res.json())
            .then(data => setWeather(data))

    }, [searchValue])





    const { location, current, forecast } = weather
    console.log(weather)
    // console.log(location , weather?.location?.name)





    const handleSubmit = (event) => {
        event.preventDefault()
        const searchFiled = event.target.searchFiled.value
        SetSearchValue(searchFiled)


    }




    return (
        <div>
            <div className="grid lg:grid-cols-1 sm:grid-cols-1">
                <div className="background-img p-0">



                    <form onSubmit={handleSubmit} className="text-center">
                        <input type="text" name="searchFiled" placeholder="Type here" className="ok input input-bordered input-md w-[50%]  max-w-xs" />
                        <button type='submit' className="btn btn-primary">Search</button>

                    </form>




                    <div className="text-center">
                        <img className="mx-auto" src="https://openweathermap.org/img/wn/02d@2x.png" alt="" />
                        <h1 className="text-5xl text-white font-semibold">{location?.name}</h1>
                        <h2 className="mt-2 text-3xl text-white"> <span>{current?.temp_c}</span><sup>°C</sup></h2>
                        {/* <h1 className="text-2xl text-white">Haze</h1> */}
                    </div>



                    <div>

                    </div>










                </div>
            </div>

        </div>
    );
};

export default Weather;