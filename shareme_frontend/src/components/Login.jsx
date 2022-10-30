import React, { useEffect, useState } from 'react';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import jwt_decode from 'jwt-decode';

import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function handleCallBackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:"430593201415-84g54rq4aqc7q9hv3p8aegdhrli9jd9c.apps.googleusercontent.com",
      callback: handleCallBackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    );
  }, []);

  return (
  <div className='flex justify-start items-center flex-col h-screen'>
    <div className='relative w-full h-full'>
      <video 
      src={shareVideo}
      type="video/mp4"
      loop
      controls={false}
      muted
      autoPlay
      className="w-full h-full object-cover"
      />
      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
        <div className='p-5'>
          <img src={logo} width="150px" alt="logo" />
        </div>
        
        <div className='shadow-2xl'>
            <button
            type="button"
            className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
            id="signInDiv"
            >
            </button>
        </div>
      </div> 
    </div>
  </div>
  );
};

export default Login;