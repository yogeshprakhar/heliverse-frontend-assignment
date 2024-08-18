import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const ShowClassrooms = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchingClassrooms = async () => {
      await fetch(`${API_BASE_URL}/api/class/classrooms`, {
        method: "GET",
        credentials: "include",
      })
        .then((response) => {
          if (!response.ok) {
            throw console.error("error");
          }
          return response.json();
        })
        .then((res) => setData(res))
        .catch((err) => console.log(err));
    };
    fetchingClassrooms();
  }, []);
  console.log(data);
  return (
    <div className="p-10 bg-gray-400 min-h-screen">
      <h1 className="font-bold text-4xl text-center">Your Classroom</h1>
      <div className="mt-5 flex flex-col gap-2 p-4 rounded-xl">
        {data.map((item) => (
          <div className="flex items-center border rounded-xl p-2 justify-evenly">
            <h1 className="text-center font-bold text-lg">{item?.name}</h1>
            <div className="flex flex-col gap-2">
              {item?.schedule.map((sche) => (
                <div className="flex flex-col items-center border p-2 rounded-lg justify-center">
                  <div>
                    {sche.day.map((ele) => (
                      <span> {ele} </span>
                    ))}
                  </div>
                  <h1>Start Time : {sche.startTime}</h1>
                  <h1>End Time : {sche.endTime}</h1>
                </div>
              ))}
            </div>
            <div className="text-center font-semibold text-lg">Asssigned to : Mr Ram Sharma</div>
            <Link className="bg-orange-600 px-3 py-1 rounded-lg">Edit</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowClassrooms;
