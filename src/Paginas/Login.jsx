import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  //const img = "http://localhost:3000/logo.png"
  const navegar = useNavigate('');

  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  const verify = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        body: JSON.stringify({ mail, password }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
      });

      if (!res.ok) {
        console.log("!res.ok")
        alert("Usuario no registrado");
        throw new Error("invalid User data ");
      } else {
        const userFetch = await res.json();
        localStorage.setItem("token", userFetch.token);
        navegar("/pokedex");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const guest = () => {
    navegar("/pokedex")
    localStorage.setItem("token", null)
  }
  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };



  return (

  <div className="flex">
    {/* left */}
    <div className=" bg-gradient-to-b from-[#eb9834] to-[#FCCF00] w-[50%] h-screen">
    </div>
    
    {/* right */}
  <div className="h-screen overflow-y-hidden w-[50%]">
   <div class=" h-screen overflow-hidden flex flex-col items-center justify-center">
    <p className="text-[40px]">Login</p>
    <div class="bg-white lg:w-1/2 md:6/12 w-10/12 shadow-3xl">
   <div class="fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF"
      />
   </div>
   <form class="p-12 md:p-24" onSubmit={verify}>
    <div class="flex items-center text-lg mb-6 md:mb-8">
      <svg class="absolute ml-3" width="24" viewBox="0 0 24 24">
        <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
      </svg>
      <input type="text" id="mail" class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Username" onChange={handleMail}/>
    </div>
    <div class="flex items-center text-lg mb-6 md:mb-8">
      <svg class="absolute ml-3" viewBox="0 0 24 24" width="24">
        <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"/>
      </svg>
      <input type="password" id="password" class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Password" onChange={handlePassword}/>
    </div>
      <button type="submit" class=" bg-gradient-to-b from-[#eb9834] to-[#FCCF00] font-medium p-2 md:p-4 text-black uppercase w-full" onClick={verify}>Login</button>
    <button onClick={guest} class="bg-gradient-to-b from-[#eb9834] to-[#FCCF00] font-medium p-2 md:p-4 mt-2 text-black uppercase w-full">Continue as guest</button>

   </form>
    </div>
    </div>
  </div>
  </div>
  )
  
}

export default Login