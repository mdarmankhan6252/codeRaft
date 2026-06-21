const Newsletter = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">

                <div className="bg-primary rounded-3xl px-6 py-12 md:px-16 md:py-16 text-center">

                    <h2 className="text-4xl md:text-5xl font-semibold text-white">
                        Join Our Coffee Community
                    </h2>

                    <p className="mt-4 text-white/80 max-w-2xl mx-auto text-lg">
                        Subscribe to get the latest coffee updates, exclusive offers,
                        and special discounts delivered straight to your inbox.
                    </p>


                    <div className="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row gap-4">

                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-6 py-3 rounded-full outline-none text-black bg-white"
                        />

                        <button className="px-8 py-3 rounded-full bg-white text-primary font-medium hover:scale-105 transition">
                            Subscribe
                        </button>

                    </div>


                    <p className="mt-5 text-sm text-white/70">
                        No spam. Only fresh coffee news and exclusive deals.
                    </p>

                </div>

            </div>
        </section>
    );
};

export default Newsletter;