const WhyChooseUs = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-primary rounded-3xl overflow-hidden p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10">

                    <div className="max-w-2xl text-white">
                        <h2 className="text-4xl md:text-5xl font-semibold">
                            Why Choose Rant-Coffee?
                        </h2>

                        <p className="mt-5 text-white/80 text-lg leading-relaxed">
                            We bring you the perfect coffee experience with premium
                            ingredients, expert craftsmanship, and freshly brewed flavors.
                            Every cup is made with passion to make your everyday moments
                            more special.
                        </p>

                        <button className="mt-8 px-8 py-3 rounded-full bg-white text-primary font-medium hover:scale-105 transition">
                            Explore More
                        </button>
                    </div>


                    <div className="grid grid-cols-2 gap-5 w-full lg:w-auto">

                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white">
                            <h3 className="text-3xl font-bold">
                                10+
                            </h3>
                            <p className="mt-2 text-white/80">
                                Coffee Varieties
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white">
                            <h3 className="text-3xl font-bold">
                                5K+
                            </h3>
                            <p className="mt-2 text-white/80">
                                Happy Customers
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white">
                            <h3 className="text-3xl font-bold">
                                24/7
                            </h3>
                            <p className="mt-2 text-white/80">
                                Customer Support
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white">
                            <h3 className="text-3xl font-bold">
                                100%
                            </h3>
                            <p className="mt-2 text-white/80">
                                Quality Coffee
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;