import React from "react";
import Button from "../../Components/Button";
function Login(props) {
  return (
    <div className=" h-screen flex bg-[#4EA2F0] justify-around ">
      <div className=" w-[500px] h-[608px] my-auto text-[96px] text-[#FFFFFF] font-sans ">
        <h1>WELCOME</h1>
        <h1>TO</h1>
        <h1>SMART</h1>
        <h1>PARKING</h1>
      </div>

      <div className="flex justify-center mt-[65px] my-auto bg-[#FEFEFE] rounded-xl">
        <div className="border-collapse border border-slate-200 w-[500px] h-[608px] shadow-2xl rounded-[10px]   ">
          <h1 className="text-center  pt-[150px] text-2xl font-bold ">LOGIN</h1>
          <div className="grid gap-5 p-auto m-8 text-xl">
            <input
              type="text"
              placeholder="Username"
              className="border-collapse border border-slate-200 text-center h-[60px] bg-[#D9D9D9] rounded-[10px]"
            />
            <input
              type="text"
              placeholder="Password"
              className="border-collapse border border-slate-200 text-center h-[60px] bg-[#D9D9D9] rounded-[10px]"
            />
          </div>
          <div className="flex justify-around  p-5 text-2xl font-sans text-slate-50">
            <a href="dashboard"><Button
              buttonname="Submit"
              btnstyle="bg-[#4EA2F0]   p-2 rounded-md hover:bg-gray-600"
            /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
