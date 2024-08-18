import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const Teacher = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: ""
    })
    console.log(formData.role, "role")
    const handleSubmit = async () => {
        console.log(formData)
        await fetch(`${API_BASE_URL}/api/user/register`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((data) => { console.log(data.ok) }).catch((err) => console.log(err))
        navigate("/dashboard")
    }

    return (
        <div className='flex min-h-screen items-center justify-center bg-blue-200'>
            <div className='p-10 flex flex-col w-96 rounded-2xl gap-5 m-10 bg-gray-400'>
                <select id="options" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className='border rounded w-full font-normal px-2 py-1'>
                    <option value="">Select Role</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                </select>
                <label className='text-gray-700 text-sm font-bold'>
                    Name
                    <input value={formData.name} type='text' placeholder='Enter user name' onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className='border rounded w-full font-normal px-2 py-1' />
                </label>
                <label className='text-gray-700 text-sm font-bold'>
                    Email
                    <input value={formData.email} type='email' placeholder='Enter user email' onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className='border rounded w-full font-normal px-2 py-1' />
                </label>
                <label className='text-gray-700 text-sm font-bold'>
                    Password
                    <input value={formData.password} type='password' placeholder='Enter  passowrd' required onChange={(e) => setFormData({ ...formData, password: e.target.value })} className='border rounded w-full font-normal px-2 py-1' />
                </label>
                <button onClick={handleSubmit} className='bg-blue-600 mt-1 rounded-md text-white pl-4 pr-4 p-2 font-bold hover:bg-blue-500 text-lg'>Submit</button>
            </div>
        </div>
    )
}

export default Teacher