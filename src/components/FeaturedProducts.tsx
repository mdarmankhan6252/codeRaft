import { featuredProducts } from "../assets/data";
import CoffeeCard from "./CoffeeCard";
import CustomTitle from "./CustomTitle";

const FeaturedProducts = () => {
    return (
        <section id="featured-coffee" className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">

                <CustomTitle title="Featured Products" subtitle="Explore our most loved coffee selections, carefully crafted with premium beans and unforgettable flavors." />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product) => (
                        <CoffeeCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturedProducts;