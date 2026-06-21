import { Link } from "react-router";
import { useState } from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { cartItems } = useCart();

    return (
        <nav data-aos="fade-down" className="border-b border-slate-200 px-6 py-3 sticky top-0 left-0 right-0 bg-white/90 z-50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <Link
                    to="/"
                    className="text-2xl font-light text-black/80"
                >
                    Rant-Coffee
                </Link>


                <ul className="hidden md:flex items-center gap-6 font-normal text-black/70 *:hover:text-black">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>

                    <li>
                        <a href="#best-seller">
                            Best Sellers
                        </a>
                    </li>

                    <li>
                        <a href="#reviews">
                            Reviews
                        </a>
                    </li>
                </ul>


                <div className="flex items-center gap-6">
                    <Link to="/cart">
                        <div className="relative">
                            <FaShoppingCart className="text-xl text-black/70" />

                            {
                                cartItems.length > 0 && (
                                    <span className="absolute -top-3 -right-3 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                        {cartItems.length}
                                    </span>
                                )
                            }
                        </div>
                    </Link>

                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden text-black/70 text-2xl"
                    >
                        <FaBars />
                    </button>
                </div>


                <div
                    className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-xl z-50 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                        }`}
                >

                    <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">

                        <h2 className="text-xl font-semibold text-black/80">
                            Menu
                        </h2>

                        <button
                            onClick={() => setOpen(false)}
                            className="text-black/70 text-2xl"
                        >
                            <FaTimes />
                        </button>

                    </div>


                    <ul className="flex flex-col gap-6 px-6 py-8 text-black/70">

                        <li>
                            <Link
                                to="/"
                                onClick={() => setOpen(false)}
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <a
                                href="#best-seller"
                                onClick={() => setOpen(false)}
                            >
                                Best Sellers
                            </a>
                        </li>

                        <li>
                            <a
                                href="#reviews"
                                onClick={() => setOpen(false)}
                            >
                                Reviews
                            </a>
                        </li>

                    </ul>

                </div>



            </div>
        </nav>
    );
};

export default Navbar;