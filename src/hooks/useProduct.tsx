import { useEffect, useState } from "react";
import type { Product } from "../components/HomePage";
import axios from "axios";
const defaultProduct:Product={
    id:0,
    title:"",
    price:0,
    description:"",
    category:"",
    image:"",
    rating:{
        rate:0,
        count:0
    }
};

export default function useProduct(id:number):Product {
    const[product,setProduct]=useState<Product>(defaultProduct);
    useEffect(()=>{
        const fetchproduct=async()=>{
            try{
                const response=await axios.get(`https://fakestoreapi.com/products/${id}`);
                if(response.data){
                    setProduct(response.data);
                }
                else{
                    console.log(response);
                }
            }
            catch(error){
                console.log(error);
            }
        }
        fetchproduct();
    },[])
    return product;
} 