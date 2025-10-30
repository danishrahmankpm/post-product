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
        <div className="product-card">
            <Link to={`/product/update/${id}`}>
            <img src={image} alt={title} className="product-image"/>
            <h2 className="product-title">{title}</h2>
            <p className="product-price">${price.toFixed(2)}</p>
            </Link>
        </div>
    )
}