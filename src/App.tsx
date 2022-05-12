import "./App.css";
import { WelcomePage } from "./components/WelcomePage/WelcomePage";
import { Profile } from "./components/Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading } from "./components/Loading/Loading";

export function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  return isLoading ? (
    <Loading />
  ) : isAuthenticated ? (
    <>
      <Profile />
    </>
  ) : (
    <WelcomePage />
  );
}
