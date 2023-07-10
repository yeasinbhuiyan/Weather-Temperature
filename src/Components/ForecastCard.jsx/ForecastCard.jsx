/* eslint-disable react/prop-types */
import moment from "moment";

const ForecastCard = ({allUpcommingDay}) => {
    console.log(allUpcommingDay)
    
    const{date , day} = allUpcommingDay

    
    return (
        <div className="card w-full bg-black bg-opacity-40 shadow-xl text-gray-200">
            <figure><img title={day?.condition?.text} src={day?.condition.icon} alt="Shoes" /></figure>
            <div>
                <h2 className="text-center md:text-2xl text-small">{moment(date).format('dddd')}</h2>
                <h2 className="mt-2 md:text-2xl p-3 md:ms-3 text-lg text-white">  <span>{parseInt(day?.maxtemp_c)}</span><sup>°C</sup></h2>

        
            </div>
        </div>
    );
};

export default ForecastCard;