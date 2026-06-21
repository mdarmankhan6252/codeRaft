import Banner from "../components/Banner";
import BestSellers from "../components/BestSellers";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import Review from "../components/Review";
import SpecialOffers from "../components/SpecialOffers";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <FeaturedProducts />
            <BestSellers />
            <SpecialOffers />
            <WhyChooseUs />
            <Review />
            <Newsletter />
        </div>
    );
};

export default Home;