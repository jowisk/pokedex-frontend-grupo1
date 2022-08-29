import React from 'react'

const Login = () => {
  return (
    <div className="h-screen border-l-[2px] border-r-[2px] border-black bg-cover bg-[#FCCF00] overflow-y-hidden flex flex-col items-center">

        <p>Login</p>

        <div className="flex flex-col">
          <p>Usuario</p>
          <input type="text" name="" id="" />
        </div>

        <div className="flex flex-col">
          <p>Contraseña</p>
          <input type="text" name="" id="" />
        </div>
    </div>
  )
}

export default Login