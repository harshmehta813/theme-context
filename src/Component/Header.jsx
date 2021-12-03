import { useContext } from "react";
import { AppContext } from "../Context/ApplicationContextProvider";
import { ThemeContext } from "../Context/ThemeProvider";

const Header = () => {
  const [isAuth, setIsAuth] = useContext(AppContext);
  const [{ theme, themeData }, toggleTheme] = useContext(ThemeContext);
  const currentTheme = themeData[theme];
  return (
    <>
      <u>This is a navbar!</u>
      <div id="header">
        <div>
          {isAuth ? (
            <button
              style={{
                color: currentTheme.color,
                backgroundColor: currentTheme.background,
                borderColor: currentTheme.borderColor
              }}
              onClick={() => setIsAuth(false)}
            >
              SIGN OUT
            </button>
          ) : (
            <button
              style={{
                color: currentTheme.color,
                backgroundColor: currentTheme.background,
                borderColor: currentTheme.borderColor
              }}
              onClick={() => setIsAuth(true)}
            >
              {" "}
              SIGN IN
            </button>
          )}
        </div>
        <div>
          <button
            style={{
              color: currentTheme.color,
              backgroundColor: currentTheme.background,
              borderColor: currentTheme.borderColor
            }}
            onClick={toggleTheme}
          >
            Toggle theme to {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
