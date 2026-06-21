import { featuredProducts } from "../assets/data";
import CoffeeCard from "./CoffeeCard";

const FeaturedProducts = () => {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold text-black/80">
                        Featured Products
                    </h2>

                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        Explore our most loved coffee selections, carefully crafted with
                        premium beans and unforgettable flavors.
                    </p>
                </div>

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