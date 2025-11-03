import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";


export type Rating={
    rate:number;
    count:number;
}
export type Product={
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:Rating;
}
export type ProductDto={
        id:number;
        title:string;
        price:number;
        image:string;
        description:string;
        category:string;
    }

export default function HomePage(){
    
    const productArray=useProducts();
    const id=-1
    
    if(!productArray){
        return <div>Loading...</div>
    }
    return(
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-8">Product List</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
                {productArray.map((product, index) => (
                <ProductCard
                    key={index}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                />
                ))}
            </div>

            <button className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300">
                <Link to={`/product/post/`} className="text-white no-underline text-3xl">
                    +
                </Link>
            </button>


        </div>

    )
}