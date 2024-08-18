import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
const Classroom = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [day, setDay] = useState([]);
    const [startTime, SetStartTime] = useState("");
    const [endTime, SetEndTime] = useState("");
    const handleSubmit = async() => {
        const formData = {
            name: name,
            schedule: [
                {
                    day: day,
                    startTime: startTime,
                    endTime: endTime,
                },
            ],
        };
        await fetch(`${API_BASE_URL}/api/class/register`, {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": 'application/json'
            },
            body: JSON.stringify(formData)
          }).then((response) => {
            if (!response.ok) {
              throw new Error("Error while creating class ")
            }
            if (response.ok) {
              navigate("/dashboard")
            }
      
          }).catch((err) => console.log(err))
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-400 gap-5 p-10">
            <h1 className="text-xl font-bold">Enter Classroom Details</h1>
            <div>
                <label className="text-gray-700 text-sm font-bold">
                    Class name
                    <input
                        value={name}
                        type="text"
                        placeholder="Enter Class name"
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border rounded w-full font-normal px-2 py-1"
                    />
                </label>

                <h3 className="text-gray-700 text-sm font-bold mt-4">
                    Select a Day of the Week
                </h3>
                {daysOfWeek.map((item) => (
                    <div key={item}>
                        <label>
                            <input
                                type="radio"
                                value={item}
                                checked={day.find((val) => val == item)}
                                onChange={(e) => setDay((prev) => !prev.includes(e.target.value) ? [...prev, e.target.value] : prev.filter((item) => item != e.target.value))}
                            />
                            {item}
                        </label>
                    </div>
                ))}

                <label className="text-gray-700 text-sm font-bold">
                    Start Time
                    <input
                        value={startTime}
                        type="String"
                        placeholder="eg - 9.30 AM"
                        onChange={(e) => SetStartTime(e.target.value)}
                        required
                        className="border rounded w-full font-normal px-2 py-1"
                    />
                </label>
                <label className="text-gray-700 text-sm font-bold">
                    End Time
                    <input
                        value={endTime}
                        type="String"
                        placeholder="eg - 4.00 PM"
                        onChange={(e) => SetEndTime(e.target.value)}
                        required
                        className="border rounded w-full font-normal px-2 py-1"
                    />
                </label>
                
                <button
                    className="bg-blue-500 px-3 py-2 mt-4 rounded-lg"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Classroom;
