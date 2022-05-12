import "./WelcomePage.css";
import { LoginButton } from "../LoginButton/LoginButton";

export function WelcomePage() {
  return (
    <div className="welcome-page">
      <h1 className="welcome-page__title">Welcome ToDo APP</h1>
      <p>Click bellow!</p>
      <LoginButton />
    </div>
  );
}
