import Banner from "../components/Banner";
import BestSellers from "../components/BestSellers";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import SpecialOffers from "../components/SpecialOffers";

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <FeaturedProducts />
            <BestSellers />
            <SpecialOffers />
        </div>
    );
};

export default Home;