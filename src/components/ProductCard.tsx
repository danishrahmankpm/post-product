import { Link } from "react-router-dom";

type ProductProps={
    id:number;
    title:string;
    price:number;
    image:string
}
export default function ProductCard(productProps:ProductProps){
    const id=productProps.id;
    const title=productProps.title;
    const price=productProps.price;
    const image=productProps.image;
    return(
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
            <Link to={`/product/update/${id}`} className="block p-4">
                <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
                <p className="text-blue-600 font-medium mt-1">${price.toFixed(2)}</p>
            </Link>
        </div>

    )
}