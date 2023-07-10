/* eslint-disable react/prop-types */
import moment from "moment";

const ForecastCard = ({allUpcommingDay}) => {
    console.log(allUpcommingDay)
    
    const{date , day} = allUpcommingDay
    
    return (
        <div className="card w-full bg-black bg-opacity-40 shadow-xl text-gray-200">
            <figure><img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{moment(date).format('dddd')}</h2>
                {/* <p>{parseInt(day?.maxtemp_c)}</p> */}

                <h2 className="mt-2 text-3xl text-white"> <span>{parseInt(day?.maxtemp_c)}</span><sup>°C</sup></h2>

               
            </div>
        </div>
    );
};

export default ForecastCard;