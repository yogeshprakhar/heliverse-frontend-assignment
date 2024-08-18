import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  console.log(userId)
  useEffect(()=>{
    const fetchUser = async()=>{
        await fetch(`${API_BASE_URL}/api/user/getUser/${userId}`, {
            method: "GET",
            credentials: "include",
          })
            .then((response) => {
              return response.json()
            })
            .then((data)=>{
                const {name,email} = data;
                setFormData({name, email})
            })
            .catch((err) => console.log(err)); 
    } 
    fetchUser()
  },[])

  const handleUpdate = async () => {
    await fetch(`${API_BASE_URL}/api/user/${userId}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((data) => {
        console.log(data.ok);
      })
      .catch((err) => console.log(err));
    navigate("/dashboard");
  };
  const handleDelete = async () => {
    await fetch(`${API_BASE_URL}/api/user/:${userId}`, {
      method: "DELETE",
      credentials: "include",
    });
    navigate("/dashboard");
  };
  return (
    <div className="flex min-h-screen items-center justify-center w-full bg-blue-200">
      <div className="p-10 flex flex-col w-96 rounded-2xl gap-5 m-10 bg-gray-400">
        <h2 className="text-center font-bold text-2xl">Update Details</h2>
        <label className="text-gray-700 text-sm font-bold">
          Name
          <input
            value={formData.name}
            type="text"
            placeholder="Enter user name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="border rounded w-full font-normal px-2 py-1"
          />
        </label>
        <label className="text-gray-700 text-sm font-bold">
          Email
          <input
            value={formData.email}
            type="email"
            placeholder="Enter user email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="border rounded w-full font-normal px-2 py-1"
          />
        </label>
        <div className="flex gap-2 justify-evenly items-center">
          <button
            onClick={handleUpdate}
            className="bg-blue-600 mt-1 rounded-md text-white pl-4 pr-4 p-2 font-bold hover:bg-blue-500 text-lg"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="bg-blue-600 mt-1 rounded-md text-white pl-4 pr-4 p-2 font-bold hover:bg-blue-500 text-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
