import React from 'react'
import { deleteProductByID, getAllProducts } from '../services/productService'
import Image from 'next/image'
import Link from 'next/link'
import DeleteButton from '../components/DeleteButton'

interface Item {
    id: number,
    // title:string,
    // image:string,
    // price:number
    name: string,
    description: string
}

const Data = async () => {
    const BaseUrl = "http://localhost:3000/categories"
    const data = await getAllProducts(BaseUrl)
    return (
        <div>
            {data?.map((item: Item) => (
                <ul key={item.id}>
                    {/* <Image 
                src={item.image}
                alt=''
                width={500}
                height={500}
                ></Image> */}
                    <li>{item.id})</li>
                    <li>{item.name}</li>
                    <li>{item.description}</li>
                    <Link href={`/data/${item.id}`}>Details</Link>
                    <DeleteButton url={BaseUrl} id={item.id} />
                </ul>
            ))}
        </div>
    )
}

export default Data