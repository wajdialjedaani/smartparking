import { useState } from "react";
function Navbar() {
  const [admin, setadmin] = useState(false);
  function disBtns() {
    setadmin((preval) => {
      return !preval;
    });
  }

  return (
    <div className="bg-violet-600 p-6">
      <div className="container flex mx-auto justify-between ">
        <div className="text-white font-semibold text-xl ">
          <h1>Smart Parking</h1>
        </div>
        <div className=" space-x-10">
          <a
            href="signup"
            className="text-white hover:text-gray-300   "
          >
            {admin && "Sign In"}
          </a>
          <a
            href="login"
            className="text-white hover:text-gray-300  "
          >
            {admin && "Sign Up"}
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 bg-slate-900 rounded-md px-5 py-3  "
            onClick={disBtns}
          >
            Admin
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
