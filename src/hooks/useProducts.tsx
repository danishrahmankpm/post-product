import { useEffect, useState } from "react";
import axios from "axios";
import type { Product } from "../components/HomePage";

export default function useProducts():Product[] | null{
    const[products,setProducts]=useState<Product[] | null>(null);
    useEffect(()=>{
        const fetchProducts=async()=>{
            try{
                const response=await axios.get("https://fakestoreapi.com/products");
                if(response.data){
                    setProducts(response.data);
                }
                else{
                    console.log(response);
                }
            }
            catch(error){
                console.log(error);
            }
        }
        fetchProducts();
    },[])
    return products;
}