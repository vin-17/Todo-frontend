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
    <div style={styles.container}>
      
      <h1>Your Username : {user?.name}</h1>
      <div style={styles.gap}></div>

      <h2>Your email : {user?.email}</h2>
    </div>
  );
};

export default Profile;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    
    justifyContent: "center",
    height: "100vh",
  },
  gap: {
    marginTop: "10px",
  },
};