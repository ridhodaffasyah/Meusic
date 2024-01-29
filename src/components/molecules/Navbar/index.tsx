const Navbar = () => {
  return (
    <div data-testid="navbar-test" className="w-full py-2">
      <div className="w-full flex justify-between items-center py-4 px-8">
        <img
          src="/assets/meusic-transparent.png"
          alt="meusic-logo"
          className="w-[8%]"
        />
        <button className="bg-white text-black rounded-sm py-2 px-5 hover:bg-zinc-700 hover:text-white">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
