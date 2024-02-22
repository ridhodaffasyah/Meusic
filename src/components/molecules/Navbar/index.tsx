const Navbar = () => {
  return (
    <div data-testid="navbar-test" className="w-full py-2 top-0 bg-black">
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center py-4 px-8">
        <img
          src="/assets/meusic-transparent.png"
          alt="meusic-logo"
          className="w-[20%] sm:w-[20%] md:w-[10%] lg:w-[8%]"
        />
        <button className="bg-[#f00b51] w-auto text-[10px] md:text-sm lg:text-base text-white font-600 rounded-sm py-1 md:py-2 px-4 md:px-5 hover:bg-white hover:text-[#f00b51]">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
