import axios from "axios";
import type { ProductDto } from "../components/PostForm";

export default function updateHelper(productUpdateDto:ProductDto):void{
    const id=productUpdateDto.id;
    const updateProduct=async()=>{
        try{
            const res=await axios.put(`https://fakestoreapi.com/products/${id}`,productUpdateDto);
            if(res.status===200){
                console.log("Product updated successfully");
            }else{
                console.error("Failed to update product");
            }
        }
        catch(error){
            console.error("An error occurred while updating the product",error);
        }
        updateProduct();
    }

    
}