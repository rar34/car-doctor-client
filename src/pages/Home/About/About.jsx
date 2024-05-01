import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div className=" my-10 bg-base-100">
            <div className="hero-content gap-14 flex-col p-6 lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg " />
                    <img src={parts} className="w-1/2 absolute border-8 border-white right-5 top-1/2 rounded-lg " />
                </div>
                <div className='lg:w-1/2'>
                    <h3 className='text-xl font-bold text-[#FF3811]'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] text-lg font-semibold text-white mt-7">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;