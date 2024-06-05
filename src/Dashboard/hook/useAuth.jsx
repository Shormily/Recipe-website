import { useContext } from "react";
import { AuthContext } from "../../Component/Shared/Sign/Rerom";


const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;