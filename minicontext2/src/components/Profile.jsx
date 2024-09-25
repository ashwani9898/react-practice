import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="flex flex-col p-4">
        <h1>Profile</h1>
        <h2>Welcome:{user.username}</h2>

        <h2>Your password is:{user.password}</h2>
      </div>
    </>
  );
}

export default Profile;
