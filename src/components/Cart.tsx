import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";


const Cart = () => {

    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
    } = useCart();



    const totalPrice = cartItems.reduce(
        (total, item) =>
            total + Number(item.price.replace("$", "")) * item.quantity,
        0
    );


    if (cartItems.length === 0) {
        return (
            <section className="min-h-[70vh] flex items-center justify-center px-4">
                <div className="text-center">

                    <h2 className="text-4xl font-semibold text-black/80">
                        Your Cart is Empty
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Add some delicious coffee to continue.
                    </p>

                </div>
            </section>
        );
    }



    return (
        <section className="py-20 px-4">

            <div className="max-w-7xl mx-auto">

                <h1 className="text-4xl font-semibold text-black/80 mb-10">
                    Shopping Cart
                </h1>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">


                    <div className="lg:col-span-2 space-y-6">

                        {
                            cartItems.map(item => (

                                <div
                                    key={item.id}
                                    className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row gap-6 items-center"
                                >

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-32 h-32 rounded-2xl object-cover"
                                    />


                                    <div className="flex-1">

                                        <h3 className="text-xl font-semibold text-black/80">
                                            {item.name}
                                        </h3>


                                        <p className="text-gray-500 mt-2">
                                            {item.description}
                                        </p>


                                        <p className="text-primary font-semibold mt-3">
                                            {item.price}
                                        </p>


                                        <div className="flex items-center gap-4 mt-5">

                                            <button
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="w-9 h-9 rounded-full border flex items-center justify-center"
                                            >
                                                <FaMinus size={12}/>
                                            </button>


                                            <span className="font-semibold">
                                                {item.quantity}
                                            </span>


                                            <button
                                                onClick={() => increaseQuantity(item.id)}
                                                className="w-9 h-9 rounded-full border flex items-center justify-center"
                                            >
                                                <FaPlus size={12}/>
                                            </button>


                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="ml-4 text-red-500"
                                            >
                                                <FaTrash/>
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))
                        }

                    </div>



                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 h-fit">

                        <h2 className="text-2xl font-semibold text-black/80">
                            Order Summary
                        </h2>


                        <div className="flex justify-between mt-6 text-gray-500">
                            <span>
                                Items
                            </span>

                            <span>
                                {cartItems.length}
                            </span>
                        </div>


                        <div className="flex justify-between mt-4 text-black/80 font-semibold text-xl">

                            <span>
                                Total
                            </span>

                            <span className="text-primary">
                                ${totalPrice.toFixed(2)}
                            </span>

                        </div>


                        <button className="w-full mt-8 py-3 rounded-full bg-primary text-white">
                            Proceed To Checkout
                        </button>

                    </div>


                </div>

            </div>

        </section>
    );
};


export default Cart;