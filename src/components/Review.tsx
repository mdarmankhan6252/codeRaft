import { reviews } from "../assets/data";


const Review = () => {
    return (
        <section id="reviews" className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold text-black/80">
                        Customer Reviews
                    </h2>

                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        See what our coffee lovers say about their experience with
                        Rant-Coffee.
                    </p>
                </div>


                <div data-aos="fade-up" data-aos-duration="1500" className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white rounded-3xl p-8 shadow-sm hover:bg-primary/1 transition duration-300 border border-slate-200"
                        >

                            <div className="flex items-center gap-4">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-14 h-14 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="font-semibold text-black/80">
                                        {review.name}
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        {review.role}
                                    </p>
                                </div>
                            </div>


                            <div className="flex gap-1 mt-5 text-yellow-500">
                                {Array.from({ length: review.rating }).map((_, index) => (
                                    <span key={index}>
                                        ⭐
                                    </span>
                                ))}
                            </div>


                            <p className="text-gray-600 mt-5 leading-relaxed">
                                "{review.review}"
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Review;