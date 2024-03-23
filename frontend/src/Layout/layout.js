import React, { Children } from "react";
import { AuthContext } from "../contexts/authContext";
import { adminRoutes } from "../Routes";
import { useNavigate } from "react-router-dom";
import Alert from "../Components/Alert";
function Layout({ children }) {
  const navigate = useNavigate();
  const { user, logout } = React.useContext(AuthContext);
  const handleNavigate = (route) => {
    console.log(route);
    navigate(route);
  }

  return (
    <div className="flex  h-screen ">
      <div className="bg-[#F9ED32]  w-1/5 flex flex-col pt-16">
        {adminRoutes.map((route, index) => {
          return (
            <div className="px-4 py-4">
              <button className="w-full border-b-2 border-gray-900 text-xl flex hover:bg-gray-400 font-bold justify-start p-2 "
                onClick={() => { handleNavigate(route.path) }}>
                {route.name}
              </button>
              {route.subRoutes && route.subRoutes.map((subRoute, index) => {
                return (
                  <button className="w-[93%] border-b-2 border-gray-900 text-xl flex hover:bg-gray-400 font-bold justify-start p-2 ml-4 "
                    onClick={() => { handleNavigate(subRoute.path) }}>
                    {subRoute.name}
                  </button>
                );
              }
              )}
            </div>
          );
        }
        )}
      </div>
      <div className="bg-[#FFFFFF]  w-full flex flex-col ">
        <div className="bg-gray-200 h-[70px] flex flex-row-reverse">
          <button className="bg-gray-400  rounded m-2 p-2" onClick={logout}>LogOut</button>
        </div>
        <div className="h-full">
          {children}
          <Alert />
        </div>
        <div className="bg-gray-600 h-[70px]"></div>
      </div>
    </div>
  );
}
export default Layout;
