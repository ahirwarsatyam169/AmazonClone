import React from "react";
import logo from "../../assets/amazonlogo.png";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login(){
    const gohome = useNavigate();
  
    function redirecthome(){
      gohome("/home")
    }
  
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  
  function handleContinue(){
    navigate("/signup",{
      state: {
        email : email
      }
    })
  }



  return (
    <>
      <div className="min-h-screen items-center flex flex-col ">
        <div className="bg-[#232F3E] h-[50px] flex w-full">
          <img onClick={redirecthome} className="scale-50  -translate-x-8 " src={logo} alt="amazon" />
        </div>
        <div className="w-full max-w-md  mt-2 " >
        <div className="p-3">
          <h2 className="text-xl font-bold">Sign in or create account</h2>
        </div>

        <div className="p-3">
          <h3 className="font-bold">Enter mobile number or email</h3>
          <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] border-[1px] border-black/30 rounded-sm w-full h-[50px] p-2"
            type="text"
            name=""
            id=""
          />
        </div>

        <div className="p-3 flex justify-center">
          <button onClick={handleContinue} className="border-none bg-yellow-300  rounded-full w-full h-[50px]">
            Continue
          </button>
        </div>
        <div className="p-3 mt-[-15px]">
          <p className="text-sm">
            By continuing, you agree to Amazon's{" "}
            <a className="border-b border-blue-800 text-blue-800" href="#">
              Conditions of Use
            </a>{" "}
            and{" "}
            <a className="border-b border-blue-800 text-blue-800" href="#">
              Privacy Notice
            </a>
            .
          </p>
        </div>

        <div className="border-b border-gray-300 m-3 "></div>
        <div className="p-3">
          <h2 className="font-bold">Buying for work?</h2>
          <a className="text-blue-800" href="#">
            Create a free business account
          </a>
        </div>
        </div>
        <div className="mt-8 flex flex-col justify-center items-center text-white text-sm h-[160px] w-full bg-[#131921]">
          <div className="flex justify-center items-center">
            <p className="m-3">English</p>
            <p className="m-3">India</p>
          </div>
          <div className="text-xs flex justify-center items-center">
            <p className="p-4">Conditions of use</p>
            <p className="p-4">Privacy Notice</p>
            <p className="p-4">Interest-Based Ads</p>
          </div>
          <div className="text-xs">
            <p>© 1996-2026, Amazon.com, Inc. and its affiliates</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
