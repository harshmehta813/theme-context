import { useContext } from "react";
import { AppContext } from "../Context/ApplicationContextProvider";

function Body() {
  const [isAuth] = useContext(AppContext);

  if (isAuth) {
    return (
      <div>
        <div>
          <h1>Hey! Welcome back!</h1>
        </div>
        <div>
          <h2>Would you like to continue with your application?</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Please sign in to continue</h3>
      </div>
    );
  }
}

export default Body;
