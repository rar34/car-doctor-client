import PropTypes from 'prop-types'
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {

    const { title, img, price } = service;

    return (
        <div className="card bg-base-100 border">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body space-y-5">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <div className='text-[#FF3811] flex justify-between'>
                    <p className='text-xl font-semibold'>Price: {price}</p>
                    <button> <FaArrowRight></FaArrowRight> </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.object
}