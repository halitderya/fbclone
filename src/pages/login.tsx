import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth/firebase";
import { useNavigate } from "react-router-dom";
import { SyntheticEvent, useEffect, useState } from "react";
import { theme } from "../assets/theme";
import { BrandHeaderFunc, FormHeader } from "./signup";

const LoginPage = styled.div`
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  max-width: 400px; */

  // padding: 10px;
  //width: 90%;
  max-width: 400px;
  min-width: min-content;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.lightgray};
`;
const LoginForm = styled.form`
  height: auto;
  min-width: 330px;
  max-width: 400px;
  overflow: hidden;
  background-color: ${theme.white};
  border-radius: 10px;
  box-shadow: ${theme.shadowstrong};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const LoginInput = styled.input`
  background-color: ${theme.lightgray};
  font-size: 14px;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  color: ${theme.darkgray};
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  &:focus {
    background-color: ${theme.hovergray};
  }
`;
const NoAccountButton = styled.button`
  padding: 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  background-color: ${theme.lightgray};
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
  border: none;
  color: ${theme.darkgray};
  border: 3px solid transparent;

  &:hover {
    background-color: ${theme.lightgray};
    border: 3px solid ${theme.borderblue};
    border-radius: 10px;
  }
`;

const LoginError = styled.label<{ $show: boolean }>`
  color: red;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  visibility: ${(props) => (props.$show ? "visible" : "hidden")};
  transition: visibility 0.5s;
`;
const LoginButton = styled.button`
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 600;
  background-color: ${theme.skyblue};
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  border: none;
  color: ${theme.darkgray};
  border: 3px solid transparent;

  &:hover {
    background-color: ${theme.lightgray};
    border: 3px solid ${theme.borderblue};
    border-radius: 10px;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${theme.lightgray};
  }
`;
const InputsContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitActive, setSubmitActive] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  useEffect(() => {
    checkSubmitActive();
  }, [email, password]);

  const checkSubmitActive = () => {
    if (email !== "" && password !== "") {
      setSubmitActive(true);
    } else {
      setSubmitActive(false);
    }
  };
  const onLogin = (e: SyntheticEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        setEmail("");
        setPassword("");
        setShowError(true);
      });
  };

  return (
    <LoginPage>
      <LoginForm>
        <BrandHeaderFunc></BrandHeaderFunc>
        <FormHeader> Enter your credentials</FormHeader>

        <InputsContainerDiv>
          <LoginInput placeholder="Email" onChange={(e) => setEmail(e.target.value)} type="text" id="email" />
          <LoginInput placeholder="Password" autoComplete="on" onChange={(e) => setPassword(e.target.value)} type="password" id="password" />
          <div>Dummy username/password for convenient login: "john.doe@gmail.com" "Doe123" </div>
          <LoginError $show={showError}>Username or password is incorrect.</LoginError>
        </InputsContainerDiv>
        <ButtonContainerDiv>
          <NoAccountButton
            type="button"
            onClick={() => {
              navigate("/signup");
            }}
          >
            {" "}
            No Account? Register
          </NoAccountButton>
          <LoginButton disabled={!submitActive} onClick={onLogin} type="submit">
            Login
          </LoginButton>
        </ButtonContainerDiv>
      </LoginForm>
    </LoginPage>
  );
}
