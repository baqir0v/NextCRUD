'use client'
import React, { useEffect, useState } from 'react'
import { addNewFetchProduct, addNewProduct, getAllProducts } from '../services/productService'

const Add = () => {
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [products, setProducts] = useState([])

    const BaseUrl = "http://localhost:3000/categories"

    const getData = async () =>{
        const data = await getAllProducts(BaseUrl)
        setProducts(data)
    }

    useEffect(() => {
      getData()
    }, [])
        
    const handleAdd = async () => {
        try {
            await addNewFetchProduct(BaseUrl,{
                id:products[products.length + 1],
                name:name,
                description:desc
            })
            setName("")
            setDesc("")
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <form className='flex flex-col justify-center w-1/2 ml-auto mr-auto gap-5'>
        <input className='text-black h-12 outline-none' type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
        <input className='text-black h-12 outline-none' type="text" placeholder='Description' onChange={(e)=>setDesc(e.target.value)}/>
        <button className='flex justify-center items-center w-[150px] h-[40px] bg-blue-500' onClick={handleAdd}>Add</button>
    </form>
  )
}

export default Add