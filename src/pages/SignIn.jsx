import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
const SignIn = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleSignin = async () => {
    await fetch(`${API_BASE_URL}/api/user/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Error while sign in ")
      }
      if (response.ok) {
        navigate("/dashboard")
      }

    }).catch((err) => console.log(err))
  }

  return (
    <div className='flex h-screen items-center justify-center bg-blue-200'>
      <div className='p-10 flex flex-col w-96 rounded-2xl gap-5 m-10 bg-gray-400'>
        <label className='text-gray-700 text-sm font-bold'>
          Email
          <input value={formData.email} type='email' placeholder='principal@classroom.com' onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className='border rounded w-full font-normal px-2 py-1' />
        </label>
        <label className='text-gray-700 text-sm font-bold'>
          Password
          <input value={formData.password} type='password' placeholder='Admin' required onChange={(e) => setFormData({ ...formData, password: e.target.value })} className='border rounded w-full font-normal px-2 py-1' />
        </label>
        <button onClick={handleSignin} className='bg-blue-600 mt-1 rounded-md text-white pl-4 pr-4 p-2 font-bold hover:bg-blue-500 text-lg'>Sign In</button>
      </div>
    </div>
  )
}

export default SignIn