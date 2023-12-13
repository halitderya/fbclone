import styled from "styled-components";
import React, { SyntheticEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth/firebase";
import { updateProfile } from "firebase/auth";

const SignupPage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
`;
const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const SignupInput = styled.input``;
const SignupButton = styled.button``;
const SignupLabel = styled.label``;

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [ppimage, setPpimage] = useState("");

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, {
          displayName: name + " " + surname,
          photoURL: ppimage,
        });
      })
      .then(() => {
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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <SignupPage>
      <SignupForm>
        <SignupLabel htmlFor="name">Name</SignupLabel>
        <SignupInput value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" />

        <SignupLabel htmlFor="surname">Surname</SignupLabel>
        <SignupInput value={surname} onChange={(e) => setSurname(e.target.value)} type="text" id="surname" />

        <SignupLabel htmlFor="email">Email</SignupLabel>
        <SignupInput value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="username" />
        <SignupLabel htmlFor="password">Password</SignupLabel>
        <SignupInput autoComplete="on" value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" />
        <SignupLabel htmlFor="ppimage">Profile Picture</SignupLabel>
        <SignupInput value={ppimage} onChange={(e) => setPpimage(e.target.value)} type="file" id="ppimage" />
        <SignupButton onClick={onSubmit} type="submit">
          Signup
        </SignupButton>
      </SignupForm>
    </SignupPage>
  );
}
