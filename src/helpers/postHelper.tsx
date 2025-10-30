import axios from "axios";
import type { ProductDto } from "../components/PostForm";
export default function postHelper(productPostDto:ProductDto):void{
    const submitForm=async()=>{
        try{
            const res=await axios.post("https://fakestoreapi.com/products",productPostDto);
            if(res.status===200){
                console.log("Post submitted successfully");
            }else{
                console.error("Failed to submit post");
            }
        }
        catch(error){
            console.error("An error occurred while submitting the post",error);
        }
        submitForm();
    }
}