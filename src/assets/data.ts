export const coffeeProducts = [
    {
        id: 1,
        name: "Classic Espresso",
        price: "$4.50",
        rating: 4.8,
        sold: "1500+ Sold",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a",
        description: "Strong and bold espresso made from premium coffee beans.",
    },
    {
        id: 2,
        name: "Caramel Latte",
        price: "$5.50",
        rating: 4.9,
        sold: "1300+ Sold",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f",
        description: "Smooth latte blended with sweet caramel flavor.",
    },
    {
        id: 3,
        name: "Cappuccino Delight",
        price: "$5.00",
        rating: 4.7,
        sold: "1100+ Sold",
        badge: "Trending",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213",
        description: "Creamy cappuccino topped with rich milk foam.",
    },
    {
        id: 4,
        name: "Mocha Chocolate",
        price: "$6.00",
        rating: 4.9,
        sold: "900+ Sold",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d",
        description: "A perfect combination of coffee and chocolate.",
    },
    {
        id: 5,
        name: "Cold Brew",
        price: "$4.75",
        rating: 4.6,
        sold: "850+ Sold",
        badge: "Fresh",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
        description: "Refreshing cold brewed coffee with a smooth finish.",
    },
    {
        id: 6,
        name: "Vanilla Coffee",
        price: "$5.25",
        rating: 4.8,
        sold: "700+ Sold",
        badge: "Favorite",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
        description: "Aromatic coffee infused with vanilla sweetness.",
    },
    {
        id: 7,
        name: "Hazelnut Latte",
        price: "$6.50",
        rating: 4.9,
        sold: "600+ Sold",
        badge: "Limited",
        discount: "20% OFF",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
        description: "A creamy latte with latte with a rich hazelnut aroma.",
    },
    {
        id: 8,
        name: "Iced Caramel Coffee",
        price: "$5.75",
        rating: 4.8,
        sold: "550+ Sold",
        badge: "Hot Deal",
        discount: "15% OFF",
        image: "https://images.unsplash.com/photo-1461988091159-192b6df7054f",
        description: "Refreshing iced coffee topped with caramel sweetness.",
    },
    {
        id: 9,
        name: "Chocolate Frappe",
        price: "$7.00",
        rating: 5.0,
        sold: "500+ Sold",
        badge: "Special",
        discount: "25% OFF",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
        description: "A chilled chocolate coffee blended with creamy goodness.",
    },
];

export const featuredProducts = coffeeProducts.slice(0, 6);

export const bestSellers = coffeeProducts.slice(0, 3);

export const specialOffers = coffeeProducts.slice(6, 9);

//categories data
export const coffeeCategories = [
  {
    id: 1,
    name: "Espresso",
    description: "A rich and concentrated coffee served in small shots.",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Espresso topped with steamed milk and milk foam.",
  },
  {
    id: 3,
    name: "Latte",
    description: "Smooth espresso blended with plenty of steamed milk.",
  },
  {
    id: 4,
    name: "Americano",
    description: "Espresso diluted with hot water for a milder flavor.",
  },
  {
    id: 5,
    name: "Mocha",
    description: "A delicious mix of espresso, chocolate, and milk.",
  },
  {
    id: 6,
    name: "Macchiato",
    description: "Espresso marked with a small amount of steamed milk.",
  },
  {
    id: 7,
    name: "Flat White",
    description: "Velvety espresso coffee with microfoam milk.",
  },
  {
    id: 8,
    name: "Cold Brew",
    description: "Coffee slowly brewed in cold water for a smooth taste.",
  },
  {
    id: 9,
    name: "Affogato",
    description: "A scoop of ice cream topped with hot espresso.",
  },
  {
    id: 10,
    name: "Irish Coffee",
    description: "Coffee combined with cream for a rich experience.",
  },
];