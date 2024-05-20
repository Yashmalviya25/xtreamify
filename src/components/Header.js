import React, { useEffect,useState } from "react";
import logo from "../public/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { removeUser} from "../utils/userSlice";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { SiGravatar } from "react-icons/si";
import { FaUserAstronaut } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { toggleGptSearchView } from "../utils/gptSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [home,setHome] = useState(false);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
 const user = useSelector((store) => store.user);
 useEffect(() => {
  if (home) {
    navigate("/browse");
  }
}, [home,navigate]);
 
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGptSearch =() =>{
    dispatch(toggleGptSearchView());
  }
  const handleHome =() =>{
    setHome(true);
  }

  return (
    <div className="w-full bg-gradient-to-r from-cyan-50 to-blue-500 flex justify-between flex-col md:flex-row items-center p-4 absolute  top-0 z-10">
      <img className="w-20" alt="main-logo" src={logo} />
      <div className="flex mt-4 md:mt-0">
      {user && (
          <div className="flex items-center mr-2">
            <button className="w-20 md:w-36 font-bold text-xs  md:text-xl px-2 rounded-lg bg-black text-blue-400 h-9" onClick={handleGptSearch}>{showGptSearch?"HOME":"GPT SEARCH"}</button>
          </div>
        )}
        {user && (
          <div className="flex items-center mr-4">
            <FaUserAstronaut className="w-24 rounded-lg h-9 cursor-pointer" onClick={handleHome} />
            <span className="w-24 font-bold text-2xl h-9" >{user?.displayName}</span>
          </div>
        )}
        {user && (
          <SiGravatar
            className="cursor-pointer w-24 rounded-lg h-9"
            onClick={handleSignOut}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
