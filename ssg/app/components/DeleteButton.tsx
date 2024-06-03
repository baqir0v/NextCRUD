"use client"
import React from 'react'
import { deleteProductByID } from '../services/productService';

interface DeleteButton {
    id: number,
    url: string
}

const DeleteButton: React.FC<DeleteButton> = ({ url, id }) => {
    const handleDelete = async () => {
        try {
            await deleteProductByID(url, id)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <button className='bg-red-600' onClick={()=>handleDelete()}>Delete</button>
    )
}

export default DeleteButton