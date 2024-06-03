import axios from "axios"

interface NewProduct {
    id: number,
    name: string,
    description: string
}

interface UpdateNewProduct {
    name: string,
    description: string
}

export const getAllProducts = async (baseUrl: string) => {
    const response = await fetch(baseUrl, {
        next: {
            revalidate: 10
        }
    })
    const jsonData = await response.json()
    return jsonData
}

export const getProductByID = async (baseUrl: string, id: number) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        next: {
            revalidate: 10
        }
    })
    const jsonData = await response.json()
    return jsonData
}

export const deleteProductByID = async (baseUrl: string, id: number) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: "Delete"
    })
    const jsonData = await response.json()
    return jsonData
}

// Axios ile Product elave etme
export const addNewProduct = async (baseUrl: string, newProduct: NewProduct) => {
    const response = await axios.post(`${baseUrl}`, newProduct)
    return response.data
}

// Fetch ile Product elave etme
export const addNewFetchProduct = async (baseUrl: string, newProduct: NewProduct) => {
    const response = await fetch(`${baseUrl}`, {
        method: "Post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
    })
    const jsonData = await response.json()
    return jsonData
}

// Axios ile Update
export const updateProductByID = async (baseUrl: string, id: number, newProduct: UpdateNewProduct) => {
    const response = await axios.put(`${baseUrl}/${id}`, newProduct)
    return response.data
}

// Fetch ile Update
export const updateFetchProductByID = async (baseUrl: string, id: number, newProduct: UpdateNewProduct) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method:"Put",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newProduct)
    })
    const jsonData = await response.json()
    return jsonData
}