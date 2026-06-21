import { Link } from 'react-router';
import type { ICoffeeProduct } from '../interfaces/interface';

interface CoffeeCardProps {
    product: ICoffeeProduct;
    index?: number;
    showRank?: boolean;
    showBadge?: boolean;
    showDiscount?: boolean;
    showSold?: boolean;
    buttonText?: string;
}

const CoffeeCard = ({
    product,
    index,
    showRank = false,
    showBadge = false,
    showDiscount = false,
    showSold = false,
    buttonText = "Order Now",
}: CoffeeCardProps) => {
    return (
        <div data-aos="fade-up" data-aos-duration="1500" className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group">

            {showRank && (
                <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                        #{index! + 1}
                    </span>
                </div>
            )}

            {showBadge && product.badge && (
                <div className="absolute top-4 right-4 z-10">
                    <span className="bg-white text-primary px-4 py-1 rounded-full text-sm font-medium shadow">
                        {product.badge}
                    </span>
                </div>
            )}

            {showDiscount && product.discount && (
                <div className="absolute top-4 right-4 z-10">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                        {product.discount}
                    </span>
                </div>
            )}

            <div className="overflow-hidden h-56">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
            </div>


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

                    <div>
                        <span className="text-yellow-500">
                            ⭐ {product.rating}
                        </span>

                        {showSold && product.sold && (
                            <p className="text-gray-500 text-sm">
                                ☕ {product.sold}
                            </p>
                        )}
                    </div>


                    <Link to={`/product/${product.id}`}  className="px-5 py-2 rounded-full bg-primary text-white hover:opacity-90 transition">
                        {buttonText}
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default CoffeeCard;