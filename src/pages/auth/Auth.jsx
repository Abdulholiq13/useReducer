import { Outlet } from "react-router-dom";
import NotFound from "../notfound/NotFound";

const Auth = () => {
  let user = null;
  return user ? <Outlet /> : <NotFound />;
};

export default Auth;
