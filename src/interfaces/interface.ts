export interface ICoffeeProduct {
    id: number;
    name: string;
    price: string;
    rating: number;
    image: string;
    description: string;
    sold?: string;
    badge?: string;
    discount?: string;
}

export interface IReview {

    id: number,
    name: string,
    role: string,
    image: string,
    rating: number,
    review: string,

}