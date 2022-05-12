import "./LogoutButton.css";
import { useAuth0 } from "@auth0/auth0-react";

export function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button className="logout-button" onClick={() => logout()}>
      Log Out
    </button>
  );
}
