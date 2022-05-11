import "./App.css";
import { LoginButton } from "./components/LoginButton";
import { LogoutButton } from "./components/LogoutButton";
import { Profile } from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading } from "./components/Loading/Loading";

export function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  return isLoading ? (
    <Loading />
  ) : isAuthenticated ? (
    <>
      <LogoutButton />
      <Profile />
    </>
  ) : (
    <LoginButton />
  );
}
