import { useState } from 'react';
import './Weather.css'
import { useEffect } from 'react';
import ForecastCard from '../../Components/ForecastCard/ForecastCard';
import moment from 'moment';

const Weather = () => {

    const [weather, setWeather] = useState({})
    const [searchValue, SetSearchValue] = useState("london")

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=56a94bcd21be43668e0110744231007 &q=${searchValue}&days=7&aqi=no&alerts=no`)
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
                        <h1 className="text-2xl text-white">{moment().format('dddd')} </h1>
                    </div>




                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-6 px-10 mx-auto'>
                            {
                                forecast?.forecastday.map(allUpcommingDay => <ForecastCard key={allUpcommingDay.date} allUpcommingDay={allUpcommingDay}></ForecastCard>
                                )
                            }
                        </div>











                </div>
            </div>

        </div>
    );
};

export default Weather;