import React from "react";
import { Navigate, Link } from "react-router-dom";

const Header = ({ name, isPrincipal, role }) => {
  return (
    <div className="bg-gray-500 flex flex-row items-center justify-between p-5">
      <div className="text-2xl font-bold">Welcome {name}</div>
      <div className="flex flex-row gap-5">
        {isPrincipal ? (
          <Link to={"/createuser"} className="bg-blue-500 rounded-lg p-2">
            Create Teacher
          </Link>
        ) : null}
        {isPrincipal || role == "teacher" ? (
          <Link to={"/createuser"} className="bg-blue-500 rounded-lg p-2">
            Create Student
          </Link>
        ) : null}
        {isPrincipal ? (
          <Link to={"/classroom"} className="bg-blue-500 rounded-lg p-2">
            Create Classroom
          </Link>
        ) : null}
        {isPrincipal ? (
          <Link to={"/showClassroom"} className="bg-blue-500 rounded-lg p-2">
            Classrooms
          </Link>
        ) : null}
        {!isPrincipal ? (
          <Link to={"/showClassroom"} className="bg-blue-500 rounded-lg p-2">
            Your Classroom
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
