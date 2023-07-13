import React, { useContext } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);

  if (!isAuthenticated) return <Navigate to={"/login"} />;

  return loading ? (
    <Loader />
  ) : (
    <div>
      {/* <h1>Hello</h1> */}
      <h1>Your Username : {user?.name}</h1>
      <p>Your email : {user?.email}</p>
    </div>
  );
};

export default Profile;
