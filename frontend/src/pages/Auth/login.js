import React, { useEffect, useContext } from "react";
import Button from "../../Components/From/Button";
import { signin } from "../../apis/api";
import { useState } from "react";
import { AuthContext } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import { Hourglass } from 'react-loader-spinner'
function Login() {
  const { user, setLogin, logout, isLoading } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize useNavigate
  const [error, setError] = useState(null); // Initialize error with null
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    console.log(formData);
    signin(formData)
      .then((data) => {
        console.log(data);
        if (!data.success) {
          if (data.errors) {
            setError("invalid credentials")
          }
          if (data.message) {
            setError(data.message)
          }
          return;
        }
        setLogin(data.data)
      })
      .catch((err) => console.log("err", err));
  }
  useEffect(() => {
    if (user) {
      navigate("/admin/dashboard");
    } else {
      console.log("User is not logged in");
    }
  }, [user]);

  return (
    <div className=" h-screen flex bg-[#F9ED32] justify-around ">
      <div className=" w-[500px] h-[608px] my-auto text-[96px] text-[#000000] font-sans ">
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
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Email/Username"
              className="border-collapse border border-slate-200 text-center h-[60px] bg-[#D9D9D9] rounded-[10px]"
            />
            <input
              type="password"  // Change type to "password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Password"
              className="border-collapse border border-slate-200 text-center h-[60px] bg-[#D9D9D9] rounded-[10px]"
            />
          </div>
          <div className="flex justify-around  p-5 text-2xl font-sans text-slate-50">
            <Button
              onClick={handleSubmit}
              color="primary"
            >
              Login
            </Button>
          </div>

          <div className="flex justify-center">
            {<Hourglass
              visible={isLoading}
              height="40"
              width="40"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={['#4EA2F0', '#4EA2F0']}
            />
            }
          </div>
          <div className="flex justify-center">
            {error !== null && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
