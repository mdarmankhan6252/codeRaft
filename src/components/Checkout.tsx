import { useParams } from "react-router";
import { coffeeProducts } from "../assets/data";
import { useEffect } from "react";


const Checkout = () => {

    const { id } = useParams();

    const product = coffeeProducts.find(
        (item) => item.id === Number(id)
    );

    useEffect(() => {
        scrollTo(0, 0)
    }, [])


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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">


                    <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">

                        <h2 className="text-2xl font-semibold text-black/80 mb-6">
                            Billing Details
                        </h2>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <input
                                placeholder="Full Name"
                                className="px-5 py-3 rounded-xl border border-gray-200 outline-none"
                            />

                            <input
                                placeholder="Email Address"
                                className="px-5 py-3 rounded-xl border border-gray-200 outline-none"
                            />

                            <input
                                placeholder="Phone Number"
                                className="px-5 py-3 rounded-xl border border-gray-200 outline-none"
                            />

                            <input
                                placeholder="Address"
                                className="px-5 py-3 rounded-xl border border-gray-200 outline-none"
                            />

                        </div>


                        <h2 className="text-2xl font-semibold text-black/80 mt-10 mb-6">
                            Payment Method
                        </h2>


                        <div className="space-y-4">

                            <label className="flex gap-3 border p-4 rounded-xl">
                                <input type="radio" name="payment" />
                                Cash On Delivery
                            </label>


                            <label className="flex gap-3 border p-4 rounded-xl">
                                <input type="radio" name="payment" />
                                Card Payment
                            </label>

                        </div>

                    </div>



                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 h-fit">

                        <h2 className="text-2xl font-semibold text-black/80 mb-6">
                            Order Summary
                        </h2>


                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-52 object-cover rounded-2xl"
                        />


                        <h3 className="text-xl font-semibold text-black/80 mt-5">
                            {product.name}
                        </h3>


                        <p className="text-gray-500 mt-2">
                            {product.description}
                        </p>


                        <div className="flex justify-between mt-5">
                            <span>
                                Price
                            </span>

                            <span className="text-primary font-semibold">
                                {product.price}
                            </span>
                        </div>


                        <div className="flex justify-between mt-3">
                            <span>
                                Delivery
                            </span>

                            <span>
                                $1.00
                            </span>
                        </div>


                        <div className="border-t mt-5 pt-5 flex justify-between font-semibold text-black/80">

                            <span>
                                Total
                            </span>

                            <span className="text-primary">
                                {Number(product.price.replace("$", "")) + 1}$
                            </span>

                        </div>


                        <button className="w-full mt-8 py-3 rounded-full bg-primary text-white">
                            Place Order
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Checkout;