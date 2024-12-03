import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../tours/loading'

const ItemList = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const RouterAPI = async () => {
        setLoading(true)
        try {
            const URL = "https://jsonplaceholder.typicode.com/users"
            const res = await fetch(URL)
            const data = await res.json()
            setItems(data)
            setLoading(false)
        } catch (e) {
            console.log("Error in fetching data", e)
            setLoading(false)
        }
    }

    useEffect(() => {
        RouterAPI()
    }, [])

    return (
        <>
            <h1>User List</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <Link to={`/users/${item.id}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ItemList
