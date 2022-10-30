import React, { useState, useEffect} from 'react';

const SignOutButton = () => {
    const [user, setUser] = useState({});

    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
      }

  return (
    <div>
    { Object.keys(user).length !== 0 &&
           <button className="absolute flex flex-col justify-center 
           bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-10 rounded-full"
           onClick={ (e) => handleSignOut(e)} 
           type="button">Sign Out</button>
         }
    </div>
  )
}

export default SignOutButton;