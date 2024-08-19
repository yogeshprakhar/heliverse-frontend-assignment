import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { List } from "../components/List";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // fetching curentuser
    const fetchingCurrentUser = async () => {
      await fetch(`${API_BASE_URL}/api/user/getCurrentUser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
        .then((response) => {
          if (!response.ok) {
            navigate("/");
          }
          return response.json();
        })
        .then((data) => setCurrentUser(data))
        .catch((err) => console.log(err));
    };
    // fetching all user
    const fetchingAllUser = async () => {
      await fetch(`${API_BASE_URL}/api/user/alluser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          let teacherData = data.filter(
            (element) => element?.role == "teacher"
          );
          let studentData = data.filter(
            (element) => element?.role == "student"
          );
          // console.log(teacherData)
          setTeacher(teacherData);
          setStudent(studentData);
        })
        .catch((err) => console.log(err));
    };
    fetchingAllUser();
    fetchingCurrentUser();
  }, []);

  const [allTeacher, setTeacher] = useState();
  const [allStudent, setStudent] = useState();
  const [currentUser, setCurrentUser] = useState();
  // console.log("all student data", allStudent)
  // console.log("all teacher data", allTeacher)
  console.log(allStudent);
  return (
    <div>
      <Header
        name={currentUser?.name}
        isPrincipal={currentUser?.isPrincipal}
        role={currentUser?.role}
      />
      <div className="flex flex-row items-center rounded-xl justify-around border m-5 bg-slate-300 ">
        {currentUser?.isPrincipal ? (
          <div className="border w-full">
            <h1 className="text-center font-bold text-xl mt-2">Teacher</h1>
            {allTeacher?.map((data) => (
              <List
                name={data?.name}
                email={data?.email}
                isPrincipal={currentUser?.isPrincipal}
                role={currentUser?.role}
                id={data?._id}
              />
            ))}
          </div>
        ) : null}
        <div className="border w-full">
          <h1 className="text-center font-bold text-xl mt-2">Student</h1>
          {allStudent?.map((data) => (
            <List
              name={data?.name}
              email={data?.email}
              isPrincipal={currentUser?.isPrincipal}
              role={currentUser?.role}
              id={data?._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
