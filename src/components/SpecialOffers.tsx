import { specialOffers } from "../assets/data";
import CoffeeCard from "./CoffeeCard";

const SpecialOffers = () => {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold text-black/80">
                        Special Offers
                    </h2>

                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        Enjoy exclusive coffee deals and limited-time offers made
                        especially for coffee lovers.
                    </p>
                </div>


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