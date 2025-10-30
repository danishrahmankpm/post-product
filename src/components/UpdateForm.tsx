import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import type { ProductDto } from "./PostForm";
import { useEffect, useState } from "react";
import axios from "axios";
 

 
export default function UpdateForm(){
    const{ id}=useParams();

    const product:ProductDto=useProduct(Number(id));


    
    useEffect(()=>{
        setProductUpdateDto(product)
    },[product])
    const[productUpdateDto,setProductUpdateDto]=useState<ProductDto>(product);
    
    
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
        
    }
    console.log(productUpdateDto)
    function update(e: React.ChangeEvent<HTMLInputElement>): void {
        const key = e.target.id as keyof ProductDto;
        const value = e.target.value;

        setProductUpdateDto(prev => ({
            ...prev,
            [key]: value
        }));
    }


    return(
        < >
            <h2>Update Product</h2>
            <label htmlFor="id">ID:</label>
            <input type="number" id="id" name="id" value={productUpdateDto.id} onChange={(e)=>{update(e)}}required/>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={productUpdateDto.title} onChange={(e)=>{update(e)}}  required/>
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" step="0.01" value={productUpdateDto.price} onChange={(e)=>{update(e)}}  required/>
            <label htmlFor="image">Image URL:</label>
            <input type="text" id="image" name="image" value={productUpdateDto.image} onChange={(e)=>{update(e)}}  required/>
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" value={productUpdateDto.description} onChange={(e)=>{update(e)}} required></input>
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" value={productUpdateDto.category} onChange={(e)=>{update(e)}} required/>
            <button  value="Update Product" onClick={()=>{updateProduct()}}> submit </button> 

        </>
    )
} 