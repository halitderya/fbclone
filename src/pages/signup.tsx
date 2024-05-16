import styled from "styled-components";
import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, storage } from "../Auth/firebase";
import { updateProfile } from "firebase/auth";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { theme } from "../assets/theme";
import Logout from "../assets/topmenu-icons/logout.svg";
import Facebooklogo from "../assets/topmenu-icons/facebook-logo.svg";
import defaultProfilePicURL from "../assets/shortcut-icons/user_avatar.jpg";

export const FormHeader = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 18px;
  margin-top: 40px;
  margin-bottom: 20px;
  color: ${theme.darkgray};
`;
const FormHr = styled.hr`
  width: 100%;
  margin-top: 20px;
  color: ${theme.darkgray};
`;
const SignupPage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 90%;
  max-width: 500px;
  min-width: min-content;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  //background-color: ${theme.lightgray};
`;
const BrandHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const BrandHeaderImage = styled.img``;
const BrandHeaderText = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  font-weight: 800;
  margin-left: 10px;
  color: ${theme.darkgray};
`;
const SignupForm = styled.form`
  height: auto;
  width: 40vw;
  min-width: 330px;
  max-width: 550px;
  overflow: hidden;
  background-color: ${theme.white};
  border-radius: 10px;
  box-shadow: ${theme.shadowstrong};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const InputsContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const SignupInput = styled.input`
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
const ButtonContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const HasAccountButton = styled.button`
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
const SignupButton = styled.button`
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 600;
  background-color: ${theme.skyblue};
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
  &:disabled {
    cursor: not-allowed;
    background-color: ${theme.lightgray};
  }
`;
const PostImageUploadLabel = styled.label`
  background-color: #ffffff;
  border-radius: 10px;
  color: ${theme.darkgray};
  background-color: ${theme.lightgray};
  display: inline-block;
  padding: 10px 50px;
  background-position: left center;
  background-position-x: 10px;
  background-image: url(${Logout});
  background-repeat: no-repeat;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;

  font-size: 14px;
  font-weight: 400;
  margin-top: 10px;
  height: auto;

  user-select: none;
  transition: background-color 0.3s;
  border: 3px solid transparent;

  &:hover {
    background-color: ${theme.lightgray};
    border: 3px solid ${theme.borderblue};
    border-radius: 10px;
  }
`;

const PostImageUploader = styled.input`
  display: none;
`;
export function BrandHeaderFunc() {
  return (
    <>
      <BrandHeader>
        <BrandHeaderImage src={Facebooklogo} />
        <BrandHeaderText>Facebook Clone by Halit</BrandHeaderText>
      </BrandHeader>
      <FormHr />
    </>
  );
}
export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [ppimage, setPpimage] = useState<File>();
  const [submitActive, setSubmitActive] = useState<boolean>(false);

  useEffect(() => {
    checkSubmitActive();
  }, [email, password, name, surname, ppimage]);

  const checkSubmitActive = () => {
    if (email !== "" && password !== "" && name !== "" && surname !== "" && ppimage !== undefined) {
      setSubmitActive(true);
    } else {
      setSubmitActive(false);
    }
  };

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!email || !password || !name || !surname || !ppimage) {
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
      console.error(error);
    }
  };
  function handleUpload(userid: string) {
    return new Promise<string>((resolve, reject) => {
      if (!ppimage) {
        resolve(defaultProfilePicURL);

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
  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0] !== null) {
      setPpimage(event.target.files[0]);
    }
  }
  return (
    <SignupPage>
      <SignupForm>
        <BrandHeaderFunc></BrandHeaderFunc>
        <FormHeader> Complete the below fields to register</FormHeader>

        <InputsContainerDiv>
          <SignupInput
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            id="name"
          />
          <SignupInput
            placeholder="Surname"
            value={surname}
            onChange={(e) => {
              setSurname(e.target.value);
            }}
            type="text"
            id="surname"
          />
          <SignupInput
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            id="username"
          />
          <SignupInput
            placeholder="Password"
            autoComplete="on"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            id="password"
          />
          <PostImageUploadLabel className="PostImageUploadLabel" htmlFor="file-upload">
            Profile Picture
          </PostImageUploadLabel>
          <PostImageUploader
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFileUpload(e);
              }
            }}
            id="file-upload"
            className="PostImageUploader"
            type="file"
            accept="image/*"
          ></PostImageUploader>{" "}
        </InputsContainerDiv>
        <ButtonContainerDiv>
          <HasAccountButton
            type="button"
            onClick={() => {
              navigate("/login");
            }}
          >
            Already have an account? Login.
          </HasAccountButton>
          <SignupButton disabled={!submitActive} onClick={onSubmit} type="submit">
            Signup
          </SignupButton>
        </ButtonContainerDiv>
      </SignupForm>
    </SignupPage>
  );
}
