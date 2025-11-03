import { useParams } from "react-router-dom";
import type { ProductDto } from "./HomePage";
import FormComponent from "./FormComponent";
import axios from "axios";



export default function FormPage(){
    const updateProduct=async(productUpdateDto:ProductDto,id:number)=>{
        try{
            const res=await axios.put(`https://fakestoreapi.com/products/${id}`,productUpdateDto);

            if(res.status>=200 && res.status<300){
                console.log("Product updated successfully");
            }else{
                console.error("Failed to update product");
            }
        }
        catch(error){
            console.error("An error occurred while updating the product",error);
        }
        
    }
    const createProduct=async(productPostDto:ProductDto,id:number)=>{
        console.log("inside post")
        try{
            const res=await axios.post("https://fakestoreapi.com/products",productPostDto);
            if(res.status>=200 && res.status<300){
                console.log("Post submitted successfully");
            }else{
                console.error("Failed to submit post");
            }
        }
        catch(error){
            console.error("An error occurred while submitting the post",error);
        }
    }
    const{id}=useParams()
    if(Number(id)>=0){
        return <FormComponent id={Number(id)} button="Update" apiFn={updateProduct}></FormComponent>
    }
    else{
        return <FormComponent id={Number(id)} button="Create" apiFn={createProduct}></FormComponent>
    }

}

