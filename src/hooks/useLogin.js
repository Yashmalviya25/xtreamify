import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { checkValidData } from "../utils/validate";

const useLogin = () => {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(""); 
  };

  const handleAuthentication = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current ? nameRef.current.value : "";

    const validationMessage = checkValidData(email, password);
    if (validationMessage) {
      setErrorMessage(validationMessage);
      return;
    }

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, { displayName: name })
            .then(() => {
              dispatch(
                addUser({
                  uid: user.uid,
                  email: user.email,
                  displayName: user.displayName,
                })
              );
            })
            .catch((error) => setErrorMessage(error.message));
        })
        .catch((error) => setErrorMessage(error.message));
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(
            addUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
            })
          );
        })
        .catch((error) => setErrorMessage(error.message));
    }
  };

  return {
    emailRef,
    nameRef,
    passwordRef,
    isSignIn,
    errorMessage,
    toggleSignInForm,
    handleAuthentication,
  };
};

export default useLogin;
