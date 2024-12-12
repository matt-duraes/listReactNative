import { StatusBar } from "expo-status-bar";
import Home from "./src/screens/Home/Index";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        style="light"
      />
      <Home />
    </>
  );
}


