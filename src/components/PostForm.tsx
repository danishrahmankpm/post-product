import axios from "axios";
import { useState } from "react";


    export type ProductDto={
        id:number;
        title:string;
        price:number;
        image:string;
        description:string;
        category:string;
    }
    const initial:ProductDto={
        id:0,
        title:"",
        price:0,
        image:"",
        description:"",
        category:""       
    }
    
    
export default function PostForm(){
    const[productPostDto,setproductPostDto]=useState<ProductDto>(initial)
    
    const submitForm=async()=>{
        console.log("inside post")
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
    }
    function update(e:React.ChangeEvent<HTMLInputElement>){
        const key: string=e.target.id 
        const value=e.target.value
        setproductPostDto(prev => ({
                ...prev,
                [key]: value}));
    }
        
    
    console.log("inside postfrom")
    return<>
            <h2>Create New Product</h2>
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" name="id" value={productPostDto.id}onChange={(e)=>update(e)} required/>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={productPostDto.title} onChange={(e)=>update(e)} required/>
            <label htmlFor="price">Price:</label>
            <input type="text" id="price" name="price" value={productPostDto.price} onChange={(e)=>update(e)} required/>
            <label htmlFor="image">Image URL:</label>
            <input type="text" id="image" name="image" value={productPostDto.image}onChange={(e)=>update(e)} required/>
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" value={productPostDto.description}onChange={(e)=>update(e)} required></input>
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" value={productPostDto.category} onChange={(e)=>update(e)} required/>
            <button
                
                onClick={() => {
                    submitForm();
                    console.log(productPostDto);
                }}
                >
                Submit
            </button>

        </>
    


    
}
