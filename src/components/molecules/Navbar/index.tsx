const Navbar = () => {
  return (
    <div data-testid="navbar-test" className="w-full py-2 absolute z-2 top-0 bg-black">
      <div className="w-full flex justify-between items-center py-4 px-8">
        <img
          src="/assets/meusic-transparent.png"
          alt="meusic-logo"
          className="w-[15%] md:w-[10%] lg:w-[8%]"
        />
        <button className="bg-[#f00b51] text-white font-600 rounded-sm py-2 px-5 hover:bg-white hover:text-[#f00b51]">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
