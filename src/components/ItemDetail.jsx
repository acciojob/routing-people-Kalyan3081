import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './loading'


const ItemDetail = () => {
    const { id } = useParams() // Get the user ID from the URL
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true)
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/Users/${id}`)
                const data = await res.json()
                setUser(data)
                setLoading(false)
            } catch (error) {
                console.log("Error fetching user details:", error)
            }
        }
        fetchUser()
    }, [id]) // Dependency on 'id' ensures data is refetched if the URL changes

    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>User Details</h1>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
        </div>
    )
}

export default ItemDetail
