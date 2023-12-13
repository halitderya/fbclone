import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth/firebase";
import { useNavigate } from "react-router-dom";
import { SyntheticEvent, useState } from "react";

const LoginPage = styled.div``;
const LoginForm = styled.form``;
const LoginInput = styled.input``;
const LoginButton = styled.button``;
const LoginLabel = styled.label``;

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e: SyntheticEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <LoginPage>
      <LoginForm>
        <LoginLabel htmlFor="email">E-Mail</LoginLabel>
        <LoginInput onChange={(e) => setEmail(e.target.value)} type="text" id="email" />
        <LoginLabel htmlFor="password">Password</LoginLabel>
        <LoginInput autoComplete="on" onChange={(e) => setPassword(e.target.value)} type="password" id="password" />
        <LoginButton onClick={onLogin} type="submit">
          Login
        </LoginButton>
      </LoginForm>
      <button
        onClick={() => {
          navigate("/signup");
        }}
      >
        No Account? Register
      </button>
    </LoginPage>
  );
}
