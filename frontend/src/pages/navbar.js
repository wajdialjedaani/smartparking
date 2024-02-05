
function Navbar() {
  return (
    <div className="bg-violet-600 p-6 ">
      <div className="container mx-auto flex items-center  justify-between">
        <div className="text-white font-semibold text-xl">Smart Parking</div>
        <div className="space-x-20 flex justify-between end w-1/2 ">
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
          Services
          </a>
          <a href="#" className="text-white hover:text-gray-300">
           About
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Signout
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
