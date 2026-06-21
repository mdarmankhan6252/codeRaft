import { bestSellers } from "../assets/data";
import CoffeeCard from "./CoffeeCard";
import CustomTitle from "./CustomTitle";

const BestSellers = () => {
    return (
        <section id="best-seller" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">

                <CustomTitle title="Best Sellers" subtitle="Taste the coffees loved by our customers. These signature drinks keep everyone coming back for more." />

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