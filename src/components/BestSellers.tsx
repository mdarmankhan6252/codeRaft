import { bestSellers } from "../assets/data";

const BestSellers = () => {
    return (
        <section className="py-20 px-4">
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
                    {bestSellers.map((coffee, index) => (
                        <div
                            key={coffee.id}
                            className="relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
                        >
                            <div className="absolute top-4 left-4 z-10">
                                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                                    #{index + 1}
                                </span>
                            </div>

                            <div className="absolute top-4 right-4 z-10">
                                <span className="bg-white text-primary px-4 py-1 rounded-full text-sm font-medium shadow">
                                    {coffee.badge}
                                </span>
                            </div>

                            <img
                                src={coffee.image}
                                alt={coffee.name}
                                className="w-full h-64 object-cover"
                            />

                            <div className="p-6">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold text-black/80">
                                        {coffee.name}
                                    </h3>

                                    <span className="text-primary font-semibold">
                                        {coffee.price}
                                    </span>
                                </div>

                                <p className="text-gray-500 text-sm mt-3">
                                    {coffee.description}
                                </p>

                                <div className="flex justify-between items-center mt-5">
                                    <span className="text-gray-500 text-sm">
                                        ☕ {coffee.sold}
                                    </span>

                                    <button className="px-5 py-2 rounded-full bg-primary text-white hover:scale-105 transition">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSellers;