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

export default function HomePage(){
    const productArray=useProducts();
    console.log(productArray);
    if(!productArray){
        return <div>Loading...</div>
    }
    return(
        <div className="home-page">
            <h1>Product List</h1>
            <div className="product-list">
                {productArray.map((product,index)=>(
                    <ProductCard key={index} id={product.id} title={product.title} price={product.price} image={product.image}/>
                ))}
            </div>
            <button><Link to={"/product/post"}>Create New Product</Link></button>
        </div>
    )
}