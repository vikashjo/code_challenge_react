const Navbar = () => {
  return (
      <div className="bg-gray-900 h-16 shadow">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
          <div className="flex justify-between">
            <div className=" my-4"> 
              <p className="text-white font-bold text-xl">Code Challenge </p>
            </div>
            <div className="flex items-ceonter">
              <button className="bg-blue-700 rounded px-2 py-1.5 my-4">Logout</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Navbar