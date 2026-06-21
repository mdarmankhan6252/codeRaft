const Footer = () => {
    return (
        <footer className="bg-white py-8 px-4  border-gray-100">
            <div className="max-w-7xl mx-auto text-center">

                <h2 className="text-2xl font-semibold text-black/80">
                    Rant-Coffee
                </h2>

                <p className="text-gray-500 mt-2">
                    Your daily coffee ritual, crafted with passion.
                </p>

                <div className="border-t border-gray-200 mt-6 pt-6">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Rant-Coffee. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;