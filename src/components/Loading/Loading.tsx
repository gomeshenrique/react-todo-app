import "./Loading.css";
import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <CircleNotch className="spin" weight="bold" color="#374343" size={52} />
  );
}
