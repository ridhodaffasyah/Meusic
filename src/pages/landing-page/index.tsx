const LandingPage = () => {
  return (
    <div
      data-testid="landing-page-test"
      className="w-full text-white font-bold justify-between flex flex-col"
    >
      <div className="w-full bg-gradient-to-b from-slate-700 to-black h-[50px] md:h-[200px] py-4 md:py-0">
        <div className="w-full flex justify-between">
          <div className="w-full flex items-center justify-center">
            <h1 className="text-sm md:text-2xl lg:text-4xl w-3/4 text-justify">
              Dengarkan musik dengan mudah dan tanpa batas, cukup masuk dengan
              akun 
              <a
                href="https://www.spotify.com/id-id/premium/"
                target="__blank"
                className="hover:text-green-300 hover:underline hover:cursor-pointer"
              >
                Spotify
              </a>
              kamu!
            </h1>
          </div>
          <img
            data-testid="bg-image"
            src="https://wwwmarketing.scdn.co/static/images/premium/desktop-album-evergreen-1x.png"
            alt="bg"
            className="hidden md:block w-1/2 h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
