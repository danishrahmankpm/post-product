import { useParams } from "react-router-dom";
import updateHelper from "../helpers/updateHelper";
import useProduct from "../hooks/useProduct";
import type { ProductDto } from "./PostForm";

  
export default function UpdateForm(){
    const{id}=useParams();
    const productUpdateDto:ProductDto=useProduct(Number(id));

    function idSetter(value:number):void{
        productUpdateDto.id=value;
    }
    function titleSetter(value:string):void{
        productUpdateDto.title=value;
    }
    function priceSetter(value:number):void{
        productUpdateDto.price=value;
    }
    function imageSetter(value:string):void{
        productUpdateDto.image=value;
    }
    function descriptionSetter(value:string):void{
        productUpdateDto.description=value;
    }
    function categorySetter(value:string):void{
        productUpdateDto.category=value;
    } 
    return(
        <form className="update-form">
            <h2>Update Product</h2>
            <label htmlFor="id">ID:</label>
            <input type="number" id="id" name="id" value={productUpdateDto.id} onChange={(e)=>idSetter(Number(e.target.value))} required/>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={productUpdateDto.title} onChange={(e)=>titleSetter(e.target.value)} required/>
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" step="0.01" value={productUpdateDto.price} onChange={(e)=>priceSetter(Number(e.target.value))} required/>
            <label htmlFor="image">Image URL:</label>
            <input type="text" id="image" name="image" value={productUpdateDto.image} onChange={(e)=>imageSetter(e.target.value)} required/>
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" value={productUpdateDto.description} onChange={(e)=>descriptionSetter(e.target.value)} required></textarea>
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" value={productUpdateDto.category} onChange={(e)=>categorySetter(e.target.value)} required/>
            <input type="submit" value="Update Product" onClick={()=>updateHelper(productUpdateDto)}/>

        </form>
    )
} 