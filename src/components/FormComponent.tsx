
import type { ProductDto } from "./HomePage"
import useProduct from "../hooks/useProduct"
import { useEffect, useState } from "react"

type FormProps={
    id:number
    button:string
    apiFn:(productDto:ProductDto,id:number)=>(void)
}
export default function FormComponent({id,button,apiFn}:FormProps){
    const initial:ProductDto={
        id:0,
        title:"",
        price:0,
        image:"",
        description:"",
        category:""       
    }
    const[productDto,setProductDto]=useState(initial)

    function update(e: React.ChangeEvent<HTMLInputElement>): void {
        const key = e.target.id as keyof ProductDto;
        const value = e.target.value;

        setProductDto(prev => ({
            ...prev,
            [key]: value}));
        }
    function reset(): void {
        setProductDto(initial);
    }
            
    if((id)>=0){
        const product=useProduct(id)
        useEffect(()=>{
                setProductDto(product)
            },[product])
          
    }
    return<>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
                <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{button} Product</h2>

                <div className="flex flex-col space-y-4">
                    <h3 className="block text-gray-700 font-medium mb-1">Id:</h3>
                    <input type="text" id="id" value={productDto.id} onChange={update} required placeholder="ID" className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                    <h3 className="block text-gray-700 font-medium mb-1">Title</h3>
                    <input type="text" id="title" value={productDto.title} onChange={update} required placeholder="Title" className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                    <h3 className="block text-gray-700 font-medium mb-1">Price:</h3>
                    <input type="text" id="price" value={productDto.price} onChange={update} required placeholder="Price" className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                    <h3 className="block text-gray-700 font-medium mb-1">Image Url:</h3>
                    <input type="text" id="image" value={productDto.image} onChange={update} required placeholder="Image URL" className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                    <h3 className="block text-gray-700 font-medium mb-1">Description:</h3>
                    <input type="text" id="description" value={productDto.description} onChange={update} required placeholder="Description" className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                    <h3 className="block text-gray-700 font-medium mb-1">Category:</h3>
                    <input type="text" id="category" value={productDto.category} onChange={update} required placeholder="Category" className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                    
                    <button type="button" onClick={() => { apiFn(productDto, id); reset(); }} className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">{button || "Submit"}</button>
                </div>
                </div>
            </div>
        </>



}
