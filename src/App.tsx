import "./App.css";
import { WelcomePage } from "./components/WelcomePage/WelcomePage";
import { Profile } from "./components/Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading } from "./components/Loading/Loading";
import { TodoInput } from "./components/TodoInput/TodoInput";
import { TodoList } from "./components/TodoList/TodoList";

export function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  return isLoading ? (
    <Loading />
  ) : isAuthenticated ? (
    <>
      <Profile />
      <TodoInput />
    </>
  ) : (
    <WelcomePage />
  );
}
