import { specialOffers } from "../assets/data";
import CoffeeCard from "./CoffeeCard";
import CustomTitle from "./CustomTitle";

const SpecialOffers = () => {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">

                <CustomTitle title="Special Offers" subtitle="Enjoy exclusive coffee deals and limited-time offers made especially for coffee lovers." />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {specialOffers.map((product) => (
                        <CoffeeCard
                            key={product.id}
                            product={product}
                            showDiscount
                            buttonText="Grab Offer"
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SpecialOffers;