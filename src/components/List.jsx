import React from 'react'
import { Link } from 'react-router-dom'

export const List = ({name, email, isPrincipal, role,id}) => {
    return (
        <div className='flex flex-col items-center p-2 m-2 w-full'>
            <div className='flex flex-row justify-around items-center p-2 m-2 w-full'>
                <h4 className='text-lg font-semibold text-center'>{name}</h4>
                <h4 className='text-lg font-semibold text-center'>{email}</h4>
                {
                 isPrincipal || role == "teacher" ? <Link to={`/dashboard/${id}`} className='bg-amber-800 m-2 px-4 py-1 rounded-lg'>Edit</Link> : null
                }
                
            </div>
        </div>
    )
}
