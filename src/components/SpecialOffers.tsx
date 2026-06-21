import { specialOffers } from "../assets/data";

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

                    {specialOffers.map((coffee) => (
                        <div
                            key={coffee.id}
                            className="relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                        >

                            <div className="absolute top-4 right-4 z-10">
                                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                                    {coffee.discount}
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

                                <button className="mt-5 w-full py-2 rounded-full bg-primary text-white hover:opacity-90 transition">
                                    Grab Offer
                                </button>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default SpecialOffers;