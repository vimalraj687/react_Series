import React, { useContext } from "react";
import UserContext from "../context/UserContext";
const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div>please login</div>;
  return <div>welcme {user.username}</div>;
  return <div>Profile</div>;
};

export default Profile;
