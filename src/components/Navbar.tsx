import { Link } from "react-router";


const Navbar = () => {
    return (
        <nav className="border-b border-slate-200 px-6 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to={'/'} className="text-2xl font-light text-black/80 ">Rant-Coffee</Link>

                <ul>
                    <li className="flex items-center gap-6 font-normal text-black/70 *:hover:text-black">
                        <Link to={'/'}>Home</Link>
                        <Link to={'#best-seller'}>Best Sellers</Link>
                        <Link to={'#reviews'}>Reviews</Link>
                    </li>

                </ul>
            </div>



        </nav>
    );
};

export default Navbar;