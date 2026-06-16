import React from "react";
import logo from "../../assets/amazonlogo.png";
import { useNavigate } from "react-router-dom";

function CreateAcc() {
  const gohome = useNavigate();

  function redirecthome(){
    gohome("/home")
  }



  return (
    <>
      <div className="min-h-screen items-center flex flex-col">
        <div className="bg-[#232F3E] h-[50px] flex w-full">
          <img onClick={redirecthome} className="scale-50  -translate-x-8 " src={logo} alt="amazon" />
        </div>
        <div className="w-full max-w-md">
          <h1 className="text-xl ml-3 mt-4 font-bold">Create Account</h1>
          <div className="p-3  border-[1px] border-black/20 rounded-md   m-3">
            <div className="">
              <h2 className="ml-4 font-bold">Mobile number</h2>
              <input
                type="number"
                className="-shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] border-[1px] border-black/30 rounded-xl h-[50px] w-[35%] m-2"
              />
              <input
                type="number"
                className="-shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] border-[1px] border-black/30 rounded-xl h-[50px] w-[60%]"
              />
            </div>
            <div className="mt-5">
              <h2 className="font-bold ml-4">First and last name</h2>
              <input
                type="text"
                className=" shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] border-[1px] border-black/30 rounded-xl h-[50px] w-[97%] m-2 "
              />
              <p className="m-2 text-sm">
                To verify your number, we will send you a text message with a
                temporary code. Message and data rates may apply.
              </p>
            </div>
            <div className="p-3 flex justify-center">
              <button className="border-none bg-yellow-300  rounded-full w-full h-[50px]">
                Verify mobile number
              </button>
            </div>
            <div className="border-b border-gray-300 m-3 "></div>
            <div className="p-3">
              <h2 className="font-bold">Already a customer?</h2>
              <a className="text-blue-800" href="#">
                Sign in instead
              </a>
            </div>
          </div>
        </div>

        {/*------------------------Footer------------------ */}

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

export default CreateAcc;
