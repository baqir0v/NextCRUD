import UpdateProduct from '@/app/components/UpdateProduct'
import { getProductByID } from '@/app/services/productService'
import Image from 'next/image'
import React from 'react'

const Details = async ({ params }: { params: { id: number } }) => {
    const BaseUrl = "http://localhost:3000/categories"
    const details = await getProductByID(BaseUrl, params.id)
    return (
        <div>
            <ul>
                <UpdateProduct url={BaseUrl} id={params.id}></UpdateProduct>
                <li>{details.name}</li>
                <li>{details.description}</li>
            </ul>
        </div>
    )
}

export default Details