
const ForecastCard = ({allUpcommingDays}) => {
    
    return (
        <div className="card w-full bg-black bg-opacity-40 shadow-xl text-gray-200">
            <figure><img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default ForecastCard;