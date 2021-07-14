import React from 'react'

const NoOfUser =({ users, loading})=> {
    if (loading){
        return <h2>Loading...</h2>
    }
    return (
        <ul className='list-group'>
            {users.map(user=>(
                <li key={user.id} className='list-group-item'>
                    {user.title}
                </li>
            ))}
            
        </ul>
    )
}

export default NoOfUser
