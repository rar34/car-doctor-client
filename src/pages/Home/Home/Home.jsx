import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div className="my-14">
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;