import { useState } from 'react';
import './Weather.css'
import { useEffect } from 'react';
import moment from 'moment';
import ForecastCard from '../../Components/ForecastCard.jsx/ForecastCard';

const Weather = () => {

    const [weather, setWeather] = useState({})
    const [searchValue, SetSearchValue] = useState("london")
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=56a94bcd21be43668e0110744231007 &q=${searchValue}&days=7&aqi=no&alerts=no`)
            .then(res => res.json())
            .then(data => setWeather(data))

    }, [searchValue])





    const { location, current, forecast } = weather
    console.log(weather)




    const handleSubmit = (event) => {
        event.preventDefault()
        const searchFiled = event.target.searchFiled.value
        SetSearchValue(searchFiled)


    }



    const handleSort = () => {
        if (sortOrder === 'asc') {

            forecast?.forecastday.sort((a, b) => a.day.maxtemp_c - b.day.maxtemp_c);
            setSortOrder('desc');

        } else {

            forecast?.forecastday.sort((a, b) => b.day.maxtemp_c - a.day.maxtemp_c);

            setSortOrder('asc');
        }
    };


    return (
        <div>
            <div className="grid lg:grid-cols-1 sm:grid-cols-1">
                <div className="background-img p-0">



                    <form onSubmit={handleSubmit} className="text-center">
                        <input type="text" name="searchFiled" placeholder="Type here" className="ok input input-bordered input-md w-[50%]  max-w-xs" />
                        <button type='submit' className="btn btn-primary">Search</button>

                    </form>




                    {
                        weather?.location && <div className='mx-auto text-center pt-5'>

                            <img title={current?.condition?.text} className="mx-auto" src={current?.condition?.icon} alt="" />
                            <h1 className="text-5xl text-white font-semibold">{location?.name}</h1>
                            <h2 className="mt-2 text-3xl text-white"> <span>{current?.temp_c}</span><sup>°C</sup></h2>
                            <h1 className="text-2xl text-white">{moment(current?.last_updated).format('dddd')} </h1>
                            <p className="mt-2 text-lg text-white"> <span className='font-semibold'>  Wind :</span>  <span>{parseInt(current?.wind_kph)}</span><span>Km/h</span></p>
                            <p className=" text-lg text-white"> <span className='font-semibold'>humidity :</span>  <span>{current?.humidity}</span></p>

                        </div>
                    }


                    <div className='text-center py-5'>
                        <button onClick={handleSort} className='btn btn-xs'> {sortOrder === 'asc' ? 'Lowest temperature in Week' : 'highest temperature in Week'}</button>
                    </div>



                    <div className='grid grid-cols-4 pb-16 md:grid-cols-3 lg:grid-cols-7 gap-6 px-10 mx-auto'>
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