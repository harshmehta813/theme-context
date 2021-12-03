import { useContext } from "react";
import Body from "./Component/Body";
import Header from "./Component/Header";
import { ThemeContext } from "./Context/ThemeProvider";
import "./styles.css";

export default function App() {
  const [{ theme, themeData }] = useContext(ThemeContext);

  const currentTheme = themeData[theme];
  console.log(`updated?`);
  return (
    <div
      style={{
        color: currentTheme.color,
        backgroundColor: currentTheme.background
      }}
      className="App"
    >
      <Header />
      <Body />
    </div>
  );
}
