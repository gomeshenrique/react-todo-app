import "./Profile.css";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../LogoutButton/LogoutButton";

export function Profile() {
  const { user } = useAuth0();

  return (
    <div className="profile-user">
      <img
        className="profile-user__picture"
        src={user?.picture}
        alt={user?.name}
      />
      <div className="profile-user__info">
        <h3>{user?.name}</h3>
        <p>{user?.email}</p>
        <LogoutButton />
      </div>
      {/* {JSON.stringify(user, null, 2)} */}
    </div>
  );
}
