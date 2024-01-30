const LandingPage = () => {
  return (
    <div
      data-testid="landing-page-test"
      className="w-full text-white font-bold h-full justify-between flex"
    >
      <div className="w-full h-[200px] bg-gradient-to-b from-slate-700 to-black" />
      <div className="w-full absolute h-1/2 top-[calc(0%+88px)] left-0 flex justify-between">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-sm lg:text-4xl w-3/4">
            Dengarkan musik dengan mudah dan tanpa batas, cukup login dengan
            akun Spotify kamu!
          </h1>
        </div>
        <div
          data-testid="bg-image"
          className="w-full h-full bg-top bg-no-repeat bg-[url('https://wwwmarketing.scdn.co/static/images/premium/desktop-album-evergreen-1x.png')]"
        ></div>
      </div>
    </div>
  );
};

export default LandingPage;
