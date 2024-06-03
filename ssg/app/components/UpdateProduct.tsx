"use client"
import React, { useState } from 'react'
import { updateFetchProductByID, updateProductByID } from '../services/productService'

interface UpdateForm {
    id: number,
    url: string,
}

const UpdateProduct: React.FC<UpdateForm> = ({ url, id }) => {
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")

    const handleUpdate = async () => {
        try {
            await updateFetchProductByID(url, id, {
                name: name,
                description: desc
            })
            setName("")
            setDesc("")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleUpdate}>
            <input className='text-black' type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
            <input className='text-black' type="text" placeholder='Description' onChange={(e) => setDesc(e.target.value)} />
            <button onClick={handleUpdate}>Update</button>
        </form>
    )
}

export default UpdateProduct