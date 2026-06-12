  import React from "react";
  import logo from "../../assets/amazonlogo.png";
  import { useLocation, useNavigate } from "react-router-dom";
  import { Navigate } from "react-router-dom";

  function Signup() {
    const location = useLocation();
    const email = location.state?.email || ''; //If state exists, get email. Otherwise return undefined
    const navigate = useNavigate();

    function navigatelogin(){
      navigate("/")
    }
    // const email = location.state.email;
    return (
      <>
        <div className="min-h-screen items-center flex flex-col">
          <div className="bg-[#232F3E] h-[50px] flex w-full">
            <img className="scale-50  -translate-x-8 " src={logo} alt="amazon" />
          </div>
          <div className="w-full max-w-md">
            <div className="p-3">
              <h1 className="text-xl font-bold">It looks like you are new to Amazon</h1>
            </div>
            <div className="ml-1 flex justify-between w-[70%]">
              <h3 className="p-2 text-md">{email}</h3>
              <button onClick={navigatelogin} className="text-blue-800 p-2 text-md">change</button>
            </div>

            <div className="p-3">
              <h3 className="">Let's create an account using your mobile number</h3>

            </div>

            <div className="p-3 flex justify-center">
              <button className="border-none bg-yellow-300  rounded-full w-full h-[50px]">
                Proceed to create an account
              </button>
            </div>
 

            <div className="border-b border-gray-300 m-3 "></div>
            <div className="p-3">
              <h2 className="font-bold">Already a customer?</h2>
              <a className="text-blue-800" href="#">
                Sign in with another email or mobile number
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
    )
  }

  export default Signup;
