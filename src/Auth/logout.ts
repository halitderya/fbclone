import {  signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from 'react-router-dom';

export const handleLogout = () => {        
    const navigate = useNavigate();
       
    signOut(auth)
    .then(() => {
        navigate("/");

    }).catch((error) => {
alert("Error logging out"+ error.message.toString())
    });
}