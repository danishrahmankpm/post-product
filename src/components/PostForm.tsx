import postHelper from "../helpers/postHelper";

    export type ProductDto={
        id:number;
        title:string;
        price:number;
        image:string;
        description:string;
        category:string;
    }
    const productPostDto:ProductDto={
        id:0,
        title:"",
        price:0,
        image:"",
        description:"",
        category:""       
    }
    
    function idSetter(value:number):void{
        productPostDto.id=value;
    }
    
    function titleSetter(value:string):void{    
        productPostDto.title=value;
    }
    
    function priceSetter(value:number):void{    
        productPostDto.price=value;
    }
    
    function imageSetter(value:string):void{    
        productPostDto.image=value;
    }
   
    function descriptionSetter(value:string):void{    
        productPostDto.description=value;
    }
    
    function categorySetter(value:string):void{    
        productPostDto.category=value;
    }
export default function PostForm(){
    

    return(
        <form className="post-form">
            <h2>Create New Product</h2>
            <label htmlFor="id">ID:</label>
            <input type="number" id="id" name="id" onChange={(e)=>idSetter(Number(e.target.value))} required/>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" onChange={(e)=>titleSetter(e.target.value)} required/>
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" step="0.01" onChange={(e)=>priceSetter(Number(e.target.value))} required/>
            <label htmlFor="image">Image URL:</label>
            <input type="text" id="image" name="image" onChange={(e)=>imageSetter(e.target.value)} required/>
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" onChange={(e)=>descriptionSetter(e.target.value)} required></textarea>
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" onChange={(e)=>categorySetter(e.target.value)} required/>
            <button type="submit" onClick={()=>postHelper(productPostDto)}>Submit</button>
        </form>
    )


    
}