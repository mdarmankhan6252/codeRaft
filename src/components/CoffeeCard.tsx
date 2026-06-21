import type { ICoffeeProduct } from '../interfaces/interface';

const CoffeeCard = ({product}: {product: ICoffeeProduct}) => {
    return (
        <div
            key={product.id}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
        >

            {/* Image */}
            <div className="overflow-hidden h-56">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
            </div>


            {/* Content */}
            <div className="p-6">

                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-black/80">
                        {product.name}
                    </h3>

                    <span className="text-primary font-semibold">
                        {product.price}
                    </span>
                </div>


                <p className="text-gray-500 text-sm mt-3">
                    {product.description}
                </p>


                <div className="flex justify-between items-center mt-5">

                    <span className="text-yellow-500">
                        ⭐ {product.rating}
                    </span>

                    <button className="px-5 py-2 rounded-full bg-primary text-white hover:opacity-90 transition">
                        Order Now
                    </button>

                </div>

            </div>

        </div>
    );
};

export default CoffeeCard;