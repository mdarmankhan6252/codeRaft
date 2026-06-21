import { useParams } from "react-router";
import { coffeeProducts } from "../assets/data";
import CoffeeCard from "../components/CoffeeCard";

const ProductDetails = () => {
    const { id } = useParams();

    const product = coffeeProducts.find(
        (item) => item.id === Number(id)
    );

    const relevantProducts = coffeeProducts
        .filter((item) => item.id !== Number(id))
        .slice(0, 3);


    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-2xl font-semibold text-black/70">
                    Product Not Found
                </h2>
            </div>
        );
    }


    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="rounded-3xl overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-125 object-cover"
                        />
                    </div>


                    <div>

                        <h1 className="text-4xl md:text-5xl font-semibold text-black/80">
                            {product.name}
                        </h1>


                        <div className="flex items-center gap-5 mt-5">
                            <span className="text-primary text-2xl font-semibold">
                                {product.price}
                            </span>

                            <span className="text-yellow-500">
                                ⭐ {product.rating}
                            </span>
                        </div>


                        <p className="text-gray-500 mt-6 leading-relaxed">
                            {product.description}
                        </p>


                        {product.badge && (
                            <span className="inline-block mt-6 bg-primary/10 text-primary px-5 py-2 rounded-full">
                                {product.badge}
                            </span>
                        )}


                        {product.sold && (
                            <p className="mt-5 text-gray-500">
                                ☕ {product.sold}
                            </p>
                        )}


                        <div className="flex gap-4 mt-8">

                            <button className="px-8 py-3 rounded-full bg-primary text-white hover:opacity-90 transition">
                                Order Now
                            </button>

                            <button className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition">
                                Add To Cart
                            </button>

                        </div>

                    </div>

                </div>


                <div className="mt-24">

                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-semibold text-black/80">
                            Relevant Products
                        </h2>

                        <p className="mt-3 text-gray-500">
                            Explore more coffee options you might love.
                        </p>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {relevantProducts.map((product) => (
                            <CoffeeCard
                                key={product.id}
                                product={product}
                            />
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ProductDetails;