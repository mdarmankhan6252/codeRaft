import { bestSellers } from "../assets/data";
import CoffeeCard from "./CoffeeCard";

const BestSellers = () => {
    return (
        <section id="best-seller" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold text-black/80">
                        Best Sellers
                    </h2>

                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        Taste the coffees loved by our customers. These signature drinks
                        keep everyone coming back for more.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {bestSellers.map((product, index) => (
                        <CoffeeCard
                            key={product.id}
                            product={product}
                            index={index}
                            showRank
                            showBadge
                            showSold
                            buttonText="Buy Now"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSellers;