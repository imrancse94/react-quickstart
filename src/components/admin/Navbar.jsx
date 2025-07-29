import { useState } from 'react';

const Navbar = ({ setSidebarOpen }) => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-2 bg-white border-b-4 border-indigo-600">
      <div className="flex items-center">
        <button 
          className="text-gray-500 focus:outline-none lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
      </div>

      <div className="flex items-center">
        
        <div className="relative">
          <p 
            className="cursor-pointer relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80" alt="Your avatar"/>
          </p>

          {dropdownOpen && (
            <>
              <div 
                className="fixed inset-0 z-10 w-full h-full"
                onClick={() => setDropdownOpen(false)}
              ></div>
              <div className="absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Products</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Logout</a>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;