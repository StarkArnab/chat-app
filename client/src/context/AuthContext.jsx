import { createContext, useCallback, useState } from "react";
import { postRequest } from "../utils/services";
import { baseURL } from "../utils/services";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerError, setRegisterError] = useState(false);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  const registerUser = useCallback(async () => {
    setRegisterError(false);
    setIsRegisterLoading(true);
    const res = await postRequest(
      `${baseURL}/user/register`,
      JSON.stringify(registerInfo)
    );
    setIsRegisterLoading(false);
    if (res.error) {
      setRegisterError(true);
      console.log(res);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        registerError,
        isRegisterLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
