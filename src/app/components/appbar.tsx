const AppBar: React.FC = () => {
  return (
    <header className="bg-black border-b border-gray-800 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo or Name */}
        <h1 className="text-2xl font-bold text-red-500 font-sans">
   
        </h1>

        {/* Navigation Menu */}
        <nav className="flex space-x-6 text-sm font-sans">
          <a
            href="#home"
            className="hover:text-red-500 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-red-500 transition duration-300"
          >
            About Me
          </a>
          <a
            href="#works"
            className="hover:text-red-500 transition duration-300"
          >
            My Works
          </a>
          <a
            href="#footer"
            className="hover:text-red-500 transition duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default AppBar;