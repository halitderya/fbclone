import styled from "styled-components";
import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, storage } from "../Auth/firebase";
import { updateProfile } from "firebase/auth";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

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

  const [ppimage, setPpimage] = useState<File>();

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!email || !password || !name || !surname || !ppimage) {
      alert("Please fill all the fields");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const downloadURL = await handleUpload(user.uid);
      await updateProfile(user, {
        displayName: `${name} ${surname}`,
        photoURL: downloadURL,
      });

      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error: any) {
      console.log(error);
    }
  };
  function handleUpload(userid: string) {
    return new Promise<string>((resolve, reject) => {
      if (!ppimage) {
        reject("No file selected");
        return;
      }

      const storageRef = ref(storage, `/profile_pictures/${userid}/profile_picture`);
      const uploadTask = uploadBytesResumable(storageRef, ppimage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  }
  function handleChange(event: any) {
    setPpimage(event.target.files[0]);
  }
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

        <SignupInput accept="image/*" onChange={handleChange} type="file" id="ppimage" />
        <SignupButton onClick={onSubmit} type="submit">
          Signup
        </SignupButton>
      </SignupForm>
    </SignupPage>
  );
}
